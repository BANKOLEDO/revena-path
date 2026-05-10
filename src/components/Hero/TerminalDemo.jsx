import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaCheck, FaArrowUp, FaClock } from 'react-icons/fa'

const TerminalDemo = () => {
  const [visibleLogs, setVisibleLogs] = useState(0)
  const [complete, setComplete] = useState(false)

  const logs = [
    { text: 'Nimbus Consumer Goods - batch 8921', status: 'disputed', time: '2.1m' },
    { text: 'Vertex Retail Group - batch 4517', status: 'won', time: '1.8m' },
    { text: 'BlueCrate Supply - batch 7743', status: 'disputed', time: '3.2m' },
    { text: 'Nimbus Consumer Goods - batch 8927', status: 'won', time: '1.4m' },
    { text: 'Vertex Retail Group - batch 4522', status: 'won', time: '0.9m' },
    { text: 'BlueCrate Supply - batch 7751', status: 'disputed', time: '2.7m' },
    { text: 'Nimbus Consumer Goods - batch 8934', status: 'won', time: '1.6m' },
    { text: 'Vertex Retail Group - batch 4530', status: 'disputed', time: '3.8m' },
    { text: 'BlueCrate Supply - batch 7760', status: 'won', time: '1.2m' },
    { text: 'Nimbus Consumer Goods - batch 8940', status: 'won', time: '2.3m' },
  ]

  useEffect(() => {
    if (visibleLogs < logs.length) {
      const t = setTimeout(() => setVisibleLogs((p) => p + 1), 300)
      return () => clearTimeout(t)
    }
  }, [visibleLogs, logs.length])

  useEffect(() => {
    if (visibleLogs === logs.length) {
      const t = setTimeout(() => setComplete(true), 200)
      return () => clearTimeout(t)
    }
  }, [visibleLogs, logs.length])

  const metrics = [
    { label: 'Disputed', value: '127', color: 'text-[#3B82F6]' },
    { label: 'Recovered', value: '94', color: 'text-[#10B981]' },
    { label: 'Win Rate', value: '86%', color: 'text-[#10B981]' },
    { label: 'Avg Time', value: '2.3h', color: 'text-[#F59E0B]' },
  ]

  return (
    <div className="mt-12 max-w-7xl mx-auto">
      <div className="border border-white/5 rounded-xl bg-[#1E293B] font-['JetBrains_Mono'] overflow-hidden">
        {/* Header */}
        <div className="px-5 py-3 border-b border-white/5 flex items-center justify-between bg-[#1E293B]/80">
          <div className="flex items-center gap-3">
            <span className="text-[#3B82F6] text-[10px] sm:text-xs font-semibold tracking-wider truncate">REVENAPATH v3.2 — RECOVERY CONSOLE</span>
          </div>
          <span className="text-[#10B981] text-xs flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            live
          </span>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-white/5">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`px-4 sm:px-5 py-3 sm:py-4 ${i < 3 && (i + 1) % 2 !== 0 ? 'border-r border-white/5' : ''} ${i < 3 ? 'sm:border-r' : ''} ${i < 2 ? 'border-b border-white/5 sm:border-b-0' : ''}`}
            >
              <div className="text-gray-500 text-[10px] tracking-wider mb-1">{m.label}</div>
              <motion.div
                className={`text-lg font-bold ${m.color}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                {m.value}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Event Log */}
        <div className="p-5">
          <div className="text-gray-500 text-[10px] tracking-wider mb-3 flex items-center gap-2">
            <FaClock />
            RECENT DISPUTES
          </div>
          <div className="space-y-0.5">
            <AnimatePresence>
              {logs.slice(0, visibleLogs + 1).map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-3 py-1.5 text-xs border-b border-white/[0.02] last:border-0"
                >
                  {log.status === 'won' ? (
                    <FaCheck className="text-[#10B981] text-[10px] shrink-0" />
                  ) : (
                    <FaArrowUp className="text-[#3B82F6] text-[10px] shrink-0" />
                  )}
                  <span className="text-gray-300 flex-1 truncate">{log.text}</span>
                  <span className={log.status === 'won' ? 'text-[#10B981] text-[10px]' : 'text-[#3B82F6] text-[10px]'}>
                    {log.status}
                  </span>
                  <span className="text-gray-600 text-[10px] w-10 text-right">{log.time}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Summary Banner */}
      {complete && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-3 px-4 sm:px-5 py-3 rounded-lg border border-[#10B981]/20 bg-[#10B981]/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
        >
          <span className="text-[#10B981] font-['JetBrains_Mono'] text-[10px] sm:text-xs">
            Batch processing complete. Revenue recovered: $47,281
          </span>
          <span className="text-gray-500 font-['JetBrains_Mono'] text-[10px]">86% success rate</span>
        </motion.div>
      )}
    </div>
  )
}

export default TerminalDemo