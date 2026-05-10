import { motion } from 'framer-motion'
import { FaCheck } from 'react-icons/fa'

const plans = [
  {
    name: 'Starter',
    price: '499',
    desc: 'For small teams getting started with chargeback recovery.',
    features: ['Up to 500 disputes/month', 'Basic analytics dashboard', 'Email support', '1 user seat', 'Standard integrations'],
  },
  {
    name: 'Growth',
    price: '999',
    desc: 'For growing teams ready to scale their recovery operations.',
    features: ['Up to 2,000 disputes/month', 'Advanced analytics & reporting', 'Priority email & chat support', '5 user seats', 'All integrations', 'AI-powered evidence compilation', 'API access'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '2,499',
    desc: 'For large organizations with complex chargeback needs.',
    features: ['Unlimited disputes', 'Real-time analytics & custom reports', 'Dedicated account manager', 'Unlimited user seats', 'Custom integrations', 'Advanced AI & automation', 'API access & webhooks', 'SLA guarantee'],
  },
]

const Pricing = () => (
  <section id="pricing" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
    <motion.div
      className="text-center max-w-2xl mx-auto mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white font-['JetBrains_Mono'] mb-4">SIMPLE PRICING</h2>
      <p className="text-gray-400 font-['IBM_Plex_Mono'] text-sm">
        Start recovering chargeback revenue today. No hidden fees.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {plans.map((plan, i) => (
        <motion.div
          key={plan.name}
          className={`relative rounded-xl border p-8 ${
            plan.popular ? 'border-[#3B82F6] bg-[#1E293B]' : 'border-white/5 bg-[#1E293B]/50 hover:border-white/10'
          } transition-colors`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          {plan.popular && (
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#3B82F6] text-white text-xs font-['JetBrains_Mono'] font-bold rounded">
              POPULAR
            </span>
          )}
          <h3 className="text-white font-bold font-['JetBrains_Mono'] text-lg">{plan.name}</h3>
          <p className="text-gray-400 text-sm mt-2 mb-5 font-['IBM_Plex_Mono']">{plan.desc}</p>
          <div className="flex items-baseline gap-1 mb-8">
            <span className="text-4xl font-bold text-white">${plan.price}</span>
            <span className="text-gray-500 text-sm">/month</span>
          </div>
          <button
            className={`w-full py-3 rounded-lg text-sm font-['JetBrains_Mono'] font-medium transition-colors mb-8 ${
              plan.popular
                ? 'bg-[#3B82F6] hover:bg-[#2563EB] text-white'
                : 'border border-white/5 text-gray-300 hover:border-white/10 hover:text-white'
            }`}
          >
            Get started
          </button>
          <ul className="space-y-3">
            {plan.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-gray-400 text-sm">
                <FaCheck className="text-[#10B981] text-xs shrink-0" />
                <span className="font-['IBM_Plex_Mono'] text-xs">{f}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
)

export default Pricing