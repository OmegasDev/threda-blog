import { f as createComponent, m as maybeRenderHead, k as renderComponent, l as renderScript, h as addAttribute, r as renderTemplate } from './astro/server_DOaDwOgE.mjs';
import 'kleur/colors';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Sun, Moon, X, User, UserPlus, Mail, Lock, Plus, Settings, LogOut } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';
import 'clsx';

const dummyHubs = [
  {
    id: "1",
    name: "Tech",
    slug: "tech",
    color: "#3b82f6",
    description: "Latest technology news, gadgets, and digital innovations shaping our future",
    icon: "💻",
    followerCount: 125e3,
    thredCount: 2340,
    topContributors: ["TechGuru", "DigitalNomad", "CodeMaster"],
    weeklyGrowth: 12.5
  },
  {
    id: "2",
    name: "Nigeria",
    slug: "nigeria",
    color: "#10b981",
    description: "Nigerian news, politics, culture, and local developments",
    icon: "🇳🇬",
    followerCount: 89e3,
    thredCount: 1560,
    topContributors: ["NaijaNews", "LagosReporter", "AbujaTimes"],
    weeklyGrowth: 8.3
  },
  {
    id: "3",
    name: "AI",
    slug: "ai",
    color: "#8b5cf6",
    description: "Artificial Intelligence breakthroughs, research, and industry developments",
    icon: "🤖",
    followerCount: 156e3,
    thredCount: 890,
    topContributors: ["AIResearcher", "MLExpert", "DeepMind"],
    weeklyGrowth: 18.7
  },
  {
    id: "4",
    name: "Crypto",
    slug: "crypto",
    color: "#f59e0b",
    description: "Cryptocurrency markets, blockchain technology, and DeFi innovations",
    icon: "₿",
    followerCount: 98e3,
    thredCount: 1780,
    topContributors: ["CryptoWhale", "BlockchainDev", "DeFiAnalyst"],
    weeklyGrowth: 15.2
  },
  {
    id: "5",
    name: "Sports",
    slug: "sports",
    color: "#ef4444",
    description: "Sports news, scores, transfers, and athletic achievements worldwide",
    icon: "⚽",
    followerCount: 112e3,
    thredCount: 2030,
    topContributors: ["SportsFan", "FootballInsider", "GameAnalyst"],
    weeklyGrowth: 6.8
  },
  {
    id: "6",
    name: "Global",
    slug: "global",
    color: "#06b6d4",
    description: "World news, international affairs, and geopolitical developments",
    icon: "🌍",
    followerCount: 187e3,
    thredCount: 3120,
    topContributors: ["WorldReporter", "GlobalNews", "DiplomaticSource"],
    weeklyGrowth: 9.4
  },
  {
    id: "7",
    name: "Finance",
    slug: "finance",
    color: "#059669",
    description: "Financial markets, investment insights, and economic analysis",
    icon: "📈",
    followerCount: 134e3,
    thredCount: 1450,
    topContributors: ["WallStreetPro", "InvestmentGuru", "MarketAnalyst"],
    weeklyGrowth: 11.3
  },
  {
    id: "8",
    name: "Health",
    slug: "health",
    color: "#dc2626",
    description: "Health news, medical breakthroughs, and wellness insights",
    icon: "🏥",
    followerCount: 76e3,
    thredCount: 980,
    topContributors: ["HealthExpert", "MedicalNews", "WellnessCoach"],
    weeklyGrowth: 7.9
  }
];
const dummyThreds = [
  {
    id: "1",
    title: "OpenAI Releases GPT-5 with Revolutionary Reasoning Capabilities",
    slug: "openai-gpt5-reasoning-breakthrough",
    summary: "The new model shows unprecedented ability to solve complex problems and understand context like never before, marking a significant leap in AI development.",
    content: `<p>OpenAI has just announced the release of GPT-5, marking a significant leap forward in artificial intelligence capabilities. The new model demonstrates revolutionary reasoning abilities that surpass all previous iterations.</p>

<h2>Key Breakthroughs</h2>
<p>GPT-5 introduces several groundbreaking features including enhanced logical reasoning, improved mathematical problem-solving, and better understanding of complex contexts. Early tests show the model can solve multi-step problems that previously required human intervention.</p>

<h2>Industry Impact</h2>
<p>Tech leaders are calling this release a "game-changer" for the AI industry. The model's ability to reason through complex scenarios could revolutionize everything from scientific research to business strategy.</p>

<h2>What This Means for Developers</h2>
<p>The new API will be available to developers starting next month, with enhanced capabilities for code generation, data analysis, and creative problem-solving.</p>`,
    hub_id: "3",
    hub: dummyHubs[2],
    source: "TechCrunch",
    author: "Sarah Chen",
    timestamp: new Date(Date.now() - 1e3 * 60 * 15).toISOString(),
    // 15 minutes ago
    readTime: 4,
    tags: ["AI", "OpenAI", "GPT-5", "Technology", "Machine Learning"],
    isBreaking: true,
    isTrending: true,
    loopScore: 95,
    saveCount: 2247,
    shareCount: 1892,
    discussCount: 356,
    viewCount: 18934,
    featured_image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "2",
    title: "Nigeria Launches Digital Currency Initiative Worth $2.5 Billion",
    slug: "nigeria-digital-currency-initiative",
    summary: "Central Bank of Nigeria announces massive investment in digital infrastructure and blockchain technology to modernize the financial sector.",
    content: `<p>The Central Bank of Nigeria has unveiled an ambitious $2.5 billion digital currency initiative aimed at modernizing the country's financial infrastructure and expanding access to digital financial services.</p>

<h2>Initiative Details</h2>
<p>The program will focus on expanding the eNaira digital currency, improving financial inclusion, and building robust blockchain infrastructure across the nation. This represents one of the largest digital currency investments by an African nation.</p>

<h2>Economic Impact</h2>
<p>Economists predict this initiative could boost Nigeria's GDP by 2-3% over the next five years while significantly reducing transaction costs for businesses and consumers.</p>`,
    hub_id: "2",
    hub: dummyHubs[1],
    source: "Reuters",
    author: "Adebayo Ogundimu",
    timestamp: new Date(Date.now() - 1e3 * 60 * 45).toISOString(),
    // 45 minutes ago
    readTime: 5,
    tags: ["Nigeria", "Digital Currency", "eNaira", "Finance", "Blockchain"],
    isBreaking: false,
    isTrending: true,
    loopScore: 87,
    saveCount: 1634,
    shareCount: 1245,
    discussCount: 189,
    viewCount: 12621,
    featured_image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "3",
    title: "Bitcoin Surges Past $75,000 as Institutional Adoption Accelerates",
    slug: "bitcoin-75k-institutional-adoption",
    summary: "Major corporations and pension funds drive Bitcoin to new all-time highs amid growing institutional interest and regulatory clarity.",
    content: `<p>Bitcoin has reached a new milestone, surpassing $75,000 for the first time as institutional adoption continues to accelerate across global markets.</p>

<h2>Market Drivers</h2>
<p>The surge is attributed to increased institutional investment, with several Fortune 500 companies adding Bitcoin to their treasury reserves this quarter. Pension funds and insurance companies are also beginning to allocate portions of their portfolios to cryptocurrency.</p>

<h2>Regulatory Clarity</h2>
<p>Recent regulatory developments in major markets have provided the clarity institutions needed to feel comfortable investing in digital assets.</p>`,
    hub_id: "4",
    hub: dummyHubs[3],
    source: "CoinDesk",
    author: "Michael Rodriguez",
    timestamp: new Date(Date.now() - 1e3 * 60 * 90).toISOString(),
    // 1.5 hours ago
    readTime: 3,
    tags: ["Bitcoin", "Cryptocurrency", "Institutional", "Finance", "Markets"],
    isBreaking: true,
    isTrending: true,
    loopScore: 92,
    saveCount: 3156,
    shareCount: 2834,
    discussCount: 467,
    viewCount: 25456,
    featured_image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "4",
    title: "Apple Unveils Revolutionary AR Glasses at Surprise Event",
    slug: "apple-ar-glasses-surprise-event",
    summary: "Tim Cook introduces Apple Vision Air, lightweight AR glasses that could replace smartphones within a decade.",
    content: `<p>Apple surprised the tech world today with the announcement of Apple Vision Air, ultra-lightweight AR glasses that represent the company's vision for the future of personal computing.</p>

<h2>Product Features</h2>
<p>The glasses weigh just 45 grams and offer all-day battery life, with seamless integration across the Apple ecosystem. The device features advanced eye-tracking, gesture recognition, and spatial computing capabilities.</p>

<h2>Market Implications</h2>
<p>Industry analysts believe this could be the beginning of the end for traditional smartphones, as AR glasses offer a more immersive and hands-free computing experience.</p>`,
    hub_id: "1",
    hub: dummyHubs[0],
    source: "The Verge",
    author: "Emma Thompson",
    timestamp: new Date(Date.now() - 1e3 * 60 * 120).toISOString(),
    // 2 hours ago
    readTime: 6,
    tags: ["Apple", "AR", "Technology", "Innovation", "Wearables"],
    isBreaking: false,
    isTrending: true,
    loopScore: 89,
    saveCount: 2789,
    shareCount: 2145,
    discussCount: 398,
    viewCount: 19876,
    featured_image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "5",
    title: "Manchester United Completes Record-Breaking Transfer Deal",
    slug: "manchester-united-record-transfer",
    summary: "The Red Devils secure Kylian Mbappé in a €200 million deal that reshapes European football and breaks all previous transfer records.",
    content: `<p>Manchester United has completed the signing of Kylian Mbappé from Paris Saint-Germain in a deal worth €200 million, making it the most expensive transfer in football history.</p>

<h2>Deal Details</h2>
<p>The French superstar has signed a five-year contract with United, with additional performance bonuses that could take the total value to €250 million. The deal includes a significant signing bonus and makes Mbappé the highest-paid player in the Premier League.</p>

<h2>Impact on the League</h2>
<p>This signing is expected to significantly boost the Premier League's global appeal and could trigger a new wave of mega-transfers as clubs compete for top talent.</p>`,
    hub_id: "5",
    hub: dummyHubs[4],
    source: "ESPN",
    author: "James Wilson",
    timestamp: new Date(Date.now() - 1e3 * 60 * 180).toISOString(),
    // 3 hours ago
    readTime: 4,
    tags: ["Football", "Transfer", "Manchester United", "Mbappé", "Premier League"],
    isBreaking: false,
    isTrending: false,
    loopScore: 78,
    saveCount: 1945,
    shareCount: 1723,
    discussCount: 234,
    viewCount: 15789,
    featured_image: "https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "6",
    title: "Global Climate Summit Reaches Historic Agreement on Carbon Reduction",
    slug: "climate-summit-carbon-agreement",
    summary: "195 countries commit to ambitious new targets that could limit global warming to 1.5°C, marking a breakthrough in international cooperation.",
    content: `<p>World leaders at the Global Climate Summit have reached a historic agreement on carbon reduction targets, with 195 countries committing to ambitious new goals that scientists say could prevent catastrophic climate change.</p>

<h2>Agreement Highlights</h2>
<p>The deal includes binding commitments to reduce global carbon emissions by 50% by 2030 and achieve net-zero by 2050. Developed nations have also pledged $500 billion in climate finance for developing countries.</p>

<h2>Implementation Challenges</h2>
<p>While the agreement is being hailed as historic, experts warn that implementation will require unprecedented international cooperation and technological innovation.</p>`,
    hub_id: "6",
    hub: dummyHubs[5],
    source: "BBC News",
    author: "Dr. Patricia Green",
    timestamp: new Date(Date.now() - 1e3 * 60 * 240).toISOString(),
    // 4 hours ago
    readTime: 7,
    tags: ["Climate", "Environment", "Global", "Politics", "Sustainability"],
    isBreaking: false,
    isTrending: false,
    loopScore: 85,
    saveCount: 2123,
    shareCount: 1867,
    discussCount: 301,
    viewCount: 17654,
    featured_image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "7",
    title: "Tesla Announces Breakthrough in Solid-State Battery Technology",
    slug: "tesla-solid-state-battery-breakthrough",
    summary: "New battery technology promises 1000-mile range and 5-minute charging, potentially revolutionizing electric vehicle adoption.",
    content: `<p>Tesla has announced a major breakthrough in solid-state battery technology that could revolutionize the electric vehicle industry and accelerate the transition away from fossil fuels.</p>

<h2>Technical Specifications</h2>
<p>The new batteries offer energy density three times higher than current lithium-ion batteries, enabling electric vehicles to travel over 1000 miles on a single charge while reducing charging time to just 5 minutes.</p>

<h2>Market Impact</h2>
<p>This development could eliminate the two main barriers to EV adoption: range anxiety and charging time. Tesla plans to begin production of vehicles with the new batteries in 2026.</p>`,
    hub_id: "1",
    hub: dummyHubs[0],
    source: "Electrek",
    author: "Alex Chen",
    timestamp: new Date(Date.now() - 1e3 * 60 * 300).toISOString(),
    // 5 hours ago
    readTime: 5,
    tags: ["Tesla", "Battery", "Electric Vehicles", "Technology", "Innovation"],
    isBreaking: false,
    isTrending: true,
    loopScore: 83,
    saveCount: 1876,
    shareCount: 1543,
    discussCount: 267,
    viewCount: 14532,
    featured_image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: "8",
    title: "WHO Declares End to Global Health Emergency Status",
    slug: "who-ends-global-health-emergency",
    summary: "World Health Organization announces significant milestone in global health recovery, citing improved vaccination rates and treatment protocols.",
    content: `<p>The World Health Organization has officially declared an end to the global health emergency status that has been in place for the past several years, marking a significant milestone in global health recovery.</p>

<h2>Key Factors</h2>
<p>The decision is based on sustained improvements in vaccination rates, effective treatment protocols, and robust healthcare infrastructure in most regions. Global mortality rates have decreased by 90% from peak levels.</p>

<h2>Future Preparedness</h2>
<p>While celebrating this milestone, WHO emphasizes the importance of maintaining vigilance and investing in pandemic preparedness for future health challenges.</p>`,
    hub_id: "8",
    hub: dummyHubs[7],
    source: "WHO",
    author: "Dr. Maria Santos",
    timestamp: new Date(Date.now() - 1e3 * 60 * 360).toISOString(),
    // 6 hours ago
    readTime: 4,
    tags: ["Health", "WHO", "Global", "Medicine", "Public Health"],
    isBreaking: false,
    isTrending: false,
    loopScore: 76,
    saveCount: 1234,
    shareCount: 987,
    discussCount: 156,
    viewCount: 11234,
    featured_image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];
const getTrendingHubs = () => {
  return dummyHubs.sort((a, b) => b.followerCount * b.weeklyGrowth - a.followerCount * a.weeklyGrowth);
};
const getThredsByHub = (hubSlug) => {
  const hub = dummyHubs.find((h) => h.slug === hubSlug);
  if (!hub) return [];
  return dummyThreds.filter((thred) => thred.hub_id === hub.id);
};
const getTrendingThreds = () => {
  return dummyThreds.filter((thred) => thred.isTrending).sort((a, b) => b.loopScore - a.loopScore);
};
const getBreakingThreds = () => {
  return dummyThreds.filter((thred) => thred.isBreaking).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
};
const searchThreds = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return dummyThreds.filter(
    (thred) => thred.title.toLowerCase().includes(lowercaseQuery) || thred.summary.toLowerCase().includes(lowercaseQuery) || thred.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) || thred.hub?.name.toLowerCase().includes(lowercaseQuery)
  );
};

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || !savedTheme && prefersDark) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: toggleTheme,
      className: "relative p-2 rounded-full bg-cream-100 dark:bg-slate-800 border border-cream-300 dark:border-slate-600 hover:bg-cream-200 dark:hover:bg-slate-700 transition-all duration-300 group",
      "aria-label": "Toggle theme",
      children: /* @__PURE__ */ jsxs("div", { className: "relative w-5 h-5", children: [
        /* @__PURE__ */ jsx(
          Sun,
          {
            className: `absolute inset-0 w-5 h-5 text-primary-600 transition-all duration-300 ${isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`
          }
        ),
        /* @__PURE__ */ jsx(
          Moon,
          {
            className: `absolute inset-0 w-5 h-5 text-slate-400 transition-all duration-300 ${isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`
          }
        )
      ] })
    }
  );
}

