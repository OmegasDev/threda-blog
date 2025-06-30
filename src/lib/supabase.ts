import { createClient } from '@supabase/supabase-js'

// Get environment variables with proper fallbacks
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 
                   import.meta.env.PUBLIC_SUPABASE_URL ||
                   ''

const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 
                       import.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
                       ''

// Clean and normalize the URL
function cleanSupabaseUrl(url: string): string {
  if (!url) return '';
  
  // Remove any trailing slashes and whitespace
  let cleanUrl = url.trim().replace(/\/+$/, '');
  
  // If it's already a valid URL format, return it as is
  if (cleanUrl.startsWith('https://') && cleanUrl.includes('.supabase.co')) {
    return cleanUrl;
  }
  
  return cleanUrl;
}

// More robust URL validation
function isValidSupabaseUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  
  const trimmedUrl = url.trim();
  
  // Basic format check without URL constructor to avoid errors
  return trimmedUrl.startsWith('https://') && 
         trimmedUrl.includes('.supabase.co') &&
         trimmedUrl.length > 'https://.supabase.co'.length;
}

// Clean the URL before validation
const cleanedUrl = cleanSupabaseUrl(supabaseUrl);

// Check if we're in development mode (no Supabase configured)
const isDevelopment = !cleanedUrl || 
                     !supabaseAnonKey || 
                     cleanedUrl.includes('your-project-id') || 
                     supabaseAnonKey.includes('your-anon-key') ||
                     !isValidSupabaseUrl(cleanedUrl);

let supabase: any = null;

if (!isDevelopment) {
  try {
    const trimmedKey = supabaseAnonKey.trim();
    
    if (isValidSupabaseUrl(cleanedUrl) && trimmedKey.length > 0) {
      supabase = createClient(cleanedUrl, trimmedKey);
      console.log('✅ Supabase connected successfully');
    } else {
      console.warn('⚠️ Invalid Supabase URL or key format, using dummy data');
      console.warn('URL:', cleanedUrl);
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