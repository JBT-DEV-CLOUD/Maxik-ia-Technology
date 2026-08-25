# Maxik-IA Technology · Plataforma de proyectos y soporte

Sitio web para **presentar proyectos** y **recibir requerimientos de soporte** con
seguimiento por estado. Construido con **Vite + React**, sin base de datos, listo para
publicar en **Vercel** o **Cloudflare Pages** desde un repositorio de **GitHub**.

## ¿Qué incluye?

- Portada con un resumen de operaciones (proyectos activos, requerimientos abiertos y resueltos).
- Catálogo de **proyectos** con estado, avance, etiquetas y filtros.
- Formulario de **requerimientos de soporte** con validación y código de seguimiento (`SUP-AAAA-###`).
- Panel de **seguimiento** de requerimientos filtrable por estado.
- Diseño propio, responsive y accesible (foco de teclado y `prefers-reduced-motion`).

---

## 1. Ejecutar en tu computadora

Necesitas **Node.js 18 o superior** (recomendado 20+). Descárgalo en https://nodejs.org.

```bash
npm install     # instala las dependencias (una sola vez)
npm run dev     # abre el sitio en http://localhost:5173
```

Otros comandos:

```bash
npm run build     # genera la versión de producción en la carpeta dist/
npm run preview   # sirve dist/ localmente para revisarla
```

---

## 2. Personalizar el contenido

Casi todo se edita en un solo archivo: **`src/data.js`**.

- `marca`: nombre, claim y correo de contacto.
- `servicios`: el módulo de creación (Páginas Web, Tiendas Virtuales, Apps). Cada uno tiene
  `titulo`, `resumen`, `incluye` (lista) e `icono` (`web`, `tienda` o `app`). El botón
  "Solicitar este servicio" precarga el formulario de requerimientos automáticamente.
- `proyectos`: tu lista de proyectos. Cada uno necesita un `ref` único (ej. `PRJ-007`),
  `titulo`, `resumen`, `etiquetas`, `estado`, `progreso` (0–100), `responsable` y `actualizado`.
  - Estados válidos: `activo`, `en-pausa`, `entregado`, `planificado`.
- `requerimientosDemo`: ejemplos de soporte que se muestran en el panel de seguimiento.

Los colores, tipografías y formas viven en **`src/styles.css`** (bloque `:root`, arriba del archivo).
Los estados y prioridades se definen en **`src/lib/status.jsx`**.

---

## 3. Subir el código a GitHub

1. Crea un repositorio **vacío** en https://github.com/new (sin README ni .gitignore).
2. En la carpeta del proyecto, ejecuta:

```bash
git init
git add .
git commit -m "Primera versión de la plataforma"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
git push -u origin main
```

Reemplaza `TU_USUARIO/TU_REPO` por los tuyos.

---

## 4a. Publicar en Vercel

1. Entra a https://vercel.com e inicia sesión con GitHub.
2. **Add New → Project** y elige tu repositorio.
3. Vercel detecta Vite automáticamente. Confirma esta configuración:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Pulsa **Deploy**. En ~1 minuto tendrás una URL pública.

Cada vez que hagas `git push`, Vercel vuelve a publicar solo. El archivo `vercel.json` ya viene incluido.

## 4b. Publicar en Cloudflare Pages

1. Entra a https://dash.cloudflare.com → **Workers & Pages → Create → Pages**.
2. Conecta tu cuenta de GitHub y elige el repositorio.
3. Configura la compilación:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. **Save and Deploy**. Tendrás una URL `*.pages.dev`.

El archivo `public/_redirects` ya está incluido para que las rutas funcionen correctamente.

> Solo necesitas **una** de las dos opciones. Ambas son gratuitas para proyectos pequeños
> y se actualizan solas con cada push a la rama `main`.

---

## 5. Guardar los requerimientos de verdad (opcional)

Por ahora, los requerimientos que se envían se guardan en el **navegador de cada persona**
(`localStorage`). Es ideal para una demo, pero **no se comparten** entre usuarios ni te llegan
a ti. Para recibirlos, conecta uno de estos servicios:

- **Formspree** (lo más rápido, sin código de servidor): crea un formulario en
  https://formspree.io y envía los datos con `fetch` a la URL que te dan. Los recibes por correo.
- **Función serverless:** en Vercel usa una API Route; en Cloudflare usa **Pages Functions**
  con **D1** (base de datos) o **KV**. Así puedes almacenar y listar los requerimientos de todos.
- **Backend propio / Supabase / Airtable:** reemplaza el bloque de `localStorage` en
  `src/components/Support.jsx` por una llamada `fetch` a tu API.

El punto exacto a modificar está en la función `enviar()` de `src/components/Support.jsx`.

---

## Estructura del proyecto

```
├─ index.html
├─ vercel.json              · configuración para Vercel (SPA)
├─ public/
│  ├─ _redirects            · configuración para Cloudflare Pages (SPA)
│  └─ favicon.svg
├─ src/
│  ├─ main.jsx              · punto de entrada
│  ├─ App.jsx               · ensambla las secciones
│  ├─ data.js               · ← edita aquí tus proyectos y datos
│  ├─ styles.css            · diseño y tokens de color/tipografía
│  ├─ lib/status.jsx        · estados, prioridades y píldoras
│  └─ components/           · Header, Hero, Projects, Support, Footer
└─ package.json
```

## Tecnologías

Vite · React 18 · CSS con variables. Sin dependencias de UI externas.
