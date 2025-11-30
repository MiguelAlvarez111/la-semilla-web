"use client"

import { motion } from "framer-motion"
import { Group } from "@/lib/data"
import { getGroupThemeStyles } from "./group-theme"
import { cn } from "@/lib/utils"
import * as LucideIcons from "lucide-react"

interface GroupDetailsProps {
  group: Group
}

// Helper para obtener íconos dinámicamente
function getIcon(iconName: string) {
  const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.Sparkles
  return IconComponent
}

export function GroupDetails({ group }: GroupDetailsProps) {
  const theme = getGroupThemeStyles(group)

  return (
    <section className={cn("py-20 px-4", theme.background)}>
      <div className="container mx-auto max-w-6xl">
        {/* Descripción principal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            "rounded-3xl p-8 md:p-12 mb-12",
            theme.cardBg,
            "backdrop-blur-sm"
          )}
        >
          <div className="text-center mb-8">
            <p className={cn("text-sm font-semibold uppercase tracking-wider mb-2", theme.accent)}>
              {group.tagline}
            </p>
            <h2 className={cn("text-3xl md:text-4xl font-bold mb-6", theme.text)}>
              Acerca de {group.name}
            </h2>
          </div>
          <p
            className={cn(
              "text-lg leading-relaxed text-center max-w-3xl mx-auto",
              theme.text,
              "opacity-90"
            )}
          >
            {group.description}
          </p>
        </motion.div>

        {/* Qué Esperar - Grid de Tarjetas con Íconos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className={cn("text-2xl md:text-3xl font-bold mb-8 text-center", theme.text)}>
            {group.whatToExpect.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {group.whatToExpect.items.map((item, index) => {
              const IconComponent = getIcon(item.icon)
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "rounded-2xl p-6",
                    theme.cardBg,
                    "backdrop-blur-sm border",
                    theme.border,
                    "hover:scale-105 transition-transform duration-300"
                  )}
                >
                  <div className={cn(
                    "w-14 h-14 rounded-xl flex items-center justify-center mb-4",
                    theme.accent,
                    "bg-opacity-10"
                  )}>
                    <IconComponent className={cn("h-7 w-7", theme.accent)} />
                  </div>
                  <h4 className={cn("text-lg font-bold mb-2", theme.text)}>
                    {item.title}
                  </h4>
                  <p className={cn("text-sm leading-relaxed", theme.text, "opacity-80")}>
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Nuestros Pilares/Valores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className={cn(
            "rounded-3xl p-8 md:p-12",
            theme.cardBg,
            "backdrop-blur-sm"
          )}
        >
          <h3 className={cn("text-2xl md:text-3xl font-bold mb-8 text-center", theme.text)}>
            {group.pillars.title}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {group.pillars.items.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "p-6 rounded-xl border",
                  theme.border,
                  "bg-opacity-50"
                )}
              >
                <h4 className={cn("text-xl font-bold mb-3", theme.accent)}>
                  {pillar.title}
                </h4>
                <p className={cn("leading-relaxed", theme.text, "opacity-90")}>
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        {group.faqs && group.faqs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={cn(
              "rounded-3xl p-8 md:p-12 mt-12",
              theme.cardBg,
              "backdrop-blur-sm"
            )}
          >
            <h3 className={cn("text-2xl md:text-3xl font-bold mb-8 text-center", theme.text)}>
              Preguntas Frecuentes
            </h3>
            <div className="space-y-6 max-w-3xl mx-auto">
              {group.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={cn(
                    "p-6 rounded-xl border",
                    theme.border,
                    "bg-opacity-30"
                  )}
                >
                  <h4 className={cn("text-lg font-bold mb-2", theme.text)}>
                    {faq.question}
                  </h4>
                  <p className={cn("leading-relaxed", theme.text, "opacity-80")}>
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
