import { useState } from 'react'

interface BookingModalProps {
  onClose: () => void
}

// ── Calendar helpers ──
const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
function getCalendarDays() {
  const firstDay = new Date(2025, 7, 1).getDay() // Friday = 5
  const days: (number | null)[] = []
  for (let i = 0; i < firstDay; i++) days.push(null)
  for (let i = 1; i <= 31; i++) days.push(i)
  return days
}

// ── Left panel step info ──
const stepInfo = [
  {
    title: 'Set Date & Time',
    desc: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
    icon: (
      <svg viewBox="0 0 120 100" className="w-36 h-28">
        <ellipse cx="58" cy="72" rx="38" ry="12" fill="#b2e5d8" opacity="0.5" />
        <rect x="22" y="28" width="60" height="52" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="2" />
        <rect x="22" y="28" width="60" height="16" rx="6" fill="#ef4444" />
        <rect x="34" y="20" width="6" height="14" rx="3" fill="#6b7280" />
        <rect x="64" y="20" width="6" height="14" rx="3" fill="#6b7280" />
        {[0,1,2,3,4].map(r => [0,1,2,3,4,5,6].map(c => (
          <rect key={`${r}-${c}`} x={30+c*9} y={52+r*8} width="6" height="5" rx="1" fill="#e5e7eb" />
        )))}
        <circle cx="85" cy="48" r="18" fill="#bfdbfe" />
        <circle cx="85" cy="48" r="14" fill="white" stroke="#93c5fd" strokeWidth="2" />
        <line x1="85" y1="40" x2="85" y2="48" stroke="#374151" strokeWidth="2" strokeLinecap="round" />
        <line x1="85" y1="48" x2="91" y2="52" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        <circle cx="85" cy="48" r="2" fill="#374151" />
      </svg>
    ),
  },
  {
    title: 'Set Location',
    desc: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
    icon: (
      <svg viewBox="0 0 120 100" className="w-36 h-28">
        <ellipse cx="55" cy="80" rx="32" ry="10" fill="#b2e5d8" opacity="0.4" />
        <ellipse cx="30" cy="62" rx="16" ry="8" fill="#b2e5d8" opacity="0.5" />
        <ellipse cx="88" cy="55" rx="18" ry="9" fill="#b2e5d8" opacity="0.5" />
        <path d="M55 18 C43 18 34 27 34 39 C34 55 55 72 55 72 C55 72 76 55 76 39 C76 27 67 18 55 18Z" fill="#ef4444" />
        <circle cx="55" cy="39" r="10" fill="white" />
        <ellipse cx="55" cy="76" rx="8" ry="4" fill="#374151" opacity="0.2" />
      </svg>
    ),
  },
  {
    title: 'Payment Option',
    desc: 'Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur',
    icon: (
      <svg viewBox="0 0 120 100" className="w-36 h-28">
        <ellipse cx="58" cy="78" rx="36" ry="10" fill="#b2e5d8" opacity="0.4" />
        <ellipse cx="30" cy="55" rx="16" ry="8" fill="#b2e5d8" opacity="0.5" />
        <ellipse cx="90" cy="48" rx="18" ry="9" fill="#b2e5d8" opacity="0.5" />
        <rect x="25" y="38" width="60" height="38" rx="6" fill="#f59e0b" />
        <rect x="25" y="48" width="60" height="10" fill="#d97706" />
        <rect x="31" y="59" width="22" height="8" rx="2" fill="#fbbf24" />
        <path d="M30 60 C35 50 45 48 55 52 C65 56 68 44 72 42" stroke="white" strokeWidth="2" fill="none" opacity="0.4" />
        <ellipse cx="55" cy="35" rx="20" ry="14" fill="#fde68a" />
        <path d="M42 35 C48 28 62 28 68 35 C62 42 48 42 42 35Z" fill="#f59e0b" opacity="0.4" />
      </svg>
    ),
  },
]

// ── Step indicator ──
function StepIndicator({ current }: { current: number }) {
  const indicatorStep = current <= 2 ? current : 3
  return (
    <div className="flex items-end gap-10 mb-6">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex flex-col items-center gap-1">
          <span className={`text-base font-medium ${indicatorStep === s ? 'text-red-600' : 'text-gray-400'}`}>{s}</span>
          <div className={`h-0.5 w-8 rounded-full ${indicatorStep === s ? 'bg-red-600' : 'bg-transparent'}`} />
        </div>
      ))}
    </div>
  )
}

