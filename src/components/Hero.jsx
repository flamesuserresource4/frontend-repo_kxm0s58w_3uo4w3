import Spline from '@splinetool/react-spline'
import { Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] grid lg:grid-cols-2 place-items-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-pink-50 to-rose-50" />

      <div className="absolute -z-0 inset-0 opacity-[0.88]">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_10%_10%,rgba(255,179,71,0.25),transparent),radial-gradient(45%_45%_at_90%_30%,rgba(255,99,132,0.2),transparent),radial-gradient(50%_50%_at_50%_100%,rgba(255,159,64,0.2),transparent)]" />
      </div>

      <div className="relative z-10 max-w-xl w-full px-6 lg:px-12 py-10">
        <span className="inline-flex items-center gap-2 text-orange-700/90 bg-white/70 border border-white/60 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
          <Sparkles size={14} /> New: Autumn Citrus Grooming Line
        </span>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
          Loving care for your pets, crafted with nature
        </h1>
        <p className="mt-4 text-gray-700 text-lg">
          Gentle, vet-approved essentials that keep tails wagging and whiskers purring—all with planet-friendly ingredients.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#products" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 px-6 py-3 text-white font-semibold shadow-sm shadow-orange-200/60 hover:shadow-md transition-all">
            Shop Best Sellers
          </a>
          <a href="#about" className="inline-flex items-center justify-center rounded-xl bg-white/80 border border-white/60 backdrop-blur px-6 py-3 text-gray-900 font-semibold hover:bg-white transition-colors">
            Learn More
          </a>
        </div>
        <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
          <div className="flex -space-x-2">
            <img className="h-8 w-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEb2d8ZW58MHwwfHx8MTc2Mjg5OTA5MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Dog" />
            <img className="h-8 w-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=128&auto=format&fit=crop" alt="Cat" />
            <img className="h-8 w-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1574158622682-e40e69881006?q=80&w=128&auto=format&fit=crop" alt="Puppy" />
          </div>
          <p>
            Trusted by 10k+ pet parents
          </p>
        </div>
      </div>

      <div className="relative z-10 w-full h-[60vh] sm:h-[70vh] lg:h-[80vh] px-6 lg:px-8">
        <div className="w-full h-full rounded-3xl overflow-hidden border border-white/60 shadow-[0_20px_80px_rgba(255,159,64,0.35)] bg-white/50">
          <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
      </div>
    </section>
  )
}
