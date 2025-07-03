import React, { useState, useEffect } from 'react';
import { User, LogOut, Settings, Plus } from 'lucide-react';
import { getCurrentUser, signOut, type User as UserType } from '../lib/auth';
import AuthModal from './AuthModal';

export default function UserMenu() {
  const [user, setUser] = useState<UserType | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        setUser(currentUser);
      } catch (error) {
        console.error('Error loading user:', error);
        setUser(null);
      }
    };
    
    loadUser();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
      setShowMenu(false);
      window.location.reload();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (!user) {
    return (
      <>
        <button
          onClick={() => {
            setAuthMode('signin');
            setShowAuthModal(true);
          }}
          className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
        >
          Sign In
        </button>
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
          mode={authMode}
          onModeChange={setAuthMode}
        />
      </>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="flex items-center space-x-2 p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
      >
        <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
          <span className="text-white font-medium text-sm">
            {user.user_metadata?.display_name?.charAt(0) || user.email?.charAt(0) || 'U'}
          </span>
        </div>
        <span className="hidden md:block text-sm font-medium text-slate-700 dark:text-slate-300">
          {user.user_metadata?.display_name || user.email}
        </span>
      </button>

      {showMenu && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 py-2 z-50">
          <a
            href="/create-hub"
            className="flex items-center space-x-2 px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Create Hub</span>
          </a>
          <a
            href="/dashboard/hub"
            className="flex items-center space-x-2 px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <Settings className="w-4 h-4" />
            <span>Dashboard</span>
          </a>
          <button
            onClick={handleSignOut}
            className="flex items-center space-x-2 w-full px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      )}
    </div>
  );
}