import React from "react";
import {
  FaShieldAlt,
  FaTruck,
  FaHeadset,
  FaFlask,
  FaLock,
  FaCertificate,
  FaGlobe,
  FaStar,
} from "react-icons/fa";
import { GiChemicalDrop, GiWeightLiftingUp } from "react-icons/gi";
import { MdPrecisionManufacturing, MdScience } from "react-icons/md";

function WhyChooseSection() {
  const reasons = [
    {
      icon: <MdPrecisionManufacturing className="text-2xl" />,
      title: "Pharmaceutical Grade",
      description: "GMP certified manufacturing with 99.8%+ purity standards",
      stats: "99.8% Purity",
      color: "from-red-50 to-red-100 border-red-200",
      iconColor: "bg-gradient-to-r from-red-500 to-orange-500",
      index: 1,
    },
    {
      icon: <FaFlask className="text-2xl" />,
      title: "Laboratory Tested",
      description:
        "Every batch undergoes HPLC/GC-MS analysis for purity verification",
      stats: "Batch Testing",
      color: "from-blue-50 to-blue-100 border-blue-200",
      iconColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
      index: 2,
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Authenticity Guaranteed",
      description:
        "Direct from manufacturers with proper certification and documentation",
      stats: "100% Authentic",
      color: "from-green-50 to-green-100 border-green-200",
      iconColor: "bg-gradient-to-r from-green-500 to-emerald-500",
      index: 3,
    },
    {
      icon: <FaTruck className="text-2xl" />,
      title: "Global Discreet Shipping",
      description:
        "Stealth packaging to 100+ countries with tracking and insurance",
      stats: "100+ Countries",
      color: "from-purple-50 to-purple-100 border-purple-200",
      iconColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      index: 4,
    },
    {
      icon: <FaHeadset className="text-2xl" />,
      title: "24/7 Expert Support",
      description:
        "Professional guidance and cycle advice from experienced specialists",
      stats: "Expert Team",
      color: "from-orange-50 to-orange-100 border-orange-200",
      iconColor: "bg-gradient-to-r from-orange-500 to-yellow-500",
      index: 5,
    },
    {
      icon: <FaLock className="text-2xl" />,
      title: "Complete Privacy",
      description:
        "Discreet packaging and secure transactions to protect your identity",
      stats: "100% Private",
      color: "from-indigo-50 to-indigo-100 border-indigo-200",
      iconColor: "bg-gradient-to-r from-indigo-500 to-blue-500",
      index: 6,
    },
    {
      icon: <FaCertificate className="text-2xl" />,
      title: "10+ Years Experience",
      description: "Industry leader with proven track record since 2016",
      stats: "Since 2016",
      color: "from-yellow-50 to-yellow-100 border-yellow-200",
      iconColor: "bg-gradient-to-r from-yellow-500 to-orange-500",
      index: 7,
    },
    {
      icon: <FaGlobe className="text-2xl" />,
      title: "Worldwide Network",
      description:
        "Established partnerships with manufacturers and logistics worldwide",
      stats: "Global Network",
      color: "from-teal-50 to-teal-100 border-teal-200",
      iconColor: "bg-gradient-to-r from-teal-500 to-green-500",
      index: 8,
    },
  ];

  const stats = [
    { value: "265+", label: "Products", icon: "📦" },
    { value: "99.8%", label: "Average Purity", icon: "⚗️" },
    { value: "100+", label: "Countries Served", icon: "🌍" },
    { value: "50K+", label: "Customers", icon: "👥" },
    { value: "99.3%", label: "Success Rate", icon: "✅" },
    { value: "12+", label: "Years", icon: "📅" },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-50 to-orange-50 rounded-full px-4 py-2 mb-6 border border-red-100">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-red-600 font-semibold text-sm">
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
              Steroid Mart?
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover why thousands of athletes and fitness enthusiasts trust us
            as their premier source for pharmaceutical-grade performance
            enhancement products.
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${reason.color} rounded-2xl p-8 border hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Number Badge */}
              <div className="absolute -top-3 -left-3">
                <div
                  className={`${reason.iconColor} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-lg`}
                >
                  {reason.index}
                </div>
              </div>

              {/* Icon */}
              <div className="mb-6">
                <div
                  className={`w-16 h-16 ${reason.iconColor} rounded-xl flex items-center justify-center shadow-lg`}
                >
                  <div className="text-white">{reason.icon}</div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {reason.description}
              </p>

              {/* Stats */}
              <div className="inline-block px-3 py-1 bg-white/50 backdrop-blur-sm rounded-full border border-white/50">
                <span className="text-sm font-semibold text-gray-700">
                  {reason.stats}
                </span>
              </div>

              {/* Hover Effect Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 bg-gradient-to-r from-gray-900 to-black rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Trusted Since 2016
              </h3>
              <p className="text-gray-300">
                A decade of excellence in providing safe, effective, and
                reliable products.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  {
                    icon: <GiChemicalDrop className="text-3xl" />,
                    label: "Pharma Grade",
                  },
                  {
                    icon: <MdScience className="text-3xl" />,
                    label: "Lab Tested",
                  },
                  {
                    icon: <GiWeightLiftingUp className="text-3xl" />,
                    label: "Athlete Approved",
                  },
                  { icon: <FaStar className="text-3xl" />, label: "Top Rated" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-colors"
                  >
                    <div className="text-red-400 mb-3 flex justify-center">
                      {item.icon}
                    </div>
                    <div className="font-semibold">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection;
