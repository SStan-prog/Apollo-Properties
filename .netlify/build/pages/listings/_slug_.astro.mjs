import { $ as $$Layout } from '../../chunks/Layout_B-ghPKhS.mjs';
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../../chunks/astro/server_BnVd87TU.mjs';
import 'kleur/colors';
import { b as getAllListings } from '../../chunks/api_DSWiZiBa.mjs';
import { a as $$BtnLg, $ as $$FinalCta } from '../../chunks/FinalCta_CwvjKs0_.mjs';
import { PortableText } from '@portabletext/react';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useRef } from 'react';
import { S as Swiper, a as SwiperSlide } from '../../chunks/swiper-slide_D45HjYrJ.mjs';
/* empty css                                    */
import { u as urlFor } from '../../chunks/imageBuilder_D08OFcrB.mjs';
import moment from 'moment';
import 'clsx';
export { r as renderers } from '../../chunks/_@astro-renderers_OH2ffHCx.mjs';

const Slider = ({ images }) => {
  const swiperRef = useRef();
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      Swiper,
      {
        slidesPerView: 1,
        onBeforeInit: (swiper) => {
          swiperRef.current = swiper;
        },
        loop: true,
        children: images?.map((image, i) => {
          return /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsx(
            "img",
            {
              src: urlFor(image.asset).width(1e3).format("webp").url(),
              alt: image["alt"],
              className: "rounded-[20px] md:rounded-[40px] w-full h-auto aspect-[4/3] object-contain mx-auto "
            }
          ) }, i);
        })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => swiperRef.current?.slidePrev(),
        className: "absolute -translate-x-1/2 -translate-y-1/2 left-0 top-1/2 z-10 py-[18px] px-[20px] bg-blue-100 border-blue-600 border-2 rounded-full scale-75 sm:scale-100 ",
        children: /* @__PURE__ */ jsx("img", { src: "/icons/triangle.svg", alt: "previous", className: " -scale-100" })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => swiperRef.current?.slideNext(),
        className: "absolute translate-x-1/2 -translate-y-1/2 right-0 top-1/2 z-10 py-[18px] px-[20px] bg-blue-100 border-blue-600 border-2 rounded-full scale-75 sm:scale-100 ",
        children: /* @__PURE__ */ jsx("img", { src: "/icons/triangle.svg", alt: "next" })
      }
    )
  ] });
};

const $$Astro$1 = createAstro("https://apollopropertiesosaka.com/");
const $$ListingSideBar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ListingSideBar;
  const { currentListing, allListings } = Astro2.props;
  const activeListings = allListings.filter(
    (sideBarListing) => {
      if (!sideBarListing.hideListing) return sideBarListing;
    }
  );
  const currentSlug = currentListing.slug.current;
  const sideBarListings = activeListings.filter((sideBarListing) => {
    if (sideBarListing.slug.current !== currentSlug) return sideBarListing;
  }).slice(0, 3);
  return renderTemplate`${maybeRenderHead()}<section class="xl:mt-0 mt-16 md:mt-20 mx-auto xl:mx-0 max-w-md w-full xl:w-96 xl:sticky top-10"> <div class="flex flex-col justify-center items-center"> <h2 class="text-blue-700 text-2xl font-bold mb-4 text-center xl:text-left">
Other apartments you may like
</h2> <div class="flex flex-col items-center"> <ul> ${sideBarListings.map((listing) => {
    return renderTemplate`<li class="border-b  border-b-grey-300 last:border-b-0"> <a${addAttribute(`/listings/${listing.slug?.current}`, "href")} class="text-blue-600  font-body inline-block font-bold "> <div class="flex flex-col my-4 py-4 p-4 rounded-lg w-auto duration-500 hover:shadow-lg hover:bg-opacity-80 hover:bg-white"> <div class="flex flex-col-reverse sm:grid sm:grid-cols-2 items-start sm:items-center"> <div class="h-full"> <img${addAttribute(urlFor(listing?.images[0]?.asset).width(300).format("webp").url(), "src")}${addAttribute(listing.images[0].alt, "alt")} class="rounded-lg w-full h-full object-cover"> </div> <div class="flex flex-col  h-full sm:pl-4 mb-4 sm:mb-0"> <h5 class="text-blue-600 font-bold text-base leading-4 mb-1 break-all"> ${listing.name} </h5> <p class="text-grey-600 font-normal text-sm mb-1"> ${listing.address} </p> <p class="text-blue-700  mb-1"> <span class=" font-bold">¥${listing.price}</span>${" "} <span class="whitespace-nowrap text-xs">
