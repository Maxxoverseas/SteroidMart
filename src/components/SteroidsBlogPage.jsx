import React, { useState, useEffect, useMemo } from "react";
import {
  FaCapsules,
  FaFlask,
  FaShieldAlt,
  FaChartLine,
  FaBuilding,
  FaSearch,
  FaStar,
  FaCheckCircle,
  FaRegHeart,
  FaHeart,
  FaFilter,
  FaSortAmountDown,
  FaSortAmountUp,
  FaInfoCircle,
  FaDownload,
  FaShareAlt,
  FaCalendarAlt,
  FaUserMd,
  FaExclamationTriangle,
  FaRegCopy,
  FaClipboardCheck,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const SteroidsBlogPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortBy, setSortBy] = useState("rating");
  const [sortOrder, setSortOrder] = useState("desc");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [viewMode, setViewMode] = useState("grid");
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  const steroidData = [
    {
      id: 1,
      name: "Alpha Pharma",
      category: "Pharmaceutical",
      benefits: [
        "High-quality clinical-grade steroids",
        "Precise dosage and purity",
        "Medical supervision recommended",
        "FDA-approved manufacturing",
      ],
      usage: "Clinical and therapeutic applications",
      rating: 4.8,
      reviews: 124,
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      textColor: "text-blue-800",
      icon: <FaBuilding className="text-blue-600" />,
      established: "1998",
      popularity: 95,
      sideEffects: "Low to moderate",
      priceRange: "$$$",
      legality: "Prescription required",
    },
    {
      id: 2,
      name: "Infinity Pharma",
      category: "Research",
      benefits: [
        "Advanced research formulations",
        "Cutting-edge delivery systems",
        "Laboratory tested",
        "Innovative compounds",
      ],
      usage: "Research and development",
      rating: 4.5,
      reviews: 89,
      color: "bg-gradient-to-br from-purple-50 to-purple-100",
      borderColor: "border-purple-200",
      textColor: "text-purple-800",
      icon: <FaFlask className="text-purple-600" />,
      established: "2005",
      popularity: 85,
      sideEffects: "Varies by compound",
      priceRange: "$$$$",
      legality: "Research use only",
    },
    {
      id: 3,
      name: "German Remedies",
      category: "Therapeutic",
      benefits: [
        "Traditional European formulations",
        "Focus on therapeutic benefits",
        "Minimal side-effect profile",
        "Long-standing reputation",
      ],
      usage: "Medical therapeutic treatments",
      rating: 4.7,
      reviews: 156,
      color: "bg-gradient-to-br from-green-50 to-green-100",
      borderColor: "border-green-200",
      textColor: "text-green-800",
      icon: <FaShieldAlt className="text-green-600" />,
      established: "1972",
      popularity: 90,
      sideEffects: "Minimal",
      priceRange: "$$$",
      legality: "Prescription required",
    },
    {
      id: 4,
      name: "3rd Degree",
      category: "Performance",
      benefits: [
        "High-performance formulations",
        "Advanced results-oriented compounds",
        "Enhanced bioavailability",
        "Rapid absorption",
      ],
      usage: "Athletic performance enhancement",
      rating: 4.3,
      reviews: 67,
      color: "bg-gradient-to-br from-red-50 to-red-100",
      borderColor: "border-red-200",
      textColor: "text-red-800",
      icon: <FaChartLine className="text-red-600" />,
      established: "2010",
      popularity: 75,
      sideEffects: "Moderate to high",
      priceRange: "$$",
      legality: "Controlled substance",
    },
    {
      id: 5,
      name: "G Med",
      category: "Medical",
      benefits: [
        "Medical-grade quality",
        "Hospital use approved",
        "Sterile manufacturing",
        "Clinical trial backed",
      ],
      usage: "Hospital and clinical settings",
      rating: 4.6,
      reviews: 112,
      color: "bg-gradient-to-br from-teal-50 to-teal-100",
      borderColor: "border-teal-200",
      textColor: "text-teal-800",
      icon: <FaCapsules className="text-teal-600" />,
      established: "2001",
      popularity: 88,
      sideEffects: "Low",
      priceRange: "$$$$",
      legality: "Medical use only",
    },
    {
      id: 6,
      name: "LA Anabolics",
      category: "Bodybuilding",
      benefits: [
        "Bodybuilding-specific formulations",
        "Muscle growth optimization",
        "Strength enhancement",
        "Competition-grade products",
      ],
      usage: "Bodybuilding and physique sports",
      rating: 4.4,
      reviews: 203,
      color: "bg-gradient-to-br from-amber-50 to-amber-100",
      borderColor: "border-amber-200",
      textColor: "text-amber-800",
      icon: <FaChartLine className="text-amber-600" />,
      established: "2008",
      popularity: 92,
      sideEffects: "Moderate",
      priceRange: "$$",
      legality: "Varies by region",
    },
    {
      id: 7,
      name: "Thaiger",
      category: "Asian Pharma",
      benefits: [
        "Traditional Asian formulations",
        "Cost-effective alternatives",
        "Widely accessible",
        "Growing market presence",
      ],
      usage: "General performance enhancement",
      rating: 4.2,
      reviews: 98,
      color: "bg-gradient-to-br from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      textColor: "text-orange-800",
      icon: <FaShieldAlt className="text-orange-600" />,
      established: "2015",
      popularity: 70,
      sideEffects: "Moderate",
      priceRange: "$",
      legality: "OTC in some regions",
    },
    {
      id: 8,
      name: "Denik",
      category: "Specialized",
      benefits: [
        "Specialized compound blends",
        "Custom formulations",
        "Targeted results",
        "Niche market focus",
      ],
      usage: "Specialized applications",
      rating: 4.1,
      reviews: 45,
      color: "bg-gradient-to-br from-indigo-50 to-indigo-100",
      borderColor: "border-indigo-200",
      textColor: "text-indigo-800",
      icon: <FaFlask className="text-indigo-600" />,
      established: "2012",
      popularity: 65,
      sideEffects: "Varies",
      priceRange: "$$$",
      legality: "Prescription required",
    },
    {
      id: 9,
      name: "Superior Peptides",
      category: "Peptide Research",
      benefits: [
        "Advanced peptide formulations",
        "Research-focused products",
        "Cutting-edge technology",
        "Future-oriented compounds",
      ],
      usage: "Research and experimental applications",
      rating: 4.7,
      reviews: 78,
      color: "bg-gradient-to-br from-cyan-50 to-cyan-100",
      borderColor: "border-cyan-200",
      textColor: "text-cyan-800",
      icon: <FaFlask className="text-cyan-600" />,
      established: "2018",
      popularity: 82,
      sideEffects: "Low",
      priceRange: "$$$$",
      legality: "Research use only",
    },
  ];

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((favId) => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const copyToClipboard = async (text, id) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredSteroids = useMemo(() => {
    return steroidData.filter(
      (steroid) =>
        steroid.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        steroid.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        steroid.benefits.some((benefit) =>
          benefit.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  }, [searchTerm, steroidData]);

  const sortedSteroids = useMemo(() => {
    return [...filteredSteroids].sort((a, b) => {
      let comparison = 0;
      if (sortBy === "rating") comparison = a.rating - b.rating;
      if (sortBy === "popularity") comparison = a.popularity - b.popularity;
      if (sortBy === "established")
        comparison = parseInt(a.established) - parseInt(b.established);
      if (sortBy === "reviews") comparison = a.reviews - b.reviews;

      return sortOrder === "desc" ? -comparison : comparison;
    });
  }, [filteredSteroids, sortBy, sortOrder]);

  const categories = [...new Set(steroidData.map((item) => item.category))];

  const shareBrand = (brand) => {
    const text = `Check out ${brand.name} - ${brand.category} steroids. Rating: ${brand.rating}/5`;
    if (navigator.share) {
      navigator.share({
        title: brand.name,
        text: text,
        url: window.location.href,
      });
    } else {
      copyToClipboard(text, `share-${brand.id}`);
    }
  };

  const stats = {
    totalBrands: steroidData.length,
    totalCategories: categories.length,
    averageRating: (
      steroidData.reduce((acc, brand) => acc + brand.rating, 0) /
      steroidData.length
    ).toFixed(1),
    totalReviews: steroidData.reduce((acc, brand) => acc + brand.reviews, 0),
    averagePopularity: (
      steroidData.reduce((acc, brand) => acc + brand.popularity, 0) /
      steroidData.length
    ).toFixed(0),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 p-4 md:p-8">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 flex items-center gap-3">
                <FaCapsules className="text-blue-600 text-3xl" />
                Steroid Categories & Brands
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  Professional Database
                </span>
              </h1>
              <p className="text-gray-600 mt-3 max-w-3xl">
                Comprehensive overview of pharmaceutical steroid categories,
                benefits, applications, and safety information for medical
                professionals and researchers.
              </p>
            </div>

            <div className="mt-6 md:mt-0 flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search brands, categories, benefits..."
                  className="pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none w-full md:w-80 transition-all duration-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 rounded-lg ${
                    viewMode === "grid"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 rounded-lg ${
                    viewMode === "list"
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  List
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                selectedCategory === null
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
              }`}
              onClick={() => setSelectedCategory(null)}
            >
              All Categories
            </motion.button>
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-sm"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Sort Controls */}
          <div className="flex flex-wrap items-center gap-4 mb-6 p-4 bg-white rounded-xl shadow-sm">
            <div className="flex items-center gap-2">
              <FaFilter className="text-gray-400" />
              <span className="text-gray-600 font-medium">Sort by:</span>
            </div>
            <select
              className="px-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="rating">Rating</option>
              <option value="popularity">Popularity</option>
              <option value="established">Established</option>
              <option value="reviews">Reviews</option>
            </select>
            <button
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            >
              {sortOrder === "asc" ? (
                <FaSortAmountUp className="text-gray-600" />
              ) : (
                <FaSortAmountDown className="text-gray-600" />
              )}
            </button>
          </div>
        </motion.header>

        {/* Stats Dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-10"
        >
          {[
            {
              label: "Total Brands",
              value: stats.totalBrands,
              icon: FaBuilding,
              color: "blue",
              trend: "+2 this year",
            },
            {
              label: "Categories",
              value: stats.totalCategories,
              icon: FaFlask,
              color: "green",
              trend: "Diverse",
            },
            {
              label: "Avg Rating",
              value: stats.averageRating,
              icon: FaStar,
              color: "amber",
              trend: "Excellent",
            },
            {
              label: "Total Reviews",
              value: stats.totalReviews,
              icon: FaUserMd,
              color: "purple",
              trend: `${Math.round(
                stats.totalReviews / steroidData.length
              )} avg`,
            },
            {
              label: "Avg Popularity",
              value: `${stats.averagePopularity}%`,
              icon: FaChartLine,
              color: "red",
              trend: "High demand",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm font-medium">
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {stat.value}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{stat.trend}</p>
                </div>
                <div className={`p-3 rounded-full bg-${stat.color}-100`}>
                  <stat.icon className={`text-${stat.color}-600 text-xl`} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <AnimatePresence>
          {showDisclaimer && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <FaExclamationTriangle className="text-red-500 text-2xl mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      Important Disclaimer
                    </h4>
                    <p className="text-gray-700">
                      This information is for educational purposes only. Steroid
                      use without medical supervision can be dangerous. Always
                      consult with healthcare professionals. The brands
                      mentioned may require prescriptions and have legal
                      restrictions in many regions.
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setShowDisclaimer(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ×
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Brand Cards */}
            <div
              className={`${
                viewMode === "grid" ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              <div
                className={`${
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 gap-6"
                    : "space-y-6"
                }`}
              >
                <AnimatePresence>
                  {sortedSteroids
                    .filter(
                      (steroid) =>
                        selectedCategory === null ||
                        steroid.category === selectedCategory
                    )
                    .map((steroid, index) => (
                      <motion.div
                        key={steroid.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ y: -5 }}
                        className={`${steroid.color} border-2 ${
                          steroid.borderColor
                        } rounded-3xl shadow-xl overflow-hidden transition-all duration-500 ${
                          viewMode === "list" ? "flex" : ""
                        }`}
                      >
                        <div
                          className={`${
                            viewMode === "list" ? "flex-1 p-8" : "p-6"
                          }`}
                        >
                          <div
                            className={`flex ${
                              viewMode === "list"
                                ? "items-start gap-6"
                                : "flex-col"
                            }`}
                          >
                            {/* Brand Header */}
                            <div
                              className={`flex ${
                                viewMode === "list"
                                  ? "items-start gap-6"
                                  : "justify-between items-start mb-6"
                              }`}
                            >
                              <div
                                className={`flex ${
                                  viewMode === "list"
                                    ? "items-start gap-6"
                                    : "items-center gap-4"
                                }`}
                              >
                                <div
                                  className={`bg-white p-4 rounded-2xl shadow-lg ${
                                    viewMode === "list" ? "flex-shrink-0" : ""
                                  }`}
                                >
                                  {steroid.icon}
                                </div>
                                <div>
                                  <div className="flex items-center gap-3 mb-2">
                                    <h3
                                      className={`font-bold ${
                                        viewMode === "list"
                                          ? "text-2xl"
                                          : "text-xl"
                                      } ${steroid.textColor}`}
                                    >
                                      {steroid.name}
                                    </h3>
                                    <span className="bg-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
                                      {steroid.category}
                                    </span>
                                  </div>
                                  <div className="flex flex-wrap items-center gap-4 mt-3">
                                    <div className="flex items-center">
                                      <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                          <FaStar
                                            key={i}
                                            className={
                                              i < Math.floor(steroid.rating)
                                                ? "text-amber-500"
                                                : "text-gray-300"
                                            }
                                          />
                                        ))}
                                      </div>
                                      <span className="ml-2 font-medium">
                                        {steroid.rating}
                                      </span>
                                      <span className="text-gray-500 text-sm ml-2">
                                        ({steroid.reviews} reviews)
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <div className="w-32 bg-gray-200 rounded-full h-2">
                                        <div
                                          className="bg-green-500 h-2 rounded-full"
                                          style={{
                                            width: `${steroid.popularity}%`,
                                          }}
                                        />
                                      </div>
                                      <span className="text-sm text-gray-600">
                                        {steroid.popularity}% popularity
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="flex items-center gap-3">
                                <button
                                  onClick={() => toggleFavorite(steroid.id)}
                                  className="text-2xl hover:scale-110 transition-transform"
                                >
                                  {favorites.includes(steroid.id) ? (
                                    <FaHeart className="text-red-500" />
                                  ) : (
                                    <FaRegHeart className="text-gray-400 hover:text-red-500" />
                                  )}
                                </button>
                                <button
                                  onClick={() => shareBrand(steroid)}
                                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                >
                                  <FaShareAlt className="text-gray-600" />
                                </button>
                              </div>
                            </div>

                            {/* Brand Details */}
                            <div
                              className={`mt-6 ${
                                viewMode === "list"
                                  ? "grid grid-cols-3 gap-8"
                                  : ""
                              }`}
                            >
                              <div
                                className={
                                  viewMode === "list" ? "col-span-2" : ""
                                }
                              >
                                <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                  <FaCheckCircle className="text-green-500" />
                                  Key Benefits:
                                </h4>
                                <ul className="space-y-3">
                                  {steroid.benefits.map((benefit, index) => (
                                    <motion.li
                                      key={index}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: index * 0.1 }}
                                      className="flex items-start"
                                    >
                                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                                      <span className="text-gray-800">
                                        {benefit}
                                      </span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>

                              <div className="mt-6 pt-6 border-t border-gray-200">
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">
                                      <FaCalendarAlt className="inline mr-2 text-gray-400" />
                                      Established
                                    </h4>
                                    <p className="text-gray-700">
                                      {steroid.established}
                                    </p>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">
                                      <FaInfoCircle className="inline mr-2 text-gray-400" />
                                      Usage
                                    </h4>
                                    <p className="text-gray-700">
                                      {steroid.usage}
                                    </p>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">
                                      ⚠️ Side Effects
                                    </h4>
                                    <p className="text-gray-700">
                                      {steroid.sideEffects}
                                    </p>
                                  </div>
                                  <div>
                                    <h4 className="font-semibold text-gray-900 mb-2">
                                      💰 Price Range
                                    </h4>
                                    <p className="text-gray-700">
                                      {steroid.priceRange}
                                    </p>
                                  </div>
                                </div>

                                <div className="mt-4 flex items-center justify-between">
                                  <span
                                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                                      steroid.legality.includes("Prescription")
                                        ? "bg-blue-100 text-blue-800"
                                        : steroid.legality.includes("Medical")
                                        ? "bg-green-100 text-green-800"
                                        : "bg-gray-100 text-gray-800"
                                    }`}
                                  >
                                    {steroid.legality}
                                  </span>
                                  <button
                                    onClick={() =>
                                      copyToClipboard(
                                        `${steroid.name} - ${steroid.category}\nRating: ${steroid.rating}\nUsage: ${steroid.usage}\nEstablished: ${steroid.established}`,
                                        steroid.id
                                      )
                                    }
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                                  >
                                    {copiedId === steroid.id ? (
                                      <>
                                        <FaClipboardCheck className="text-green-500" />
                                        <span className="text-sm">Copied!</span>
                                      </>
                                    ) : (
                                      <>
                                        <FaRegCopy />
                                        <span className="text-sm">
                                          Copy Info
                                        </span>
                                      </>
                                    )}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>
            </div>

            {/* Sidebar */}
            {viewMode === "grid" && (
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-6">
                  {/* Favorites Section */}
                  <div className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100">
                    <h3 className="font-bold text-xl text-gray-900 mb-4 flex items-center gap-3">
                      <FaHeart className="text-red-500" />
                      Favorite Brands
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
                        {favorites.length}
                      </span>
                    </h3>
                    <div className="space-y-4">
                      {favorites.length > 0 ? (
                        favorites.map((favId) => {
                          const favBrand = steroidData.find(
                            (brand) => brand.id === favId
                          );
                          return (
                            <motion.div
                              key={favId}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              whileHover={{ scale: 1.02 }}
                              className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200"
                            >
                              <div className="flex items-center gap-4">
                                <div
                                  className={`p-3 rounded-lg ${favBrand.color}`}
                                >
                                  {favBrand.icon}
                                </div>
                                <div>
                                  <h4 className="font-semibold text-gray-900">
                                    {favBrand.name}
                                  </h4>
                                  <div className="flex items-center gap-2 mt-1">
                                    <div className="flex">
                                      <FaStar className="text-amber-500 text-sm" />
                                      <span className="text-sm font-medium ml-1">
                                        {favBrand.rating}
                                      </span>
                                    </div>
                                    <span className="text-xs text-gray-500">
                                      {favBrand.category}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => toggleFavorite(favId)}
                                  className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                  <FaHeart className="text-red-500" />
                                </button>
                                <button
                                  onClick={() => setSelectedBrand(favBrand)}
                                  className="px-3 py-1 bg-blue-100 text-blue-700 hover:bg-blue-200 rounded-lg text-sm transition-colors"
                                >
                                  View
                                </button>
                              </div>
                            </motion.div>
                          );
                        })
                      ) : (
                        <div className="text-center py-8">
                          <FaHeart className="text-gray-300 text-4xl mx-auto mb-4" />
                          <p className="text-gray-500">
                            No favorites selected yet
                          </p>
                          <p className="text-sm text-gray-400 mt-2">
                            Click the heart icon to add favorites
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Category Summary */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl shadow-xl p-6 border border-blue-100">
                    <h3 className="font-bold text-xl text-gray-900 mb-6 flex items-center gap-3">
                      <FaFilter className="text-blue-600" />
                      Categories Overview
                    </h3>
                    <div className="space-y-4">
                      {categories.map((category) => {
                        const categoryBrands = steroidData.filter(
                          (brand) => brand.category === category
                        );
                        const avgRating = (
                          categoryBrands.reduce(
                            (acc, brand) => acc + brand.rating,
                            0
                          ) / categoryBrands.length
                        ).toFixed(1);
                        const totalReviews = categoryBrands.reduce(
                          (acc, brand) => acc + brand.reviews,
                          0
                        );

                        return (
                          <motion.div
                            key={category}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200 cursor-pointer hover:bg-white transition-all duration-300"
                            onClick={() => setSelectedCategory(category)}
                          >
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 mb-1">
                                {category}
                              </h4>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span>
                                  {categoryBrands.length}{" "}
                                  {categoryBrands.length === 1
                                    ? "brand"
                                    : "brands"}
                                </span>
                                <span>•</span>
                                <span>{totalReviews} reviews</span>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="flex items-center justify-end gap-2">
                                <FaStar className="text-amber-500" />
                                <span className="font-bold text-gray-900">
                                  {avgRating}
                                </span>
                              </div>
                              <span className="text-xs text-gray-500">
                                avg rating
                              </span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Safety Guidelines */}
                    <div className="mt-8 pt-6 border-t border-gray-300/50">
                      <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <FaUserMd className="text-blue-600" />
                        Safety Guidelines
                      </h4>
                      <ul className="space-y-3">
                        {[
                          "Always consult with licensed healthcare professionals",
                          "Never exceed recommended dosages",
                          "Regular blood work and health monitoring required",
                          "Be aware of legal status in your region",
                          "Report any adverse effects immediately",
                          "Consider long-term health implications",
                        ].map((guideline, index) => (
                          <motion.li
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-start text-sm text-gray-700"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 mr-3 flex-shrink-0" />
                            <span>{guideline}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Export Data */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl shadow-xl p-6 border border-green-100">
                    <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-3">
                      <FaDownload className="text-green-600" />
                      Export Data
                    </h4>
                    <p className="text-gray-700 mb-4 text-sm">
                      Download comprehensive information about all steroid
                      brands for research or documentation purposes.
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      <button className="px-4 py-3 bg-white hover:bg-gray-50 text-gray-800 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-md flex flex-col items-center justify-center">
                        <span className="font-medium">CSV</span>
                        <span className="text-xs text-gray-500">
                          Spreadsheet
                        </span>
                      </button>
                      <button className="px-4 py-3 bg-white hover:bg-gray-50 text-gray-800 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-md flex flex-col items-center justify-center">
                        <span className="font-medium">PDF</span>
                        <span className="text-xs text-gray-500">Report</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-200">
          <div className="text-center text-gray-600">
            <p className="mb-4">
              This database is updated regularly. Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="text-sm text-gray-500">
              For educational purposes only. Always follow local laws and
              regulations.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SteroidsBlogPage;
