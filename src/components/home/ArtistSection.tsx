import ArtistCard from './ArtistCard'

const artists = Array(6).fill('TARIQUAL ISLAM')

interface ArtistSectionProps {
  title: string
  showLocation?: boolean
}

export default function ArtistSection({ title, showLocation = false }: ArtistSectionProps) {
  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-base font-semibold text-gray-900">{title}</h2>
        <button className="text-sm text-red-600 hover:text-red-700 transition-colors">See all</button>
      </div>
      <div className="grid grid-cols-6 gap-5">
        {artists.map((name, i) => (
          <ArtistCard
            key={i}
            name={name}
            rating={4.7}
            info={showLocation ? '2.4 miles away' : undefined}
          />
        ))}
      </div>
    </section>
  )
}
