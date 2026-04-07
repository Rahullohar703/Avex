import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import NoiseSection from './components/NoiseSection'
import ClaritySection from './components/ClaritySection'
import WhatWeBuildSection from './components/WhatWeBuildSection'
import FeaturesSection from './components/FeaturesSection'
import WorkSection from './components/WorkSection'
import PhilosophySection from './components/PhilosophySection'
import CTASection from './components/CTASection'
import ContactSection from './components/ContactSection'
import StarParticles from './components/StarParticles'

export default function App() {
  return (
    <div style={{ background: 'var(--color-deep)', minHeight: '100vh', position: 'relative' }}>
      {/* Global star particles across entire page */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 20, pointerEvents: 'none' }}>
        <StarParticles count={100} />
      </div>

      <Navbar />
      <main style={{ position: 'relative', zIndex: 2 }}>
        <HeroSection />
        <NoiseSection />
        <ClaritySection />
        <WhatWeBuildSection />
        <FeaturesSection />
        <WorkSection />
        <PhilosophySection />
        <CTASection />
        <ContactSection />
      </main>
    </div>
  )
}
