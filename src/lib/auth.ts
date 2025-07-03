import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type User = {
  id: string
  email?: string
  user_metadata?: {
    username?: string
    display_name?: string
    avatar_url?: string
  }
}

export type UserProfile = {
  id: string
  username: string
  display_name: string
  avatar_url?: string
  bio?: string
  created_at: string
  updated_at: string
}

export type UserHub = {
  id: string
  name: string
  slug: string
  description: string
  category: string
  profile_image?: string
  banner_image?: string
  is_public: boolean
  created_by: string
  follower_count: number
  post_count: number
  total_views: number
  created_at: string
  updated_at: string
  user_profiles?: UserProfile
  is_following?: boolean
}

export type HubThred = {
  id: string
  hub_id: string
  title: string
  content: string
  source_url?: string
  featured_image?: string
  created_by: string
  view_count: number
  thred_count: number
  created_at: string
  user_profiles?: UserProfile
  user_hubs?: UserHub
}

export type ThredResponse = {
  id: string
  hub_thred_id: string
  user_id: string
  content: string
  created_at: string
  user_profiles?: UserProfile
}

// Auth functions with error handling
export async function signUp(email: string, password: string, username: string, displayName: string) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
          display_name: displayName
        }
      }
    })
    
    if (data.user && !error) {
      // Create user profile
      await supabase.from('user_profiles').insert({
        id: data.user.id,
        username,
        display_name: displayName
      })
    }
    
    return { data, error }
  } catch (error) {
    console.error('Sign up error:', error)
    return { data: null, error }
  }
}

export async function signIn(email: string, password: string) {
  try {
    return await supabase.auth.signInWithPassword({ email, password })
  } catch (error) {
    console.error('Sign in error:', error)
    return { data: null, error }
  }
}

export async function signOut() {
  try {
    return await supabase.auth.signOut()
  } catch (error) {
    console.error('Sign out error:', error)
    return { error }
  }
}

export async function getCurrentUser() {
  try {
    const { data: { user } } = await supabase.auth.getUser()
    return user
  } catch (error) {
    console.error('Get current user error:', error)
    return null
  }
}

export async function getUserProfile(userId: string): Promise<UserProfile | null> {
  try {
    const { data } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .single()
    
    return data
  } catch (error) {
    console.error('Get user profile error:', error)
    return null
  }
}

// Hub functions with error handling
export async function createHub(hubData: {
  name: string
  slug: string
  description: string
  category: string
  profile_image?: string
  banner_image?: string
  is_public: boolean
}) {
  try {
    const user = await getCurrentUser()
    if (!user) throw new Error('Not authenticated')
    
    return await supabase.from('user_hubs').insert({
      ...hubData,
      created_by: user.id
    })
  } catch (error) {
    console.error('Create hub error:', error)
    return { error }
  }
}

export async function getHubBySlug(slug: string): Promise<UserHub | null> {
  try {
    const { data } = await supabase
      .from('user_hubs')
      .select(`
        *,
        user_profiles (*)
      `)
      .eq('slug', slug)
      .single()
    
    return data
  } catch (error) {
    console.error('Get hub by slug error:', error)
    return null
  }
}

export async function getUserHubs(limit = 10): Promise<UserHub[]> {
  try {
    const { data } = await supabase
      .from('user_hubs')
      .select(`
        *,
        user_profiles (*)
      `)
      .eq('is_public', true)
      .order('follower_count', { ascending: false })
      .limit(limit)
    
    return data || []
  } catch (error) {
    console.error('Get user hubs error:', error)
    return []
  }
}

export async function followHub(hubId: string) {
  try {
    const user = await getCurrentUser()
    if (!user) throw new Error('Not authenticated')
    
    return await supabase.from('hub_followers').insert({
      hub_id: hubId,
      user_id: user.id
    })
  } catch (error) {
    console.error('Follow hub error:', error)
    return { error }
  }
}

export async function unfollowHub(hubId: string) {
  try {
    const user = await getCurrentUser()
    if (!user) throw new Error('Not authenticated')
    
    return await supabase
      .from('hub_followers')
      .delete()
      .eq('hub_id', hubId)
      .eq('user_id', user.id)
  } catch (error) {
    console.error('Unfollow hub error:', error)
    return { error }
  }
}

export async function isFollowingHub(hubId: string): Promise<boolean> {
  try {
    const user = await getCurrentUser()
    if (!user) return false
    
    const { data } = await supabase
      .from('hub_followers')
      .select('id')
      .eq('hub_id', hubId)
      .eq('user_id', user.id)
      .single()
    
    return !!data
  } catch (error) {
    console.error('Is following hub error:', error)
    return false
  }
}

export async function getHubThreds(hubId: string): Promise<HubThred[]> {
  try {
    const { data } = await supabase
      .from('hub_threds')
      .select(`
        *,
        user_profiles (*),
        user_hubs (*)
      `)
      .eq('hub_id', hubId)
      .order('created_at', { ascending: false })
    
    return data || []
  } catch (error) {
    console.error('Get hub threds error:', error)
    return []
  }
}

export async function createHubThred(thredData: {
  hub_id: string
  title: string
  content: string
  source_url?: string
  featured_image?: string
}) {
  try {
    const user = await getCurrentUser()
    if (!user) throw new Error('Not authenticated')
    
    return await supabase.from('hub_threds').insert({
      ...thredData,
      created_by: user.id
    })
  } catch (error) {
    console.error('Create hub thred error:', error)
    return { error }
  }
}

export async function getThredResponses(thredId: string): Promise<ThredResponse[]> {
  try {
    const { data } = await supabase
      .from('thred_responses')
      .select(`
        *,
        user_profiles (*)
      `)
      .eq('hub_thred_id', thredId)
      .order('created_at', { ascending: true })
    
    return data || []
  } catch (error) {
    console.error('Get thred responses error:', error)
    return []
  }
}

export async function createThredResponse(responseData: {
  hub_thred_id: string
  content: string
}) {
  try {
    const user = await getCurrentUser()
    if (!user) throw new Error('Not authenticated')
    
    return await supabase.from('thred_responses').insert({
      ...responseData,
      user_id: user.id
    })
  } catch (error) {
    console.error('Create thred response error:', error)
    return { error }
  }
}

export async function getHubStats(hubId: string) {
  try {
    const user = await getCurrentUser()
    if (!user) throw new Error('Not authenticated')
    
    // Get hub details
    const { data: hub } = await supabase
      .from('user_hubs')
      .select('*')
      .eq('id', hubId)
      .eq('created_by', user.id)
      .single()
    
    if (!hub) throw new Error('Hub not found or not owned by user')
    
    // Get recent threds
    const { data: recentThreds } = await supabase
      .from('hub_threds')
      .select('view_count, created_at')
      .eq('hub_id', hubId)
      .order('created_at', { ascending: false })
      .limit(30)
    
    // Calculate engagement stats
    const totalViews = recentThreds?.reduce((sum, thred) => sum + thred.view_count, 0) || 0
    const avgViews = recentThreds?.length ? Math.round(totalViews / recentThreds.length) : 0
    
    return {
      hub,
      totalViews,
      avgViews,
      recentThreds: recentThreds?.length || 0
    }
  } catch (error) {
    console.error('Get hub stats error:', error)
    return null
  }
}