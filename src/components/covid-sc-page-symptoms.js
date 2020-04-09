import { LitElement, html, css } from 'lit-element';
import '@material/mwc-button';
import '@material/mwc-icon-button';
import { IronFlex, IronFlexAlignment } from './flex-styles.js';

export class CovidScPageSymptoms extends LitElement {
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
      <div style="min-height:calc( 100% - 41px );" class="layout vertical">
        <div class="nav-header layout horizontal start">
          <div>
            <a href="/" class="buttonlink">
              <mwc-icon-button icon="arrow_back" @click=${this.closeLandbot}></mwc-icon-button>
            </a>
          </div>
          <div class="layout horizontal self-center">
            Report your symptoms
          </div>
        </div>
        <div class="layout vertical flex" id="chatWindow"></div>
        </div>
        <div class="footer layout vertical center-justified" style="box-sizing:border-box;">
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

  loadAndLaunchOrbita() {
    if (typeof window.OrbitaChatBotPlugin === 'undefined') {
      const script = document.createElement('script');

      script.src = `/src/scripts/orbita.js`;
      // script.async = true;
      // eslint-disable-next-line func-names
      script.onload = function() {
        this.initChat();
      }.bind(this);

      document.body.append(script);
    } else {
      this.initChat();
    }
  }

  initChat() {
    const chatWindow = this.shadowRoot.getElementById('chatWindow');
    const endpointTag = 'COVIDSC.COM';
    const chatLocation = 'https://engage.orbita.cloud/oeapi';
    const option = {
      // dockDefaultAction: 'open', // uncomment this line to open the bot by default
      domId: 'chatWindow',
      domObject: chatWindow,
      launchWord: 'open',
      name: 'Orbita',
      // width: '520',
      // height: '780',
      serverUrl: `${chatLocation}/bot/hub/${endpointTag}`,
      appSettingURL: `${chatLocation}/bot/hub/settings${endpointTag}`,
      // theme: 'dock-float',
      theme: 'inline',
      oauthserverUrl: chatLocation,
      settings: {
        header: {
          logoUrl: '/chatbot/v2/assets/branding-mark.svg',
          headerText: 'COVID-19',
          subHeaderText: 'Chatbot powered by Orbita',
          speakerOnIconUrl: '/chatbot/v2/assets/volume-on.svg',
          speakerMuteIconUrl: '/chatbot/v2/assets/volume-muted.svg',
          closeIconUrl: '/chatbot/v2/assets/x-header.svg',
        },
        banner: {
          title: "''Click here'' - to read the Disclaimer",
          message:
            "<p>&nbsp;</p><p>&nbsp;</p><p><strong>Please Note:</strong> I use sources like the U.S. Center for Disease Control (CDC) and others to ensure I have the latest information for you, but I can’t guarantee the accuracy of this information.</p><p>&nbsp;</p><p>Also, I’m not a substitute for the judgment of a healthcare professional and not intended for use in the diagnosis or treatment of coronavirus (COVID-19) or any other diseases or conditions.</p><p>&nbsp;</p><p>If you suspect a life-threatening emergency, please call 911 or your local emergency response immediately.</p><p>&nbsp;</p><p><a target='_blank' href='https://orbita.ai/orbita-privacy-policy/'>Privacy Policy</a><p>&nbsp;</p>",
        },
        profile: {
          defaultAvatorUrl: '',
        },
        footer: {
          menuIconUrl: '/chatbot/v2/assets/plus-button.svg',
          menuIconDiabledUrl: '/chatbot/v2/assets/plus-btn-disabled.svg',
          micIconUrl: '/chatbot/v2/assets/mic.svg',
          micOnIconUrl: '/chatbot/v2/assets/mic-on.svg',
          sendButtonIconUrl: '/chatbot/v2/assets/button-circular-01.svg',
          sendButtonDisabledIconUrl: '/chatbot/v2/assets/send-circular-01-disabled.svg',
        },
        botAvatarUrl: '/chatbot/v2/assets/orbita-icon.svg',
        animationAvatarImageUrl: '/chatbot/v2/assets/avatar_loading.gif',
        animationImageUrl: '/chatbot/v2/assets/msg_loading.gif',
        // theme: {
        //   dockFloat: {
        //     buttonSrc: 'https://assets-engage.orbita.cloud/img/chatbutton.png',
        //     buttonTitle: 'Hi There!',
        //   },
        // },
      },
    };

    if (window.OrbitaChatBotPlugin) {
      window.OrbitaChatBotPlugin.initPlugin(option);
    } else {
      // console.log("not found");
    }
  }

  firstUpdated() {
    // this.getData();
    this.landbotOpened = false;

    // console.log("launch landbot");
    // this needs to be moved into the resources page, likely using https://dev.landbot.io/docs/?content=guide_landbot_embed#frame
    //  will it support shadowdom?
    this.loadAndLaunchOrbita();
  }
}

customElements.define('covid-sc-page-symptoms', CovidScPageSymptoms);
