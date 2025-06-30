import { createClient } from '@supabase/supabase-js'

// Get environment variables with proper fallbacks
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 
                   import.meta.env.PUBLIC_SUPABASE_URL ||
                   ''

const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 
                       import.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
                       ''

// Simple URL validation without using URL constructor
function isValidSupabaseUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  
  const trimmedUrl = url.trim();
  
  // Basic format check
  return trimmedUrl.startsWith('https://') && 
         trimmedUrl.includes('.supabase.co') &&
         trimmedUrl.length > 'https://.supabase.co'.length &&
         !trimmedUrl.includes('your-project-id');
}

// Clean the URL
function cleanSupabaseUrl(url: string): string {
  if (!url) return '';
  return url.trim().replace(/\/+$/, '');
}

const cleanedUrl = cleanSupabaseUrl(supabaseUrl);
const cleanedKey = supabaseAnonKey.trim();

// Check if we're in development mode (no Supabase configured)
const isDevelopment = !cleanedUrl || 
                     !cleanedKey || 
                     cleanedUrl.includes('your-project-id') || 
                     cleanedKey.includes('your-anon-key') ||
                     !isValidSupabaseUrl(cleanedUrl);

let supabase: any = null;

if (!isDevelopment) {
  try {
    if (isValidSupabaseUrl(cleanedUrl) && cleanedKey.length > 0) {
      supabase = createClient(cleanedUrl, cleanedKey);
      console.log('✅ Supabase connected successfully');
    } else {
      console.warn('⚠️ Invalid Supabase URL or key format, using dummy data');
    }
  } catch (error) {
    console.warn('⚠️ Supabase configuration error:', error);
    console.warn('📝 Using dummy data mode');
  }
} else {
  console.log('🔧 Development mode: Using dummy data (Supabase not configured)');
}

// Export the supabase client (will be null if not configured)
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