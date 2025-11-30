/**
 * Servidor personalizado para Railway
 * Asegura que Next.js escuche en el puerto correcto asignado por Railway
 * y en todas las interfaces (0.0.0.0) para que Railway pueda conectarse
 */

const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = '0.0.0.0' // Escuchar en todas las interfaces
const port = parseInt(process.env.PORT || '3000', 10)

console.log(`🚀 Starting Next.js server...`)
console.log(`   Hostname: ${hostname}`)
console.log(`   Port: ${port}`)
console.log(`   NODE_ENV: ${process.env.NODE_ENV}`)
console.log(`   DATABASE_URL: ${process.env.DATABASE_URL ? '✅ Configurada' : '❌ No configurada'}`)

// Next.js no debe iniciar su propio servidor cuando usamos uno personalizado
const app = next({ 
  dev,
  // No pasar hostname ni port a Next.js - lo manejamos nosotros
})

const handle = app.getRequestHandler()

app.prepare().then(() => {
  console.log('✅ Next.js app prepared successfully')
  
  const server = createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('❌ Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  })
  
  server.on('error', (err) => {
    console.error('❌ Server error:', err)
    process.exit(1)
  })
  
  server.listen(port, hostname, () => {
    console.log(`✅ Server ready on http://${hostname}:${port}`)
    console.log(`🌐 Application should be accessible now`)
  })
  
  // Graceful shutdown
  process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully')
    server.close(() => {
      console.log('Server closed')
      process.exit(0)
    })
  })
}).catch((err) => {
  console.error('❌ Failed to prepare Next.js app:', err)
  console.error(err.stack)
  process.exit(1)
})

