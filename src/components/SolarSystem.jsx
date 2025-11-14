import { useEffect, useRef, useState } from 'react'
import { planets } from '../solarData'

export default function SolarSystem({ onSelectPlanet, onSelectMoon }) {
  const [showOrbits, setShowOrbits] = useState(true)
  const [dark, setDark] = useState(true)
  const [t, setT] = useState(0)
  const [hovered, setHovered] = useState(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const rafRef = useRef(null)
  const wrapRef = useRef(null)

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

  const onMouseMove = (e) => {
    const rect = wrapRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setMouse({ x, y })
  }

  const themeClass = dark ? 'bg-[#0a0f1f] text-white' : 'bg-white text-gray-900'

  // Calculate tilt for semi-3D effect
  let tiltX = 0, tiltY = 0
  const rect = wrapRef.current?.getBoundingClientRect()
  if (rect) {
    const cx = rect.width / 2
    const cy = rect.height / 2
    tiltY = ((mouse.x - cx) / cx) * 6 // rotateY
    tiltX = -((mouse.y - cy) / cy) * 6 // rotateX
  }

  return (
    <div
      ref={wrapRef}
      onMouseMove={onMouseMove}
      className={`w-full min-h-[600px] rounded-2xl border border-gray-200 overflow-hidden relative ${themeClass}`}
      style={{ perspective: 1000 }}
    >
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

      <div
        className="absolute inset-0 flex items-center justify-center will-change-transform"
        style={{ transform: `translateZ(0) rotateX(${tiltX}deg) rotateY(${tiltY}deg)` }}
      >
        <div className="relative">
          {/* Sun */}
          <button
            className="relative z-10 h-14 w-14 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 shadow-[0_0_60px_rgba(255,200,0,0.5)] border border-amber-200"
            title="Matahari"
          />

          {/* Planets */}
          {planets.map((p) => {
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
                  onMouseEnter={() => setHovered(p)}
                  onMouseLeave={() => setHovered(null)}
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
                      <button
                        onClick={() => onSelectMoon?.(p, m)}
                        className="absolute rounded-full"
                        style={{
                          transform: `translate(${mx - m.size / 2}px, ${my - m.size / 2}px)`,
                          width: m.size,
                          height: m.size,
                          background: m.color,
                          boxShadow: '0 0 10px rgba(0,0,0,0.2)'
                        }}
                        title={`${m.name} (satelit ${p.name})`}
                      >
                        <span className="sr-only">{m.name}</span>
                      </button>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>

      {/* Hover Tooltip */}
      {hovered && (
        <div
          className={`pointer-events-none absolute z-20 px-3 py-2 text-xs rounded-md border shadow ${dark ? 'bg-black/70 text-white border-white/20' : 'bg-white text-gray-900 border-gray-200'}`}
          style={{ left: Math.min(mouse.x + 12, (wrapRef.current?.clientWidth || 0) - 160), top: mouse.y + 12, maxWidth: 220 }}
        >
          <div className="font-medium flex items-center gap-2">
            <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: hovered.color }} />
            {hovered.name}
          </div>
          <div className="mt-1 opacity-80">Diameter: {hovered.facts?.diameter}</div>
          <div className="opacity-80">Jarak: {hovered.facts?.jarak}</div>
        </div>
      )}

      <div className="absolute bottom-3 left-4 right-4 text-xs opacity-80">
        <div className="max-w-xl rounded-md border px-3 py-2 bg-black/20 backdrop-blur">
          Klik sebuah planet untuk melihat detailnya. Klik satelit untuk pop-up cepat.
        </div>
      </div>
    </div>
  )
}
