import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'
import Navigation from './Navigation'
import TrustedBy from './TrustedBy'
import TerminalDemo from './TerminalDemo'

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <Navigation />

      <div className="max-w-7xl mx-auto px-6 pt-28 md:pt-36 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/5 rounded-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
              <span className="text-[#3B82F6] text-xs font-['JetBrains_Mono'] tracking-wider uppercase">
                AI-Powered Chargeback Recovery
              </span>
            </div>

            <h1 className="text-[clamp(2rem,8vw,5rem)] font-bold leading-[1.05] tracking-tight">
              <span className="block text-white">RETAIL</span>
              <span className="block text-[#3B82F6]">CHARGEBACKS</span>
              <span className="block text-white">MADE SIMPLE.</span>
            </h1>

            <p className="mt-6 text-sm sm:text-base text-gray-400 font-['IBM_Plex_Mono'] leading-relaxed max-w-md">
              RevenaPath helps consumer brands reclaim revenue lost to avoidable chargebacks
              with intelligent automation and AI-powered dispute resolution.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <button className="group inline-flex items-center justify-center gap-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-3.5 rounded-lg font-['JetBrains_Mono'] font-medium text-sm transition-colors">
                Talk to sales
                <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button className="inline-flex items-center justify-center gap-3 border border-white/10 hover:border-white/20 text-gray-300 hover:text-white px-8 py-3.5 rounded-lg font-['JetBrains_Mono'] font-medium text-sm transition-colors">
                See how it works
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="rounded-xl overflow-hidden border border-white/5 bg-[#1E293B]">
              <video
                src="/assets/visual.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
          </motion.div>
        </div>

        <TrustedBy />
        <TerminalDemo />
      </div>
    </div>
  )
}

export default Hero