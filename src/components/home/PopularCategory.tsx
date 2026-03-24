const items = [
  {
    artistName: 'TARIQUAL ISLAM',
    role: 'Musician',
    title: 'Lorem ipsum dolor sit',
    desc: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor amet, consectetur Lorem ipsum dolor sit amet, consectetur',
  },
  {
    artistName: 'TARIQUAL ISLAM',
    role: 'Musician',
    title: 'Lorem ipsum dolor sit',
    desc: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor amet, consectetur Lorem ipsum dolor sit amet, consectetur',
  },
  {
    artistName: 'TARIQUAL ISLAM',
    role: 'Musician',
    title: 'Lorem ipsum dolor sit',
    desc: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor amet, consectetur Lorem ipsum dolor sit amet, consectetur',
  },
]

export default function PopularCategory() {
  return (
    <section className="py-6">
      <h2 className="text-base font-semibold text-gray-900 mb-8">Popular Category</h2>
      <div className="grid grid-cols-3 gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col cursor-pointer group">
            {/* Stacked image effect */}
            <div className="relative h-44 mb-16">
              {/* Back card */}
              <div className="absolute inset-0 rounded-xl overflow-hidden -rotate-6 shadow-md origin-bottom">
                <img src="/person.png" alt="" className="w-full h-full object-cover" />
              </div>
              {/* Middle card */}
              <div className="absolute inset-0 rounded-xl overflow-hidden -rotate-3 shadow-md origin-bottom">
                <img src="/person.png" alt="" className="w-full h-full object-cover" />
              </div>
              {/* Front card */}
              <div className="absolute inset-0 rounded-xl overflow-hidden shadow-lg group-hover:scale-[1.02] transition-transform duration-300">
                <img src="/person.png" alt="" className="w-full h-full object-cover" />
              </div>

              {/* Artist avatar + name */}
              <div className="absolute -bottom-14 left-0 right-0 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-md">
                  <img src="/person.png" alt={item.artistName} className="w-full h-full object-cover" />
                </div>
                <p className="text-xs font-bold text-gray-900 mt-1.5 uppercase tracking-wide">{item.artistName}</p>
                <p className="text-xs text-gray-400">{item.role}</p>
              </div>
            </div>

            {/* Text content */}
            <div>
              <h3 className="text-red-600 font-semibold text-sm mb-2">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
