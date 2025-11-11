export default function Testimonials() {
  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/08/Petco_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0e/Walmart_logo.svg',
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-extrabold text-gray-900">Loved by pet parents and pros</h3>
            <p className="mt-2 text-gray-600">Our formulas are vet-reviewed and used by groomers nationwide.</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {logos.map((src, i) => (
              <div key={i} className="h-12 bg-white/70 border border-white/60 rounded-lg grid place-content-center">
                <img src={src} alt="logo" className="h-6 opacity-60" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
