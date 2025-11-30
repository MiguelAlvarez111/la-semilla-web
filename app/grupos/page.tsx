import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { groups } from "@/lib/data"
import { Sparkles, Users, Heart, Smile, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const iconMap = {
  dreamers: Sparkles,
  champions: Users,
  mujeres: Heart,
  kids: Smile,
}

export default function GruposPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Nuestros Grupos
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encuentra tu lugar en nuestra comunidad. Cada grupo tiene su propia identidad y propósito.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {groups.map((group) => {
              const Icon = iconMap[group.theme as keyof typeof iconMap] || Users
              return (
                <Link
                  key={group.id}
                  href={`/grupos/${group.slug}`}
                  className="group"
                >
                  <div className="h-full rounded-2xl border-2 border-zinc-200 p-8 hover:border-semilla-orange transition-all duration-300 hover:shadow-xl">
                    <div className="flex items-start justify-between mb-6">
                      <Icon className="h-12 w-12 text-semilla-orange" />
                      <ArrowRight className="h-6 w-6 text-zinc-400 group-hover:text-semilla-orange transition-colors" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3">{group.name}</h2>
                    <p className="text-muted-foreground mb-4">
                      {group.shortDescription}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{group.day}</span>
                      <span>•</span>
                      <span>{group.time}</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

