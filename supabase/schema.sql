-- ========================================================================
-- WNK Education - Supabase Клиенттер & Google Auth Базасы
-- Бағыты: Bilim Platform стандарты бойынша пайдаланушыларды Google арқылы растау
-- ========================================================================

-- 1. Кеңейтімдерді қосу
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- 2. Клиенттер / Пайдаланушылар профилі (wnk_profiles)
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

-- Индекстер
CREATE INDEX IF NOT EXISTS idx_wnk_profiles_email ON public.wnk_profiles(email);
CREATE INDEX IF NOT EXISTS idx_wnk_profiles_role ON public.wnk_profiles(role);

-- 3. Сақталған нұсқаулықтар / Бетбелгілер (wnk_saved_resources)
CREATE TABLE IF NOT EXISTS public.wnk_saved_resources (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    resource_id TEXT NOT NULL,
    saved_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL,
    CONSTRAINT wnk_unique_user_resource UNIQUE (user_id, resource_id)
);

CREATE INDEX IF NOT EXISTS idx_wnk_saved_user ON public.wnk_saved_resources(user_id);

-- 4. Пайдаланушы әрекеттерінің журналы (wnk_activity_logs)
CREATE TABLE IF NOT EXISTS public.wnk_activity_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    action TEXT NOT NULL, -- 'google_login', 'resource_read', 'copy_prompt', 'save_resource'
    resource_id TEXT,
    metadata JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_wnk_activity_user ON public.wnk_activity_logs(user_id);

-- 5. Row Level Security (RLS) қауіпсіздік саясаттары
ALTER TABLE public.wnk_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wnk_saved_resources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wnk_activity_logs ENABLE ROW LEVEL SECURITY;

-- wnk_profiles саясаттары
CREATE POLICY "Кез келген қолданушы өз профилін оқи алады" 
ON public.wnk_profiles FOR SELECT 
TO authenticated 
USING (auth.uid() = id);

CREATE POLICY "Барлық расталған профильдер жалпыға оқуға қолжетімді (бейдждер үшін)" 
ON public.wnk_profiles FOR SELECT 
TO anon 
USING (is_confirmed = true);

CREATE POLICY "Қолданушы өз профилін жаңарта алады" 
ON public.wnk_profiles FOR UPDATE 
TO authenticated 
USING (auth.uid() = id);

-- wnk_saved_resources саясаттары
CREATE POLICY "Қолданушы өз бетбелгілерін оқи алады" 
ON public.wnk_saved_resources FOR SELECT 
TO authenticated 
USING (auth.uid() = user_id);

CREATE POLICY "Қолданушы жаңа бетбелгі сақтай алады" 
ON public.wnk_saved_resources FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Қолданушы өз бетбелгісін жоя алады" 
ON public.wnk_saved_resources FOR DELETE 
TO authenticated 
USING (auth.uid() = user_id);

-- wnk_activity_logs саясаттары
CREATE POLICY "Қолданушы өз логтарын тіркей алады" 
ON public.wnk_activity_logs FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Қолданушы өз әрекеттерін көре алады" 
ON public.wnk_activity_logs FOR SELECT 
TO authenticated 
USING (auth.uid() = user_id);

-- 6. Автоматты Триггер: Google арқылы кіргенде профильді автоматты құру / растау
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
        ''
    );
    v_provider := COALESCE(
        NEW.raw_app_meta_data->>'provider',
        'google'
    );

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

    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Триггерді auth.users кестесіне байлау
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
    AFTER INSERT OR UPDATE ON auth.users
    FOR EACH ROW EXECUTE FUNCTION public.handle_wnk_auth_user();

-- ========================================================================
-- Сәтті аяқталды! Бұл SQL файлын Supabase SQL Editor-ге қойып іске қосыңыз.
-- ========================================================================
