
import * as mathHelpers from './math-helpers';
const shuffle = require("shuffle-array");

/*
Infection state follows this state transition diagram.



   +-------------->  Healthy
   |                    |
   |                    |
   |                    V
   |                  Latent
   |              (Not contagious)
   |  (Duration: MEAN_INFECTION_LATENCY_DURATION)
   |                    |
   |                    |
   |                    V                No
   |      <PROB_ASYMPTOMATIC_INFECTION>-----------+------>      Sick
   |          | Yes                               |         (Contagious)
   |          |                                   |  (Duration: MEAN_INFECTION_SICKNESS_DURATION)
   |          V                                   |             |
   |    Asymptomatic                              |             |
   |    (Contagious)                              |             |
   |  (Duration:                                  |             |
   |  MEAN_INFECTION_ASYMPTOMATIC_DURATION)       |             |
   |      |                                       |             |
   |      |                                       |             |
   |      V                        No             |             |
   |  <PROB_ASYMPTOMATIC_RECOVERY>----------------+             |
   |      | Yes                                                 |
   |      |                                                     |
Yes|      V                                       No            V
  <BOOL_REINFECTION> <------------+---------------------- <PROB_SICK_BECOMES_CRITICAL>
          | No                    |                              | Yes
          |                       |                              |
          V                       |                              V
      Recovered                   |                     Critical (Contagious)
   (Can't be reinfected)          |                  (Duration: MEAN_INFECTION_CRITICAL_DURATION)
                                  |                              |
                                  |                              |
                                  |            No                V
                                  +----------------<PROB_CRITICAL_MORTALITY>
                                                                |
                                                                |
                                                                V
                                                              Dead (Not contagious)


NOTE: Every probability roll is affected by age and underlying health conditions.
Probability constants are listed for otherwise healthy, non-elderly young adults.
Actual probabilities used in each roll are based on an individual's complication risk.
The complication risk (RISK) is represented as a value between 0 and 1, with higher
meaning more risk of a bad outcome at each check. RISK is used as follows in each
probability check:

    PROB_used = 1 - ((1 - PROB_baseline) * (1 - RISK))

Thus, for someone with RISK=0, PROB_used=PROB_baseline, and for someone with RISK=1,
PROB_used=1 (i.e. they are guaranteed to have a bad outcome).

RISK is computed based on age and number of health issues. For sims below age 50,
RISK is linearly interpolated from age 20 to age 50, from values of 0 to
PROB_COMPLICATIONS_AGE_50. For sims above age 50, RISK is linearly interpolated from
age 50 to age 90, from values of PROB_COMPLICATIONS_AGE_50 to PROB_COMPLICATIONS_AGE_90.
RISK is clipped below 0 and above 1. RISK is then magnified by the person's number
of health issues:

    RISK_with_age_and_health_issues =
        1 - ((1 - RISK_age) / (1 + (N_health_issues * HEALTH_ISSUE_VULNERABILITY_MULTIPLIER)))

Thus, for someone with 0 health issues, RISK remains unchanged. For someone with 1
health issue, their risk is magnified by a factor of HEALTH_ISSUE_VULNERABILITY_MULTIPLIER
-- that is, the distance between their risk and a value of 1 is cut down to
1 / HEALTH_ISSUE_VULNERABILITY_MULTIPLIER. For someone with multiple health issues,
their risk approaches 1 even faster.

*/

