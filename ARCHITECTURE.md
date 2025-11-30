# 🏗️ Arquitectura del Proyecto

## 📊 Resumen

Este proyecto usa **Next.js Fullstack**, lo que significa que **no necesitas un backend separado**. Todo está integrado en un solo servicio.

## 🔄 Arquitectura Actual

```
┌─────────────────────────────────────────────┐
│         Railway - Servicio Único            │
│  ┌───────────────────────────────────────┐  │
│  │   la-semilla-web (Next.js Fullstack)  │  │
│  │                                        │  │
│  │  ┌──────────────┐  ┌──────────────┐  │  │
│  │  │   Frontend   │  │   Backend    │  │  │
│  │  │              │  │              │  │  │
│  │  │ • Páginas    │  │ • API Routes │  │  │
│  │  │ • Componentes│  │ • Server     │  │  │
│  │  │ • UI         │  │   Components │  │  │
│  │  └──────────────┘  └──────────────┘  │  │
│  │              ↓                        │  │
│  │      ┌──────────────┐                │  │
│  │      │  PostgreSQL  │                │  │
│  │      │  (Railway)   │                │  │
│  │      └──────────────┘                │  │
│  └───────────────────────────────────────┘  │
└─────────────────────────────────────────────┘
```

## 📁 Estructura de Archivos

### Frontend
- `app/page.tsx` - Landing page
- `app/grupos/` - Páginas de grupos
- `app/dashboard/` - Dashboard del usuario
- `components/` - Componentes React reutilizables

### Backend (API Routes)
- `app/api/` - Endpoints de API
  - `app/api/db/test/route.ts` - Endpoint para probar la DB

### Base de Datos
- `lib/db/` - Configuración y conexión a PostgreSQL
  - `lib/db/config.ts` - Pool de conexiones
  - `lib/db/index.ts` - Exportaciones

## 🔌 Cómo Funciona Next.js Fullstack

### 1. API Routes (Backend)

Cualquier archivo en `app/api/` se convierte automáticamente en un endpoint REST:

```typescript
// app/api/users/route.ts
export async function GET() {
  // Tu lógica de backend aquí
  return NextResponse.json({ users: [] })
}

export async function POST(request: Request) {
  const body = await request.json()
  // Procesar datos
  return NextResponse.json({ success: true })
}
```

**Endpoint resultante:** `GET /api/users` y `POST /api/users`

### 2. Server Components (Backend en el Frontend)

Los componentes de servidor pueden hacer queries directamente:

```typescript
// app/grupos/page.tsx
export default async function GruposPage() {
  // Esto se ejecuta en el servidor
  const groups = await pool.query('SELECT * FROM groups')
  return <div>{/* Renderizar grupos */}</div>
}
```

### 3. Server Actions (Formularios)

Para manejar formularios sin crear endpoints:

```typescript
// app/actions.ts
'use server'

export async function createUser(formData: FormData) {
  // Código que se ejecuta en el servidor
  const name = formData.get('name')
  // Guardar en DB
}
```

## 🎯 Ventajas de Next.js Fullstack

✅ **Un solo servicio** - Más simple y económico  
✅ **Deploy más rápido** - Todo en un lugar  
✅ **Mejor rendimiento** - Sin latencia entre frontend y backend  
✅ **Type-safe** - TypeScript compartido  
✅ **API automática** - Cualquier carpeta en `app/api/` es un endpoint

## 🚀 Agregar Nuevos Endpoints

Para crear un nuevo endpoint de API:

1. Crea un archivo en `app/api/tu-endpoint/route.ts`:

```typescript
import { NextResponse } from 'next/server'
import { pool } from '@/lib/db'

export async function GET() {
  const result = await pool.query('SELECT * FROM usuarios')
  return NextResponse.json({ usuarios: result.rows })
}

export async function POST(request: Request) {
  const data = await request.json()
  // Procesar y guardar en DB
  return NextResponse.json({ success: true })
}
```

2. El endpoint estará disponible en:
   - `GET https://tu-dominio.up.railway.app/api/tu-endpoint`
   - `POST https://tu-dominio.up.railway.app/api/tu-endpoint`

## 📊 Servicios en Railway

Actualmente tienes:

1. **la-semilla-web** (Next.js Fullstack)
   - ✅ Frontend (páginas React)
   - ✅ Backend (API Routes)
   - ✅ Conecta a PostgreSQL

2. **Postgres** (Base de datos)
   - ✅ PostgreSQL en Railway
   - ✅ Conectado automáticamente vía `DATABASE_URL`

## ❓ ¿Cuándo Necesitarías un Backend Separado?

Solo necesitarías un backend separado si:

- Quieres usar otro lenguaje (Python, Go, etc.)
- Necesitas procesamiento muy pesado que bloquee Node.js
- Quieres escalar backend y frontend independientemente
- Necesitas microservicios complejos

**Para tu proyecto actual, Next.js Fullstack es perfecto y suficiente.**

## 🔗 Endpoints Actuales

- `GET /api/db/test` - Probar conexión a PostgreSQL

## 📝 Próximos Endpoints Recomendados

Puedes crear fácilmente:

- `POST /api/users` - Crear usuario
- `GET /api/grupos` - Obtener grupos desde DB
- `POST /api/eventos` - Crear evento
- `GET /api/dashboard` - Datos del dashboard
- etc.

Todos en `app/api/` dentro del mismo servicio.

