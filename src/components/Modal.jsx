import { useEffect } from 'react'

export default function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose?.()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-hidden="true"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        className="relative mx-4 w-full max-w-lg rounded-2xl border border-white/10 bg-white text-slate-900 shadow-xl dark:bg-slate-900 dark:text-white"
      >
        <div className="flex items-center justify-between border-b px-5 py-3 dark:border-white/10 border-slate-200">
          <h3 className="text-base font-semibold tracking-tight">{title}</h3>
          <button
            onClick={onClose}
            className="inline-flex h-8 items-center justify-center rounded-md px-2 text-sm hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="Tutup"
          >
            ✕
          </button>
        </div>
        <div className="px-5 py-4 text-sm">{children}</div>
      </div>
    </div>
  )
}
