import { motion } from "framer-motion"
import { 
    FaUpload,
    FaRobot, 
    FaCheckCircle, 
    FaTrophy 
} from "react-icons/fa";

const HowItWorks = () => {
    const steps = [
        {
            id: 1,
            title: "Connect Your Data",
            tagline: "SEAMLESS INTEGRATION",
            description:
                "Upload your retail and logistics data to RevenaPath. Our platform automatically integrates with your existing systems through APIs or direct file uploads, normalizing all your chargeback information in one secure location.",
            icon: FaUpload,
        },
        {
            id: 2,
            title: "AI Analysis",
            tagline: "INTELLIGENT PROCESSING",
            description:
                "Our advanced AI engine analyzes every chargeback claim, identifying invalid disputes and discrepancies. Document X-ray reads shipping documents with human-level accuracy to build bulletproof cases for recovery.",
            icon: FaRobot,
        },
        {
            id: 3,
            title: "Auto-Dispute",
            tagline: "AUTOMATED RESOLUTION",
            description:
                "RevenaPath automatically submits dispute claims with complete documentation. Our system handles the entire process—from evidence compilation to retailer communication—while you focus on growing your business.",
            icon: FaCheckCircle,
        },
        {
            id: 4,
            title: "Recover Revenue",
            tagline: "PROVEN RESULTS",
            description:
                "Track your recovery progress in real-time with detailed analytics. Monitor win rates, dispute status, and revenue recovered across all retail partners. Get insights that drive operational improvements.",
            icon: FaTrophy,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const iconVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" },
        },
        hover: {
            scale: 1.02,
            transition: { duration: 0.3 }
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            <motion.div 
                className="flex flex-col gap-8 p-6 md:p-8 border-2 border-blue-800 text-blue-950 bg-white rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    <h1 className="font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-2">
                        HOW IT WORKS
                    </h1>
                    <p className="text-sm md:text-base text-blue-950 font-semibold tracking-wide uppercase">
                        Four simple steps to recover lost revenue
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <motion.div 
                                key={step.id}
                                className="flex flex-col gap-4 p-6 border-2 border-blue-950 rounded-lg hover:border-blue-700 transition-colors duration-300 relative"
                                variants={itemVariants}
                                whileHover={{ y: -4 }}
                            >
                                {/* Step Number */}
                                <div className="absolute -top-4 -left-4 w-10 h-10 bg-white border-2 border-blue-800 rounded-full flex items-center justify-center font-bold text-blue-800">
                                    {index + 1}
                                </div>

                                <motion.div
                                    variants={iconVariants}
                                    whileHover="hover"
                                    className="flex items-center gap-3"
                                >
                                    <Icon className="text-2xl md:text-3xl text-blue-800 flex-shrink-0" />
                                    <h2 className="font-bold text-xl md:text-2xl">{step.title}</h2>
                                </motion.div>

                                <p className="text-xs md:text-sm font-semibold text-blue-950 tracking-wider uppercase">
                                    {step.tagline}
                                </p>

                                <p className="text-sm md:text-base leading-relaxed text-blue-950">
                                    {step.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
                
                {/* Flow Indicator */}
                <motion.div 
                    className="flex justify-center items-center gap-2 mt-8 flex-wrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    {[1, 2, 3, 4].map((item, idx) => (
                        <div key={item} className="flex items-center gap-2">
                            <motion.div 
                                className="w-2 h-2 rounded-full bg-blue-800"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ 
                                    delay: idx * 0.2,
                                    duration: 1,
                                    repeat: Infinity 
                                }}
                            />
                            {idx < 3 && <div className="w-4 h-0.5 bg-blue-800" />}
                        </div>
                    ))}
                </motion.div>

                {/* Video Section */}
                <motion.div 
                    className="w-full mt-8"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ 
                        duration: 0.8, 
                        delay: 0.6,
                        ease: "easeOut" 
                    }}
                >
                    <div className="overflow-hidden rounded-lg border-2 border-blue-800">
                        <video 
                            src='/assets/visual2.mp4' 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            className="w-full h-34 md:h-50 lg:h-[300px] object-cover"
                        />
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default HowItWorks