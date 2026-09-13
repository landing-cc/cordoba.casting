CÓRDOBA CASTING · LANDING V4

QUÉ CAMBIÓ
- Rediseño completo basado en el Refresh de Key Visual nuevo.
- Negro dominante + gradientes negro/morado y negro/rojo.
- Amarillo reservado para acciones y detalles.
- Poppins como tipografía principal.
- Concepto visual detrás de cámara: foco, REC, encuadres, iluminación y composición.
- Cursos ocupan la mayor parte de la experiencia.
- Testimonios reciben una sección protagonista.
- Secciones separadas de Novedades, Servicios y Comunidad.
- Aula Virtual funciona como portal externo.

ADMINISTRACIÓN
Abrí admin.html.
El panel permite editar:
- hero y textos generales
- todos los cursos
- testimonios
- novedades
- servicios
- comunidad
- enlaces generales

La edición funciona inmediatamente en el mismo navegador con LocalStorage.
Esto es ideal para previsualizar y administrar la versión estática sin tocar HTML.

PARA PUBLICAR CAMBIOS PARA TODOS
Como GitHub Pages es estático, LocalStorage NO modifica el sitio para otros visitantes.
Se incluye supabase.sql para crear una tabla de contenido online. El paso siguiente es conectar admin.html y app.js a tu proyecto Supabase con Auth para que solo el administrador pueda guardar cambios globales.

ARCHIVOS PRINCIPALES
index.html       Landing
course.html      Ficha reutilizable de curso
admin.html       Panel administrador
content.js       Contenido inicial
app.js           Render del sitio
admin.js         Editor de contenido
styles.css       Diseño completo
supabase.sql     Base para CMS online
