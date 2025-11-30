import { Navbar } from "@/components/navbar"
import { Heart, CreditCard, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { paymentMethods, whyWeGive } from "@/lib/data"
import * as LucideIcons from "lucide-react"

// Helper para obtener íconos dinámicamente
function getIcon(iconName: string) {
  const IconComponent = (LucideIcons as any)[iconName] || LucideIcons.CreditCard
  return IconComponent
}

export default function DarPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-semilla-orange/10 mb-6">
              <Heart className="h-10 w-10 text-semilla-orange" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Dar es Parte de Nuestra Adoración
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tu generosidad nos permite impactar vidas, servir a nuestra comunidad y extender el amor de Dios.
            </p>
          </div>

          {/* Métodos de Pago - Tarjetas Visuales Mejoradas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Métodos de Pago</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {paymentMethods.map((method) => {
                const IconComponent = getIcon(method.icon)
                return (
                  <div
                    key={method.id}
                    className="bg-gradient-to-br from-semilla-orange/10 to-semilla-orange/5 rounded-2xl p-8 border border-semilla-orange/20 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-semilla-orange/20 flex items-center justify-center mb-4">
                      <IconComponent className="h-7 w-7 text-semilla-orange" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{method.name}</h3>
                    <p className="text-muted-foreground mb-6 text-sm">
                      {method.description}
                    </p>
                    <div className="bg-white/70 rounded-lg p-4 font-mono text-sm space-y-2">
                      {method.details.bank && (
                        <>
                          <p className="font-semibold text-gray-700">Banco:</p>
                          <p className="text-gray-900">{method.details.bank}</p>
                        </>
                      )}
                      {method.details.account && (
                        <>
                          <p className="font-semibold text-gray-700">Cuenta:</p>
                          <p className="text-gray-900">{method.details.account}</p>
                        </>
                      )}
                      {method.details.accountType && (
                        <>
                          <p className="font-semibold text-gray-700">Tipo:</p>
                          <p className="text-gray-900">{method.details.accountType}</p>
                        </>
                      )}
                      {method.details.accountName && (
                        <>
                          <p className="font-semibold text-gray-700">A nombre de:</p>
                          <p className="text-gray-900">{method.details.accountName}</p>
                        </>
                      )}
                      {method.details.phone && (
                        <>
                          <p className="font-semibold text-gray-700">{method.details.platform}:</p>
                          <p className="text-gray-900">{method.details.phone}</p>
                        </>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Sección ¿Por qué damos? */}
          <div className="bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-3xl p-8 md:p-12 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              {whyWeGive.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyWeGive.items.map((item, index) => {
                const IconComponent = getIcon(item.icon)
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-200 hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-14 h-14 rounded-xl bg-semilla-orange/10 flex items-center justify-center mb-4">
                      <IconComponent className="h-7 w-7 text-semilla-orange" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Mensaje Bíblico */}
          <div className="bg-zinc-50 rounded-2xl p-8 text-center border border-zinc-200">
            <p className="text-lg text-muted-foreground mb-6 italic">
              &ldquo;Cada uno debe dar según lo que haya decidido en su corazón, no de mala gana ni por obligación, porque Dios ama al que da con alegría.&rdquo;
            </p>
            <p className="font-semibold text-gray-900">— 2 Corintios 9:7</p>
          </div>
        </div>
      </div>
    </main>
  )
}
