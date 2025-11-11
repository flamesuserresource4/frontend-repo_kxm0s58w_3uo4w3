import { Facebook, Instagram, Twitter, PawPrint } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="relative bg-gray-900 text-gray-300">
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_10%,rgba(255,159,64,0.12),transparent),radial-gradient(50%_50%_at_80%_40%,rgba(255,99,132,0.12),transparent)]" />
      <div className="relative max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-white">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 grid place-content-center text-white">
                <PawPrint size={20} />
              </div>
              <span className="font-extrabold tracking-tight">PawBoutique</span>
            </div>
            <p className="mt-4 text-sm max-w-md text-gray-400">Gentle, planet-friendly grooming and care for pets who are family.</p>
            <div className="mt-6 flex gap-3">
              <a aria-label="Instagram" href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/15"><Instagram size={18} /></a>
              <a aria-label="Twitter" href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/15"><Twitter size={18} /></a>
              <a aria-label="Facebook" href="#" className="p-2 rounded-lg bg-white/10 hover:bg-white/15"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Shop</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Shampoo</a></li>
              <li><a href="#" className="hover:text-white">Conditioner</a></li>
              <li><a href="#" className="hover:text-white">Cologne</a></li>
              <li><a href="#" className="hover:text-white">Bundles</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white">Support</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Shipping</a></li>
              <li><a href="#" className="hover:text-white">Returns</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} PawBoutique. All rights reserved.</p>
          <p>Made with love for pets and the planet.</p>
        </div>
      </div>
    </footer>
  )
}
