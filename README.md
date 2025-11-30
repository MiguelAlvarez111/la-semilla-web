# La Iglesia La Semilla - Sitio Web

Sitio web moderno y profesional para La Iglesia La Semilla en Cúcuta, Colombia. Construido con Next.js 14, TypeScript, Tailwind CSS y Framer Motion.

## 🚀 Características

- **Landing Page Impactante**: Hero con video de fondo, playlist de Spotify integrada, y Bento Grid de ministerios
- **Páginas de Grupos Dinámicas**: Temas personalizados por grupo (Dreamers, Champions, Mujeres, Kids)
- **Dashboard Personalizado**: Experiencia tipo SaaS con widgets interactivos
- **Navegación Sticky**: Navbar con efecto glassmorphism
- **Animaciones Fluidas**: Framer Motion en todas las transiciones
- **Diseño Responsive**: Optimizado para móvil, tablet y desktop

## 🛠️ Stack Tecnológico

- **Framework**: Next.js 14+ (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **UI Components**: Shadcn/ui
- **Animaciones**: Framer Motion
- **Iconos**: Lucide React

## 📦 Instalación

1. Instala las dependencias:

```bash
npm install
```

2. Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
├── app/
│   ├── (dashboard)/          # Rutas del dashboard
│   ├── grupos/               # Páginas de grupos
│   │   ├── [slug]/          # Páginas dinámicas por grupo
│   │   └── page.tsx         # Listado de grupos
│   ├── soy-nuevo/           # Página para nuevos visitantes
│   ├── dar/                 # Página de donaciones
│   ├── layout.tsx           # Layout raíz
│   └── page.tsx             # Landing page
├── components/
│   ├── dashboard/           # Componentes del dashboard
│   ├── groups/              # Componentes de grupos
│   ├── sections/            # Secciones de la landing
│   └── ui/                  # Componentes UI base
├── lib/
│   ├── data.ts              # Mock data estructurada
│   └── utils.ts             # Utilidades
└── public/                  # Archivos estáticos
```

## 🎨 Personalización

### Colores

Los colores de la marca están definidos en `tailwind.config.ts`:

```typescript
semilla: {
  orange: "#F97316",
  "orange-light": "#FB923C",
  "orange-dark": "#EA580C",
  earth: "#A16207",
  // ...
}
```

### Datos

Los datos de grupos, ministerios y usuarios se encuentran en `lib/data.ts`. Actualiza este archivo con información real.

### Video Hero

Reemplaza `/public/hero-video.mp4` con un video real de fondo. El video debe ser:
- Formato: MP4
- Duración: Loop corto (5-10 segundos)
- Resolución: 1920x1080 o superior
- Sin audio (se reproduce en silencio)

### Playlist de Spotify

Actualiza el ID de la playlist en `lib/data.ts`:

```typescript
export const spotifyPlaylist = {
  id: 'TU_PLAYLIST_ID', // Reemplazar con ID real
  embedUrl: 'https://open.spotify.com/embed/playlist/TU_PLAYLIST_ID?...',
}
```

## 📝 Páginas Principales

- **/** - Landing page con hero, playlist y grid de ministerios
- **/grupos** - Listado de todos los grupos
- **/grupos/[slug]** - Página individual de cada grupo con tema personalizado
- **/soy-nuevo** - Información para nuevos visitantes
- **/dar** - Página de donaciones y ofrendas
- **/dashboard** - Dashboard personalizado del usuario

## 🎯 Temas de Grupos

Cada grupo tiene su propio tema visual:

- **Dreamers**: Cyberpunk/Moderno (Fondos oscuros, neón, tipografía glitch)
- **Champions**: Industrial/Bold (Grises fuertes, tipografía blocky)
- **Mujeres**: Editorial/Soft (Colores pasteles cálidos)
- **Kids**: Alegre/Vibrante (Amarillos y naranjas)

## 🚧 Próximos Pasos

- [ ] Integrar base de datos real
- [ ] Implementar autenticación de usuarios
- [ ] Generar QR codes dinámicos para check-in
- [ ] Agregar sistema de eventos
- [ ] Implementar sistema de donaciones en línea
- [ ] Agregar blog/noticias

## 📄 Licencia

Este proyecto es privado y propiedad de La Iglesia La Semilla.

