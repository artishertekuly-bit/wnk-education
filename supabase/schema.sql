-- ========================================================================
-- WNK Education - Толыққанды Ресми Supabase Дерекқоры (Database Schema)
-- Google OAuth, Профильдер, Қауымдастық және Геймификация кестелері
-- ========================================================================

-- 1. Кеңейтімдерді қосу
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ========================================================================
-- 2. Пайдаланушылар / Google Профильдері (wnk_profiles)
-- ========================================================================
CREATE TABLE IF NOT EXISTS public.wnk_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT NOT NULL UNIQUE,
    full_name TEXT,
    avatar_url TEXT,
    provider TEXT DEFAULT 'google',
    is_confirmed BOOLEAN DEFAULT true,
    confirmed_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()),
    role TEXT DEFAULT 'student' CHECK (role IN ('student', 'creator', 'instructor', 'admin')),
    tier TEXT DEFAULT 'free' CHECK (tier IN ('free', 'pro', 'scholar')),
    phone TEXT,
    github_username TEXT,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_wnk_profiles_email ON public.wnk_profiles(email);
CREATE INDEX IF NOT EXISTS idx_wnk_profiles_role ON public.wnk_profiles(role);

-- ========================================================================
-- 3. Қауымдастық мүшелері және жазылушылар (wnk_subscribers)
-- ========================================================================
CREATE TABLE IF NOT EXISTS public.wnk_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL UNIQUE,
    full_name TEXT NOT NULL,
    interest TEXT,
    source TEXT DEFAULT 'community_registration',
    telegram_verified BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_wnk_subscribers_email ON public.wnk_subscribers(email);

-- ========================================================================
-- 4. Геймификация профильдері мен рейтингі (wnk_gaming_profiles)
-- ========================================================================
CREATE TABLE IF NOT EXISTS public.wnk_gaming_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id TEXT NOT NULL UNIQUE, -- auth.users(id) or guest unique id
    email TEXT,
    username TEXT NOT NULL,
    avatar_url TEXT,
    wins INT DEFAULT 0,
    losses INT DEFAULT 0,
    draws INT DEFAULT 0,
    score INT DEFAULT 0,
    streak INT DEFAULT 0,
    best_streak INT DEFAULT 0,
    battleship_wins INT DEFAULT 0,
    checkers_wins INT DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_wnk_gaming_user ON public.wnk_gaming_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_wnk_gaming_score ON public.wnk_gaming_profiles(score DESC);

-- ========================================================================
-- 5. Геймификация матчтарының тарихы (wnk_gaming_matches)
-- ========================================================================
CREATE TABLE IF NOT EXISTS public.wnk_gaming_matches (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    room_id TEXT NOT NULL,
    game_type TEXT NOT NULL CHECK (game_type IN ('battleship', 'checkers')),
    topic TEXT NOT NULL,
    host_id TEXT NOT NULL,
    host_name TEXT NOT NULL,
    guest_id TEXT NOT NULL,
    guest_name TEXT NOT NULL,
    winner_id TEXT,
    winner_name TEXT,
    host_score INT DEFAULT 0,
    guest_score INT DEFAULT 0,
    completed_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_wnk_matches_room ON public.wnk_gaming_matches(room_id);
CREATE INDEX IF NOT EXISTS idx_wnk_matches_created ON public.wnk_gaming_matches(completed_at DESC);

-- ========================================================================
-- 6. Сақталған нұсқаулықтар (wnk_saved_resources)
-- ========================================================================
CREATE TABLE IF NOT EXISTS public.wnk_saved_resources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    resource_id TEXT NOT NULL,
    saved_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    CONSTRAINT wnk_unique_user_resource UNIQUE (user_id, resource_id)
);

CREATE INDEX IF NOT EXISTS idx_wnk_saved_user ON public.wnk_saved_resources(user_id);

-- ========================================================================
-- 7. Пайдаланушы әрекеттерінің журналы (wnk_activity_logs)
-- ========================================================================
CREATE TABLE IF NOT EXISTS public.wnk_activity_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    action TEXT NOT NULL, -- 'google_login', 'manual_registration', 'game_completed', 'resource_read', 'copy_prompt'
    resource_id TEXT,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_wnk_activity_user ON public.wnk_activity_logs(user_id);

-- ========================================================================
-- 8. Row Level Security (RLS) Қауіпсіздік Саясаттары
-- ========================================================================
ALTER TABLE public.wnk_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wnk_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wnk_gaming_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wnk_gaming_matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wnk_saved_resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wnk_activity_logs ENABLE ROW LEVEL SECURITY;

-- wnk_profiles
CREATE POLICY "Профильдерді барлық пайдаланушылар оқи алады" 
ON public.wnk_profiles FOR SELECT TO public USING (true);

CREATE POLICY "Қолданушы өз профилін жаңарта алады" 
ON public.wnk_profiles FOR UPDATE TO authenticated USING (auth.uid() = id);

