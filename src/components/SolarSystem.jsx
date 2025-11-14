import { useEffect, useMemo, useRef, useState } from 'react'
import { Sun, Orbit, Moon, Info } from 'lucide-react'
import { planets } from '../solarData'

export default function SolarSystem({ onSelectPlanet }) {
  const [showOrbits, setShowOrbits] = useState(true)
  const [dark, setDark] = useState(true)
  const [t, setT] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    let start = performance.now()
    const loop = (now) => {
      const dt = (now - start) / 1000
      start = now
      setT((prev) => (prev + dt) % 100000)
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const themeClass = dark ? 'bg-[#0a0f1f] text-white' : 'bg-white text-gray-900'

  return (
    <div className={`w-full min-h-[600px] rounded-2xl border border-gray-200 overflow-hidden relative ${themeClass}`}>
      <div className="absolute z-10 left-4 top-4 flex gap-2">
        <button onClick={() => setShowOrbits((v) => !v)} className="px-3 py-1.5 text-xs rounded-md bg-white/10 border border-white/20 backdrop-blur hover:bg-white/20">
          {showOrbits ? 'Sembunyikan Orbit' : 'Tampilkan Orbit'}
        </button>
        <button onClick={() => setDark((v) => !v)} className="px-3 py-1.5 text-xs rounded-md bg-white/10 border border-white/20 backdrop-blur hover:bg-white/20">
          {dark ? 'Mode Terang' : 'Mode Gelap'}
        </button>
        <button onClick={() => setT(0)} className="px-3 py-1.5 text-xs rounded-md bg-white/10 border border-white/20 backdrop-blur hover:bg-white/20">
          Reset Waktu
        </button>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Sun */}
          <button
            className="relative z-10 h-14 w-14 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 shadow-[0_0_60px_rgba(255,200,0,0.5)] border border-amber-200"
            title="Matahari"
          />

          {/* Planets */}
          {planets.map((p, idx) => {
            const angle = t * p.speed
            const x = Math.cos(angle) * p.orbit
            const y = Math.sin(angle) * p.orbit
            return (
              <div key={p.id} className="absolute left-1/2 top-1/2" style={{ transform: 'translate(-50%, -50%)' }}>
                {showOrbits && (
                  <div
                    className="rounded-full border"
                    style={{
                      width: p.orbit * 2,
                      height: p.orbit * 2,
                      borderColor: dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)'
                    }}
                  />
                )}
                <button
                  onClick={() => onSelectPlanet?.(p)}
                  className="absolute rounded-full border shadow"
                  style={{
                    left: `calc(50% + ${x}px - ${p.size / 2}px)`,
                    top: `calc(50% + ${y}px - ${p.size / 2}px)`,
                    width: p.size,
                    height: p.size,
                    background: p.color,
                    borderColor: dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)'
                  }}
                  title={p.name}
                >
                  <span className="sr-only">{p.name}</span>
                </button>

                {/* Moons */}
                {p.moons?.map((m) => {
                  const a2 = t * m.speed
                  const mx = Math.cos(a2) * m.orbit
                  const my = Math.sin(a2) * m.orbit
                  return (
                    <div key={m.id} className="absolute" style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}>
                      {showOrbits && (
                        <div
                          className="rounded-full border"
                          style={{
                            position: 'absolute',
                            transform: 'translate(-50%, -50%)',
                            width: m.orbit * 2,
                            height: m.orbit * 2,
                            borderColor: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.08)'
                          }}
                        />
                      )}
                      <div
                        className="absolute rounded-full"
                        style={{
                          transform: `translate(${mx - m.size / 2}px, ${my - m.size / 2}px)`,
                          width: m.size,
                          height: m.size,
                          background: m.color
                        }}
                        title={m.name}
                      />
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>

      <div className="absolute bottom-3 left-4 right-4 text-xs opacity-80">
        <div className="max-w-xl rounded-md border px-3 py-2 bg-black/20 backdrop-blur">
          Klik sebuah planet untuk melihat detailnya.
        </div>
      </div>
    </div>
  )
}
