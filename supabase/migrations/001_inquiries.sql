-- Inquiries table for contact form submissions
-- Run in Supabase SQL editor or via supabase db push

create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  company text not null,
  email text not null,
  phone text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.inquiries enable row level security;

-- Allow anonymous inserts (public contact form) via anon key
create policy "Allow public insert on inquiries"
  on public.inquiries
  for insert
  to anon, authenticated
  with check (true);

-- No public select — read via service role / dashboard only
revoke select on public.inquiries from anon, authenticated;
grant insert on public.inquiries to anon, authenticated;
