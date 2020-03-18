// The trajectory model is responsible for loading, storing,
// and managing Geolife trajectories, via a JSON format that
// has been processed by the corresponding Jupyter Notebook.

// In theory this should be done through a Vuex store,
// so as to be available to all components. Unfortunately,
// CPU and memory are at a premium, and it appears that
// Vuex incurs enough of a slowdown to seriously
// interfere with the animation.

const trajectoryModel = {
  reset() {
    this.isDataLoaded = false;
    this.isDataLoading = false;
    this.errorMsg = null;

    this.dataLoadTimeStart = null;
    this.dataLoadTimeEnd = null;

    this.trajectoryData = null;

    this.currentTrajSeeks = {};
    this.locations = {};
    this.locationsVisited = {};

    this.seekUnixtime = 0;
  },

  get durationDataLoad() {
    if (!this.isDataLoaded) {
      return null;
    }
    return this.dataLoadTimeEnd - this.dataLoadTimeStart;
  },

  get trajectories() {
    if (!this.trajectoryData || !this.trajectoryData.trajectories) {
      return [];
    }
    return this.trajectoryData.trajectories;
  },

  get trajectoryIds() {
    return [...Object.keys(this.trajectories)];
  },

  get gridparams() {
    if (!this.trajectoryData || !this.trajectoryData.gridparams) {
      return {};
    }
    return this.trajectoryData.gridparams;
  },

  markDataLoadStart() {
    this.dataLoadTimeStart = new Date();
    this.dataLoadTimeEnd = null;
    this.isDataLoading = true;
    this.isDataLoaded = false;
    this.errorMsg = null;
  },

  markDataLoadComplete(error) {
    this.isDataLoading = false;
    if (error) {
      console.log(error);
      this.dataLoadTimeEnd = null;
      this.isDataLoaded = false;
      this.errorMsg = error.message || JSON.stringify(error);
    } else {
      this.dataLoadTimeEnd = new Date();
      this.isDataLoaded = true;
      this.errorMsg = null;
    }
  },

  advanceTime(seconds) {
    Object.entries(this.trajectories).forEach(([trajId, trajectory]) => {
      const currentSeek = this.currentTrajSeeks[trajId];
      let locationsVisitedThisGuy = [];

      let secondsRemaining = seconds;
      while (secondsRemaining > 0) {
        const secondsToSpendInCurrentRecord = Math.min(
          secondsRemaining,
          currentSeek.secondsRequired - currentSeek.secondsConsumed
        );

        currentSeek.secondsConsumed += secondsToSpendInCurrentRecord;
        if (currentSeek.secondsConsumed >= currentSeek.secondsRequired) {
          currentSeek.index++;
          currentSeek.index %= trajectory.length;
          currentSeek.secondsConsumed = 0;
          currentSeek.secondsRequired = trajectory[currentSeek.index][2];

          const currentRecord = trajectory[currentSeek.index];
          let newLocation = {
            lat: currentRecord[0],
            lng: currentRecord[1]
          };
          locationsVisitedThisGuy.unshift(newLocation);
        }

        secondsRemaining -= secondsToSpendInCurrentRecord;
      }

      if (locationsVisitedThisGuy.length) {
        this.locations[trajId] = locationsVisitedThisGuy[0];
      } else {
        locationsVisitedThisGuy = [this.locations[trajId]];
      }
      this.locationsVisited[trajId] = locationsVisitedThisGuy;
    });
  },

  load($axios, options) {
    this.markDataLoadStart();

    const urlpath = "data/trajectories_ghosts.json";
    const p = $axios
      .get(urlpath)
      .then(data => {
        const trajectoryData = data.data;

        if (options) {
          if (options.dbgOnlyKeepFirstNTrajectories) {
            const keysToKeep = [
              ...Object.keys(trajectoryData.trajectories)
            ].slice(0, options.dbgOnlyKeepFirstNTrajectories);
            const trajSlice = {};
            keysToKeep.forEach(k => {
              trajSlice[k] = trajectoryData.trajectories[k];
            });
            trajectoryData.trajectories = trajSlice;
          }
        }

        // Convert the lat/long from fixed-point integer to floats.
        const pow10 = Math.pow(
          10,
          trajectoryData.gridparams["fixed-point-precision"]
        );
        Object.values(trajectoryData.trajectories).forEach(trajectory => {
          trajectory.forEach(trajRecord => {
            trajRecord[0] /= pow10;
            trajRecord[1] /= pow10;
          });
        });

        this.currentTrajSeeks = {};
        this.locations = {};
        Object.entries(trajectoryData.trajectories).forEach(
          ([trajId, trajectory]) => {
            const firstRecord = trajectory[0];
            this.currentTrajSeeks[trajId] = {
              index: 0,
              secondsConsumed: 0,
              secondsRequired: firstRecord[2]
            };
            const currentLocation = {
              lat: firstRecord[0],
              lng: firstRecord[1]
            };
            this.locations[trajId] = currentLocation;
          }
        );

        this.trajectoryData = trajectoryData;
        this.markDataLoadComplete();
      })
      .catch(err => {
        this.markDataLoadComplete(err);
      });

    return p;
  },

  softReset() {
    this.currentTrajSeeks = {};
    this.locations = {};
    Object.entries(this.trajectories).forEach(
      ([trajId, trajectory]) => {
        const firstRecord = trajectory[0];
        this.currentTrajSeeks[trajId] = {
          index: 0,
          secondsConsumed: 0,
          secondsRequired: firstRecord[2]
        };
        const currentLocation = {
          lat: firstRecord[0],
          lng: firstRecord[1]
        };
        this.locations[trajId] = currentLocation;
      }
    );
  }
};

trajectoryModel.reset();

export default trajectoryModel;
