import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Product', href: '#features' },
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
]

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )

    document.querySelectorAll('section[id]').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id) => {
    setIsMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0F172A] border-b border-white/5' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="shrink-0">
          <img src="/assets/logo/logo-light-transparent.png" className="h-8 md:h-9 w-auto" alt="revenapath" />
        </button>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href.slice(1))}
              className={`px-4 py-2 text-sm font-['JetBrains_Mono'] transition-colors ${
                active === link.href.slice(1)
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="ml-4 pl-4 border-l border-white/10">
            <button
              onClick={() => scrollTo('cta')}
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-5 py-2.5 rounded-lg text-sm font-['JetBrains_Mono'] font-medium transition-colors"
            >
              Get started
            </button>
          </div>
        </div>

        <button
          className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/60 z-40 md:hidden"
                onClick={() => setIsMenuOpen(false)}
              />
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: '100%' }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="fixed top-0 right-0 h-full w-72 bg-[#0F172A] border-l border-white/5 z-50 md:hidden"
              >
                <div className="flex justify-end p-4">
                  <button className="text-gray-400 hover:text-white p-2" onClick={() => setIsMenuOpen(false)}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col gap-1 px-4">
                  {[...links, { label: 'FAQ', href: '#faq' }].map((link, i) => (
                    <motion.button
                      key={link.label}
                      onClick={() => scrollTo(link.href.slice(1))}
                      className="text-left text-gray-400 hover:text-white transition-colors py-3 px-4 hover:bg-white/5 rounded-lg font-['JetBrains_Mono'] text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      {link.label}
                    </motion.button>
                  ))}
                  <button
                    onClick={() => scrollTo('cta')}
                    className="bg-[#3B82F6] hover:bg-[#2563EB] text-white px-6 py-3 rounded-lg text-sm font-['JetBrains_Mono'] font-medium mt-4 mx-2 transition-colors"
                  >
                    Get started
                  </button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation