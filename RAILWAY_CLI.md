# 🚂 Verificar Railway desde la Consola

Esta guía te muestra cómo verificar el estado de tu proyecto en Railway desde la terminal.

## 📋 Requisitos

1. Railway CLI instalada (ya está instalada ✅)
2. Autenticación en Railway

## 🔐 Paso 1: Iniciar Sesión

Ejecuta en tu terminal:

```bash
railway login
```

Esto abrirá tu navegador para autenticarte con Railway.

## 🔗 Paso 2: Vincular el Proyecto

Una vez autenticado, vincula tu proyecto local con Railway:

```bash
railway link
```

Selecciona tu proyecto `la-semilla-web` de la lista.

## ✅ Paso 3: Verificar Estado

### Verificar información del proyecto

```bash
railway status
```

Muestra:
- Proyecto vinculado
- Servicios activos
- Variables de entorno configuradas

### Listar todos tus proyectos

```bash
railway list
```

### Ver variables de entorno

```bash
railway variables
```

Esto muestra todas las variables configuradas, incluyendo `DATABASE_URL`.

### Ver servicios

```bash
railway service
```

Muestra todos los servicios en tu proyecto (aplicación + PostgreSQL).

### Ver logs en tiempo real

```bash
railway logs
```

O los últimos 50 logs:

```bash
railway logs --tail 50
```

### Ver información del usuario

```bash
railway whoami
```

### Abrir el dashboard en el navegador

```bash
railway open
```

## 🚀 Script Automatizado

Para verificar todo de una vez, puedes usar el script incluido:

```bash
./scripts/check-railway.sh
```

Este script verifica:
- ✅ Si Railway CLI está instalada
- ✅ Si estás autenticado
- ✅ Proyectos disponibles
- ✅ Estado del proyecto vinculado
- ✅ Variables de entorno
- ✅ Servicios
- ✅ Últimos logs

## 📝 Comandos Útiles

### Conectar a la base de datos PostgreSQL

```bash
railway connect
```

Esto abre una sesión interactiva de PostgreSQL (`psql`).

### Ver variables específicas

```bash
railway variables | grep DATABASE_URL
```

### Ver logs de build

```bash
railway logs --deployment
```

### Ver logs de un servicio específico

```bash
railway logs --service <nombre-del-servicio>
```

### Redesplegar la aplicación

```bash
railway redeploy
```

### Ver información de despliegues

```bash
railway deployment
```

## 🔍 Verificar la Conexión a la Base de Datos

Una vez que tengas todo configurado, puedes verificar que la conexión funcione:

1. **Desde Railway CLI:**
   ```bash
   railway connect
   ```
   Esto te dará acceso directo a PostgreSQL.

2. **Desde la aplicación:**
   Visita: `https://la-semilla-web-production.up.railway.app/api/db/test`

## 🆘 Solución de Problemas

### "No linked project found"

Ejecuta: `railway link` y selecciona tu proyecto.

### "Unauthorized. Please login"

Ejecuta: `railway login`

### No puedo ver las variables de entorno

Asegúrate de haber vinculado el proyecto con `railway link`.

## 📚 Más Información

- [Railway CLI Docs](https://docs.railway.app/develop/cli)
- [Railway Dashboard](https://railway.app/dashboard)

