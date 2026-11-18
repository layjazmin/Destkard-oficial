# DESTKARD

Sitio web informativo del proyecto DESTKARD. Está desarrollado con HTML, CSS y JavaScript, por lo que puede publicarse como sitio estático mediante **GitHub Pages**.

## Contenido

- `index.html`: página principal.
- `personajes.html`: selector de personajes.
- `competidores/`: fichas de personajes y jefes, imágenes y audios.
- `jefescodigos/`: selector de jefes.
- `mapascodigos/`: galería de mapas.
- `cartascodigos/`: colección de cartas.
- `img/`: recursos gráficos de la interfaz, mapas, personajes y jefes.

## Ver el sitio en tu computadora

1. Descargá o cloná este repositorio.
2. Abrí la carpeta del proyecto.
3. Abrí `index.html` en un navegador.

No necesita PHP, XAMPP ni una base de datos para funcionar como sitio estático.

## Publicar con GitHub Pages

1. Subí todos los archivos de esta carpeta a un repositorio de GitHub.
2. En el repositorio, entrá en **Settings → Pages**.
3. En **Build and deployment**, elegí **Deploy from a branch**.
4. En **Branch**, seleccioná `main` y la carpeta `/(root)`.
5. Guardá los cambios.
6. Esperá a que GitHub Pages termine la publicación. La dirección aparecerá en esa misma sección.

La página principal debe permanecer en la raíz del repositorio con el nombre `index.html`.

## Notas

- Los recursos se referencian mediante rutas relativas para que funcionen al publicarse en GitHub Pages.
- Los archivos de audio e imágenes forman parte del proyecto y deben subirse junto con el código.
- Dos audios que estaban referenciados pero no estaban incluidos en el archivo original (`fightaudio5.mp3` y `novaaudio10.mp3`) fueron retirados de sus listas para evitar referencias rotas.
