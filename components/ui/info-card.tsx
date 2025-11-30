"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface InfoCardProps {
  icon: LucideIcon
  title: string
  subtitle?: string
  href?: string
  delay?: number
  className?: string
}

export function InfoCard({
  icon: Icon,
  title,
  subtitle,
  href,
  delay = 0,
  className,
}: InfoCardProps) {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      className={cn(
        "bg-white rounded-card shadow-xl p-10 text-center h-full flex flex-col items-center justify-center hover:translate-y-[-5px] transition-all cursor-default",
        className
      )}
    >
      <div className="w-16 h-16 rounded-full bg-semilla-orange/10 flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-semilla-orange" strokeWidth={1.5} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{title}</h3>
      {subtitle && (
        <p className="text-base text-zinc-600 font-medium">{subtitle}</p>
      )}
      {href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-semilla-orange hover:text-semilla-orange-dark font-medium transition-colors group"
        >
          Escríbenos
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      )}
    </motion.div>
  )

  return content
}

