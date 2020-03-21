<template>
  <v-layout column class="covid19heatmap">
    <v-row>
      <v-col cols="12">
        <v-tabs class="map-container-tabber"
            centered
            color="primary">
          <v-tab>
            Map
          </v-tab>
          <v-tab-item :transition="false" :reverse-transition="false">
            <div class="map-container">
              <v-progress-circular
                indeterminate
                color="primary"
                v-if="!trajectoryModel.isDataLoaded"
                class="circular-loader"
                size="55"
                width="5"
              ></v-progress-circular>
              <GmapMap
                ref="mapRef"
                v-if="trajectoryModel.isDataLoaded"
                :center="mapInitCenter"
                :zoom="11"
                map-type-id="roadmap"
                style="width: 100%; height: 100%"
              >
              </GmapMap>
            </div>
          </v-tab-item>

          <v-tab>
            Data
          </v-tab>
          <v-tab-item :transition="false" :reverse-transition="false">
            <v-row>
              <v-container>
                <v-data-table
                  class="siminfotable"
                  :headers="simInfoTableHeaders"
                  :items="epidemiologyModel.simInfoList"
                  :items-per-page="25"
                  :dense="true"
                  :footer-props="simInfoTableFooterProps"
                  :options="{ sortBy: ['daysInfected'], sortDesc: [true] }"
                >
                  <template v-slot:item.id="{ item }">
                    <span
                      :class="
                        `siminfo-infectionstage-${item.infectionStage.name.toLowerCase()}`
                      "
                    >
                      {{ item.id }}
                    </span>
                  </template>
                  <template v-slot:item.complicationRisk="{ item }">
                    <span
                      class="siminfo-complicationrisk"
                      :style="{
                        color: gradientGreenYellowRed(item.complicationRisk)
                      }"
                    >
                      {{ Math.floor(item.complicationRisk * 100) }}%
                    </span>
                  </template>
                  <template v-slot:item.infectionStage.name="{ item }">
                    <span
                      :class="
                        `siminfo-infectionstage-${item.infectionStage.name.toLowerCase()}`
                      "
                    >
                      {{ item.infectionStage.name }}
                    </span>
                  </template>
                  <template v-slot:item.infectionStage.infected="{ item }">
                    <span
                      v-if="item.infectionStage.infected"
                      class="siminfo-infected"
                    >
                      <v-icon>mdi-biohazard</v-icon>
                    </span>
                  </template>
                  <template v-slot:item.infectionStage.contagious="{ item }">
                    <span
                      v-if="item.infectionStage.contagious"
                      class="siminfo-contagious"
                    >
                      <v-icon>mdi-account-tie-voice</v-icon>
                    </span>
                  </template>
                  <template v-slot:item.infectionStage.symptomatic="{ item }">
                    <span
                      v-if="item.infectionStage.symptomatic"
                      class="siminfo-symptomatic"
                    >
                      <v-icon>mdi-bed</v-icon>
                    </span>
                  </template>
                  <template v-slot:item.isQuarantined="{ item }">
                    <span v-if="item.isQuarantined" class="siminfo-quarantined">
                      <v-icon>mdi-account-off</v-icon>
                    </span>
                  </template>
                  <template v-slot:item.isAware="{ item }">
                    <span v-if="item.isAware" class="siminfo-aware">
                      <v-icon>mdi-alert-decagram</v-icon>
                    </span>
                  </template>
                </v-data-table>
              </v-container>
            </v-row>
          </v-tab-item>

          <v-tab>
            Plot
          </v-tab>
          <v-tab-item :transition="false" :reverse-transition="false">
            <v-row>
              <v-container>
                <v-row>
                  <v-col cols="12" md="6" lg="3">
                    <v-data-table
                      class="conditionreport-table"
                      :headers="conditionReportHeaders"
                      :items="epidemiologyModel.conditionReport"
                      :items-per-page="25"
                      :dense="true"
                    >
                      <template v-slot:item.popfrac="{ item }">
                        <span> {{ Math.floor(item.popfrac * 100) }}% </span>
                      </template>
                    </v-data-table>
                  </v-col>
                  <v-col style="position:relative; min-height:25em;">
                    <div class="plotlyholder">
                      <vue-plotly
                        ref="plotlygraph"
                        v-if="epidemiologyModel.totalSeconds > 0"
                        :data="plotlydata"
                        :layout="plotlylayout"
                        :autoResize="true"
                        :display-mode-bar="false"
                      ></vue-plotly>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-row>
          </v-tab-item>
        </v-tabs>
      </v-col>
      <v-col cols="12" class="btns-and-info py-0">
        <v-row class="seektime" v-if="trajectoryModel.isDataLoaded">
          <v-col
            cols="12"
            sm="6"
            class="health-ticker py-0 d-flex flex-column justify-center"
          >
            <div>
              <strong>
                Day {{ Math.floor(currentTimeDayCount) }}:
                {{ epidemiologyModel.infectedCount.healthy }} healthy,
                {{ epidemiologyModel.infectedCount.infected }} infected,
                {{ epidemiologyModel.infectedCount.dead }} dead.
                {{ epidemiologyModel.infectedCount.quarantined }}
                quarantined.
              </strong>
            </div>
            <div>
              {{ currentTimeDateObj }}
            </div>
          </v-col>
          <v-col class="py-0">
            <v-row class="justify-center">
              <v-slider
                class="slider-minilabeled"
                hint="Playback speed"
                :persistent-hint="true"
                v-model="timeIncrement"
                :min="30 * 60"
                :max="6 * 60 * 60"
                :dense="true"
                track-color="secondaryLight"
              >
              </v-slider>
            </v-row>
            <v-row class="justify-center py-4">
              <v-btn
                fab
                x-small
                class="mx-1"
                color="primary"
                v-if="!isPlaying"
                @click="resetWithData()"
              >
                <v-icon>mdi-cached</v-icon>
              </v-btn>
              <v-btn
                fab
                x-small
                class="mx-1"
                color="primary"
                v-if="!isPlaying"
                @click="
                  isPlaying = true;
                  play();
                "
              >
                <a
                  id="slide-here-on-info-click"
                  style="position:absolute; top:-80px;"
                ></a>
                <v-icon>mdi-play</v-icon>
              </v-btn>
              <v-btn
                fab
                x-small
                class="mx-1"
                color="primary"
                v-if="!isPlaying"
                @click="advanceTime()"
              >
                <v-icon>mdi-play-pause</v-icon>
              </v-btn>
              <v-btn
                fab
                x-small
                class="mx-1"
                color="primary"
                v-if="isPlaying"
                @click="isPlaying = false"
              >
                <v-icon>mdi-stop</v-icon>
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="py-0" cols="12">
        <v-container
          class="param-sliders py-0"
          v-if="trajectoryModel.isDataLoaded"
        >
          <v-row>
            <v-tabs centered icons-and-text show-arrows>
              <v-tab
                v-for="(group, iGroup) in paramsModel.groups"
                :key="iGroup"
                class="param-slider-tab"
              >
                <span class="d-none d-sm-flex"
                >
                  {{ group.name }}
                </span>
                <v-icon>{{ group.icon }}</v-icon>
              </v-tab>
              <v-tab-item
                v-for="(group, iGroup) in paramsModel.groups"
                :key="iGroup"
                class="param-slider-tab-content"
                :transition="false"
                :reverse-transition="false"
              >
                <v-container>
                  <v-row class="param-slider-group-description">
                    <div class="param-slider-group-name d-block d-sm-none">
                      {{ group.name }}
                    </div>
                    <div class="param-slider-group-desc">
                      {{ group.description }}
                    </div>
                  </v-row>
                  <v-row
                    v-for="(param, iParam) in group.params"
                    :key="iParam"
                    class="param-slider-row"
                  >
                    <v-btn
                      icon
                      color="info"
                      x-small
                      @click="
                        infoParam === param
                          ? (infoParam = null)
                          : (infoParam = param)
                      "
                      class="param-info-button"
                    >
                      <v-icon v-if="infoParam === param"
                        >mdi-information-outline</v-icon
                      >
                      <v-icon v-else>mdi-information</v-icon>
                    </v-btn>

                    <v-slider
                      class="slider-minilabeled"
                      :hint="param.name"
                      v-model="param.value"
                      :min="param.range_min"
                      :max="param.range_max"
                      :persistent-hint="true"
                      :dense="true"
                      :thumb-label="true"
                      track-color="secondaryLight"
                      :step="
                        param.valuetype === 'integer'
                          ? 1
                          : (param.range_max - param.range_min) / 200
                      "
                    ></v-slider>

                    <v-alert
                      type="info"
                      :dense="true"
                      :icon="false"
                      v-if="infoParam === param"
                      class="param-slider-description"
                    >
                      <p>
                        {{ param.description }}
                      </p>
                      <p>
                        Model variable name: {{ param.key }}<br />
                        Range: {{ param.range_min }} - {{ param.range_max
                        }}<br />
                        Default value: {{ param.default }}
                      </p>
                      <p>
                        Current value: <strong>{{ param.value }}</strong>
                      </p>
                    </v-alert>
                  </v-row>
                </v-container>
              </v-tab-item>
            </v-tabs>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="12" md="8" lg="6">
        <v-alert type="warning" :dismissible="true">
          <p>
            NOTE: This is simulated data representing a theoretical
            epidemiological model. This simulation does not contain any actual
            COVID-19 transmission data nor the exact movements of any real
            individuals, and should not be used in place of studying actual
            real-world infection cases.
          </p>
        </v-alert>
        <v-alert type="error" v-if="trajectoryModel.errorMsg">
          {{ trajectoryModel.errorMsg }}
        </v-alert>
      </v-col>
    </v-row>
  </v-layout>
