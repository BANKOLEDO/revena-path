import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'

const testimonials = [
  { name: 'Sarah Chen', position: 'Supply Chain Director', company: 'Nimbus Consumer Goods', testimonial: 'RevenaPath has transformed how we handle chargebacks. Our recovery rate increased by 47% and we\'ve cut manual review time by 22 hours per week. The automated dispute engine is a game-changer.' },
  { name: 'Marcus Rodriguez', position: 'Regional Operations Manager', company: 'Vertex Retail Group', testimonial: 'Since deploying RevenaPath, our chargeback dispute accuracy has reached 99.8%. The real-time analytics dashboard alone has saved us 15 hours of reporting work each week.' },
  { name: 'Jamie Wilson', position: 'Logistics Coordinator', company: 'BlueCrate Supply', testimonial: 'The AI-powered document analysis has revolutionized our dispute process. We\'ve seen a 31% improvement in win rates and significantly reduced the time spent gathering evidence.' },
  { name: 'Priya Sharma', position: 'Chief Procurement Officer', company: 'Atlas Merch Co.', testimonial: 'RevenaPath streamlined our chargeback workflows so effectively that we\'ve cut dispute processing time by 60%. Game-changing for our seasonal revenue recovery.' },
  { name: 'Thomas Reed', position: 'Director of Wholesale Operations', company: 'PrimeWholesale', testimonial: 'Implementation was seamless, and within three months we were recovering 40% more chargeback revenue with the same team size. The ROI exceeded our projections by month six.' },
  { name: 'Elena Petrova', position: 'Distribution Network Manager', company: 'Linea Distribution', testimonial: 'The automated compliance tools have reduced our chargeback penalties by 18% and improved our retailer relationships. The intuitive dashboard makes tracking disputes effortless.' },
  { name: 'David Park', position: 'Inventory Control Specialist', company: 'Nimbus Consumer Goods', testimonial: 'The automated reporting features have eliminated manual data entry errors and provided our finance team with cleaner numbers for quarterly forecasting.' },
  { name: 'Lisa Carmichael', position: 'Retail Operations VP', company: 'Vertex Retail Group', testimonial: 'Their customer support team responds in under 15 minutes during business hours. That level of responsiveness is rare in enterprise software solutions.' },
  { name: 'Robert Flynn', position: 'Warehouse Supervisor', company: 'BlueCrate Supply', testimonial: 'The portal integration cut our chargeback submission process time in half. Our team adapted quickly to the intuitive interface with minimal training required.' },
  { name: 'Aisha Johnson', position: 'Merchandise Planner', company: 'Atlas Merch Co.', testimonial: 'The trend analysis module helped us identify chargeback patterns and reduce recurrence by 35% while maintaining optimal compliance across all retail partners.' },
  { name: 'Carlos Mendez', position: 'Operations Analyst', company: 'PrimeWholesale', testimonial: 'The API documentation was so comprehensive that our developers had the integration running in production within two weeks. Outstanding technical support throughout.' },
  { name: 'Michaela Zhou', position: 'Logistics Director', company: 'Linea Distribution', testimonial: 'We\'ve expanded into three new retail partnerships using RevenaPath\'s compliance tools. The scalability has been instrumental to our growth strategy this year.' },
]

const Testimonials = () => {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(0)
  const [auto, setAuto] = useState(true)

  const next = () => {
    setDir(1)
    setCurrent((p) => (p === testimonials.length - 1 ? 0 : p + 1))
  }

  const prev = () => {
    setDir(-1)
    setCurrent((p) => (p === 0 ? testimonials.length - 1 : p - 1))
  }

  const goTo = (i) => {
    setDir(i > current ? 1 : -1)
    setCurrent(i)
    setAuto(false)
  }

  useEffect(() => {
    if (!auto) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [auto, current])

  const variants = {
    enter: (d) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1, transition: { duration: 0.35 } },
    exit: (d) => ({ x: d < 0 ? 200 : -200, opacity: 0, transition: { duration: 0.25 } }),
  }

  const initials = (name) => name.split(' ').map((n) => n[0]).join('')

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white font-['JetBrains_Mono']">WHAT OUR CUSTOMERS SAY</h2>
        <p className="text-gray-400 mt-3 font-['IBM_Plex_Mono'] text-sm">
          Hear from industry leaders who transformed their chargeback recovery with RevenaPath.
        </p>
      </motion.div>

      <div className="relative">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 border border-white/5 hover:border-white/10 bg-[#0F172A] rounded-full p-2.5 transition-colors"
        >
          <ChevronLeft className="w-4 h-4 text-gray-400" />
        </button>

        <div className="relative h-[340px] md:h-[280px] overflow-hidden mx-8">
          <AnimatePresence mode="wait" custom={dir} initial={false}>
            <motion.div
              key={current}
              custom={dir}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0"
            >
              <div className="border border-white/5 rounded-xl p-8 md:p-10 bg-[#1E293B]/50 h-full flex flex-col justify-between">
                <div>
                  <div className="text-white/5 text-7xl font-serif leading-none mb-4">&ldquo;</div>
                  <p className="text-gray-300 font-['IBM_Plex_Mono'] text-sm md:text-base leading-relaxed">
                    &ldquo;{testimonials[current].testimonial}&rdquo;
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5 mt-6 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#3B82F6]/10 border border-white/5 flex items-center justify-center text-xs font-bold text-[#3B82F6]">
                    {initials(testimonials[current].name)}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{testimonials[current].name}</p>
                    <p className="text-gray-500 text-xs">{testimonials[current].position} &middot; {testimonials[current].company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 border border-white/5 hover:border-white/10 bg-[#0F172A] rounded-full p-2.5 transition-colors"
        >
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      <div className="flex flex-col items-center mt-8 gap-4">
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-6 bg-[#3B82F6]' : 'w-1.5 bg-white/10 hover:bg-white/20'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setAuto(!auto)}
            className="flex items-center gap-2 px-3 py-1.5 border border-white/5 rounded-lg text-gray-400 hover:text-white hover:border-white/10 transition-colors text-xs font-['JetBrains_Mono']"
          >
            {auto ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            {auto ? 'Pause' : 'Play'}
          </button>
          <span className="text-gray-600 text-xs font-['JetBrains_Mono']">
            {String(current + 1).padStart(2, '0')}/{String(testimonials.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Testimonials