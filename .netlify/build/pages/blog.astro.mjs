import { $ as $$Layout } from '../chunks/Layout_B-ghPKhS.mjs';
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_BnVd87TU.mjs';
import 'kleur/colors';
import { a as getLatestArticle, g as getAllArticles } from '../chunks/api_DSWiZiBa.mjs';
import { $ as $$Header } from '../chunks/Header_BZ0ZkNV9.mjs';
import { u as urlFor } from '../chunks/imageBuilder_D08OFcrB.mjs';
import { $ as $$Btn } from '../chunks/Btn_DZiKYpmj.mjs';
import 'clsx';
export { r as renderers } from '../chunks/_@astro-renderers_OH2ffHCx.mjs';

const $$Astro$1 = createAstro("https://apollopropertiesosaka.com/");
const $$Featured = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Featured;
  const { featured } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="my-10"> <article> <div class="grid grid-cols-1 lg:grid-cols-2 py-20 px-5 sm:px-10 lg:px-20 gap-10 lg:gap-20 items-center max-w-[800px] lg:max-w-[1400px] mx-auto"> <div> <img class="rounded-[30px] lg:rounded-[50px]"${addAttribute(urlFor(featured.featuredImage.asset).width(800).format("webp").url(), "src")}${addAttribute(featured.featuredImage.alt, "alt")}> </div> <div class=""> <h2 class="text-blue-700 font-heading text-3xl lg:text-4xl font-bold mb-5"> ${featured.title} </h2> <p class="text-grey-600 font-body">${featured.excerpt}</p> <div class="mt-10 flex flex-col sm:flex-row gap-10"> ${renderComponent($$result, "Btn", $$Btn, { "text": "Read Article", "href": `/blog/${featured.slug.current}` })} </div> </div> </div> </article> </section>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Blog/Featured.astro", void 0);

const $$Astro = createAstro("https://apollopropertiesosaka.com/");
const $$Archive = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Archive;
  const { articles } = Astro2.props;
  const articlesSliced = articles.slice(1);
  return renderTemplate`${maybeRenderHead()}<section class="mb-20"> <div class="grid grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10 lg:gap-20 px-5 sm:px-10 lg:px-20 max-w-[800px] lg:max-w-[1400px] mx-auto"> ${articlesSliced.map((article) => {
    return renderTemplate`<a${addAttribute(`/blog/${article.slug.current}`, "href")}> <article class="flex flex-col border-2 border-grey-200 rounded-[10px] sm:rounded-[20px] hover:shadow-lg hover:bg-blue-100 transition-all"> <div class=""> <img class="rounded-t-[10px] sm:rounded-t-[20px] aspect-[4/2.8] "${addAttribute(urlFor(article.featuredImage.asset).format("webp").url(), "src")}${addAttribute(article.featuredImage.alt, "alt")}> </div> <div class=""> <h2 class=" text-blue-700 text-sm sm:text-lg lg:text-2xl font-heading font-bold p-2 sm:p-5"> ${article.title} </h2> </div> </article> </a>`;
  })} </div> </section>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Blog/Archive.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const latest = await getLatestArticle();
  const allArticles = await getAllArticles();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Blog", "description": "We are a Japanese and Canadian owned company that has been providing the Ex-Pat community here in Osaka Japan with quality fully-furnished housing since 2001." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "heading": "Blog" })} ${renderComponent($$result2, "Featured", $$Featured, { "featured": latest })} ${renderComponent($$result2, "Archive", $$Archive, { "articles": allArticles })} ` })}`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/blog/index.astro", void 0);

const $$file = "/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
