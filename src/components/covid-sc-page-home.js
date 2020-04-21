import { LitElement, html, css } from 'lit-element';

// TODO: move these dependencies out of here
// UNUSED // import { google } from '@google/maps';

import './covid-sc-map.js';
import '@material/mwc-button';
import '@material/mwc-select';
import '@material/mwc-menu';
import '@material/mwc-list/mwc-list-item';
import Chart from '../scripts/chart.esm.js';
// import 'luxon';
import './chartjs-adapter-luxon.js';
import { IronFlex, IronFlexAlignment } from './flex-styles.js';
import './covid-sc-data-card.js';

export class CovidScPageHome extends LitElement {
  constructor() {
    super();
    // redundant placeholder
    this.countyStats = [];
    this.map = {};
    this.hotspots = {};
    this.counts = {};
    this.chartData = {
      countyData: [],
      stateData: [],
    };
    this.countyList = [];
    this.selectedCounty = '';
  }

  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  static get styles() {
    return [
      IronFlex,
      IronFlexAlignment,
      css`
        :host {
          background-color: var(--Background-Color-White);
        }

        .app-footer {
          font-size: calc(12px + 0.5vmin);
          align-items: center;
        }

        .app-footer a {
          margin-left: 5px;
        }

        .module-container {
          font-family: Roboto;
          font-size: 16px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: var(--Primary-Text-Color);
        }

        .module-title {
          margin: 10px 8px 4px 8px;
          text-align: left;
        }

        p.hint {
          font-family: Roboto;
          font-size: 12px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: var(--Secondary-Text-Color);
          margin-top: 2px;
          width: 100%;
        }

        .module-content {
          margin: 4px 8px 4px 8px;
        }

        .module-footer {
          height: 24px;
          font-family: Roboto;
          font-size: 12px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: right;
          color: var(--Primary-Text-Color);
          margin: 0px 8px 4px 8px;
        }

        .action-button {
          /* width: 200px; */
        }

        .action-button {
          margin: 8px;
          width: 100%;
          min-width: 288px;
          /* flex-grow: 1; */
          /* height: 48px; */ /* CANT CHANGE HEIGHT YET https://github.com/material-components/material-components-web-components/issues/81 */
        }

        .min-margin > covid-sc-data-card:nth-of-type(1) {
          margin-right: 8px;
        }
        .min-margin > covid-sc-data-card:nth-of-type(2) {
          margin-left: 8px;
        }

        .min-margin {
          min-width: 288px;
        }

        covid-sc-data-card {
          min-width: 136px;
          max-width: 188px;
          height: 94px;
          flex-grow: 1;
        }

        covid-sc-data-card[ghost] {
          max-width: 188px;
          height: 0px;
          flex-grow: 1;
        }

        .buttonlink {
          text-decoration: none;
        }

        mwc-button {
          --mdc-theme-primary: var(--Primary-Action-Color);
          --mdc-theme-on-primary: var(--Background-Color-White);
        }

        .data-table {
          border-radius: 4px;
          overflow: hidden;
        }
        .data-table-row {
          height: 48px;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: var(--Primary-Text-Color);
        }

        .data-table-row > div {
          flex: 1;
          text-align: left;
        }

        .data-table-row > div:nth-of-type(1) {
          /* flex: 1 1 100%; */
          margin-left: 10px;
        }

        .data-table > div:nth-of-type(even) {
          background-color: var(--Background-Color-Dark);
        }
        .data-table > div:nth-of-type(odd) {
          background-color: #f0f0f0;
        }

        .footer {
          width: 100%;
          height: 41px;
          background-color: var(--Primary-Text-Color);
          font-family: Roboto;
          font-size: 12px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: var(--Background-Color-Dark);
        }
        .footer > div > a {
          color: var(--Background-Color-White);
        }

        @media only screen and (min-width: 628px) {
          .action-button {
            /* width: 200px; */
          }

          .action-button {
            margin: 8px;
            min-width: 288px;
            flex-grow: 1;
            /* height: 48px; */ /* CANT CHANGE HEIGHT YET https://github.com/material-components/material-components-web-components/issues/81 */
          }

          covid-sc-data-card {
            min-width: 136px;
            max-width: 188px;
            height: 94px;
            flex-grow: 1;
          }

          covid-sc-data-card[ghost] {
            max-width: 188px;
            height: 0px;
            flex-grow: 1;
          }
        }
        mwc-list {
          height: 200px;
          overflow-y: scroll;
        }
        #countymenu {
          font-size: 12px;
          margin: 5px 0;
          padding: 0 16px;
          width: 100%;
          box-sizing: border-box;
          min-width: 288px;
          max-width: 392px;
        }
      `,
    ];
  }

