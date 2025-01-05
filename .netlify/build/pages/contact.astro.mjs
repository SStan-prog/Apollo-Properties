import { $ as $$Layout } from '../chunks/Layout_B-ghPKhS.mjs';
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, a as renderComponent } from '../chunks/astro/server_BnVd87TU.mjs';
import 'kleur/colors';
import { $ as $$Header } from '../chunks/Header_BZ0ZkNV9.mjs';
import 'clsx';
export { r as renderers } from '../chunks/_@astro-renderers_OH2ffHCx.mjs';

const $$Index$2 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-white p-5 sm:p-10 rounded-[40px]"> <h2 class="text-xl md:text-3xl font-heading font-bold text-blue-600 mb-10 md:mb-14 leading-relaxed">
We would love to hear from you.
<br> How can we help?
</h2> <form method="POST" action="/thank-you" data-netlify="true" name="contact"> <input type="hidden" name="form-name" value="contact"> <div class="flex flex-col md:flex-row gap-5 w-full mb-6"> <div class="flex flex-col w-full"> <input type="text" id="first" required name="First name" placeholder="First name" class="peer bg-grey-100 text-grey-700 p-3 rounded border-2 border-transparent focus:border-blue-200 outline-none placeholder-transparent transition-colors "> <label for="first" class="ml-[13px]  
          -translate-y-[80px] text-blue-600 font-bold
          peer-placeholder-shown:-translate-y-[38px]  peer-placeholder-shown:text-grey-500 peer-placeholder-shown:font-medium 
          peer-focus:-translate-y-[80px] peer-focus:font-bold  peer-focus:text-blue-600  
          transition-all
         ">
First name
</label> </div> <div class="flex flex-col w-full"> <input type="text" id="last" required name="Last name" placeholder="Last name" class="peer bg-grey-100 text-grey-700 p-3 rounded border-2 border-transparent focus:border-blue-200 outline-none placeholder-transparent transition-colors "> <label for="last" class="ml-[13px]  
          -translate-y-[80px] text-blue-600 font-bold
          peer-placeholder-shown:-translate-y-[38px]  peer-placeholder-shown:text-grey-500 peer-placeholder-shown:font-medium 
          peer-focus:-translate-y-[80px] peer-focus:font-bold  peer-focus:text-blue-600  
          transition-all
         ">
Last name
</label> </div> </div> <div class="flex flex-col md:flex-row gap-5 w-full mb-10"> <div class="flex flex-col w-full"> <input type="email" id="email" required name="Email" placeholder="Email address" class="peer bg-grey-100 text-grey-700 p-3 rounded border-2 border-transparent focus:border-blue-200 outline-none placeholder-transparent transition-colors "> <label for="email" class="ml-[13px]  
          -translate-y-[80px] text-blue-600 font-bold
          peer-placeholder-shown:-translate-y-[38px]  peer-placeholder-shown:text-grey-500 peer-placeholder-shown:font-medium 
          peer-focus:-translate-y-[80px] peer-focus:font-bold  peer-focus:text-blue-600  
          transition-all
         ">
Email address
</label> </div> <div class="flex flex-col w-full"> <input id="Phone" name="Phone name" placeholder="Phone number" class="peer bg-grey-100 text-grey-700 p-3 rounded border-2 border-transparent focus:border-blue-200 outline-none placeholder-transparent transition-colors "> <label for="Phone" class="ml-[13px]  
          -translate-y-[80px] text-blue-600 font-bold
          peer-placeholder-shown:-translate-y-[38px]  peer-placeholder-shown:text-grey-500 peer-placeholder-shown:font-medium 
          peer-focus:-translate-y-[80px] peer-focus:font-bold  peer-focus:text-blue-600  
          transition-all
         ">
Phone number
</label> </div> </div> <div class="flex gap-5 w-full mb-10"> <div class="flex flex-col w-full relative"> <textarea id="message" name="Message" required${addAttribute(5, "rows")} placeholder="message" class="peer resize-y bg-grey-100 text-grey-700 p-3 rounded border-2 border-transparent focus:border-blue-200 outline-none placeholder-transparent transition-colors "></textarea> <label for="message" class="ml-[13px] absolute
          -top-[30px] text-blue-600 font-bold
          peer-placeholder-shown:top-[10px]  peer-placeholder-shown:text-grey-500 peer-placeholder-shown:font-medium 
          peer-focus:-top-[30px] peer-focus:font-bold  peer-focus:text-blue-600  
          transition-all
         ">
How can we help?
</label> </div> </div> <button type="submit" class="mx-auto w-full bg-blue-400 hover:bg-blue-600 text-white text-lg sm:text-2xl font-body py-2 px-4 sm:py-3 sm:px-6 inline-block font-bold rounded-md hover:shadow-none shadow-lg whitespace-nowrap transition-all">
Submit
</button> </form> </div>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Contact/Form/index.astro", void 0);

const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="px-3 sm:px-0"> <h2 class=" text-xl sm:text-3xl font-heading font-bold text-blue-600 mb-6">
Contact
</h2> <div class="mb-6"> <p class="text-blue-600 text-lg">E-mail</p> <a href="mailto:info@apollopropertiesosaka.com">
info@apollopropertiesosaka.com
</a> </div> <div class="mb-6 flex flex-col gap-2"> <p class="text-blue-600 text-lg">From Within Japan</p> <a href="tel:0666415301">Office Tel: 06-6641-5301</a> <a href="tel:0666415302">Office Fax: 06-6641-5302</a> <a href="tel:0120932614">Free Dial: 0120-932-614 (*In Osaka Only)</a> </div> <div class="mb-6 flex flex-col gap-2"> <p class="text-blue-600 text-lg">After-hours service</p> <a href="tel:09074906251 ">Cell: 090-7490-6251 (Bruce Bennett)</a> <a href="tel:09089807535">
Cell: 090-8980-7535 (In Japanese: Masatoshi Akasaka)
</a> </div> <div class="mb-6 flex flex-col gap-2"> <p class="text-blue-600 text-lg">From outside Japan</p> <a href="tel:819074906251 ">81-90-7490-6251</a> <a href="tel:819089807535">Cell: 81-90-8980-7535 (In Japanese)</a> <a href="tel:81666415301">Office Tel: 81-6-6641-5301</a> <a href="tel:81666415302">Office Fax: 81-6-6641-5302</a> <p>Skype Name: apollo.properties</p> </div> </div>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Contact/Info/index.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-grey-100 py-10"> <div class="max-w-[1000px] mx-auto py-10 px-2 sm:px-10 md:px-20 lg:px-5 grid grid-cols-1 lg:grid-cols-10 gap-20 lg:gap-10"> <div class="lg:col-span-3 row-[2] lg:row-[1]"> ${renderComponent($$result, "Info", $$Index$1, {})} </div> <div class="lg:col-span-7 row-[1]"> ${renderComponent($$result, "Form", $$Index$2, {})} </div> </div> </section>`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Contact/index.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact | Fully Furnished Apartments | Apollo Properties", "description": "Feel free to get in touch with us if you have any queries about our fully furnished apartment rental service. Our team of experts will get back to you soon." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "heading": "Get in Touch" })} ${renderComponent($$result2, "ContactUs", $$Index, {})} ` })}`;
}, "/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/contact.astro", void 0);

const $$file = "/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
