import { createClient } from '@supabase/supabase-js'

// Get environment variables with proper fallbacks
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 
                   import.meta.env.PUBLIC_SUPABASE_URL ||
                   ''

const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 
                       import.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
                       ''

// Validate environment variables exist
if (!supabaseUrl || supabaseUrl.trim() === '') {
  throw new Error('Missing Supabase URL. Please set VITE_SUPABASE_URL or PUBLIC_SUPABASE_URL in your .env file')
}

if (!supabaseAnonKey || supabaseAnonKey.trim() === '') {
  throw new Error('Missing Supabase anonymous key. Please set VITE_SUPABASE_ANON_KEY or PUBLIC_SUPABASE_ANON_KEY in your .env file')
}

// Basic URL format validation (less strict)
if (!supabaseUrl.startsWith('https://') || !supabaseUrl.includes('.supabase.co')) {
  throw new Error(`Invalid Supabase URL format: ${supabaseUrl}. Please ensure it follows the format: https://your-project-id.supabase.co`)
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Post = {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  category_id: string
  category?: Category
  featured_image?: string
  published: boolean
  seo_title?: string
  seo_description?: string
  created_at: string
  updated_at: string
  view_count: number
  trending_score: number
}

export type Category = {
  id: string
  name: string
  slug: string
  color: string
  description?: string
  created_at: string
}

export type AdPlacement = {
  id: string
  position: string
  content: string
  active: boolean
  created_at: string
}