const INFECTION_STAGES = {
  HEALTHY: {
    name: "Healthy",
    description: "Has not been infected, but can be",
    infectable: true,
    infected: false,
    contagious: false,
    symptomatic: false,
    critical: false
  },
  LATENT: {
    name: "Latent",
    description: "Infected, but not contagious or sick yet",
    infectable: false,
    infected: true,
    contagious: false,
    symptomatic: false,
    critical: false
  },
  ASYMPTOMATIC: {
    name: "Asymptomatic",
    description: "Infected and spreading the virus, but showing no/weak symptoms",
    infectable: false,
    infected: true,
    contagious: true,
    symptomatic: false,
    critical: false
  },
  SICK: {
    name: "Sick",
    description: "Infected and spreading the virus, and showing symptoms",
    infectable: false,
    infected: true,
    contagious: true,
    symptomatic: true,
    critical: false
  },
  CRITICAL: {
    name: "Critical",
    description: "Requires medical intervention for survival",
    infectable: false,
    infected: true,
    contagious: true,
    symptomatic: true,
    critical: true
  },
  DEAD: {
    name: "Dead",
    description: "Patient has succumbed to the illness",
    infectable: false,
    infected: false,
    contagious: false,
    symptomatic: false,
    critical: false
  },
  RECOVERED: {
    name: "Recovered",
    description: "Made full recovery, became immunocompetent, cannot be reinfected",
    infectable: false,
    infected: false,
    contagious: false,
    symptomatic: false,
    critical: true
  }
};
Object.entries(INFECTION_STAGES).forEach( ([key, stage]) => {
  stage.key = key;
});

const INFECTION_STAGES_ORDER = [
  'HEALTHY',
  'RECOVERED',
  'LATENT',
  'ASYMPTOMATIC',
  'SICK',
  'CRITICAL',
  'DEAD'
];

const UNDERLYING_HEALTH_CONDITIONS = [
  'Smoker',
  'Asthma',
  'Heart condition',
  'Diabetic',
  'Immunocompromised'
];


const SEC_PER_HOUR = 60 * 60;
const SEC_PER_DAY = SEC_PER_HOUR * 24;

    // The user's specification of probability of contamination is for a "prolonged"
    // encounter. Let's call it 5 minutes.
const SEC_PROLONGED_CONTACT = 60 * 5;

// The notion of a "location" is much smaller than a cell.
// A cell can be somewhere like 0.001 degrees of latitude/longitude,
// which is gigantic. When the user is entering values for
// PROB_CONTAMINATE, they're thinking a "location" means something
// like a Starbucks. As such, the probability of contaminating a
// single Starbucks is much smaller than the probability of contaminating
// an entire city block. So we need to use a scaling factor that
// accounts for the difference between the size of our cells
// (which we pick for computational efficiency) and the size of our
// user's expectation of a "location".
const CELL_SIZE_MITIGATION_FACTOR = 500;
const CELL_PRECISION = 2;

