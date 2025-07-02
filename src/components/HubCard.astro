---
import { formatDistanceToNow } from 'date-fns';

export interface Props {
  hub: any;
  showFollowButton?: boolean;
}

const { hub, showFollowButton = false } = Astro.props;
---

<div class="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-primary-200 dark:hover:border-primary-600 transition-all duration-300 hover:shadow-lg group">
  <!-- Hub Header -->
  <div class="flex items-start space-x-4 mb-4">
    <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={`background: linear-gradient(135deg, ${hub.category === 'Tech' ? '#3b82f6' : hub.category === 'Crypto' ? '#f59e0b' : hub.category === 'Finance' ? '#10b981' : hub.category === 'Politics' ? '#ef4444' : '#8b5cf6'}20, ${hub.category === 'Tech' ? '#3b82f6' : hub.category === 'Crypto' ? '#f59e0b' : hub.category === 'Finance' ? '#10b981' : hub.category === 'Politics' ? '#ef4444' : '#8b5cf6'}40)`}>
      {hub.category === 'Tech' ? '💻' : hub.category === 'Crypto' ? '₿' : hub.category === 'Finance' ? '📈' : hub.category === 'Politics' ? '🏛️' : hub.category === 'Business' ? '💼' : '🌟'}
    </div>
    <div class="flex-1 min-w-0">
      <h3 class="font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors truncate">
        {hub.name}
      </h3>
      <p class="text-sm text-slate-500 dark:text-slate-400">
        {hub.category} • {hub.follower_count.toLocaleString()} followers
      </p>
    </div>
  </div>

  <!-- Hub Description -->
  <p class="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">
    {hub.description}
  </p>

  <!-- Hub Stats -->
  <div class="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-4">
    <div class="flex items-center space-x-4">
      <span>{hub.post_count} threds</span>
      <span>{hub.total_views.toLocaleString()} views</span>
    </div>
    <span>Created {formatDistanceToNow(new Date(hub.created_at), { addSuffix: true })}</span>
  </div>

  <!-- Action Buttons -->
  <div class="flex items-center justify-between">
    <a 
      href={`/hub/${hub.slug}`}
      class="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors"
    >
      View Hub →
    </a>
    
    {showFollowButton && (
      <button 
        class="px-3 py-1.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors"
        onclick={`followHub('${hub.id}')`}
      >
        Follow
      </button>
    )}
  </div>
</div>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>