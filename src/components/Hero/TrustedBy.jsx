import React from 'react'
import { motion } from 'framer-motion'

const TrustedBy = () => {
  const companies = [
    "/assets/companies/nimbus.png",
    "/assets/companies/vertex.png", 
    "/assets/companies/bluecrate.png",
    "/assets/companies/atlas.png",
    "/assets/companies/primewholesale.png",
    "/assets/companies/linea.png",
  ]

  return (
    <div className="mt-12 text-center">
      <motion.p 
        className="text-gray-400 font-['JetBrains_Mono'] text-sm mb-12 tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Trusted by Operations Teams Worldwide
      </motion.p>

      {/* Marquee Container */}
      <div className="relative overflow-hidden">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#0F172A] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#0F172A] to-transparent z-10" />
        
        {/* Marquee Content */}
        <motion.div 
          className="flex gap-8 items-center"
          animate={{
            x: [0, -600]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            }
          }}
        >
          {/* First Set */}
          {companies.map((company, index) => (
            <div
              key={`first-${index}`}
              className="shrink-0 text-blue-950 font-['JetBrains_Mono'] text-sm border border-gray-700 p-3  rounded-lg bg-white hover:border-blue-500 transition-colors duration-300 cursor-default"
            >
              <img src={company} alt="company-logo" className='w-20' />
            </div>
          ))}
          
          {/* Second Set  */}
          {companies.map((company, index) => (
            <div
              key={`second-${index}`}
              className="shrink-0 text-blue-950 font-['JetBrains_Mono'] text-sm border border-gray-700 p-3 rounded-lg bg-white hover:border-blue-500 transition-colors duration-300 cursor-default"
            >
              <img src={company} alt="company-logo" className='w-20' />
            </div>
          ))}
        </motion.div>
      </div>

      
    </div>
  )
}

export default TrustedBy