const supabaseUrl = "https://nwztmeyfsqbsposmsgsy.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53enRtZXlmc3Fic3Bvc21zZ3N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyNDUyNzcsImV4cCI6MjA2NjgyMTI3N30.yLN7dwVIwan3fcgi1pO1ZY04UwEO3rwbg-TwAfpN760";
const supabase = createClient(supabaseUrl, supabaseAnonKey);
async function signUp(email, password, username, displayName) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username,
        display_name: displayName
      }
    }
  });
  if (data.user && !error) {
    await supabase.from("user_profiles").insert({
      id: data.user.id,
      username,
      display_name: displayName
    });
  }
  return { data, error };
}
async function signIn(email, password) {
  return await supabase.auth.signInWithPassword({ email, password });
}
async function signOut() {
  return await supabase.auth.signOut();
}
async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}
async function followHub(hubId) {
  const user = await getCurrentUser();
  if (!user) throw new Error("Not authenticated");
  return await supabase.from("hub_followers").insert({
    hub_id: hubId,
    user_id: user.id
  });
}
async function unfollowHub(hubId) {
  const user = await getCurrentUser();
  if (!user) throw new Error("Not authenticated");
  return await supabase.from("hub_followers").delete().eq("hub_id", hubId).eq("user_id", user.id);
}
async function isFollowingHub(hubId) {
  const user = await getCurrentUser();
  if (!user) return false;
  const { data } = await supabase.from("hub_followers").select("id").eq("hub_id", hubId).eq("user_id", user.id).single();
  return !!data;
}

