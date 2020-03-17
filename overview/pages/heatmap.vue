<template>
  <v-layout column class="covid19heatmap">
    <v-row>
      <v-col cols="12" md="8" xl="6">
        <div class="map-container">
          <v-alert type="info"
              :dismissible="true"
              v-if="!trajectoryModel.isDataLoading &&
                    !trajectoryModel.isDataLoaded">
            <p>
              The data file has not yet been loaded.
              The data comes as a JSON file approximately
              4 MB in size.
            </p>
            <p>
              NOTE: This is simulated data representing a theoretical epidemiological model.
              This simulation does not contain any actual COVID-19 transmission data
              nor the exact movements of any real individuals, and should
              not be used in place of studying actual real-world infection cases.
            </p>
          </v-alert>

          <v-alert type="error"
              v-if="trajectoryModel.errorMsg">
            {{trajectoryModel.errorMsg}}
          </v-alert>

          <v-alert type="success"
              :dismissible="true"
              v-if="trajectoryModel.isDataLoaded">
            <p>
              Data loaded in
              {{trajectoryModel.durationDataLoad}} ms
            </p>
          </v-alert>

          <v-alert type="info" v-if="hoverParam">
            <h3>{{hoverParam.name}}</h3>
            <p>
              {{hoverParam.description}}
            </p>
            <p>
              Range: {{hoverParam.range_min}} - {{hoverParam.range_max}}<br/>
              Default value: {{hoverParam.default}}
            </p>
            <p>
              Current value: <strong>{{hoverParam.value}}</strong>
            </p>
          </v-alert>

          <GmapMap
            ref="mapRef"
            v-if="trajectoryModel.isDataLoaded"
            :center="mapInitCenter"
            :zoom="11"
            map-type-id="roadmap"
            style="width: 100%; height: 100%"
          >
          </GmapMap>

          <div class="seektime" v-if="trajectoryModel.isDataLoaded">
            <strong>
              Day {{Math.floor(currentTimeDayCount)}}:
              {{epidemiologyModel.infectedCount.healthy}} healthy,
              {{epidemiologyModel.infectedCount.infected}} infected,
              {{epidemiologyModel.infectedCount.dead}} dead.
              {{epidemiologyModel.infectedCount.quarantined}} quarantined.
            </strong>
            <br/>
            {{currentTimeDateObj}}
          </div>
        </div>
      </v-col>

      <v-col class="d-flex flex-column">
        <v-container v-if="!trajectoryModel.isDataLoaded" class="flex-grow-0">
          <v-row>
            <v-btn color="primary"
                :loading="trajectoryModel.isDataLoading"
                @click="loadData()">
              Load Data
            </v-btn>
          </v-row>
        </v-container>

        <v-container class="flex-grow-0"
            v-if="trajectoryModel.isDataLoaded">

          <v-row>
            <v-col>
              <v-slider
                label="Playback speed"
                v-model="timeIncrement"
                :min="30 * 60"
                :max="6 * 60 * 60"
                :dense="true"
              ></v-slider>
            </v-col>
          </v-row>

          <v-row>
            <v-btn fab small class="mx-1" color="primary"
                v-if="!isPlaying"
                @click="resetWithData()">
              <v-icon>mdi-cached</v-icon>
            </v-btn>

            <v-btn fab small class="mx-1" color="primary"
                v-if="!isPlaying"
                @click="isPlaying=true; play()">
              <v-icon>mdi-play</v-icon>
            </v-btn>
            <v-btn fab small class="mx-1" color="primary"
                v-if="!isPlaying"
                @click="advanceTime()">
              <v-icon>mdi-play-pause</v-icon>
            </v-btn>
            <v-btn fab small class="mx-1" color="primary"
                v-if="isPlaying"
                @click="isPlaying=false">
              <v-icon>mdi-stop</v-icon>
            </v-btn>
          </v-row>
        </v-container>

        <v-container class="flex-grow-1 param-sliders">
          <v-row>
            <v-expansion-panels accordion>
              <v-expansion-panel
                v-for="(group,iGroup) in paramsModel.groups"
                :key="iGroup"
              >
                <v-expansion-panel-header>
                  <span>
                    <v-icon>mdi-tune</v-icon>
                    {{group.name}}
                  </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <div v-for="(param, iParam) in group.params" :key="iParam"
                      @mouseover="hoverParam = param"
                      @mouseout="hoverParam = null"
                  >
                    <v-slider
                      :hint="param.name"
                      v-model="param.value"
                      :min="param.range_min"
                      :max="param.range_max"
                      :persistent-hint="true"
                      :dense="true"
                      :thumb-label="true"
                      :step="param.valuetype === 'integer' ? 1 : ((param.range_max - param.range_min) / 50)"
                    ></v-slider>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
        </v-container>
      </v-col>
    </v-row>

    <v-row v-if="trajectoryModel.isDataLoaded">
      <v-container>
        <v-data-table
          class="siminfotable"
          :headers="simInfoTableHeaders"
          :items="epidemiologyModel.simInfoList"
          :items-per-page="25"
          :dense="true"
          :footer-props="simInfoTableFooterProps"
          :options="{sortBy: ['daysInfected'], sortDesc:[true]}"
        >
          <template v-slot:item.id="{ item }">
            <span :class="`siminfo-infectionstage-${item.infectionStage.name.toLowerCase()}`">
              {{item.id}}
            </span>
          </template>
          <template v-slot:item.complicationRisk="{ item }">
            <span class="siminfo-complicationrisk"
                :style="{color:gradientGreenYellowRed(item.complicationRisk)}">
              {{ Math.floor(item.complicationRisk * 100) }}%
            </span>
          </template>
          <template v-slot:item.infectionStage.name="{ item }">
            <span :class="`siminfo-infectionstage-${item.infectionStage.name.toLowerCase()}`">
              {{item.infectionStage.name}}
            </span>
          </template>
          <template v-slot:item.infectionStage.infected="{ item }">
            <span v-if="item.infectionStage.infected" class="siminfo-infected">
              <v-icon>mdi-biohazard</v-icon>
            </span>
          </template>
          <template v-slot:item.infectionStage.contagious="{ item }">
            <span v-if="item.infectionStage.contagious" class="siminfo-contagious">
              <v-icon>mdi-account-tie-voice</v-icon>
            </span>
          </template>
          <template v-slot:item.infectionStage.symptomatic="{ item }">
            <span v-if="item.infectionStage.symptomatic" class="siminfo-symptomatic">
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

    <v-row v-if="trajectoryModel.isDataLoaded">
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
                <span>
                  {{ Math.floor(item.popfrac * 100) }}%
                </span>
              </template>
            </v-data-table>
          </v-col>
          <v-col style="position:relative; min-height:12em;">
            <div class="plotlyholder">
              <vue-plotly
                  ref="plotlygraph"
                  v-if="epidemiologyModel.totalSeconds > 0"
                  :data="plotlydata"
                  :layout="plotlylayout"
                  :autoResize="true"
                  :display-mode-bar="false"></vue-plotly>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
  </v-layout>
