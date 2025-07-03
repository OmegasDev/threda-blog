import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_C3vnLeQc.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/about.astro.mjs');
const _page1 = () => import('./pages/admin.astro.mjs');
const _page2 = () => import('./pages/advertise.astro.mjs');
const _page3 = () => import('./pages/all-posts.astro.mjs');
const _page4 = () => import('./pages/category/_slug_.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/create-hub.astro.mjs');
const _page7 = () => import('./pages/dashboard/hub.astro.mjs');
const _page8 = () => import('./pages/hub/_slug_.astro.mjs');
const _page9 = () => import('./pages/hubs.astro.mjs');
const _page10 = () => import('./pages/post/_slug_.astro.mjs');
const _page11 = () => import('./pages/privacy.astro.mjs');
const _page12 = () => import('./pages/search.astro.mjs');
const _page13 = () => import('./pages/terms.astro.mjs');
const _page14 = () => import('./pages/thred/_slug_.astro.mjs');
const _page15 = () => import('./pages/thred-news/_id_.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/about.astro", _page0],
    ["src/pages/admin/index.astro", _page1],
    ["src/pages/advertise.astro", _page2],
    ["src/pages/all-posts.astro", _page3],
    ["src/pages/category/[slug].astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/create-hub.astro", _page6],
    ["src/pages/dashboard/hub.astro", _page7],
    ["src/pages/hub/[slug].astro", _page8],
    ["src/pages/hubs.astro", _page9],
    ["src/pages/post/[slug].astro", _page10],
    ["src/pages/privacy.astro", _page11],
    ["src/pages/search.astro", _page12],
    ["src/pages/terms.astro", _page13],
    ["src/pages/thred/[slug].astro", _page14],
    ["src/pages/thred-news/[id].astro", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2d782f21-b333-40b3-89c7-6fe4f24478ab"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
