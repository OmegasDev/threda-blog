import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_HEADER, i as decodeKey } from './chunks/astro/server_BlX9CtJd.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
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

const manifest = deserializeManifest({"hrefRoot":"file:///home/project/","cacheDir":"file:///home/project/node_modules/.astro/","outDir":"file:///home/project/dist/","srcDir":"file:///home/project/src/","publicDir":"file:///home/project/public/","buildClientDir":"file:///home/project/dist/","buildServerDir":"file:///home/project/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"admin/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/admin","isIndex":true,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/index.astro","pathname":"/admin","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"advertise/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/advertise","isIndex":false,"type":"page","pattern":"^\\/advertise\\/?$","segments":[[{"content":"advertise","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/advertise.astro","pathname":"/advertise","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"all-posts/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/all-posts","isIndex":false,"type":"page","pattern":"^\\/all-posts\\/?$","segments":[[{"content":"all-posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/all-posts.astro","pathname":"/all-posts","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"create-hub/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/create-hub","isIndex":false,"type":"page","pattern":"^\\/create-hub\\/?$","segments":[[{"content":"create-hub","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/create-hub.astro","pathname":"/create-hub","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"dashboard/hub/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/dashboard/hub","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/hub\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}],[{"content":"hub","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard/hub.astro","pathname":"/dashboard/hub","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"hubs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/hubs","isIndex":false,"type":"page","pattern":"^\\/hubs\\/?$","segments":[[{"content":"hubs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hubs.astro","pathname":"/hubs","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"privacy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"search/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/search","isIndex":false,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"terms/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/terms","isIndex":false,"type":"page","pattern":"^\\/terms\\/?$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.astro","pathname":"/terms","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://threda.netlify.app","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/project/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/admin/index.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/advertise.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/all-posts.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/category/[slug].astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/create-hub.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/dashboard/hub.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/hub/[slug].astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/hubs.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/post/[slug].astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/privacy.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/search.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/terms.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/thred-news/[id].astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/thred/[slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/admin/index@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/advertise@_@astro":"pages/advertise.astro.mjs","\u0000@astro-page:src/pages/all-posts@_@astro":"pages/all-posts.astro.mjs","\u0000@astro-page:src/pages/category/[slug]@_@astro":"pages/category/_slug_.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/create-hub@_@astro":"pages/create-hub.astro.mjs","\u0000@astro-page:src/pages/dashboard/hub@_@astro":"pages/dashboard/hub.astro.mjs","\u0000@astro-page:src/pages/hub/[slug]@_@astro":"pages/hub/_slug_.astro.mjs","\u0000@astro-page:src/pages/hubs@_@astro":"pages/hubs.astro.mjs","\u0000@astro-page:src/pages/post/[slug]@_@astro":"pages/post/_slug_.astro.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"pages/privacy.astro.mjs","\u0000@astro-page:src/pages/search@_@astro":"pages/search.astro.mjs","\u0000@astro-page:src/pages/terms@_@astro":"pages/terms.astro.mjs","\u0000@astro-page:src/pages/thred/[slug]@_@astro":"pages/thred/_slug_.astro.mjs","\u0000@astro-page:src/pages/thred-news/[id]@_@astro":"pages/thred-news/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Do4vynyc.mjs","/home/project/node_modules/astro/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/home/project/src/lib/supabase.ts":"chunks/supabase_Cqg1IQyO.mjs","/home/project/src/pages/hubs.astro?astro&type=script&index=0&lang.ts":"_astro/hubs.astro_astro_type_script_index_0_lang.l0sNRNKZ.js","/home/project/src/components/FollowButton":"_astro/FollowButton.Drf0WwdY.js","/home/project/src/pages/create-hub.astro?astro&type=script&index=0&lang.ts":"_astro/create-hub.astro_astro_type_script_index_0_lang.C3HySi--.js","/home/project/src/pages/dashboard/hub.astro?astro&type=script&index=0&lang.ts":"_astro/hub.astro_astro_type_script_index_0_lang.ZU1W_nPG.js","/home/project/src/pages/search.astro?astro&type=script&index=0&lang.ts":"_astro/search.astro_astro_type_script_index_0_lang.vE0Z7529.js","/home/project/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.BB8lXEfC.js","/home/project/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.RkwXuwXJ.js","/home/project/src/components/ThemeToggle":"_astro/ThemeToggle.C0WAGTVV.js","/home/project/src/components/UserMenu":"_astro/UserMenu.XZuKLMyF.js","@astrojs/react/client.js":"_astro/client.BaoZx3Um.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/project/src/pages/hubs.astro?astro&type=script&index=0&lang.ts",""],["/home/project/src/pages/search.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const e=document.getElementById(\"main-search-input\");e&&e.addEventListener(\"keypress\",function(n){if(n.key===\"Enter\"){const t=n.target.value.trim();t&&(window.location.href=`/search?q=${encodeURIComponent(t)}`)}})});"],["/home/project/src/components/Header.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const e=document.getElementById(\"mobile-menu-button\"),n=document.getElementById(\"mobile-menu\"),o=document.getElementById(\"mobile-search-button\"),d=document.getElementById(\"mobile-search\");e&&n&&e.addEventListener(\"click\",function(){const t=e.getAttribute(\"aria-expanded\")===\"true\";e.setAttribute(\"aria-expanded\",t?\"false\":\"true\"),n.classList.toggle(\"hidden\")}),o&&d&&o.addEventListener(\"click\",function(){d.classList.toggle(\"hidden\")});const i=document.getElementById(\"search-input\");i&&i.addEventListener(\"keypress\",function(t){if(t.key===\"Enter\"){const c=t.target.value.trim();c&&(window.location.href=`/search?q=${encodeURIComponent(c)}`)}})});"]],"assets":["/_astro/about.vHaB_I5h.css","/favicon.svg","/_astro/FollowButton.Drf0WwdY.js","/_astro/Layout.astro_astro_type_script_index_0_lang.BB8lXEfC.js","/_astro/ThemeToggle.C0WAGTVV.js","/_astro/UserMenu.XZuKLMyF.js","/_astro/auth.DrRClH8M.js","/_astro/client.BaoZx3Um.js","/_astro/create-hub.astro_astro_type_script_index_0_lang.C3HySi--.js","/_astro/createLucideIcon.BKP7ETuW.js","/_astro/hub.astro_astro_type_script_index_0_lang.ZU1W_nPG.js","/_astro/index.DK-fsZOb.js","/_astro/jsx-runtime.ClP7wGfN.js","/about/index.html","/admin/index.html","/advertise/index.html","/all-posts/index.html","/contact/index.html","/create-hub/index.html","/dashboard/hub/index.html","/hubs/index.html","/privacy/index.html","/search/index.html","/terms/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"BVY/62bKZo0KzLrI4w8p33YLUAenpw+t7LzGsbTDivM=","sessionConfig":{"driver":"fs-lite","options":{"base":"/home/project/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
