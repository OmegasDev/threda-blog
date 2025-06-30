import { createClient } from '@supabase/supabase-js'

// Get environment variables with proper fallbacks
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 
                   import.meta.env.PUBLIC_SUPABASE_URL ||
                   ''

const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 
                       import.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
                       ''

// For development, use dummy data if Supabase is not configured
const isDevelopment = !supabaseUrl || !supabaseAnonKey || 
                     supabaseUrl.includes('your-project-id') || 
                     supabaseAnonKey.includes('your-anon-key');

let supabase: any = null;

if (!isDevelopment) {
  try {
    // Validate URL format only if not in development mode
    const url = new URL(supabaseUrl.trim());
    if (url.protocol !== 'https:') {
      throw new Error(`Supabase URL must use HTTPS protocol. Got: ${url.protocol}`);
    }
    
    supabase = createClient(supabaseUrl.trim(), supabaseAnonKey.trim());
  } catch (error) {
    console.warn('Supabase configuration error:', error);
    console.warn('Falling back to dummy data mode');
  }
}

// Export a mock supabase client for development
export { supabase };

export type Post = {
  id: string
  title: string
  slug: string
  content: string
  excerpt: string
  category_id: string
  categories?: Category
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