import { Bone, Cat, Dog, Fish, Bird, PawPrint } from 'lucide-react'

const categories = [
  { icon: Dog, name: 'Dogs', color: 'from-orange-400 to-rose-400' },
  { icon: Cat, name: 'Cats', color: 'from-pink-400 to-fuchsia-400' },
  { icon: Fish, name: 'Fish', color: 'from-sky-400 to-cyan-400' },
  { icon: Bird, name: 'Birds', color: 'from-lime-400 to-emerald-400' },
  { icon: Bone, name: 'Treats', color: 'from-amber-400 to-orange-400' },
  { icon: PawPrint, name: 'Accessories', color: 'from-violet-400 to-indigo-400' },
]

export default function Categories() {
  return (
    <section id="categories" className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Shop by category</h2>
            <p className="mt-2 text-gray-600">Find the perfect essentials for every kind of companion.</p>
          </div>
          <a href="#products" className="hidden sm:inline-flex rounded-lg px-4 py-2 bg-white/80 border border-white/60 text-gray-900 font-medium hover:bg-white">Explore all</a>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(({ icon: Icon, name, color }) => (
            <a key={name} href="#products" className="group relative rounded-2xl overflow-hidden p-4 bg-white/70 border border-white/60 hover:bg-white transition-colors shadow-sm">
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br ${color} mix-blend-multiply pointer-events-none`} />
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="h-12 w-12 rounded-xl bg-gray-50 grid place-content-center text-gray-700 shadow-inner">
                  <Icon />
                </div>
                <span className="mt-3 font-semibold text-gray-900">{name}</span>
                <span className="text-xs text-gray-500">120+ items</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
