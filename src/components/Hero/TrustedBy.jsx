import React from 'react'
import { motion } from 'framer-motion'

const TrustedBy = () => {
  const companies = [
    "Nimbus Consumer Goods",
    "Vertex Retail Group", 
    "BlueCrate Supply",
    "Atlas Merch Co.",
    "PrimeWholesale",
    "Linea Distribution",
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
            x: [0, -1032]
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
              className="shrink-0 text-blue-950 font-['JetBrains_Mono'] text-sm border border-gray-700 px-6 py-3 rounded-lg bg-[#f0f5fd] hover:border-blue-500 transition-colors duration-300 cursor-default"
            >
              {company}
            </div>
          ))}
          
          {/* Second Set  */}
          {companies.map((company, index) => (
            <div
              key={`second-${index}`}
              className="shrink-0 text-blue-950 font-['JetBrains_Mono'] text-sm border border-gray-700 px-6 py-3 rounded-lg bg-white hover:border-blue-500 transition-colors duration-300 cursor-default"
            >
              {company}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Responsive Grid for Mobile */}
      <div className="md:hidden mt-8">
        <div className="grid grid-cols-2 gap-4">
          {companies.slice(0, 4).map((company, index) => (
            <motion.div
              key={index}
              className="text-blue-950 font-['JetBrains_Mono'] text-xs border border-gray-700 px-4 py-2 rounded-lg bg-white text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrustedBy