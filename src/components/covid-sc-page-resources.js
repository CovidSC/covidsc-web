import { LitElement, html, css } from 'lit-element';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import { IronFlex, IronFlexAlignment } from './flex-styles.js';

export class CovidScPageResources extends LitElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
    // redundant placeholder
  }

  static get properties() {
    return {};
  }

  static get styles() {
    return [
      IronFlex,
      IronFlexAlignment,
      css`
        :host {
          background-color: var(--Background-Color-White);
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
          margin: 4px 8px 4px 8px;
        }

        .module-title {
          margin: 10px 8px 4px 8px;
          text-align: left;
          height: 24px;
          font-family: Roboto;
          font-size: 16px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: var(--Primary-Text-Color);
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
          color: inherit;
        }

        mwc-button {
          --mdc-theme-primary: var(--Primary-Action-Color);
          --mdc-theme-on-primary: var(--Background-Color-White);
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

        .nav-header {
          width: 100%;
          height: 48px;
          background-color: #616161;
          font-family: Roboto;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: var(--Background-Color-White);
        }

        a.colored {
          width: 288px;
          height: 24px;
          font-family: Roboto;
          font-size: 16px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: var(--Primary-Action-Color);
          text-decoration: none;
        }

        h1 {
          height: 24px;
          font-family: Roboto;
          font-size: 16px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: var(--Primary-Text-Color);
        }

        h2 {
          font-family: Roboto;
          font-size: 16px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: var(--Primary-Action-Color);
        }

        p.hint {
          width: 604px;
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
      `,
    ];
  }

  render() {
    return html`
      <div style="min-height:calc( 100% );" class="layout vertical">
        <div class="nav-header layout horizontal start">
          <div>
            <a href="/" class="buttonlink">
              <mwc-icon-button icon="arrow_back" @click=${this.closeLandbot}></mwc-icon-button>
            </a>
          </div>
          <div class="layout horizontal self-center">
            Find Resources
          </div>
        </div>
        <div class="layout vertical self-stretch">
          <div class="layout vertical module-container">
            <div class="module-title">
              Learn more about COVID-19
            </div>
            <div class="module-content">
              <a
                class="colored"
                target="_blank"
                href="https://www.scdhec.gov/infectious-diseases/viruses/coronavirus-disease-2019-covid-19?referrer=covidsc"
                ><b>SC DHEC</b></a
              >
              <p class="hint">
                Learn more about COVID-19 and how to prevent the spread of infectious diseases.
              </p>
            </div>
            <div class="module-content">
              <a
                class="colored"
                target="_blank"
                href="https://emcrit.org/ibcc/covid19/?referrer=covidsc"
                ><b>IBCC</b></a
              >
              <p class="hint">
                In-depth information about the COVID-19 virus from the Internet Book of Critical
                Care (IBCC)
              </p>
            </div>
          </div>

          <div class="layout vertical module-container">
            <div class="module-title">
              Employees
            </div>
            <div class="module-content">
              <a
                class="colored"
                target="_blank"
                href="https://dew.sc.gov/covid-hub?referrer=covidsc"
                ><b>COVID-19 Resource Hub</b></a
              >
              <p class="hint">
                Learn about your rights as an employee and how you can get financial aid during this
                time.
              </p>
            </div>
          </div>
          <div class="layout vertical module-container">
            <div class="module-title">
              Small Businesses
            </div>
            <div class="module-content">
              <a
                class="colored"
                target="_blank"
                href="https://scsbdc.ecenterdirect.com/signup?referrer=covidsc"
                ><b>SC SBDC</b></a
              >
              <p class="hint"></p>
            </div>
          </div>
        </div>
        <div class="layout flex"></div>
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

  closeLandbot() {
    // let's disable the killing of the landbot in case someone wants to return to the window once opened
    if (!this.landbotOpened) {
      // if someone didn't open landbot, they probably don't want to see it in their way on the other pages
      window.myLandbot.destroy();
      delete window.myLandbot;
    }
  }

  loadAndLaunchLandbot() {
    if (typeof window.LandbotPopup === 'undefined') {
      const script = document.createElement('script');
      // <script src="https://static.landbot.io/umicore/UmiAccessPoint.js"></script>
      // <script SameSite="None; Secure" src="https://static.landbot.io/landbot-widget/landbot-widget-1.0.0.js"></script>
      script.src = `https://static.landbot.io/landbot-widget/landbot-widget-1.0.0.js`;
      // script.async = true;
      // eslint-disable-next-line func-names
      script.onload = function() {
        this.launchLandbot();
      }.bind(this);
      document.body.append(script);
    } else {
      this.launchLandbot();
    }
  }

  launchLandbot() {
    if (!window.myLandbot) {
      // eslint-disable-next-line no-undef
      window.myLandbot = new LandbotPopup({
        index: 'https://landbot.io/u/H-425846-85U6RSZFC8RLG2G0/index.html',
      });

      // Show a proactive message on landbot load
      window.myLandbot.on('landbot-load', () => {
        window.myLandbot.sendProactive({
          message: 'Let me help you find the resources you need.',
          author: 'CovidSC HelpBot',
          avatar:
            'https://storage.googleapis.com/media.helloumi.com/105897/channels/5S3N8WZWXWDJ91NU6KEF6WG7W1YY0SU5.png',
          extra: {
            hide_textbox: true,
          },
        });
      });

      window.myLandbot.on('landbot-widget-open', () => {
        this.landbotOpened = true;
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            window.myLandbot.send('landbot-custom-data', {
              latitude: lat,
              longitude: long,
            });
            // console.log(position);
          });
        }
      });
    }
  }

  firstUpdated() {
    // this.getData();
    this.landbotOpened = false;

    // console.log("launch landbot");
    // this needs to be moved into the resources page, likely using https://dev.landbot.io/docs/?content=guide_landbot_embed#frame
    //  will it support shadowdom?
    this.loadAndLaunchLandbot();
  }
}

customElements.define('covid-sc-page-resources', CovidScPageResources);
