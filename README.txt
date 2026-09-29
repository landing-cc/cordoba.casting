CÓRDOBA CASTING · LANDING V6

DIRECCIÓN
- Cursos primero.
- Testimonios con presencia fuerte.
- Novedades, Servicios y Comunidad después.
- Aula Virtual es un link externo.
- Refresh visual “Detrás de cámara”: encuadre, foco, luces, profundidad, negro + violeta/rojo y amarillo como detalle.
- Poppins como tipografía principal.
- Fotografías de curso preparadas para 1600×1000 y mostradas sin recorte destructivo en desktop.

ADMIN PRIVADO
El admin ya NO usa LocalStorage ni aparece enlazado en el footer público.
1. Crear/usar un proyecto Supabase.
2. Ejecutar supabase.sql.
3. En Authentication > Users crear tu usuario.
4. Copiar el UUID de ese usuario y ejecutar:
   insert into public.site_admins(user_id) values ('TU-UUID');
5. En config.js pegar Project URL y anon/public key.
6. Subir el sitio.
7. Entrar manualmente a /admin.html e iniciar sesión.

SEGURIDAD
La seguridad no depende de ocultar admin.html: depende de Auth + RLS.
La landing puede LEER el contenido. Solo UUIDs en site_admins pueden ESCRIBIR.
No usar nunca la service_role key en config.js.

IMÁGENES
Por ahora hay placeholders. Desde el admin se puede cambiar la ruta/URL de hero, cursos, testimonios, novedades, servicios y comunidad.
Para cursos: 1600×1000 px.


V7 - IMÁGENES DE CURSOS
- Tarjetas de cursos: imagen 4:5, layout desktop 35% imagen / 65% información, object-fit: cover.
- Tamaño recomendado: 1200×1500 px.
- Admin: botón SUBIR IMAGEN en cada curso, conectado al bucket público website-images.
- Antes de usar el botón, ejecutar storage-images.sql una sola vez en Supabase SQL Editor.
- La imagen se sube primero; después tocar Publicar cambios para guardar su URL en site_content.