function AuthModal({ isOpen, onClose, mode, onModeChange }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  if (!isOpen) return null;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      if (mode === "signup") {
        const { error: error2 } = await signUp(email, password, username, displayName);
        if (error2) throw error2;
        alert("Check your email for the confirmation link!");
      } else {
        const { error: error2 } = await signIn(email, password);
        if (error2) throw error2;
        window.location.reload();
      }
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm", children: /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-slate-800 rounded-2xl p-8 w-full max-w-md mx-4 border border-slate-200 dark:border-slate-700", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-slate-900 dark:text-white", children: mode === "signin" ? "Welcome Back" : "Join Threda" }),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: onClose,
          className: "p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors",
          children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5 text-slate-500" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [
      mode === "signup" && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2", children: "Username" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(User, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                value: username,
                onChange: (e) => setUsername(e.target.value),
                className: "w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                placeholder: "Choose a username",
                required: true
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2", children: "Display Name" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(UserPlus, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                value: displayName,
                onChange: (e) => setDisplayName(e.target.value),
                className: "w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
                placeholder: "Your display name",
                required: true
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2", children: "Email" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(Mail, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "email",
              value: email,
              onChange: (e) => setEmail(e.target.value),
              className: "w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
              placeholder: "Enter your email",
              required: true
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2", children: "Password" }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(Lock, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "password",
              value: password,
              onChange: (e) => setPassword(e.target.value),
              className: "w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500",
              placeholder: "Enter your password",
              required: true,
              minLength: 6
            }
          )
        ] })
      ] }),
      error && /* @__PURE__ */ jsx("div", { className: "p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-red-600 dark:text-red-400", children: error }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "submit",
          disabled: loading,
          className: "w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold py-3 rounded-lg transition-colors",
          children: loading ? "Loading..." : mode === "signin" ? "Sign In" : "Create Account"
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-6 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-600 dark:text-slate-400", children: [
      mode === "signin" ? "Don't have an account?" : "Already have an account?",
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => onModeChange(mode === "signin" ? "signup" : "signin"),
          className: "ml-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium",
          children: mode === "signin" ? "Sign up" : "Sign in"
        }
      )
    ] }) })
  ] }) });
}

