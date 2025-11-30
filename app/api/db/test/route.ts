/**
 * API Route para probar la conexión a la base de datos
 * 
 * Endpoint: GET /api/db/test
 * 
 * Este endpoint verifica que la conexión a PostgreSQL esté funcionando correctamente.
 * Útil para debugging y verificar que Railway haya configurado correctamente DATABASE_URL.
 */

import { NextResponse } from 'next/server'
import { pool, testConnection } from '@/lib/db'

export async function GET() {
  try {
    // Probar la conexión
    const isConnected = await testConnection()
    
    if (!isConnected) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'No se pudo conectar a la base de datos',
          databaseUrl: process.env.DATABASE_URL ? 'Configurada' : 'No configurada'
        },
        { status: 500 }
      )
    }

    // Ejecutar una query simple para verificar
    const result = await pool.query('SELECT version() as version, NOW() as current_time')
    
    return NextResponse.json({
      success: true,
      message: 'Conexión a PostgreSQL exitosa',
      database: {
        version: result.rows[0].version,
        currentTime: result.rows[0].current_time,
      },
      connectionInfo: {
        host: pool.options.host,
        port: pool.options.port,
        database: pool.options.database,
        user: pool.options.user,
      }
    })
  } catch (error) {
    console.error('Error al probar la base de datos:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Error desconocido',
        details: process.env.NODE_ENV === 'development' 
          ? (error instanceof Error ? error.stack : undefined)
          : undefined
      },
      { status: 500 }
    )
  }
}

