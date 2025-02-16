
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
    'index.csr.html': {size: 2257, hash: 'd93e805318800edac631e001143e01ef0ba7b97b9459d1032c073070b0e9c61c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2080, hash: '9131cc9b58bf4ae0b8d907c935c7310bbd9cb07b3ee0f135e3373aca96bcb45b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-U67AT7WN.css': {size: 572, hash: 'H64OkZoEngw', text: () => import('./assets-chunks/styles-U67AT7WN_css.mjs').then(m => m.default)}
  },
};