function UserMenu() {
  const [user, setUser] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("signin");
  useEffect(() => {
    getCurrentUser().then(setUser);
  }, []);
  const handleSignOut = async () => {
    await signOut();
    setUser(null);
    setShowMenu(false);
    window.location.reload();
  };
  if (!user) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            setAuthMode("signin");
            setShowAuthModal(true);
          },
          className: "px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors",
          children: "Sign In"
        }
      ),
      /* @__PURE__ */ jsx(
        AuthModal,
        {
          isOpen: showAuthModal,
          onClose: () => setShowAuthModal(false),
          mode: authMode,
          onModeChange: setAuthMode
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => setShowMenu(!showMenu),
        className: "flex items-center space-x-2 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors",
        children: [
          /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white font-medium text-sm", children: user.user_metadata?.display_name?.charAt(0) || user.email?.charAt(0) || "U" }) }),
          /* @__PURE__ */ jsx("span", { className: "hidden md:block text-sm font-medium text-slate-700 dark:text-slate-300", children: user.user_metadata?.display_name || user.email })
        ]
      }
    ),
    showMenu && /* @__PURE__ */ jsxs("div", { className: "absolute right-0 top-full mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-2 z-50", children: [
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/create-hub",
          className: "flex items-center space-x-2 px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors",
          children: [
            /* @__PURE__ */ jsx(Plus, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "Create Hub" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: "/dashboard/hub",
          className: "flex items-center space-x-2 px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors",
          children: [
            /* @__PURE__ */ jsx(Settings, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "Dashboard" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: handleSignOut,
          className: "flex items-center space-x-2 w-full px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors",
          children: [
            /* @__PURE__ */ jsx(LogOut, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: "Sign Out" })
          ]
        }
      )
    ] })
  ] });
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const hubs = dummyHubs.slice(0, 5);
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div class="flex justify-between items-center h-16"> <!-- Logo --> <div class="flex-shrink-0"> <a href="/" class="flex items-center group"> <div class="relative"> <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"> <span class="text-white font-bold text-lg">T</span> </div> <div class="absolute -inset-1 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div> </div> <div class="ml-3"> <span class="text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-800 dark:from-primary-400 dark:to-primary-600 bg-clip-text text-transparent">
Threda
</span> <div class="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide">
STAY IN THE LOOP
</div> </div> </a> </div> <!-- Desktop Navigation --> <nav class="hidden md:flex items-center space-x-1"> <a href="/" class="px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
The Loop
</a> <a href="/hubs" class="px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
Community Hubs
</a> ${hubs.map((hub) => renderTemplate`<a${addAttribute(`/hub/${hub.slug}`, "href")} class="px-4 py-2 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 relative group"> <span class="mr-1">${hub.icon}</span> ${hub.name} <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full"${addAttribute(`background-color: ${hub.color}`, "style")}></div> </a>`)} </nav> <!-- Search Bar --> <div class="hidden lg:flex flex-1 max-w-md mx-8"> <div class="relative w-full"> <input type="text" placeholder="Search threds..." class="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors" id="search-input"> <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> </div> <!-- Right side controls --> <div class="flex items-center space-x-3"> ${renderComponent($$result, "ThemeToggle", ThemeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/project/src/components/ThemeToggle", "client:component-export": "default" })} ${renderComponent($$result, "UserMenu", UserMenu, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/home/project/src/components/UserMenu", "client:component-export": "default" })} <!-- Mobile search button --> <button id="mobile-search-button" type="button" class="lg:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"> <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </button> <!-- Mobile menu button --> <button id="mobile-menu-button" type="button" class="md:hidden p-2 rounded-lg text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200" aria-expanded="false"> <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> </div> </div> <!-- Mobile search bar --> <div id="mobile-search" class="lg:hidden hidden pb-4"> <div class="relative"> <input type="text" placeholder="Search threds..." class="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-full bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"> <svg class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path> </svg> </div> </div> <!-- Mobile menu --> <div id="mobile-menu" class="md:hidden hidden border-t border-slate-200 dark:border-slate-700 py-4"> <div class="space-y-1"> <a href="/" class="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
🔄 The Loop
</a> <a href="/hubs" class="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
🌟 Community Hubs
</a> ${hubs.map((hub) => renderTemplate`<a${addAttribute(`/hub/${hub.slug}`, "href")} class="block px-4 py-3 text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-all duration-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"> <span class="mr-2">${hub.icon}</span> ${hub.name} </a>`)} </div> </div> </div> </header> ${renderScript($$result, "/home/project/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/project/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="bg-slate-900 dark:bg-slate-950 text-white"> <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <!-- Brand --> <div class="lg:col-span-2"> <div class="flex items-center mb-6"> <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-xl flex items-center justify-center shadow-lg"> <span class="text-white font-bold text-xl">T</span> </div> <div class="ml-3"> <span class="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
Threda
</span> <div class="text-xs text-slate-400 font-medium tracking-wide">
STAY IN THE LOOP
</div> </div> </div> <p class="text-slate-300 mb-6 max-w-md leading-relaxed">
Your real-time news and community platform. Get the latest threds across technology, global events, 
          and trending topics. Stay ahead with breaking news and community discussions.
</p> <div class="flex space-x-4"> <a href="#" class="p-2 bg-slate-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path> </svg> </a> <a href="#" class="p-2 bg-slate-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path> </svg> </a> <a href="#" class="p-2 bg-slate-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"> <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path> </svg> </a> </div> </div> <!-- Quick Links --> <div> <h3 class="text-lg font-semibold mb-6 text-primary-400">Quick Links</h3> <ul class="space-y-3"> <li><a href="/" class="text-slate-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"> <span class="group-hover:translate-x-1 transition-transform duration-200">The Loop</span> </a></li> <li><a href="/about" class="text-slate-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"> <span class="group-hover:translate-x-1 transition-transform duration-200">About Threda</span> </a></li> <li><a href="/search" class="text-slate-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"> <span class="group-hover:translate-x-1 transition-transform duration-200">Search</span> </a></li> <li><a href="/contact" class="text-slate-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"> <span class="group-hover:translate-x-1 transition-transform duration-200">Contact</span> </a></li> </ul> </div> <!-- Hubs --> <div> <h3 class="text-lg font-semibold mb-6 text-primary-400">Popular Hubs</h3> <ul class="space-y-3"> <li><a href="/hub/tech" class="text-slate-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"> <span class="mr-2">💻</span> <span class="group-hover:translate-x-1 transition-transform duration-200">Tech</span> </a></li> <li><a href="/hub/ai" class="text-slate-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"> <span class="mr-2">🤖</span> <span class="group-hover:translate-x-1 transition-transform duration-200">AI</span> </a></li> <li><a href="/hub/crypto" class="text-slate-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"> <span class="mr-2">₿</span> <span class="group-hover:translate-x-1 transition-transform duration-200">Crypto</span> </a></li> <li><a href="/hub/global" class="text-slate-300 hover:text-primary-400 transition-colors duration-200 flex items-center group"> <span class="mr-2">🌍</span> <span class="group-hover:translate-x-1 transition-transform duration-200">Global</span> </a></li> </ul> </div> </div> <!-- Bottom bar --> <div class="border-t border-slate-800 pt-8 mt-12"> <div class="flex flex-col md:flex-row justify-between items-center"> <p class="text-slate-400 text-sm">
© ${currentYear} Threda. All rights reserved.
</p> <div class="flex space-x-6 mt-4 md:mt-0"> <a href="/privacy" class="text-slate-400 hover:text-primary-400 text-sm transition-colors duration-200">Privacy Policy</a> <a href="/terms" class="text-slate-400 hover:text-primary-400 text-sm transition-colors duration-200">Terms of Service</a> <a href="/contact" class="text-slate-400 hover:text-primary-400 text-sm transition-colors duration-200">Contact</a> </div> </div> </div> </div> </footer>`;
}, "/home/project/src/components/Footer.astro", void 0);

export { $$Header as $, $$Footer as a, getThredsByHub as b, getTrendingHubs as c, dummyHubs as d, dummyThreds as e, followHub as f, getCurrentUser as g, getBreakingThreds as h, isFollowingHub as i, getTrendingThreds as j, searchThreds as s, unfollowHub as u };
