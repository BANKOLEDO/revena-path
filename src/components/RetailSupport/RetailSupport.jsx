import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const companies = [
  { logo: '/assets/companies/nimbus.png', name: 'Nimbus Consumer Goods' },
  { logo: '/assets/companies/vertex.png', name: 'Vertex Retail Group' },
  { logo: '/assets/companies/bluecrate.png', name: 'BlueCrate Supply' },
  { logo: '/assets/companies/atlas.png', name: 'Atlas Merch Co.' },
  { logo: '/assets/companies/primewholesale.png', name: 'PrimeWholesale' },
  { logo: '/assets/companies/linea.png', name: 'Linea Distribution' },
]

const RetailSupport = () => (
  <section id="retail-support" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
    <motion.div
      className="mb-10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white font-['JetBrains_Mono']">RETAIL SUPPORT</h2>
      <p className="text-gray-400 mt-3 font-['IBM_Plex_Mono'] text-sm">
        Trusted by forward-thinking retail and distribution teams worldwide.
      </p>
    </motion.div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {companies.map((c, i) => (
        <motion.div
          key={i}
          className="border border-white/5 rounded-xl p-6 bg-[#1E293B]/50 hover:border-white/10 transition-colors"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.08 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center h-20 mb-5 bg-white/[0.03] rounded-lg border border-white/5 px-6">
            <img src={c.logo} alt={c.name} className="max-h-10 max-w-full object-contain opacity-60" />
          </div>
          <button className="w-full border border-white/5 hover:border-[#3B82F6]/30 text-gray-400 hover:text-white rounded-lg px-4 py-3 text-sm font-['JetBrains_Mono'] font-medium transition-colors flex items-center justify-center gap-2">
            Support for {c.name}
            <FaArrowRight className="text-xs" />
          </button>
        </motion.div>
      ))}
    </div>
  </section>
)

export default RetailSupport