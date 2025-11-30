# 🗄️ Configuración de Base de Datos PostgreSQL

Esta carpeta contiene la configuración y utilidades para conectar con PostgreSQL en Railway.

## 📋 Configuración

La conexión se configura automáticamente usando la variable de entorno `DATABASE_URL` que Railway proporciona cuando agregas un servicio PostgreSQL.

**No necesitas configurar nada manualmente** - Railway lo hace automáticamente.

## 🚀 Uso

### Importar la conexión

```typescript
import { pool, testConnection } from '@/lib/db'
// o
import pool from '@/lib/db'
```

### Probar la conexión

```typescript
import { testConnection } from '@/lib/db'

// En una función async
const isConnected = await testConnection()
if (isConnected) {
  console.log('¡Base de datos conectada!')
}
```

### Ejecutar queries

```typescript
import { pool } from '@/lib/db'

// Query simple
const result = await pool.query('SELECT * FROM users')
console.log(result.rows)

// Query con parámetros (más seguro)
const result = await pool.query(
  'SELECT * FROM users WHERE id = $1',
  [userId]
)
```

### En API Routes de Next.js

```typescript
// app/api/users/route.ts
import { NextResponse } from 'next/server'
import { pool } from '@/lib/db'

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM users')
    return NextResponse.json({ users: result.rows })
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al obtener usuarios' },
      { status: 500 }
    )
  }
}
```

## 🧪 Probar la conexión

Después de desplegar, puedes probar la conexión visitando:

```
https://tu-dominio.up.railway.app/api/db/test
```

Este endpoint te mostrará:
- ✅ Si la conexión es exitosa
- 📊 Información de la base de datos
- ⚠️ Errores si hay problemas

## 🔧 Variables de Entorno

Railway configura automáticamente:

- `DATABASE_URL`: URL completa de conexión a PostgreSQL

**No necesitas configurar esto manualmente** - Railway lo hace cuando conectas el servicio PostgreSQL.

## 📝 Notas

- El pool de conexiones se configura automáticamente
- Las conexiones se manejan eficientemente con pooling
- En producción, SSL está habilitado automáticamente
- Los errores se manejan y registran automáticamente

## 🐛 Troubleshooting

Si tienes problemas de conexión:

1. Verifica que el servicio PostgreSQL esté activo en Railway
2. Verifica que `DATABASE_URL` esté configurada en las variables de entorno
3. Revisa los logs en Railway para ver errores específicos
4. Visita `/api/db/test` para obtener información detallada

