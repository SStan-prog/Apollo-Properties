import { $ as $$Layout } from '../chunks/Layout_B-ghPKhS.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent, d as addAttribute } from '../chunks/astro/server_BnVd87TU.mjs';
import 'kleur/colors';
import 'clsx';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from '../chunks/_astro_assets_LT_K2wfP.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useRef } from 'react';
import { S as Swiper, a as SwiperSlide } from '../chunks/swiper-slide_D45HjYrJ.mjs';
/* empty css                                 */
import { u as urlForImage } from '../chunks/urlForImage_qTBdYiVj.mjs';
import { a as getLatestArticle, g as getAllArticles } from '../chunks/api_DSWiZiBa.mjs';
import { $ as $$FinalCta } from '../chunks/FinalCta_CwvjKs0_.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_OH2ffHCx.mjs';

const $$Index$5 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="relative bg-bottom bg-cover bg-[url('/images/home-header-mobile.jpg')] sm:bg-[url('/images/home-header.jpg')] "> <div class=""> <div class="absolute bg-[rgba(0,0,0,.4)] h-full w-full z-10"></div> <div class=" max-w-[1520px] mx-auto"> <div class="relative z-20 px-5 sm:px-20 pt-20 pb-10 sm:py-40"> <div class="gap-10 items-center mb-5 hidden sm:flex"> <span class="font-bold text-blue-700 bg-blue-100 rounded-full px-4 py-2">
Services in English
</span> <span class="font-bold text-blue-700 bg-blue-100 rounded-full px-4 py-2">
No key or guarantor fees
</span> </div> <h1 class="text-4xl sm:text-6xl text-white drop-shadow-xl font-bold font-heading max-w-[1000px] leading-snug sm:leading-snug mb-5 sm:mb-14">
Fully furnished apartments in Osaka for short & long term stays
</h1> <div class="flex gap-10 items-center mb-14 sm:mb-0"> <a href="/contact" class="bg-blue-400 hover:bg-blue-600 text-white text-xl sm:text-3xl font-body py-2 px-4 sm:py-3 sm:px-6 inline-block font-bold rounded-md hover:shadow-none shadow-lg whitespace-nowrap transition-all">
Contact
</a> <a href="/listings" class="font-bold text-xl sm:text-3xl text-white hover:text-grey-200 underline transition-colors">
See Listings
</a> </div> <div class="flex flex-col gap-4  sm:hidden"> <span class="font-bold text-blue-700 bg-blue-100 rounded-full px-2 py-1 text-sm whitespace-nowrap max-w-min">
Services in English
</span> <span class="font-bold text-blue-700 bg-blue-100 rounded-full px-2 py-1 text-sm whitespace-nowrap max-w-min">
No key or guarantor fees
</span> </div> </div> </div> </div> </header>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Home/Header/index.astro", void 0);

const $$Index$4 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-grey-100"> <div class="lg:max-w-[1300px] mx-auto py-24 flex flex-col items-center px-5 sm:px-10"> <div class="flex flex-col items-center max-w-[830px] text-center mb-20"> <h2 class="text-blue-600 text-3xl sm:text-4xl font-heading font-bold mb-5">
We remove the hassle of getting settled in Japan
</h2> <p class="text-grey-700 mx-0 sm:mx-10">
We are a Japanese and Canadian owned company that has been providing the
        Ex-Pat community here in Osaka Japan with quality fully-furnished
        housing since 2001.
</p> </div> <div class="flex flex-col items-center lg:items-start lg:flex-row justify-between text-grey-700 w-full gap-10"> <div class="flex flex-col items-center text-center max-w-[350px]"> <img src="/icons/contracts.svg" alt="Short-term minimum contracts" class="mb-5" width="75" height="75"> <p class="font-bold text-lg">Short-term minimum contracts</p> <p>
We only require a minimum 3 month contract while other realtors
          typically require 2 years.
