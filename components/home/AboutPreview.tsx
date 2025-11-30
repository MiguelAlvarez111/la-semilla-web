"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function AboutPreview() {
  return (
    <section className="py-32 px-4 bg-semilla-cream">
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-semilla-black leading-tight">
              Nuestra Casa
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-semilla-orange">
              Somos una familia, no un evento
            </p>
            <p className="text-lg md:text-xl text-semilla-black mb-6 leading-relaxed opacity-90 max-w-2xl">
              En La Semilla, creemos que la iglesia no es solo un lugar al que vas, 
              sino una familia a la que perteneces. Somos una comunidad donde cada 
              persona es valorada, cada historia importa y cada vida puede ser transformada 
              por el amor de Jesús.
            </p>
            <p className="text-lg md:text-xl text-semilla-black mb-12 leading-relaxed opacity-90 max-w-2xl">
              Nuestra visión es crear un espacio donde puedas crecer en tu fe, servir 
              con propósito y construir relaciones auténticas que duren toda la vida. 
              Ven y descubre lo que significa ser parte de algo más grande que tú mismo.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 rounded-full border-2 border-zinc-300 hover:border-semilla-orange hover:text-semilla-orange group"
              >
                <Link href="/soy-nuevo" className="flex items-center">
                  Conoce más de nosotros
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              initial={{ rotate: -1 }}
              whileHover={{ rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative rounded-3xl overflow-hidden shadow-xl w-full h-[550px] lg:h-[600px] scale-[1.08] lg:scale-[1.1]"
            >
              <Image
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200"
                alt="Comunidad de La Semilla"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

