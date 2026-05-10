import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter, FaGithub, FaArrowUp } from 'react-icons/fa'

const links = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img src="/assets/logo/logo-light-transparent.png" className="h-8 mb-5" alt="revenapath" />
            <p className="text-gray-500 font-['IBM_Plex_Mono'] text-sm leading-relaxed max-w-md">
              RevenaPath helps consumer brands reclaim revenue lost to avoidable chargebacks through intelligent automation and AI-powered dispute resolution.
            </p>
            <div className="flex gap-3 mt-6">
              {[FaLinkedin, FaTwitter, FaGithub].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg border border-white/5 flex items-center justify-center text-gray-500 hover:text-white hover:border-white/10 transition-colors"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-['JetBrains_Mono'] font-bold text-xs mb-5 tracking-widest uppercase">Links</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-white transition-colors font-['IBM_Plex_Mono'] text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 font-['IBM_Plex_Mono'] text-xs">&copy; {new Date().getFullYear()} RevenaPath. All rights reserved. Built by <a href="https://devolabanks.xyz" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">dev_olabanks</a>.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors font-['JetBrains_Mono'] text-xs"
          >
            Back to top
            <FaArrowUp className="text-[10px]" />
          </button>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer