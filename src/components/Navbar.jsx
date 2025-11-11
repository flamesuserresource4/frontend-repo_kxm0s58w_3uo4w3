import { useState } from 'react'
import { PawPrint, Menu, ShoppingCart, Search, Bone, Cat, Dog } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 grid place-content-center text-white shadow-lg shadow-orange-200/60">
              <PawPrint size={20} />
            </div>
            <span className="font-extrabold text-gray-900 text-lg tracking-tight">PawBoutique</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#categories" className="hover:text-gray-900 transition-colors flex items-center gap-2">
              <Bone size={16} /> Treats
            </a>
            <a href="#categories" className="hover:text-gray-900 transition-colors flex items-center gap-2">
              <Dog size={16} /> Dogs
            </a>
            <a href="#categories" className="hover:text-gray-900 transition-colors flex items-center gap-2">
              <Cat size={16} /> Cats
            </a>
            <a href="#products" className="hover:text-gray-900 transition-colors">Best Sellers</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">About</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 rounded-lg hover:bg-white transition-colors text-gray-700" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="relative p-2 rounded-lg hover:bg-white transition-colors text-gray-700" aria-label="Cart">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 text-[10px] bg-orange-500 text-white rounded-full px-1.5 py-0.5">3</span>
            </button>
            <a href="#products" className="ml-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 px-4 py-2 text-white font-semibold shadow-sm shadow-orange-200/60 hover:shadow-md transition-shadow">
              Shop Now
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg hover:bg-white" aria-label="Menu">
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in">
            <div className="grid gap-2 text-sm font-medium text-gray-700">
              <a href="#products" className="px-3 py-2 rounded-lg hover:bg-white">Best Sellers</a>
              <a href="#categories" className="px-3 py-2 rounded-lg hover:bg-white">Categories</a>
              <a href="#about" className="px-3 py-2 rounded-lg hover:bg-white">About</a>
              <a href="#contact" className="px-3 py-2 rounded-lg hover:bg-white">Contact</a>
              <a href="#" className="px-3 py-2 rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 text-white text-center font-semibold">Shop Now</a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
