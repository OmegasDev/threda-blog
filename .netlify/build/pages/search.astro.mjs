/* empty css                                 */
import { d as createAstro, c as createComponent, r as renderComponent, e as renderScript, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BlX9CtJd.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_ByfOOCLh.mjs';
import { s as searchThreds, $ as $$Header, a as $$Footer } from '../chunks/Footer_Dq979tRt.mjs';
import { $ as $$ThredCard } from '../chunks/ThredCard_wTBb22Hp.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://threda.netlify.app");
const $$Search = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const url = new URL(Astro2.request.url);
  const query = url.searchParams.get("q") || "";
  const results = query ? searchThreds(query) : [];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": query ? `Search: ${query} - Threda` : "Search - Threda", "description": `Search results for "${query}" on Threda` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="min-h-screen bg-slate-50 dark:bg-slate-900"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <!-- Search Header --> <div class="mb-8"> <h1 class="text-3xl font-bold text-slate-900 dark:text-white mb-4"> ${query ? `Search Results for "${query}"` : "Search Threds"} </h1> ${query && renderTemplate`<p class="text-slate-600 dark:text-slate-400">
Found ${results.length} thred${results.length !== 1 ? "s" : ""} matching your search
</p>`} </div> <!-- Search Bar --> <div class="mb-8"> <div class="relative max-w-2xl"> <input type="text" placeholder="Search threds, tags, or topics..."${addAttribute(query, "value")} class="w-full pl-12 pr-4 py-4 border border-slate-300 dark:border-slate-600 rounded-2xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-lg" id="main-search-input"> <svg class="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> </div> ${query ? results.length > 0 ? renderTemplate`<!-- Search Results -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${results.map((thred, index) => renderTemplate`<div class="animate-slide-up"${addAttribute(`animation-delay: ${index * 0.1}s`, "style")}> ${renderComponent($$result2, "ThredCard", $$ThredCard, { "thred": thred })} </div>`)} </div>` : renderTemplate`<!-- No Results -->
          <div class="text-center py-20"> <div class="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-6"> <svg class="w-12 h-12 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">No threds found</h3> <p class="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
We couldn't find any threds matching "${query}". Try different keywords or browse our hubs.
</p> <a href="/" class="inline-block mt-6 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors">
Back to The Loop
</a> </div>` : renderTemplate`<!-- Search Suggestions -->
        <div class="text-center py-20"> <div class="w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6"> <svg class="w-12 h-12 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">Search the Loop</h3> <p class="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8">
Find threds by keyword, tag, or topic. Stay in the loop with the latest news and discussions.
</p> <!-- Popular Search Terms --> <div class="flex flex-wrap justify-center gap-3"> ${["AI", "Bitcoin", "Nigeria", "Tech", "Sports", "Global"].map((term) => renderTemplate`<a${addAttribute(`/search?q=${encodeURIComponent(term)}`, "href")} class="px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:border-primary-300 dark:hover:border-primary-600 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"> ${term} </a>`)} </div> </div>`} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })} ${renderScript($$result, "/home/project/src/pages/search.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/pages/search.astro", void 0);

const $$file = "/home/project/src/pages/search.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
