import { $ as $$Layout } from '../chunks/Layout_B-ghPKhS.mjs';
import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_BnVd87TU.mjs';
import 'kleur/colors';
import { b as getAllListings } from '../chunks/api_DSWiZiBa.mjs';
import { $ as $$Header } from '../chunks/Header_BZ0ZkNV9.mjs';
import moment from 'moment';
import { u as urlFor } from '../chunks/imageBuilder_D08OFcrB.mjs';
import { $ as $$Btn } from '../chunks/Btn_DZiKYpmj.mjs';
import { $ as $$FinalCta } from '../chunks/FinalCta_CwvjKs0_.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_OH2ffHCx.mjs';

const $$Astro$1 = createAstro("https://apollopropertiesosaka.com/");
const $$ListCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ListCard;
  const { listing } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-white w-full sm:max-w-[820px] lg:shadow py-4 px-4 rounded-xl sm:rounded-[20px]"> <div class="grid grid-cols-1 gap-6 sm:gap-0 sm:grid-cols-[40%,60%] h-full"> <img${addAttribute(urlFor(listing.images[0].asset).width(1e3).format("webp").url(), "src")}${addAttribute(listing.images[0].alt, "alt")} class="rounded-xl sm:rounded-[20px] w-full h-full object-cover"> <div class="flex flex-col h-full gap-6 sm:ml-10"> <div class=""> <h2 class="text-blue-700 font-bold text-xl sm:text-2xl mb-2"> ${listing.name} </h2> <p class="text-grey-600 text-lg mb-2.5"> ${listing.address} </p> <p class="text-blue-600 mb-2.5"> <span class="font-bold text-lg sm:text-xl"> ¥${listing.price}</span>${" "} <span class="whitespace-nowrap text-base">per month</span> </p> <p class="text-grey-600"> <strong class="text-blue-600">Available from:</strong>${" "} ${moment(listing.availability).format("MMMM Do, YYYY")} </p> <p class="text-grey-600"> <strong class="text-blue-600">Size:</strong> ${listing.size} m
<sup>2</sup> </p> </div> <div class="mt-auto"> ${renderComponent($$result, "Btn", $$Btn, { "href": `/listings/${listing.slug?.current}`, "text": "View Listing" })} </div> </div> </div> </section>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Listings/ListCard.astro", void 0);

const $$Astro = createAstro("https://apollopropertiesosaka.com/");
const $$Listings = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Listings;
  const { listings } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-grey-100 w-full mx-auto"> <div class="grid xl:grid-cols-2 lg:grid-cols-1 justify-items-center p-5 sm:p-10 gap-10 max-w-[1600px] mx-auto"> ${listings.map((listing) => {
    return renderTemplate`${renderComponent($$result, "ListCard", $$ListCard, { "listing": listing })}`;
  })} </div> </section>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Listings/Listings.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const listings = await getAllListings();
  const activeListings = listings.filter((listing) => {
    if (!listing.hideListing) return listing;
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Available Listings | Fully Furnished Apartments in Osaka", "description": "Explore exclusive, fully furnished apartment rentals in Osaka at Apollo Properties, perfect for foreigners, with listings starting at just \xA533,000 per month." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "heading": "Available Listings" })} ${renderComponent($$result2, "Listings", $$Listings, { "listings": activeListings })} ${renderComponent($$result2, "FinalCta", $$FinalCta, {})} ` })}`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/listings/index.astro", void 0);

const $$file = "/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/listings/index.astro";
const $$url = "/listings";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
