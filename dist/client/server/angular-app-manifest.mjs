
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
    'index.csr.html': {size: 3347, hash: '417c3c9441cffbb87bb83e932e14bfb971f40a41d81ce6471ee98eab072c3d23', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2407, hash: '77ac065cbb0a72de9235b8d237eb176bc215c1c9014dbc2965e6a55f98dc5c54', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-FTIQHF7U.css': {size: 1376, hash: 'uh57w8r7ozY', text: () => import('./assets-chunks/styles-FTIQHF7U_css.mjs').then(m => m.default)}
  },
};
