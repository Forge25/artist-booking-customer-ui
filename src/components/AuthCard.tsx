import { type ReactNode } from 'react'

interface AuthCardProps {
  children: ReactNode
}

export default function AuthCard({ children }: AuthCardProps) {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center relative"
      style={{ backgroundImage: "url('/bg-login.png')" }}
    >
      {/* Center Card */}
      <div className="bg-[#f2f2f2] rounded-2xl flex w-[860px] max-w-[95vw] min-h-[560px] overflow-hidden shadow-2xl">

        {/* Left: Form slot */}
        <div className="flex flex-col flex-1 px-12 py-8">
          {children}
        </div>

        {/* Right: Image card */}
        <div className="w-[340px] p-4 flex-shrink-0">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <img
              src="/person.png"
              alt="Artist on stage"
              className="w-full h-full object-cover"
            />
            {/* Logo */}
            <div className="absolute top-4 left-4">
              <img src="/logo-light.png" alt="Logo" className="h-9 w-auto" />
            </div>
            {/* Quote overlay */}
            <div className="absolute bottom-8 left-0 right-0 px-4">
              <p className="text-white text-xs leading-relaxed">
                "Lorem ipsum dolor sit amet, consectetur scing elit. Proin fringilla diam vitae ex posuere ultricies. In vel hendreri"
              </p>
            </div>
            {/* Dots indicator */}
            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-white opacity-60" />
              <span className="w-2 h-2 rounded-full bg-white" />
              <span className="w-2 h-2 rounded-full bg-white opacity-60" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center gap-4 text-sm text-white/80">
        <a href="#" className="hover:text-white transition-colors">Contact</a>
        <span className="opacity-50">|</span>
        <a href="#" className="hover:text-white transition-colors">Privacy</a>
        <span className="opacity-50">|</span>
        <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
      </div>
    </div>
  )
}
