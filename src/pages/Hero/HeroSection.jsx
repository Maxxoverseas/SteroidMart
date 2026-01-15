import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaShieldAlt,
  FaTruck,
  FaHeadset,
  FaStar,
} from "react-icons/fa";

function HeroSection() {
  return (
    <div className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-red-100 to-orange-100 rounded-full blur-xl opacity-50"></div>
      <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full blur-xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <span className="text-gray-700 font-semibold text-sm">
                4.9/5.0 Trust Score
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Premium
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
                Steroid Mart
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-gray-600 mb-8 max-w-xl leading-relaxed">
              Your trusted source for pharmaceutical-grade performance
              enhancement products. Laboratory tested, discreetly shipped
              worldwide since 2016.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                {
                  icon: <FaShieldAlt className="text-red-500" />,
                  text: "Lab Tested",
                },
                {
                  icon: <FaTruck className="text-blue-500" />,
                  text: "Global Delivery",
                },
                {
                  icon: <FaHeadset className="text-green-500" />,
                  text: "24/7 Support",
                },
                {
                  icon: <FaStar className="text-yellow-500" />,
                  text: "Certified",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white border border-gray-200 rounded-lg px-4 py-3 hover:shadow-sm transition-all"
                >
                  <div className="p-2 bg-gray-50 rounded-lg">
                    {feature.icon}
                  </div>
                  <span className="font-medium text-gray-800">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/products"
                className="group bg-gradient-to-r from-red-600 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 hover:-translate-y-0.5"
              >
                <span>Browse Products</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="bg-white border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
              >
                Contact Support
              </Link>
            </div>

            {/* Stats removed - area remains for future content if needed */}
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-200 shadow-xl">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {/* Stats Cards */}
                <div className="col-span-2 grid grid-cols-2 gap-4 mb-6 sm:mb-8">
                  <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-xl p-4 sm:p-6 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-red-600 mb-2">
                      12+
                    </div>
                    <div className="text-sm font-medium text-red-800">
                      Years
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 sm:p-6 text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                      50K+
                    </div>
                    <div className="text-sm font-medium text-blue-800">
                      Customers
                    </div>
                  </div>
                </div>

                {/* Year Display */}
                <div className="col-span-2 bg-gradient-to-r from-gray-900 to-black rounded-xl p-6 sm:p-8 text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                    2026
                  </div>
                  <div className="text-gray-300">Current Year</div>
                  <div className="text-sm text-gray-400 mt-2">
                    12 Years of Excellence
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="col-span-2 mt-4 sm:mt-6 flex justify-center space-x-4">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-2">
                      <FaShieldAlt className="text-white text-lg sm:text-xl" />
                    </div>
                    <div className="text-sm font-medium text-gray-700">
                      Secure
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-2">
                      <FaTruck className="text-white text-lg sm:text-xl" />
                    </div>
                    <div className="text-sm font-medium text-gray-700">
                      Discreet
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl -rotate-12 opacity-10"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl rotate-12 opacity-10"></div>
          </div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50 mb-5"></div>
    </div>
  );
}

export default HeroSection;