</p> </div> <div class="flex flex-col items-center text-center max-w-[350px]"> <img src="/icons/save.svg" alt="No hidden costs" class="mb-5" width="75" height="75"> <p class="font-bold text-lg">No hidden costs</p> <p>
Save big on your move in. We don\`t require a key or guarantor fee like
          other realtors.
</p> </div> <div class="flex flex-col items-center text-center max-w-[350px]"> <img src="/icons/foreigners.svg" alt="Foreigner friendly" class="mb-5" width="75" height="75"> <p class="font-bold text-lg">Foreigner friendly</p> <p>
Our tenants come frome around the world. Our staff are English
          speaking and highly professional.
</p> </div> </div> </div> </section>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Home/Features/index.astro", void 0);

const $$Index$3 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="max-w-[800px] lg:max-w-[1400px] mx-auto py-24 grid grid-cols-1 lg:grid-cols-2 gap-20 px-5 sm:px-10 sm:-mb-52 lg:mb-0"> <div class=""> <h2 class="text-blue-700 text-3xl sm:text-4xl font-heading font-bold mb-5">
Above and Beyond!
</h2> <p class="text-grey-700 mb-10">
Apollo Properties go that extra mile and offer service you wont usually
        get from other real estate agencies:
</p> <ul class="flex flex-col gap-4"> <li class="flex gap-3 justify-between mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-full max-w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600 w-full">
Free pick-up service at the closest station to your apartment
</p> </li> <li class="flex gap-3 mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-full max-w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600">Free internet in most units</p> </li> <li class="flex gap-3 mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-full max-w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600">
Super-friendly, informative local support staff
</p> </li> <li class="flex gap-3 mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-full max-w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600">
Assistance at the local ward office to register your address
</p> </li> </ul> <div class="flex gap-10 mt-10 sm:mt-20 items-baseline"> <a href="/contact" class="bg-blue-400 hover:bg-blue-600 text-white text-lg sm:text-2xl font-body py-2 px-4 sm:py-3 sm:px-6 inline-block font-bold rounded-md hover:shadow-none shadow-lg whitespace-nowrap transition-all">
Contact
</a> <a href="/listings" class="font-bold text-lg sm:text-2xl text-blue-400 hover:text-blue-600 underline transition-colors">
See Listings
</a> </div> </div> <div class="relative w-full lg:max-h-[500px] grid grid-cols-5 grid-rows-2"> <div class="col-[1/5] relative z-10 row-start-1 max-w-[400px]"> <div class="bg-white p-2 sm:p-3 rounded-[20px] sm:rounded-[40px] translate-y-[60%]"> ${renderComponent($$result, "Image", $$Image, { "src": "/images/ffa/inclusions.jpg", "alt": "A fully furnished apartment located in Namba, Osaka.", "width": 400, "height": 300, "class": "rounded-[15px] sm:rounded-[35px]" })} </div> </div> ${renderComponent($$result, "Image", $$Image, { "src": "/images/ffa/osaka.jpg", "alt": "A road of shops in Shin-sekai, Osaka.", "width": 500, "height": 400, "class": "rounded-[20px] sm:rounded-[40px] relative col-[2/6] row-[1/2] row-start-1 -scale-x-100" })} </div> </div> </section>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Home/Explanation/index.astro", void 0);

const index = () => {
  const swiperRef = useRef();
  return /* @__PURE__ */ jsx(
    "section",
    {
      style: {
        backgroundImage: "linear-gradient(97.23deg, #004380 0%, #0085D2 100%)"
      },
      children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center pt-20 pb-10", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-grey-100 text-3xl sm:text-4xl font-heading font-bold px-5  lg:text-center sm:px-10 lg:px-20 max-w-[800px] lg:max-w-[700px] mx-auto mb-8 lg:mb-0", children: "Testimonials - Hear what our happy tenants have to say" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col w-full items-center py-20 px-5 sm:px-10 lg:px-20 max-w-[800px]  mx-auto", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-5 lg:block hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "icons/quote.svg",
              alt: "testimonials",
              width: 52,
              height: 39
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "relative pt-5 lg:pt-0", children: [
            " ",
            /* @__PURE__ */ jsxs(
              Swiper,
              {
                slidesPerView: 1,
                onBeforeInit: (swiper) => {
                  swiperRef.current = swiper;
                },
                loop: true,
                children: [
                  /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "lg:px-14 flex flex-col lg:items-center", children: [
                    /* @__PURE__ */ jsx("p", { className: "lg:text-center text-grey-100 text-sm sm:text-base", children: "My family and I have been regular visitors to Osaka for the last 10 years and each visit we have stayed with Apollo Properties. The apartments are always clean and have everything we need. Bruce and Masatoshi are highly professional and we always feel looked after. We recommend Apollo apartments to family and friends when they come to stay and they are always impressed with the value, price and location. And that is why we will continue to book with them." }),
                    /* @__PURE__ */ jsxs("div", { className: "mt-5 flex gap-5 items-center", children: [
                      /* @__PURE__ */ jsx(
                        "img",
                        {
                          className: " w-[80px] h-[80px] rounded-full border-2 border-blue-200",
                          src: "images/testimonials/debbie.png",
                          alt: "debbie"
                        }
                      ),
                      /* @__PURE__ */ jsxs("div", { className: "flex flex-col  text-grey-100", children: [
                        /* @__PURE__ */ jsx("p", { className: "font-bold", children: "Debbie" }),
                        /* @__PURE__ */ jsx("p", { children: "Family" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(SwiperSlide, { children: /* @__PURE__ */ jsxs("div", { className: "lg:px-14 flex flex-col lg:items-center", children: [
                    /* @__PURE__ */ jsx("p", { className: "lg:text-center text-grey-100 text-sm sm:text-base", children: "I’ve been a tenant with Apollo Properties for almost a year. Bruce and Masatoshi have been very helpful since my move to Japan. They're very quick to respond and get a hold of. Bruce was able to help me set up my internet and replace a couple of appliances that have broken within a day. Staying at Apollo Properties have been instrumental to my move to Japan." }),
                    /* @__PURE__ */ jsxs("div", { className: "mt-5 flex gap-5 items-center", children: [
                      /* @__PURE__ */ jsx(
                        "img",
                        {
                          className: " w-[80px] h-[80px] rounded-full border-2 border-blue-200",
                          src: "images/testimonials/justin.png",
                          alt: "debbie"
                        }
                      ),
                      /* @__PURE__ */ jsxs("div", { className: "flex flex-col  text-grey-100", children: [
                        /* @__PURE__ */ jsx("p", { className: "font-bold", children: "Justin" }),
                        /* @__PURE__ */ jsx("p", { children: "student" })
                      ] })
                    ] })
                  ] }) })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => swiperRef.current?.slidePrev(),
                className: "absolute lg:-translate-x-1/2 -translate-y-1/2 -left-2 sm:left-0 -top-8 lg:top-1/3 z-10 py-[18px] px-[20px] bg-blue-100 border-blue-600 border-2 rounded-full scale-75 sm:scale-100 ",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "icons/triangle.svg",
                    alt: "previous",
                    className: " -scale-100",
                    width: 15,
                    height: 19
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => swiperRef.current?.slideNext(),
                className: "absolute translate-x-14  sm:translate-x-20 lg:translate-x-1/2 -translate-y-1/2 left-0 -top-8 lg:left-auto lg:right-0 lg:top-1/3 z-10 py-[18px] px-[20px] bg-blue-100 border-blue-600 border-2 rounded-full scale-75 sm:scale-100 ",
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: "/icons/triangle.svg",
                    alt: "next",
                    width: 15,
                    height: 19
                  }
                )
              }
            )
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-14 -mb-10", children: /* @__PURE__ */ jsx(
            "a",
            {
              href: "/testimonials",
              className: "text-blue-200 underline hover:text-blue-300 transition-colors",
              children: "See all testimonials"
            }
          ) })
        ] })
      ] })
    }
  );
};

const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="max-w-[800px] lg:max-w-[1400px] mx-auto py-24 grid grid-cols-1 lg:grid-cols-2 gap-32 px-5 sm:px-10 -mb-20 sm:-mb-52 lg:mb-0"> <div class="row-[2] lg:row-[1] relative w-full lg:max-h-[500px] grid grid-cols-5 grid-rows-2"> <div class="col-[3/6] relative z-10 row-start-1 max-w-[400px]"> <div class="bg-white p-2 sm:p-3 rounded-[20px] sm:rounded-[40px] translate-y-[60%]"> ${renderComponent($$result, "Image", $$Image, { "src": "/images/team.jpg", "alt": "Bruce and Masatoshi, owners of Apollo Properties", "width": 400, "height": 300, "class": "rounded-[15px] sm:rounded-[35px]", "quality": 100 })} </div> </div> ${renderComponent($$result, "Image", $$Image, { "src": "/images/office.jpg", "alt": "The Apollo Properties office located in Namba, Osaka.", "width": 500, "height": 380, "class": "rounded-[20px] sm:rounded-[40px] relative col-[1/5] row-[1/2] row-start-1" })} </div> <div class=""> <h2 class="text-blue-700 text-3xl sm:text-4xl font-heading font-bold mb-5">
About Us
</h2> <p class="text-grey-700 mb-10">
Meet co-owners Masatoshi and Bruce. This Japanese/Canadian duo has over
        20 years of local experience dealing with over thousands of people
        coming and staying in Japan to work as well as on vacation. Let Bruce
        and Masatoshi make your transition into Japanese life easy and carefree.
        Give us a try!
</p> <ul class="flex flex-col gap-4"> <li class="flex gap-3 justify-between mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-full max-w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600 w-full">25+ years experience</p> </li> <li class="flex gap-3 mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-full max-w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600">We know the ropes</p> </li> <li class="flex gap-3 mb-2"> <span class="bg-[url('/icons/check.svg')] h-[16px] w-full max-w-[16px] bg-cover mt-1"></span>${" "} <p class="text-grey-600">Japanese and English support</p> </li> </ul> <div class="flex gap-10 mt-10 sm:mt-20 items-baseline"> <a href="/contact" class="bg-blue-400 hover:bg-blue-600 text-white text-lg sm:text-2xl font-body py-2 px-4 sm:py-3 sm:px-6 inline-block font-bold rounded-md hover:shadow-none shadow-lg whitespace-nowrap transition-all">
Contact
</a> <a href="/listings" class="font-bold text-lg sm:text-2xl text-blue-400 hover:text-blue-600 underline transition-colors">
See Listings
</a> </div> </div> </div> </section>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Home/About/index.astro", void 0);

const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const data = await getLatestArticle();
  return renderTemplate`${maybeRenderHead()}<section class="bg-grey-100"> <div class="grid grid-cols-1 lg:grid-cols-2 py-20 px-5 sm:px-10 lg:px-20 gap-10 lg:gap-20 items-center max-w-[800px] lg:max-w-[1400px] mx-auto"> <div> <!-- <Image
        src={urlForImage(data.featuredImage).width(650).format("webp").url()}
        alt={data.featuredImage.alt}
        aspectRatio="16/9"
      /> --> <img class="rounded-[30px] lg:rounded-[50px]"${addAttribute(urlForImage(data.featuredImage).width(800).format("webp").url(), "src")}${addAttribute(data.featuredImage.alt, "alt")}> </div> <div class=""> <h2 class="text-blue-700 font-heading text-3xl lg:text-4xl font-bold mb-5"> ${data.title} </h2> <p class="text-grey-600 font-body">${data.excerpt}</p> <div class="mt-10 flex sm:items-center flex-col sm:flex-row gap-10"> <a${addAttribute(`/blog/${data.slug.current}`, "href")} class="bg-blue-400 hover:bg-blue-600 text-white text-lg sm:text-2xl font-body py-2 px-4 sm:py-3 sm:px-6 inline-block font-bold rounded-md hover:shadow-none shadow-lg whitespace-nowrap max-w-[min-content] transition-all">
Read Article
</a> <a href="/blog" class="font-bold text-lg sm:text-2xl text-blue-400 hover:text-blue-600 underline transition-colors">
See All Articles
</a> </div> </div> </div> </section>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Home/Blog/index.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  await getAllArticles();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Apollo Properties Osaka | Fully Furnished Apartments", "description": "Apollo Properties Osaka removes the hassle of getting settled in Japan by offering fully furnished apartments in Osaka for both short and long term stays." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Index$5, {})} ${renderComponent($$result2, "Features", $$Index$4, {})} ${renderComponent($$result2, "Explanation", $$Index$3, {})} ${renderComponent($$result2, "Testimonials", index, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Home/Testimonials", "client:component-export": "default" })} ${renderComponent($$result2, "About", $$Index$2, {})} ${renderComponent($$result2, "Blog", $$Index$1, {})} ${renderComponent($$result2, "FinalCta", $$FinalCta, {})} ` })}`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/index.astro", void 0);

const $$file = "/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
