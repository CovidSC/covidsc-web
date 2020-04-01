if (!self.define) {
  const e = e => {
      'require' !== e && (e += '.js');
      let s = Promise.resolve();
      return (
        c[e] ||
          (s = new Promise(async s => {
            if ('document' in self) {
              const c = document.createElement('script');
              (c.src = e), document.head.appendChild(c), (c.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!c[e]) throw new Error(`Module ${e} didn’t register its module`);
          return c[e];
        })
      );
    },
    s = (s, c) => {
      Promise.all(s.map(e)).then(e => c(1 === e.length ? e[0] : e));
    },
    c = { require: Promise.resolve(s) };
  self.define = (s, r, o) => {
    c[s] ||
      (c[s] = Promise.resolve().then(() => {
        let c = {};
        const i = { uri: location.origin + s.slice(1) };
        return Promise.all(
          r.map(s => {
            switch (s) {
              case 'exports':
                return c;
              case 'module':
                return i;
              default:
                return e(s);
            }
          }),
        ).then(e => {
          const s = o(...e);
          return c.default || (c.default = s), c;
        });
      }));
  };
}
define('./sw.js', ['./workbox-28703916'], function(e) {
  'use strict';
  self.addEventListener('message', e => {
    e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: 'covid-sc-app-b0d68a78.js', revision: '636defcba9a4e5d9022b4e8e3cff40e0' },
        { url: 'index.html', revision: 'c6f916ea4863dc5725644596aee7400b' },
        { url: 'legacy/covid-sc-app-0827f511.js', revision: 'f89cfd9761b4765ebd513e72ee7d4a71' },
        {
          url: 'polyfills/core-js.577a5602a7262d6256830802d4aaab43.js',
          revision: 'ccf205728fe514f8276191669b5ea48d',
        },
        {
          url: 'polyfills/custom-elements-es5-adapter.84b300ee818dce8b351c7cc7c100bcf7.js',
          revision: 'cff507bc95ad1d6bf1a415cc9c8852b0',
        },
        {
          url: 'polyfills/dynamic-import.b745cfc9384367cc18b42bbef2bbdcd9.js',
          revision: 'ed55766050be285197b8f511eacedb62',
        },
        {
          url: 'polyfills/fetch.191258a74d74243758f52065f3d0962a.js',
          revision: 'fcdc4efda1fe1b52f814e36273ff745d',
        },
        {
          url: 'polyfills/regenerator-runtime.9090ed1c23690e3072c21a7873cad285.js',
          revision: '9af9d9e480dfccc420d30729e319b821',
        },
        {
          url: 'polyfills/systemjs.6dfbfd8f2c3e558918ed74d133a6757a.js',
          revision: '683aabfb9b006607885b83e45e9a1768',
        },
        {
          url: 'polyfills/webcomponents.6954abecfe8b165751e6bc9b0af6c639.js',
          revision: '894a294495257c3d389efa3e1bd9bde7',
        },
      ],
      {},
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts',
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    ),
    e.registerRoute(
      /^https:\/\/aws\.covidsc\.com\/.*/i,
      new e.NetworkFirst({
        cacheName: 'data',
        networkTimeoutSeconds: 5,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 50, maxAgeSeconds: 432e3, purgeOnQuotaError: !0 }),
        ],
      }),
      'GET',
    );
});
//# sourceMappingURL=sw.js.map
