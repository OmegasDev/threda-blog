// Enhanced dummy data for Threda - Real-time news platform with improved realism
export const dummyHubs = [
  {
    id: '1',
    name: 'Tech',
    slug: 'tech',
    color: '#3b82f6',
    description: 'Latest technology news, gadgets, and digital innovations shaping our future',
    icon: '💻',
    followerCount: 125000,
    thredCount: 2340,
    topContributors: ['TechGuru', 'DigitalNomad', 'CodeMaster'],
    weeklyGrowth: 12.5
  },
  {
    id: '2',
    name: 'Nigeria',
    slug: 'nigeria',
    color: '#10b981',
    description: 'Nigerian news, politics, culture, and local developments',
    icon: '🇳🇬',
    followerCount: 89000,
    thredCount: 1560,
    topContributors: ['NaijaNews', 'LagosReporter', 'AbujaTimes'],
    weeklyGrowth: 8.3
  },
  {
    id: '3',
    name: 'AI',
    slug: 'ai',
    color: '#8b5cf6',
    description: 'Artificial Intelligence breakthroughs, research, and industry developments',
    icon: '🤖',
    followerCount: 156000,
    thredCount: 890,
    topContributors: ['AIResearcher', 'MLExpert', 'DeepMind'],
    weeklyGrowth: 18.7
  },
  {
    id: '4',
    name: 'Crypto',
    slug: 'crypto',
    color: '#f59e0b',
    description: 'Cryptocurrency markets, blockchain technology, and DeFi innovations',
    icon: '₿',
    followerCount: 98000,
    thredCount: 1780,
    topContributors: ['CryptoWhale', 'BlockchainDev', 'DeFiAnalyst'],
    weeklyGrowth: 15.2
  },
  {
    id: '5',
    name: 'Sports',
    slug: 'sports',
    color: '#ef4444',
    description: 'Sports news, scores, transfers, and athletic achievements worldwide',
    icon: '⚽',
    followerCount: 112000,
    thredCount: 2030,
    topContributors: ['SportsFan', 'FootballInsider', 'GameAnalyst'],
    weeklyGrowth: 6.8
  },
  {
    id: '6',
    name: 'Global',
    slug: 'global',
    color: '#06b6d4',
    description: 'World news, international affairs, and geopolitical developments',
    icon: '🌍',
    followerCount: 187000,
    thredCount: 3120,
    topContributors: ['WorldReporter', 'GlobalNews', 'DiplomaticSource'],
    weeklyGrowth: 9.4
  },
  {
    id: '7',
    name: 'Finance',
    slug: 'finance',
    color: '#059669',
    description: 'Financial markets, investment insights, and economic analysis',
    icon: '📈',
    followerCount: 134000,
    thredCount: 1450,
    topContributors: ['WallStreetPro', 'InvestmentGuru', 'MarketAnalyst'],
    weeklyGrowth: 11.3
  },
  {
    id: '8',
    name: 'Health',
    slug: 'health',
    color: '#dc2626',
    description: 'Health news, medical breakthroughs, and wellness insights',
    icon: '🏥',
    followerCount: 76000,
    thredCount: 980,
    topContributors: ['HealthExpert', 'MedicalNews', 'WellnessCoach'],
    weeklyGrowth: 7.9
  }
];

