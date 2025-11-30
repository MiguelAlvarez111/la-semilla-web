/**
 * API Route para obtener grupos desde la base de datos
 * 
 * Endpoint: GET /api/grupos
 * 
 * Este endpoint obtiene todos los grupos desde PostgreSQL
 */

import { NextResponse } from 'next/server'
import { pool } from '@/lib/db'

export async function GET() {
  try {
    // Por ahora retornamos los grupos mock, pero puedes cambiarlo para consultar la DB
    // Ejemplo de cómo sería con DB:
    // const result = await pool.query('SELECT * FROM grupos ORDER BY nombre')
    // return NextResponse.json({ grupos: result.rows })
    
    // Por ahora retornamos un mensaje indicando que está listo para conectar con DB
    return NextResponse.json({
      message: 'Endpoint de grupos listo',
      note: 'Puedes conectar esto con tu tabla de grupos en PostgreSQL',
      example: {
        query: 'SELECT * FROM grupos',
        action: 'Una vez que crees la tabla, descomenta el código en este archivo'
      }
    })
  } catch (error) {
    console.error('Error al obtener grupos:', error)
    return NextResponse.json(
      { 
        error: 'Error al obtener grupos',
        details: error instanceof Error ? error.message : 'Error desconocido'
      },
      { status: 500 }
    )
  }
}

