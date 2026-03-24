import Header from '../components/home/Header'
import HeroSection from '../components/home/HeroSection'
import SearchSection from '../components/home/SearchSection'
import CategoryFilter from '../components/home/CategoryFilter'
import ArtistSection from '../components/home/ArtistSection'
import PopularCategory from '../components/home/PopularCategory'
import CommunityBanner from '../components/home/CommunityBanner'
import InfoSection from '../components/home/InfoSection'
import Footer from '../components/home/Footer'

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-8">
        <HeroSection />
        <SearchSection />
        <CategoryFilter />
        <ArtistSection title="For You" />
        <ArtistSection title="Near You" showLocation />
        <PopularCategory />
        <CommunityBanner />
        <InfoSection />
      </main>
      <Footer />
    </div>
  )
}
