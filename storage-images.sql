-- Ejecutar UNA VEZ en Supabase > SQL Editor.
-- Permite que solo usuarios incluidos en site_admins suban imágenes al bucket público website-images.

drop policy if exists "Admins can upload website images" on storage.objects;
drop policy if exists "Admins can update website images" on storage.objects;
drop policy if exists "Admins can delete website images" on storage.objects;

create policy "Admins can upload website images"
on storage.objects for insert to authenticated
with check (
  bucket_id = 'website-images'
  and exists (select 1 from public.site_admins a where a.user_id = auth.uid())
);

create policy "Admins can update website images"
on storage.objects for update to authenticated
using (
  bucket_id = 'website-images'
  and exists (select 1 from public.site_admins a where a.user_id = auth.uid())
)
with check (
  bucket_id = 'website-images'
  and exists (select 1 from public.site_admins a where a.user_id = auth.uid())
);

create policy "Admins can delete website images"
on storage.objects for delete to authenticated
using (
  bucket_id = 'website-images'
  and exists (select 1 from public.site_admins a where a.user_id = auth.uid())
);
