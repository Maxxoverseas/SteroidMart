import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaShieldAlt,
  FaTruck,
  FaHeadset,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaCapsules,
  FaSyringe,
  FaFlask,
  FaPills,
} from "react-icons/fa";

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Top 10 Steroids Products with Images
  const steroidProducts = [
    {
      id: 1,
      name: "Testosterone Enanthate",
      category: "Bulking",
      rating: 4.9,
      image:
        "https://www.empowerpharmacy.com/wp-content/uploads/2025/07/2025-empower-pharmacy-testosterone-enanthate-injection-200mgml-5ml-294x490-1.jpg",
    },
    {
      id: 2,
      name: "Trenbolone Acetate",
      category: "Cutting",
      rating: 4.8,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/8/446708778/UZ/ZA/OY/225643197/trenbolone-acetate-injection-500x500.jpg",
    },
    {
      id: 3,
      name: "Deca Durabolin",
      category: "Bulking",
      rating: 4.7,
      image:
        "https://cdn.shopify.com/s/files/1/0651/0788/6326/products/Deca-DuraBolin_by_Hi-Tech.jpg?v=1736135497",
    },
    {
      id: 4,
      name: "Winstrol",
      category: "Cutting",
      rating: 4.6,
      image:
        "https://img500.exportersindia.com/product_images/bc-500/2024/1/12922490/winstrol-injection-1704617722-7239173.jpg",
    },
    {
      id: 5,
      name: "Anavar",
      category: "Cutting",
      rating: 4.9,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlX3AYnHqN2bPwBdOTePD-ZFzmaNHKzDYcA&s",
    },
    {
      id: 6,
      name: "Dianabol",
      category: "Bulking",
      rating: 4.7,
      image: "https://gdimg.gmarket.co.kr/2913591641/still/400?ver=1741888030",
    },
    {
      id: 7,
      name: "Clenbuterol",
      category: "Fat Loss",
      rating: 4.5,
      image:
        "https://www.vinmec.com/static/uploads/small_20220220_225115_400180_clenbuterol_6_145_max_1800x1800_jpg_99c974e25a.jpg",
    },
    {
      id: 8,
      name: "HGH",
      category: "Anti-Aging",
      rating: 4.9,
      image: "https://www.usada.org/wp-content/uploads/hgh-post.jpg",
    },
    {
      id: 9,
      name: "Sustanon 250",
      category: "Bulking",
      rating: 4.8,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT61vtlH7q3Lk98ghCRW794U2Wr_hivVE26oQ&s",
    },
    {
      id: 10,
      name: "Primobolan",
      category: "Cutting",
      rating: 4.7,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-ZM3Sa0A01zdkyh-RQGxTMp1lKpi8vp7owg&s",
    },
  ];

  // Icons for categories
  const categoryIcons = {
    Bulking: <FaCapsules className="text-lg" />,
    Cutting: <FaSyringe className="text-lg" />,
    "Fat Loss": <FaFlask className="text-lg" />,
    "Anti-Aging": <FaPills className="text-lg" />,
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % steroidProducts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % steroidProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + steroidProducts.length) % steroidProducts.length
    );
  };

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
          </div>

          {/* Right Visual - Updated with Product Slider */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-xl">
              {/* Product Slider */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Top 10 Steroids
                  </h3>
                  <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                    {currentSlide + 1}/{steroidProducts.length}
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 to-black p-6">
                  {/* Product Image and Details */}
                  <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
                    {/* Product Image */}
                    <div className="w-full md:w-2/5">
                      <div className="relative h-48 md:h-40 rounded-lg overflow-hidden border-2 border-red-500/30">
                        <img
                          src={steroidProducts[currentSlide].image}
                          alt={steroidProducts[currentSlide].name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                          TOP {currentSlide + 1}
                        </div>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="w-full md:w-3/5 text-center md:text-left">
                      <div className="text-2xl font-bold text-white mb-3">
                        {steroidProducts[currentSlide].name}
                      </div>

                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                        <div className="flex items-center space-x-2 px-3 py-1 bg-red-500/20 rounded-full">
                          <span className="text-red-300">
                            {
                              categoryIcons[
                                steroidProducts[currentSlide].category
                              ]
                            }
                          </span>
                          <span className="text-red-300 text-sm">
                            {steroidProducts[currentSlide].category}
                          </span>
                        </div>

                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <FaStar
                              key={i}
                              className={`text-sm ${
                                i <
                                Math.floor(steroidProducts[currentSlide].rating)
                                  ? "text-yellow-400"
                                  : "text-gray-600"
                              }`}
                            />
                          ))}
                          <span className="text-white font-semibold ml-1">
                            {steroidProducts[currentSlide].rating}
                          </span>
                        </div>
                      </div>

                      <div className="text-gray-400 text-sm">
                        Premium pharmaceutical grade. Laboratory tested and
                        certified.
                      </div>
                    </div>
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between items-center">
                    <button
                      onClick={prevSlide}
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center"
                      aria-label="Previous product"
                    >
                      <FaChevronLeft className="text-white text-lg" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="flex space-x-2">
                      {steroidProducts.slice(0, 5).map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentSlide === index
                              ? "bg-red-500 w-8"
                              : "bg-gray-600 hover:bg-gray-500"
                          }`}
                          aria-label={`Go to product ${index + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={nextSlide}
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110 flex items-center justify-center"
                      aria-label="Next product"
                    >
                      <FaChevronRight className="text-white text-lg" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Consolidated Stats Section */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-xl p-4 text-center group hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl font-bold text-red-600 mb-1 group-hover:scale-110 transition-transform">
                    12+
                  </div>
                  <div className="text-xs font-medium text-red-800">
                    Years Excellence
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-4 text-center group hover:shadow-lg transition-all duration-300">
                  <div className="text-2xl font-bold text-blue-600 mb-1 group-hover:scale-110 transition-transform">
                    50K+
                  </div>
                  <div className="text-xs font-medium text-blue-800">
                    Happy Customers
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-4 text-center group hover:shadow-lg transition-all duration-300">
                  <div className="text-xl font-bold text-white mb-1 group-hover:scale-110 transition-transform">
                    2026
                  </div>
                  <div className="text-xs text-gray-300">Current Year</div>
                </div>
              </div>

              {/* Excellence Badge */}
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-4">
                <div className="flex flex-col sm:flex-row items-center justify-between">
                  <div className="text-center sm:text-left mb-3 sm:mb-0">
                    <div className="text-white font-bold text-lg">
                      12 Years of Excellence
                    </div>
                    <div className="text-gray-400 text-sm">Since 2014</div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-1">
                        <FaShieldAlt className="text-white" />
                      </div>
                      <span className="text-gray-300 text-xs">Secure</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-1">
                        <FaTruck className="text-white" />
                      </div>
                      <span className="text-gray-300 text-xs">Discreet</span>
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
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
    </div>
  );
}

export default HeroSection;
