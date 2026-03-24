export default function Header() {
  return (
    <header className="bg-[#111] text-white px-8 py-3 flex items-center justify-between">
      <img src="/logo-light.png" alt="Logo" className="h-8 w-auto" />
      <div className="flex items-center gap-5">
        {/* Instagram */}
        <button className="hover:opacity-70 transition-opacity">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
        </button>
        {/* Bell */}
        <button className="hover:opacity-70 transition-opacity">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        {/* Avatar */}
        <button className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-gray-600">
          <img src="/person.png" alt="Profile" className="w-full h-full object-cover" />
        </button>
      </div>
    </header>
  )
}
