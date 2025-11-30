/**
 * Configuración de la base de datos PostgreSQL
 * 
 * Esta configuración lee la URL de conexión desde la variable de entorno DATABASE_URL
 * que Railway configura automáticamente cuando agregas un servicio PostgreSQL.
 * 
 * La inicialización es lazy para evitar errores durante el build/inicio de Next.js
 */

import { Pool, PoolConfig } from 'pg'

let poolInstance: Pool | null = null

// Parsear la DATABASE_URL de Railway
function parseDatabaseUrl(): PoolConfig | null {
  const databaseUrl = process.env.DATABASE_URL

  if (!databaseUrl) {
    console.warn('⚠️ DATABASE_URL no está configurada. La funcionalidad de base de datos estará deshabilitada.')
    return null
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
    console.error('❌ Error al parsear DATABASE_URL:', error)
    return null
  }
}

// Obtener o crear el pool de conexiones (lazy initialization)
function getPool(): Pool | null {
  if (!poolInstance) {
    const poolConfig = parseDatabaseUrl()
    
    if (!poolConfig) {
      return null
    }

    const config: PoolConfig = {
      ...poolConfig,
      max: 20, // Máximo de conexiones en el pool
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 10000, // Aumentado para Railway
    }

    try {
      poolInstance = new Pool(config)

      // Manejar errores del pool sin matar la aplicación
      poolInstance.on('error', (err) => {
        console.error('❌ Error inesperado en el pool de PostgreSQL:', err)
        // NO hacer process.exit() - permite que la app siga funcionando
      })
    } catch (error) {
      console.error('❌ Error al crear el pool de PostgreSQL:', error)
      return null
    }
  }

  return poolInstance
}

// Exportar función para obtener el pool
export function getDbPool(): Pool {
  const pool = getPool()
  if (!pool) {
    throw new Error('DATABASE_URL no está configurada. No se puede conectar a PostgreSQL.')
  }
  return pool
}

// Exportar el pool como función para compatibilidad
export const pool = {
  connect: async () => {
    const p = getPool()
    if (!p) throw new Error('DATABASE_URL no está configurada')
    return p.connect()
  },
  query: async (text: string, params?: any[]) => {
    const p = getPool()
    if (!p) throw new Error('DATABASE_URL no está configurada')
    return p.query(text, params)
  },
  end: async () => {
    const p = getPool()
    if (p) return p.end()
  },
  get options() {
    const p = getPool()
    return p?.options || {}
  }
} as Pool

// Función para probar la conexión
export async function testConnection(): Promise<boolean> {
  try {
    const p = getPool()
    if (!p) {
      console.warn('⚠️ DATABASE_URL no está configurada, no se puede probar la conexión')
      return false
    }
    const client = await p.connect()
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

