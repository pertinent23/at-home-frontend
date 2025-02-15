
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 2257, hash: '9498a37dd651250f1751916c30381b957773fd0acd4e9dbfce17bcca6c587b40', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2080, hash: '872a2d346e3e85c24f7e8907ccedfd662da26515e83a63290fc23af7b735aa27', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-U67AT7WN.css': {size: 572, hash: 'H64OkZoEngw', text: () => import('./assets-chunks/styles-U67AT7WN_css.mjs').then(m => m.default)}
  },
};
