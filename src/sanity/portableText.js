import { portableTextToHtml } from "astro-sanity";
import { urlForImage } from "./urlForImage";

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

export function sanityPortableText(portabletext) {
  return portableTextToHtml(portabletext, customComponents);
}
