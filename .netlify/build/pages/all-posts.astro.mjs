/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_BlX9CtJd.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_ByfOOCLh.mjs';
import { $ as $$Header, a as $$Footer } from '../chunks/Footer_Dq979tRt.mjs';
import { $ as $$PostCard } from '../chunks/PostCard_C6axEqm1.mjs';
import { $ as $$AdPlacement } from '../chunks/AdPlacement_DGZpRW8F.mjs';
export { renderers } from '../renderers.mjs';

const $$AllPosts = createComponent(async ($$result, $$props, $$slots) => {
  const mockPosts = [
    {
      id: "1",
      title: "Welcome to Threda - Your Real-Time News Platform",
      slug: "welcome-to-threda",
      excerpt: "Discover how Threda revolutionizes news consumption with real-time updates, community discussions, and personalized content feeds.",
      content: "<p>Welcome to Threda, where news meets community in real-time.</p>",
      featured_image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      published: true,
      view_count: 1250,
      trending_score: 85,
      created_at: new Date(Date.now() - 1e3 * 60 * 60 * 2).toISOString(),
      updated_at: (/* @__PURE__ */ new Date()).toISOString(),
      category_id: "1",
      categories: {
        id: "1",
        name: "Technology",
        slug: "tech",
        color: "#10b981",
        description: "Latest tech news and innovations"
      }
    },
    {
      id: "2",
      title: "The Future of Real-Time News Consumption",
      slug: "future-real-time-news",
      excerpt: "Explore how modern platforms are changing the way we consume and interact with news content in the digital age.",
      content: "<p>The landscape of news consumption is rapidly evolving.</p>",
      featured_image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      published: true,
      view_count: 890,
      trending_score: 72,
      created_at: new Date(Date.now() - 1e3 * 60 * 60 * 6).toISOString(),
      updated_at: (/* @__PURE__ */ new Date()).toISOString(),
      category_id: "2",
      categories: {
        id: "2",
        name: "Media",
        slug: "media",
        color: "#8b5cf6",
        description: "Media industry insights and trends"
      }
    },
    {
      id: "3",
      title: "Building Communities Around News and Discussion",
      slug: "building-news-communities",
      excerpt: "Learn how community-driven platforms are fostering meaningful discussions around current events and trending topics.",
      content: "<p>Community engagement is at the heart of modern news platforms.</p>",
      featured_image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      published: true,
      view_count: 654,
      trending_score: 68,
      created_at: new Date(Date.now() - 1e3 * 60 * 60 * 12).toISOString(),
      updated_at: (/* @__PURE__ */ new Date()).toISOString(),
      category_id: "1",
      categories: {
        id: "1",
        name: "Technology",
        slug: "tech",
        color: "#10b981",
        description: "Latest tech news and innovations"
      }
    }
  ];
  const mockCategories = [
    { id: "1", name: "Technology", slug: "tech", color: "#10b981", description: "Latest tech news and innovations" },
    { id: "2", name: "Media", slug: "media", color: "#8b5cf6", description: "Media industry insights and trends" },
    { id: "3", name: "Business", slug: "business", color: "#f59e0b", description: "Business news and market insights" },
    { id: "4", name: "Global", slug: "global", color: "#06b6d4", description: "World news and international affairs" }
  ];
  let allPosts = mockPosts;
  let allCategories = mockCategories;
  try {
    const { supabase } = await import('../chunks/supabase_Cqg1IQyO.mjs');
    if (supabase) {
      const { data: posts } = await supabase.from("posts").select(`
        *,
        categories (
          id,
          name,
          slug,
          color,
          description
        )
      `).eq("published", true).order("created_at", { ascending: false });
      const { data: categories } = await supabase.from("categories").select("*").order("name");
      if (posts && posts.length > 0) allPosts = posts;
      if (categories && categories.length > 0) allCategories = categories;
    }
  } catch (error) {
    console.warn("Using mock data for all-posts page");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "All Articles - Threda", "description": "Browse all articles and insights from Threda covering technology, business, lifestyle, finance, and innovation." }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="min-h-screen"> <!-- Header --> <section class="bg-gradient-to-br from-primary-50 via-cream-50 to-primary-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center"> <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
All Articles
</h1> <p class="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
Explore our complete collection of trending insights and expert analysis.
</p> </div> </div> </section> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <!-- Top Ad --> <div class="mb-12"> ${renderComponent($$result2, "AdPlacement", $$AdPlacement, { "position": "all-posts-top", "className": "max-w-4xl mx-auto" })} </div> <div class="grid grid-cols-1 lg:grid-cols-4 gap-8"> <!-- Main Content --> <div class="lg:col-span-3"> <!-- Filter Categories --> <div class="mb-8"> <h2 class="text-lg font-semibold text-slate-900 dark:text-white mb-4">Filter by Category:</h2> <div class="flex flex-wrap gap-3"> <a href="/all-posts" class="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium hover:bg-primary-700 transition-colors">
All
</a> ${allCategories.map((category) => renderTemplate`<a${addAttribute(`/category/${category.slug}`, "href")} class="px-4 py-2 bg-white dark:bg-slate-800 border border-cream-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-sm font-medium hover:border-primary-300 dark:hover:border-primary-600 transition-colors"> ${category.name} </a>`)} </div> </div> <!-- Articles Grid --> <div class="grid grid-cols-1 md:grid-cols-2 gap-8"> ${allPosts.map((post, index) => renderTemplate`<div class="animate-slide-up"${addAttribute(`animation-delay: ${index * 0.05}s`, "style")}> ${renderComponent($$result2, "PostCard", $$PostCard, { "post": post })} </div>`)} </div> ${allPosts.length === 0 && renderTemplate`<div class="text-center py-20"> <div class="w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6"> <svg class="w-12 h-12 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"></path> </svg> </div> <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">No Articles Yet</h3> <p class="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
We're working on bringing you the latest content. Check back soon!
</p> </div>`} <!-- Load More Button --> ${allPosts.length > 0 && renderTemplate`<div class="text-center mt-12"> <button class="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors duration-200">
Load More Articles
</button> </div>`} </div> <!-- Sidebar --> <div class="lg:col-span-1"> <div class="sticky top-24 space-y-8"> <!-- Sidebar Ad --> ${renderComponent($$result2, "AdPlacement", $$AdPlacement, { "position": "all-posts-sidebar" })} <!-- Popular Categories --> <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-cream-200 dark:border-slate-700"> <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Popular Categories</h3> <div class="space-y-3"> ${allCategories.map((category) => {
    const categoryPostCount = allPosts.filter((p) => p.category_id === category.id).length;
    return renderTemplate`<a${addAttribute(`/category/${category.slug}`, "href")} class="flex items-center justify-between p-3 rounded-lg hover:bg-cream-50 dark:hover:bg-slate-700 transition-colors group"> <div class="flex items-center"> <div class="w-4 h-4 rounded-full mr-3"${addAttribute(`background-color: ${category.color}`, "style")}></div> <span class="text-slate-700 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium"> ${category.name} </span> </div> <span class="text-sm text-slate-500 dark:text-slate-400"> ${categoryPostCount} </span> </a>`;
  })} </div> </div> <!-- Newsletter Signup --> <div class="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-6 text-white"> <h3 class="text-lg font-bold mb-3">Stay Updated</h3> <p class="text-primary-100 text-sm mb-4">
Get the latest articles delivered to your inbox.
</p> <div class="space-y-3"> <input type="email" placeholder="Your email" class="w-full px-3 py-2 rounded-lg text-slate-900 text-sm"> <button class="w-full bg-white text-primary-700 font-semibold py-2 rounded-lg text-sm hover:bg-primary-50 transition-colors">
Subscribe
</button> </div> </div> <!-- Bottom Sidebar Ad --> ${renderComponent($$result2, "AdPlacement", $$AdPlacement, { "position": "all-posts-sidebar-bottom" })} </div> </div> </div> </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/project/src/pages/all-posts.astro", void 0);

const $$file = "/home/project/src/pages/all-posts.astro";
const $$url = "/all-posts";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AllPosts,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
