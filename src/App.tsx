import { Routes, Route, Navigate } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ArtistProfilePage from './pages/ArtistProfilePage'

function App() {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/artist/:id" element={<ArtistProfilePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}

export default App
