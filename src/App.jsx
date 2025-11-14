import { useState, useMemo } from 'react'
import {
  BarChart3,
  ShieldCheck,
  Zap,
  SlidersHorizontal,
  Globe,
  Lock,
  Check,
  Star,
  Menu,
  X,
} from 'lucide-react'
import SolarLanding from './components/SolarLanding'

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-500 to-blue-600 shadow-sm" />
          <span className="font-semibold text-gray-900 tracking-tight text-lg">
            Flowlytics
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#features" className="hover:text-gray-900 transition-colors">Fitur</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Harga</a>
          <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Kontak</a>
          <a href="#solar" className="hover:text-gray-900 transition-colors">Tata Surya</a>
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing" className="px-4 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900">Masuk</a>
          <a href="#pricing" className="px-4 py-2 rounded-md text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow hover:opacity-95">Coba Gratis</a>
        </div>
        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-gray-100">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-gray-200/60 bg-white">
          <nav className="px-4 py-3 grid gap-3 text-gray-700">
            <a onClick={() => setOpen(false)} href="#features" className="py-2">Fitur</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="py-2">Harga</a>
            <a onClick={() => setOpen(false)} href="#faq" className="py-2">FAQ</a>
            <a onClick={() => setOpen(false)} href="#contact" className="py-2">Kontak</a>
            <a onClick={() => setOpen(false)} href="#solar" className="py-2">Tata Surya</a>
            <a onClick={() => setOpen(false)} href="#pricing" className="py-2 px-3 rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-600 w-max">Coba Gratis</a>
          </nav>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-20 sm:pb-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-32 h-72 w-72 rounded-full blur-3xl bg-cyan-300/50" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full blur-3xl bg-blue-300/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_30%),radial-gradient(circle_at_80%_0%,rgba(34,211,238,0.08),transparent_25%)]" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-full bg-white/70 backdrop-blur border border-gray-200 text-gray-700">
              <Star className="h-3.5 w-3.5 text-yellow-500" />
              Analytics yang sederhana, wawasan yang kuat
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
              Ubah data menjadi keputusan cerdas dengan Flowlytics
            </h1>
            <p className="mt-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              Platform analitik modern yang membantu Anda memantau metrik utama, memahami perilaku pengguna, dan
              menyajikan insight secara elegan—tanpa kompleksitas.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#pricing" className="inline-flex items-center justify-center px-5 py-3 rounded-md font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow hover:opacity-95">
                Mulai Coba Gratis
              </a>
              <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-md font-medium text-cyan-700 bg-cyan-50 hover:bg-cyan-100 border border-cyan-200">
                Lihat Fitur
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 sm:grid-cols-6 gap-6 opacity-80">
              {['Nova','Arc','Zenlab','Aether','Mono','Lyra'].map((b) => (
                <div key={b} className="h-6 rounded bg-gradient-to-r from-gray-200 to-gray-100/60 text-transparent text-[0]">
                  {b}
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-br from-cyan-400/20 to-blue-500/10 rounded-3xl blur-2xl" />
            <div className="relative bg-white/80 backdrop-blur border border-gray-200 rounded-2xl shadow-xl p-4">
              <div className="h-64 sm:h-80 rounded-lg bg-gradient-to-br from-white to-gray-50 border border-gray-200 relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-r from-cyan-500 to-blue-600" />
                <div className="p-5 grid gap-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />
                  </div>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="col-span-2 rounded-md border border-gray-200 p-4 bg-white">
                      <div className="h-36 w-full rounded-md bg-gradient-to-br from-cyan-100 to-blue-100" />
                    </div>
                    <div className="grid gap-4">
                      <div className="h-16 rounded-md border border-gray-200 bg-white" />
                      <div className="h-16 rounded-md border border-gray-200 bg-white" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3 text-center">Preview dashboard Flowlytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    icon: <BarChart3 className="h-5 w-5 text-cyan-600" />, 
    title: 'Dashboard Real-time',
    desc: 'Pantau metrik utama dalam tampilan yang bersih dan responsif.'
  },
  {
    icon: <ShieldCheck className="h-5 w-5 text-cyan-600" />, 
    title: 'Privasi & Keamanan',
    desc: 'Data dienkripsi end‑to‑end dengan kontrol akses yang jelas.'
  },
  {
    icon: <SlidersHorizontal className="h-5 w-5 text-cyan-600" />, 
    title: 'Kustomisasi Fleksibel',
    desc: 'Sesuaikan widget, filter, dan layout sesuai kebutuhan.'
  },
  {
    icon: <Zap className="h-5 w-5 text-cyan-600" />, 
    title: 'Performa Cepat',
    desc: 'Ringan dan optimal untuk perangkat mobile hingga desktop.'
  },
  {
    icon: <Globe className="h-5 w-5 text-cyan-600" />, 
    title: 'Kolaborasi Mudah',
    desc: 'Bagikan tautan dan peran untuk kerja tim yang efisien.'
  },
  {
    icon: <Lock className="h-5 w-5 text-cyan-600" />, 
    title: 'Kontrol Akses',
    desc: 'Atur permission berdasarkan tim dan proyek.'
  },
]

function Features() {
  return (
    <section id="features" className="py-20 sm:py-24 bg-gradient-to-b from-transparent to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Fitur yang Anda Butuhkan</h2>
          <p className="mt-3 text-gray-600">Didesain minimalis dengan utilitas lengkap untuk pengambilan keputusan yang lebih cepat.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-cyan-50 border border-cyan-200">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const [yearly, setYearly] = useState(true)
  const price = useMemo(() => ({
    starter: yearly ? 9 : 12,
    pro: yearly ? 19 : 24,
    enterprise: yearly ? 49 : 59,
  }), [yearly])

  return (
    <section id="pricing" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Paket Harga Sederhana</h2>
          <p className="mt-3 text-gray-600">Bayar sesuai kebutuhan. Gratis coba 14 hari tanpa kartu kredit.</p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gray-200 px-2 py-1 bg-white">
            <button onClick={() => setYearly(false)} className={`px-3 py-1.5 text-sm rounded-full ${!yearly ? 'bg-cyan-600 text-white' : 'text-gray-700'}`}>Bulanan</button>
            <button onClick={() => setYearly(true)} className={`px-3 py-1.5 text-sm rounded-full ${yearly ? 'bg-cyan-600 text-white' : 'text-gray-700'}`}>Tahunan <span className="ml-1 text-[10px] align-super">(hemat)</span></button>
          </div>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <Plan name="Starter" price={price.starter} features={["Dashboard dasar","Laporan mingguan","Integrasi Google Analytics"]} cta="Mulai Gratis" highlighted={false} />
          <Plan name="Pro" price={price.pro} features={["Semua fitur Starter","Widget tak terbatas","Export CSV & PDF","Support prioritas"]} cta="Pilih Pro" highlighted={true} />
          <Plan name="Enterprise" price={price.enterprise} features={["SSO & kontrol akses","Audit log","SLA 99.9%","Akun manager khusus"]} cta="Hubungi Kami" highlighted={false} />
        </div>
      </div>
    </section>
  )
}

function Plan({ name, price, features, cta, highlighted }) {
  return (
    <div className={`relative rounded-2xl border ${highlighted ? 'border-cyan-400 shadow-lg' : 'border-gray-200 shadow-sm'} bg-white p-6 flex flex-col`}>
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-2.5 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow">Terpopuler</span>
      )}
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <div className="mt-4 flex items-end gap-1">
        <span className="text-4xl font-semibold text-gray-900">${price}</span>
        <span className="text-sm text-gray-500">/bulan</span>
      </div>
      <ul className="mt-6 space-y-3 text-sm text-gray-700">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3">
            <Check className="h-4 w-4 text-cyan-600 mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className={`mt-8 inline-flex items-center justify-center rounded-md px-4 py-2.5 font-medium ${highlighted ? 'text-white bg-gradient-to-r from-cyan-500 to-blue-600' : 'text-cyan-700 bg-cyan-50 border border-cyan-200 hover:bg-cyan-100'}`}>{cta}</a>
    </div>
  )
}

