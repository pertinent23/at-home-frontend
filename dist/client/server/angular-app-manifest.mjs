
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
    'index.csr.html': {size: 2257, hash: '11f4fd5c529ae609a64d035689338d18838d28cfb0938644d67bb1e2e4dffeea', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2080, hash: '93cccd7942164f2047d5e8dcec169e1f7fa2698e3a61fe8b2456fbfc5dba7486', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-U67AT7WN.css': {size: 572, hash: 'H64OkZoEngw', text: () => import('./assets-chunks/styles-U67AT7WN_css.mjs').then(m => m.default)}
  },
};
