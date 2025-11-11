import { Star, ShoppingBag, Heart } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Citrus Glow Shampoo',
    price: 18,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1589576834008-efb844c36fb2?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDaXRydXMlMjBHbG93JTIwU2hhbXBvb3xlbnwwfDB8fHwxNzYyODk5MDkxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'Best Seller'
  },
  {
    id: 2,
    name: 'Velvet Paw Balm',
    price: 14,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1636090432433-ec925b42f609?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxWZWx2ZXQlMjBQYXclMjBCYWxtfGVufDB8MHx8fDE3NjI4OTkwOTF8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    tag: 'New'
  },
  {
    id: 3,
    name: 'Featherlight Conditioner',
    price: 16,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?q=80&w=900&auto=format&fit=crop',
    tag: 'Staff Pick'
  },
  {
    id: 4,
    name: 'Whisker-safe Cologne',
    price: 12,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?q=80&w=900&auto=format&fit=crop',
    tag: 'Limited'
  }
]

function Rating({ value }) {
  return (
    <div className="flex items-center gap-1 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} fill={i < Math.round(value) ? 'currentColor' : 'none'} className={i < Math.round(value) ? '' : 'text-gray-300'} />
      ))}
      <span className="ml-1 text-xs text-gray-500">{value}</span>
    </div>
  )
}

export default function Products() {
  return (
    <section id="products" className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Best sellers</h2>
            <p className="mt-2 text-gray-600">Customer favorites, loved for their gentle formulas and delightful scents.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex rounded-lg px-4 py-2 bg-gray-900 text-white font-medium hover:opacity-90">View all</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-3 left-3 bg-white/80 backdrop-blur text-gray-900 text-xs font-semibold px-2 py-1 rounded-full border border-white/60">{p.tag}</span>
                <button className="absolute top-3 right-3 p-2 bg-white/80 border border-white/60 backdrop-blur rounded-full hover:bg-white text-gray-700">
                  <Heart size={16} />
                </button>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-gray-900">{p.name}</h3>
                    <Rating value={p.rating} />
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-gray-900">${p.price}</div>
                    <div className="text-[10px] text-gray-500">250 ml</div>
                  </div>
                </div>
                <button className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-4 py-2 text-white font-medium hover:opacity-90">
                  <ShoppingBag size={18} /> Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
