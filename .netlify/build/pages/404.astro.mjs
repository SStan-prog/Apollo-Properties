import { $ as $$Layout } from '../chunks/Layout_B-ghPKhS.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_BnVd87TU.mjs';
import 'kleur/colors';
import 'clsx';
export { r as renderers } from '../chunks/_@astro-renderers_OH2ffHCx.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header style="background-image:  linear-gradient(97.23deg, #004380 0%, #0085D2 100%); " class="flex flex-col items-center py-14 md:py-24 min-h-[50vh]"> <h1 class="text-4xl px-5 leading-normal md:leading-normal md:text-6xl text-white font-heading font-bold text-center mb-10 md:px-10">
404 page not found
</h1> <a href="/" class="font-bold text-2xl sm:text-4xl text-white hover:text-grey-200 underline transition-colors text-center w-full">
Back to Home
</a> </header>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/WrongPage/index.astro", void 0);

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "404 Page Not Found", "description": "404 Page Not Found" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WrongPage", $$Index, {})} ` })}`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/404.astro", void 0);

const $$file = "/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
