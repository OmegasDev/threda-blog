// Dummy data for Threda - Real-time news platform
export const dummyHubs = [
  {
    id: '1',
    name: 'Tech',
    slug: 'tech',
    color: '#3b82f6',
    description: 'Latest technology news and innovations',
    icon: '💻',
    followerCount: 12500,
    thredCount: 234
  },
  {
    id: '2',
    name: 'Nigeria',
    slug: 'nigeria',
    color: '#10b981',
    description: 'Nigerian news, politics, and culture',
    icon: '🇳🇬',
    followerCount: 8900,
    thredCount: 156
  },
  {
    id: '3',
    name: 'AI',
    slug: 'ai',
    color: '#8b5cf6',
    description: 'Artificial Intelligence breakthroughs',
    icon: '🤖',
    followerCount: 15600,
    thredCount: 89
  },
  {
    id: '4',
    name: 'Crypto',
    slug: 'crypto',
    color: '#f59e0b',
    description: 'Cryptocurrency and blockchain news',
    icon: '₿',
    followerCount: 9800,
    thredCount: 178
  },
  {
    id: '5',
    name: 'Sports',
    slug: 'sports',
    color: '#ef4444',
    description: 'Sports news and updates',
    icon: '⚽',
    followerCount: 11200,
    thredCount: 203
  },
  {
    id: '6',
    name: 'Global',
    slug: 'global',
    color: '#06b6d4',
    description: 'World news and international affairs',
    icon: '🌍',
    followerCount: 18700,
    thredCount: 312
  }
];

