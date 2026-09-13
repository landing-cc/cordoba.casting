-- Córdoba Casting CMS mínimo para publicar cambios del panel admin.
-- Ejecutar en Supabase SQL Editor cuando quieras pasar del modo local al modo online.
create table if not exists public.site_content (
  id text primary key default 'main',
  content jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.site_content enable row level security;

-- Lectura pública: la landing puede descargar el contenido publicado.
create policy "public can read site content"
on public.site_content for select
to anon, authenticated
using (true);

-- Escritura: solo usuarios autenticados.
create policy "authenticated can update site content"
on public.site_content for all
to authenticated
using (true)
with check (true);

-- IMPORTANTE: para producción conviene restringir la escritura a una lista de admins
-- o a un campo de rol en auth.users. No publiques una service_role key en el navegador.
