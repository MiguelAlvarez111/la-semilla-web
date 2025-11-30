/**
 * Configuración de la base de datos PostgreSQL
 * 
 * Esta configuración lee la URL de conexión desde la variable de entorno DATABASE_URL
 * que Railway configura automáticamente cuando agregas un servicio PostgreSQL.
 */

import { Pool, PoolConfig } from 'pg'

// Parsear la DATABASE_URL de Railway
function parseDatabaseUrl(): PoolConfig {
  const databaseUrl = process.env.DATABASE_URL

  if (!databaseUrl) {
    throw new Error('DATABASE_URL no está configurada. Asegúrate de que Railway haya configurado la variable de entorno.')
  }

  // Parsear la URL de conexión de PostgreSQL
  // Formato: postgresql://user:password@host:port/database
  try {
    const url = new URL(databaseUrl)
    
    return {
      host: url.hostname,
      port: parseInt(url.port || '5432'),
      database: url.pathname.slice(1), // Remover el '/' inicial
      user: url.username,
      password: url.password,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
    }
  } catch (error) {
    throw new Error(`Error al parsear DATABASE_URL: ${error}`)
  }
}

// Configuración del pool de conexiones
const poolConfig: PoolConfig = {
  ...parseDatabaseUrl(),
  max: 20, // Máximo de conexiones en el pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
}

// Crear el pool de conexiones
export const pool = new Pool(poolConfig)

// Manejar errores del pool
pool.on('error', (err) => {
  console.error('Error inesperado en el pool de PostgreSQL:', err)
  process.exit(-1)
})

// Función para probar la conexión
export async function testConnection(): Promise<boolean> {
  try {
    const client = await pool.connect()
    const result = await client.query('SELECT NOW()')
    client.release()
    console.log('✅ Conexión a PostgreSQL exitosa:', result.rows[0].now)
    return true
  } catch (error) {
    console.error('❌ Error al conectar con PostgreSQL:', error)
    return false
  }
}

// Exportar configuración para uso directo si es necesario
export default pool

