// Dummy data for testing - remove when connecting to n8n workflow
export const dummyCategories = [
  {
    id: '1',
    name: 'Technology',
    slug: 'technology',
    color: '#3b82f6',
    description: 'Latest tech innovations and digital trends'
  },
  {
    id: '2',
    name: 'Business',
    slug: 'business',
    color: '#10b981',
    description: 'Market insights and business strategies'
  },
  {
    id: '3',
    name: 'Lifestyle',
    slug: 'lifestyle',
    color: '#f59e0b',
    description: 'Health, wellness, and modern living'
  },
  {
    id: '4',
    name: 'Finance',
    slug: 'finance',
    color: '#8b5cf6',
    description: 'Investment tips and financial news'
  },
  {
    id: '5',
    name: 'Innovation',
    slug: 'innovation',
    color: '#ef4444',
    description: 'Breakthrough discoveries and future trends'
  }
];

export const dummyPosts = [
  {
    id: '1',
    title: 'The Future of Artificial Intelligence in Everyday Life',
    slug: 'future-ai-everyday-life',
    content: `<p>Artificial Intelligence is rapidly transforming how we interact with technology in our daily lives. From smart home assistants to personalized recommendations, AI has become an invisible yet powerful force shaping our experiences.</p>

<h2>The Current State of AI Integration</h2>
<p>Today's AI applications span across multiple domains, revolutionizing industries and personal experiences alike. Smart phones now anticipate our needs, cars are learning to drive themselves, and our homes are becoming increasingly intelligent.</p>

<h2>What's Coming Next</h2>
<p>The next wave of AI innovation promises even more seamless integration into our daily routines. We're looking at AI that can understand context better, make more nuanced decisions, and provide truly personalized experiences.</p>

<h2>Preparing for an AI-Driven Future</h2>
<p>As AI becomes more prevalent, it's crucial to understand both its potential and limitations. The key is finding the right balance between automation and human control, ensuring that technology serves to enhance rather than replace human capabilities.</p>`,
    excerpt: 'Exploring how artificial intelligence is reshaping our daily experiences and what the future holds for human-AI interaction.',
    category_id: '1',
    category: dummyCategories[0],
    featured_image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    published: true,
    seo_title: 'The Future of AI in Everyday Life - Threda',
    seo_description: 'Discover how artificial intelligence is transforming daily life and what innovations await us in the near future.',
    created_at: '2024-12-27T10:00:00Z',
    updated_at: '2024-12-27T10:00:00Z',
    view_count: 1247,
    trending_score: 85
  },
  {
    id: '2',
    title: 'Sustainable Business Practices That Actually Increase Profits',
    slug: 'sustainable-business-practices-profits',
    content: `<p>The myth that sustainability comes at the cost of profitability is being shattered by forward-thinking companies worldwide. Modern businesses are discovering that environmental responsibility and financial success go hand in hand.</p>

<h2>The Economics of Sustainability</h2>
<p>Sustainable practices often lead to significant cost savings through improved efficiency, reduced waste, and lower resource consumption. Companies implementing green initiatives report average cost reductions of 15-25% within the first year.</p>

<h2>Consumer Demand Driving Change</h2>
<p>Today's consumers increasingly prefer brands that align with their values. Studies show that 73% of millennials are willing to pay more for sustainable products, creating a clear market advantage for environmentally conscious businesses.</p>

<h2>Long-term Strategic Benefits</h2>
<p>Beyond immediate cost savings, sustainable practices position companies for long-term success by future-proofing against regulatory changes, attracting top talent, and building stronger stakeholder relationships.</p>`,
    excerpt: 'How modern companies are proving that environmental responsibility and profitability can coexist and thrive together.',
    category_id: '2',
    category: dummyCategories[1],
    featured_image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    published: true,
    seo_title: 'Sustainable Business Practices for Profit - Threda',
    seo_description: 'Learn how sustainable business practices can boost your bottom line while helping the environment.',
    created_at: '2024-12-26T14:30:00Z',
    updated_at: '2024-12-26T14:30:00Z',
    view_count: 892,
    trending_score: 72
  },
  {
    id: '3',
    title: 'The Psychology of Minimalist Living: Less is More',
    slug: 'psychology-minimalist-living',
    content: `<p>Minimalism isn't just about having fewer possessions—it's a mindset that can transform your relationship with material goods and, ultimately, your overall well-being. The psychological benefits of minimalist living extend far beyond a tidy home.</p>

<h2>Mental Clarity Through Physical Simplicity</h2>
<p>Research shows that cluttered environments can increase cortisol levels and reduce focus. By simplifying our physical spaces, we create mental space for what truly matters, leading to improved concentration and reduced anxiety.</p>

<h2>The Freedom of Fewer Choices</h2>
<p>Paradoxically, having fewer options can lead to greater satisfaction. The "paradox of choice" suggests that too many options can overwhelm us, while a curated selection of meaningful possessions can enhance our daily experience.</p>

<h2>Building Intentional Habits</h2>
<p>Minimalism encourages mindful consumption and intentional living. This shift in perspective often leads to better financial health, stronger relationships, and a clearer sense of personal values and priorities.</p>`,
    excerpt: 'Discover the psychological benefits of minimalist living and how simplifying your life can lead to greater happiness and fulfillment.',
    category_id: '3',
    category: dummyCategories[2],
    featured_image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    published: true,
    seo_title: 'Psychology of Minimalist Living - Threda',
    seo_description: 'Explore how minimalist living can improve your mental health and overall life satisfaction.',
    created_at: '2024-12-25T09:15:00Z',
    updated_at: '2024-12-25T09:15:00Z',
    view_count: 1156,
    trending_score: 68
  },
  {
    id: '4',
    title: 'Cryptocurrency Market Trends: What Investors Need to Know',
    slug: 'cryptocurrency-market-trends-2024',
    content: `<p>The cryptocurrency landscape continues to evolve rapidly, with new developments shaping the future of digital finance. Understanding current trends is crucial for both seasoned investors and newcomers to the crypto space.</p>

<h2>Institutional Adoption Accelerates</h2>
<p>Major corporations and financial institutions are increasingly embracing cryptocurrency, with many adding Bitcoin and other digital assets to their balance sheets. This institutional adoption is providing stability and legitimacy to the market.</p>

<h2>Regulatory Clarity Emerges</h2>
<p>Governments worldwide are developing clearer regulatory frameworks for cryptocurrency, reducing uncertainty and paving the way for broader adoption. This regulatory clarity is essential for long-term market growth.</p>

<h2>Innovation in DeFi and NFTs</h2>
<p>Decentralized Finance (DeFi) and Non-Fungible Tokens (NFTs) continue to drive innovation in the crypto space, creating new opportunities for investors and developers alike. These technologies are expanding the utility and application of blockchain technology.</p>`,
    excerpt: 'Stay informed about the latest cryptocurrency market trends and what they mean for investors in 2024 and beyond.',
    category_id: '4',
    category: dummyCategories[3],
    featured_image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    published: true,
    seo_title: 'Cryptocurrency Market Trends 2024 - Threda',
    seo_description: 'Get insights into the latest cryptocurrency market trends and investment opportunities.',
    created_at: '2024-12-24T16:45:00Z',
    updated_at: '2024-12-24T16:45:00Z',
    view_count: 2103,
    trending_score: 91
  },
  {
    id: '5',
    title: 'Revolutionary Breakthrough in Quantum Computing',
    slug: 'quantum-computing-breakthrough',
    content: `<p>Scientists have achieved a major milestone in quantum computing that could revolutionize how we process information and solve complex problems. This breakthrough brings us closer to practical quantum applications in various fields.</p>

<h2>The Technical Achievement</h2>
<p>Researchers have successfully demonstrated quantum error correction at scale, a critical step toward building fault-tolerant quantum computers. This advancement addresses one of the biggest challenges in quantum computing: maintaining quantum states long enough to perform useful calculations.</p>

<h2>Real-World Applications</h2>
<p>The implications of this breakthrough extend across multiple industries, from drug discovery and financial modeling to cryptography and artificial intelligence. Quantum computers could solve problems that are currently impossible for classical computers.</p>

<h2>Timeline for Commercial Adoption</h2>
<p>While still in early stages, experts predict that practical quantum computing applications could emerge within the next 5-10 years. Companies and researchers are already preparing for this quantum revolution.</p>`,
    excerpt: 'A groundbreaking advancement in quantum computing brings us closer to solving some of humanity\'s most complex challenges.',
    category_id: '5',
    category: dummyCategories[4],
    featured_image: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    published: true,
    seo_title: 'Quantum Computing Breakthrough - Threda',
    seo_description: 'Learn about the latest quantum computing breakthrough and its potential impact on technology.',
    created_at: '2024-12-23T11:20:00Z',
    updated_at: '2024-12-23T11:20:00Z',
    view_count: 1789,
    trending_score: 94
  },
  {
    id: '6',
    title: 'The Rise of Remote Work: Reshaping Corporate Culture',
    slug: 'remote-work-corporate-culture',
    content: `<p>The shift to remote work has fundamentally changed how companies operate and how employees engage with their work. This transformation is creating new opportunities and challenges for organizations worldwide.</p>

<h2>Productivity in the Digital Age</h2>
<p>Contrary to initial concerns, many companies report increased productivity among remote workers. The key lies in implementing the right tools, processes, and management approaches that support distributed teams.</p>

<h2>Building Culture Without Walls</h2>
<p>Creating a strong company culture in a remote environment requires intentional effort and new strategies. Successful companies are finding innovative ways to maintain connection, collaboration, and shared values across distances.</p>

<h2>The Future of Hybrid Work</h2>
<p>As we move forward, hybrid work models are emerging as the preferred approach for many organizations, combining the benefits of remote flexibility with in-person collaboration when needed.</p>`,
    excerpt: 'How remote work is transforming corporate culture and what it means for the future of employment.',
    category_id: '2',
    category: dummyCategories[1],
    featured_image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    published: true,
    seo_title: 'Remote Work Corporate Culture - Threda',
    seo_description: 'Explore how remote work is reshaping corporate culture and the future of employment.',
    created_at: '2024-12-22T13:10:00Z',
    updated_at: '2024-12-22T13:10:00Z',
    view_count: 945,
    trending_score: 61
  }
];

// Function to clear dummy data (call this when connecting to n8n)
export function clearDummyData() {
  console.log('Dummy data cleared - ready for n8n integration');
  // This function can be used to clean up dummy data when switching to real data
}