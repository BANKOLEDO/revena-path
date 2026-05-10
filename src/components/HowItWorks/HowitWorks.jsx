import { motion } from 'framer-motion'

const steps = [
  {
    id: 1,
    title: 'Connect',
    subtitle: 'Your data feeds in. Simple.',
    desc: 'Connect your retail and logistics data through APIs or uploads. RevenaPath normalizes everything into one secure hub — no manual wrangling, no missed chargeback.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=85&auto=format&fit=crop',
    align: 'left',
  },
  {
    id: 2,
    title: 'Analyze',
    subtitle: 'AI that actually reads.',
    desc: 'Every claim is dissected by our AI — spotting invalid disputes, reading shipping docs, grading evidence strength. What took hours now takes seconds.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=85&auto=format&fit=crop',
    align: 'right',
  },
  {
    id: 3,
    title: 'Dispute',
    subtitle: 'Fight back, automatically.',
    desc: 'We compile evidence, draft disputes, and submit to retailers — all hands-off. Your team gets results without drowning in paperwork.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=85&auto=format&fit=crop',
    align: 'left',
  },
  {
    id: 4,
    title: 'Recover',
    subtitle: 'Revenue you already earned.',
    desc: 'Real-time dashboards track every dispute, win rate, and dollar recovered. Watch lost revenue flow back where it belongs — your bottom line.',
    image: 'https://images.unsplash.com/photo-1711606815631-38d32cdaec3e?w=600&auto=format&fit=crop',
    align: 'right',
  },
]

const HowItWorks = () => (
  <section id="how-it-works" className="max-w-7xl mx-auto px-6 py-6">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white font-['JetBrains_Mono'] mb-2">HOW IT WORKS</h2>
      <p className="text-gray-400 font-['IBM_Plex_Mono'] text-sm mb-12">
        Four moves. One outcome: revenue recovered.
      </p>
    </motion.div>

    <div className="space-y-6">
      {steps.map((s, i) => {
        const isLeft = s.align === 'left'
        return (
          <motion.div
            key={s.id}
            className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-0 rounded-xl overflow-hidden border border-white/5`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="w-full md:w-[55%] h-[280px] md:h-[340px] overflow-hidden">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="w-full md:w-[45%] bg-[#1E293B]/60 p-8 md:p-10 flex flex-col justify-center">
              <span className="text-[#3B82F6] font-['JetBrains_Mono'] text-xs font-semibold tracking-[0.2em] mb-3">
                STEP 0{s.id}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white font-['JetBrains_Mono'] mb-2">
                {s.title}
              </h3>
              <p className="text-white/60 font-['IBM_Plex_Mono'] text-sm mb-4">
                {s.subtitle}
              </p>
              <p className="text-gray-400 font-['IBM_Plex_Mono'] text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          </motion.div>
        )
      })}
    </div>
  </section>
)

export default HowItWorks