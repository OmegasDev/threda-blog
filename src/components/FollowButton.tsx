import React, { useState, useEffect } from 'react';
import { followHub, unfollowHub, isFollowingHub, getCurrentUser } from '../lib/auth';

interface FollowButtonProps {
  hubId: string;
  initialFollowing?: boolean;
  onFollowChange?: (isFollowing: boolean) => void;
}

export default function FollowButton({ hubId, initialFollowing = false, onFollowChange }: FollowButtonProps) {
  const [isFollowing, setIsFollowing] = useState(initialFollowing);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getCurrentUser().then(setUser);
    if (user) {
      isFollowingHub(hubId).then(setIsFollowing);
    }
  }, [hubId, user]);

  const handleToggleFollow = async () => {
    if (!user) {
      alert('Please sign in to follow hubs');
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
      console.error('Error toggling follow:', error);
      alert('Failed to update follow status');
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <button
        onClick={() => alert('Please sign in to follow hubs')}
        className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
      >
        Follow
      </button>
    );
  }

  return (
    <button
      onClick={handleToggleFollow}
      disabled={loading}
      className={`px-4 py-2 font-medium rounded-lg transition-colors ${
        isFollowing
          ? 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600'
          : 'bg-primary-600 hover:bg-primary-700 text-white'
      }`}
    >
      {loading ? 'Loading...' : isFollowing ? 'Following' : 'Follow'}
    </button>
  );
}