-- wnk_subscribers
CREATE POLICY "Жазылушыларды оқу" 
ON public.wnk_subscribers FOR SELECT TO public USING (true);

CREATE POLICY "Кез келген қолданушы жазыла алады" 
ON public.wnk_subscribers FOR INSERT TO public WITH CHECK (true);

CREATE POLICY "Жазылушы өз мәліметін жаңарта алады" 
ON public.wnk_subscribers FOR UPDATE TO public USING (true);

-- wnk_gaming_profiles
CREATE POLICY "Геймификация рейтингін кез келген адам көре алады" 
ON public.wnk_gaming_profiles FOR SELECT TO public USING (true);

CREATE POLICY "Ойыншы профилін қосу немесе жаңарту" 
ON public.wnk_gaming_profiles FOR ALL TO public USING (true) WITH CHECK (true);

-- wnk_gaming_matches
CREATE POLICY "Ойын нәтижелерін барлығы көре алады" 
ON public.wnk_gaming_matches FOR SELECT TO public USING (true);

CREATE POLICY "Ойын нәтижесін тіркеу" 
ON public.wnk_gaming_matches FOR INSERT TO public WITH CHECK (true);

-- wnk_saved_resources
CREATE POLICY "Қолданушы өз бетбелгілерін оқи алады" 
ON public.wnk_saved_resources FOR SELECT TO authenticated USING (auth.uid() = user_id);

CREATE POLICY "Қолданушы жаңа бетбелгі сақтай алады" 
ON public.wnk_saved_resources FOR INSERT TO authenticated WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Қолданушы өз бетбелгісін жоя алады" 
ON public.wnk_saved_resources FOR DELETE TO authenticated USING (auth.uid() = user_id);

-- wnk_activity_logs
CREATE POLICY "Логтарды тіркеу" 
ON public.wnk_activity_logs FOR INSERT TO public WITH CHECK (true);

CREATE POLICY "Қолданушы өз логтарын көре алады" 
ON public.wnk_activity_logs FOR SELECT TO authenticated USING (auth.uid() = user_id);

-- ========================================================================
-- 9. Автоматты Триггер: Google Auth арқылы кіргенде профильді автоматты құру
-- ========================================================================
CREATE OR REPLACE FUNCTION public.handle_wnk_auth_user()
RETURNS TRIGGER AS $$
DECLARE
    v_full_name TEXT;
    v_avatar TEXT;
    v_provider TEXT;
BEGIN
    v_full_name := COALESCE(
        NEW.raw_user_meta_data->>'full_name',
        NEW.raw_user_meta_data->>'name',
        split_part(NEW.email, '@', 1)
    );
    v_avatar := COALESCE(
        NEW.raw_user_meta_data->>'avatar_url',
        NEW.raw_user_meta_data->>'picture',
        'https://api.dicebear.com/7.x/bottts/svg?seed=' || encode(digest(NEW.email, 'sha256'), 'hex')
    );
    v_provider := COALESCE(
        NEW.raw_app_meta_data->>'provider',
        'google'
    );

    -- wnk_profiles кестесіне енгізу / жаңарту
    INSERT INTO public.wnk_profiles (
        id,
        email,
        full_name,
        avatar_url,
        provider,
        is_confirmed,
        confirmed_at,
        role
    ) VALUES (
        NEW.id,
        NEW.email,
        v_full_name,
        v_avatar,
        v_provider,
        true,
        timezone('utc'::text, now()),
        'student'
    )
    ON CONFLICT (id) DO UPDATE SET
        full_name = EXCLUDED.full_name,
        avatar_url = EXCLUDED.avatar_url,
        is_confirmed = true,
        confirmed_at = timezone('utc'::text, now()),
        updated_at = timezone('utc'::text, now());

    -- wnk_subscribers кестесіне автоматты қосу
    INSERT INTO public.wnk_subscribers (
        email,
        full_name,
        interest,
        source
    ) VALUES (
        NEW.email,
        v_full_name,
        'Google Auth Қолданушысы',
        'google_oauth'
    )
    ON CONFLICT (email) DO UPDATE SET
        full_name = EXCLUDED.full_name,
        updated_at = timezone('utc'::text, now());

    -- wnk_gaming_profiles кестесіне автоматты енгізу
    INSERT INTO public.wnk_gaming_profiles (
        user_id,
        email,
        username,
        avatar_url
    ) VALUES (
        NEW.id::text,
        NEW.email,
        v_full_name,
        v_avatar
    )
    ON CONFLICT (user_id) DO UPDATE SET
        username = EXCLUDED.username,
        avatar_url = EXCLUDED.avatar_url,
        updated_at = timezone('utc'::text, now());

    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Триггерді auth.users кестесіне байлау
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT OR UPDATE ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_wnk_auth_user();