const epidemiologyModel = {
  INFECTION_STAGES,
  INFECTION_STAGES_ORDER,

  paramsModel: null,
  trajectoryModel: null,

  reset() {
    this.totalSeconds = 0;
    this.simInfo = {};
    this.cellsContaminated = {};

    this.computeInfectedCount();
    this.computeConditionReport();
  },

  get totalDays() {
    return this.totalSeconds / SEC_PER_DAY;
  },

  createSim(simId) {
    const sim = {
      id: simId,

      infectionStage: INFECTION_STAGES.HEALTHY,
      infectionStageBefore: INFECTION_STAGES.HEALTHY,
      infectedOtherSims: new Set(),

      infectedAtSimSeconds: null,
      outcomeAtSimSeconds: null,
      get daysUntilOutcome() {
        if (
          this.infectedAtSimSeconds === null ||
          this.outcomeAtSimSeconds === null
        ) {
          return null;
        }
        return (
          1 +
          Math.floor(
            (this.outcomeAtSimSeconds - this.infectedAtSimSeconds) / SEC_PER_DAY
          )
        );
      },
      get daysInfected() {
        if (this.infectedAtSimSeconds === null) {
          return null;
        }
        if (this.daysUntilOutcome !== null) {
          return this.daysUntilOutcome;
        }
        return (
          1 +
          Math.floor(
            (epidemiologyModel.totalSeconds - this.infectedAtSimSeconds) /
              SEC_PER_DAY
          )
        );
      },

      age: mathHelpers.randomNormalWithCutoff(
        this.paramsModel.value("MEAN_AGE_APP_INSTALLED"),
        this.paramsModel.value("STDEV_AGE_APP_INSTALLED"),
        18,
        85,
        true
      ),

      healthProblems: [],

      magnifyRisk(prob) {
        const probMagnified = 1 - (1 - prob) * (1 - this.complicationRisk);
        return probMagnified;
      },

      isQuarantined: false,
      isAware: false,

      isNotifiedOfExposure: false,
      wantsTesting: false
    };

    // Add health problems.
    while (true) {
      const hasProblem = mathHelpers.pcheck(
        this.paramsModel.value("PROB_HEALTH_ISSUES")
      );
      if (!hasProblem) {
        break;
      }
      const healthProblem = mathHelpers.pick(UNDERLYING_HEALTH_CONDITIONS);
      if (sim.healthProblems.includes(healthProblem)) {
        // We're just repeating ourselves now.
        break;
      }
      sim.healthProblems.push(healthProblem);
    }
    sim.healthProblems.sort();

    sim.complicationRisk = this.computeComplicationsRisk(sim);

    return sim;
  },

  get simInfoList() {
    const keys = [...Object.keys(this.simInfo)];
    keys.sort();
    const retval = keys.map(k => this.simInfo[k]);
    return retval;
  },

  generateSimInfo(simIds) {
    if (!this.paramsModel) {
      throw new Error("paramsModel must be set first.");
    }
    simIds.forEach(simId => {
      this.simInfo[simId] = this.createSim(simId);
    });
  },

  infect(sim, forceStage) {
    if (typeof sim === "string") {
      sim = this.simInfo[sim];
    }
    if (
      !forceStage &&
      (sim.infectionStage.key === "RECOVERED" ||
        sim.infectionStage.key === "DEAD")
    ) {
      // Can't infect the recovered or the dead.
      return;
    }
    sim.infectionStage = forceStage || INFECTION_STAGES.LATENT;
    sim.infectedAtSimSeconds = this.totalSeconds;
  },

  infectPatientZeroes() {
    const numPatientZeros = this.paramsModel.value("NUM_PATIENT_ZEROES");
    let simsToInfect = shuffle([...Object.values(this.simInfo)]).slice(
      0,
      numPatientZeros
    );
    simsToInfect.forEach(sim => {
      this.infect(sim, INFECTION_STAGES.ASYMPTOMATIC);
    });
    return simsToInfect;
  },

  computeComplicationsRisk(sim) {
    const riskAge50 = this.paramsModel.value("PROB_COMPLICATIONS_AGE_50");
    const riskAge90 = this.paramsModel.value("PROB_COMPLICATIONS_AGE_90");

    let baseRisk =
      sim.age < 50
        ? mathHelpers.linearInterpolate(sim.age, 20, 0, 50, riskAge50)
        : mathHelpers.linearInterpolate(sim.age, 50, riskAge50, 90, riskAge90);
    baseRisk = Math.min(baseRisk, 1);
    baseRisk = Math.max(baseRisk, 0);

    // Magnify their risk by their number of health issues.
    const riskMagnificationFactor =
      this.paramsModel.value("PROB_COMPLICATIONS_AGE_90") *
      sim.healthProblems.length;
    const risk = 1 - (1 - baseRisk) / (1 + riskMagnificationFactor);
    return risk;
  },

  computeInfectionStageProgress(sim, seconds) {
    if (
      sim.infectionStage.key === "HEALTHY" ||
      sim.infectionStage.key === "RECOVERED" ||
      sim.infectionStage.key === "DEAD"
    ) {
      // Nothing to do here!
      return;
    } else if (sim.infectionStage.key === "LATENT") {
      const meanDays = this.paramsModel.value(
        "MEAN_INFECTION_LATENCY_DURATION"
      );
      if (mathHelpers.pcheckPoisson(seconds, meanDays * SEC_PER_DAY)) {
        let pWorse =
          1.0 - this.paramsModel.value("PROB_ASYMPTOMATIC_INFECTION");
        pWorse = sim.magnifyRisk(pWorse);
        sim.infectionStage = mathHelpers.pcheck(pWorse)
          ? INFECTION_STAGES.SICK
          : INFECTION_STAGES.ASYMPTOMATIC;
      }
    } else if (sim.infectionStage.key === "ASYMPTOMATIC") {
      const meanDays = this.paramsModel.value(
        "MEAN_INFECTION_ASYMPTOMATIC_DURATION"
      );
      if (mathHelpers.pcheckPoisson(seconds, meanDays * SEC_PER_DAY)) {
        let pWorse = 1 - this.paramsModel.value("PROB_ASYMPTOMATIC_RECOVERY");
        pWorse = sim.magnifyRisk(pWorse);
        sim.infectionStage = mathHelpers.pcheck(pWorse)
          ? INFECTION_STAGES.SICK
          : INFECTION_STAGES.RECOVERED;
      }
    } else if (sim.infectionStage.key === "SICK") {
      const meanDays = this.paramsModel.value(
        "MEAN_INFECTION_SICKNESS_DURATION"
      );
      if (mathHelpers.pcheckPoisson(seconds, meanDays * SEC_PER_DAY)) {
        let pWorse = this.paramsModel.value("PROB_SICK_BECOMES_CRITICAL");
        pWorse = sim.magnifyRisk(pWorse);
        sim.infectionStage = mathHelpers.pcheck(pWorse)
          ? INFECTION_STAGES.CRITICAL
          : INFECTION_STAGES.RECOVERED;
      }
    } else if (sim.infectionStage.key === "CRITICAL") {
      const meanDays = this.paramsModel.value(
        "MEAN_INFECTION_CRITICAL_DURATION"
      );
      if (mathHelpers.pcheckPoisson(seconds, meanDays * SEC_PER_DAY)) {
        let pWorse = this.paramsModel.value("PROB_CRITICAL_MORTALITY");
        pWorse = sim.magnifyRisk(pWorse);
        sim.infectionStage = mathHelpers.pcheck(pWorse)
          ? INFECTION_STAGES.DEAD
          : INFECTION_STAGES.RECOVERED;
      }
    }

    if (
      sim.infectionStage.key === "RECOVERED" &&
      !!this.paramsModel.value("BOOL_REINFECTION")
    ) {
      // Recovery confers no benefit. Flip them back to Healthy,
      // from whence they might be infected again.
      sim.infectionStage = INFECTION_STAGES.HEALTHY;
    }

    if (
      sim.infectionStage.key === "HEALTHY" ||
      sim.infectionStage.key === "RECOVERED" ||
      sim.infectionStage.key === "DEAD"
    ) {
      sim.outcomeAtSimSeconds = this.totalSeconds;
    }
  },

  getCellKey(location) {
    // We're gonna use really ghetto discretization:
    // We'll just truncate the decimal representation of the coordinate,
    // and call that a proximity. It's crude, but effective and sufficient.
    // The lower the cell precision, the coarser our heatmap will be.
    // Also, the greater the distance covered by a location contamination;
    // the values of PROB_CONTAMINATE and PROB_CATCH_FROM_LOCATION should
    // be reduced accordingly.
    const cellkey = `${location.lat.toFixed(CELL_PRECISION)},${location.lng.toFixed(CELL_PRECISION)}`;
    return cellkey;
  },

  getOrCreateContaminationCell(location) {
    const cellkey = this.getCellKey(location);
    let cellRecord = this.cellsContaminated[cellkey];
    if (!cellRecord) {
      cellRecord = {
        key: cellkey,
        location: location,
        contaminationLevel: 0
      };
      // NOTE: This means that the location of the cell is fixed at the first
      // time this method is called for that cell. That's not a bad thing;
      // it keeps the cell grid from looking griddy.
      this.cellsContaminated[cellkey] = cellRecord;
    }
    return cellRecord;
  },

  computeCellContamination(sim, seconds) {
    // If the sim isn't contagious or if they are self-quarantining,
    // then they aren't contaminating anything.
    if (!sim.infectionStage.contagious || sim.isQuarantined) {
      return;
    }

    // If there's no chance of contamination, then no problem!
    if (!this.paramsModel.value("PROB_CONTAMINATE")) {
      return;
    }

    // If we don't have a trajectory model, then we can't know which cells
    // the sim has passed through.
    if (!this.trajectoryModel) {
      return;
    }

    // What's the mean time between contaminations?
    // If the probability of a contamination event in one time interval
    // of SEC_PROLONGED_CONTACT is PROB_CONTAMINATE, then the
    // mean time between contamination events is
    // SEC_PROLONGED_CONTACT / PROB_CONTAMINATE.
    // NOTE: We can probably cache this. It's a small computation
    // so it's okay for now.
    const meanTimeToContaminate =
      SEC_PROLONGED_CONTACT /
      (this.paramsModel.value("PROB_CONTAMINATE") / CELL_SIZE_MITIGATION_FACTOR);

    if (!mathHelpers.pcheckPoisson(seconds, meanTimeToContaminate)) {
      return;
    }

    // Contaminate *all* visited locations, by a fraction of how many
    // locations visited.
    const locations = this.trajectoryModel.locationsVisited[sim.id];
    locations.forEach(location => {
      const cell = this.getOrCreateContaminationCell(location);
      cell.contaminationLevel += 1 / locations.length;
    });
  },

  catchInfectionsFromLocations(sim, seconds) {
    // If the sim isn't infectable or is quarantined, then
    // we have nothing to do.
    if (!sim.infectionStage.infectable || sim.isQuarantined) {
      return;
    }

    // If there's no chance of catching from location, then no problem!
    if (!this.paramsModel.value("PROB_CONTAMINATE")) {
      return;
    }

    // If we don't have a trajectory model, then we can't know which cells
    // the sim has passed through.
    if (!this.trajectoryModel) {
      return;
    }

    const location = this.trajectoryModel.locations[sim.id];
    if (!location) {
      // Sim is not currently on the board.
      return;
    }

    const cellkey = this.getCellKey(location);
    const cell = this.cellsContaminated[cellkey];
    if (!cell || !cell.contaminationLevel) {
      return;
    }

    // Determine whether or not a catch event occurred.
    // This is partly a function of contamination level; the higher the
    // contamination level, the shorter the mean time to catch.
    const meanTimeToCatch =
      SEC_PROLONGED_CONTACT * CELL_SIZE_MITIGATION_FACTOR /
      (cell.contaminationLevel * this.paramsModel.value("PROB_CATCH_FROM_LOCATION"));

    if (!mathHelpers.pcheckPoisson(seconds, meanTimeToCatch)) {
      return;
    }
    this.infect(sim);
  },

  allCatchInfectionsFromInfectees(seconds) {
    // We don't model non-app users, so we have to assume that they are
    // representative of the overall population.
    // We don't want to re-do the computation all the time so we'll
    // cache it.
    const fracContagious = this.fractionUsersContagious;

    // How many people has each sim interacted with in this time period?
    const numPeopleInteractedWith =
      (this.paramsModel.value("NUM_PROLONGED_INTERACTIONS_PER_DAY") * seconds) /
      SEC_PER_DAY;

    // Assume app users are representative of the overall population.
    const numInfecteesInteractedWith = numPeopleInteractedWith * fracContagious;

    const probEachCatch = this.paramsModel.value("PROB_CATCH_FROM_INFECTEE");

    // The probability of catching it from somebody is
    // 1 - the probability of not catching it from everybody.
    const probCatcFromAtLeastOne =
      1 - Math.pow(1 - probEachCatch, numInfecteesInteractedWith);

    Object.values(this.simInfo).forEach(sim => {
      // If the sim isn't infectable or is quarantined, then
      // we have nothing to do.
      if (!sim.infectionStage.infectable || sim.isQuarantined) {
        return;
      }
      if (!mathHelpers.pcheck(probCatcFromAtLeastOne)) {
        return;
      }
      this.infect(sim);
    });
  },

  decayContaminations(seconds) {
    const meanDur = this.paramsModel.value("MEAN_VIRUS_SURFACE_LONGEVITY") * SEC_PER_DAY;
    const cellKeysToRemove = [];
    Object.entries(this.cellsContaminated).forEach( ([cellkey, cell]) => {
      // Instead of making this stochastic, treat the mean virus surface
      // longevity like a half-life.
      const divisor = Math.pow(2, seconds / meanDur);
      cell.contaminationLevel /= divisor;

      if (cell.contaminationLevel < 0.05) {
        // It's gotta be removed at some low threshold.
        cellKeysToRemove.push(cellkey);
      }
    });
    cellKeysToRemove.forEach(cellkey => {
      delete this.cellsContaminated[cellkey];
    });
  },

  allHandleExposureNotifications(seconds) {
    Object.values(this.simInfo).forEach(sim => {
      if (!sim.isNotifiedOfExposure) {
        return;
      }
      // They'll handle it either way. Clear the notification.
      sim.isNotifiedOfExposure = false;

      // An exposed sim may choose to self-quarantine.
      if (mathHelpers.pcheck(this.paramsModel.value("PROB_EXPOSED_SELF_QUARANTINE"))) {
        console.log(`${sim.id} is self-quarantining from exposure`);
        sim.isQuarantined = true;
      }
      // Independently, a sim that's been exposed may choose to get tested.
      if (mathHelpers.pcheck(this.paramsModel.value("PROB_EXPOSED_SEEK_DIAGNOSIS"))) {
        // Whether or not they *get* the test depends on whether or not they're
        // exhibiting symptoms.
        let getsDiagnosis = false;
        if (sim.infectionStage.symptomatic) {
          getsDiagnosis = mathHelpers.pcheck(this.paramsModel.value("PROB_RECEIVE_TEST_WHEN_SICK"));
        } else {
          getsDiagnosis = mathHelpers.pcheck(this.paramsModel.value("PROB_RECEIVE_TEST_WHEN_ASYMPTOMATIC"));
        }

        if (getsDiagnosis && sim.infectionStage.infected) {
          sim.isAware = true;
          // TODO: They should send notifications that they've been infected.
          if (mathHelpers.pcheck(this.paramsModel.value("PROB_INFECTED_SELF_QUARANTINE"))) {
            sim.isQuarantined = true;
          }
        }
      }
    });
  },

  allApplyAcquiredStates(seconds) {
    Object.values(this.simInfo).forEach(sim => {
      const infectionStageBefore = sim.infectionStageBefore;
      if (infectionStageBefore === sim.infectionStage) {
        // Infection stage not acquired.
        return;
      }
      sim.infectionStageBefore = sim.infectionStage;

      let awareInfected = false;

      // Sim just entered a new infection stage.
      if (sim.infectionStage.key === "CRITICAL") {
        // Critical sims don't have a choice. They're confined to the hospital.
        // They're also given a test, which reveals their infection state.
        sim.isQuarantined = true;
        awareInfected = true;
      }
      else if (sim.infectionStage.key === "SICK") {
        // Newly sick people roll once to see if they will self-quarantine
        // just because they are exhibiting symptoms.
        if (mathHelpers.pcheck(this.paramsModel.value("PROB_SICK_SELF_QUARANTINE"))) {
          sim.isQuarantined = true;
        }
        // Newly sick people may go get tested. If they are positive, they
        // may choose to self-quarantine.
        if (mathHelpers.pcheck(this.paramsModel.value("PROB_SICK_SEEK_DIAGNOSIS")) &&
            mathHelpers.pcheck(this.paramsModel.value("PROB_RECEIVE_TEST_WHEN_SICK"))) {
          awareInfected = true;
          // Now that they're aware they're infected, they may choose to self-quarantine,
          // but they might not.
          if (mathHelpers.pcheck(this.paramsModel.value("PROB_INFECTED_SELF_QUARANTINE"))) {
            sim.isQuarantined = true;
          }
        }
      }
      else if (sim.infectionStage.key === "RECOVERED" ||
          sim.infectionStage.key === "HEALTHY") {
        // Newly healthy/recovered people will bring themselves out of quarantine.
        sim.isQuarantined = false;
        sim.isAware = false;
      }

      if (awareInfected && !self.isAware) {
        // They weren't aware that they were infected, but they are now.
        // They may choose to send an app notification.
        sim.isAware = true;
        if (mathHelpers.pcheck(this.paramsModel.value("PROB_INFECTED_NOTIFY_APP"))) {
          this.sendExposureNotification(seconds);
        }
      }
    });
  },

  sendExposureNotification(seconds) {
    // A sim is sending an exposure notification.
    // We can compute stochastically how likely any other sim is to receive it.

    // Of course, if the probability of the app being installed is zero, then don't bother.
    const probAppInstalled = this.paramsModel.value('PROB_APP_INSTALLED');
    if (!probAppInstalled) {
      return;
    }

    // We know the average number of personal interactions per day. Some fraction of
    // those will be recorded by the app. We also know how far back the app
    // records interactions.
    // Scale it by prolonged period, to permit time lapses to be equivalent.
    const numRecordedInteractions =
      this.paramsModel.value("NUM_PROLONGED_INTERACTIONS_PER_DAY") *
      this.paramsModel.value("PROB_APP_RECORD_CONTACT") *
      this.paramsModel.value("APP_INFECTION_NOTIFICATION_BACK_DAYS") *
      seconds / (SEC_PROLONGED_CONTACT);


    // We know the percentage of people who have the app installed (sort of),
    // so, assuming app users are evenly distributed through the population,
    // we know how many of these direct interactions will have been with
    // fellow app users (we won't model indirect tracking for now).
    const numInteractionsWithAppUsers = numRecordedInteractions * probAppInstalled;
    console.log(numInteractionsWithAppUsers)

    // Only sims that are active can be out and about in the public so as to
    // receive notifications.
    const simsActive = [...Object.values(this.simInfo)].filter(sim => {
      if (sim.infectionStage.key === 'DEAD' || sim.isQuarantined) {
        return false;
      }
      return true;
    });
    shuffle(simsActive);

    const simsNotified = simsActive.slice(0, numInteractionsWithAppUsers);
    simsNotified.forEach(sim => {
      sim.isNotifiedOfExposure = true;
    })
  },

  get heatmapPoints() {
    const arr = [...Object.values(this.cellsContaminated)].map(cell => ({
      location: new google.maps.LatLng(cell.location.lat, cell.location.lng),
      weight: cell.contaminationLevel
    }));
    return arr;
  },

  get fractionUsersContagious() {
    let numUsersContagious = 0;
    const simInfos = [...Object.values(this.simInfo)];
    simInfos.forEach(sim => {
      if (sim.infectionStage.contagious && !sim.isQuarantined) {
        numUsersContagious++;
      }
    });
    return numUsersContagious / simInfos.length;
  },

  advanceTime(seconds) {
    this.totalSeconds += seconds;
    Object.values(this.simInfo).forEach(sim => {
      this.computeInfectionStageProgress(sim, seconds);
      this.computeCellContamination(sim, seconds);

      this.catchInfectionsFromLocations(sim, seconds);
    });

    this.allCatchInfectionsFromInfectees(seconds);
    this.decayContaminations(seconds);

    this.allApplyAcquiredStates(seconds);
    this.allHandleExposureNotifications(seconds);

    this.computeInfectedCount();
    this.computeConditionReport();
  },

  computeInfectedCount() {
    const retval = {
      healthy: 0,
      immune: 0,
      infected: 0,
      quarantined: 0,
      dead: 0,
    };
    Object.values(this.simInfo).forEach(sim => {
      if (sim.infectionStage.key === 'DEAD') {
        retval.dead++;
        return;
      }

      if (sim.infectionStage.infected) {
        retval.infected++;
      }
      else {
        retval.healthy++;
        if (!sim.infectionStage.infectable) {
          retval.immune++;
        }
      }

      if (sim.isQuarantined) {
        retval.quarantined++;
      }
    });
    this.infectedCount = retval;
  },

  computeConditionReport() {
    const sims = [...Object.values(this.simInfo)];
    const report = INFECTION_STAGES_ORDER.map(k => {
      let numSimsWithCondition = 0;
      sims.forEach(sim => {
        if (sim.infectionStage.key === k) {
          numSimsWithCondition++;
        }
      });
      return {
        key: k,
        name: INFECTION_STAGES[k].name,
        popfrac: numSimsWithCondition / sims.length
      };
    });
    this.conditionReport = report;
  }
};

epidemiologyModel.reset();

export default epidemiologyModel;

