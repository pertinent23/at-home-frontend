
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "redirectTo": "/login",
    "route": "/"
  },
  {
    "renderMode": 1,
    "route": "/login"
  },
  {
    "renderMode": 1,
    "route": "/admin"
  },
  {
    "renderMode": 1,
    "route": "/create-user"
  },
  {
    "renderMode": 1,
    "route": "/add-exercise/*"
  },
  {
    "renderMode": 1,
    "route": "/message"
  },
  {
    "renderMode": 1,
    "route": "/message/*"
  },
  {
    "renderMode": 1,
    "route": "/admin-message"
  },
  {
    "renderMode": 1,
    "route": "/folders"
  },
  {
    "renderMode": 1,
    "route": "/folder/*"
  },
  {
    "renderMode": 1,
    "route": "/home"
  },
  {
    "renderMode": 1,
    "route": "/home/record"
  },
  {
    "renderMode": 1,
    "route": "/sign-up"
  },
  {
    "renderMode": 1,
    "redirectTo": "/login",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 3347, hash: '6cb4bb770cbae5d7105dd17b807f7d144792760a8669a0b6f93f535fade04b46', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2407, hash: '0315e257b44ddbe25d2421661ba5ea6d4f139e36a4dda667a99d021c76460c64', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FTIQHF7U.css': {size: 1376, hash: 'uh57w8r7ozY', text: () => import('./assets-chunks/styles-FTIQHF7U_css.mjs').then(m => m.default)}
  },
};
