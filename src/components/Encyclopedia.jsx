import { useState } from 'react'
import { encyclopediaSections } from '../solarData'

export default function Encyclopedia() {
  const [active, setActive] = useState(encyclopediaSections[0].id)
  const current = encyclopediaSections.find((s) => s.id === active)

  return (
    <div className="w-full rounded-2xl border border-gray-200 overflow-hidden bg-white">
      <div className="grid md:grid-cols-4">
        <aside className="md:col-span-1 border-r bg-slate-50">
          <nav className="p-4 space-y-1">
            {encyclopediaSections.map((s) => (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`w-full text-left px-3 py-2 rounded-md text-sm ${active === s.id ? 'bg-white border' : 'hover:bg-white/60'} border-slate-200`}
              >
                {s.title}
              </button>
            ))}
          </nav>
        </aside>
        <article className="md:col-span-3 p-6">
          <h3 className="text-xl font-semibold text-slate-900">{current.title}</h3>
          <p className="mt-3 text-slate-700 leading-relaxed">{current.content}</p>
        </article>
      </div>
    </div>
  )
}
