/*
  # Community Hubs Schema

  1. New Tables
    - `user_profiles` - User profile information
    - `user_hubs` - User-created news hubs
    - `hub_followers` - Hub following relationships
    - `hub_threds` - Threds within hubs
    - `thred_responses` - Responses to threds

  2. Security
    - Enable RLS on all tables
    - Add policies for proper access control
    - Ensure users can only modify their own content

  3. Performance
    - Add indexes for common queries
    - Add triggers for automatic count updates
*/

-- User profiles table
CREATE TABLE IF NOT EXISTS user_profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username text UNIQUE NOT NULL,
  display_name text NOT NULL,
  avatar_url text,
  bio text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- User-created hubs table
CREATE TABLE IF NOT EXISTS user_hubs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  category text NOT NULL,
  profile_image text,
  banner_image text,
  is_public boolean DEFAULT true,
  created_by uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  follower_count integer DEFAULT 0,
  post_count integer DEFAULT 0,
  total_views integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Hub followers table
CREATE TABLE IF NOT EXISTS hub_followers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  hub_id uuid REFERENCES user_hubs(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  followed_at timestamptz DEFAULT now(),
  UNIQUE(hub_id, user_id)
);

-- Hub threds table
CREATE TABLE IF NOT EXISTS hub_threds (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  hub_id uuid REFERENCES user_hubs(id) ON DELETE CASCADE NOT NULL,
  title text NOT NULL,
  content text NOT NULL,
  source_url text,
  featured_image text,
  created_by uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  view_count integer DEFAULT 0,
  thred_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Thred responses table
CREATE TABLE IF NOT EXISTS thred_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  hub_thred_id uuid REFERENCES hub_threds(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_hubs ENABLE ROW LEVEL SECURITY;
ALTER TABLE hub_followers ENABLE ROW LEVEL SECURITY;
ALTER TABLE hub_threds ENABLE ROW LEVEL SECURITY;
ALTER TABLE thred_responses ENABLE ROW LEVEL SECURITY;

-- User profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON user_profiles
  FOR SELECT
  USING (true);

CREATE POLICY "Users can insert their own profile"
  ON user_profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
  ON user_profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- User hubs policies
CREATE POLICY "Public hubs are viewable by everyone"
  ON user_hubs
  FOR SELECT
  USING (is_public = true OR auth.uid() = created_by);

CREATE POLICY "Authenticated users can create hubs"
  ON user_hubs
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Hub creators can update their hubs"
  ON user_hubs
  FOR UPDATE
  USING (auth.uid() = created_by);

CREATE POLICY "Hub creators can delete their hubs"
  ON user_hubs
  FOR DELETE
  USING (auth.uid() = created_by);

-- Hub followers policies
CREATE POLICY "Hub followers are viewable by everyone"
  ON hub_followers
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can follow hubs"
  ON hub_followers
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can unfollow hubs"
  ON hub_followers
  FOR DELETE
  USING (auth.uid() = user_id);

-- Hub threds policies
CREATE POLICY "Hub threds are viewable by everyone"
  ON hub_threds
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create threds"
  ON hub_threds
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = created_by);

CREATE POLICY "Thred creators can update their threds"
  ON hub_threds
  FOR UPDATE
  USING (auth.uid() = created_by);

-- Thred responses policies
CREATE POLICY "Thred responses are viewable by everyone"
  ON thred_responses
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can create responses"
  ON thred_responses
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Response creators can update their responses"
  ON thred_responses
  FOR UPDATE
  USING (auth.uid() = user_id);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS user_hubs_created_by_idx ON user_hubs (created_by);
CREATE INDEX IF NOT EXISTS user_hubs_category_idx ON user_hubs (category);
CREATE INDEX IF NOT EXISTS user_hubs_public_idx ON user_hubs (is_public);
CREATE INDEX IF NOT EXISTS user_hubs_follower_count_idx ON user_hubs (follower_count DESC);
CREATE INDEX IF NOT EXISTS hub_followers_hub_idx ON hub_followers (hub_id);
CREATE INDEX IF NOT EXISTS hub_followers_user_idx ON hub_followers (user_id);
CREATE INDEX IF NOT EXISTS hub_threds_hub_idx ON hub_threds (hub_id);
CREATE INDEX IF NOT EXISTS hub_threds_created_by_idx ON hub_threds (created_by);
CREATE INDEX IF NOT EXISTS hub_threds_created_at_idx ON hub_threds (created_at DESC);
CREATE INDEX IF NOT EXISTS thred_responses_thred_idx ON thred_responses (hub_thred_id);

-- Functions to update follower counts
CREATE OR REPLACE FUNCTION update_hub_follower_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE user_hubs 
    SET follower_count = follower_count + 1 
    WHERE id = NEW.hub_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE user_hubs 
    SET follower_count = GREATEST(follower_count - 1, 0)
    WHERE id = OLD.hub_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Triggers for follower count
DROP TRIGGER IF EXISTS hub_follower_count_trigger ON hub_followers;
CREATE TRIGGER hub_follower_count_trigger
  AFTER INSERT OR DELETE ON hub_followers
  FOR EACH ROW EXECUTE FUNCTION update_hub_follower_count();

-- Function to update thred count
CREATE OR REPLACE FUNCTION update_hub_thred_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE user_hubs 
    SET post_count = post_count + 1 
    WHERE id = NEW.hub_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE user_hubs 
    SET post_count = GREATEST(post_count - 1, 0)
    WHERE id = OLD.hub_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Triggers for thred count
DROP TRIGGER IF EXISTS hub_thred_count_trigger ON hub_threds;
CREATE TRIGGER hub_thred_count_trigger
  AFTER INSERT OR DELETE ON hub_threds
  FOR EACH ROW EXECUTE FUNCTION update_hub_thred_count();

-- Function to update thred response count
CREATE OR REPLACE FUNCTION update_thred_response_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE hub_threds 
    SET thred_count = thred_count + 1 
    WHERE id = NEW.hub_thred_id;
    RETURN NEW;
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE hub_threds 
    SET thred_count = GREATEST(thred_count - 1, 0)
    WHERE id = OLD.hub_thred_id;
    RETURN OLD;
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Triggers for thred response count
DROP TRIGGER IF EXISTS thred_response_count_trigger ON thred_responses;
CREATE TRIGGER thred_response_count_trigger
  AFTER INSERT OR DELETE ON thred_responses
  FOR EACH ROW EXECUTE FUNCTION update_thred_response_count();

-- Function to handle updated_at timestamps
CREATE OR REPLACE FUNCTION handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers for updated_at
CREATE TRIGGER user_profiles_updated_at
  BEFORE UPDATE ON user_profiles
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();

CREATE TRIGGER user_hubs_updated_at
  BEFORE UPDATE ON user_hubs
  FOR EACH ROW EXECUTE FUNCTION handle_updated_at();