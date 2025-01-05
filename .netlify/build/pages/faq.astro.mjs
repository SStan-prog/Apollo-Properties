import { $ as $$Layout } from '../chunks/Layout_B-ghPKhS.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from '../chunks/astro/server_BnVd87TU.mjs';
import 'kleur/colors';
import { $ as $$Header } from '../chunks/Header_BZ0ZkNV9.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { $ as $$FinalCta } from '../chunks/FinalCta_CwvjKs0_.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_OH2ffHCx.mjs';

const Dropdown = (props) => {
  const { question, answer } = props;
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `${open ? " shadow-md" : " shadow-sm"} max-w-[800px] w-full rounded-3xl transition-all`,
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `${open ? "bg-blue-100 rounded-t-3xl" : "bg-white rounded-3xl"} p-5  flex justify-between items-center cursor-pointer transition-all`,
            onClick: toggle,
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-xl md:text-3xl font-bold font-heading text-grey-600 mr-5", children: question }),
              /* @__PURE__ */ jsxs("div", { className: "relative px-5", children: [
                /* @__PURE__ */ jsx("div", { className: "w-[35px]  md:w-[40px] h-[5px] bg-grey-600 rounded absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2" }),
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `w-[35px] md:w-[40px] h-[5px] bg-grey-600 rounded absolute  z-10 top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 transition-transform ${open ? "rotate-180" : "rotate-90"}`
                  }
                )
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `bg-white p-5 text-grey-600 rounded-b-3xl transition-all ${open ? "opacity-100 h-full" : "opacity-0 h-0 hidden"}`,
            children: /* @__PURE__ */ jsx("p", { children: answer })
          }
        )
      ]
    }
  );
};

const $$Dropdowns = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> <div class="flex flex-col items-center py-20 bg-grey-100 px-5 gap-5 md:gap-10"> ${renderComponent($$result, "Dropdown", Dropdown, { "question": `I keep hearing the term "Key Money". What exactly is "Key Money"?`, "answer": `Reikin, which is a kind of "gift" money to the landlord, is usually equivalent to one (1) month's rent and is non-refundable.
      Shikikin is a large deposit equivalent to anywhere from two (2) month's rent and up and is refundable to a small percentage. `, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/FAQ/Dropdown", "client:component-export": "default" })} ${renderComponent($$result, "Dropdown", Dropdown, { "question": `If I rent an apartment from Apollo Properties, do I need to pay "Key Money"?`, "answer": `All of Apollo Properties' fully furnished rooms and apartments do not require any sort of Key Money or hidden fees.`, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/FAQ/Dropdown", "client:component-export": "default" })} ${renderComponent($$result, "Dropdown", Dropdown, { "question": `Is a security/damage deposit required?`, "answer": `Yes. For fully furnished apartments a refundable security/damage deposit is required and is equivalent to one month's rent of the apartment you are planning to rent. 20,000 yen of the deposit is non-refundable.`, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/FAQ/Dropdown", "client:component-export": "default" })} ${renderComponent($$result, "Dropdown", Dropdown, { "question": `To whom do I pay the security deposit? What other formalities should I expect?`, "answer": `The security deposit is the equivalent of one months' rent and is payable in cash in Japanese yen to an Apollo Properties staff member who will meet you and sign your rental agreement with you on the day you arrive. He or she will answer any questions you may have regarding the rental agreement and explain all aspects of the apartments from how to use the washing machine, turn on the stove, to how to replace light bulbs etc.`, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/FAQ/Dropdown", "client:component-export": "default" })} ${renderComponent($$result, "Dropdown", Dropdown, { "question": `Do I need to send a "Holding Deposit" in order to reserve an apartment for my arrival date?`, "answer": `Yes, you will be required to send a "Holding Deposit" of 20,000 Japanese yen to Apollo Properties.`, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/FAQ/Dropdown", "client:component-export": "default" })} ${renderComponent($$result, "Dropdown", Dropdown, { "question": `How can I pay the "Holding Deposit"?`, "answer": `We will send you a PayPal invoice/money request for the holding deposit amount and you can easily pay this invoice using any credit card without having a PayPal account. Alternatively you can pay the amount by sending the amount by bank transfer to Apollo Properties' bank account, however please note that bank transfer charges will apply from both your home country as well as the Japanese banking system. Upon signing of the rental agreement this "Holding Deposit" will become part of your security deposit. For people who are applying for an apartment within Japan you can send the holding deposit by bank transfer or even pay it in cash here at out office in Osaka near Namba station.`, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/FAQ/Dropdown", "client:component-export": "default" })} ${renderComponent($$result, "Dropdown", Dropdown, { "question": `If I send a "Holding Deposit" then later cancel my reservation, will I lose the "Holding Deposit"?`, "answer": `Yes, Unfortunately, as we will have discontinued all advertising and any viewings of the property you have reserved and will therefore have lost any other opportunity to rent the apartment so the "Holding Deposit" will be forfeited as compensation for this loss. `, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/FAQ/Dropdown", "client:component-export": "default" })} ${renderComponent($$result, "Dropdown", Dropdown, { "question": `Do I need a guarantor? `, "answer": `No. For fully furnished apartments a guarantor is not required; however, proof of proper visa status is required. Also, we need to know the name of your employer or school.`, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/FAQ/Dropdown", "client:component-export": "default" })} ${renderComponent($$result, "Dropdown", Dropdown, { "question": `How do I go about getting my utilities set up? Gas, water and electricity? `, "answer": `Luckily, Apollo Properties already has the utilities turned on in each apartment and the bills are in the Apollo Properties name. This ensures that all properties will have utilities fully up and running for the day you arrive and when you vacate at the end of your stay you needn\u2019t do anything regarding having them turned off. `, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/FAQ/Dropdown", "client:component-export": "default" })} ${renderComponent($$result, "Dropdown", Dropdown, { "question": `How do I pay my monthly rent and utilities each month? `, "answer": `Apollo Properties will issue you an itemized bill at the end of each month outlining your rent and the amount of gas water and electricity you consumed. The bill can be paid in cash at the Apollo Properties office or through a bank transfer using a domestic bank. The due date is by the last day of the month.`, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/FAQ/Dropdown", "client:component-export": "default" })} </div> </section>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/FAQ/Dropdowns.astro", void 0);

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Frequently Asked Questions | Apollo Properties Osaka", "description": "Explore our exclusive FAQ section to get answers to the most commonly asked questions about our fully furnished apartments, including holding deposits and more." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "heading": "Frequently Asked Questions" })} ${renderComponent($$result2, "Dropdowns", $$Dropdowns, {})} ${renderComponent($$result2, "FinalCta", $$FinalCta, {})} ` })}`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/faq.astro", void 0);

const $$file = "/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