</template>

<style lang="scss">
.covid19heatmap {
  .map-container {
    background: #ccc;
    border: 1px solid #444;
    border-radius: 1em;
    overflow: hidden;
    width: 100%;
    height: calc(100vh - 15em);
    position: relative;
    @media(max-width: 960px) {
      height: calc(100vh - 25em);
    }

    .v-alert {
      position: absolute;
      top: 4em;
      left: 1em;
      width: calc(100% - 2em);
      opacity: .9;
      z-index: 1;
    }

    .seektime {
      position: absolute;
      bottom: 1em;
      left: 1em;
      width: calc(65% - 2em);
      background: white;
      color: black;
      font-family: monospace;
      font-size: 80%;
      padding: 1ex 1em;
      opacity: .9;
      border-radius: 1ex;
    }
  }

  .param-sliders {
    position: relative;
    overflow: hidden;
    overflow-y: auto;
    min-height: 10em;

    & > .row {
      @media(min-width: 960px) {
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    .v-input__slider {
      cursor: pointer;
    }
    .v-messages {
      top: -6ex;
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
</style>

<script>
import trajectoryModel from '~/model/trajectory';
import paramsModel from '~/model/params';
import epidemiologyModel from '~/model/epidemiology';

import { throttle, debounce } from 'throttle-debounce';

const colorInterpolate = require('color-interpolate');


epidemiologyModel.paramsModel = paramsModel;
epidemiologyModel.trajectoryModel = trajectoryModel;


const INFECTION_STAGE_COLORS = {
  HEALTHY: '#00aa00',
  RECOVERED: '#00aa00',
  LATENT: '#aaaa00',
  ASYMPTOMATIC: '#ffaa00',
  SICK: '#ff4400',
  CRITICAL: '#cc0000',
  DEAD: '#000000'
};


export default {
  components: {
  },

  data() {
    return {
      hoverParam: null,

      paramsModel,
      trajectoryModel,
      epidemiologyModel,

      googleMapObject: null,

      currentTime: 0,
      timeIncrement: 2 * 60 * 60, // Advance by this many seconds at a time
      isPlaying: false,

      mapMarkersByTrajId: {},
      heatmapObj: null,

      mapInitCenter: {lat: 39.95,lng: 116.4},

      simInfoTableHeaders: [
        {
          text: 'Sim ID',
          align: 'start',
          value: 'id',
        },
        { text: 'Age', value: 'age' },
        { text: 'Health Issues', value: 'healthProblems' },
        { text: 'Compl. Risk', value: 'complicationRisk', align: 'end' },
        { text: 'Infection Stage', value: 'infectionStage.name' },
        { text: 'Infected', value: 'infectionStage.infected', align: 'center' },
        { text: 'Contagious', value: 'infectionStage.contagious', align: 'center' },
        { text: 'Symptomatic', value: 'infectionStage.symptomatic', align: 'center' },
        { text: 'Days Infected', value: 'daysInfected', align: 'end' },
        { text: 'Days to Outcome', value: 'daysUntilOutcome', align: 'end' },
        { text: 'Quarantine', value: 'isQuarantined', align: 'center' },
        { text: 'Aware', value: 'isAware', align: 'center' },
      ],
      simInfoTableFooterProps: {
        'items-per-page-options': [10,25,50,-1]
      },
      gradientGreenYellowRed: colorInterpolate([
        '#00aa00', '#aaaa00', '#aa4400', '#aa0000'
      ]),

      conditionReportHeaders: [
        {text: 'Condition', value: 'name'},
        {text: 'Population', value: 'popfrac', align: 'end'}
      ],

      plotlydata: [],
      plotlylayout: {
        title: 'Infection stage prevalence over time',
        xaxis: {range: [0,90], title:"Days"},
        yaxis: {range: [0,1], title:"Population %"}
      }
    }
  },

  computed: {
    currentTimeDateObj() {
      const d = new Date('2007-07-15');
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
      this.mapInitCenter = {lat: 39.95, lng: 116.4};

      this.plotlydata = epidemiologyModel.INFECTION_STAGES_ORDER.map(k => {
        const infectionStage = epidemiologyModel.INFECTION_STAGES[k];
        return {
          type: 'scatter',
          x: [],
          y: [],
          mode: 'lines',
          name: infectionStage.name,
          infectionStageKey: k,
          line: {
            width: 2,
            color: INFECTION_STAGE_COLORS[k]
          }
        }
      });

      trajectoryModel.reset();
      epidemiologyModel.reset();
    },

    resetWithData() {
      epidemiologyModel.generateSimInfo(trajectoryModel.trajectoryIds);
      epidemiologyModel.infectPatientZeroes();
      epidemiologyModel.advanceTime(1);

      this.mapMarkersByTrajId = {};

      if (this.heatmapObj) {
        this.heatmapObj.setData([]);
      }
    },

    loadData() {
      this.reset();
      trajectoryModel.load(this.$axios, {
        dbgOnlyKeepFirstNTrajectories: false
      }).then(() => {
        this.resetWithData();

        // We have to do this silly timeout trick because we can't
        // grab a reference to the mapRef element because it doesn't
        // exist yet because the v-if hasn't processed yet.
        // And we can't make it exist before the v-if because there's
        // a bug in the component that throws an annoying DOM error.
        this.$nextTick(() => {
          this.$refs.mapRef.$mapPromise.then((map) => {
            this.googleMapObject = map;
            this.createHeatmap();

            this.updateMapThrottled();
            this.updatePlotlyThrottled();
          })
        }, 0);
      });
    },

    createHeatmap() {
      this.heatmapObj = new google.maps.visualization.HeatmapLayer({
        data: [],
        dissipating: true,
        radius: 30,
        opacity: .9,
        maxIntensity: 30,
        gradient: [
        'rgba(255, 255, 0, 0)',
        'rgba(255, 255, 0, 1)',
        'rgba(255, 0, 0, 1)',
        'rgba(180, 0, 0, 1)',
        'rgba(150, 0, 0, 1)',
        'rgba(80, 0, 0, 1)',
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
      const nFirst = (Math.floor(this.currentTime / secNextFirst)) % Math.max(1, numLocTotal - nLocations);
      // We don't have any logic to restart from the beginning of the list.
      // At the end of all rotations, we just "flip" back to the beginning
      // all at once.

      const mapMarkersToRemove = new Set([...Object.keys(this.mapMarkersByTrajId)]);

      const locationsToUse = Object.entries(trajLocations).slice(nFirst, nFirst+nLocations);

      locationsToUse.forEach(([trajId, location]) => {
        const mapMarker = this.getOrCreateMapMarker(trajId);
        mapMarker.setPosition(new google.maps.LatLng(location.lat, location.lng));

        // This map marker is still in use. Don't remove it.
        mapMarkersToRemove.delete(trajId);
      });

      [...mapMarkersToRemove].forEach(trajId => {
        this.mapMarkersByTrajId[trajId].setMap(null);
        delete this.mapMarkersByTrajId[trajId];
      })
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
      this.plotlydata.forEach( (trace, iTrace) => {
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
    },
  },

  mounted() {
    this.updatePlotlyThrottled = throttle(1000, () => {
      this.updatePlotly();
    });
    this.updateMapThrottled = throttle(200, () => {
      this.updateMap();
    });
  }
}
</script>
