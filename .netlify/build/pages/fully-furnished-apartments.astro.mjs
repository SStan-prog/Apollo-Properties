import { $ as $$Layout } from '../chunks/Layout_B-ghPKhS.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_BnVd87TU.mjs';
import 'kleur/colors';
import 'clsx';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_LT_K2wfP.mjs';
import { $ as $$FinalCta } from '../chunks/FinalCta_CwvjKs0_.mjs';
import { g as getAllArticles } from '../chunks/api_DSWiZiBa.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_OH2ffHCx.mjs';

const $$Index$3 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="relative bg-bottom bg-cover  bg-[url('/images/apartment-header-mobile.jpg')] sm:bg-[url('/images/apartment-header.jpg')]"> <div class=""> <div class="absolute bg-[rgba(0,0,0,.4)] h-full w-full z-10"></div> <div class=" max-w-[1520px] mx-auto"> <div class="relative z-20 px-5 sm:px-20 pt-20 pb-10 sm:py-40"> <h1 class="text-4xl sm:text-6xl text-white drop-shadow-bmxl font-bold font-heading max-w-[1000px] leading-snug sm:leading-snug mb-5 sm:mb-14">
About our fully furnished apartments
</h1> <div class="flex gap-10 items-center mb-14 sm:mb-0"> <a href="/contact" class="bg-blue-400 hover:bg-blue-600 text-white text-xl sm:text-3xl font-body py-2 px-4 sm:py-3 sm:px-6 inline-block font-bold rounded-md hover:shadow-none shadow-lg whitespace-nowrap transition-all">
Contact
</a> <a href="/listings" class="font-bold text-xl sm:text-3xl text-white hover:text-grey-200 underline transition-colors">
See Listings
</a> </div> </div> </div> </div> </header>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/FFA/Header/index.astro", void 0);

const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class=""> <div class="max-w-[800px] lg:max-w-[1400px] mx-auto py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 px-5 sm:px-10 -mb-20 sm:-mb-40 lg:mb-0"> <div class=""> <h2 class="text-blue-700 text-3xl sm:text-4xl font-heading font-bold mb-5">
How it works
</h2> <p class="text-grey-700 mb-2">
Fully Furnished or Fully Equipped Apartments, are apartments that allow
        people arriving directly from overseas a very easy transition into life
        here in Japan. Yes of course it is possible to arrive and stay in a
        hotel and start looking around for properties on your own when you first
        arrive, but most likely you may be occupied with the starting of a new
        job, may have little or no Japanese language experience and may be
        generally at a lost as to where to begin your search. We recommend that
        people take a bit of time to get to know the city before making any
        decisions regarding where they plan to live long-term.
</p> <p class="text-grey-700 mb-2">
After a couple months of commuting to and from your new workplace or
        school etc. and having the time to understand where you will spend your
        free time hours, we believe you will be better able to make a
        well-informed decision of where you would like to live for the duration
        of your stay in Japan should it be long term.