// ── Step 1: Date & Time ──
function Step1({ onContinue }: { onContinue: () => void }) {
  const [selected, setSelected] = useState(14)
  const [hour, setHour] = useState('10.00')
  const [period, setPeriod] = useState('AM')
  const calDays = getCalendarDays()
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const selectedDate = new Date(2025, 7, selected)
  const dayName = dayNames[selectedDate.getDay()]

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Set Date & Time</h2>
      <div className="flex gap-6 flex-1">
        {/* Calendar */}
        <div className="flex-1">
          <p className="text-center font-semibold text-gray-800 mb-4">2025 August</p>
          <div className="grid grid-cols-7 gap-1 text-center mb-2">
            {DAYS.map((d, i) => (
              <span key={i} className="text-xs text-gray-400 font-medium py-1">{d}</span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1 text-center">
            {calDays.map((day, i) => {
              const isSelected = day === selected
              const isRange = day && day >= 10 && day <= 12
              const isGray = day && [8, 13].includes(day)
              return (
                <button
                  key={i}
                  onClick={() => day && setSelected(day)}
                  className={`h-9 w-9 mx-auto rounded-full text-sm font-medium transition-colors
                    ${!day ? '' : isSelected ? 'bg-red-600 text-white' : isRange ? 'bg-gray-200 text-gray-700 rounded-lg' : isGray ? 'text-gray-300' : 'text-gray-700 hover:bg-gray-100'}`}
                >
                  {day ?? ''}
                </button>
              )
            })}
          </div>
        </div>

        {/* Time picker */}
        <div className="w-36 flex-shrink-0">
          <p className="font-semibold text-gray-800 mb-4">Pick a time</p>
          <div className="flex flex-col gap-3">
            <div className="border border-gray-200 rounded-xl px-3 py-2.5 flex items-center justify-between bg-white">
              <span className="text-sm text-gray-700">{hour}</span>
              <select value={hour} onChange={e => setHour(e.target.value)} className="absolute opacity-0 w-24 cursor-pointer">
                {['08.00','09.00','10.00','11.00','12.00'].map(h => <option key={h}>{h}</option>)}
              </select>
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="border border-gray-200 rounded-xl px-3 py-2.5 flex items-center justify-between bg-white">
              <span className="text-sm text-gray-700">{period}</span>
              <select value={period} onChange={e => setPeriod(e.target.value)} className="absolute opacity-0 w-20 cursor-pointer">
                <option>AM</option><option>PM</option>
              </select>
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
        <p className="text-sm text-gray-500">booked for {dayName}, August {selected} at {hour.replace('.00','')} {period}</p>
        <button onClick={onContinue} className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full flex items-center gap-2 transition-colors">
          Continue
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}

// ── Step 2: Set Location ──
function Step2({ onPrev, onContinue }: { onPrev: () => void; onContinue: () => void }) {
  const [city, setCity] = useState('Colombo')
  const [address, setAddress] = useState('Colombo 2, senanayaka road')

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Set Location</h2>

      {/* Location inputs */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-sm text-gray-600 font-medium w-16 flex-shrink-0">Location</span>
        <div className="border border-gray-200 bg-white rounded-xl px-3 py-2 flex items-center gap-2">
          <span className="text-sm text-gray-700">{city}</span>
          <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
        <div className="flex-1 border border-gray-200 bg-white rounded-xl px-3 py-2 flex items-center justify-between">
          <input value={address} onChange={e => setAddress(e.target.value)} className="flex-1 text-sm text-gray-700 outline-none bg-transparent" />
          <button className="text-gray-400 hover:text-gray-600">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="9" /><line x1="12" y1="8" x2="12" y2="16" /><line x1="8" y1="12" x2="16" y2="12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 rounded-xl overflow-hidden border border-gray-200">
        <iframe
          title="map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-77.3,38.75,-76.9,39.05&layer=mapnik"
          className="w-full h-full min-h-[260px]"
        />
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
        <button onClick={onPrev} className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-800 transition-colors">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Previous
        </button>
        <button onClick={onContinue} className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors">
          Continue
        </button>
      </div>
    </div>
  )
}

// ── Step 3: Payment Option ──
const paymentOptions = [
  {
    label: 'Credit / Debit Card',
    icon: (
      <div className="bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded italic">VISA</div>
    ),
  },
  {
    label: 'Internet Banking',
    icon: (
      <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18M9 10v4m6-4v4M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: 'Google Pay',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
  },
  {
    label: 'Apple Pay',
    icon: (
      <div className="text-gray-800 text-xs font-semibold tracking-tight">&#63743;Pay</div>
    ),
  },
]

function Step3({ onContinue }: { onContinue: () => void }) {
  const [selected, setSelected] = useState(0)
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-bold text-gray-900">Payment Option</h2>
        <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
          <span className="text-lg leading-none">+</span> add another options
        </button>
      </div>

      <div className="flex flex-col gap-3 flex-1">
        {paymentOptions.map((opt, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className={`flex items-center justify-between px-5 py-4 rounded-xl border transition-colors ${selected === i ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white hover:border-gray-300'}`}
          >
            <span className="text-sm text-gray-700 font-medium">{opt.label}</span>
            {opt.icon}
          </button>
        ))}
      </div>

      <div className="flex justify-end mt-6 pt-4 border-t border-gray-100">
        <button onClick={onContinue} className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors">
          Continue
        </button>
      </div>
    </div>
  )
}

// ── Step 4: Card Details ──
function Step4({ onContinue }: { onContinue: () => void }) {
  const [activeCard, setActiveCard] = useState(0)

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Credit / Debit Card</h2>
        <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
          <span className="text-lg leading-none">+</span> add another card
        </button>
      </div>

      {/* Cards row */}
      <div className="flex gap-4 mb-6">
        {/* Active card */}
        <button
          onClick={() => setActiveCard(0)}
          className={`flex-1 relative rounded-2xl p-5 h-44 flex flex-col justify-between text-white transition-all ${activeCard === 0 ? 'ring-2 ring-blue-400' : 'opacity-80'}`}
          style={{ background: 'linear-gradient(135deg, #4f8ef7 0%, #7c3aed 100%)' }}
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs opacity-80">Current Balance</p>
              <p className="text-2xl font-bold mt-1">$5,750,20</p>
            </div>
            {/* Mastercard */}
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-red-500 opacity-90" />
              <div className="w-8 h-8 rounded-full bg-yellow-400 opacity-90" />
            </div>
          </div>
          <div className="flex items-end justify-between">
            <p className="text-sm tracking-widest opacity-90">5282 3456 7890 1289</p>
            <p className="text-sm opacity-80">09/25</p>
          </div>
        </button>

        {/* Secondary card */}
        <button
          onClick={() => setActiveCard(1)}
          className={`w-40 flex-shrink-0 relative rounded-2xl p-4 h-44 flex flex-col justify-between text-white transition-all ${activeCard === 1 ? 'ring-2 ring-purple-400' : 'opacity-80'}`}
          style={{ background: 'linear-gradient(135deg, #6d28d9 0%, #4c1d95 100%)' }}
        >
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-purple-400 opacity-70" />
            <div className="w-8 h-8 rounded-full bg-purple-300 opacity-50" />
          </div>
          <div>
            <p className="text-xs opacity-70">Credit Card</p>
            <div className="flex items-center gap-1 mt-1">
              <span className="text-xs opacity-70">••••</span>
              <span className="text-xs">1289</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <svg className="w-8 h-6 opacity-80" viewBox="0 0 32 24" fill="none">
                <rect x="1" y="4" width="30" height="16" rx="3" stroke="white" strokeWidth="1.5" fill="none" opacity="0.6" />
                <rect x="1" y="9" width="30" height="4" fill="white" opacity="0.2" />
                <rect x="4" y="14" width="8" height="4" rx="1" fill="white" opacity="0.4" />
              </svg>
              <p className="text-xs opacity-70">09/25</p>
            </div>
          </div>
        </button>
      </div>

      {/* Card form */}
      <div className="flex flex-col gap-4 flex-1">
        <div>
          <p className="text-xs text-gray-400 mb-1">Card holder</p>
          <p className="text-sm font-semibold text-gray-900">Jhon Doe</p>
          <div className="h-px bg-gray-200 mt-2" />
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-1">Card number</p>
          <p className="text-sm font-semibold text-gray-900 tracking-widest">5282  3456  7890  1289</p>
          <div className="h-px bg-gray-200 mt-2" />
        </div>
        <div className="flex gap-6">
          <div className="flex-1">
            <p className="text-xs text-gray-400 mb-1">Expire date</p>
            <p className="text-sm font-semibold text-gray-900">09/25</p>
            <div className="h-px bg-gray-200 mt-2" />
          </div>
          <div className="flex-1">
            <p className="text-xs text-gray-400 mb-1">CVC/CVV</p>
            <p className="text-sm font-semibold text-gray-900">137</p>
            <div className="h-px bg-gray-200 mt-2" />
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-4 pt-4 border-t border-gray-100">
        <button onClick={onContinue} className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors">
          Confirm Booking
        </button>
      </div>
    </div>
  )
}

// ── Main Modal ──
export default function BookingModal({ onClose }: BookingModalProps) {
  const [step, setStep] = useState(1)
  const infoIndex = step <= 2 ? step - 1 : 2
  const info = stepInfo[infoIndex]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blur overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-[#f2f2f2] rounded-2xl flex w-[880px] max-w-[95vw] overflow-hidden shadow-2xl min-h-[500px]">

        {/* Left panel */}
        <div className="w-64 flex-shrink-0 bg-[#ebebeb] px-6 py-6 flex flex-col">
          <StepIndicator current={step} />

          <div className="flex flex-col items-center text-center flex-1 justify-center">
            {info.icon}
            <h3 className="text-base font-bold text-gray-900 mt-3">{info.title}</h3>
            <p className="text-xs text-gray-500 mt-2 leading-relaxed">{info.desc}</p>
          </div>

          <button onClick={onClose} className="text-sm text-gray-500 hover:text-gray-700 mt-6 text-center w-full transition-colors">
            Save and Exit
          </button>
        </div>

        {/* Right panel */}
        <div className="flex-1 bg-white px-8 py-6">
          {step === 1 && <Step1 onContinue={() => setStep(2)} />}
          {step === 2 && <Step2 onPrev={() => setStep(1)} onContinue={() => setStep(3)} />}
          {step === 3 && <Step3 onContinue={() => setStep(4)} />}
          {step === 4 && <Step4 onContinue={onClose} />}
        </div>
      </div>
    </div>
  )
}
