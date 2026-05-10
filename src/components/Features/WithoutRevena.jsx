import { motion } from 'framer-motion'
import { FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa'

const issues = [
  'Hours wasted reviewing chargeback reports manually',
  'Missed penalties from scattered data',
  'Slow dispute turnaround — every step by hand',
  'No real-time visibility into margin-killing deductions',
  'Spreadsheet hell and version conflicts',
  'Retail fines pile up before you notice',
]

const solutions = [
  'Automated detection & dispute filing',
  'Real-time tracking across all retailers',
  'AI-powered evidence in minutes',
  'Centralized dashboard with actionable analytics',
  'Seamless integrations',
  '80%+ average recovery rate',
]

const WithoutRevena = () => (
  <section id="comparison" className="max-w-7xl mx-auto px-6 py-16 md:py-24">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white font-['JetBrains_Mono'] mb-2">WITH vs WITHOUT</h2>
      <p className="text-gray-400 font-['IBM_Plex_Mono'] text-sm mb-10 max-w-2xl">
        Up to 7% of revenue disappears to chargebacks. The choice is yours.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 gap-0 rounded-xl overflow-hidden border border-white/5">
      {/* WITHOUT */}
      <motion.div
        className="relative min-h-[420px] flex flex-col"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <img
          src="https://picsum.photos/seed/chaos-chaos/800/700"
          alt="without"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
          <span className="text-red-400 font-['JetBrains_Mono'] text-xs font-semibold tracking-[0.2em] mb-6">
            WITHOUT REVENAPATH
          </span>
          <div className="space-y-3 flex-1">
            {issues.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3"
              >
                <FaExclamationTriangle className="text-red-400/60 text-xs mt-0.5 shrink-0" />
                <span className="text-gray-300 font-['JetBrains_Mono'] text-xs">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-white/5">
            <span className="text-3xl font-bold text-red-400 font-['JetBrains_Mono']">7%</span>
            <span className="text-gray-500 font-['IBM_Plex_Mono'] text-xs ml-2">revenue lost</span>
          </div>
        </div>
      </motion.div>

      {/* WITH */}
      <motion.div
        className="relative min-h-[420px] flex flex-col"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        viewport={{ once: true }}
      >
        <img
          src="https://picsum.photos/seed/clean-success/800/700"
          alt="with"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#0F172A]/80" />
        <div className="relative z-10 p-8 md:p-10 flex flex-col h-full">
          <span className="text-[#10B981] font-['JetBrains_Mono'] text-xs font-semibold tracking-[0.2em] mb-6">
            WITH REVENAPATH
          </span>
          <div className="space-y-3 flex-1">
            {solutions.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3"
              >
                <FaCheckCircle className="text-[#10B981] text-xs mt-0.5 shrink-0" />
                <span className="text-gray-300 font-['JetBrains_Mono'] text-xs">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-white/5">
            <span className="text-3xl font-bold text-[#10B981] font-['JetBrains_Mono']">80%+</span>
            <span className="text-gray-500 font-['IBM_Plex_Mono'] text-xs ml-2">revenue recovered</span>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)

export default WithoutRevena