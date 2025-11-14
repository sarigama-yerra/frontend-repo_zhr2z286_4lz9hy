import { useState } from 'react'
import SolarSystem from './SolarSystem'
import PlanetDetail from './PlanetDetail'
import Encyclopedia from './Encyclopedia'
import Modal from './Modal'

export default function SolarLanding() {
  const [selected, setSelected] = useState(null)
  const [openMoon, setOpenMoon] = useState(null)
  const [parentPlanet, setParentPlanet] = useState(null)

  const handleSelectMoon = (planet, moon) => {
    setParentPlanet(planet)
    setOpenMoon(moon)
  }

  return (
    <section id="solar" className="py-20 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Ensiklopedia Sistem Tata Surya</h2>
          <p className="mt-3 text-slate-600">Mode interaktif untuk menjelajah orbit, planet, dan satelit—tanpa library 3D berat.</p>
        </div>

        <div className="mt-10">
          <SolarSystem onSelectPlanet={setSelected} onSelectMoon={handleSelectMoon} />
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

      <Modal open={!!openMoon} onClose={() => setOpenMoon(null)} title={openMoon?.name || 'Satelit'}>
        {openMoon && (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full" style={{ background: openMoon.color }} />
              <div>
                <div className="font-medium">{openMoon.name}</div>
                {parentPlanet && (
                  <div className="text-xs text-slate-500">Satelit dari {parentPlanet.name}</div>
                )}
              </div>
            </div>
            <p className="text-slate-700 text-sm">Orbit: ~{openMoon.orbit} satuan relatif | Ukuran: ~{openMoon.size}</p>
            <div className="text-xs text-slate-500">Kecepatan orbit relatif: {openMoon.speed}</div>
          </div>
        )}
      </Modal>
    </section>
  )
}
