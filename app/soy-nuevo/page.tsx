"use client"

import { Navbar } from "@/components/navbar"
import { soyNuevoData } from "@/lib/data"
import {
  Calendar,
  MapPin,
  MessageCircle,
  ArrowRight,
  Music,
  BookOpen,
  Baby,
  Car,
  Shirt,
  Heart,
  Clock,
  Navigation,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { InfoCard } from "@/components/ui/info-card"
import { ExpectationCard } from "@/components/ui/expectation-card"
import { SectionWrapper } from "@/components/ui/section-wrapper"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

// Icon mapping
const iconMap: Record<string, any> = {
  Calendar,
  Clock,
  MapPin,
  MessageCircle,
  Music,
  BookOpen,
  Baby,
  Car,
  Shirt,
  Heart,
}

// Descriptive text for each expectation
const expectationDescriptions: Record<string, string> = {
  "Música contemporánea":
    "Disfruta de adoración moderna y significativa que conecta con tu corazón.",
  "Ambiente amigable y cercano":
    "Un lugar donde todos son bienvenidos y puedes ser tú mismo.",
  "Duración aprox. 90 min":
    "Un servicio completo pero conciso, respetando tu tiempo.",
  "Gente amable y servicial":
    "Conoce personas genuinas que se preocupan por tu bienestar.",
  "Mensaje práctico":
    "Enseñanzas bíblicas aplicables a tu vida diaria.",
  "Parqueadero disponible":
    "Estacionamiento seguro y accesible para tu comodidad.",
}

export default function SoyNuevoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={soyNuevoData.hero.image}
            alt="Comunidad de La Semilla"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center py-40 md:py-48">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter-custom mb-8 text-white leading-hero">
              {soyNuevoData.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-10 font-medium">
              {soyNuevoData.hero.subtitle}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="primary" size="hero" className="group" asChild>
                <a
                  href="https://wa.me/573001234567?text=Hola,%20quiero%20planificar%20mi%20visita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  Planifica tu visita
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Floating Info Cards */}
      <section className="container mx-auto -mt-16 relative z-20 px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          <InfoCard
            icon={Calendar}
            title="Domingo"
            subtitle="10:00 AM"
            delay={0.1}
          />
          <InfoCard
            icon={MapPin}
            title="Sede Principal"
            subtitle="Cl. 15 #N°2-16, la playa"
            delay={0.2}
          />
          <InfoCard
            icon={MessageCircle}
            title="Contacto"
            href="https://wa.me/573001234567?text=Hola,%20quiero%20más%20información"
            delay={0.3}
          />
        </div>
      </section>

      {/* Section: ¿Qué Esperar? */}
      <SectionWrapper spacing="standard" background="zinc-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-zinc-900">
              ¿Qué esperar?
            </h2>
            <p className="text-xl text-zinc-600 max-w-3xl mx-auto font-medium">
              Una experiencia sencilla, clara y cercana. Esto es lo que vivirás:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {soyNuevoData.expectations.map((expectation, index) => {
              const IconComponent = iconMap[expectation.icon]
              return (
                <ExpectationCard
                  key={expectation.title}
                  icon={IconComponent}
                  title={expectation.title}
                  description={
                    expectationDescriptions[expectation.title] ||
                    "Una experiencia única diseñada para ti."
                  }
                  delay={index * 0.1}
                />
              )
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Location Section */}
      <SectionWrapper spacing="standard" background="white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight text-zinc-900">
              Nuestra Ubicación
            </h2>
            <p className="text-xl text-zinc-600 max-w-md mx-auto font-medium mb-2">
              Sede Principal – La Semilla
            </p>
            <p className="text-lg text-zinc-500 max-w-md mx-auto">
              Cl. 15 #N°2-16, la playa – Cúcuta
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/50"
          >
            <iframe
              src={soyNuevoData.location.mapUrl}
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[500px]"
              title="Ubicación de La Semilla"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="outline" size="default" className="rounded-full" asChild>
              <a
                href={soyNuevoData.location.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Abrir en Maps
              </a>
            </Button>
            <Button variant="outline" size="default" className="rounded-full" asChild>
              <a
                href={soyNuevoData.location.directionsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Navigation className="mr-2 h-4 w-4" />
                Indicaciones
              </a>
            </Button>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* Kids & Clothes Block */}
      <SectionWrapper spacing="standard" background="zinc-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Column Left: Kids */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-orange-50/80 to-orange-100/40 rounded-3xl p-8 overflow-hidden shadow-lg border border-orange-100/50"
            >
              <div className="relative w-full h-64 md:h-80 rounded-card overflow-hidden mb-8 shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200"
                  alt="Niños en La Semilla Kids"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-16 h-16 rounded-card bg-gradient-to-br from-semilla-orange/20 to-semilla-orange/10 flex items-center justify-center mb-6">
                <Baby className="h-8 w-8 text-semilla-orange" strokeWidth={2} />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-zinc-900 tracking-tight">
                {soyNuevoData.kids.title}
              </h2>
              <p className="text-base text-zinc-700 leading-relaxed mb-6">
                {soyNuevoData.kids.description}
              </p>
              <Link
                href="/grupos/kids"
                className="inline-flex items-center text-semilla-orange hover:text-semilla-orange-dark font-medium transition-colors group"
              >
                Conoce La Semilla Kids
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            {/* Column Right: Clothes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 rounded-card bg-gradient-to-br from-semilla-orange/20 to-semilla-orange/10 flex items-center justify-center mb-6">
                <Shirt className="h-8 w-8 text-semilla-orange" strokeWidth={2} />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-5 tracking-tight text-zinc-900">
                {soyNuevoData.clothes.title}
              </h2>
              <p className="text-base text-zinc-600 leading-relaxed">
                {soyNuevoData.clothes.description}
              </p>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Final CTA */}
      <SectionWrapper spacing="standard" background="white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-zinc-50 to-white rounded-3xl p-12 md:p-20 text-center shadow-2xl border border-gray-100"
          >
            <p className="text-xl text-zinc-600 mb-6 font-medium">
              Nos encantaría verte este domingo.
            </p>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-12 tracking-tight text-zinc-900">
              ¿Listo para visitarnos?
            </h2>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="primary"
                  size="hero"
                  className="w-full sm:w-auto group"
                  asChild
                >
                  <a
                    href="https://wa.me/573001234567?text=Hola,%20quiero%20planificar%20mi%20visita"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Planifica tu visita
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  size="hero"
                  className="bg-white border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 text-zinc-700 hover:text-zinc-900 rounded-full w-full sm:w-auto group"
                  asChild
                >
                  <Link href="/grupos" className="flex items-center justify-center">
                    Explorar Grupos
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
    </main>
  )
}
