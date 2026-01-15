import React from "react";
import {
  FaShieldAlt,
  FaTruck,
  FaHeadset,
  FaLock,
  FaAward,
  FaGlobe,
} from "react-icons/fa";
import { GiChemicalDrop } from "react-icons/gi";

const AboutPage = () => {
  const values = [
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: "Authenticity Guaranteed",
      description:
        "All products are sourced directly from manufacturers with verified authenticity certificates.",
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
    },
    {
      icon: <GiChemicalDrop className="text-3xl text-purple-600" />,
      title: "Pharmaceutical Grade",
      description:
        "Only pharmaceutical grade products with 99%+ purity levels are supplied.",
      color: "bg-gradient-to-br from-purple-50 to-purple-100",
    },
    {
      icon: <FaLock className="text-3xl text-green-600" />,
      title: "Discreet Service",
      description:
        "All packages are shipped in plain, unmarked packaging for complete privacy.",
      color: "bg-gradient-to-br from-green-50 to-green-100",
    },
    {
      icon: <FaTruck className="text-3xl text-orange-600" />,
      title: "Global Shipping",
      description:
        "Reliable worldwide delivery with real-time tracking for all orders.",
      color: "bg-gradient-to-br from-orange-50 to-orange-100",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "24/7 Support",
      description:
        "Round-the-clock customer service for immediate assistance and consultation.",
      color: "bg-gradient-to-br from-red-50 to-red-100",
    },
    {
      icon: <FaAward className="text-3xl text-yellow-600" />,
      title: "Industry Leader",
      description:
        "Over a decade of experience with thousands of satisfied customers worldwide.",
      color: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    },
  ];

  const milestones = [
    {
      year: "2014",
      title: "Founded",
      description: "Started operations in Europe",
    },
    {
      year: "2016",
      title: "Expansion",
      description: "Expanded to 15+ countries",
    },
    {
      year: "2018",
      title: "Quality Cert",
      description: "Achieved ISO certification",
    },
    {
      year: "2020",
      title: "Online Platform",
      description: "Launched global e-commerce",
    },
    {
      year: "2024",
      title: "150K+ Customers",
      description: "Served customers worldwide",
    },
    {
      year: "2026",
      title: "Global Leader",
      description: "Became industry leader in pharmaceutical distribution",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),rgba(0,0,0,0))]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              About <span className="text-blue-300">Steroid Mart</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Your Trusted Partner in Pharmaceutical Excellence Since 2014
            </p>
            <div className="inline-flex items-center space-x-4 bg-black/30 backdrop-blur-sm rounded-full px-6 py-3">
              <FaGlobe className="text-blue-300" />
              <span className="text-white">
                Serving 150+ Countries Worldwide
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 text-blue-600 font-semibold mb-4">
                <div className="h-1 w-8 bg-blue-600"></div>
                <span>OUR MISSION</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900">
                Revolutionizing Pharmaceutical Access Worldwide
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Steroid Mart, we're dedicated to bridging the gap between
                pharmaceutical manufacturers and end-users. Our mission goes
                beyond distribution - we're committed to education, safety, and
                ensuring every product meets the highest standards of quality
                and efficacy.
              </p>
              <div className="pt-6">
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    Quality First Philosophy
                  </h3>
                  <p className="text-blue-100">
                    Every product undergoes 7-point verification before
                    shipping, ensuring you receive only the most authentic,
                    properly stored, and effective pharmaceuticals.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl h-96 shadow-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl transform -rotate-3 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-white mb-2">12+</div>
                  <div className="text-xl text-blue-100">
                    Years of Excellence
                  </div>
                  <div className="h-1 w-24 bg-white/30 mx-auto my-4"></div>
                  <div className="text-white/80">
                    Trusted by professionals worldwide
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`${value.color} rounded-2xl p-8 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-white rounded-xl shadow-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {value.title}
                  </h3>
                </div>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Milestones in our growth story
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-indigo-600 hidden md:block"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } items-center`}
                >
                  <div className="hidden md:block w-1/2"></div>
                  <div className="hidden md:flex w-10 h-10 rounded-full bg-white border-4 border-blue-500 items-center justify-center relative z-10">
                    <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                  </div>
                  <div className="md:w-1/2">
                    <div
                      className={`bg-white rounded-xl shadow-xl p-6 transform transition-all duration-300 hover:scale-105 ${
                        index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                      }`}
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg font-bold">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {milestone.title}
                        </h3>
                      </div>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-white mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Quality Assurance Process
              </h2>
              <p className="text-gray-300 mb-8">
                Our rigorous 7-step verification process ensures every product
                meets pharmaceutical standards before reaching our customers.
              </p>
              <ul className="space-y-4">
                {[
                  "Manufacturer Verification & Authentication",
                  "Batch Testing & Purity Analysis",
                  "Sterility & Contamination Checks",
                  "Proper Storage Conditions Monitoring",
                  "Expiry Date Validation",
                  "Packaging Integrity Inspection",
                  "Final Quality Control Approval",
                ].map((step, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[99.9, 100, 99.7, 99.5].map((percentage, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
                >
                  <div className="text-4xl font-bold text-blue-300">
                    {percentage}%
                  </div>
                  <div className="text-gray-300 mt-2">
                    {
                      [
                        "Purity Rate",
                        "Authenticity",
                        "Customer Satisfaction",
                        "On-time Delivery",
                      ][index]
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Experience Excellence?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Steroid Mart for
            their pharmaceutical needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Contact Our Team
            </a>
            <a
              href="/products"
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300"
            >
              Browse Products
            </a>
          </div>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "200K+", label: "Products Delivered" },
              { number: "150+", label: "Countries Served" },
              { number: "24/7", label: "Customer Support" },
              { number: "12+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-blue-300">
                  {stat.number}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
