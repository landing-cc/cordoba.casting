-- CÓRDOBA CASTING · CMS con administración privada
-- 1) Ejecutar este archivo en Supabase SQL Editor.
-- 2) En Authentication > Users, crear TU usuario con email + contraseña.
-- 3) Copiar su UUID y ejecutar al final: insert into public.site_admins(user_id) values ('TU-UUID');
-- 4) Completar config.js con Project URL y anon key. NUNCA usar service_role en el navegador.

create table if not exists public.site_content (
  id text primary key default 'main',
  content jsonb not null,
  updated_at timestamptz not null default now()
);
create table if not exists public.site_admins (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);
alter table public.site_content enable row level security;
alter table public.site_admins enable row level security;

drop policy if exists "public can read site content" on public.site_content;
drop policy if exists "admins can insert site content" on public.site_content;
drop policy if exists "admins can update site content" on public.site_content;
drop policy if exists "admins can delete site content" on public.site_content;
drop policy if exists "admin can verify self" on public.site_admins;

create policy "public can read site content" on public.site_content
for select to anon, authenticated using (true);
create policy "admin can verify self" on public.site_admins
for select to authenticated using (user_id = auth.uid());
create policy "admins can insert site content" on public.site_content
for insert to authenticated with check (exists(select 1 from public.site_admins a where a.user_id=auth.uid()));
create policy "admins can update site content" on public.site_content
for update to authenticated using (exists(select 1 from public.site_admins a where a.user_id=auth.uid())) with check (exists(select 1 from public.site_admins a where a.user_id=auth.uid()));
create policy "admins can delete site content" on public.site_content
for delete to authenticated using (exists(select 1 from public.site_admins a where a.user_id=auth.uid()));
