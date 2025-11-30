"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { Group } from "@/lib/data"
import { getGroupThemeStyles } from "./group-theme"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GroupCTAProps {
  group: Group
}

export function GroupCTA({ group }: GroupCTAProps) {
  const theme = getGroupThemeStyles(group)

  return (
    <section className={cn("py-20 px-4", theme.background)}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={cn(
            "rounded-3xl p-8 md:p-12 text-center",
            theme.cardBg,
            "backdrop-blur-sm"
          )}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#25D366]/20 mb-6"
          >
            <MessageCircle className="h-10 w-10 text-[#25D366]" />
          </motion.div>
          <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", theme.text)}>
            ¿Listo para unirte?
          </h2>
          <p
            className={cn(
              "text-lg mb-8 max-w-2xl mx-auto",
              theme.text,
              "opacity-80"
            )}
          >
            Únete a nuestro grupo de WhatsApp para mantenerte al día con las
            reuniones, eventos y actividades de {group.name}.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300"
            >
              <a
                href={group.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="h-5 w-5" />
                Unirme al grupo de WhatsApp
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
