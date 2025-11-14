import { useState } from 'react'
import SolarSystem from './SolarSystem'
import PlanetDetail from './PlanetDetail'
import Encyclopedia from './Encyclopedia'

export default function SolarLanding() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="solar" className="py-20 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Ensiklopedia Sistem Tata Surya</h2>
          <p className="mt-3 text-slate-600">Mode interaktif untuk menjelajah orbit, planet, dan satelit—tanpa library 3D berat.</p>
        </div>

        <div className="mt-10">
          <SolarSystem onSelectPlanet={setSelected} />
        </div>

        {selected && (
          <div className="mt-10">
            <PlanetDetail planet={selected} onBack={() => setSelected(null)} />
          </div>
        )}

        <div className="mt-10">
          <Encyclopedia />
        </div>
      </div>
    </section>
  )
}
