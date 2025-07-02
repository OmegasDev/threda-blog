import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://nwztmeyfsqbsposmsgsy.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53enRtZXlmc3Fic3Bvc21zZ3N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyNDUyNzcsImV4cCI6MjA2NjgyMTI3N30.yLN7dwVIwan3fcgi1pO1ZY04UwEO3rwbg-TwAfpN760";
function isValidSupabaseUrl(url) {
  if (!url || typeof url !== "string") return false;
  const trimmedUrl = url.trim();
  return trimmedUrl.startsWith("https://") && trimmedUrl.includes(".supabase.co") && trimmedUrl.length > "https://.supabase.co".length && !trimmedUrl.includes("your-project-id");
}
function cleanSupabaseUrl(url) {
  return url.trim().replace(/\/+$/, "");
}
const cleanedUrl = cleanSupabaseUrl(supabaseUrl);
const cleanedKey = supabaseAnonKey.trim();
const isDevelopment = !cleanedUrl || !cleanedKey || cleanedUrl.includes("your-project-id") || cleanedKey.includes("your-anon-key") || !isValidSupabaseUrl(cleanedUrl);
let supabase = null;
if (!isDevelopment) {
  try {
    if (isValidSupabaseUrl(cleanedUrl) && cleanedKey.length > 0) {
      supabase = createClient(cleanedUrl, cleanedKey);
      console.log("✅ Supabase connected successfully");
    } else {
      console.warn("⚠️ Invalid Supabase URL or key format, using dummy data");
    }
  } catch (error) {
    console.warn("⚠️ Supabase configuration error:", error);
    console.warn("📝 Using dummy data mode");
  }
} else {
  console.log("🔧 Development mode: Using dummy data (Supabase not configured)");
}

export { supabase };
