import './App.css'
import Features from './components/Features/Features'
import WithoutRevena from './components/Features/WithoutRevena'
import Hero from './components/Hero/Hero'
import HowItWorks from './components/HowItWorks/HowitWorks'
import RetailSupport from './components/RetailSupport/RetailSupport'

function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <WithoutRevena />
      <HowItWorks />
      <RetailSupport />
    </div>
  )
}

export default App