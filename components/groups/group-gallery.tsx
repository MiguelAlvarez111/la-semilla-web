"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Group } from "@/lib/data"
import { getGroupThemeStyles } from "./group-theme"
import { cn } from "@/lib/utils"

interface GroupGalleryProps {
  group: Group
}

// Mock images - Replace with actual images
const mockImages = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
  "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
  "https://images.unsplash.com/photo-1543269664-7eef42226a21?w=800",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
]

export function GroupGallery({ group }: GroupGalleryProps) {
  const theme = getGroupThemeStyles(group)

  return (
    <section className={cn("py-20 px-4", theme.background)}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className={cn("text-3xl md:text-4xl font-bold", theme.text)}>
            Nuestra Comunidad
          </h2>
        </motion.div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {mockImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="mb-6 break-inside-avoid"
            >
              <div className="relative overflow-hidden rounded-2xl w-full aspect-[4/3]">
                <Image
                  src={image}
                  alt={`${group.name} - Foto ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

