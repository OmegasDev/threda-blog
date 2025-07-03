/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BlX9CtJd.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_ByfOOCLh.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_Dq979tRt.mjs';
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Privacy Policy - Threda", "description": "Learn how Threda protects your privacy and handles your personal information." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="min-h-screen"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> <h1 class="text-4xl font-bold text-slate-900 dark:text-white mb-8">Privacy Policy</h1> <div class="prose prose-lg prose-slate dark:prose-invert max-w-none"> <p class="text-slate-600 dark:text-slate-400 mb-8"> <strong>Last updated:</strong> ${(/* @__PURE__ */ new Date()).toLocaleDateString()} </p> <h2>Information We Collect</h2> <p>
We collect information you provide directly to us, such as when you subscribe to our newsletter, 
          contact us, or interact with our content.
</p> <h2>How We Use Your Information</h2> <p>We use the information we collect to:</p> <ul> <li>Provide and improve our services</li> <li>Send you newsletters and updates</li> <li>Respond to your inquiries</li> <li>Analyze usage patterns to improve user experience</li> </ul> <h2>Information Sharing</h2> <p>
We do not sell, trade, or otherwise transfer your personal information to third parties 
          without your consent, except as described in this policy.
</p> <h2>Cookies and Tracking</h2> <p>
We use cookies and similar technologies to enhance your browsing experience, 
          analyze site traffic, and personalize content.
</p> <h2>Data Security</h2> <p>
We implement appropriate security measures to protect your personal information 
          against unauthorized access, alteration, disclosure, or destruction.
</p> <h2>Your Rights</h2> <p>You have the right to:</p> <ul> <li>Access your personal information</li> <li>Correct inaccurate information</li> <li>Request deletion of your information</li> <li>Opt-out of marketing communications</li> </ul> <h2>Contact Us</h2> <p>
If you have questions about this Privacy Policy, please contact us at
<a href="mailto:privacy@threda.com">privacy@threda.com</a>.
</p> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/project/src/pages/privacy.astro", void 0);

const $$file = "/home/project/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Privacy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
