/* empty css                                    */
import { d as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_BlX9CtJd.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_ByfOOCLh.mjs';
import { g as getCurrentUser, i as isFollowingHub, u as unfollowHub, f as followHub, d as dummyHubs, b as getThredsByHub, $ as $$Header, a as $$Footer } from '../../chunks/Footer_Dq979tRt.mjs';
import { $ as $$ThredCard } from '../../chunks/ThredCard_wTBb22Hp.mjs';
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../../renderers.mjs';

function FollowButton({ hubId, initialFollowing = false, onFollowChange }) {
  const [isFollowing, setIsFollowing] = useState(initialFollowing);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    const loadUserAndFollowStatus = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
        if (currentUser) {
          const following = await isFollowingHub(hubId);
          setIsFollowing(following);
        }
      } catch (error) {
        console.error("Error loading user or follow status:", error);
      }
    };
    loadUserAndFollowStatus();
  }, [hubId]);
  const handleToggleFollow = async () => {
    if (!user) {
      alert("Please sign in to follow hubs");
      return;
    }
    setLoading(true);
    try {
      if (isFollowing) {
        await unfollowHub(hubId);
        setIsFollowing(false);
        onFollowChange?.(false);
      } else {
        await followHub(hubId);
        setIsFollowing(true);
        onFollowChange?.(true);
      }
    } catch (error) {
      console.error("Error toggling follow:", error);
      alert("Failed to update follow status");
    } finally {
      setLoading(false);
    }
  };
  if (!user) {
    return /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => alert("Please sign in to follow hubs"),
        className: "px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors",
        children: "Follow"
      }
    );
  }
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: handleToggleFollow,
      disabled: loading,
      className: `px-4 py-2 font-medium rounded-lg transition-colors ${isFollowing ? "bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600" : "bg-primary-600 hover:bg-primary-700 text-white"}`,
      children: loading ? "Loading..." : isFollowing ? "Following" : "Follow"
    }
  );
}

