import { motion } from 'framer-motion'
import Navigation from './Navigation'
import TrustedBy from './TrustedBy'
import TerminalDemo from './TerminalDemo'

const Hero = () => {
  return (
    <div className="min-h-screen text-white">
      <Navigation />
      
      <div className="max-w-7xl 2xl:mx-auto m-6">
        {/* Main Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
          {/* Text Content - Left Side */}
          <div className="text-left">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-left leading-12 md:leading-20">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="block"
              >
                RETAIL
              </motion.span>
              
              <span
                className="block text-blue-500"
              >
                CHARGEBACKS
              </span>
              
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: 0.6,
                  ease: "easeOut" 
                }}
                className="block"
              >
                MADE SIMPLE.
              </motion.span>
            </h1>
          </div>

          {/* Video - Right Side */}
          <motion.div 
            className="w-full h-64 md:h-96 lg:h-[450px] bg-[#0F172A] rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1, 
              delay: 0.4,
              ease: "easeOut" 
            }}
          >
            <video 
              src='/assets/visual.mp4' 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover rounded-lg"
            >
            </video>
          </motion.div>
        </div>

        {/* Description Below */}
        <motion.div 
          className='bg-white p-6 border border-gray-200 rounded-lg mb-8'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.9,
            ease: "easeOut" 
          }}
        >
          <p className="text-xl text-blue-950 font-extrabold mb-8 font-['IBM_Plex_Mono']">
            RevenaPath helps consumer brands reclaim revenue lost to avoidable chargebacks, 
            streamlining dispute workflows, reducing manual review, and improving recovery outcomes automatically.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row justify-start items-center space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 1.3 
            }}
          >
            <motion.button 
              className="bg-gray-900 text-white px-8 py-4 rounded-lg font-['JetBrains_Mono'] font-medium hover:bg-blue-600 transition-colors w-full sm:w-auto"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#2563EB"
              }}
              whileTap={{ scale: 0.98 }}
            >
              Talk to sales
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Trusted By Section */}
        <TrustedBy />

        {/* Terminal Demo */}
        <TerminalDemo />
      </div>
    </div>
  )
}

export default Hero