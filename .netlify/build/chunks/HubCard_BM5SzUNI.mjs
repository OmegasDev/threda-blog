import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, a as renderTemplate } from './astro/server_BlX9CtJd.mjs';
import 'kleur/colors';
import 'clsx';
import { formatDistanceToNow } from 'date-fns';
/* empty css                        */

const $$Astro = createAstro("https://threda.netlify.app");
const $$HubCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HubCard;
  const { hub, showFollowButton = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-primary-200 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-lg group" data-astro-cid-r2i6t3lx> <!-- Hub Header --> <div class="flex items-start space-x-4 mb-4" data-astro-cid-r2i6t3lx> <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"${addAttribute(`background: linear-gradient(135deg, ${hub.category === "Tech" ? "#3b82f6" : hub.category === "Crypto" ? "#f59e0b" : hub.category === "Finance" ? "#10b981" : hub.category === "Politics" ? "#ef4444" : "#8b5cf6"}20, ${hub.category === "Tech" ? "#3b82f6" : hub.category === "Crypto" ? "#f59e0b" : hub.category === "Finance" ? "#10b981" : hub.category === "Politics" ? "#ef4444" : "#8b5cf6"}40)`, "style")} data-astro-cid-r2i6t3lx> ${hub.category === "Tech" ? "\u{1F4BB}" : hub.category === "Crypto" ? "\u20BF" : hub.category === "Finance" ? "\u{1F4C8}" : hub.category === "Politics" ? "\u{1F3DB}\uFE0F" : hub.category === "Business" ? "\u{1F4BC}" : "\u{1F31F}"} </div> <div class="flex-1 min-w-0" data-astro-cid-r2i6t3lx> <h3 class="font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors truncate" data-astro-cid-r2i6t3lx> ${hub.name} </h3> <p class="text-sm text-slate-500 dark:text-slate-400" data-astro-cid-r2i6t3lx> ${hub.category} • ${hub.follower_count.toLocaleString()} followers
</p> </div> </div> <!-- Hub Description --> <p class="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2" data-astro-cid-r2i6t3lx> ${hub.description} </p> <!-- Hub Stats --> <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4" data-astro-cid-r2i6t3lx> <div class="flex items-center space-x-4" data-astro-cid-r2i6t3lx> <span data-astro-cid-r2i6t3lx>${hub.post_count} threds</span> <span data-astro-cid-r2i6t3lx>${hub.total_views.toLocaleString()} views</span> </div> <span data-astro-cid-r2i6t3lx>Created ${formatDistanceToNow(new Date(hub.created_at), { addSuffix: true })}</span> </div> <!-- Action Buttons --> <div class="flex items-center justify-between" data-astro-cid-r2i6t3lx> <a${addAttribute(`/hub/${hub.slug}`, "href")} class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors" data-astro-cid-r2i6t3lx>
View Hub →
</a> ${showFollowButton && renderTemplate`<button class="px-3 py-1.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"${addAttribute(`followHub('${hub.id}')`, "onclick")} data-astro-cid-r2i6t3lx>
Follow
</button>`} </div> </div> `;
}, "/home/project/src/components/HubCard.astro", void 0);

export { $$HubCard as $ };
