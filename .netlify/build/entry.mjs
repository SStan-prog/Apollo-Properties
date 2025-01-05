import { r as renderers } from './chunks/_@astro-renderers_OH2ffHCx.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DYU204XP.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/blog/_slug_.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/faq.astro.mjs');
const _page5 = () => import('./pages/fully-furnished-apartments.astro.mjs');
const _page6 = () => import('./pages/listings/_slug_.astro.mjs');
const _page7 = () => import('./pages/listings.astro.mjs');
const _page8 = () => import('./pages/testimonials.astro.mjs');
const _page9 = () => import('./pages/thank-you.astro.mjs');
const _page10 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/blog/[slug].astro", _page1],
    ["src/pages/blog/index.astro", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/faq.astro", _page4],
    ["src/pages/fully-furnished-apartments.astro", _page5],
    ["src/pages/listings/[slug].astro", _page6],
    ["src/pages/listings/index.astro", _page7],
    ["src/pages/testimonials.astro", _page8],
    ["src/pages/thank-you.astro", _page9],
    ["src/pages/index.astro", _page10]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7ddecda6-63d3-4ac8-8c13-a18199bdd7d0"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
