/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BlX9CtJd.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_ByfOOCLh.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_Dq979tRt.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Threda - Stay in the Loop", "description": "Learn about Threda's mission to deliver real-time news and community discussions." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="min-h-screen bg-slate-50 dark:bg-slate-900"> <!-- Hero Section --> <section class="bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 py-20"> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
About Threda
</h1> <p class="text-xl text-slate-600 dark:text-slate-300">
Your real-time news and community platform. Stay in the loop with what matters most.
</p> </div> </section> <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> <div class="prose prose-lg prose-slate dark:prose-invert max-w-none"> <h2>What is Threda?</h2> <p>
Threda is a revolutionary real-time news and community platform that keeps you connected to the stories that matter. 
          We deliver breaking news, trending topics, and community discussions through our unique "thred" format - bite-sized, 
          engaging news drops that keep you informed without overwhelming you.
</p> <h2>How It Works</h2> <p>
Our platform is organized around <strong>Hubs</strong> - specialized communities focused on specific topics like 
          Technology, Nigeria, AI, Crypto, Sports, and Global news. Each hub contains <strong>Threds</strong> - our term for 
          news articles and discussion topics.
</p> <h3>Key Features:</h3> <ul> <li><strong>The Loop:</strong> Your personalized news feed with the latest threds</li> <li><strong>Hubs:</strong> Topic-specific communities (like subreddits for news)</li> <li><strong>Loop Score:</strong> Our engagement metric that shows how hot a thred is</li> <li><strong>Real-time Updates:</strong> Breaking news and trending topics as they happen</li> <li><strong>Community Engagement:</strong> Share, save, and discuss threds with others</li> </ul> <h2>Our Mission</h2> <p>
We believe staying informed shouldn't be overwhelming. Threda cuts through the noise to deliver the news that 
          matters most, when it matters most. Our community-driven approach ensures you're not just consuming news - 
          you're part of the conversation.
</p> <h2>Why "Threda"?</h2> <p>
The name "Threda" combines "thread" (connecting stories and conversations) with the idea of staying "ahead" 
          of the news cycle. Our tagline "Stay in the Loop" reflects our commitment to keeping you connected to the 
          ongoing conversation around important events and trends.
</p> <h2>The Technology</h2> <p>
Threda is powered by advanced automation and real-time data processing. Our platform continuously monitors 
          news sources, social media, and trending topics to bring you the most relevant and timely information. 
          We use AI to curate content while maintaining human editorial oversight to ensure quality and accuracy.
</p> <h2>Join the Community</h2> <p>
Whether you're interested in the latest tech breakthroughs, Nigerian politics, cryptocurrency trends, or 
          global events, Threda has a hub for you. Join thousands of users who trust Threda to keep them informed 
          and engaged with the world around them.
</p> <div class="bg-primary-50 dark:bg-primary-900/20 rounded-2xl p-8 mt-12 text-center"> <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">Ready to Jump into the Loop?</h3> <p class="text-slate-600 dark:text-slate-400 mb-6">
Start exploring threds, follow your favorite hubs, and join the conversation.
</p> <a href="/" class="inline-block px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors">
Explore The Loop
</a> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/project/src/pages/about.astro", void 0);

const $$file = "/home/project/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
