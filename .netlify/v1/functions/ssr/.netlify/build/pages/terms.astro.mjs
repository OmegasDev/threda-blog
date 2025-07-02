/* empty css                                 */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DOaDwOgE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C6YbK03H.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_DvAPT5_I.mjs';
export { renderers } from '../renderers.mjs';

const $$Terms = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Terms of Service - Threda", "description": "Read Threda's terms of service and user agreement." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="min-h-screen"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> <h1 class="text-4xl font-bold text-slate-900 dark:text-white mb-8">Terms of Service</h1> <div class="prose prose-lg prose-slate dark:prose-invert max-w-none"> <p class="text-slate-600 dark:text-slate-400 mb-8"> <strong>Last updated:</strong> ${(/* @__PURE__ */ new Date()).toLocaleDateString()} </p> <h2>Acceptance of Terms</h2> <p>
By accessing and using Threda, you accept and agree to be bound by the terms 
          and provision of this agreement.
</p> <h2>Use License</h2> <p>
Permission is granted to temporarily download one copy of the materials on Threda 
          for personal, non-commercial transitory viewing only.
</p> <h2>Disclaimer</h2> <p>
The materials on Threda are provided on an 'as is' basis. Threda makes no warranties, 
          expressed or implied, and hereby disclaims and negates all other warranties including 
          without limitation, implied warranties or conditions of merchantability, fitness for 
          a particular purpose, or non-infringement of intellectual property or other violation of rights.
</p> <h2>Limitations</h2> <p>
In no event shall Threda or its suppliers be liable for any damages (including, 
          without limitation, damages for loss of data or profit, or due to business interruption) 
          arising out of the use or inability to use the materials on Threda, even if Threda 
          or a Threda authorized representative has been notified orally or in writing of the 
          possibility of such damage.
</p> <h2>Accuracy of Materials</h2> <p>
The materials appearing on Threda could include technical, typographical, or photographic errors. 
          Threda does not warrant that any of the materials on its website are accurate, complete, or current.
</p> <h2>Links</h2> <p>
Threda has not reviewed all of the sites linked to our website and is not responsible 
          for the contents of any such linked site.
</p> <h2>Modifications</h2> <p>
Threda may revise these terms of service at any time without notice. By using this website, 
          you are agreeing to be bound by the then current version of these terms of service.
</p> <h2>Contact Information</h2> <p>
If you have any questions about these Terms of Service, please contact us at
<a href="mailto:legal@threda.com">legal@threda.com</a>.
</p> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/project/src/pages/terms.astro", void 0);

const $$file = "/home/project/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
