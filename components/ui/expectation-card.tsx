"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface ExpectationCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
  className?: string
}

export function ExpectationCard({
  icon: Icon,
  title,
  description,
  delay = 0,
  className,
}: ExpectationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={cn(
        "bg-white p-8 rounded-card shadow-md hover:shadow-xl border border-gray-100 flex flex-col items-center text-center h-full transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="w-16 h-16 rounded-card bg-gradient-to-br from-semilla-orange/20 to-semilla-orange/10 flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-semilla-orange" strokeWidth={2} />
      </div>
      <h3 className="text-xl font-bold text-zinc-900 mb-4">{title}</h3>
      <p className="text-base text-zinc-600 leading-relaxed">{description}</p>
    </motion.div>
  )
}

