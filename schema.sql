-- Create tables for marketing site conversions
create table if not exists contact_enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  organisation text not null,
  designation text not null,
  city text not null,
  venue_type text not null,
  daily_footfall text not null,
  phone text not null,
  email text not null,
  message text,
  created_at timestamptz default now()
);

create table if not exists franchise_applications (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  city text not null,
  kiosk_count text not null,
  occupation text not null,
  has_venue_relationships text not null,
  phone text not null,
  email text not null,
  motivation text not null,
  created_at timestamptz default now()
);

create table if not exists ad_enquiries (
  id uuid primary key default gen_random_uuid(),
  brand_name text not null,
  campaign_type text not null,
  target_locations text not null,
  target_audience text not null,
  budget_range text not null,
  contact_name text not null,
  email text not null,
  phone text not null,
  created_at timestamptz default now()
);

create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  subject text not null,
  message text not null,
  created_at timestamptz default now()
);

create table if not exists waitlist (
  id uuid primary key default gen_random_uuid(),
  email text unique not null,
  created_at timestamptz default now()
);

-- Enable RLS on all marketing tables to secure them
alter table contact_enquiries enable row level security;
alter table franchise_applications enable row level security;
alter table ad_enquiries enable row level security;
alter table contact_messages enable row level security;
alter table waitlist enable row level security;
