/**
 * Punto de entrada para las utilidades de base de datos
 * 
 * Importa este archivo para usar la conexión a PostgreSQL en tu aplicación
 */

export { pool, testConnection } from './config'
export { default } from './config'

// Ejemplos de uso:
// 
// import { pool, testConnection } from '@/lib/db'
// 
// // Probar conexión
// await testConnection()
// 
// // Ejecutar una query
// const result = await pool.query('SELECT * FROM users')
// console.log(result.rows)

