"use client"

import { motion } from "framer-motion"
import { Group } from "@/lib/data"
import { getGroupThemeStyles } from "./group-theme"
import { cn } from "@/lib/utils"

interface GroupHeroProps {
  group: Group
}

export function GroupHero({ group }: GroupHeroProps) {
  const theme = getGroupThemeStyles(group)

  return (
    <section
      className={cn(
        "relative min-h-[60vh] flex items-center justify-center overflow-hidden",
        `bg-gradient-to-br ${theme.gradient}`
      )}
    >
      <div className="container mx-auto px-4 py-20 text-center z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={cn(
            "text-sm md:text-base font-semibold uppercase tracking-wider mb-4",
            theme.text,
            "opacity-70"
          )}
        >
          {group.tagline}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={cn(
            "text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6",
            theme.text,
            theme.glitch && "animate-glitch"
          )}
        >
          {group.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className={cn(
            "text-xl md:text-2xl max-w-3xl mx-auto",
            theme.text,
            "opacity-80"
          )}
        >
          {group.description}
        </motion.p>
      </div>

      {/* Background decoration for dreamers theme */}
      {theme.glitch && (
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
        </div>
      )}
    </section>
  )
}

