import ArtistCard from './ArtistCard'

const artists = [
  { name: 'Tariqual Islam', rating: 4.7 },
  { name: 'Tariqual Islam', rating: undefined },
  { name: 'Tariqual Islam', rating: 4.7 },
  { name: 'Tariqual Islam', rating: undefined },
  { name: 'Tariqual Islam', rating: 4.7 },
  { name: 'Tariqual Islam', rating: undefined },
]

export default function ForYouSection() {
  return (
    <section className="py-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-base font-semibold text-gray-900">For You</h2>
        <button className="text-sm text-red-600 hover:text-red-700 transition-colors font-medium">See all</button>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {artists.map((artist, i) => (
          <ArtistCard key={i} name={artist.name} rating={artist.rating} />
        ))}
      </div>
    </section>
  )
}
