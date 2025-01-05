import { $ as $$Layout } from '../chunks/Layout_B-ghPKhS.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_BnVd87TU.mjs';
import 'kleur/colors';
import { $ as $$Header } from '../chunks/Header_BZ0ZkNV9.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { $ as $$FinalCta } from '../chunks/FinalCta_CwvjKs0_.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_OH2ffHCx.mjs';

const Testimonial = ({ name, country, image, children, excerpt }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `relative bg-white shadow-sm text-grey-600 max-w-[600px]  w-full rounded-3xl flex flex-col items-center 
    ${image ? "mt-16 " : ""}
    `,
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -top-[75px]", children: image && /* @__PURE__ */ jsx(
          "img",
          {
            src: image,
            className: " object-cover h-[150px] w-[150px] rounded-full border-blue-200 border-4 "
          }
        ) }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `px-5 md:px-10 py-5 md:py-10 ${image ? "mt-[60px]" : ""}`,
            children: [
              /* @__PURE__ */ jsxs("div", { className: "text-center mb-4 mt-2", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-3xl font-heading font-bold", children: name }),
                /* @__PURE__ */ jsx("p", { className: "text-xl", children: country })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "", children: [
                /* @__PURE__ */ jsx("p", { className: "text-lg", children: excerpt }),
                open && /* @__PURE__ */ jsx("p", { className: "text-lg mt-2", children }),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    onClick: toggle,
                    className: "block mt-2 text-lg text-blue-500 font-bold cursor-pointer",
                    children: open ? "Read Less" : "Read More"
                  }
                )
              ] })
            ]
          }
        )
      ]
    }
  );
};

const $$Testimonials$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-grey-100"> <div class="grid grid-cols-1 md:grid-cols-2 pb-20 pt-40 px-5 gap-x-5 lg:gap-x-20 gap-y-20 mx-auto max-w-[1200px] justify-items-center"> ${renderComponent($$result, "Testimonial", Testimonial, { "name": "Debbie", "country": "Australia", "image": "/images/testimonials/debbie.png", "client:idle": true, "excerpt": "My family and I have been regular visitors to Osaka for the last 10 years and each visit we have stayed with Apollo Properties.", "client:component-hydration": "idle", "client:component-path": "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Testimonials/Testimonial", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`
The apartments are always clean and have everything we need. Bruce and
      Masatoshi are highly professional and we always feel looked after. We
      recommend Apollo apartments to family and friends when they come to stay
      and they are always impressed with the value, price and location. And that
      is why we will continue to book with them.
` })} ${renderComponent($$result, "Testimonial", Testimonial, { "name": "Justin", "country": "Student", "image": "/images/testimonials/justin.png", "client:idle": true, "excerpt": " I've been a tenant with Apollo Properties for almost a year. Bruce and Masatoshi have been very helpful since my move to Japan. ", "client:component-hydration": "idle", "client:component-path": "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Testimonials/Testimonial", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`
They're very quick to respond and get a hold of. Bruce was able to help me
      set up my internet and replace a couple of appliances that have broken
      within a day. Staying at Apollo Properties have been instrumental to my
      move to Japan.
` })} ${renderComponent($$result, "Testimonial", Testimonial, { "name": "Etienne", "country": "", "client:idle": true, "excerpt": " From the moment I originally wrote to them up until my check out after four years and a half of living in an apartment provided by Apollo Properties, I've always felt like I was in good hands.", "client:component-hydration": "idle", "client:component-path": "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Testimonials/Testimonial", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`
Incredibly kind and helpful English speaking staff always giving great
      assistance and help, along with a comprehensible apartment contract
      without any hidden fees or complicated clauses made my time staying with
      Apollo Properties a relaxing one, during which I felt right at home from
      day one, also helped by the fact that the apartment came fully furnished
      and equipped with everything it needed to function. I highly recommend
      Apollo Properties! I'm not sure if your new website will feature ratings,
      but if it does I would definitely rank my stay overall a 5 out of 5! Thank
      you again for the great service during the last four years and a half!
` })} ${renderComponent($$result, "Testimonial", Testimonial, { "name": "Lachie and Kimi", "country": "", "client:idle": true, "excerpt": "      Apartments are in good locations for transport. Having the apartment set-up with the essentials made it an easy move-in process.", "client:component-hydration": "idle", "client:component-path": "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Testimonials/Testimonial", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`
Bruce is always quick to respond to any questions about the apartment or
      appliances, and maintenance has always been organised quickly.
