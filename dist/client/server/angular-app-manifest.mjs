
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
    'index.csr.html': {size: 3347, hash: 'af51ef6908eb864151405b307534646a9119b0e7f07e572bea5b56b2d726c8f6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2407, hash: '8230ccdc1bf221fa6d8d4939ba62dba07fbd9938d760fb03858bc1c71655e2ed', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FTIQHF7U.css': {size: 1376, hash: 'uh57w8r7ozY', text: () => import('./assets-chunks/styles-FTIQHF7U_css.mjs').then(m => m.default)}
  },
};
