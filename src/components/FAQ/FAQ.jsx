import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  { q: 'What types of chargebacks does RevenaPath handle?', a: 'RevenaPath handles all retail chargeback types including shortages, pricing discrepancies, compliance penalties, late delivery claims, and damaged goods claims across major retailer portals.' },
  { q: 'How long does it take to integrate with my systems?', a: 'Most customers are up and running within 2 weeks. Our platform supports API integration, EDI connectivity, and direct file uploads for seamless data ingestion.' },
  { q: 'What is the average recovery rate?', a: 'Our customers achieve an average recovery rate of 86% on disputed chargebacks, with top performers seeing rates above 92%.' },
  { q: 'Do I need technical expertise to use RevenaPath?', a: 'No. RevenaPath is designed for operations and finance teams. Our intuitive dashboard and automated workflows require no technical expertise.' },
  { q: 'Which retailer portals do you support?', a: 'We support all major retail portals including Walmart Retail Link, Target, Amazon Vendor Central, Home Depot, Lowe\'s, and over 50 others.' },
  { q: 'Can I cancel my subscription at any time?', a: 'Yes. You can cancel your subscription at any time with no penalties. All your data will be exported and available for download.' },
]

const FAQ = () => {
  const [open, setOpen] = useState(null)

  return (
    <section id="faq" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <motion.div
        className="max-w-2xl mx-auto text-center mb-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white font-['JetBrains_Mono'] mb-4">FREQUENTLY ASKED QUESTIONS</h2>
        <p className="text-gray-400 font-['IBM_Plex_Mono'] text-sm">
          Everything you need to know about RevenaPath.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            className="border border-white/5 rounded-xl overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            viewport={{ once: true, margin: '-50px' }}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left text-white font-['JetBrains_Mono'] text-sm hover:bg-white/[0.02] transition-colors"
            >
              {faq.q}
              <ChevronDown
                className={`w-4 h-4 text-gray-500 transition-transform duration-200 shrink-0 ml-4 ${
                  open === i ? 'rotate-180' : ''
                }`}
              />
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-5 text-gray-400 font-['IBM_Plex_Mono'] text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default FAQ