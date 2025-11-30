/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['i.scdn.co', 'embed.spotify.com', 'images.unsplash.com'],
  },
  // Configuración para Railway
  output: 'standalone',
}

module.exports = nextConfig