</p> <p class="text-grey-700 mb-2">
Thus, this system of arriving, unpacking and starting your new life
        appeals to many newcomers here in Japan. The relatively short 3-month
        minimum stay contract allows you the freedom to decide where you would
        ultimately like to live in relation to your work as well as your private
        life. In fact, many Apollo Properties\` customers stay in the
        fully-furnished apartment they rent for years on end.${" "} </p> <p class="text-grey-700 mb-2">
Note: Generally speaking, non-furnished apartments offered through most
        local Japanese real estate offices cannot be reserved from overseas as
        you must be here in person in order to complete a detailed application
        process. The application process can take up to 2 weeks depending on
        your application details. The management company of the apartment you
        are interested in renting will then either accept or deny your
        application. This process can be time consuming thus making it a good
        decision to rent a fully-furnished apartment or a private room in one of
        our share houses for when you first arrive in Osaka.${" "} </p> </div> <div class="relative w-full max-h-min grid grid-cols-5 grid-rows-2"> <div class="col-[1/5] relative z-10 row-start-1 max-w-[400px]"> <div class="bg-white p-2 sm:p-3 rounded-[20px] sm:rounded-[40px] translate-y-[60%]"> ${renderComponent($$result, "Image", $$Image, { "src": "/images/ffa/bedroom-1.jpg", "alt": "A fully furnished apartment located in Namba, Osaka.", "width": 400, "height": 300, "class": "rounded-[15px] sm:rounded-[35px]" })} </div> </div> ${renderComponent($$result, "Image", $$Image, { "src": "/images/ffa/bedroom-2.jpg", "alt": "A road of shops in Shin-sekai, Osaka.", "width": 500, "height": 380, "class": "rounded-[20px] sm:rounded-[40px] relative col-[2/6] row-[1/2] row-start-1 -scale-x-100" })} </div> </div> </section>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/FFA/Explanation/index.astro", void 0);

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="lg:max-w-[1920px] mx-auto grid grid-col-1 xl:grid-cols-2 relative overflow-hidden"> <div class="xl:row-[1] row-[2]"> ${renderComponent($$result, "Image", $$Image, { "src": "/images/ffa/oji.jpg", "alt": "A fully furnished apartment building located in Tennoji, Osaka.", "width": 960, "height": 1280, "class": "xl:rounded-r-[20px] h-full w-full object-cover" })} </div> <div class="py-20 px-5 sm:px-20"> <h2 class="text-blue-600 text-3xl sm:text-4xl font-heading font-bold mb-10">
Everything you need to get settled
</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 flex-wrap"> <ul> <li class="text-xl font-heading font-bold text-blue-600 mb-2">
Kitchen & Dining
</li> <li class="grid grid-cols-10 max-w-[300px] mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600 col-span-9">Fridge</p> </li> <li class="grid grid-cols-10 max-w-[300px] mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600 col-span-9">Stove</p> </li> <li class="grid grid-cols-10 max-w-[300px] mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600 col-span-9">Dining Table / Chairs</p> </li> <li class="grid grid-cols-10 max-w-[300px] mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600 col-span-9">Garbage Can</p> </li> <li class="grid grid-cols-10 max-w-[300px] mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600 col-span-9">Micro-Wave Oven</p> </li> <li class="grid grid-cols-10 max-w-[300px] mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600 col-span-9">
Assorted Pots, Pans, Cutlery${" "} </p> </li> </ul> <ul> <li class="text-xl font-heading font-bold text-blue-600 mb-2">
Bedroom & General living
</li> <li class="grid grid-cols-10 max-w-[300px] mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600 col-span-9">Bed</p> </li> <li class="grid grid-cols-10 max-w-[300px] mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600 col-span-9">
Air Conditioner / Heater${" "} </p> </li> <li class="grid grid-cols-10 max-w-[300px] mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600 col-span-9">Curtains</p> </li> <li class="grid grid-cols-10 max-w-[300px] mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600 col-span-9">Vacuum Cleaner</p> </li> <li class="grid grid-cols-10 max-w-[300px] mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600 col-span-9">
Wardrobe (Where No Closet Is Available)
</p> </li> <li class="grid grid-cols-10 max-w-[300px] mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600 col-span-9">1 Roll Of Toilet Paper</p> </li> <li class="grid grid-cols-10 max-w-[300px] mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600 col-span-9">Clothes Hangers</p> </li> </ul> <ul> <li class="text-xl font-heading font-bold text-blue-600 mb-2">
Living Room
</li> <li class="grid grid-cols-10 max-w-[300px] justify-between mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600 w-full col-span-9">
Sofa (Space Permitting But Many Places Have One)
</p> </li> <li class="grid grid-cols-10 max-w-[300px] mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600 col-span-9">
Coffee Table ( In Apartments That Have A Sofa)${" "} </p> </li> <li class="grid grid-cols-10 max-w-[300px] mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600 col-span-9">
Wi-fi is generally set up in 95% of the furnished units${" "} </p> </li> </ul> </div> <div class="flex gap-10 mt-20 items-baseline"> <a href="/contact" class="bg-blue-400 hover:bg-blue-600 text-white text-lg sm:text-2xl font-body py-2 px-4 sm:py-3 sm:px-6 inline-block font-bold rounded-md hover:shadow-none shadow-lg whitespace-nowrap transition-all">
Contact
</a> <a href="/listings" class="font-bold text-lg sm:text-2xl text-blue-400 hover:text-blue-600 underline transition-colors">
See Listings
</a> </div> </div> <img src="/images/ffa/japan.svg" alt="" class="xl:w-[40%] h-auto absolute sm:block hidden right-0 top-40 -z-10"> </div> </section>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/FFA/Inclusions/index.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="max-w-[800px] lg:max-w-[1400px] mx-auto py-24 grid grid-cols-1 lg:grid-cols-2 gap-32 px-5 sm:px-10 -mb-40 sm:-mb-32 lg:mb-0"> <div class="row-[2] lg:row-[1] relative w-full lg:max-h-[500px] grid grid-cols-5 grid-rows-2"> <div class="col-[3/6] relative z-10 row-start-1 max-w-[400px]"> <div class="bg-white p-2 sm:p-3 rounded-[20px] sm:rounded-[40px] translate-y-[60%]"> ${renderComponent($$result, "Image", $$Image, { "src": "/images/ffa/kitchen-1.jpg", "alt": "A fully furnished apartment located in Namba, Osaka.", "width": 400, "height": 300, "class": "rounded-[15px] sm:rounded-[35px]", "quality": 100 })} </div> </div> ${renderComponent($$result, "Image", $$Image, { "src": "/images/ffa/bedroom-3.jpg", "alt": "The Apollo Properties office located in Namba, Osaka.", "width": 500, "height": 400, "class": "rounded-[20px] sm:rounded-[40px] relative col-[1/5] row-[1/2] row-start-1" })} </div> <div class=""> <h2 class="text-blue-700 text-3xl sm:text-4xl font-heading font-bold mb-5">
Our move-in process
</h2> <p class="text-grey-700 mb-5">
Below is a brief outline of the process to obtain a fully-furnished
        apartment through Apollo Properties Osaka.
</p> <ol class="flex flex-col gap-2 list-decimal ml-5 text-grey-700 mb-5"> <li class="">
First and foremost send us an email through the contact page on this
          site regarding the type of property you are searching for.
</li> <li class="">
View the online list of properties we currently have available or have
          coming available and decide upon an apartment or share house that best
          suits your needs. If you are not planning to arrive for a few months
          please inquire as to upcoming openings that might not yet be posted on
          the site.
</li> <li class="">
After having decided upon a place that meets your timing, pricing as
          well as size and location requirements, please let us know which place
          you have decided to reserve.
</li> <li class="">
Please wait for a confirmation email from Apollo Properties after
          which we will send you a Paypal money request for 20,000 Japanese yen
          to be used as a holding deposit.
</li> <li class="">
After having completed the money request please send us your arrival
          details to Osaka. (Train or flight itinerary) If you are currently in
          Japan please just let us know the day and time you would like to meet
          and move into the apartment.
</li> <li class="">
Having received your arrival details, we will send you a detailed
          information attachment by email. The details will include the
          apartment address, arrival/pick-up/meeting place, due on arrival costs
          as well the rental agreement for you to look over at your leisure
          before arriving.
</li> <li class="">
On the day you arrive we will make copies of your passport and or
          residence card. We will collect the due on arrivals costs amount in
          cash in Japanese yen in full and will explain the contract and answer
          any questions you may have.
</li> <li class="">
After the contracts have been signed and all the paper work has been
          completed we will then take you to your new home and explain how to
          operate things in the apartment such as the washing machine, stove,
          air-conditioner etc.
</li> <li class="">
Time permitting, we will give you a brief neighborhood orientation and
          point out places of interest such as super markets, the post office,
          parks, the city office etc. This could take place the following day if
          you arrive later in the day.
</li> <li class="">
Finally, you will be given the key to your new home and you will be
          ready to start your new adventure in your new apartment here in
          downtown Osaka.
</li> </ol> <p class="text-grey-700 mb-5">
Note: You will need to register your new address at the local ward
        office soon after moving in and should you need assistance with this, we
        will be able to go with you and help you.
</p> <h3 class="text-blue-700 text-lg sm:text-xl font-heading font-bold">
In short, we are all about service. If you need help and we are able to
        provide it, we will be glad to do so. Allow us the opportunity and we
        will prove it to you!
</h3> </div> </div> </section>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/FFA/Process/index.astro", void 0);

const $$FullyFurnishedApartments = createComponent(async ($$result, $$props, $$slots) => {
  await getAllArticles();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Fully Furnished Apartments | Apollo Properties Osaka", "description": "Apollo Properties offers fully furnished apartments in Osaka, making it easy for people arriving directly from overseas to transition into life in Japan." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Index$3, {})} ${renderComponent($$result2, "Explanation", $$Index$2, {})} ${renderComponent($$result2, "Inclusions", $$Index$1, {})} ${renderComponent($$result2, "Process", $$Index, {})} ${renderComponent($$result2, "FinalCta", $$FinalCta, {})} ` })}`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/fully-furnished-apartments.astro", void 0);

const $$file = "/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/fully-furnished-apartments.astro";
const $$url = "/fully-furnished-apartments";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$FullyFurnishedApartments,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
