"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Sparkles, Users, Heart, Smile, Shield, Shapes, ArrowRight } from "lucide-react"
import { ministries } from "@/lib/data"
import { cn } from "@/lib/utils"

const iconMap = {
  Sparkles,
  Users,
  Heart,
  Smile,
  Shield,
  Shapes,
}

export function BentoGrid() {
  return (
    <section id="horarios" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-semilla-black">
            Nuestros Ministerios
          </h2>
          <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
            Encuentra tu lugar en nuestra comunidad. Cada ministerio tiene su propio espacio y horario.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ministries.map((ministry, index) => {
            const Icon = iconMap[ministry.iconName as keyof typeof iconMap] || Users
            return (
              <motion.div
                key={ministry.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/grupos/${ministry.slug}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className={cn(
                      "relative group h-full min-h-[300px] rounded-3xl overflow-hidden cursor-pointer shadow-lg border-2 border-transparent hover:border-semilla-orange/30 hover:shadow-xl transition-all duration-300",
                      `bg-gradient-to-br ${ministry.gradient}`
                    )}
                  >
                    {/* Background Image */}
                    {ministry.image && (
                      <div className="absolute inset-0 z-0">
                        <Image
                          src={ministry.image}
                          alt={ministry.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          priority={index < 2}
                        />
                      </div>
                    )}
                    {/* Dark overlay for text readability */}
                    <div className="absolute inset-0 z-[1] bg-black/50" />
                    {/* Content */}
                    <div className="relative z-[2] p-8 flex flex-col justify-between text-white h-full">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm">
                            <Icon className="h-6 w-6 text-semilla-orange" />
                          </div>
                          <h3 className="text-3xl md:text-4xl font-bold">
                            {ministry.name}
                          </h3>
                          <motion.div
                            whileHover={{ x: 4 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <ArrowRight className="h-6 w-6" />
                          </motion.div>
                        </div>
                        <p className="text-white/90 text-lg mb-4">
                          {ministry.description}
                        </p>
                      </div>

                      {/* Schedule - Hidden by default, shown on hover */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-white/20"
                      >
                        <p className="text-sm font-semibold uppercase tracking-wider opacity-75 mb-1">
                          Horario
                        </p>
                        <p className="text-xl font-bold">{ministry.schedule}</p>
                      </motion.div>
                    </div>

                    {/* Hover overlay enhancement */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 z-[3] bg-black/10 transition-opacity"
                    />
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