</template>

<style lang="scss">
.covid19heatmap {
  .circular-loader {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .v-messages__message {
    color: var(--v-secondary-base);
  }
  .v-tab:not(.v-tab--active) > .v-icon {
    color: var(--v-secondary-base) !important;
  }
  .v-tabs .v-window {
    border: 1px solid var(--v-secondaryLight-base);
    border-radius: 1ex;
    overflow: hidden;
  }
  .v-tabs--icons-and-text > .v-tabs-bar {
    height: unset;
    padding-left: 2em;
    padding-right: 2em;
  }

  .map-container {
    background: #ccc;
    border: 1px solid #444;
    border-radius: 1.1ex;
    overflow: hidden; // Otherwise the rectangular Google Map object clips the corners.
    width: 100%;
    height: calc(100vh - 35em);
    min-height: 20em;
    position: relative;

    .v-alert {
      position: absolute;
      top: 4em;
      left: 1em;
      width: calc(100% - 2em);
      opacity: 0.9;
      z-index: 1;
    }
  }

  .seektime {
    font-family: monospace;
    font-size: 80%;
    line-height: 1.25;
    margin-bottom: 1ex;
    padding-left: 1em;
    justify-content: center;
  }

  .v-tab {
    font-size: 80%;
  }

  .param-sliders {
    position: relative;

    .param-slider-group-description {
      color: var(--v-primary-base);
      display: block;
    }

    .param-slider-group-name {
      font-style: normal;
      font-variant: small-caps;
      font-weight: bold;
      font-size: 130%;
    }

    .param-slider-tab {
      padding-top: 1ex;
      padding-bottom: 1ex;
      min-width: 4em;
      flex: 1;
    }

    .param-slider-tab-content {
      overflow-y: auto;
      overflow-x: hidden;
      height: 40vh;
      max-height: 16em;
    }

    .param-slider-group-description {
      width: 75%;
      margin: auto;
      margin-bottom: 0.5ex;
      font-style: italic;

      @media (max-width: 600px) {
        font-size: 80%;
        width: unset;
      }
    }

    .param-slider-row {
      justify-content: center;

      .param-info-button {
        margin-top: 1em;
        margin-left: 5%;

        @media (max-width: 960px) {
          margin-left: 0;
        }
      }
      .v-input__slider {
        cursor: pointer;
      }

      .param-slider-description {
        font-size: 80%;
        margin: 0 15% 0 20%;
        padding: 1ex;
        width: 100%;
      }
    }
  }

  .slider-minilabeled {
    height: 1em;
    margin-top: 1em;
    margin-bottom: 1ex;
    max-width: 75%;

    .v-messages {
      top: -6.5ex;
      left: 2ex;
    }
  }

  .siminfotable,
  .conditionreport-table {
    .text-end {
      text-align: right !important;
    }
    .text-center {
      text-align: center !important;
    }

    .siminfo-complicationrisk {
      margin-left: auto;
    }

    .siminfo-infectionstage-healthy {
      color: #00aa00;
    }
    .siminfo-infectionstage-recovered {
      color: #00aa00;
      font-weight: bold;
    }
    .siminfo-infectionstage-latent {
      color: #aaaa00;
      font-weight: bold;
    }
    .siminfo-infectionstage-asymptomatic {
      color: #ffaa00;
      font-weight: bold;
    }
    .siminfo-infectionstage-sick {
      color: #ff4400;
      font-weight: bold;
    }
    .siminfo-infectionstage-critical {
      color: #cc0000;
      font-weight: bold;
    }
    .siminfo-infectionstage-dead {
      color: #000000;
      font-weight: bold;
    }
  }

  .plotlyholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

html {
  scroll-behavior: smooth;
}

.v-tabs-bar--is-mobile {
  width: 100%;
  margin: 0;
}
.v-slide-group__prev--disabled {
  display: none !important;
}
</style>

<script>
import trajectoryModel from "~/model/trajectory";
import paramsModel from "~/model/params";
import epidemiologyModel from "~/model/epidemiology";

import { throttle, debounce } from "throttle-debounce";

const colorInterpolate = require("color-interpolate");

epidemiologyModel.paramsModel = paramsModel;
epidemiologyModel.trajectoryModel = trajectoryModel;

const INFECTION_STAGE_COLORS = {
  HEALTHY: "#00aa00",
  RECOVERED: "#00aa00",
  LATENT: "#aaaa00",
  ASYMPTOMATIC: "#ffaa00",
  SICK: "#ff4400",
  CRITICAL: "#cc0000",
  DEAD: "#000000"
};

export default {
  components: {},

  data() {
    return {
      infoParam: null,

      paramsModel,
      trajectoryModel,
      epidemiologyModel,

      googleMapObject: null,

      currentTime: 0,
      timeIncrement: 2 * 60 * 60, // Advance by this many seconds at a time
      isPlaying: false,

      mapMarkersByTrajId: {},
      heatmapObj: null,

      mapInitCenter: { lat: 39.95, lng: 116.4 },

      simInfoTableHeaders: [
        {
          text: "Sim ID",
          align: "start",
          value: "id"
        },
        { text: "Age", value: "age" },
        { text: "Health Issues", value: "healthProblems" },
        { text: "Compl. Risk", value: "complicationRisk", align: "end" },
        { text: "Infection Stage", value: "infectionStage.name" },
        { text: "Infected", value: "infectionStage.infected", align: "center" },
        {
          text: "Contagious",
          value: "infectionStage.contagious",
          align: "center"
        },
        {
          text: "Symptomatic",
          value: "infectionStage.symptomatic",
          align: "center"
        },
        { text: "Days Infected", value: "daysInfected", align: "end" },
        { text: "Days to Outcome", value: "daysUntilOutcome", align: "end" },
        { text: "Quarantine", value: "isQuarantined", align: "center" },
        { text: "Aware", value: "isAware", align: "center" }
      ],
      simInfoTableFooterProps: {
        "items-per-page-options": [10, 25, 50, -1]
      },
      gradientGreenYellowRed: colorInterpolate([
        "#00aa00",
        "#aaaa00",
        "#aa4400",
        "#aa0000"
      ]),

      conditionReportHeaders: [
        { text: "Condition", value: "name" },
        { text: "Population", value: "popfrac", align: "end" }
      ],

      plotlydata: [],
      plotlylayout: {
        title: "Infection stage prevalence over time",
        xaxis: { range: [0, 90], title: "Days" },
        yaxis: { range: [0, 1], title: "Population %" }
      }
    };
  },

  computed: {
    currentTimeDateObj() {
      const d = new Date("2007-07-15");
      return new Date(this.currentTime * 1000 + d.getTime());
    },
    currentTimeDayCount() {
      return this.currentTime / (24 * 60 * 60);
    }
  },

  methods: {
    reset() {
      this.currentTime = 0;
      this.isPlaying = false;

      this.mapMarkersByTrajId = {};
      this.heatmapObj = null;

      this.currentTime = 0;
      this.mapInitCenter = { lat: 39.95, lng: 116.4 };

      this.plotlydata = [];

      trajectoryModel.reset();
      epidemiologyModel.reset();
    },

    resetWithData() {
      this.currentTime = 0;
      epidemiologyModel.reset();
      trajectoryModel.softReset();
      epidemiologyModel.generateSimInfo(trajectoryModel.trajectoryIds);
      epidemiologyModel.infectPatientZeroes();
      epidemiologyModel.advanceTime(1);

      this.mapMarkersByTrajId = {};

      if (this.heatmapObj) {
        this.heatmapObj.setData([]);
      }

      this.plotlydata = epidemiologyModel.INFECTION_STAGES_ORDER.map(k => {
        const infectionStage = epidemiologyModel.INFECTION_STAGES[k];
        return {
          type: "scatter",
          x: [],
          y: [],
          mode: "lines",
          name: infectionStage.name,
          infectionStageKey: k,
          line: {
            width: 2,
            color: INFECTION_STAGE_COLORS[k]
          }
        };
      });
    },

    loadData() {
      this.reset();
      trajectoryModel
        .load(this.$axios, {
          dbgOnlyKeepFirstNTrajectories: false
        })
        .then(() => {
          this.resetWithData();

          // We have to do this silly timeout trick because we can't
          // grab a reference to the mapRef element because it doesn't
          // exist yet because the v-if hasn't processed yet.
          // And we can't make it exist before the v-if because there's
          // a bug in the component that throws an annoying DOM error.
          this.$nextTick(() => {
            this.$refs.mapRef.$mapPromise.then(map => {
              this.googleMapObject = map;
              this.createHeatmap();

              this.updateMapThrottled();
              this.updatePlotlyThrottled();
            });
          }, 0);
        });
    },

    createHeatmap() {
      this.heatmapObj = new google.maps.visualization.HeatmapLayer({
        data: [],
        dissipating: true,
        radius: 30,
        opacity: 0.9,
        maxIntensity: 30,
        gradient: [
          "rgba(255, 255, 0, 0)",
          "rgba(255, 255, 0, 1)",
          "rgba(255, 0, 0, 1)",
          "rgba(180, 0, 0, 1)",
          "rgba(150, 0, 0, 1)",
          "rgba(80, 0, 0, 1)"
        ]
      });
      this.heatmapObj.setMap(this.googleMapObject);
    },

    getOrCreateMapMarker(trajId) {
      let mapMarker = this.mapMarkersByTrajId[trajId];
      if (!mapMarker) {
        mapMarker = new google.maps.Marker({
          position: null,
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            scale: 3
          },
          draggable: false,
          title: `User ${trajId}`,
          map: this.googleMapObject
        });
        this.mapMarkersByTrajId[trajId] = mapMarker;
      }
      return mapMarker;
    },

    updateMarkers() {
      if (!this.googleMapObject) {
        return;
      }

      // We can't necessarily use *all* of the locations, because that could
      // be far too many points to show on the map at any one time.
      // Google Maps could end up eating an insane amount of CPU. Just show
      // the first n, and computationally track the rest without actually
      // showing them on the map.
      // We'll slowly rotate through the ones we actually show.
      // We have to remember to remove the no-longer-used markers, though!
      const trajLocations = trajectoryModel.locations;
      const numLocTotal = Object.keys(trajLocations).length;

      const nLocations = 7;
      const secNextFirst = 60 * 60 * 24;
      const nFirst =
        Math.floor(this.currentTime / secNextFirst) %
        Math.max(1, numLocTotal - nLocations);
      // We don't have any logic to restart from the beginning of the list.
      // At the end of all rotations, we just "flip" back to the beginning
      // all at once.

      const mapMarkersToRemove = new Set([
        ...Object.keys(this.mapMarkersByTrajId)
      ]);

      const locationsToUse = Object.entries(trajLocations).slice(
        nFirst,
        nFirst + nLocations
      );

      locationsToUse.forEach(([trajId, location]) => {
        const mapMarker = this.getOrCreateMapMarker(trajId);
        mapMarker.setPosition(
          new google.maps.LatLng(location.lat, location.lng)
        );

        // This map marker is still in use. Don't remove it.
        mapMarkersToRemove.delete(trajId);
      });

      [...mapMarkersToRemove].forEach(trajId => {
        this.mapMarkersByTrajId[trajId].setMap(null);
        delete this.mapMarkersByTrajId[trajId];
      });
    },

    updateHeatmap() {
      if (!this.googleMapObject || !this.heatmapObj) {
        return;
      }
      const heatmapPointsData = epidemiologyModel.heatmapPoints;
      this.heatmapObj.setData(heatmapPointsData);
    },

    updateMap() {
      //this.updateMarkers();
      this.updateHeatmap();
    },

    updatePlotly() {
      const report = epidemiologyModel.conditionReport;
      this.plotlydata.forEach((trace, iTrace) => {
        const reportField = report[iTrace];
        trace.x.push(epidemiologyModel.totalDays);
        trace.y.push(reportField.popfrac);
      });
    },

    advanceTime() {
      this.currentTime += this.timeIncrement;

      trajectoryModel.advanceTime(this.timeIncrement);
      epidemiologyModel.advanceTime(this.timeIncrement);

      this.updateMapThrottled();
      this.updatePlotlyThrottled();
    },

    play() {
      if (!this.isPlaying) {
        return;
      }

      this.advanceTime();

      setTimeout(() => {
        this.play();
      }, 50);
    }
  },

  mounted() {
    this.updatePlotlyThrottled = throttle(1000, () => {
      this.updatePlotly();
    });
    this.updateMapThrottled = throttle(200, () => {
      this.updateMap();
    });

    this.loadData();
  }
};
</script>