per month
</span> </p> </div> </div> </div> </a> </li>`;
  })} </ul> <div class="border-t border-gray-300 my-2"></div> <div> <a${addAttribute("/listings", "href")} class="text-blue-400 text-l underline sm:text-m font-body font-bold">
View all listings
</a> </div> </div> </div> </section>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Listings/ListingSideBar.astro", void 0);

const $$Astro = createAstro("https://apollopropertiesosaka.com/");
async function getStaticPaths() {
  const listings = await getAllListings();
  const acitveListings = listings.filter((listing) => {
    if (!listing.hideListing) return listing;
  });
  return acitveListings.map((listing) => ({
    params: { slug: listing?.slug?.current },
    props: { listing }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const allListings = await getAllListings();
  const { listing } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": listing.name, "description": "test" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="py-20 bg-grey-100 flex flex-col items-center mx-auto"> <section class="flex flex-col xl:flex-row items-start px-5 sm:px-10 xl:gap-0 max-w-[1600px]"> <div class="flex flex-1 xl:px-10 xl:w-3/4"> <div class="bg-white lg:shadow py-10 px-4 sm:px-8 sm:p-10 rounded-none lg:rounded-2xl"> <div class="flex flex-col items-start w-full"> <div class="flex flex-col md:flex-row justify-between gap-4 xl:gap-10 w-full"> <div class="mb-2 md:mb-0"> <h2 class="text-blue-700 font-bold text-3xl mb-1 break-all"> ${listing.name} </h2> <p class="text-grey-600 text-xl xl:mb-5"> ${listing.address} </p> </div> <p class="text-blue-600 text-lg mb-6"> <span class="text-2xl md:text-3xl font-bold"> ${" "}
¥${listing.price} </span>${" "} <br> <span class="whitespace-nowrap">per month</span> </p> </div> <div class="flex flex-col w-full gap-2 mb-6"> <p class="text-grey-600 text-xl"> <strong class="text-blue-600">Available from:</strong>${" "} ${moment(listing.availability).format("MMMM Do, YYYY")} </p> <p class="text-grey-600 text-xl"> <strong class="text-blue-600">Size:</strong>${" "} ${listing.size} m<sup>2</sup> </p> </div> ${renderComponent($$result2, "BtnLg", $$BtnLg, { "href": "/contact", "text": "Contact Us About This Listing" })} <div class="w-full my-16 xl:my-10"> ${renderComponent($$result2, "Slider", Slider, { "images": listing.images, "client:load": true, "client:component-hydration": "load", "client:component-path": "components/Listings/Slider", "client:component-export": "default" })} </div> <div class=""> <p class="text-blue-600 font-bold text-xl">About the property</p> <div class="text-grey-600 text-lg mb-12"> ${renderComponent($$result2, "PortableText", PortableText, { "value": listing.description })} </div> ${renderComponent($$result2, "BtnLg", $$BtnLg, { "href": "/contact", "text": "Contact Us About This Listing" })} </div> </div> </div> </div> ${renderComponent($$result2, "ListingSideBar", $$ListingSideBar, { "currentListing": listing, "allListings": allListings, "class": "w-full xl:w-1/4" })} </section> </div> ${renderComponent($$result2, "FinalCta", $$FinalCta, {})} ` })}`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/listings/[slug].astro", void 0);

const $$file = "/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/listings/[slug].astro";
const $$url = "/listings/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
