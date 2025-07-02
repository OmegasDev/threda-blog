/* empty css                                 */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DOaDwOgE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_C6YbK03H.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_DvAPT5_I.mjs';
import { $ as $$AdPlacement } from '../chunks/AdPlacement_42zPs85z.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact Threda - Get in Touch", "description": "Contact Threda for partnerships, advertising opportunities, or general inquiries." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="min-h-screen"> <!-- Hero Section --> <section class="bg-gradient-to-br from-primary-50 via-cream-50 to-primary-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-20"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
Get in Touch
</h1> <p class="text-xl text-slate-600 dark:text-slate-300">
We'd love to hear from you. Reach out for partnerships, advertising, or any questions.
</p> </div> </section> <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12"> <!-- Contact Form --> <div class="lg:col-span-2"> <div class="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-cream-200 dark:border-slate-700"> <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h2> <form class="space-y-6"> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> <div> <label for="name" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
Full Name
</label> <input type="text" id="name" name="name" class="w-full px-4 py-3 border border-cream-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:text-white" required> </div> <div> <label for="email" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
Email Address
</label> <input type="email" id="email" name="email" class="w-full px-4 py-3 border border-cream-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:text-white" required> </div> </div> <div> <label for="subject" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
Subject
</label> <select id="subject" name="subject" class="w-full px-4 py-3 border border-cream-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:text-white" required> <option value="">Select a subject</option> <option value="advertising">Advertising Opportunities</option> <option value="partnership">Partnership Inquiry</option> <option value="content">Content Submission</option> <option value="technical">Technical Support</option> <option value="general">General Inquiry</option> </select> </div> <div> <label for="message" class="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
Message
</label> <textarea id="message" name="message" rows="6" class="w-full px-4 py-3 border border-cream-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-700 dark:text-white" placeholder="Tell us how we can help you..." required></textarea> </div> <button type="submit" class="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
Send Message
</button> </form> </div> </div> <!-- Contact Info & Ad --> <div class="lg:col-span-1 space-y-8"> <!-- Contact Information --> <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-cream-200 dark:border-slate-700"> <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Contact Information</h3> <div class="space-y-4"> <div class="flex items-start space-x-3"> <svg class="w-5 h-5 text-primary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <div> <p class="font-medium text-slate-900 dark:text-white">Email</p> <p class="text-slate-600 dark:text-slate-400">hello@threda.com</p> </div> </div> <div class="flex items-start space-x-3"> <svg class="w-5 h-5 text-primary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> <div> <p class="font-medium text-slate-900 dark:text-white">Response Time</p> <p class="text-slate-600 dark:text-slate-400">Within 24 hours</p> </div> </div> <div class="flex items-start space-x-3"> <svg class="w-5 h-5 text-primary-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <div> <p class="font-medium text-slate-900 dark:text-white">Office Hours</p> <p class="text-slate-600 dark:text-slate-400">Mon-Fri, 9AM-6PM EST</p> </div> </div> </div> </div> <!-- Sidebar Ad --> ${renderComponent($$result2, "AdPlacement", $$AdPlacement, { "position": "contact-sidebar" })} <!-- Quick Links --> <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-cream-200 dark:border-slate-700"> <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Quick Links</h3> <div class="space-y-3"> <a href="/advertise" class="block text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
Advertising Opportunities
</a> <a href="/about" class="block text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
About Threda
</a> <a href="/privacy" class="block text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
Privacy Policy
</a> <a href="/terms" class="block text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
Terms of Service
</a> </div> </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/project/src/pages/contact.astro", void 0);

const $$file = "/home/project/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
