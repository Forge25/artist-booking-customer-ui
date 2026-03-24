interface ArtistCardProps {
  name: string
  rating?: number
  info?: string
}

export default function ArtistCard({ name, rating = 4.7, info }: ArtistCardProps) {
  return (
    <div className="flex flex-col cursor-pointer group">
      <div className="relative rounded-xl overflow-visible">
        {/* Image */}
        <div className="rounded-xl overflow-hidden">
          <img
            src="/person.png"
            alt={name}
            className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Rating badge */}
        <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-1.5 py-0.5 rounded-md flex items-center gap-0.5">
          <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          {rating}
        </div>

        {/* Avatar overlapping bottom */}
        <div className="absolute -bottom-4 left-3 w-9 h-9 rounded-full border-2 border-white overflow-hidden shadow">
          <img src="/person.png" alt={name} className="w-full h-full object-cover" />
        </div>
      </div>

      <div className="pt-6 px-1">
        <p className="text-xs font-bold text-gray-900 uppercase tracking-wide">{name}</p>
        {info && <p className="text-xs text-gray-400 mt-0.5">{info}</p>}
      </div>
    </div>
  )
}
