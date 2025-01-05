import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead } from './astro/server_BnVd87TU.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://apollopropertiesosaka.com/");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Header;
  const { heading } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header style="background-image:  linear-gradient(97.23deg, #004380 0%, #0085D2 100%);"> <h1 class="text-4xl px-5 py-14 leading-normal md:leading-normal md:text-6xl text-white font-heading font-bold text-center md:py-24 md:px-10"> ${heading} </h1> </header>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Common/Header.astro", void 0);

export { $$Header as $ };
