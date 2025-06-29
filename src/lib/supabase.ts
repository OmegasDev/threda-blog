import { createClient } from '@supabase/supabase-js'

// Get environment variables with proper fallbacks
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 
                   import.meta.env.PUBLIC_SUPABASE_URL ||
                   ''

const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 
                       import.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
                       ''

// Validate environment variables with better error messages
if (!supabaseUrl || supabaseUrl.trim() === '') {
  console.error('Supabase URL is missing or empty. Available env vars:', {
    VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
    PUBLIC_SUPABASE_URL: import.meta.env.PUBLIC_SUPABASE_URL
  })
  throw new Error('Missing Supabase URL. Please set VITE_SUPABASE_URL or PUBLIC_SUPABASE_URL in your .env file')
}

if (!supabaseAnonKey || supabaseAnonKey.trim() === '') {
  console.error('Supabase anonymous key is missing or empty. Available env vars:', {
    VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
    PUBLIC_SUPABASE_ANON_KEY: import.meta.env.PUBLIC_SUPABASE_ANON_KEY
  })
  throw new Error('Missing Supabase anonymous key. Please set VITE_SUPABASE_ANON_KEY or PUBLIC_SUPABASE_ANON_KEY in your .env file')
}

// Validate URL format with better error handling
try {
  // Only validate if we're in a browser environment or if the URL is not empty
  if (typeof window !== 'undefined' || supabaseUrl) {
    new URL(supabaseUrl)
  }
} catch (error) {
  console.error('Invalid Supabase URL format:', supabaseUrl, 'Error:', error)
  throw new Error(`Invalid Supabase URL format: ${supabaseUrl}. Please ensure it's a valid URL (e.g., https://your-project-id.supabase.co)`)
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