import './App.css'
import Hero from './components/Hero/Hero'
import StatsBar from './components/StatsBar/StatsBar'
import Features from './components/Features/Features'
import WithoutRevena from './components/Features/WithoutRevena'
import HowItWorks from './components/HowItWorks/HowitWorks'
import Testimonials from './components/Testimonials/Testimonials'
import Pricing from './components/Pricing/Pricing'
import FAQ from './components/FAQ/FAQ'
import CtaSection from './components/CTA/CtaSection'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <Hero />
      <StatsBar />
      <Features />
      <WithoutRevena />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CtaSection />
      <Footer />
    </div>
  )
}

export default App