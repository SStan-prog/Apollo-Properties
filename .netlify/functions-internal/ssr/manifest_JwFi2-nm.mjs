import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import 'html-escaper';
import 'clsx';
import './chunks/astro_G4-tB81c.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    })
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"fully-furnished-apartments/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fully-furnished-apartments","type":"page","pattern":"^\\/fully-furnished-apartments\\/?$","segments":[[{"content":"fully-furnished-apartments","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fully-furnished-apartments.astro","pathname":"/fully-furnished-apartments","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"testimonials/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/testimonials","type":"page","pattern":"^\\/testimonials\\/?$","segments":[[{"content":"testimonials","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/testimonials.astro","pathname":"/testimonials","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"thank-you/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/thank-you","type":"page","pattern":"^\\/thank-you\\/?$","segments":[[{"content":"thank-you","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/thank-you.astro","pathname":"/thank-you","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"listings/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/listings","type":"page","pattern":"^\\/listings\\/?$","segments":[[{"content":"listings","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/listings/index.astro","pathname":"/listings","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"faq/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/faq","type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://apollopropertiesosaka.com/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/faq.astro",{"propagation":"none","containsHead":true}],["/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/fully-furnished-apartments.astro",{"propagation":"none","containsHead":true}],["/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/listings/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/listings/index.astro",{"propagation":"none","containsHead":true}],["/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/testimonials.astro",{"propagation":"none","containsHead":true}],["/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/thank-you.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","\u0000@astrojs-manifest":"manifest_JwFi2-nm.mjs","/Users/scottstanfel/Desktop/projects/apollo-properties/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_3wEZly-Z.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_UQou6yr0.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_v3j7T95t.mjs","\u0000@astro-page:src/pages/fully-furnished-apartments@_@astro":"chunks/fully-furnished-apartments_HMC8Mtup.mjs","\u0000@astro-page:src/pages/testimonials@_@astro":"chunks/testimonials_EL4edt3v.mjs","\u0000@astro-page:src/pages/thank-you@_@astro":"chunks/thank-you_3MHeu3nv.mjs","\u0000@astro-page:src/pages/listings/index@_@astro":"chunks/index_OluK5Jei.mjs","\u0000@astro-page:src/pages/listings/[slug]@_@astro":"chunks/_slug__mb_3JtB-.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_mBS_DUD-.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_KWIGi8Xq.mjs","\u0000@astro-page:src/pages/faq@_@astro":"chunks/faq_hGanJAYE.mjs","/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Home/Testimonials":"_astro/Testimonials.EpryXRxu.js","/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Testimonials/Testimonial":"_astro/Testimonial.nh8gZVGR.js","/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/FAQ/Dropdown":"_astro/Dropdown.DSats95H.js","/astro/hoisted.js?q=0":"_astro/hoisted.NZF8V1hh.js","/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Common/Navbar.svelte":"_astro/Navbar.x4NIKD9Z.js","@astrojs/svelte/client.js":"_astro/client.bWR2MAd2.js","components/Listings/Slider":"_astro/Slider.ZxMl1k8p.js","@astrojs/react/client.js":"_astro/client.mBN5ZAaw.js","astro:scripts/before-hydration.js":""},"assets":["/_astro/kumbh-sans-latin-ext-400-normal.wUHnU8S7.woff2","/_astro/kumbh-sans-latin-400-normal.cgUkkizG.woff2","/_astro/inter-cyrillic-ext-400-normal.hbwVqd76.woff2","/_astro/inter-cyrillic-400-normal.EPgtxUdt.woff2","/_astro/inter-greek-400-normal.YZIAb8Pm.woff2","/_astro/inter-latin-400-normal.GLYHyz0Z.woff2","/_astro/inter-greek-ext-400-normal.Ofy3y2SD.woff2","/_astro/inter-latin-ext-400-normal.94UIUsAk.woff2","/_astro/inter-cyrillic-700-normal.WjK-gRow.woff2","/_astro/inter-cyrillic-ext-700-normal.rc5oWlJP.woff2","/_astro/inter-greek-ext-700-normal.Ck4W3Q6w.woff2","/_astro/inter-latin-ext-700-normal.CN7A-HjB.woff2","/_astro/inter-greek-700-normal.hSEF9VNm.woff2","/_astro/kumbh-sans-latin-ext-700-normal.2eNseqgW.woff2","/_astro/inter-latin-700-normal.Y9QfVihh.woff2","/_astro/kumbh-sans-latin-700-normal.EWx-6agb.woff2","/_astro/kumbh-sans-all-400-normal.7DyzYk95.woff","/_astro/inter-all-400-normal.aTkQBzfv.woff","/_astro/inter-all-700-normal.w8d0EwWo.woff","/_astro/kumbh-sans-all-700-normal.PYiHHYNg.woff","/_astro/contact.UcSna6dI.css","/_astro/index.OjZetnGb.css","/favicon(11).ico","/_astro/Dropdown.DSats95H.js","/_astro/Navbar.x4NIKD9Z.js","/_astro/Slider.ZxMl1k8p.js","/_astro/Testimonial.nh8gZVGR.js","/_astro/Testimonials.EpryXRxu.js","/_astro/browser.IWpT8M8v.js","/_astro/client.bWR2MAd2.js","/_astro/client.mBN5ZAaw.js","/_astro/index.068npczX.js","/_astro/jsx-runtime.KYujgZxC.js","/_astro/swiper-slide.nrZPChoM.js","/icons/check.svg","/icons/contracts.svg","/icons/foreigners.svg","/icons/quote.svg","/icons/save.svg","/icons/triangle.svg","/images/apartment-header-mobile.jpg","/images/apartment-header.jpg","/images/home-header-mobile.jpg","/images/home-header.jpg","/images/logo.png","/images/office.jpg","/images/osaka-night-mobile.jpg","/images/osaka-night.jpg","/images/team.jpg","/images/ffa/apartment.jpg","/images/ffa/bedroom-1.jpg","/images/ffa/bedroom-2.jpg","/images/ffa/bedroom-3.jpg","/images/ffa/inclusions-2.jpg","/images/ffa/inclusions.jpg","/images/ffa/japan.svg","/images/ffa/kitchen-1.jpg","/images/ffa/oji.jpg","/images/ffa/osaka.jpg","/images/testimonials/crystalyn.jpeg","/images/testimonials/debbie.png","/images/testimonials/heather.jpeg","/images/testimonials/justin.jpeg","/images/testimonials/justin.png","/index.html","/fully-furnished-apartments/index.html","/testimonials/index.html","/thank-you/index.html","/listings/index.html","/contact/index.html","/404.html","/faq/index.html"]});

export { manifest };