function FAQ() {
  const items = [
    {
      q: 'Apakah benar-benar gratis di 14 hari pertama?',
      a: 'Ya. Anda dapat mencoba seluruh fitur pada paket Pro selama 14 hari tanpa kartu kredit.'
    },
    {
      q: 'Bisakah saya membatalkan kapan saja?',
      a: 'Tentu. Anda bisa membatalkan kapan pun dan tidak akan dikenakan biaya pada siklus berikutnya.'
    },
    {
      q: 'Apakah data saya aman?',
      a: 'Kami menggunakan enkripsi, kontrol akses berlapis, dan audit log pada paket Enterprise.'
    },
  ]
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="py-20 sm:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Pertanyaan Umum</h2>
          <p className="mt-3 text-gray-600">Jawaban singkat untuk hal yang paling sering ditanyakan.</p>
        </div>
        <div className="mt-10 divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
          {items.map((item, i) => (
            <button key={i} onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left p-5 hover:bg-gray-50 focus:bg-gray-50">
              <div className="flex items-start justify-between gap-6">
                <p className="font-medium text-gray-900">{item.q}</p>
                <span className="text-cyan-600">{open === i ? '-' : '+'}</span>
              </div>
              {open === i && (
                <p className="mt-2 text-sm text-gray-600">{item.a}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Siap memulai?</h2>
            <p className="mt-3 text-gray-600">Kirimkan email Anda. Kami akan menghubungi dalam 1×24 jam.</p>
            <ul className="mt-6 space-y-3 text-sm text-gray-700">
              <li className="flex items-center gap-3"><Check className="h-4 w-4 text-cyan-600" />Tanpa komitmen di awal</li>
              <li className="flex items-center gap-3"><Check className="h-4 w-4 text-cyan-600" />Dukungan ramah & responsif</li>
              <li className="flex items-center gap-3"><Check className="h-4 w-4 text-cyan-600" />Dokumentasi jelas</li>
            </ul>
          </div>
          <form className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm grid gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Nama</label>
              <input type="text" placeholder="Nama lengkap" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input type="email" placeholder="email@contoh.com" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Pesan</label>
              <textarea rows={4} placeholder="Ceritakan kebutuhan Anda" className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500" />
            </div>
            <button type="button" onClick={() => alert('Terima kasih! Ini demo statis.')} className="mt-2 inline-flex items-center justify-center rounded-md px-4 py-2.5 font-medium text-white bg-gradient-to-r from-cyan-500 to-blue-600 shadow hover:opacity-95">Kirim</button>
            <p className="text-xs text-gray-500">Demo statis untuk keperluan tugas. Tombol kirim tidak mengirim data.</p>
          </form>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-cyan-500 to-blue-600" />
          <span className="font-semibold text-gray-900">Flowlytics</span>
        </div>
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Flowlytics. Semua hak cipta dilindungi.</p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <SolarLanding />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
