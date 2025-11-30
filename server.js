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

console.log(`Starting Next.js server on ${hostname}:${port} (NODE_ENV=${process.env.NODE_ENV})`)

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('internal server error')
    }
  }).listen(port, hostname, (err) => {
    if (err) {
      console.error('Failed to start server:', err)
      throw err
    }
    console.log(`✓ Ready on http://${hostname}:${port}`)
  })
}).catch((err) => {
  console.error('Failed to prepare Next.js app:', err)
  process.exit(1)
})

