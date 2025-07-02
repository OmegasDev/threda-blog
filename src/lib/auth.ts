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

// Auth functions
export async function signUp(email: string, password: string, username: string, displayName: string) {
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
}

export async function signIn(email: string, password: string) {
  return await supabase.auth.signInWithPassword({ email, password })
}

export async function signOut() {
  return await supabase.auth.signOut()
}

export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser()
  return user
}

export async function getUserProfile(userId: string): Promise<UserProfile | null> {
  const { data } = await supabase
    .from('user_profiles')
    .select('*')
    .eq('id', userId)
    .single()
  
  return data
}

// Hub functions
export async function createHub(hubData: {
  name: string
  slug: string
  description: string
  category: string
  profile_image?: string
  banner_image?: string
  is_public: boolean
}) {
  const user = await getCurrentUser()
  if (!user) throw new Error('Not authenticated')
  
  return await supabase.from('user_hubs').insert({
    ...hubData,
    created_by: user.id
  })
}

export async function getHubBySlug(slug: string): Promise<UserHub | null> {
  const { data } = await supabase
    .from('user_hubs')
    .select(`
      *,
      user_profiles (*)
    `)
    .eq('slug', slug)
    .single()
  
  return data
}

export async function getUserHubs(limit = 10): Promise<UserHub[]> {
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
}

export async function followHub(hubId: string) {
  const user = await getCurrentUser()
  if (!user) throw new Error('Not authenticated')
  
  return await supabase.from('hub_followers').insert({
    hub_id: hubId,
    user_id: user.id
  })
}

export async function unfollowHub(hubId: string) {
  const user = await getCurrentUser()
  if (!user) throw new Error('Not authenticated')
  
  return await supabase
    .from('hub_followers')
    .delete()
    .eq('hub_id', hubId)
    .eq('user_id', user.id)
}

export async function isFollowingHub(hubId: string): Promise<boolean> {
  const user = await getCurrentUser()
  if (!user) return false
  
  const { data } = await supabase
    .from('hub_followers')
    .select('id')
    .eq('hub_id', hubId)
    .eq('user_id', user.id)
    .single()
  
  return !!data
}

export async function getHubThreds(hubId: string): Promise<HubThred[]> {
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
}

export async function createHubThred(thredData: {
  hub_id: string
  title: string
  content: string
  source_url?: string
  featured_image?: string
}) {
  const user = await getCurrentUser()
  if (!user) throw new Error('Not authenticated')
  
  return await supabase.from('hub_threds').insert({
    ...thredData,
    created_by: user.id
  })
}

export async function getThredResponses(thredId: string): Promise<ThredResponse[]> {
  const { data } = await supabase
    .from('thred_responses')
    .select(`
      *,
      user_profiles (*)
    `)
    .eq('hub_thred_id', thredId)
    .order('created_at', { ascending: true })
  
  return data || []
}

export async function createThredResponse(responseData: {
  hub_thred_id: string
  content: string
}) {
  const user = await getCurrentUser()
  if (!user) throw new Error('Not authenticated')
  
  return await supabase.from('thred_responses').insert({
    ...responseData,
    user_id: user.id
  })
}

export async function getHubStats(hubId: string) {
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
}