  render() {
    return html`
      <div
        style="background-color: var(--Background-Color-White); min-height:calc( 100% );"
        class="layout vertical"
      >
        <div class="layout vertical module-container">
          <div class="module-title">
            Get Help
          </div>
          <div class="layout horizontal center-justified wrap">
            <!-- <a href="/symptoms" class="layout flex action-button buttonlink"><mwc-button alt="Check Symptoms" unelevated label="CHECK SYMPTOMS" style="width: inherit;"></mwc-button></a> -->
            <a
              href="https://covidnearyou.org/"
              target="_blank"
              class="layout flex action-button buttonlink"
              ><mwc-button
                alt="Get help"
                unelevated
                label="CHECK SYMPTOMS"
                style="width: inherit;"
              ></mwc-button
            ></a>
            <a href="/resources" class="layout flex action-button buttonlink"
              ><mwc-button
                alt="Find Resources"
                unelevated
                label="FIND RESOURCES"
                style="width: inherit;"
              ></mwc-button
            ></a>
            <!-- <a href="https://covidnearyou.org/" target="_blank" class="layout flex action-button buttonlink"><mwc-button alt="Get help" unelevated label="CHECK SYMPTOMS" style="width: inherit;"></mwc-button></a>
            <a href="https://www.scdhec.gov/infectious-diseases/viruses/coronavirus-disease-2019-covid-19" target="_blank" class="layout flex action-button buttonlink"><mwc-button alt="Get help" unelevated label="FIND RESOURCES" style="width: inherit;"></mwc-button></a> -->
          </div>
        </div>
        <div class="layout vertical module-container">
          <div class="module-title">
            Confirmed Cases/Deaths
          </div>
          <div class="layout horizontal center-justified wrap">
            <div class="layout horizontal flex action-button min-margin" style="max-width:392px;">
              <covid-sc-data-card
                title="SC Cases"
                value="${this.counts && this.counts.state && this.counts.state.confirmed
                  ? this.counts.state.confirmed
                  : ''}"
                delta="${this.counts && this.counts.state && this.counts.state.confirmedChanged
                  ? this.counts.state.confirmedChanged
                  : ''}"
              ></covid-sc-data-card>
              <covid-sc-data-card
                title="SC Deaths"
                value="${this.counts && this.counts.state && this.counts.state.deaths
                  ? this.counts.state.deaths
                  : ''}"
                delta="${this.counts && this.counts.state && this.counts.state.deathsChanged
                  ? this.counts.state.deathsChanged
                  : ''}"
              ></covid-sc-data-card>
            </div>
            <div class="layout horizontal flex action-button min-margin" style="max-width:392px;">
              <covid-sc-data-card
                title="USA Cases"
                value="${this.counts && this.counts.national && this.counts.national.confirmed
                  ? this.counts.national.confirmed
                  : ''}"
                delta="${this.counts &&
                this.counts.national &&
                this.counts.national.confirmedChanged
                  ? this.counts.national.confirmedChanged
                  : ''}"
              ></covid-sc-data-card>
              <covid-sc-data-card
                title="USA Deaths"
                value="${this.counts && this.counts.national && this.counts.national.deaths
                  ? this.counts.national.deaths
                  : ''}"
                delta="${this.counts && this.counts.national && this.counts.national.deathsChanged
                  ? this.counts.national.deathsChanged
                  : ''}"
              ></covid-sc-data-card>
            </div>
            <!-- <covid-sc-data-card ghost></covid-sc-data-card>
            <covid-sc-data-card ghost></covid-sc-data-card>
            <covid-sc-data-card ghost></covid-sc-data-card>
            <covid-sc-data-card ghost></covid-sc-data-card> -->
          </div>
          <div class="module-footer">
            ${this.counts && this.counts.national && this.counts.national.lastUpdate
              ? `Updated ${this.counts.national.lastUpdate}`
              : ''}
          </div>
        </div>
        <div class="layout vertical module-container">
          <div class="module-title">
            Confirmed Cases/Deaths By Region
          </div>
          <covid-sc-map
            .map="${this.map}"
            .hotspots="${this.hotspots}"
            class="module-content"
            style="height:400px; box-sizing:border-box; width: calc(100%-8px);"
          ></covid-sc-map>
          <div class="module-footer">
            ${this.counts && this.counts.national && this.counts.national.lastUpdate
              ? `Updated ${this.counts.national.lastUpdate}`
              : ''}
          </div>
        </div>
        <mwc-select id="countymenu" outlined label="County" @change=${this.changeSelectedCounty}>
          <mwc-list-item value="top3" selected>Top 3 (by total cases)</mwc-list-item>
          ${this.countyList.map(
            item => html`
              <mwc-list-item value="${item}">${item}</mwc-list-item>
            `,
          )}
        </mwc-select>
        <div class="layout vertical module-container">
          <div class="module-title">
            Day-to-Day Confirmed Case Numbers
            <p class="hint">
              View South Carolina’s confirmed cases compared to the confirmed cases of individual
              counties
            </p>
          </div>
          <div class="layout vertical data-table module-content">
            <canvas id="chart" width="400" height="230"></canvas>
          </div>
          <div class="module-footer">
            ${this.counts && this.counts.national && this.counts.national.lastUpdate
              ? `Updated ${this.counts.national.lastUpdate}`
              : ''}
          </div>
        </div>
        <div class="layout vertical module-container">
          <div class="module-title">
            Confirmed Case Growth Factor By County
          </div>
          <div class="layout vertical data-table module-content">
            <div class="layout horizontal center data-table-row">
              <div><b>County</b></div>
              <div class="layout horizontal center data-table-row">
                <div><b>Growth Rate</b></div>
                <div><b>Change</b></div>
              </div>
            </div>
            ${this.countyStats.map(
              item => html`
                <div class="layout horizontal center data-table-row">
                  <div>${item.County}</div>
                  <div class="layout horizontal center data-table-row">
                    <div>${item.Confirmed_POPADJ_GF}</div>
                    <div>(${item.Confirmed_POPADJ_GF_Change})</div>
                  </div>
                </div>
              `,
            )}
          </div>
          <div class="module-footer">
            ${this.counts && this.counts.national && this.counts.national.lastUpdate
              ? `Updated ${this.counts.national.lastUpdate}`
              : ''}
          </div>
        </div>
        <div class="layout flex">
          <!-- Spacer -->
        </div>
        <div class="footer layout vertical center-justified">
          <div>
            Powered by
            <a target="_blank" href="https://www.hank.ai/?referrer=covidsc" class="buttonlink"
              >Hank.ai</a
            >
            and
            <a target="_blank" href="https://www.krum.io/?referrer=covidsc" class="buttonlink"
              >Krumware</a
            >
          </div>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    this.getData();
  }

  // eslint-disable-next-line class-methods-use-this, no-unused-vars
  changeSelectedCounty(e) {
    // change to e.target.selected
    this.selectedCounty = e.target.selected.value;
    if (this.selectedCounty === 'top3') {
      this.updateChart();
    } else if (this.countyData && this.countyData[this.selectedCounty]) {
      this.chartData.countyData = this.countyData[this.selectedCounty];
      this.updateChart();
    }
  }

  updateChart() {
    const primaryColor = getComputedStyle(this).getPropertyValue('--Primary-Action-Color');
    const secondaryColor = getComputedStyle(this).getPropertyValue('--Theme-Color');
    if (this.myChart) {
      this.myChart.data.datasets = [];
      this.myChart.data.datasets.push({
        label: 'South Carolina',
        backgroundColor: secondaryColor,
        borderColor: secondaryColor,
        fill: false,
        data: this.chartData.stateData,
      });
      if (this.selectedCounty === 'top3') {
        const top3counties = [];
        // for each county
        const counties = Object.keys(this.countyData);
        counties.forEach(county => {
          const countyDataListLength = this.countyData[county].length;
          const countyNumCases = this.countyData[county][countyDataListLength - 1].y;
          let countyAdded = false;
          for (let i = 0; i < top3counties.length; i += 1) {
            // if the current county has more cases than a candidate
            if (countyNumCases > top3counties[i].numCases) {
              // add the current county before that candidate
              top3counties.splice(i, 0, { name: county, numCases: countyNumCases });
              countyAdded = true;
              break;
            }
          }
          // if a candidate was added and there are now more than 3 candidates
          if (countyAdded && top3counties.length > 3) {
            // remove the last candidate
            top3counties.splice(3, 1);
          }
          // if no candidate was added and the length is still less than 3, push the current county as a candidate
          else if (!countyAdded && top3counties.length < 3) {
            top3counties.push({ name: county, numCases: countyNumCases });
          }
        });
        // push each of the top 3 counties to the chart's datasets
        for (let i = 0; i < top3counties.length; i += 1) {
          this.myChart.data.datasets.push({
            label: top3counties[i].name,
            backgroundColor: primaryColor,
            borderColor: primaryColor,
            fill: false,
            data: this.countyData[top3counties[i].name],
          });
        }
      } else {
        this.myChart.data.datasets.push({
          label: this.selectedCounty,
          backgroundColor: primaryColor,
          borderColor: primaryColor,
          fill: false,
          data: this.chartData.countyData,
        });
      }
      this.myChart.update();
    }
  }

  initChart() {
    // var data1 = [100,500,1000,2000];
    // var data2 = [100,200,100,200];
    // var data1 = [{x:new Date(),y:100},{x:new Date(),y:100},{x:new Date(),y:100},{x:new Date(),y:100}];
    // var data2 = [100,200,100,200];
    const ctx = this.shadowRoot.getElementById('chart');
    const config = {
      type: 'line',
      data: {
        datasets: [],
      },
      options: {
        tooltips: {
          enable: true,
          enabled: true,
          display: true,
          callbacks: {
            title(tooltipItem) {
              const split = tooltipItem[0].label.split(',');
              return `${split[0]},${split[1]}`;
            },
          },
          backgroundColor: '#FFF',
          titleFontSize: 16,
          titleFontColor: '#0066ff',
          bodyFontColor: '#000',
          bodyFontSize: 14,
          displayColors: false,
        },
        legend: {
          display: true,
          position: 'bottom',
          align: 'start',
          labels: {
            boxWidth: 12,
          },
        },
        responsive: true,
        title: {
          text: 'Confirmed Cases',
        },
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'day',
              minUnit: 'day',
              round: 'day',
              distribution: 'series',
              displayFormats: {
                day: 'M/d',
              },
            },
          },
          y: {
            display: true,
          },
        },
      },
    };
    this.myChart = new Chart(ctx, config);
    this.updateChart();
  }

  getData() {
    const statesToInclude = ['SC']; // we'll include the cases, deaths, and symptoms for these states
    const confirmedCircles = {};
    const deathCircles = {};
    // const symptomCircles = {};
    // const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    // const currents = `https://aws.covidsc.com/data/covid_latest.json?v=${new Date().getTime()}`;
    const currents = `https://aws.covidsc.com/data/covid_latest_SC.json?v=${new Date().getTime()}`;
    const totals = `https://aws.covidsc.com/data/covid_latest_SC_FULL.json?v=${new Date().getTime()}`;
    // var jsonfile = "data/covid_latest.json";
    function commas(num) {
      return num.toLocaleString(undefined, { maximumFractionDigits: 0 });
    }

    fetch(totals)
      .then(response => response.json())
      .then(data => {
        // group the counties together
        //  also, check for non-sc counties and ignore those
        const filteredData = data.filter(e => {
          // check location
          if (e.Country !== 'USA' || e.State !== 'SC') return false;
          // check date
          try {
            // keep everything newer than 14 days (call it 15 because time calculation)
            if (new Date(e.Date).getTime() < new Date().getTime() - 14 * 24 * 60 * 60 * 1000)
              return false;
          } catch (err) {
            // if I'm here, date failed to parse
            return false;
          }
          return true;
        });

        this.stateData = filteredData
          .filter(e => {
            // check location
            if (e.County !== 'ALL') return false;
            return true;
          })
          .reduce((accumulator, val) => {
            if (!accumulator[val.County]) accumulator[val.County] = [];
            // let's go ahead and build the dataset values here
            try {
              accumulator[val.County].unshift({
                t: new Date(val.LastUpdate).toISOString().substring(0, 10),
                y: val.Confirmed,
              });
            } catch (e) {
              // console.log(val.LastUpdate);
              // console.log("parse error: ", e)
            }

            return accumulator;
          }, {});
        this.chartData.stateData = this.stateData.ALL;

        this.countyData = filteredData
          .filter(e => {
            // check location
            if (e.County === 'ALL') return false;
            return true;
          })
          .reduce((accumulator, val) => {
            if (!accumulator[val.County]) accumulator[val.County] = [];
            // let's go ahead and build the dataset values here
            try {
              accumulator[val.County].unshift({
                t: new Date(val.LastUpdate).toISOString().substring(0, 10),
                y: val.Confirmed,
              });
            } catch (e) {
              // console.log(val.LastUpdate);
              // console.log("parse error: ", e)
            }
            return accumulator;
          }, {});

        // generate county list for dropdown
        this.countyList = Object.keys(this.countyData).reverse();
        this.selectedCounty = 'top3';
        this.initChart();
        this.requestUpdate();
      });

    fetch(currents)
      .then(response => response.json())
      .then(data => {
        const strokeOpacity = 0.8;

        let HotCounties = [];

        data.forEach(d => {
          // eslint-disable-next-line no-param-reassign
          d.LastUpdate = d.LastUpdate.replace(' ', 'T');
          if (d.Country === 'USA' && statesToInclude.includes(d.State) && d.County !== 'ALL') {
            HotCounties.push({
              State: d.State,
              County: d.County,
              Confirmed_POPADJ_GF: d.Confirmed_POPADJ_GF,
              Confirmed_POPADJ_GF_Change: d.Confirmed_POPADJ_GF_Change,
            });
            if (d.Confirmed > 0) {
              confirmedCircles[d.County] = {
                center: { lat: d.Lat, lng: d.Long },
                population: d.Confirmed * 500,
                header: `${d.County}, ${d.State} Confirmed Cases`,
                content: `${d.Confirmed} confirmed cases (+${d.Confirmed_Change} since yesterday)`,
                color: '#FF0000',
                strokeOpacity,
              };
            }
            if (d.Deaths > 0) {
              deathCircles[d.County] = {
                center: { lat: d.Lat, lng: d.Long },
                population: d.Deaths * 700,
                header: `${d.County}, SC Deaths`,
                content: `${d.Deaths} deaths (+${d.Deaths_Change} since yesterday)`,
                color: '#0000FF',
                strokeOpacity,
              };
            }
          }

          // calculate state counts
          if (d.Country === 'USA' && d.State === 'SC' && d.County === 'ALL') {
            this.counts.state = {
              confirmed: commas(d.Confirmed),
              deaths: commas(d.Deaths),
              confirmedChanged: commas(d.Confirmed_Change),
              deathsChanged: commas(d.Deaths_Change),
            };
            if (d.Confirmed_Change > 0)
              this.counts.state.confirmedChanged = `+${this.counts.state.confirmedChanged}`;
            if (d.Deaths_Change > 0)
              this.counts.state.deathsChanged = `+${this.counts.state.deathsChanged}`;
            this.counts.state.lastUpdate = new Date(d.LastUpdate).toLocaleDateString();
          }

          // this looks like the header counts for USA
          if (d.Country === 'USA' && d.State === 'ALL') {
            this.counts.national = {
              confirmed: commas(d.Confirmed),
              deaths: commas(d.Deaths),
              confirmedChanged: commas(d.Confirmed_Change),
              deathsChanged: commas(d.Deaths_Change),
            };
            if (d.Confirmed_Change > 0)
              this.counts.national.confirmedChanged = `+${this.counts.national.confirmedChanged}`;
            if (d.Deaths_Change > 0)
              this.counts.national.deathsChanged = `+${this.counts.national.deathsChanged}`;
            this.counts.national.lastUpdate = new Date(d.LastUpdate).toLocaleDateString();
          }
        });
        HotCounties = HotCounties.sort((a, b) => b.Confirmed_POPADJ_GF - a.Confirmed_POPADJ_GF); // sort descending

        for (let i = 0; i < HotCounties.length; i += 1) {
          const countyObj = HotCounties[i];
          if (countyObj.Confirmed_POPADJ_GF > 10) {
            countyObj.County += ' County';
            countyObj.Confirmed_POPADJ_GF = countyObj.Confirmed_POPADJ_GF.toFixed(2);
            countyObj.Confirmed_POPADJ_GF_Change = countyObj.Confirmed_POPADJ_GF_Change.toFixed(2);
            if (countyObj.Confirmed_POPADJ_GF_Change >= 0) {
              countyObj.Confirmed_POPADJ_GF_Change = `+${countyObj.Confirmed_POPADJ_GF_Change}`;
            }
            this.countyStats = [...this.countyStats, countyObj];
          }
        }
        this.hotspots = { confirmedCircles, deathCircles };
        this.requestUpdate();
      });
  }
}

customElements.define('covid-sc-page-home', CovidScPageHome);
