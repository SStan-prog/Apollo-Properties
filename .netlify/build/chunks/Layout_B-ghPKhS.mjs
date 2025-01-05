/* empty css                          */
import { createClient } from '@sanity/client';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, k as renderScript, b as createAstro, d as addAttribute, l as renderHead, a as renderComponent, n as renderSlot } from './astro/server_BnVd87TU.mjs';
import 'kleur/colors';
import { s as stringify } from './_@astro-renderers_OH2ffHCx.mjs';
import 'clsx';

const ATTR_REGEX = /[&"<]/g;

/**
 * @template V
 * @param {V} value
 * @param {boolean} [is_attr]
 */
function escape_html(value, is_attr) {
	const str = String(value ?? '');

	const pattern = ATTR_REGEX ;
	pattern.lastIndex = 0;

	let escaped = '';
	let last = 0;

	while (pattern.test(str)) {
		const i = pattern.lastIndex - 1;
		const ch = str[i];
		escaped += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
		last = i + 1;
	}

	return escaped + str.substring(last);
}

/**
 * `<div translate={false}>` should be rendered as `<div translate="no">` and _not_
 * `<div translate="false">`, which is equivalent to `<div translate="yes">`. There
 * may be other odd cases that need to be added to this list in future
 * @type {Record<string, Map<any, string>>}
 */
const replacements = {
	translate: new Map([
		[true, 'yes'],
		[false, 'no']
	])
};

/**
 * @template V
 * @param {string} name
 * @param {V} value
 * @param {boolean} [is_boolean]
 * @returns {string}
 */
function attr(name, value, is_boolean = false) {
	if (value == null || (!value && is_boolean) || (value === '' && name === 'class')) return '';
	const normalized = (name in replacements && replacements[name].get(value)) || value;
	const assignment = is_boolean ? '' : `="${escape_html(normalized)}"`;
	return ` ${name}${assignment}`;
}

const sanityClient = createClient(
            {"apiVersion":"v2023-08-24","projectId":"3ans7o2s","dataset":"production","useCdn":false}
          );

globalThis.sanityClient = sanityClient;

function Navbar($$payload) {

	$$payload.out += `<nav class="mx-auto max-w-[1600px] relative"><div class="px-5 sm:px-10"><div class="relative flex justify-between lg:grid lg:grid-cols-10 items-center"><div class="col-span-3"><a href="/"><img${attr("src", '/images/logo.png')} alt="Apollo Properties" class="h-auto w-full max-w-[107px]"></a></div> <div class="col-span-7 hidden lg:block"><ul class="justify-between items-center flex"><li><a href="/fully-furnished-apartments" class="text-lg">Fully Furnished Apartments</a></li> <li><a href="/listings" class="text-lg">Listings</a></li> <li><a href="/faq" class="text-lg">FAQ</a></li> <li><a href="/testimonials" class="text-lg">Testimonials</a></li> <li><a href="/blog" class="text-lg">Blog</a></li> <li><a href="/contact" class="bg-blue-400 hover:bg-blue-600 text-white text-lg font-body py-2 px-4 font-bold rounded-md shadow-lg hover:shadow-none inline-block max-w-[min-content] whitespace-nowrap transition-all">Contact</a></li></ul></div> <button class="flex flex-col gap-[9px] lg:hidden px-2" aria-label="Open mobile menu"><div${attr("class", `w-[37px] h-1 bg-blue-400 rounded origin-[0%_50%] transition-transform ${stringify('')}`)}></div> <div${attr("class", `w-[37px] h-1 bg-blue-400 rounded transition-opacity ${stringify('')}`)}></div> <div${attr("class", `w-[37px] h-1 bg-blue-400 rounded origin-[0%_50%] transition-transform ${stringify('')}`)}></div></button></div></div> `;

	{
		$$payload.out += "<!--[!-->";
	}

	$$payload.out += `<!--]--></nav>`;
}

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer> <div class=""> <div class="p-10 bg-blue-700 flex gap-10 sm:gap-20 flex-wrap text-lg"> <ul class="text-white flex flex-col gap-4"> <li class="underline font-heading font-bold">Site Map</li> <li class=""><a href="/">Home</a></li> <li class=""> <a href="/fully-furnished-apartments">Fully furnished apartments</a> </li> <li class=""><a href="/listings">Listings</a></li> <li class=""><a href="/blog">Blog</a></li> <li class=""><a href="/faq">FAQ</a></li> <li class=""><a href="/testimonials">Testimonials</a></li> </ul> <div class="flex justify-between flex-wrap gap-10 sm:gap-20"> <div class="flex flex-col gap-10"> <div class="flex flex-col gap-1"> <span class="underline font-heading font-bold text-white mb-3">Contact</span> <p class="text-blue-200">From within Japan</p> <a href="tel:0666415301" class="text-white">Office Tel: 06-6641-5301</a> <a href="tel:0666415302" class="text-white">Office Fax: 06-6641-5302</a> <a href="tel:0120932614" class="text-white">Free Dial: 0120-932-614 (*In Osaka Only)</a> </div> <div class="flex flex-col gap-1"> <p class="text-blue-200">After-hours service</p> <a href="tel:09074906251" class="text-white">Cell: 090-7490-6251 (Bruce Bennett)</a> <a href="tel:09089807535" class="text-white">Cell: 090-8980-7535 (In Japanese: Masatoshi Akasaka)</a> </div> </div> <div class="flex flex-col gap-1 mt-0 sm:mt-10"> <p class="text-blue-200">From outside Japan</p> <a href="tel:819074906251" class="text-white">Cell: 81-90-7490-6251</a> <a href="tel:819089807535" class="text-white">Cell: 81-90-8980-7535 (In Japanese)</a> <a href="tel:81666415301" class="text-white">Office Tel: 81-6-6641-5301</a> <a href="tel:81666415302" class="text-white">Office Fax: 81-6-6641-5302</a> <p class="text-white">Skype Name: apollo.properties</p> </div> <div class="flex flex-col gap-1 mt-0 sm:mt-10"> <p class="text-blue-200">E-mail</p> <a href="mailto:info@apollopropertiesosaka.com" class="text-white">info@apollopropertiesosaka.com</a> </div> </div> </div> <div class="bg-[#001528] px-10 py-5 text-white flex justify-between gap-20 flex-wrap"> <small>Copyright (C) Apollo Properties, <span id="year"></span>. All Rights
        Reserved.</small> <a href="https://www.scottstanfel.com" target="_blank">Website designed and devloped by <span class="underline">Scott Stanfel Digital Marketing</span>.</a> </div> </div> </footer> ${renderScript($$result, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Common/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Common/Footer.astro", void 0);

const $$Astro = createAstro("https://apollopropertiesosaka.com/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}><link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"><link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"><link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"><link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"><link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"><link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"><link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"><link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"><link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"><link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"><link rel="manifest" href="/favicon/manifest.json"><meta name="msapplication-TileColor" content="#ffffff"><meta name="msapplication-TileImage" content="/favicon/ms-icon-144x144.png"><meta name="theme-color" content="#ffffff">${renderHead()}</head> <body class=""> ${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Common/Navbar.svelte", "client:component-export": "default" })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/layouts/Layout.astro", void 0);

export { $$Layout as $, sanityClient as s };
