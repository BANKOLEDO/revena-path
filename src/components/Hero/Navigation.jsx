import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className=" max-w-7xl 2xl:mx-auto flex items-center justify-between py-2 m-6 px-6 bg-white relative z-50 border-2 rounded-sm">
      {/* Logo */}
      <motion.img 
        src="/assets/logo/logo-dark-transparent.png" 
        className="w-40" 
        alt="logo" 
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      />
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-1">
        {['Product', 'Blog', 'Pricing'].map((item) => (
          <motion.a
            key={item}
            href="#"
            className="relative px-6 py-3 text-sm text-blue-950 group"
            whileHover={{ color: "#3B82F6" }}
            transition={{ duration: 0.2 }}
          >
            {item}
            <motion.div
              className="absolute bottom-2 left-6 right-6 h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100"
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        ))}
        

        <motion.button
          className="bg-gray-900 text-white px-2 py-3 rounded text-sm font-['JetBrains_Mono'] hover:bg-blue-600 transition-colors duration-200 border border-blue-400/30"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Get started
        </motion.button>
      </div>

      {/* Mobile Menu Button */}
      <motion.button 
        className="md:hidden text-[#0F172A] p-2 hover:bg-[#1E293B] hover:text-white rounded transition-colors duration-200"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileTap={{ scale: 0.9 }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </motion.button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-[#f8f8f8] border-b border-gray-700 md:hidden shadow-xl z-50"
            >
              <div className="flex flex-col space-y-0 px-2 py-4 font-['JetBrains_Mono']">
                {['Product', 'Retailers', 'Blog', 'Pricing', 'Sign in'].map((item, index) => (
                  <motion.a
                    key={item}
                    href="#"
                    className="text-[#0F172A] hover:text-blue-400 transition-colors duration-200 py-3 px-6 hover:bg-[#0F172A] rounded mx-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </motion.a>
                ))}
                <motion.button 
                  className="bg-blue-950 text-white px-6 py-3 rounded text-sm hover:bg-blue-600 transition-colors duration-200 mx-2 mt-2 border border-blue-400/30"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get started
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation