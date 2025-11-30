"use client"

import { motion } from "framer-motion"
import { Music } from "lucide-react"

export function SpotifyPlaylist() {
  return (
    <>
      {/* Divider minimalista con curva suave */}
      <div className="relative w-full h-24 overflow-hidden bg-white">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#F5F2EF"
          />
        </svg>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
          <Music className="h-5 w-5 text-zinc-400" />
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
        </div>
      </div>
      <section className="py-16 md:py-20 px-4 bg-semilla-cream">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-semilla-orange/10 mb-4"
          >
            <Music className="h-7 w-7 text-semilla-orange" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-semilla-black">
            Lo que cantamos
          </h2>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
            Disfruta de nuestra playlist de adoración. Estas son las canciones que nos conectan con Dios cada domingo.
          </p>
        </motion.div>

        {/* Glass Card with Spotify Embed */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="glass rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl max-w-3xl mx-auto hover:shadow-lg transition-all duration-200"
        >
          <div className="overflow-hidden rounded-xl md:rounded-2xl">
            <iframe
              className="w-full rounded-xl md:rounded-2xl border-0"
              src="https://open.spotify.com/embed/playlist/6cje5LMlL6GOjeDZkMLWRl?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{ minHeight: '352px', maxWidth: '100%' }}
            />
          </div>
          
          {/* Micro botón "Escuchar en Spotify" */}
          <div className="mt-6 text-center">
            <motion.a
              href="https://open.spotify.com/playlist/6cje5LMlL6GOjeDZkMLWRl"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 hover:text-semilla-orange transition-colors duration-200"
            >
              Escuchar en Spotify
              <span className="text-sm">→</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      {/* Divider suave después de Spotify */}
      <div className="relative w-full h-24 overflow-hidden bg-semilla-cream mt-20">
        <svg
          className="absolute top-0 w-full h-full rotate-180"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
        <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
        </div>
      </div>
    </section>
    </>
  )
}

