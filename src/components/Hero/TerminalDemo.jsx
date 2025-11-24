import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaCheck, 
  FaChartBar, 
  FaSync, 
  FaDollarSign, 
  FaBullseye, 
  FaBolt,
  FaTerminal
} from 'react-icons/fa'

const TerminalDemo = () => {
  const [currentLine, setCurrentLine] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  const terminalLines = [
    { 
      text: "revenapath --analyze --recover", 
      type: "command",
      icon: null
    },
    { 
      text: "Connecting to retailer portals...", 
      type: "process",
      icon: null
    },
    { 
      text: "Connected to Nimbus Consumer Goods", 
      type: "success",
      icon: FaCheck
    },
    { 
      text: "Connected to Vertex Retail Group", 
      type: "success",
      icon: FaCheck
    },
    { 
      text: "Connected to BlueCrate Supply", 
      type: "success",
      icon: FaCheck
    },
    { 
      text: "Analyzing chargeback data...", 
      type: "process",
      icon: null
    },
    { 
      text: "Found 127 new chargebacks this week", 
      type: "info",
      icon: FaChartBar
    },
    { 
      text: "Processing disputes...", 
      type: "process",
      icon: null
    },
    { 
      text: "Auto-submitting 89 disputes", 
      type: "info",
      icon: FaSync
    },
    { 
      text: "Revenue recovered: $47,281", 
      type: "success",
      icon: FaDollarSign
    },
    { 
      text: "Success rate: 86%", 
      type: "success",
      icon: FaBullseye
    },
    { 
      text: "Average processing time: 2.3h", 
      type: "info",
      icon: FaBolt
    }
  ]

  useEffect(() => {
    if (currentLine < terminalLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1)
      }, 400)
      
      return () => clearTimeout(timer)
    } else {
      setIsComplete(true)
    }
  }, [currentLine])

  const getLineColor = (type) => {
    switch (type) {
      case 'command': return 'text-green-400'
      case 'success': return 'text-green-500'
      case 'info': return 'text-blue-400'
      case 'process': return 'text-gray-300'
      default: return 'text-gray-300'
    }
  }

  const getIconColor = (type) => {
    switch (type) {
      case 'success': return 'text-green-500'
      case 'info': return 'text-blue-400'
      default: return 'text-gray-400'
    }
  }

  return (
    <div className="mt-20 bg-gray-900 border border-gray-700 rounded-lg p-6 max-w-7xl mx-auto font-['JetBrains_Mono'] text-sm">
      {/* Terminal Header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex items-center text-white text-xs">
          <FaTerminal className="mr-2" />
          revenapath — active
        </div>
      </div>
      
      {/* Terminal Content */}
      <div className="space-y-3">
        <AnimatePresence>
          {terminalLines.slice(0, currentLine + 1).map((line, index) => {
            const IconComponent = line.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`flex items-start space-x-3 ${getLineColor(line.type)}`}
              >
                {line.type === 'command' && (
                  <span className="text-blue-400 font-bold">$</span>
                )}
                {IconComponent && (
                  <IconComponent 
                    className={`mt-0.5 shrink-0 ${getIconColor(line.type)}`} 
                    size={14} 
                  />
                )}
                {!IconComponent && line.type !== 'command' && (
                  <span className="text-gray-500">▌</span>
                )}
                <span className="flex-1">
                  {line.text}
                  {index === currentLine && !isComplete && (
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="ml-1"
                    >
                      █
                    </motion.span>
                  )}
                </span>
              </motion.div>
            )
          })}
        </AnimatePresence>

        {/* Progress Bar */}
        {isComplete && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center mt-6 pt-4 border-t border-gray-700"
          >
            <div className="w-48 bg-gray-700 rounded-full h-2 mr-4">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '92%' }}
                transition={{ duration: 1, delay: 0.5 }}
                className="bg-green-500 h-2 rounded-full"
              />
            </div>
            <span className="text-gray-400 text-xs">Processing complete</span>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default TerminalDemo