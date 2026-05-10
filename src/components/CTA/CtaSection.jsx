import { motion } from 'framer-motion'
import { FaArrowRight } from 'react-icons/fa'

const CtaSection = () => (
  <section id="cta" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
    <motion.div
      className="border border-white/5 rounded-xl p-12 md:p-16 bg-[#1E293B]/50 text-center max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-5xl font-bold text-white font-['JetBrains_Mono'] mb-4 leading-tight">
        Ready to stop losing revenue<br />to chargebacks?
      </h2>
      <p className="text-gray-400 font-['IBM_Plex_Mono'] text-sm mb-10 max-w-lg mx-auto">
        Join hundreds of brands already recovering chargeback revenue with RevenaPath.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="group inline-flex items-center justify-center gap-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white px-8 py-4 rounded-lg font-['JetBrains_Mono'] font-medium text-sm transition-colors">
          Talk to sales
          <FaArrowRight className="text-xs group-hover:translate-x-0.5 transition-transform" />
        </button>
        <button className="inline-flex items-center justify-center border border-white/5 hover:border-white/10 text-gray-300 hover:text-white px-8 py-4 rounded-lg font-['JetBrains_Mono'] font-medium text-sm transition-colors">
          View pricing
        </button>
      </div>
    </motion.div>
  </section>
)

export default CtaSection