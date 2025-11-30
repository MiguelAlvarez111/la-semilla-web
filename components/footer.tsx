"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Youtube, BookOpen, Heart, Users, Sparkles } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/lasemilla",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/lasemilla",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://youtube.com/@lasemilla",
    },
  ]

  const pillars = [
    { title: "Biblia", description: "Nuestra base", icon: BookOpen },
    { title: "Jesús", description: "Nuestro centro", icon: Heart },
    { title: "Comunidad", description: "Nuestro estilo", icon: Users },
    { title: "Espíritu Santo", description: "Nuestro guía", icon: Sparkles },
  ]

  return (
    <>
      {/* Sección "¿Qué Creemos?" */}
      <section className="py-12 px-4 bg-white border-t border-zinc-200">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-8">
              ¿Qué Creemos?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {pillars.map((pillar, index) => {
                const Icon = pillar.icon
                return (
                  <motion.div
                    key={pillar.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-orange-50 p-3 mb-3">
                      <Icon className="h-6 w-6 text-semilla-orange" />
                    </div>
                    <h4 className="text-lg font-bold text-semilla-black mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-zinc-600">{pillar.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Principal */}
      <footer className="bg-semilla-black text-white py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Logo y Descripción */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-black tracking-tighter mb-4 text-white">
                La Semilla
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Una comunidad donde Jesús transforma vidas. Crecemos, servimos y florecemos juntos.
              </p>
            </motion.div>

            {/* Enlaces Rápidos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                Enlaces Rápidos
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-zinc-400 hover:text-semilla-orange transition-colors text-sm"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/soy-nuevo"
                    className="text-zinc-400 hover:text-semilla-orange transition-colors text-sm"
                  >
                    Soy Nuevo
                  </Link>
                </li>
                <li>
                  <Link
                    href="/grupos"
                    className="text-zinc-400 hover:text-semilla-orange transition-colors text-sm"
                  >
                    Grupos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dar"
                    className="text-zinc-400 hover:text-semilla-orange transition-colors text-sm"
                  >
                    Dar
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Redes Sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-4">
                Síguenos
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-semilla-orange hover:bg-zinc-700 transition-colors"
                      aria-label={social.name}
                    >
                      <Icon className="h-5 w-5" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-zinc-800 text-center"
          >
            <p className="text-zinc-500 text-sm">
              © {new Date().getFullYear()} La Iglesia La Semilla. Todos los derechos reservados.
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  )
}

