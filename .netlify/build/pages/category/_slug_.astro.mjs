/* empty css                                    */
import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BlX9CtJd.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_ByfOOCLh.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/Footer_Dq979tRt.mjs';
import { $ as $$PostCard } from '../../chunks/PostCard_C6axEqm1.mjs';
import { $ as $$AdPlacement } from '../../chunks/AdPlacement_DGZpRW8F.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://threda.netlify.app");
async function getStaticPaths() {
  try {
    const { supabase } = await import('../../chunks/supabase_Cqg1IQyO.mjs');
    if (supabase) {
      const { data: categories } = await supabase.from("categories").select("slug");
      return (categories || []).map((category) => ({
        params: { slug: category.slug }
      }));
    }
  } catch (error) {
    console.warn("Error fetching categories for static paths:", error);
  }
  return [];
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const mockCategories = [
    { id: "1", name: "Technology", slug: "tech", color: "#10b981", description: "Latest tech news and innovations" },
    { id: "2", name: "Media", slug: "media", color: "#8b5cf6", description: "Media industry insights and trends" },
    { id: "3", name: "Business", slug: "business", color: "#f59e0b", description: "Business news and market insights" },
    { id: "4", name: "Global", slug: "global", color: "#06b6d4", description: "World news and international affairs" }
  ];
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
    }
  ];
  let category = null;
  let categoryPosts = [];
  let allCategories = mockCategories;
  try {
    const { supabase } = await import('../../chunks/supabase_Cqg1IQyO.mjs');
    if (supabase) {
      const { data: categories } = await supabase.from("categories").select("*").eq("slug", slug).limit(1);
      category = categories?.[0];
      if (category) {
        const { data: posts } = await supabase.from("posts").select(`
          *,
          categories (
            id,
            name,
            slug,
            color,
            description
          )
        `).eq("category_id", category.id).eq("published", true).order("created_at", { ascending: false });
        categoryPosts = posts || [];
      }
      const { data: supabaseCategories } = await supabase.from("categories").select("*").order("name");
      if (supabaseCategories && supabaseCategories.length > 0) {
        allCategories = supabaseCategories;
      }
    }
  } catch (error) {
    console.warn("Using mock data for category page");
  }
  if (!category) {
    category = mockCategories.find((c) => c.slug === slug);
    if (category) {
      categoryPosts = mockPosts.filter((p) => p.category_id === category.id);
    }
  }
  if (!category) {
    return Astro2.redirect("/404");
  }
  const featuredPost = categoryPosts[0];
  const otherPosts = categoryPosts.slice(1);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${category.name} - Threda`, "description": category.description || `Latest ${category.name.toLowerCase()} articles and insights` }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="min-h-screen"> <!-- Category Header --> <section class="bg-gradient-to-br from-primary-50 via-cream-50 to-primary-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center"> <div class="mb-6"> <span class="inline-flex items-center px-6 py-3 rounded-full text-white font-semibold text-lg shadow-lg"${addAttribute(`background-color: ${category.color}`, "style")}> ${category.name} </span> </div> <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"> ${category.name} Articles
</h1> <p class="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto"> ${category.description} </p> </div> </div> </section> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> <!-- Top Category Ad --> <div class="mb-12"> ${renderComponent($$result2, "AdPlacement", $$AdPlacement, { "position": `category-${category.slug}-top`, "className": "max-w-4xl mx-auto" })} </div> ${categoryPosts.length > 0 ? renderTemplate`<div class="grid grid-cols-1 lg:grid-cols-4 gap-8"> <!-- Main Content --> <div class="lg:col-span-3"> ${featuredPost && renderTemplate`<div class="mb-12"> <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">Featured Article</h2> ${renderComponent($$result2, "PostCard", $$PostCard, { "post": featuredPost, "variant": "hero" })} </div>`} ${otherPosts.length > 0 && renderTemplate`<div> <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">All ${category.name} Articles</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${otherPosts.map((post, index) => renderTemplate`<div class="animate-slide-up"${addAttribute(`animation-delay: ${index * 0.1}s`, "style")}> ${renderComponent($$result2, "PostCard", $$PostCard, { "post": post })} </div>`)} </div> </div>`} </div> <!-- Sidebar --> <div class="lg:col-span-1"> <div class="sticky top-24 space-y-8"> <!-- Category Sidebar Ad --> ${renderComponent($$result2, "AdPlacement", $$AdPlacement, { "position": `category-${category.slug}-sidebar` })} <!-- Other Categories --> <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-cream-200 dark:border-slate-700"> <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Explore Other Topics</h3> <div class="space-y-3"> ${(allCategories || []).filter((c) => c.id !== category.id).map((otherCategory) => renderTemplate`<a${addAttribute(`/category/${otherCategory.slug}`, "href")} class="flex items-center p-3 rounded-lg hover:bg-cream-50 dark:hover:bg-slate-700 transition-colors group"> <div class="w-4 h-4 rounded-full mr-3"${addAttribute(`background-color: ${otherCategory.color}`, "style")}></div> <span class="text-slate-700 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium"> ${otherCategory.name} </span> </a>`)} </div> </div> <!-- Bottom Sidebar Ad --> ${renderComponent($$result2, "AdPlacement", $$AdPlacement, { "position": `category-${category.slug}-sidebar-bottom` })} </div> </div> </div>` : renderTemplate`<div class="text-center py-20"> <div class="w-24 h-24 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6"> <svg class="w-12 h-12 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2 2 0 00-2-2h-2"></path> </svg> </div> <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">No Articles Yet</h3> <p class="text-slate-600 dark:text-slate-400 max-w-md mx-auto">
We're working on bringing you the latest ${category.name.toLowerCase()} content. Check back soon!
</p> </div>`} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/project/src/pages/category/[slug].astro", void 0);

const $$file = "/home/project/src/pages/category/[slug].astro";
const $$url = "/category/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
