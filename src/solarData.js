export const planets = [
  {
    id: 'mercury',
    name: 'Merkurius',
    color: '#b8b8b8',
    size: 6,
    orbit: 60,
    speed: 0.9,
    facts: {
      massa: '3.30 × 10^23 kg',
      diameter: '4,879 km',
      jarak: '57.9 juta km',
      komposisi: 'Batuan, inti besi',
      rotasi: '58.6 hari',
      revolusi: '88 hari'
    },
    moons: []
  },
  {
    id: 'venus',
    name: 'Venus',
    color: '#d9c08d',
    size: 10,
    orbit: 90,
    speed: 0.7,
    facts: {
      massa: '4.87 × 10^24 kg',
      diameter: '12,104 km',
      jarak: '108.2 juta km',
      komposisi: 'Batuan, atmosfer tebal CO2',
      rotasi: '243 hari (retrograde)',
      revolusi: '225 hari'
    },
    moons: []
  },
  {
    id: 'earth',
    name: 'Bumi',
    color: '#4aa3ff',
    size: 10,
    orbit: 120,
    speed: 0.6,
    facts: {
      massa: '5.97 × 10^24 kg',
      diameter: '12,742 km',
      jarak: '149.6 juta km',
      komposisi: 'Batuan, air, atmosfer N2/O2',
      rotasi: '23.9 jam',
      revolusi: '365.25 hari'
    },
    moons: [
      { id: 'moon', name: 'Bulan', color: '#cfd8dc', size: 3, orbit: 18, speed: 2.5 }
    ]
  },
  {
    id: 'mars',
    name: 'Mars',
    color: '#e57373',
    size: 8,
    orbit: 150,
    speed: 0.5,
    facts: {
      massa: '6.42 × 10^23 kg',
      diameter: '6,779 km',
      jarak: '227.9 juta km',
      komposisi: 'Batuan, oksida besi',
      rotasi: '24.6 jam',
      revolusi: '687 hari'
    },
    moons: [
      { id: 'phobos', name: 'Phobos', color: '#bcaAA4', size: 2, orbit: 12, speed: 3.0 },
      { id: 'deimos', name: 'Deimos', color: '#a1887f', size: 1.8, orbit: 16, speed: 2.2 }
    ]
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    color: '#d7ccc8',
    size: 20,
    orbit: 200,
    speed: 0.3,
    facts: {
      massa: '1.90 × 10^27 kg',
      diameter: '139,820 km',
      jarak: '778.5 juta km',
      komposisi: 'Gas raksasa (H/He)',
      rotasi: '9.9 jam',
      revolusi: '11.9 tahun'
    },
    moons: [
      { id: 'io', name: 'Io', color: '#ffd54f', size: 3.2, orbit: 26, speed: 2.5 },
      { id: 'europa', name: 'Europa', color: '#bbdefb', size: 3, orbit: 32, speed: 2.1 },
      { id: 'ganymede', name: 'Ganymede', color: '#c5cae9', size: 3.6, orbit: 40, speed: 1.8 }
    ]
  },
  {
    id: 'saturn',
    name: 'Saturnus',
    color: '#ffe082',
    size: 18,
    orbit: 260,
    speed: 0.25,
    facts: {
      massa: '5.68 × 10^26 kg',
      diameter: '116,460 km',
      jarak: '1.43 miliar km',
      komposisi: 'Gas raksasa (H/He), cincin es',
      rotasi: '10.7 jam',
      revolusi: '29.5 tahun'
    },
    moons: [
      { id: 'titan', name: 'Titan', color: '#ffe0b2', size: 3.5, orbit: 34, speed: 1.7 }
    ]
  },
  {
    id: 'uranus',
    name: 'Uranus',
    color: '#80deea',
    size: 14,
    orbit: 310,
    speed: 0.2,
    facts: {
      massa: '8.68 × 10^25 kg',
      diameter: '50,724 km',
      jarak: '2.87 miliar km',
      komposisi: 'Es raksasa (H/He/CH4)',
      rotasi: '17.2 jam (miring)',
      revolusi: '84 tahun'
    },
    moons: []
  },
  {
    id: 'neptune',
    name: 'Neptunus',
    color: '#64b5f6',
    size: 14,
    orbit: 360,
    speed: 0.18,
    facts: {
      massa: '1.02 × 10^26 kg',
      diameter: '49,244 km',
      jarak: '4.50 miliar km',
      komposisi: 'Es raksasa (H/He/CH4)',
      rotasi: '16.1 jam',
      revolusi: '165 tahun'
    },
    moons: []
  }
]

export const encyclopediaSections = [
  {
    id: 'overview',
    title: 'Tata Surya Secara Umum',
    content: `Tata Surya terdiri dari Matahari sebagai pusat dan berbagai benda langit yang terikat oleh gravitasi, termasuk delapan planet, satelit alami, asteroid, komet, dan meteoroid. Skala jarak dan ukuran sangat ekstrem sehingga visualisasi sering disederhanakan untuk tujuan edukasi.`
  },
  {
    id: 'sun',
    title: 'Matahari',
    content: `Matahari adalah bintang deret utama kelas G yang menyuplai energi bagi kehidupan di Bumi. Terdiri terutama dari hidrogen dan helium, dengan reaksi fusi di inti yang mengubah H menjadi He.`
  },
  {
    id: 'inner',
    title: 'Planet Dalam',
    content: `Planet kebumian: Merkurius, Venus, Bumi, dan Mars. Memiliki permukaan padat berbatu, relatif kecil, dan sedikit satelit alami.`
  },
  {
    id: 'outer',
    title: 'Planet Luar',
    content: `Raksasa gas dan es: Jupiter, Saturnus, Uranus, Neptunus. Berukuran sangat besar, atmosfer tebal, dan banyak satelit serta cincin.`
  },
  {
    id: 'belt',
    title: 'Sabuk Asteroid',
    content: `Wilayah antara Mars dan Jupiter yang dipenuhi jutaan objek berbatu. Contoh: Ceres, Vesta, Pallas.`
  },
  {
    id: 'small',
    title: 'Komet dan Meteoroid',
    content: `Komet adalah objek es yang menimbulkan koma dan ekor saat mendekati Matahari. Meteoroid adalah pecahan kecil batu atau logam di ruang angkasa.`
  }
]
