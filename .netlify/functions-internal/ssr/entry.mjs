import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_uVM-3bqp.mjs';

const _page0  = () => import('./chunks/generic_UQou6yr0.mjs');
const _page1  = () => import('./chunks/index_v3j7T95t.mjs');
const _page2  = () => import('./chunks/fully-furnished-apartments_HMC8Mtup.mjs');
const _page3  = () => import('./chunks/testimonials_EL4edt3v.mjs');
const _page4  = () => import('./chunks/thank-you_3MHeu3nv.mjs');
const _page5  = () => import('./chunks/index_OluK5Jei.mjs');
const _page6  = () => import('./chunks/_slug__mb_3JtB-.mjs');
const _page7  = () => import('./chunks/contact_mBS_DUD-.mjs');
const _page8  = () => import('./chunks/404_KWIGi8Xq.mjs');
const _page9  = () => import('./chunks/faq_hGanJAYE.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/fully-furnished-apartments.astro", _page2],["src/pages/testimonials.astro", _page3],["src/pages/thank-you.astro", _page4],["src/pages/listings/index.astro", _page5],["src/pages/listings/[slug].astro", _page6],["src/pages/contact.astro", _page7],["src/pages/404.astro", _page8],["src/pages/faq.astro", _page9]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = undefined;

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