` })} ${renderComponent($$result, "Testimonial", Testimonial, { "name": "Jonathan", "country": "", "client:idle": true, "excerpt": "  As a current tenant of an Apollo Properties apartment for over a year. Bruce and Masatoshi have always provided very helpful assistance, and are quick to respond to any emails and queries regarding the apartment and local amenities.", "client:component-hydration": "idle", "client:component-path": "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Testimonials/Testimonial", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`
The apartment itself has served as a fantastic home-base to life in Osaka
      and is located in a very convenient, yet quiet location, with great
      transport links nearby to easily explore the myriad of hotspots the city
      has to offer. The apartment also came fully furnished, including white
      goods and working internet from day 1, which made for a hassle-free move
      and meant I could settle in right away. I would highly recommend Apollo
      Properties if you want to enjoy a stress-free stay in Osaka, whether your
      trip is for just a few days or much longer.
` })} ${renderComponent($$result, "Testimonial", Testimonial, { "name": "Susan and Cameron Griffiths", "country": "", "client:idle": true, "excerpt": " When we moved to Nagoya from Australia, Apollo made our transition a much smoother process than it would have been if we'd tried to organise our own accommodation.", "client:component-hydration": "idle", "client:component-path": "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Testimonials/Testimonial", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`
Everything was organised for us - gas, electricity and internet.
      Electricity and gas bills are paid through Apollo too, reducing the number
      of monthly bills we have to remember to pay. We have an older apartment in
      a convenient location in the centre of the city and it came furnished with
      everything we need for daily life. Our monthly rent seems quite reasonable
      considering the convenience of the location and Apollo's services.
` })} ${renderComponent($$result, "Testimonial", Testimonial, { "name": "Heather Henderson", "country": "", "image": "/images/testimonials/heather.jpeg", "client:idle": true, "excerpt": " Renting my apartment from Apollo Properties was the easiest thing I did when moving to Japan. The process of viewing the apartment and moving in was seamless.", "client:component-hydration": "idle", "client:component-path": "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Testimonials/Testimonial", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`
I read so many stories online about how difficult it is for foreigners to
      rent in Japan, but Apollo Properties made all those worries disappear.
      They offer great prices in prime locations around Japan. The staff is
      wonderful to chat with and they always make sure everything is going well
      in the apartment. I couldn't recommend a better company to work with!
` })} ${renderComponent($$result, "Testimonial", Testimonial, { "name": "Crystalyn and Matthew Hodgkins", "country": "", "image": "/images/testimonials/crystalyn.jpeg", "client:idle": true, "excerpt": " We lived in the Sanko Heights building in Osaka from April 2014 until July 2020. Bruce was an excellent landlord to us for those six years.", "client:component-hydration": "idle", "client:component-path": "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Testimonials/Testimonial", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` <div class="[&>p]:mb-2"> <p>
He always gave us a copy of our bill so we could keep track of our
          expenses, and the payment process by bank account transfer was easy.
</p> <p>
The apartment was pre-furnished, and whenever we had any issues with
          any furniture in the apartment, all we had to do was let Bruce know,
          and he would replace that furniture for free. We had items such as our
          refrigerator and microwave replaced when those items had issues or
          malfunctioned, and it was always an easy and smooth process. Bruce
          always responded to any of our requests or issues within a very timely
          manner, and it was always a pleasure talking to him and his associate
          Masatoshi.
</p> <p>
Whenever there were any non-furniture issues, which were instead fixed
          by the owner of the building, Bruce was very helpful in facilitating
          contact with the owners, who only spoke Japanese. We can speak
          Japanese to an extent, but it was always reassuring to know that Bruce
          would help us out with that communication if necessary. There were a
          few emergencies that happened during our time there, but with his help
          they were always resolved quickly.
</p> <p>
The rent rate, for a furnished apartment in the heart of Osaka, was
          very reasonable, and all the furniture was of great quality.
</p> <p>
Bruce assisted us in moving in by picking us up from our bus from the
          airport when we arrived in Japan in 2014. After we lived in temporary
          housing for a month, he also helped us move into our apartment. When
          we moved out, he assisted us with that as well.
</p> <p>
After we moved out of the apartment, Bruce was very straightforward
          and timely with communicating with us regarding the return of our
          deposit. The deposit situation was just as it was originally written
          in our contract, and we were very grateful that we were able to
          receive our deposit back, since this can be very difficult in Japan.
</p> <p>
We were both very grateful for all the help, assistance, and quick
          communication provided over the years. We would recommend Apollo
          Properties to anyone needing a decent and well-priced apartment in
          Japan, especially for foreigners who are new to Japan and don't
          understand all the ins and outs of renting in Japan.
</p> </div> ` })} </div> </section>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Testimonials/Testimonials.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Testimonials | Apartments in Osaka | Apollo Properties", "description": "Read testimonials from our satisfied clients and discover why Apollo Properties is the top choice for exclusive, fully furnished apartment rentals in Osaka." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "heading": "Testimonials" })} ${renderComponent($$result2, "Testimonials", $$Testimonials$1, {})} ${renderComponent($$result2, "FinalCta", $$FinalCta, {})} ` })}`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/testimonials.astro", void 0);

const $$file = "/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/testimonials.astro";
const $$url = "/testimonials";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Testimonials,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