export const dummyThreds = [
  {
    id: '1',
    title: 'OpenAI Releases GPT-5 with Revolutionary Reasoning Capabilities',
    slug: 'openai-gpt5-reasoning-breakthrough',
    summary: 'The new model shows unprecedented ability to solve complex problems and understand context like never before.',
    content: `<p>OpenAI has just announced the release of GPT-5, marking a significant leap forward in artificial intelligence capabilities. The new model demonstrates revolutionary reasoning abilities that surpass all previous iterations.</p>

<h2>Key Breakthroughs</h2>
<p>GPT-5 introduces several groundbreaking features including enhanced logical reasoning, improved mathematical problem-solving, and better understanding of complex contexts. Early tests show the model can solve multi-step problems that previously required human intervention.</p>

<h2>Industry Impact</h2>
<p>Tech leaders are calling this release a "game-changer" for the AI industry. The model's ability to reason through complex scenarios could revolutionize everything from scientific research to business strategy.</p>`,
    hub_id: '3',
    hub: dummyHubs[2],
    source: 'TechCrunch',
    author: 'Sarah Chen',
    timestamp: new Date(Date.now() - 1000 * 60 * 15).toISOString(), // 15 minutes ago
    readTime: 3,
    tags: ['AI', 'OpenAI', 'GPT-5', 'Technology'],
    isBreaking: true,
    isTrending: true,
    loopScore: 95,
    saveCount: 1247,
    shareCount: 892,
    discussCount: 156,
    viewCount: 8934,
    featured_image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '2',
    title: 'Nigeria Launches Digital Currency Initiative Worth $2.5 Billion',
    slug: 'nigeria-digital-currency-initiative',
    summary: 'Central Bank of Nigeria announces massive investment in digital infrastructure and blockchain technology.',
    content: `<p>The Central Bank of Nigeria has unveiled an ambitious $2.5 billion digital currency initiative aimed at modernizing the country's financial infrastructure.</p>

<h2>Initiative Details</h2>
<p>The program will focus on expanding the eNaira digital currency, improving financial inclusion, and building robust blockchain infrastructure across the nation.</p>`,
    hub_id: '2',
    hub: dummyHubs[1],
    source: 'Reuters',
    author: 'Adebayo Ogundimu',
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 minutes ago
    readTime: 4,
    tags: ['Nigeria', 'Digital Currency', 'eNaira', 'Finance'],
    isBreaking: false,
    isTrending: true,
    loopScore: 87,
    saveCount: 634,
    shareCount: 445,
    discussCount: 89,
    viewCount: 5621,
    featured_image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '3',
    title: 'Bitcoin Surges Past $75,000 as Institutional Adoption Accelerates',
    slug: 'bitcoin-75k-institutional-adoption',
    summary: 'Major corporations and pension funds drive Bitcoin to new all-time highs amid growing institutional interest.',
    content: `<p>Bitcoin has reached a new milestone, surpassing $75,000 for the first time as institutional adoption continues to accelerate across global markets.</p>

<h2>Market Drivers</h2>
<p>The surge is attributed to increased institutional investment, with several Fortune 500 companies adding Bitcoin to their treasury reserves this quarter.</p>`,
    hub_id: '4',
    hub: dummyHubs[3],
    source: 'CoinDesk',
    author: 'Michael Rodriguez',
    timestamp: new Date(Date.now() - 1000 * 60 * 90).toISOString(), // 1.5 hours ago
    readTime: 2,
    tags: ['Bitcoin', 'Cryptocurrency', 'Institutional', 'Finance'],
    isBreaking: true,
    isTrending: true,
    loopScore: 92,
    saveCount: 2156,
    shareCount: 1834,
    discussCount: 267,
    viewCount: 12456,
    featured_image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '4',
    title: 'Apple Unveils Revolutionary AR Glasses at Surprise Event',
    slug: 'apple-ar-glasses-surprise-event',
    summary: 'Tim Cook introduces Apple Vision Air, lightweight AR glasses that could replace smartphones within a decade.',
    content: `<p>Apple surprised the tech world today with the announcement of Apple Vision Air, ultra-lightweight AR glasses that represent the company's vision for the future of personal computing.</p>

<h2>Product Features</h2>
<p>The glasses weigh just 45 grams and offer all-day battery life, with seamless integration across the Apple ecosystem.</p>`,
    hub_id: '1',
    hub: dummyHubs[0],
    source: 'The Verge',
    author: 'Emma Thompson',
    timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(), // 2 hours ago
    readTime: 5,
    tags: ['Apple', 'AR', 'Technology', 'Innovation'],
    isBreaking: false,
    isTrending: true,
    loopScore: 89,
    saveCount: 1789,
    shareCount: 1245,
    discussCount: 198,
    viewCount: 9876,
    featured_image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '5',
    title: 'Manchester United Completes Record-Breaking Transfer Deal',
    slug: 'manchester-united-record-transfer',
    summary: 'The Red Devils secure Kylian Mbappé in a €200 million deal that reshapes European football.',
    content: `<p>Manchester United has completed the signing of Kylian Mbappé from Paris Saint-Germain in a deal worth €200 million, making it the most expensive transfer in football history.</p>

<h2>Deal Details</h2>
<p>The French superstar has signed a five-year contract with United, with additional performance bonuses that could take the total value to €250 million.</p>`,
    hub_id: '5',
    hub: dummyHubs[4],
    source: 'ESPN',
    author: 'James Wilson',
    timestamp: new Date(Date.now() - 1000 * 60 * 180).toISOString(), // 3 hours ago
    readTime: 3,
    tags: ['Football', 'Transfer', 'Manchester United', 'Mbappé'],
    isBreaking: false,
    isTrending: false,
    loopScore: 78,
    saveCount: 945,
    shareCount: 723,
    discussCount: 134,
    viewCount: 6789,
    featured_image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: '6',
    title: 'Global Climate Summit Reaches Historic Agreement on Carbon Reduction',
    slug: 'climate-summit-carbon-agreement',
    summary: '195 countries commit to ambitious new targets that could limit global warming to 1.5°C.',
    content: `<p>World leaders at the Global Climate Summit have reached a historic agreement on carbon reduction targets, with 195 countries committing to ambitious new goals.</p>

<h2>Agreement Highlights</h2>
<p>The deal includes binding commitments to reduce global carbon emissions by 50% by 2030 and achieve net-zero by 2050.</p>`,
    hub_id: '6',
    hub: dummyHubs[5],
    source: 'BBC News',
    author: 'Dr. Patricia Green',
    timestamp: new Date(Date.now() - 1000 * 60 * 240).toISOString(), // 4 hours ago
    readTime: 6,
    tags: ['Climate', 'Environment', 'Global', 'Politics'],
    isBreaking: false,
    isTrending: false,
    loopScore: 85,
    saveCount: 1123,
    shareCount: 867,
    discussCount: 201,
    viewCount: 7654,
    featured_image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  }
];

// Get trending hubs (sorted by activity)
export const getTrendingHubs = () => {
  return dummyHubs.sort((a, b) => b.followerCount - a.followerCount).slice(0, 6);
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
    thred.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

// Function to clear dummy data (call this when connecting to n8n)
export function clearDummyData() {
  console.log('Dummy data cleared - ready for n8n integration');
  // This function can be used to clean up dummy data when switching to real data
}