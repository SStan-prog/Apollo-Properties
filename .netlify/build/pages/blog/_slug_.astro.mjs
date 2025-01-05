import { $ as $$Layout } from '../../chunks/Layout_B-ghPKhS.mjs';
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, u as unescapeHTML, F as Fragment, m as maybeRenderHead } from '../../chunks/astro/server_BnVd87TU.mjs';
import 'kleur/colors';
import { S as Ss, u as urlForImage } from '../../chunks/urlForImage_qTBdYiVj.mjs';
import { $ as $$FinalCta } from '../../chunks/FinalCta_CwvjKs0_.mjs';
import { g as getAllArticles } from '../../chunks/api_DSWiZiBa.mjs';
export { r as renderers } from '../../chunks/_@astro-renderers_OH2ffHCx.mjs';

const customComponents = {
  types: {
    image: ({ value }) => {
      return `
        <picture>
          <source
            srcset="${urlForImage(value.asset).format("webp").url()}"
            type="image/webp"
          />
          <img
            class="responsive__img"
            src="${urlForImage(value.asset).url()}"
            alt="${value.alt}"
          />
        </picture>
      `;
    },
  },
  marks: {
    link: ({ value, children }) => {
      const { href, blank } = value;

      console.log(value);
      if (blank) {
        return `<a href=${href} target="_blank" rel="noreferrer">${children}</a>`;
      } else {
        return `<a href=${href}>${children}</a>`;
      }
    },
  },
};

function sanityPortableText(portabletext) {
  return Ss(portabletext, customComponents);
}

const $$Astro$2 = createAstro("https://apollopropertiesosaka.com/");
const $$SanityPortableText = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SanityPortableText;
  const { portableText } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(sanityPortableText(portableText))}` })}`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Blog/SanityPortableText.astro", void 0);

const $$Astro$1 = createAstro("https://apollopropertiesosaka.com/");
const $$Article = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Article;
  const { article } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="py-20"> <div class="mx-auto max-w-[800px]"> <h1 class="px-5 font-heading font-bold text-blue-700 text-3xl lg:text-5xl mb-10"> ${article.title} </h1> <div class="px-5 [&>p]:py-4 [&>p>a]:text-blue-600 [&>p>a]:font-bold [&>h2]:mb-2 [&>h3]:mb-2 [&>h4]:mb-2 [&>h2]:text-3xl [&>h2]:font-bold [&>h3]:text-2xl [&>h3]:font-bold [&>h4]:text-xl [&>h4]:font-bold [&>ul]:my-2 [&>ul]:ml-8 [&>ul>li]:my-1 [&>ul]:list-disc"> ${renderComponent($$result, "SanityPortableText", $$SanityPortableText, { "portableText": article.body })} </div> </div> </article>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Blog/Article.astro", void 0);

const $$Astro = createAstro("https://apollopropertiesosaka.com/");
async function getStaticPaths() {
  const allArticles = await getAllArticles();
  return allArticles.map((article) => ({
    params: { slug: article.slug.current },
    props: { article }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { article } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": article.title, "description": article.excerpt }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Article", $$Article, { "article": article })} ${renderComponent($$result2, "FinalCta", $$FinalCta, {})} ` })}`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
