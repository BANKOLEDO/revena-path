import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaChartLine, FaShieldAlt, FaClock } from 'react-icons/fa'

const stats = [
  { label: 'Revenue Recovered', value: 47, suffix: 'M+', icon: FaChartLine, color: 'text-[#10B981]' },
  { label: 'Disputes Won', value: 128, suffix: 'K+', icon: FaShieldAlt, color: 'text-[#3B82F6]' },
  { label: 'Hours Saved', value: 250, suffix: 'K+', icon: FaClock, color: 'text-[#F59E0B]' },
]

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      setCount(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [started, target, duration])

  return [count, ref]
}

const StatCard = ({ stat, index }) => {
  const [count, ref] = useCountUp(stat.value)
  const Icon = stat.icon

  return (
    <motion.div
      ref={ref}
      className="text-center p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Icon className={`text-2xl ${stat.color} mx-auto mb-3`} />
      <p className="text-4xl font-bold text-white mb-1">{count}{stat.suffix}</p>
      <p className="text-sm text-gray-500 font-['JetBrains_Mono']">{stat.label}</p>
    </motion.div>
  )
}

const StatsBar = () => (
  <section id="stats" className="max-w-7xl mx-auto px-6 -mt-12">
    <motion.div
      className="border border-white/5 rounded-xl bg-[#1E293B] grid md:grid-cols-3"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      {stats.map((stat, i) => (
        <StatCard key={stat.label} stat={stat} index={i} />
      ))}
    </motion.div>
  </section>
)

export default StatsBar