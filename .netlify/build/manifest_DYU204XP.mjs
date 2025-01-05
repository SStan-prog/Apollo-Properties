import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { o as NOOP_MIDDLEWARE_HEADER, p as decodeKey } from './chunks/astro/server_BnVd87TU.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
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
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/scottstanfel/Desktop/projects/apollo-properties/","adapterName":"@astrojs/netlify","routes":[{"file":"404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"faq/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq\\/?$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"fully-furnished-apartments/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/fully-furnished-apartments","isIndex":false,"type":"page","pattern":"^\\/fully-furnished-apartments\\/?$","segments":[[{"content":"fully-furnished-apartments","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fully-furnished-apartments.astro","pathname":"/fully-furnished-apartments","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"listings/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/listings","isIndex":true,"type":"page","pattern":"^\\/listings\\/?$","segments":[[{"content":"listings","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/listings/index.astro","pathname":"/listings","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"testimonials/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/testimonials","isIndex":false,"type":"page","pattern":"^\\/testimonials\\/?$","segments":[[{"content":"testimonials","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/testimonials.astro","pathname":"/testimonials","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"thank-you/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/thank-you","isIndex":false,"type":"page","pattern":"^\\/thank-you\\/?$","segments":[[{"content":"thank-you","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/thank-you.astro","pathname":"/thank-you","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://apollopropertiesosaka.com/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/blog/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/blog/index.astro",{"propagation":"none","containsHead":true}],["/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/faq.astro",{"propagation":"none","containsHead":true}],["/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/fully-furnished-apartments.astro",{"propagation":"none","containsHead":true}],["/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/listings/[slug].astro",{"propagation":"none","containsHead":true}],["/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/listings/index.astro",{"propagation":"none","containsHead":true}],["/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/testimonials.astro",{"propagation":"none","containsHead":true}],["/Users/scottstanfel/Desktop/projects/apollo-properties/src/pages/thank-you.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/fully-furnished-apartments@_@astro":"pages/fully-furnished-apartments.astro.mjs","\u0000@astro-page:src/pages/listings/[slug]@_@astro":"pages/listings/_slug_.astro.mjs","\u0000@astro-page:src/pages/listings/index@_@astro":"pages/listings.astro.mjs","\u0000@astro-page:src/pages/testimonials@_@astro":"pages/testimonials.astro.mjs","\u0000@astro-page:src/pages/thank-you@_@astro":"pages/thank-you.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DYU204XP.mjs","/Users/scottstanfel/Desktop/projects/apollo-properties/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_7gdE82JG.mjs","/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Home/Testimonials":"_astro/Testimonials.Cz0Qc1jm.js","/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Common/Navbar.svelte":"_astro/Navbar.CxpiuO1n.js","/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/FAQ/Dropdown":"_astro/Dropdown.DC-MssR0.js","/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Testimonials/Testimonial":"_astro/Testimonial.C1VXum4A.js","@astrojs/react/client.js":"_astro/client.C57WwILO.js","@astrojs/svelte/client.js":"_astro/client.svelte.D1JjNHRA.js","/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Common/Footer.astro?astro&type=script&index=0&lang.ts":"_astro/Footer.astro_astro_type_script_index_0_lang.BXKXirGU.js","/Users/scottstanfel/Desktop/projects/apollo-properties/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":"_astro/stegaEncodeSourceMap.SxxW9KI4.js","components/Listings/Slider":"_astro/Slider.Bl7ZuYqb.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/scottstanfel/Desktop/projects/apollo-properties/src/components/Common/Footer.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"year\");e.innerHTML=String(new Date().getFullYear());"]],"assets":["/_astro/inter-greek-ext-400-normal.5_LfLZIP.woff2","/_astro/kumbh-sans-latin-400-normal.ByBSSSLM.woff2","/_astro/kumbh-sans-latin-ext-400-normal.DBQedTxL.woff2","/_astro/inter-cyrillic-ext-400-normal.CFvBWp3v.woff2","/_astro/inter-cyrillic-400-normal.Q-C3FR23.woff2","/_astro/inter-greek-400-normal.BhkgBvw-.woff2","/_astro/inter-latin-400-normal.YtgfLPRn.woff2","/_astro/inter-latin-ext-400-normal.D3hQhSwC.woff2","/_astro/kumbh-sans-latin-ext-700-normal.DZ42x6qB.woff2","/_astro/kumbh-sans-latin-700-normal.RbH7pqBv.woff2","/_astro/inter-latin-700-normal.Bj1B9WKG.woff2","/_astro/inter-cyrillic-ext-700-normal.CtzmhaUk.woff2","/_astro/inter-greek-700-normal.CFIQX1U2.woff2","/_astro/inter-greek-ext-700-normal.KThbdDrD.woff2","/_astro/inter-latin-ext-700-normal.I3sD4eMF.woff2","/_astro/inter-cyrillic-700-normal.BaMr6BGj.woff2","/_astro/kumbh-sans-all-400-normal.DsPLNiT3.woff","/_astro/inter-all-400-normal.BpORAHN-.woff","/_astro/kumbh-sans-all-700-normal.9iIcdg2D.woff","/_astro/inter-all-700-normal.DDx3QTBa.woff","/_astro/_slug_.mJKLYoEb.css","/_astro/index.BG1HisgL.css","/favicon.ico","/favicon.svg","/_astro/Dropdown.DC-MssR0.js","/_astro/Navbar.CxpiuO1n.js","/_astro/Slider.Bl7ZuYqb.js","/_astro/Slider.Bvo04Mo0.js","/_astro/Testimonial.C1VXum4A.js","/_astro/Testimonials.Cz0Qc1jm.js","/_astro/browser.CO6Nk13W.js","/_astro/client.C57WwILO.js","/_astro/client.svelte.D1JjNHRA.js","/_astro/index.BpYrhlGc.js","/_astro/jsx-runtime.DoKJU3Vr.js","/_astro/render.DWwavXvn.js","/_astro/stegaEncodeSourceMap.SxxW9KI4.js","/_astro/swiper-slide.DVfeA8dU.js","/favicon/android-icon-144x144.png","/favicon/android-icon-192x192.png","/favicon/android-icon-36x36.png","/favicon/android-icon-48x48.png","/favicon/android-icon-72x72.png","/favicon/android-icon-96x96.png","/favicon/apple-icon-114x114.png","/favicon/apple-icon-120x120.png","/favicon/apple-icon-144x144.png","/favicon/apple-icon-152x152.png","/favicon/apple-icon-180x180.png","/favicon/apple-icon-57x57.png","/favicon/apple-icon-60x60.png","/favicon/apple-icon-72x72.png","/favicon/apple-icon-76x76.png","/favicon/apple-icon-precomposed.png","/favicon/apple-icon.png","/favicon/browserconfig.xml","/favicon/favicon-16x16.png","/favicon/favicon-32x32.png","/favicon/favicon-96x96.png","/favicon/favicon.ico","/favicon/manifest.json","/favicon/ms-icon-144x144.png","/favicon/ms-icon-150x150.png","/favicon/ms-icon-310x310.png","/favicon/ms-icon-70x70.png","/icons/check.svg","/icons/contracts.svg","/icons/foreigners.svg","/icons/quote.svg","/icons/save.svg","/icons/triangle.svg","/images/apartment-header-mobile.jpg","/images/apartment-header.jpg","/images/home-header-mobile.jpg","/images/home-header.jpg","/images/logo.png","/images/office.jpg","/images/osaka-night-mobile.jpg","/images/osaka-night.jpg","/images/team.jpg","/images/testimonials/crystalyn.jpeg","/images/testimonials/debbie.png","/images/testimonials/heather.jpeg","/images/testimonials/justin.jpeg","/images/testimonials/justin.png","/images/ffa/apartment.jpg","/images/ffa/bedroom-1.jpg","/images/ffa/bedroom-2.jpg","/images/ffa/bedroom-3.jpg","/images/ffa/inclusions-2.jpg","/images/ffa/inclusions.jpg","/images/ffa/japan.svg","/images/ffa/kitchen-1.jpg","/images/ffa/oji.jpg","/images/ffa/osaka.jpg","/404.html","/blog/index.html","/contact/index.html","/faq/index.html","/fully-furnished-apartments/index.html","/listings/index.html","/testimonials/index.html","/thank-you/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"GJCJxHnfVGJFooOfJzj4ItZ69J4euK+DniKCvFk28Vg="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
