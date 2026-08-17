import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/sections/HeroSection'
import AboutSection from '@/sections/AboutSection'
import SloganSection from '@/sections/SloganSection'
import GallerySection from '@/sections/GallerySection'
import MomentsSection from '@/sections/MomentsSection'
import ContactSection from '@/sections/ContactSection'

export default function App() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SloganSection />
        <GallerySection />
        <MomentsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
