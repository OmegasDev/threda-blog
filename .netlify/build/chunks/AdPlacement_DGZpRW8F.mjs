import { d as createAstro, c as createComponent, m as maybeRenderHead, b as addAttribute, u as unescapeHTML, a as renderTemplate } from './astro/server_BlX9CtJd.mjs';
import 'kleur/colors';
import 'clsx';
import { supabase } from './supabase_Cqg1IQyO.mjs';

const $$Astro = createAstro("https://threda.netlify.app");
const $$AdPlacement = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AdPlacement;
  const { position, className = "" } = Astro2.props;
  let ad = null;
  if (supabase) {
    try {
      const { data } = await supabase.from("ad_placements").select("*").eq("position", position).eq("active", true).single();
      ad = data;
    } catch (error) {
      console.warn("Failed to fetch ad placement:", error);
      ad = null;
    }
  }
  return renderTemplate`${ad && renderTemplate`${maybeRenderHead()}<div${addAttribute(`ad-placement bg-gray-100 border border-gray-200 rounded-lg p-4 text-center ${className}`, "class")}><div class="text-xs text-gray-500 mb-2">Advertisement</div><div>${unescapeHTML(ad.content)}</div></div>`}<!-- Fallback placeholder for development -->${!ad && renderTemplate`<div${addAttribute(`ad-placement bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 text-center ${className}`, "class")}><div class="text-gray-400"><div class="text-sm font-medium mb-2">Ad Space Available</div><div class="text-xs">Position: ${position}</div><div class="text-xs text-blue-600 mt-2">Contact us for advertising opportunities</div></div></div>`}`;
}, "/home/project/src/components/AdPlacement.astro", void 0);

export { $$AdPlacement as $ };
