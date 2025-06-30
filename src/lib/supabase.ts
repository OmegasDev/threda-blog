import { createClient } from '@supabase/supabase-js'

// Get environment variables with proper fallbacks
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 
                   import.meta.env.PUBLIC_SUPABASE_URL ||
                   ''

const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 
                       import.meta.env.PUBLIC_SUPABASE_ANON_KEY ||
                       ''

// More robust URL validation
function isValidSupabaseUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  
  try {
    const urlObj = new URL(url.trim());
    return urlObj.protocol === 'https:' && 
           urlObj.hostname.endsWith('.supabase.co') &&
           urlObj.hostname.length > '.supabase.co'.length;
  } catch {
    return false;
  }
}

// Check if we're in development mode (no Supabase configured)
const isDevelopment = !supabaseUrl || 
                     !supabaseAnonKey || 
                     supabaseUrl.includes('your-project-id') || 
                     supabaseAnonKey.includes('your-anon-key') ||
                     !isValidSupabaseUrl(supabaseUrl);

let supabase: any = null;

if (!isDevelopment) {
  try {
    const trimmedUrl = supabaseUrl.trim();
    const trimmedKey = supabaseAnonKey.trim();
    
    if (isValidSupabaseUrl(trimmedUrl) && trimmedKey.length > 0) {
      supabase = createClient(trimmedUrl, trimmedKey);
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