import { useMemo, useState } from 'react'
import { planets } from '../solarData'
import Modal from './Modal'

export default function PlanetDetail({ planet, onBack }) {
  const p = planet || planets.find((x) => x.id === 'earth')
  const items = useMemo(() => Object.entries(p.facts || {}), [p])
  const [openMoon, setOpenMoon] = useState(null)

  return (
    <div className="w-full rounded-2xl border border-gray-200 overflow-hidden bg-white">
      <div className="p-6 border-b bg-gradient-to-r from-slate-50 to-white flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full" style={{ background: p.color }} />
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
            <p className="text-sm text-gray-500">Ringkasan dan data fisik</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {p.moons?.length > 0 && (
            <button onClick={() => setOpenMoon(p.moons[0])} className="px-3 py-1.5 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700">
              Lihat Satelit
            </button>
          )}
          <button onClick={onBack} className="px-3 py-1.5 text-sm rounded-md bg-slate-100 hover:bg-slate-200">Kembali</button>
        </div>
      </div>

      <div className="p-6 grid md:grid-cols-2 gap-6">
        <div>
          <div className="relative h-56 rounded-xl bg-gradient-to-br from-white to-slate-50 border flex items-center justify-center">
            <div className="rounded-full shadow animate-spin-slow" style={{ width: 140, height: 140, background: p.color }} />
          </div>
          <p className="mt-3 text-sm text-slate-600">Animasi rotasi sederhana menggambarkan perputaran {p.name} pada porosnya.</p>
        </div>

        <div>
          <h4 className="font-medium text-slate-900 mb-3">Data Utama</h4>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            {items.map(([k, v]) => (
              <div key={k} className="rounded-lg border bg-white p-3">
                <dt className="text-slate-500">{k}</dt>
                <dd className="font-medium text-slate-900">{v}</dd>
              </div>
            ))}
          </dl>

          {p.moons?.length > 0 && (
            <div className="mt-6">
              <h4 className="font-medium text-slate-900 mb-2">Satelit Alami</h4>
              <ul className="flex flex-wrap gap-2">
                {p.moons.map((m) => (
                  <li key={m.id}>
                    <button
                      onClick={() => setOpenMoon(m)}
                      className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs hover:bg-slate-50"
                    >
                      <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: m.color }} />
                      {m.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <Modal open={!!openMoon} onClose={() => setOpenMoon(null)} title={openMoon?.name || 'Satelit'}>
        {openMoon && (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full" style={{ background: openMoon.color }} />
              <div>
                <div className="font-medium">{openMoon.name}</div>
                <div className="text-xs text-slate-500">Satelit dari {p.name}</div>
              </div>
            </div>
            <p className="text-slate-700 text-sm">Orbit: ~{openMoon.orbit} satuan relatif | Ukuran: ~{openMoon.size}</p>
            <div className="text-xs text-slate-500">Kecepatan orbit relatif: {openMoon.speed}</div>
          </div>
        )}
      </Modal>
    </div>
  )
}
