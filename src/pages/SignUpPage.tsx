import { useNavigate } from 'react-router-dom'
import AuthCard from '../components/AuthCard'
import PasswordInput from '../components/PasswordInput'
import SocialLogins from '../components/SocialLogins'

export default function SignUpPage() {
  const navigate = useNavigate()

  return (
    <AuthCard>
      {/* Top nav */}
      <div className="flex items-center justify-between mb-10">
        <button className="text-black hover:opacity-70 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </button>
        <button
          onClick={() => navigate('/login')}
          className="text-sm text-black hover:opacity-70 transition-opacity"
        >
          already have an account ?
        </button>
      </div>

      {/* Heading */}
      <h1 className="text-3xl font-semibold text-black mb-8">Sign up</h1>

      {/* Email */}
      <div className="mb-6">
        <label className="block text-sm text-black mb-1">Email</label>
        <input
          type="email"
          placeholder="jhon@gmail.com"
          className="w-full bg-transparent border-b border-gray-400 pb-2 text-sm text-gray-500 placeholder-gray-400 outline-none focus:border-black transition-colors"
        />
      </div>

      {/* Password */}
      <PasswordInput />

      {/* Forgot password */}
      <div className="mb-8">
        <button className="text-sm text-red-500 hover:text-red-600 transition-colors">
          forgot password
        </button>
      </div>

      {/* Sign up button */}
      <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium text-base py-3 rounded-full transition-colors mb-6">
        Sign up
      </button>

      <SocialLogins />
    </AuthCard>
  )
}
