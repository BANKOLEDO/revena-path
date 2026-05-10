import { motion } from 'framer-motion'

const companies = [
  '/assets/companies/nimbus.png',
  '/assets/companies/vertex.png',
  '/assets/companies/bluecrate.png',
  '/assets/companies/atlas.png',
  '/assets/companies/primewholesale.png',
  '/assets/companies/linea.png',
]

const TrustedBy = () => {
  const content = [...companies, ...companies]

  return (
    <div className="mt-16">
      <motion.p
        className="text-gray-500 font-['JetBrains_Mono'] text-xs tracking-widest text-center mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        TRUSTED BY OPERATIONS TEAMS WORLDWIDE
      </motion.p>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-[#0F172A] z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-[#0F172A] z-10" />

        <motion.div
          className="flex gap-6 items-center"
          animate={{ x: [0, -600] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 20,
              ease: 'linear',
            },
          }}
        >
          {content.map((src, i) => (
            <div
              key={i}
              className="shrink-0 border border-gray-700/50 rounded-lg px-6 py-4 bg-white"
            >
              <img src={src} alt="" className="w-20 h-8 object-contain" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default TrustedBy