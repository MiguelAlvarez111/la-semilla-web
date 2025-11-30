# 🚂 Guía de Despliegue en Railway

Esta guía te ayudará a desplegar tu aplicación Next.js y una base de datos PostgreSQL en Railway.

## 📋 Requisitos Previos

1. Cuenta en [Railway](https://railway.app/) (puedes registrarte con GitHub)
2. Repositorio en GitHub conectado (ya está hecho ✅)

## 🚀 Pasos para Desplegar

### 1. Crear un Nuevo Proyecto en Railway

1. Ve a [Railway Dashboard](https://railway.app/dashboard)
2. Haz clic en **"New Project"**
3. Selecciona **"Deploy from GitHub repo"**
4. Conecta tu cuenta de GitHub si aún no lo has hecho
5. Selecciona el repositorio: `MiguelAlvarez111/la-semilla-web`

### 2. Agregar Servicio de Base de Datos PostgreSQL

1. En tu proyecto de Railway, haz clic en **"+ New"**
2. Selecciona **"Database"**
3. Elige **"Add PostgreSQL"**
4. Railway creará automáticamente la base de datos y configurará la variable de entorno `DATABASE_URL`

### 3. ⭐ Configurar Dominio Público INMEDIATAMENTE (Paso Crítico)

**⚠️ IMPORTANTE:** Configura el dominio público ANTES del primer despliegue para tener tu URL lista de inmediato.

#### Opción A: Dominio Automático de Railway (Recomendado)

1. Selecciona el servicio de tu aplicación Next.js (no el de PostgreSQL)
2. Ve a la pestaña **"Settings"**
3. Bajo la sección **"Networking"**, haz clic en **"Generate Domain"**
4. Railway generará automáticamente una URL pública como: `la-semilla-web-production.up.railway.app`
5. **¡Copia y guarda esta URL inmediatamente!** Esta será tu URL pública permanente
6. **IMPORTANTE:** Esta URL es estable y no cambiará mientras el servicio esté activo

**Formato de URL típico:**
```
https://la-semilla-web-production.up.railway.app
```

#### Opción B: Dominio Personalizado (Opcional - Más adelante)

Si tienes un dominio personalizado (ej: `lasemilla.com`):

1. En el servicio de tu aplicación, ve a **"Settings"** → **"Networking"**
2. Haz clic en **"Custom Domain"**
3. Ingresa tu dominio (ej: `lasemilla.com` o `www.lasemilla.com`)
4. Railway te dará instrucciones para configurar los registros DNS:
   - Agrega un registro **CNAME** que apunte a tu dominio de Railway
   - O agrega un registro **A** con la IP proporcionada
5. Espera la verificación (puede tardar unos minutos)
6. Una vez verificado, tu dominio personalizado estará activo

**Nota:** El dominio de Railway (`*.up.railway.app`) es **permanente y estable**. Es perfecto para empezar y puedes agregar un dominio personalizado después sin problemas.

### 4. Configurar Variables de Entorno

1. Selecciona el servicio de tu aplicación Next.js
2. Ve a la pestaña **"Variables"**
3. Agrega las siguientes variables:

   ```
   NODE_ENV=production
   PORT=3000
   ```

   **Nota:** Railway detectará automáticamente que es una aplicación Next.js y configurará el puerto.

4. **Opcional - Configurar URL pública en variables:**
   - Si necesitas usar la URL pública dentro de tu aplicación Next.js
   - Agrega: `NEXT_PUBLIC_APP_URL=https://tu-dominio.up.railway.app`
   - Reemplaza `tu-dominio.up.railway.app` con la URL que copiaste en el paso anterior

### 5. Conectar la Base de Datos a la Aplicación

1. En el servicio de PostgreSQL, ve a la pestaña **"Variables"**
2. Copia la variable `DATABASE_URL` (se crea automáticamente)
3. En el servicio de tu aplicación Next.js, ve a **"Variables"** → **"Reference Variable"**
4. Selecciona el servicio PostgreSQL y la variable `DATABASE_URL`
5. Esto conectará automáticamente tu aplicación con la base de datos

### 6. Esperar el Despliegue

1. Railway comenzará a construir y desplegar tu aplicación automáticamente
2. Puedes ver el progreso en la pestaña **"Deployments"**
3. Una vez completado, tu aplicación estará disponible en la URL pública

## 🔍 Verificar el Despliegue y tu URL Pública

1. Una vez que el despliegue esté completo, ve a la pestaña **"Settings"** de tu servicio
2. Bajo **"Networking"**, encontrarás tu **URL pública**
3. **Copia y guarda esta URL** - es tu enlace permanente
4. Visita la URL en tu navegador para verificar que todo funciona
5. Deberías ver tu aplicación funcionando correctamente
6. Revisa los logs en Railway si hay algún problema

**Para encontrar tu URL en cualquier momento:**
- Ve a tu servicio en Railway → **Settings** → **Networking**
- Ahí encontrarás tu dominio público listado

**Tip:** Guarda esta URL en un documento o compártela con tu equipo inmediatamente después de obtenerla.

## 📊 Gestión de la Base de Datos

### Acceder a PostgreSQL

1. En Railway, selecciona el servicio PostgreSQL
2. Ve a la pestaña **"Connect"**
3. Ahí encontrarás:
   - **Host:** Para conexiones externas
   - **Port:** Puerto de la base de datos
   - **Database:** Nombre de la base de datos
   - **User:** Usuario
   - **Password:** Contraseña

### Conectar desde Herramientas Externas

Puedes usar herramientas como:
- **pgAdmin**
- **DBeaver**
- **TablePlus**
- **psql** (línea de comandos)

Usa la `DATABASE_URL` que Railway proporciona en las variables de entorno.

## 🔧 Solución de Problemas

### La aplicación no inicia

1. Revisa los logs en Railway
2. Verifica que todas las variables de entorno estén configuradas
3. Asegúrate de que el comando `npm start` funcione localmente

### Error de conexión a la base de datos

1. Verifica que la variable `DATABASE_URL` esté referenciada correctamente
2. Asegúrate de que el servicio PostgreSQL esté activo
3. Revisa los logs de ambos servicios

### Build falla

1. Revisa los logs de build en Railway
2. Asegúrate de que todas las dependencias estén en `package.json`
3. Verifica que no haya errores de TypeScript

## 💰 Planes de Railway

- **Hobby Plan:** $5/mes - Incluye $5 de créditos gratuitos
- **Pro Plan:** $20/mes - Para uso comercial

Railway ofrece $5 de créditos gratuitos mensuales para empezar.

## 🔄 Actualizaciones Automáticas

Railway desplegará automáticamente cada vez que hagas push a la rama `main` en GitHub. Para desactivar esto, ve a **Settings** → **"Deploy from GitHub"**.

## 📝 Próximos Pasos

Una vez desplegado, puedes:

1. Configurar un dominio personalizado en Railway
2. Configurar CI/CD adicional si es necesario
3. Agregar más servicios (Redis, etc.) si los necesitas
4. Configurar backups de la base de datos

## 🆘 Soporte

- [Documentación de Railway](https://docs.railway.app/)
- [Discord de Railway](https://discord.gg/railway)
- [Status de Railway](https://status.railway.app/)

---

¡Tu aplicación debería estar funcionando ahora! 🎉