const $$Astro = createAstro("https://threda.netlify.app");
async function getStaticPaths() {
  const hubs = dummyHubs;
  const userHubs = [
    { slug: "ai-innovations" },
    { slug: "crypto-trading" },
    { slug: "nigerian-startups" },
    { slug: "defi-watch" },
    { slug: "global-politics" }
  ];
  return [...hubs, ...userHubs].map((hub) => ({
    params: { slug: hub.slug }
  }));
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  let hub = dummyHubs.find((h) => h.slug === slug);
  const userCreatedHubs = {
    "ai-innovations": {
      id: "1",
      name: "AI Innovations",
      slug: "ai-innovations",
      description: "Latest breakthroughs in artificial intelligence and machine learning",
      category: "Tech",
      color: "#3b82f6",
      icon: "\u{1F916}",
      followerCount: 1250,
      thredCount: 45,
      topContributors: ["AIResearcher", "MLExpert", "DeepMind"],
      weeklyGrowth: 18.7,
      isUserCreated: true,
      created_by: "AI Enthusiast",
      total_views: 15600
    },
    "crypto-trading": {
      id: "2",
      name: "Crypto Trading Hub",
      slug: "crypto-trading",
      description: "Real-time crypto market analysis and trading strategies",
      category: "Crypto",
      color: "#f59e0b",
      icon: "\u20BF",
      followerCount: 2340,
      thredCount: 78,
      topContributors: ["CryptoWhale", "BlockchainDev", "DeFiAnalyst"],
      weeklyGrowth: 15.2,
      isUserCreated: true,
      created_by: "Crypto Trader",
      total_views: 32400
    },
    "nigerian-startups": {
      id: "3",
      name: "Nigerian Startups",
      slug: "nigerian-startups",
      description: "Covering the booming startup ecosystem in Nigeria",
      category: "Business",
      color: "#10b981",
      icon: "\u{1F1F3}\u{1F1EC}",
      followerCount: 890,
      thredCount: 32,
      topContributors: ["NaijaNews", "LagosReporter", "AbujaTimes"],
      weeklyGrowth: 8.3,
      isUserCreated: true,
      created_by: "Startup Founder",
      total_views: 12300
    },
    "defi-watch": {
      id: "4",
      name: "DeFi Watch",
      slug: "defi-watch",
      description: "Decentralized finance news, protocols, and opportunities",
      category: "Finance",
      color: "#8b5cf6",
      icon: "\u{1F3E6}",
      followerCount: 1560,
      thredCount: 56,
      topContributors: ["DeFiGuru", "YieldFarmer", "ProtocolDev"],
      weeklyGrowth: 12.4,
      isUserCreated: true,
      created_by: "DeFi Expert",
      total_views: 21800
    },
    "global-politics": {
      id: "5",
      name: "Global Politics",
      slug: "global-politics",
      description: "International affairs and political developments worldwide",
      category: "Politics",
      color: "#ef4444",
      icon: "\u{1F3DB}\uFE0F",
      followerCount: 3200,
      thredCount: 120,
      topContributors: ["WorldReporter", "GlobalNews", "DiplomaticSource"],
      weeklyGrowth: 9.4,
      isUserCreated: true,
      created_by: "Political Analyst",
      total_views: 45600
    }
  };
  if (!hub && userCreatedHubs[slug]) {
    hub = userCreatedHubs[slug];
  }
  if (!hub) {
    return Astro2.redirect("/404");
  }
  const hubThreds = getThredsByHub(slug);
  const featuredThred = hubThreds[0];
  const otherThreds = hubThreds.slice(1);
  const recommendedHubs = Object.values(userCreatedHubs).filter((h) => h.slug !== slug).slice(0, 4);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${hub.name} Hub - Threda`, "description": hub.description || `Latest ${hub.name.toLowerCase()} threds and discussions` }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="min-h-screen bg-slate-50 dark:bg-slate-900"> <!-- Hub Header --> <section class="bg-gradient-to-br from-primary-50 via-white to-primary-100 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 py-16"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="text-center"> <div class="mb-6"> <div class="w-20 h-20 mx-auto rounded-2xl flex items-center justify-center text-4xl shadow-lg"${addAttribute(`background-color: ${hub.color}20; border: 2px solid ${hub.color}30`, "style")}> ${hub.icon} </div> </div> <div class="flex items-center justify-center space-x-2 mb-4"> <h1 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white"> ${hub.name} </h1> ${hub.isUserCreated && renderTemplate`<div class="flex items-center space-x-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded-full text-sm"> <div class="w-2 h-2 bg-green-500 rounded-full"></div> <span>Community</span> </div>`} </div> <p class="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6"> ${hub.description} </p> <div class="flex items-center justify-center space-x-6 text-sm text-slate-500 dark:text-slate-400 mb-6"> <div class="flex items-center space-x-1"> <span>👥</span> <span>${hub.followerCount.toLocaleString()} followers</span> </div> <div class="flex items-center space-x-1"> <span>📝</span> <span>${hub.thredCount} threds</span> </div> ${hub.total_views && renderTemplate`<div class="flex items-center space-x-1"> <span>👁️</span> <span>${hub.total_views.toLocaleString()} views</span> </div>`} </div> <div class="flex items-center justify-center space-x-4"> ${renderComponent($$result2, "FollowButton", FollowButton, { "hubId": hub.id, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/project/src/components/FollowButton", "client:component-export": "default" })} ${hub.isUserCreated && renderTemplate`<span class="text-sm text-slate-500 dark:text-slate-400">
Created by ${hub.created_by} </span>`} </div> </div> </div> </section> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"> ${hubThreds.length > 0 ? renderTemplate`<div class="grid grid-cols-1 lg:grid-cols-4 gap-8"> <!-- Main Content --> <div class="lg:col-span-3"> ${featuredThred && renderTemplate`<div class="mb-12"> <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">Featured in ${hub.name}</h2> ${renderComponent($$result2, "ThredCard", $$ThredCard, { "thred": featuredThred, "variant": "hero" })} </div>`} ${otherThreds.length > 0 && renderTemplate`<div> <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">Latest ${hub.name} Threds</h2> <div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ${otherThreds.map((thred, index) => renderTemplate`<div class="animate-slide-up"${addAttribute(`animation-delay: ${index * 0.1}s`, "style")}> ${renderComponent($$result2, "ThredCard", $$ThredCard, { "thred": thred })} </div>`)} </div> </div>`} </div> <!-- Sidebar --> <div class="lg:col-span-1"> <div class="sticky top-24 space-y-6"> <!-- Hub Stats --> <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"> <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Hub Stats</h3> <div class="space-y-4"> <div class="flex justify-between"> <span class="text-slate-600 dark:text-slate-400">Total Threds</span> <span class="font-semibold text-slate-900 dark:text-white">${hub.thredCount}</span> </div> <div class="flex justify-between"> <span class="text-slate-600 dark:text-slate-400">Followers</span> <span class="font-semibold text-slate-900 dark:text-white">${hub.followerCount.toLocaleString()}</span> </div> ${hub.total_views && renderTemplate`<div class="flex justify-between"> <span class="text-slate-600 dark:text-slate-400">Total Views</span> <span class="font-semibold text-slate-900 dark:text-white">${hub.total_views.toLocaleString()}</span> </div>`} <div class="flex justify-between"> <span class="text-slate-600 dark:text-slate-400">Weekly Growth</span> <span class="font-semibold text-green-600">+${hub.weeklyGrowth}%</span> </div> </div> </div> <!-- Top Contributors --> ${hub.topContributors && renderTemplate`<div class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"> <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Top Contributors</h3> <div class="space-y-3"> ${hub.topContributors.map((contributor, index) => renderTemplate`<div class="flex items-center space-x-3"> <div class="w-8 h-8 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center"> <span class="text-primary-600 dark:text-primary-400 font-bold text-sm"> ${contributor.charAt(0)} </span> </div> <div class="flex-1"> <div class="font-medium text-slate-900 dark:text-white text-sm"> ${contributor} </div> <div class="text-xs text-slate-500 dark:text-slate-400">
#${index + 1} contributor
</div> </div> </div>`)} </div> </div>`} <!-- Recommended Hubs --> <div class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"> <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-4">Recommended Hubs</h3> <div class="space-y-3"> ${recommendedHubs.map((otherHub) => renderTemplate`<a${addAttribute(`/hub/${otherHub.slug}`, "href")} class="flex items-center p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors group"> <span class="text-2xl mr-3">${otherHub.icon}</span> <div class="flex-1"> <span class="text-slate-700 dark:text-slate-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium block"> ${otherHub.name} </span> <span class="text-xs text-slate-500 dark:text-slate-400"> ${otherHub.followerCount.toLocaleString()} followers
</span> </div> </a>`)} </div> <div class="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700"> <a href="/hubs" class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium">
Explore all hubs →
</a> </div> </div> </div> </div> </div>` : renderTemplate`<div class="text-center py-20"> <div class="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-4xl mb-6"${addAttribute(`background-color: ${hub.color}20`, "style")}> ${hub.icon} </div> <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">No Threds Yet</h3> <p class="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-6">
This hub is just getting started. Be the first to drop a thred here!
</p> <div class="flex items-center justify-center space-x-4"> ${renderComponent($$result2, "FollowButton", FollowButton, { "hubId": hub.id, "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/project/src/components/FollowButton", "client:component-export": "default" })} <button class="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-colors">
Start the conversation
</button> </div> </div>`} </div> </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/home/project/src/pages/hub/[slug].astro", void 0);

const $$file = "/home/project/src/pages/hub/[slug].astro";
const $$url = "/hub/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
