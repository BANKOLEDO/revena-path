import React from "react"
import { motion } from "framer-motion"
import { 
    FaFileInvoiceDollar, 
    FaClock, 
    FaExclamationTriangle, 
    FaChartLine, 
    FaUserEdit, 
    FaDatabase 
} from "react-icons/fa";

const WithoutRevena = () => {

const issues = [
    {
        id: 1,
        issue: "Hours wasted manually reviewing chargeback reports",
        icon: FaClock,
    },
    {
        id: 2,
        issue: "High risk of missed penalties due to scattered data",
        icon: FaExclamationTriangle,
    },
    {
        id: 3,
        issue: "Slow dispute turnaround because every step is done by hand",
        icon: FaUserEdit,
    },
    {
        id: 4,
        issue: "No real-time visibility into which deductions hurt margins most",
        icon: FaChartLine,
    },
    {
        id: 5,
        issue: "Constant spreadsheet updates and version conflicts",
        icon: FaDatabase,
    },
    {
        id: 6,
        issue: "Retail portal fines accumulate before they’re even noticed",
        icon: FaFileInvoiceDollar,
    },
];

    return (
        <div className="max-w-7xl 2xl:mx-auto m-6 p-8 border border-gray-700 rounded-lg">
            <motion.p 
                className="text-white font-['JetBrains_Mono'] text-3xl lg:text-4xl mb-12 tracking-wide font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                WITHOUT REVENAPATH
            </motion.p>
        {/* Marquee Container */}
              <div className="relative overflow-hidden">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-[#0F172A] to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-[#0F172A] to-transparent z-10" />
                
                {/* Marquee Content */}
                <motion.div 
                  className="flex gap-8 items-center"
                  animate={{
                    x: [0, -1032] // Adjust based on total width of one set
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 30,
                      ease: "linear",
                    }
                  }}
                >
                  {/* First Set */}
                  {issues.map((issue, index) => {
                    const IconComponent = issue.icon;
                    return (
                        <div
                      key={`first-${index}`}
                      className="flex flex-row gap-2 items-center shrink-0 text-blue-950 font-['JetBrains_Mono'] text-sm border border-gray-700 px-6 py-3 rounded-lg bg-[#f0f5fd] hover:border-blue-500 transition-colors duration-300 cursor-default"
                    > 
                      <IconComponent className="text-blue-900 text-2xl"/>
                      {issue.issue}
                    </div>
                    )
                })}
                  
                  {/* Second Set (Duplicate for seamless loop) */}
                  {issues.map((issue, index) => {
                    const IconComponent = issue.icon;
                    return (
                        <div
                      key={`second-${index}`}
                      className="shrink-0 text-blue-950 font-['JetBrains_Mono'] text-sm border border-gray-700 px-6 py-3 rounded-lg bg-white hover:border-blue-500 transition-colors duration-300 cursor-default"
                    > 
                      <IconComponent className="text-blue-900 text-2xl"/>
                      {issue.issue}
                    </div>
                    )
                })}
                </motion.div>
              </div>
              <div className="flex flex-col lg:flex-row lg:gap-4 lg:space-x-10 gap-2 mt-3">
                <span>Up to 7% of revenue disappears to chargebacks — from shortages, fines, and compliance penalties.</span>
                <span>Manual workflows and scattered data make the losses even worse.</span>
              </div>
            </div>
    )
}

export default WithoutRevena