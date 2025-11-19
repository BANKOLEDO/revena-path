import { FaSuitcaseRolling, FaAccessibleIcon, FaAddressBook } from "react-icons/fa";

const Features = () => {
   const features = [
        {
            title: "CONNECTIONS",
            items: [
                "3PL Integrations",
                "EDI Connectivity", 
                "Retail/Vendor Portals"
            ],
            icon: FaSuitcaseRolling
        },
        {
            title: "AUTOMATION", 
            items: [
                "Automated Dispute Engine",
                "Logistics Intelligence",
                "AI-Assisted Validation"
            ],
            icon: FaAccessibleIcon
        },
        {
            title: "INSIGHTS",
            items: [
                "Actionable Reporting", 
                "Performance Metrics",
                "Chargeback Trends"
            ],
            icon: FaAddressBook
        }
    ];

    return (
        <div className="max-w-7xl 2xl:mx-auto m-6 p-8 border border-gray-700 rounded-lg">
            {/* Header Section */}
            <div className="w-full flex flex-col lg:flex-row lg:justify-between lg:items-start gap-8 mb-12">
                <div className="lg:w-1/2">
                    <h1 className="text-2xl md:text-3xl font-['JetBrains_Mono'] font-bold text-white mb-2">
                        SKIP THE MANUAL BUSYWORK.
                    </h1>
                    <h2 className="text-xl md:text-2xl font-['JetBrains_Mono'] font-bold text-blue-500">
                        RECOVER WHAT YOU'VE EARNED
                    </h2>
                </div>
                <p className="lg:w-1/2 text-gray-300 font-['IBM_Plex_Mono'] text-lg leading-relaxed">
                    RevenaPath plugs into your existing systems and retail channels to organize, analyze, and streamline chargeback workflows automatically.
                    Reduce repetitive admin tasks and reveal the insights that actually protect your margins.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                        <div 
                            key={index} 
                            className="flex flex-col lg:flex-row mx-auto w-80 items-start p-4 border border-gray-600 rounded-lg hover:border-blue-500 transition-colors duration-300"
                        >


                            {/* Content */}
                            <div className="flex-1">
                                <div className="flex flex-row items-center gap-4">
                                    <IconComponent className="text-blue-700 mb-4 text-4xl" />
                                    {/* Vertical Title - Hidden on desktop */}
                                    <div className="mb-4">
                                        <span className="text-blue-950 bg-white px-4 py-2 border border-gray-300 rounded font-['JetBrains_Mono'] font-bold text-sm uppercase tracking-wide">
                                            {feature.title}
                                        </span>
                                    </div>
                                </div>
                                
                                {/* Feature Items */}
                                <ul className="space-y-3">
                                    {feature.items.map((item, i) => (
                                        <li 
                                            key={i}
                                            className="text-white font-['JetBrains_Mono'] text-sm border-l-2 border-blue-500 pl-3 py-1 hover:border-blue-400 transition-colors"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Features