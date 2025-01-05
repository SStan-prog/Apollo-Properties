import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_BnVd87TU.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://apollopropertiesosaka.com/");
const $$Btn = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Btn;
  const { text, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="bg-blue-400 hover:bg-blue-600 hover:shadow-none text-white text-lg font-body py-2 px-4 font-bold rounded-md shadow-lg inline-block max-w-[min-content] whitespace-nowrap transition-all">${text}</a>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Common/Buttons/Btn.astro", void 0);

export { $$Btn as $ };
