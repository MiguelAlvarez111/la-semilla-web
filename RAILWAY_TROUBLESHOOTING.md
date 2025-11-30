# 🔧 Troubleshooting Railway - Error 502

## ⚠️ IMPORTANTE: Variable PORT

**NO configures manualmente `PORT=3000` en Railway.**

Railway asigna automáticamente el puerto. Next.js detectará automáticamente la variable `PORT` que Railway proporciona.

### ✅ Configuración Correcta en Railway

**Variables de entorno a tener:**

```
NODE_ENV=production
DATABASE_URL=[referenciada desde PostgreSQL]
NEXT_PUBLIC_APP_URL=https://la-semilla-web-production.up.railway.app
```

**❌ NO agregues:**
```
PORT=3000  ← Esto causa conflictos
```

### 🔄 Cómo Corregir

1. Ve a tu servicio en Railway
2. Ve a **Variables**
3. **ELIMINA** la variable `PORT` si existe
4. Railway asignará el puerto automáticamente
5. Next.js lo detectará automáticamente

## 🚀 Comando de Inicio

El proyecto está configurado para usar:

```json
"start": "next start -H 0.0.0.0"
```

Esto hace que Next.js:
- Escuche en todas las interfaces (0.0.0.0)
- Use automáticamente `process.env.PORT` que Railway asigna

## ✅ Verificación

Después de eliminar PORT, el despliegue debería mostrar en los logs:

```
▲ Next.js 14.2.5
- Local: http://0.0.0.0:XXXX (donde XXXX es el puerto asignado por Railway)
✓ Ready in XXXms
```

