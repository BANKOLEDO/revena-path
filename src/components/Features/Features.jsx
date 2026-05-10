import { motion } from 'framer-motion'
import { FaPlug, FaRobot, FaChartLine } from 'react-icons/fa'

const features = [
  {
    title: 'CONNECTIONS',
    items: ['3PL Integrations', 'EDI Connectivity', 'Retail/Vendor Portals'],
    icon: FaPlug,
  },
  {
    title: 'AUTOMATION',
    items: ['Automated Dispute Engine', 'Logistics Intelligence', 'AI-Assisted Validation'],
    icon: FaRobot,
  },
  {
    title: 'INSIGHTS',
    items: ['Actionable Reporting', 'Performance Metrics', 'Chargeback Trends'],
    icon: FaChartLine,
  },
]

const Features = () => (
  <section id="features" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
    <motion.div
      className="max-w-2xl mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <span className="text-[#3B82F6] text-xs font-['JetBrains_Mono'] tracking-widest uppercase">Platform Capabilities</span>
      <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight">
        Skip the manual busywork.{' '}
        <span className="text-[#3B82F6]">Recover what you&apos;ve earned.</span>
      </h2>
      <p className="text-gray-400 font-['IBM_Plex_Mono'] text-sm leading-relaxed">
        RevenaPath plugs into your existing systems to organize, analyze, and streamline chargeback workflows automatically.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-5">
      {features.map((f, i) => {
        const Icon = f.icon
        return (
          <motion.div
            key={f.title}
            className="border border-white/5 rounded-xl p-7 hover:border-white/10 transition-colors bg-[#1E293B]/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-lg border border-white/5 flex items-center justify-center mb-5 bg-white/[0.03]">
              <Icon className="text-xl text-[#3B82F6]" />
            </div>

            <span className="inline-block px-3 py-1 rounded border border-white/5 text-[#3B82F6] text-xs font-['JetBrains_Mono'] font-bold tracking-wider mb-5">
              {f.title}
            </span>

            <ul className="space-y-2.5">
              {f.items.map((item) => (
                <li key={item} className="text-gray-400 font-['JetBrains_Mono'] text-sm border-l-2 border-white/5 pl-3 hover:border-[#3B82F6] hover:text-white transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        )
      })}
    </div>
  </section>
)

export default Features