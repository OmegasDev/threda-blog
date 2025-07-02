/* empty css                                    */
import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, u as unescapeHTML, n as Fragment } from '../../chunks/astro/server_DOaDwOgE.mjs';
import 'kleur/colors';
import { format } from 'date-fns';
import { $ as $$Layout } from '../../chunks/Layout_C6YbK03H.mjs';
import { $ as $$Header, a as $$Footer } from '../../chunks/Footer_DvAPT5_I.mjs';
import { $ as $$PostCard } from '../../chunks/PostCard_DFksrlG5.mjs';
import { $ as $$AdPlacement } from '../../chunks/AdPlacement_42zPs85z.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("http://localhost:4321");
async function getStaticPaths() {
  try {
    const { supabase } = await import('../../chunks/supabase_Cqg1IQyO.mjs');
    if (supabase) {
      const { data: posts } = await supabase.from("posts").select("slug").eq("published", true);
      return (posts || []).map((post) => ({
        params: { slug: post.slug }
      }));
    }
  } catch (error) {
    console.warn("Error fetching posts for static paths:", error);
  }
  return [];
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const mockPost = {
    id: "1",
    title: "Welcome to Threda - Your Real-Time News Platform",
    slug: "welcome-to-threda",
    excerpt: "Discover how Threda revolutionizes news consumption with real-time updates, community discussions, and personalized content feeds.",
    content: "<p>Welcome to Threda, where news meets community in real-time. This platform represents the future of news consumption, bringing together cutting-edge technology with community-driven discussions.</p><p>Our mission is to create a space where information flows freely, discussions are meaningful, and every voice matters in shaping the narrative around current events.</p>",
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
    },
    seo_title: "Welcome to Threda - Your Real-Time News Platform",
    seo_description: "Discover how Threda revolutionizes news consumption with real-time updates, community discussions, and personalized content feeds."
  };
  const mockRelatedPosts = [
    {
      id: "2",
      title: "The Future of Real-Time News Consumption",
      slug: "future-real-time-news",
      excerpt: "Explore how modern platforms are changing the way we consume and interact with news content in the digital age.",
      featured_image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      published: true,
      view_count: 890,
      trending_score: 72,
      created_at: new Date(Date.now() - 1e3 * 60 * 60 * 6).toISOString(),
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
  const mockPopularPosts = [
    {
      id: "1",
      title: "Welcome to Threda - Your Real-Time News Platform",
      slug: "welcome-to-threda",
      view_count: 1250
    },
    {
      id: "2",
      title: "The Future of Real-Time News Consumption",
      slug: "future-real-time-news",
      view_count: 890
    }
  ];
  let post = null;
  let relatedPosts = mockRelatedPosts;
  let popularPosts = mockPopularPosts;
  try {
    const { supabase } = await import('../../chunks/supabase_Cqg1IQyO.mjs');
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
      `).eq("slug", slug).eq("published", true).limit(1);
      post = posts?.[0];
      if (post) {
        const { data: relatedPostsData } = await supabase.from("posts").select(`
          *,
          categories (
            id,
            name,
            slug,
            color,
            description
          )
        `).eq("category_id", post.category_id).neq("id", post.id).eq("published", true).limit(3);
        const { data: popularPostsData } = await supabase.from("posts").select("*").eq("published", true).order("view_count", { ascending: false }).limit(4);
        if (relatedPostsData && relatedPostsData.length > 0) {
          relatedPosts = relatedPostsData;
        }
        if (popularPostsData && popularPostsData.length > 0) {
          popularPosts = popularPostsData;
        }
      }
    }
  } catch (error) {
    console.warn("Using mock data for post page");
  }
  if (!post) {
    if (slug === "welcome-to-threda") {
      post = mockPost;
    } else {
      return Astro2.redirect("/404");
    }
  }
  const formattedDate = format(new Date(post.created_at), "MMMM dd, yyyy");
  const readingTime = Math.ceil((post.content || "").split(" ").length / 200);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": post.seo_title || `${post.title} - Threda`, "description": post.seo_description || post.excerpt, "ogImage": post.featured_image, "data-astro-cid-ztig7rse": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "data-astro-cid-ztig7rse": true })} ${maybeRenderHead()}<main class="min-h-screen" data-astro-cid-ztig7rse> <!-- Article Header --> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" data-astro-cid-ztig7rse> <!-- Top Article Ad --> <div class="mb-8" data-astro-cid-ztig7rse> ${renderComponent($$result2, "AdPlacement", $$AdPlacement, { "position": "article-top", "className": "max-w-4xl mx-auto", "data-astro-cid-ztig7rse": true })} </div> </div> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ztig7rse> <div class="grid grid-cols-1 lg:grid-cols-4 gap-8" data-astro-cid-ztig7rse> <!-- Main Article Content --> <article class="lg:col-span-3" data-astro-cid-ztig7rse> <header class="mb-8" data-astro-cid-ztig7rse> <!-- Breadcrumb --> <nav class="flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400 mb-6" data-astro-cid-ztig7rse> <a href="/" class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors" data-astro-cid-ztig7rse>Home</a> <span data-astro-cid-ztig7rse>/</span> ${post.categories && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-ztig7rse": true }, { "default": async ($$result3) => renderTemplate` <a${addAttribute(`/category/${post.categories.slug}`, "href")} class="hover:text-primary-600 dark:hover:text-primary-400 transition-colors" data-astro-cid-ztig7rse> ${post.categories.name} </a> <span data-astro-cid-ztig7rse>/</span> ` })}`} <span class="text-slate-400 dark:text-slate-500 truncate" data-astro-cid-ztig7rse>${post.title}</span> </nav> ${post.categories && renderTemplate`<div class="mb-4" data-astro-cid-ztig7rse> <a${addAttribute(`/category/${post.categories.slug}`, "href")} class="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium text-white hover:opacity-90 transition-opacity"${addAttribute(`background-color: ${post.categories.color}`, "style")} data-astro-cid-ztig7rse> ${post.categories.name} </a> </div>`} <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight" data-astro-cid-ztig7rse> ${post.title} </h1> <div class="flex flex-wrap items-center text-slate-600 dark:text-slate-400 gap-4 mb-6" data-astro-cid-ztig7rse> <div class="flex items-center space-x-2" data-astro-cid-ztig7rse> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ztig7rse> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" data-astro-cid-ztig7rse></path> </svg> <time${addAttribute(post.created_at, "datetime")} class="font-medium text-sm" data-astro-cid-ztig7rse>${formattedDate}</time> </div> <div class="flex items-center space-x-2" data-astro-cid-ztig7rse> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ztig7rse> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" data-astro-cid-ztig7rse></path> </svg> <span class="text-sm" data-astro-cid-ztig7rse>${readingTime} min read</span> </div> <div class="flex items-center space-x-2" data-astro-cid-ztig7rse> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-ztig7rse> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" data-astro-cid-ztig7rse></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" data-astro-cid-ztig7rse></path> </svg> <span class="text-sm" data-astro-cid-ztig7rse>${(post.view_count || 0).toLocaleString()} views</span> </div> ${(post.trending_score || 0) > 50 && renderTemplate`<div class="flex items-center space-x-2 text-red-500 font-medium" data-astro-cid-ztig7rse> <span data-astro-cid-ztig7rse>🔥</span> <span class="text-sm" data-astro-cid-ztig7rse>Trending</span> </div>`} </div> ${post.featured_image && renderTemplate`<div class="mb-8" data-astro-cid-ztig7rse> <img${addAttribute(post.featured_image, "src")}${addAttribute(post.title, "alt")} class="w-full h-64 lg:h-96 object-cover rounded-2xl shadow-xl" data-astro-cid-ztig7rse> </div>`} ${post.excerpt && renderTemplate`<div class="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-8 font-medium border-l-4 border-primary-500 pl-4 bg-primary-50 dark:bg-primary-900/20 py-4 rounded-r-lg" data-astro-cid-ztig7rse> ${post.excerpt} </div>`} </header> <!-- In-Article Ad --> <div class="mb-8" data-astro-cid-ztig7rse> ${renderComponent($$result2, "AdPlacement", $$AdPlacement, { "position": "article-middle", "data-astro-cid-ztig7rse": true })} </div> <!-- Article Content --> <div class="prose prose-lg prose-slate dark:prose-invert max-w-none mb-8" data-astro-cid-ztig7rse> <div data-astro-cid-ztig7rse>${unescapeHTML(post.content || "")}</div> </div> <!-- Bottom Article Ad --> <div class="mb-8" data-astro-cid-ztig7rse> ${renderComponent($$result2, "AdPlacement", $$AdPlacement, { "position": "article-bottom", "data-astro-cid-ztig7rse": true })} </div> <!-- Article Footer --> <footer class="border-t border-cream-200 dark:border-slate-700 pt-8" data-astro-cid-ztig7rse> <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4" data-astro-cid-ztig7rse> <div class="flex items-center space-x-4" data-astro-cid-ztig7rse> <span class="text-slate-600 dark:text-slate-400 font-medium text-sm" data-astro-cid-ztig7rse>Share this article:</span> <div class="flex space-x-2" data-astro-cid-ztig7rse> <a${addAttribute(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(Astro2.url.toString())}`, "href")} target="_blank" rel="noopener noreferrer" class="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-200" data-astro-cid-ztig7rse> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-ztig7rse> <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" data-astro-cid-ztig7rse></path> </svg> </a> <a${addAttribute(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(Astro2.url.toString())}`, "href")} target="_blank" rel="noopener noreferrer" class="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200" data-astro-cid-ztig7rse> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-ztig7rse> <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" data-astro-cid-ztig7rse></path> </svg> </a> <a${addAttribute(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(Astro2.url.toString())}`, "href")} target="_blank" rel="noopener noreferrer" class="p-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-colors duration-200" data-astro-cid-ztig7rse> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-ztig7rse> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-astro-cid-ztig7rse></path> </svg> </a> </div> </div> <div class="text-sm text-slate-500 dark:text-slate-400" data-astro-cid-ztig7rse>
Last updated: ${format(new Date(post.updated_at), "MMM dd, yyyy")} </div> </div> </footer> </article> <!-- Sidebar --> <aside class="lg:col-span-1" data-astro-cid-ztig7rse> <div class="sticky top-24 space-y-6" data-astro-cid-ztig7rse> <!-- Sidebar Ad --> ${renderComponent($$result2, "AdPlacement", $$AdPlacement, { "position": "article-sidebar", "data-astro-cid-ztig7rse": true })} <!-- Popular Posts --> <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-cream-200 dark:border-slate-700" data-astro-cid-ztig7rse> <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4" data-astro-cid-ztig7rse>Popular Articles</h3> <div class="space-y-4" data-astro-cid-ztig7rse> ${popularPosts.slice(0, 4).map((popularPost, index) => renderTemplate`<div class="flex items-start space-x-3 group" data-astro-cid-ztig7rse> <span class="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-sm font-bold" data-astro-cid-ztig7rse> ${index + 1} </span> <div class="flex-1 min-w-0" data-astro-cid-ztig7rse> <a${addAttribute(`/post/${popularPost.slug}`, "href")} class="text-sm font-medium text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2" data-astro-cid-ztig7rse> ${popularPost.title} </a> <p class="text-xs text-slate-500 dark:text-slate-400 mt-1" data-astro-cid-ztig7rse> ${(popularPost.view_count || 0).toLocaleString()} views
</p> </div> </div>`)} </div> </div> <!-- Another Sidebar Ad --> ${renderComponent($$result2, "AdPlacement", $$AdPlacement, { "position": "article-sidebar-bottom", "data-astro-cid-ztig7rse": true })} </div> </aside> </div> </div> <!-- Related Posts --> ${relatedPosts && relatedPosts.length > 0 && renderTemplate`<section class="bg-cream-100 dark:bg-slate-800 py-16 mt-16" data-astro-cid-ztig7rse> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" data-astro-cid-ztig7rse> <div class="text-center mb-12" data-astro-cid-ztig7rse> <h2 class="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4" data-astro-cid-ztig7rse>Related Articles</h2> <p class="text-slate-600 dark:text-slate-400" data-astro-cid-ztig7rse>Continue exploring similar topics</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-astro-cid-ztig7rse> ${relatedPosts.map((relatedPost, index) => renderTemplate`<div class="animate-slide-up"${addAttribute(`animation-delay: ${index * 0.1}s`, "style")} data-astro-cid-ztig7rse> ${renderComponent($$result2, "PostCard", $$PostCard, { "post": relatedPost, "data-astro-cid-ztig7rse": true })} </div>`)} </div> </div> </section>`} </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-ztig7rse": true })} ` })} `;
}, "/home/project/src/pages/post/[slug].astro", void 0);

const $$file = "/home/project/src/pages/post/[slug].astro";
const $$url = "/post/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
