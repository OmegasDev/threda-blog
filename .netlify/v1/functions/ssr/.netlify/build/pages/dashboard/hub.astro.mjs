/* empty css                                    */
import { f as createComponent, k as renderComponent, l as renderScript, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_DOaDwOgE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_C6YbK03H.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/Footer_DvAPT5_I.mjs';
/* empty css                                  */
export { renderers } from '../../renderers.mjs';

const $$Hub = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Hub Dashboard - Threda", "description": "Manage your hubs and track their performance.", "data-astro-cid-xzttdsae": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-xzttdsae": true })} ${maybeRenderHead()}<main class="min-h-screen bg-slate-50 dark:bg-slate-900" data-astro-cid-xzttdsae> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" data-astro-cid-xzttdsae> <!-- Header --> <div class="mb-8" data-astro-cid-xzttdsae> <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-2" data-astro-cid-xzttdsae>
Hub Dashboard
</h1> <p class="text-slate-600 dark:text-slate-400" data-astro-cid-xzttdsae>
Manage your hubs and track their performance
</p> </div> <!-- Dashboard Content --> <div id="dashboard-content" data-astro-cid-xzttdsae> <!-- Loading State --> <div id="loading-state" class="text-center py-20" data-astro-cid-xzttdsae> <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4" data-astro-cid-xzttdsae></div> <p class="text-slate-600 dark:text-slate-400" data-astro-cid-xzttdsae>Loading your hubs...</p> </div> <!-- No Hubs State --> <div id="no-hubs-state" class="hidden text-center py-20" data-astro-cid-xzttdsae> <div class="w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6" data-astro-cid-xzttdsae> <svg class="w-12 h-12 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-xzttdsae> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" data-astro-cid-xzttdsae></path> </svg> </div> <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4" data-astro-cid-xzttdsae>No Hubs Yet</h3> <p class="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-6" data-astro-cid-xzttdsae>
Create your first hub to start building a community around topics you're passionate about.
</p> <a href="/create-hub" class="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors" data-astro-cid-xzttdsae> <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-xzttdsae> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" data-astro-cid-xzttdsae></path> </svg>
Create Your First Hub
</a> </div> <!-- Hubs Grid --> <div id="hubs-grid" class="hidden grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6" data-astro-cid-xzttdsae> <!-- Hub cards will be inserted here --> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-xzttdsae": true })} ` })} ${renderScript($$result, "/home/project/src/pages/dashboard/hub.astro?astro&type=script&index=0&lang.ts")} `;
}, "/home/project/src/pages/dashboard/hub.astro", void 0);

const $$file = "/home/project/src/pages/dashboard/hub.astro";
const $$url = "/dashboard/hub";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Hub,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
