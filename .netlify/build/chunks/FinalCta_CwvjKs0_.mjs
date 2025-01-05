import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from './astro/server_BnVd87TU.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://apollopropertiesosaka.com/");
const $$BtnLg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BtnLg;
  const { text, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="bg-blue-400 hover:bg-blue-600 text-center text-white text-xl sm:text-2xl font-body py-3 sm:py-4 px-4 sm:px-8 inline-block font-bold rounded-md hover:shadow-none shadow-lg transition-all">${text}</a>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Common/Buttons/BtnLg.astro", void 0);

const $$FinalCta = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-center bg-cover bg-[url('/images/osaka-night-mobile.jpg')] sm:bg-[url('/images/osaka-night.jpg')]"> <div class="relative flex flex-col items-center justify-center w-full h-full"> <div class="w-full h-full"></div> <div class="absolute bg-[rgba(0,0,0,.4)] h-full w-full z-10"></div> <div class="relative px-5 py-20 lg:py-40 z-20 w-full h-full flex flex-col items-center justify-center"> <h2 class="max-w-xl mb-10 text-white text-4xl lg:text-5xl font-heading font-bold text-center leading-tight">
Start your life in Osaka on the right foot
</h2> ${renderComponent($$result, "BtnLg", $$BtnLg, { "text": "Contact", "href": "/contact" })} </div> </div> <div class=""></div> </section>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Common/FinalCta.astro", void 0);

export { $$FinalCta as $, $$BtnLg as a };
