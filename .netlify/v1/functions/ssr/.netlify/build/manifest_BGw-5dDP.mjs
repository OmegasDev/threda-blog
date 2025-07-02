import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { v as NOOP_MIDDLEWARE_HEADER, w as decodeKey } from './chunks/astro/server_DOaDwOgE.mjs';
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

const manifest = deserializeManifest({"hrefRoot":"file:///home/project/","cacheDir":"file:///home/project/node_modules/.astro/","outDir":"file:///home/project/dist/","srcDir":"file:///home/project/src/","publicDir":"file:///home/project/public/","buildClientDir":"file:///home/project/dist/","buildServerDir":"file:///home/project/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BYIRimPI.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BYIRimPI.css"}],"routeData":{"route":"/admin","isIndex":true,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/index.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BYIRimPI.css"}],"routeData":{"route":"/advertise","isIndex":false,"type":"page","pattern":"^\\/advertise\\/?$","segments":[[{"content":"advertise","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/advertise.astro","pathname":"/advertise","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BYIRimPI.css"},{"type":"inline","content":".line-clamp-2[data-astro-cid-iyiqi2so]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-3[data-astro-cid-iyiqi2so]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n"}],"routeData":{"route":"/all-posts","isIndex":false,"type":"page","pattern":"^\\/all-posts\\/?$","segments":[[{"content":"all-posts","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/all-posts.astro","pathname":"/all-posts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BYIRimPI.css"},{"type":"inline","content":".line-clamp-2[data-astro-cid-iyiqi2so]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-3[data-astro-cid-iyiqi2so]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n"}],"routeData":{"route":"/category/[slug]","isIndex":false,"type":"page","pattern":"^\\/category\\/([^/]+?)\\/?$","segments":[[{"content":"category","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/category/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BYIRimPI.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BYIRimPI.css"}],"routeData":{"route":"/create-hub","isIndex":false,"type":"page","pattern":"^\\/create-hub\\/?$","segments":[[{"content":"create-hub","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/create-hub.astro","pathname":"/create-hub","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BYIRimPI.css"},{"type":"inline","content":".line-clamp-2[data-astro-cid-xzttdsae]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n"}],"routeData":{"route":"/dashboard/hub","isIndex":false,"type":"page","pattern":"^\\/dashboard\\/hub\\/?$","segments":[[{"content":"dashboard","dynamic":false,"spread":false}],[{"content":"hub","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/dashboard/hub.astro","pathname":"/dashboard/hub","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BYIRimPI.css"},{"type":"inline","content":".line-clamp-2[data-astro-cid-tmfz6mcj]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-3[data-astro-cid-tmfz6mcj]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n"}],"routeData":{"route":"/hub/[slug]","isIndex":false,"type":"page","pattern":"^\\/hub\\/([^/]+?)\\/?$","segments":[[{"content":"hub","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/hub/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BYIRimPI.css"},{"type":"inline","content":".line-clamp-2[data-astro-cid-r2i6t3lx]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n"}],"routeData":{"route":"/hubs","isIndex":false,"type":"page","pattern":"^\\/hubs\\/?$","segments":[[{"content":"hubs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/hubs.astro","pathname":"/hubs","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BYIRimPI.css"},{"type":"inline","content":".line-clamp-2[data-astro-cid-iyiqi2so]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-3[data-astro-cid-iyiqi2so]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n.prose[data-astro-cid-ztig7rse]{color:#334155}.dark[data-astro-cid-ztig7rse] .prose[data-astro-cid-ztig7rse]{color:#cbd5e1}.prose[data-astro-cid-ztig7rse] h2[data-astro-cid-ztig7rse],.prose[data-astro-cid-ztig7rse] h3[data-astro-cid-ztig7rse],.prose[data-astro-cid-ztig7rse] h4[data-astro-cid-ztig7rse]{color:#0f172a;font-weight:700;margin-top:2rem;margin-bottom:1rem}.dark[data-astro-cid-ztig7rse] .prose[data-astro-cid-ztig7rse] h2[data-astro-cid-ztig7rse],.dark[data-astro-cid-ztig7rse] .prose[data-astro-cid-ztig7rse] h3[data-astro-cid-ztig7rse],.dark[data-astro-cid-ztig7rse] .prose[data-astro-cid-ztig7rse] h4[data-astro-cid-ztig7rse]{color:#fff}.prose[data-astro-cid-ztig7rse] p[data-astro-cid-ztig7rse]{margin-bottom:1.5rem;line-height:1.7}.prose[data-astro-cid-ztig7rse] img[data-astro-cid-ztig7rse]{border-radius:1rem;margin:2rem 0;box-shadow:0 20px 25px -5px #0000001a,0 8px 10px -6px #0000001a}.prose[data-astro-cid-ztig7rse] a[data-astro-cid-ztig7rse]{color:#4f46e5;text-decoration:underline;text-decoration-color:#a5b4fc;text-underline-offset:4px;transition:all .2s}.prose[data-astro-cid-ztig7rse] a[data-astro-cid-ztig7rse]:hover{color:#4338ca;text-decoration-color:#6366f1}.dark[data-astro-cid-ztig7rse] .prose[data-astro-cid-ztig7rse] a[data-astro-cid-ztig7rse]{color:#818cf8;text-decoration-color:#4f46e5}.dark[data-astro-cid-ztig7rse] .prose[data-astro-cid-ztig7rse] a[data-astro-cid-ztig7rse]:hover{color:#a5b4fc;text-decoration-color:#818cf8}.line-clamp-2[data-astro-cid-ztig7rse]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n"}],"routeData":{"route":"/post/[slug]","isIndex":false,"type":"page","pattern":"^\\/post\\/([^/]+?)\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/post/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BYIRimPI.css"}],"routeData":{"route":"/privacy","isIndex":false,"type":"page","pattern":"^\\/privacy\\/?$","segments":[[{"content":"privacy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/privacy.astro","pathname":"/privacy","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BYIRimPI.css"},{"type":"inline","content":".line-clamp-2[data-astro-cid-tmfz6mcj]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-3[data-astro-cid-tmfz6mcj]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n"}],"routeData":{"route":"/search","isIndex":false,"type":"page","pattern":"^\\/search\\/?$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BYIRimPI.css"}],"routeData":{"route":"/terms","isIndex":false,"type":"page","pattern":"^\\/terms\\/?$","segments":[[{"content":"terms","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/terms.astro","pathname":"/terms","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BYIRimPI.css"},{"type":"inline","content":".line-clamp-2[data-astro-cid-tmfz6mcj]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-3[data-astro-cid-tmfz6mcj]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n.prose[data-astro-cid-4uwmnz75]{color:#334155}.dark[data-astro-cid-4uwmnz75] .prose[data-astro-cid-4uwmnz75]{color:#cbd5e1}.prose[data-astro-cid-4uwmnz75] h2[data-astro-cid-4uwmnz75],.prose[data-astro-cid-4uwmnz75] h3[data-astro-cid-4uwmnz75],.prose[data-astro-cid-4uwmnz75] h4[data-astro-cid-4uwmnz75]{color:#0f172a;font-weight:700;margin-top:1.5rem;margin-bottom:.75rem}.dark[data-astro-cid-4uwmnz75] .prose[data-astro-cid-4uwmnz75] h2[data-astro-cid-4uwmnz75],.dark[data-astro-cid-4uwmnz75] .prose[data-astro-cid-4uwmnz75] h3[data-astro-cid-4uwmnz75],.dark[data-astro-cid-4uwmnz75] .prose[data-astro-cid-4uwmnz75] h4[data-astro-cid-4uwmnz75]{color:#fff}.prose[data-astro-cid-4uwmnz75] p[data-astro-cid-4uwmnz75]{margin-bottom:1rem;line-height:1.7}.prose[data-astro-cid-4uwmnz75] a[data-astro-cid-4uwmnz75]{color:#4f46e5;text-decoration:underline;text-decoration-color:#a5b4fc;text-underline-offset:4px;transition:all .2s}.prose[data-astro-cid-4uwmnz75] a[data-astro-cid-4uwmnz75]:hover{color:#4338ca;text-decoration-color:#6366f1}.dark[data-astro-cid-4uwmnz75] .prose[data-astro-cid-4uwmnz75] a[data-astro-cid-4uwmnz75]{color:#818cf8;text-decoration-color:#4f46e5}.dark[data-astro-cid-4uwmnz75] .prose[data-astro-cid-4uwmnz75] a[data-astro-cid-4uwmnz75]:hover{color:#a5b4fc;text-decoration-color:#818cf8}\n"}],"routeData":{"route":"/thred/[slug]","isIndex":false,"type":"page","pattern":"^\\/thred\\/([^/]+?)\\/?$","segments":[[{"content":"thred","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/thred/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BYIRimPI.css"},{"type":"inline","content":".prose[data-astro-cid-odze4zee]{color:#334155}.dark[data-astro-cid-odze4zee] .prose[data-astro-cid-odze4zee]{color:#cbd5e1}.prose[data-astro-cid-odze4zee] h2[data-astro-cid-odze4zee],.prose[data-astro-cid-odze4zee] h3[data-astro-cid-odze4zee],.prose[data-astro-cid-odze4zee] h4[data-astro-cid-odze4zee]{color:#0f172a;font-weight:700;margin-top:1.5rem;margin-bottom:.75rem}.dark[data-astro-cid-odze4zee] .prose[data-astro-cid-odze4zee] h2[data-astro-cid-odze4zee],.dark[data-astro-cid-odze4zee] .prose[data-astro-cid-odze4zee] h3[data-astro-cid-odze4zee],.dark[data-astro-cid-odze4zee] .prose[data-astro-cid-odze4zee] h4[data-astro-cid-odze4zee]{color:#fff}.prose[data-astro-cid-odze4zee] p[data-astro-cid-odze4zee]{margin-bottom:1rem;line-height:1.7}.prose[data-astro-cid-odze4zee] a[data-astro-cid-odze4zee]{color:#4f46e5;text-decoration:underline;text-decoration-color:#a5b4fc;text-underline-offset:4px;transition:all .2s}.prose[data-astro-cid-odze4zee] a[data-astro-cid-odze4zee]:hover{color:#4338ca;text-decoration-color:#6366f1}.dark[data-astro-cid-odze4zee] .prose[data-astro-cid-odze4zee] a[data-astro-cid-odze4zee]{color:#818cf8;text-decoration-color:#4f46e5}.dark[data-astro-cid-odze4zee] .prose[data-astro-cid-odze4zee] a[data-astro-cid-odze4zee]:hover{color:#a5b4fc;text-decoration-color:#818cf8}\n"}],"routeData":{"route":"/thred-news/[id]","isIndex":false,"type":"page","pattern":"^\\/thred-news\\/([^/]+?)\\/?$","segments":[[{"content":"thred-news","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/thred-news/[id].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.BYIRimPI.css"},{"type":"inline","content":".line-clamp-2[data-astro-cid-tmfz6mcj]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.line-clamp-3[data-astro-cid-tmfz6mcj]{display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n.line-clamp-2[data-astro-cid-r2i6t3lx]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"http://localhost:4321","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/project/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/admin/index.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/advertise.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/all-posts.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/category/[slug].astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/create-hub.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/dashboard/hub.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/hub/[slug].astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/hubs.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/post/[slug].astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/privacy.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/search.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/terms.astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/thred-news/[id].astro",{"propagation":"none","containsHead":true}],["/home/project/src/pages/thred/[slug].astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/admin/index@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/advertise@_@astro":"pages/advertise.astro.mjs","\u0000@astro-page:src/pages/all-posts@_@astro":"pages/all-posts.astro.mjs","\u0000@astro-page:src/pages/category/[slug]@_@astro":"pages/category/_slug_.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/create-hub@_@astro":"pages/create-hub.astro.mjs","\u0000@astro-page:src/pages/dashboard/hub@_@astro":"pages/dashboard/hub.astro.mjs","\u0000@astro-page:src/pages/hub/[slug]@_@astro":"pages/hub/_slug_.astro.mjs","\u0000@astro-page:src/pages/hubs@_@astro":"pages/hubs.astro.mjs","\u0000@astro-page:src/pages/post/[slug]@_@astro":"pages/post/_slug_.astro.mjs","\u0000@astro-page:src/pages/privacy@_@astro":"pages/privacy.astro.mjs","\u0000@astro-page:src/pages/search@_@astro":"pages/search.astro.mjs","\u0000@astro-page:src/pages/terms@_@astro":"pages/terms.astro.mjs","\u0000@astro-page:src/pages/thred/[slug]@_@astro":"pages/thred/_slug_.astro.mjs","\u0000@astro-page:src/pages/thred-news/[id]@_@astro":"pages/thred-news/_id_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BGw-5dDP.mjs","/home/project/node_modules/astro/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/home/project/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DzIltQ1P.mjs","/home/project/src/lib/supabase.ts":"chunks/supabase_Cqg1IQyO.mjs","/home/project/src/pages/hubs.astro?astro&type=script&index=0&lang.ts":"_astro/hubs.astro_astro_type_script_index_0_lang.l0sNRNKZ.js","/home/project/src/components/FollowButton":"_astro/FollowButton.e2bTjVr9.js","/home/project/src/pages/create-hub.astro?astro&type=script&index=0&lang.ts":"_astro/create-hub.astro_astro_type_script_index_0_lang.DObw1RUa.js","/home/project/src/pages/dashboard/hub.astro?astro&type=script&index=0&lang.ts":"_astro/hub.astro_astro_type_script_index_0_lang.CuK3nKEq.js","/home/project/src/pages/search.astro?astro&type=script&index=0&lang.ts":"_astro/search.astro_astro_type_script_index_0_lang.vE0Z7529.js","/home/project/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.BUnr2sZF.js","/home/project/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.RkwXuwXJ.js","/home/project/src/components/ThemeToggle":"_astro/ThemeToggle.TTWvjPS3.js","/home/project/src/components/UserMenu":"_astro/UserMenu.o9CkJAG3.js","@astrojs/react/client.js":"_astro/client.BaoZx3Um.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/project/src/pages/hubs.astro?astro&type=script&index=0&lang.ts",""],["/home/project/src/pages/search.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const e=document.getElementById(\"main-search-input\");e&&e.addEventListener(\"keypress\",function(n){if(n.key===\"Enter\"){const t=n.target.value.trim();t&&(window.location.href=`/search?q=${encodeURIComponent(t)}`)}})});"],["/home/project/src/components/Header.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const e=document.getElementById(\"mobile-menu-button\"),n=document.getElementById(\"mobile-menu\"),o=document.getElementById(\"mobile-search-button\"),d=document.getElementById(\"mobile-search\");e&&n&&e.addEventListener(\"click\",function(){const t=e.getAttribute(\"aria-expanded\")===\"true\";e.setAttribute(\"aria-expanded\",t?\"false\":\"true\"),n.classList.toggle(\"hidden\")}),o&&d&&o.addEventListener(\"click\",function(){d.classList.toggle(\"hidden\")});const i=document.getElementById(\"search-input\");i&&i.addEventListener(\"keypress\",function(t){if(t.key===\"Enter\"){const c=t.target.value.trim();c&&(window.location.href=`/search?q=${encodeURIComponent(c)}`)}})});"]],"assets":["/_astro/about.BYIRimPI.css","/favicon.svg","/_astro/FollowButton.e2bTjVr9.js","/_astro/Layout.astro_astro_type_script_index_0_lang.BUnr2sZF.js","/_astro/ThemeToggle.TTWvjPS3.js","/_astro/UserMenu.o9CkJAG3.js","/_astro/auth.4zLNVBg0.js","/_astro/client.BaoZx3Um.js","/_astro/create-hub.astro_astro_type_script_index_0_lang.DObw1RUa.js","/_astro/createLucideIcon.BKP7ETuW.js","/_astro/hub.astro_astro_type_script_index_0_lang.CuK3nKEq.js","/_astro/index.DK-fsZOb.js","/_astro/jsx-runtime.ClP7wGfN.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"9gc3zKhmQVXxMXPVKgm1ZwF1WIhmgfHnahNQMxilSDs=","sessionConfig":{"driver":"fs-lite","options":{"base":"/home/project/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
