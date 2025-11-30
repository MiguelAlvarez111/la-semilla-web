"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"

const words = "Una comunidad donde Jesús transforma vidas".split(" ")

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const scrollToSchedule = () => {
    const scheduleSection = document.getElementById("horarios")
    scheduleSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Sophisticated Mesh Gradient Background */}
      <div className="absolute inset-0 z-0">
        {/* Mesh Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF7F0] to-white">
          {/* Animated gradient overlay - muy sutil */}
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.05) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(249, 115, 22, 0.08) 0%, transparent 50%)",
                "radial-gradient(circle at 50% 20%, rgba(249, 115, 22, 0.05) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.05) 0%, transparent 50%)",
              ],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
        {/* Optional: Video fallback with overlay */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-0"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-5xl"
        >
          {/* Animated Title - Responsive typography */}
          <h1 className="mb-8 text-5xl font-black tracking-tighter md:text-7xl lg:text-8xl text-semilla-black max-w-4xl mx-auto">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-3">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: wordIndex * 0.12 + letterIndex * 0.025,
                      duration: 0.6,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className="inline-block"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7, ease: "easeOut" }}
            className="mb-12 text-lg sm:text-xl md:text-2xl text-zinc-700 max-w-3xl mx-auto font-medium"
          >
            Ven y sé parte de una comunidad donde creces, sirves y floreces
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.7, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-semilla-orange hover:bg-semilla-orange-dark text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-150 w-full sm:w-auto group"
              >
                <Link href="/soy-nuevo" className="flex items-center">
                  Planifica tu visita
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/80 hover:bg-white text-zinc-900 border-zinc-300 text-lg px-8 py-6 rounded-full backdrop-blur-sm w-full sm:w-auto shadow-sm hover:shadow-lg transition-all duration-150 group"
              >
                <Link href="/grupos" className="flex items-center">
                  Ver grupos
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
        </motion.div>

        {/* Scroll Indicator - Improved bounce animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToSchedule}
            animate={{ y: [0, 12, 0] }}
            transition={{ 
              repeat: Infinity, 
              duration: 2,
              ease: "easeInOut"
            }}
            className="text-zinc-600 hover:text-zinc-900 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronDown className="h-7 w-7" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