export const dummyThreds = [
  {
    id: '1',
    title: 'OpenAI Releases GPT-5 with Revolutionary Reasoning Capabilities',
    slug: 'openai-gpt5-reasoning-breakthrough',
    summary: 'The new model shows unprecedented ability to solve complex problems and understand context like never before, marking a significant leap in AI development.',
    content: `<p>OpenAI has just announced the release of GPT-5, marking a significant leap forward in artificial intelligence capabilities. The new model demonstrates revolutionary reasoning abilities that surpass all previous iterations.</p>

<h2>Key Breakthroughs</h2>
<p>GPT-5 introduces several groundbreaking features including enhanced logical reasoning, improved mathematical problem-solving, and better understanding of complex contexts. Early tests show the model can solve multi-step problems that previously required human intervention.</p>

<h2>Industry Impact</h2>
<p>Tech leaders are calling this release a "game-changer" for the AI industry. The model's ability to reason through complex scenarios could revolutionize everything from scientific research to business strategy.</p>

<h2>What This Means for Developers</h2>
<p>The new API will be available to developers starting next month, with enhanced capabilities for code generation, data analysis, and creative problem-solving.</p>`,
    hub_id: '3',
    hub: dummyHubs[2],
    source: 'TechCrunch',
    author: 'Sarah Chen',
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 minutes ago
    readTime: 4,
    tags: ['AI', 'OpenAI', 'GPT-5', 'Technology', 'Machine Learning'],
    isBreaking: true,
    isTrending: true,
    loopScore: 95,
    saveCount: 2247,
    shareCount: 1892,
    discussCount: 356,
    viewCount: 18934,
    featured_image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    title: 'Nigeria Launches Digital Currency Initiative Worth $2.5 Billion',
    slug: 'nigeria-digital-currency-initiative',
    summary: 'Central Bank of Nigeria announces massive investment in digital infrastructure and blockchain technology to modernize the financial sector.',
    content: `<p>The Central Bank of Nigeria has unveiled an ambitious $2.5 billion digital currency initiative aimed at modernizing the country's financial infrastructure and expanding access to digital financial services.</p>

<h2>Initiative Details</h2>
<p>The program will focus on expanding the eNaira digital currency, improving financial inclusion, and building robust blockchain infrastructure across the nation. This represents one of the largest digital currency investments by an African nation.</p>

<h2>Economic Impact</h2>
<p>Economists predict this initiative could boost Nigeria's GDP by 2-3% over the next five years while significantly reducing transaction costs for businesses and consumers.</p>`,
    hub_id: '2',
    hub: dummyHubs[1],
    source: 'Reuters',
    author: 'Adebayo Ogundimu',
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 minutes ago
    readTime: 5,
    tags: ['Nigeria', 'Digital Currency', 'eNaira', 'Finance', 'Blockchain'],
    isBreaking: false,
    isTrending: true,
    loopScore: 87,
    saveCount: 1634,
    shareCount: 1245,
    discussCount: 189,
    viewCount: 12621,
    featured_image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    title: 'Bitcoin Surges Past $75,000 as Institutional Adoption Accelerates',
    slug: 'bitcoin-75k-institutional-adoption',
    summary: 'Major corporations and pension funds drive Bitcoin to new all-time highs amid growing institutional interest and regulatory clarity.',
    content: `<p>Bitcoin has reached a new milestone, surpassing $75,000 for the first time as institutional adoption continues to accelerate across global markets.</p>

<h2>Market Drivers</h2>
<p>The surge is attributed to increased institutional investment, with several Fortune 500 companies adding Bitcoin to their treasury reserves this quarter. Pension funds and insurance companies are also beginning to allocate portions of their portfolios to cryptocurrency.</p>

<h2>Regulatory Clarity</h2>
<p>Recent regulatory developments in major markets have provided the clarity institutions needed to feel comfortable investing in digital assets.</p>`,
    hub_id: '4',
    hub: dummyHubs[3],
    source: 'CoinDesk',
    author: 'Michael Rodriguez',
    timestamp: new Date(Date.now() - 1000 * 60 * 90).toISOString(), // 1.5 hours ago
    readTime: 3,
    tags: ['Bitcoin', 'Cryptocurrency', 'Institutional', 'Finance', 'Markets'],
    isBreaking: true,
    isTrending: true,
    loopScore: 92,
    saveCount: 3156,
    shareCount: 2834,
    discussCount: 467,
    viewCount: 25456,
    featured_image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '4',
    title: 'Apple Unveils Revolutionary AR Glasses at Surprise Event',
    slug: 'apple-ar-glasses-surprise-event',
    summary: 'Tim Cook introduces Apple Vision Air, lightweight AR glasses that could replace smartphones within a decade.',
    content: `<p>Apple surprised the tech world today with the announcement of Apple Vision Air, ultra-lightweight AR glasses that represent the company's vision for the future of personal computing.</p>

<h2>Product Features</h2>
<p>The glasses weigh just 45 grams and offer all-day battery life, with seamless integration across the Apple ecosystem. The device features advanced eye-tracking, gesture recognition, and spatial computing capabilities.</p>

<h2>Market Implications</h2>
<p>Industry analysts believe this could be the beginning of the end for traditional smartphones, as AR glasses offer a more immersive and hands-free computing experience.</p>`,
    hub_id: '1',
    hub: dummyHubs[0],
    source: 'The Verge',
    author: 'Emma Thompson',
    timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(), // 2 hours ago
    readTime: 6,
    tags: ['Apple', 'AR', 'Technology', 'Innovation', 'Wearables'],
    isBreaking: false,
    isTrending: true,
    loopScore: 89,
    saveCount: 2789,
    shareCount: 2145,
    discussCount: 398,
    viewCount: 19876,
    featured_image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '5',
    title: 'Manchester United Completes Record-Breaking Transfer Deal',
    slug: 'manchester-united-record-transfer',
    summary: 'The Red Devils secure Kylian Mbappé in a €200 million deal that reshapes European football and breaks all previous transfer records.',
    content: `<p>Manchester United has completed the signing of Kylian Mbappé from Paris Saint-Germain in a deal worth €200 million, making it the most expensive transfer in football history.</p>

<h2>Deal Details</h2>
<p>The French superstar has signed a five-year contract with United, with additional performance bonuses that could take the total value to €250 million. The deal includes a significant signing bonus and makes Mbappé the highest-paid player in the Premier League.</p>

<h2>Impact on the League</h2>
<p>This signing is expected to significantly boost the Premier League's global appeal and could trigger a new wave of mega-transfers as clubs compete for top talent.</p>`,
    hub_id: '5',
    hub: dummyHubs[4],
    source: 'ESPN',
    author: 'James Wilson',
    timestamp: new Date(Date.now() - 1000 * 60 * 180).toISOString(), // 3 hours ago
    readTime: 4,
    tags: ['Football', 'Transfer', 'Manchester United', 'Mbappé', 'Premier League'],
    isBreaking: false,
    isTrending: false,
    loopScore: 78,
    saveCount: 1945,
    shareCount: 1723,
    discussCount: 234,
    viewCount: 15789,
    featured_image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '6',
    title: 'Global Climate Summit Reaches Historic Agreement on Carbon Reduction',
    slug: 'climate-summit-carbon-agreement',
    summary: '195 countries commit to ambitious new targets that could limit global warming to 1.5°C, marking a breakthrough in international cooperation.',
    content: `<p>World leaders at the Global Climate Summit have reached a historic agreement on carbon reduction targets, with 195 countries committing to ambitious new goals that scientists say could prevent catastrophic climate change.</p>

<h2>Agreement Highlights</h2>
<p>The deal includes binding commitments to reduce global carbon emissions by 50% by 2030 and achieve net-zero by 2050. Developed nations have also pledged $500 billion in climate finance for developing countries.</p>

<h2>Implementation Challenges</h2>
<p>While the agreement is being hailed as historic, experts warn that implementation will require unprecedented international cooperation and technological innovation.</p>`,
    hub_id: '6',
    hub: dummyHubs[5],
    source: 'BBC News',
    author: 'Dr. Patricia Green',
    timestamp: new Date(Date.now() - 1000 * 60 * 240).toISOString(), // 4 hours ago
    readTime: 7,
    tags: ['Climate', 'Environment', 'Global', 'Politics', 'Sustainability'],
    isBreaking: false,
    isTrending: false,
    loopScore: 85,
    saveCount: 2123,
    shareCount: 1867,
    discussCount: 301,
    viewCount: 17654,
    featured_image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '7',
    title: 'Tesla Announces Breakthrough in Solid-State Battery Technology',
    slug: 'tesla-solid-state-battery-breakthrough',
    summary: 'New battery technology promises 1000-mile range and 5-minute charging, potentially revolutionizing electric vehicle adoption.',
    content: `<p>Tesla has announced a major breakthrough in solid-state battery technology that could revolutionize the electric vehicle industry and accelerate the transition away from fossil fuels.</p>

<h2>Technical Specifications</h2>
<p>The new batteries offer energy density three times higher than current lithium-ion batteries, enabling electric vehicles to travel over 1000 miles on a single charge while reducing charging time to just 5 minutes.</p>

<h2>Market Impact</h2>
<p>This development could eliminate the two main barriers to EV adoption: range anxiety and charging time. Tesla plans to begin production of vehicles with the new batteries in 2026.</p>`,
    hub_id: '1',
    hub: dummyHubs[0],
    source: 'Electrek',
    author: 'Alex Chen',
    timestamp: new Date(Date.now() - 1000 * 60 * 300).toISOString(), // 5 hours ago
    readTime: 5,
    tags: ['Tesla', 'Battery', 'Electric Vehicles', 'Technology', 'Innovation'],
    isBreaking: false,
    isTrending: true,
    loopScore: 83,
    saveCount: 1876,
    shareCount: 1543,
    discussCount: 267,
    viewCount: 14532,
    featured_image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '8',
    title: 'WHO Declares End to Global Health Emergency Status',
    slug: 'who-ends-global-health-emergency',
    summary: 'World Health Organization announces significant milestone in global health recovery, citing improved vaccination rates and treatment protocols.',
    content: `<p>The World Health Organization has officially declared an end to the global health emergency status that has been in place for the past several years, marking a significant milestone in global health recovery.</p>

<h2>Key Factors</h2>
<p>The decision is based on sustained improvements in vaccination rates, effective treatment protocols, and robust healthcare infrastructure in most regions. Global mortality rates have decreased by 90% from peak levels.</p>

<h2>Future Preparedness</h2>
<p>While celebrating this milestone, WHO emphasizes the importance of maintaining vigilance and investing in pandemic preparedness for future health challenges.</p>`,
    hub_id: '8',
    hub: dummyHubs[7],
    source: 'WHO',
    author: 'Dr. Maria Santos',
    timestamp: new Date(Date.now() - 1000 * 60 * 360).toISOString(), // 6 hours ago
    readTime: 4,
    tags: ['Health', 'WHO', 'Global', 'Medicine', 'Public Health'],
    isBreaking: false,
    isTrending: false,
    loopScore: 76,
    saveCount: 1234,
    shareCount: 987,
    discussCount: 156,
    viewCount: 11234,
    featured_image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

// Get trending hubs (sorted by activity and growth)
export const getTrendingHubs = () => {
  return dummyHubs.sort((a, b) => (b.followerCount * b.weeklyGrowth) - (a.followerCount * a.weeklyGrowth));
};

// Get threds by hub
export const getThredsByHub = (hubSlug: string) => {
  const hub = dummyHubs.find(h => h.slug === hubSlug);
  if (!hub) return [];
  return dummyThreds.filter(thred => thred.hub_id === hub.id);
};

// Get trending threds
export const getTrendingThreds = () => {
  return dummyThreds.filter(thred => thred.isTrending).sort((a, b) => b.loopScore - a.loopScore);
};

// Get breaking threds
export const getBreakingThreds = () => {
  return dummyThreds.filter(thred => thred.isBreaking).sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
};

// Search threds
export const searchThreds = (query: string) => {
  const lowercaseQuery = query.toLowerCase();
  return dummyThreds.filter(thred => 
    thred.title.toLowerCase().includes(lowercaseQuery) ||
    thred.summary.toLowerCase().includes(lowercaseQuery) ||
    thred.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    thred.hub?.name.toLowerCase().includes(lowercaseQuery)
  );
};

// Get hub by slug
export const getHubBySlug = (slug: string) => {
  return dummyHubs.find(h => h.slug === slug);
};

// Get thred by slug
export const getThredBySlug = (slug: string) => {
  return dummyThreds.find(t => t.slug === slug);
};

// Function to clear dummy data (call this when connecting to n8n)
export function clearDummyData() {
  console.log('Dummy data cleared - ready for n8n integration');
  // This function can be used to clean up dummy data when switching to real data
}