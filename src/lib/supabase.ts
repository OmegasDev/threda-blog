import { createClient } from '@supabase/supabase-js'

// Use the correct environment variables for Astro
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 
                   import.meta.env.PUBLIC_SUPABASE_URL

const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 
                       import.meta.env.PUBLIC_SUPABASE_ANON_KEY

// Validate environment variables
if (!supabaseUrl) {
  throw new Error('Missing Supabase URL. Please set VITE_SUPABASE_URL or PUBLIC_SUPABASE_ANON_KEY in your .env file')
}

if (!supabaseAnonKey) {
  throw new Error('Missing Supabase anonymous key. Please set VITE_SUPABASE_ANON_KEY or PUBLIC_SUPABASE_ANON_KEY in your .env file')
}

// Clean the URL - remove any whitespace, quotes, and trailing slashes
const cleanUrl = supabaseUrl.trim().replace(/^["']|["']$/g, '').replace(/\/$/, '')

// Validate URL format with better error handling
let validatedUrl: string
try {
  const urlObj = new URL(cleanUrl)
  validatedUrl = urlObj.toString()
} catch (error) {
  console.error('Supabase URL validation failed:', {
    originalUrl: supabaseUrl,
    cleanedUrl: cleanUrl,
    error: error instanceof Error ? error.message : 'Unknown error'
  })
  throw new Error(`Invalid Supabase URL format: "${cleanUrl}". Please ensure it's a valid URL starting with https://`)
}

// Additional check for Supabase-specific URL format
if (!validatedUrl.includes('.supabase.co')) {
  console.warn('Warning: URL does not appear to be a standard Supabase URL:', validatedUrl)
}

export const supabase = createClient(validatedUrl, supabaseAnonKey)

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