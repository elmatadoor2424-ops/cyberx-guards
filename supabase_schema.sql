-- ==============================================================================
-- CyberX VIP Security & Bodyguard Agency - Supabase Database Schema
-- Inspired by "بطل العالم" (Batal El Alam) Tactical Security Doctrine
-- ==============================================================================

-- 1. Create Bodyguard Applications Table
CREATE TABLE IF NOT EXISTS public.bodyguard_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    tactical_code VARCHAR(20) NOT NULL UNIQUE,
    full_name VARCHAR(255) NOT NULL,
    age INTEGER NOT NULL CHECK (age >= 18 AND age <= 60),
    phone VARCHAR(50) NOT NULL,
    city VARCHAR(100) NOT NULL,
    national_id VARCHAR(50) NOT NULL,
    height_cm INTEGER NOT NULL CHECK (height_cm >= 170 AND height_cm <= 230),
    weight_kg INTEGER NOT NULL CHECK (weight_kg >= 60 AND weight_kg <= 200),
    fitness_level VARCHAR(50) NOT NULL DEFAULT 'ممتاز',
    martial_arts TEXT[] DEFAULT '{}',
    military_service VARCHAR(150) NOT NULL,
    weapons_training BOOLEAN DEFAULT FALSE,
    driving_license BOOLEAN DEFAULT TRUE,
    experience_years INTEGER DEFAULT 0,
    previous_events TEXT,
    photo_url TEXT,
    id_card_url TEXT,
    status VARCHAR(20) NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
    notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Indexing for high-speed queries in the Admin Portal
CREATE INDEX IF NOT EXISTS idx_bodyguards_status ON public.bodyguard_applications(status);
CREATE INDEX IF NOT EXISTS idx_bodyguards_height ON public.bodyguard_applications(height_cm);
CREATE INDEX IF NOT EXISTS idx_bodyguards_created ON public.bodyguard_applications(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.bodyguard_applications ENABLE ROW LEVEL SECURITY;

-- Allow public insertion (for the recruitment form /join)
CREATE POLICY "Allow public submissions for bodyguard applications"
    ON public.bodyguard_applications
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Allow public reading / admin access (can be restricted to authenticated users if Supabase Auth is enabled)
CREATE POLICY "Allow read access to bodyguard applications"
    ON public.bodyguard_applications
    FOR SELECT
    TO public
    USING (true);

-- Allow updates (for approving/rejecting applicants from the Admin dashboard)
CREATE POLICY "Allow updating applications status"
    ON public.bodyguard_applications
    FOR UPDATE
    TO public
    USING (true);

-- 2. Create VIP Booking Requests Table
CREATE TABLE IF NOT EXISTS public.vip_bookings (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    client_name VARCHAR(255) NOT NULL,
    client_phone VARCHAR(50) NOT NULL,
    client_category VARCHAR(100) NOT NULL,
    service_type VARCHAR(150) NOT NULL,
    guards_count INTEGER NOT NULL DEFAULT 4,
    mission_date VARCHAR(100),
    city VARCHAR(100) NOT NULL,
    armored_vehicles BOOLEAN DEFAULT FALSE,
    special_requirements TEXT,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE public.vip_bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public VIP booking requests"
    ON public.vip_bookings
    FOR ALL
    TO public
    USING (true);

-- ==============================================================================
-- CyberX Tactical System Initialized
-- ==============================================================================
