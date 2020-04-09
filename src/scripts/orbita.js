(function($) {
  const orbitaChatBotPlugin = function() {
    const self = this;
    const parentBodyCss = {};
    self.onMesageReceive = function(event) {
      try {
        const data = JSON.parse(event.data);
        if (data.classname) {
          if (data.classname == 'colapseorbita') {
            $(`#${domId}`).removeClass('openorbita');
            /* if(self.mobileAndTabletcheck () && (self.options.theme == 'dock' || self.options.theme == 'dock-float')) {
              $('body').css({
                overflow: parentBodyCss.overflow,
                position: parentBodyCss.position
              });
            } */
          } else {
            // $('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, 1000, function() {
            $(`#${domId}`).removeClass('colapseorbita');
            /* if(self.mobileAndTabletcheck () && (self.options.theme == 'dock' || self.options.theme == 'dock-float')) {
                  parentBodyCss.position = $('body').css('position');
                  parentBodyCss.overflow = $('body').css('overflow');
                  // $('body').css({
                  //   overflow: 'hidden',
                  //   position: 'fixed'
                  // });
              } */
            $(`#${domId}`).addClass(data.classname);
            // });
          }
        }
      } catch (e) {}
      // alert( "received: " + event.data );
    };
    self.mobileAndTabletcheck = function() {
      let check = false;
      (function(a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
            a,
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4),
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    };
    self.initPlugin = function(options) {
      // self.optionValidator(options);
      let mobileBotUrl = options.mobileBotUrl || '';
      if (mobileBotUrl && mobileBotUrl.indexOf('://') === -1) {
        mobileBotUrl = `${document.location.protocol}//${document.location.host}${options.mobileBotUrl}`;
      }
      options.mobileBotUrl = mobileBotUrl;
      options.mobileBotCallbackUrl = encodeURIComponent(document.location.href);
      const { domId } = options;
      self.domId = domId;
      const { domObject } = options; // krumware
      self.domObject = domObject; // krumware
      self.options = options;
      options.domId = 'chatWindow';
      const query = JSON.stringify(options);
      const url = `${options.serverUrl}?query=${encodeURIComponent(query)}`;
      options.width = options.width < 320 ? 320 : options.width;
      const { width } = options;
      const height = options.height || 500;
      let iframeId = 'orbita-iframe';
      if (options.theme && (options.theme === 'dock' || options.theme === 'dock-float')) {
        iframeId = 'orbita-chat-iframe';
        const iframeStyle = `\
        <style>\
          #${self.domId}{\
          position: fixed;\
          bottom: 0;\
          left: 0;\
          z-index: 99999;\
          }\
          </style>\
        `;
        // document.body.append(iframeStyle);
      } else if (options.theme && options.theme == 'sidebar') {
        iframeId = 'orbita-chat-iframe-sidebar';
      } else if (options.theme && options.theme == 'inline') {
        iframeId = `orbita-chat-iframe-${options.theme}`;
        var iframeStyle;
        if (options.position && options.position == 'inline') {
          iframeStyle =`#chatWindow {
            height: 100%;
          }
          #orbita-chat-iframe-inline {
            height: 100%;
            width: 100%;
          }
        `;
        } else if (options.position && options.position == 'absolute') {
          iframeStyle =
            `
              #chatWindow {
                height: 100%;
              }
              #orbita-chat-iframe-inline {
                height: 461px;
                width: 460px;
                position: absolute;
              }
          `;
        } else {
          iframeStyle =`#chatWindow {
            height: 100%;
          }
          #orbita-chat-iframe-inline {
            height: 100%;
            width: 100%;
          }
        `;
        }
        self.appendStyle(iframeStyle);
      }
      const chatbotFrame = document.createElement('iframe');
      chatbotFrame.src = url;
      chatbotFrame.name = 'orbita-chat-iframe';
      chatbotFrame.allow = 'geolocation; microphone;';
      if(width) chatbotFrame.width = width;
      // hack this, tired of fiddling
      chatbotFrame.height = '100%';
      chatbotFrame.id = iframeId;
      // var chatbotFrame = '<iframe id=\'' + iframeId + '\' name="orbita-chat-iframe" allow="geolocation; microphone;"   width="' + width + '"></iframe>';
      chatbotFrame.classList.add("layout");
      chatbotFrame.classList.add("flex");
      // $('#' + iframeId).attr('src', (url));
      window.addEventListener('message', onMesageReceive);
      self.generateStyle(options.width, options.height);
      self.domObject.classList.add('colapseorbita');
      self.domObject.appendChild(chatbotFrame);
    };
    self.appendStyle = function(css){
      cssObj = document.createElement('style');
      cssObj.type = 'text/css';
      if (cssObj.styleSheet)
        cssObj.styleSheet.cssText = css;
      else
        cssObj.appendChild(document.createTextNode(css));
      document.getElementsByTagName("head")[0].appendChild(cssObj);
    }
    self.generateStyle = function(width, height) {
      const css = `
      #${self.domId}.colapseorbita iframe#orbita-chat-iframe {
        width: 100%;
        height: 94px;
        right: 10;
        left:0;
        margin-bottom: 10px;
      }
      #${self.domId}.openorbita iframe#orbita-chat-iframe {
        width: ${width}px;
        height: ${height}px;
        max-width: 100vw;
        max-height: 100vh;
        margin-bottom: 0px
      }
      iframe#orbita-chat-iframe {
        position: fixed;
        bottom: 0;
        right: 10px;
        width: auto;
        height: ${height}px;
        border: none;
        max-width: 100%;
        max-height: 100%;
        margin-bottom: 10px;
      }
      iframe#orbita-chat-iframe-sidebar {
        height: 99vh;
        position: fixed;
        right: 2px;
        border-width: 1px;
        z-index: 99999;
        top: 0;
      }\
      #orbita-chat-iframe-inline {
          border: 0;
          border-radius: 20px;
          -webkit-box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.75);
          box-shadow: 0px 0px 4px -1px rgba(0, 0, 0, 0.75);
        }
        @media only screen and (max-device-width: 480px) {
          #${self.domId}.openorbita{
            width: 100vw;
            height: 100vh;
            top:0;
            right:0;
          }
          #${self.domId}.openorbita iframe#orbita-chat-iframe {
            width: 100vw;
            height: 100vh;
            margin-bottom: 0px;
            position: fixed;
            right:0px;
            left:0px;
            bottom:0px;
            top:0px
          }
        }
    `;
        self.appendStyle(css);
      // document.body.append(css);
    };
    return {
      initPlugin: self.initPlugin,
    };
  };
  window.OrbitaChatBotPlugin = orbitaChatBotPlugin();
})();
