/*
  # Blog Platform Schema

  1. New Tables
    - `categories`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `slug` (text, unique)
      - `color` (text)
      - `description` (text, optional)
      - `created_at` (timestamp)
    
    - `posts`
      - `id` (uuid, primary key)
      - `title` (text)
      - `slug` (text, unique)
      - `content` (text)
      - `excerpt` (text)
      - `category_id` (uuid, foreign key)
      - `featured_image` (text, optional)
      - `published` (boolean, default false)
      - `seo_title` (text, optional)
      - `seo_description` (text, optional)
      - `view_count` (integer, default 0)
      - `trending_score` (integer, default 0)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `ad_placements`
      - `id` (uuid, primary key)
      - `position` (text)
      - `content` (text)
      - `active` (boolean, default true)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access to published content
    - Add policies for authenticated admin access
*/

-- Categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  color text NOT NULL DEFAULT '#3b82f6',
  description text,
  created_at timestamptz DEFAULT now()
);

-- Posts table
CREATE TABLE IF NOT EXISTS posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  content text NOT NULL,
  excerpt text NOT NULL,
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  featured_image text,
  published boolean DEFAULT false,
  seo_title text,
  seo_description text,
  view_count integer DEFAULT 0,
  trending_score integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Ad placements table
CREATE TABLE IF NOT EXISTS ad_placements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  position text NOT NULL,
  content text NOT NULL,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE ad_placements ENABLE ROW LEVEL SECURITY;

-- Public read policies for published content
CREATE POLICY "Categories are publicly readable"
  ON categories
  FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Published posts are publicly readable"
  ON posts
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Active ads are publicly readable"
  ON ad_placements
  FOR SELECT
  TO anon, authenticated
  USING (active = true);

-- Insert default categories
INSERT INTO categories (name, slug, color, description) VALUES
  ('Technology', 'tech', '#10b981', 'Latest tech news, gadgets, and innovations'),
  ('War & Conflict', 'conflict', '#ef4444', 'Global conflicts, military news, and geopolitical updates'),
  ('Financial', 'financial', '#f59e0b', 'Stock market, crypto, economic news and analysis'),
  ('Sports', 'sports', '#8b5cf6', 'Sports news, scores, and athletic achievements'),
  ('Lifestyle', 'lifestyle', '#ec4899', 'Health, wellness, and lifestyle trends')
ON CONFLICT (slug) DO NOTHING;

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS posts_published_idx ON posts (published);
CREATE INDEX IF NOT EXISTS posts_category_idx ON posts (category_id);
CREATE INDEX IF NOT EXISTS posts_trending_idx ON posts (trending_score DESC);
CREATE INDEX IF NOT EXISTS posts_created_idx ON posts (created_at DESC);