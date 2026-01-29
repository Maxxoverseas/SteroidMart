import React, { useState } from "react";

const SteroidsBlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Pharmaceutical manufacturers data
  const manufacturers = [
    {
      id: 1,
      name: "Alpha Pharma",
      category: "Alpha Pharma",
      description:
        "Alpha Pharma is renowned for producing high-quality pharmaceutical products with strict quality control measures.",
      products: ["Testosterones", "Oral Steroids", "Peptides"],
      established: "2004",
      country: "India",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Infinity Pharma",
      category: "Infinity Pharma",
      description:
        "Specializing in advanced research and development of performance-enhancing pharmaceuticals.",
      products: ["Anabolic Steroids", "Fat Burners", "Hormones"],
      established: "2010",
      country: "International",
      rating: 4.6,
    },
    {
      id: 3,
      name: "German Remedies",
      category: "German Remedies",
      description:
        "A trusted name in pharmaceutical manufacturing with a focus on purity and efficacy.",
      products: [
        "Injectable Steroids",
        "Therapeutic Compounds",
        "Post-Cycle Therapy",
      ],
      established: "1998",
      country: "Germany",
      rating: 4.9,
    },
    {
      id: 4,
      name: "3rd Degree",
      category: "3rd Degree",
      description:
        "Known for innovative formulations and cutting-edge delivery systems.",
      products: ["SARM Compounds", "Research Chemicals", "Specialized Blends"],
      established: "2012",
      country: "USA",
      rating: 4.5,
    },
    {
      id: 5,
      name: "G Med",
      category: "G Med",
      description:
        "Focuses on medical-grade compounds with clinical applications.",
      products: ["HGH", "Insulin", "Medical Steroids"],
      established: "2006",
      country: "Europe",
      rating: 4.7,
    },
    {
      id: 6,
      name: "LA Anabolics",
      category: "LA Anabolics",
      description:
        "A leading name in anabolic compounds and bodybuilding supplements.",
      products: ["Anabolics", "Prohormones", "Stacks"],
      established: "2008",
      country: "USA",
      rating: 4.4,
    },
    {
      id: 7,
      name: "Thaiger",
      category: "Thaiger",
      description:
        "Specializes in pharmaceutical products with traditional and modern formulations.",
      products: ["Traditional Remedies", "Modern Steroids", "Herbal Blends"],
      established: "2001",
      country: "Thailand",
      rating: 4.3,
    },
    {
      id: 8,
      name: "Denik",
      category: "Denik",
      description:
        "Manufactures a wide range of performance and therapeutic pharmaceuticals.",
      products: ["Steroids", "Peptides", "Recovery Agents"],
      established: "2015",
      country: "Eastern Europe",
      rating: 4.2,
    },
    {
      id: 9,
      name: "Superior Peptides",
      category: "Superior Peptides",
      description:
        "Expert in peptide synthesis and research compounds for various applications.",
      products: ["Peptides", "Research Chemicals", "Bio-Identical Hormones"],
      established: "2013",
      country: "International",
      rating: 4.8,
    },
  ];

  const categories = [
    "All",
    "Alpha Pharma",
    "Infinity Pharma",
    "German Remedies",
    "3rd Degree",
    "G Med",
    "LA Anabolics",
    "Thaiger",
    "Denik",
    "Superior Peptides",
  ];

  const filteredManufacturers =
    selectedCategory === "All"
      ? manufacturers
      : manufacturers.filter((m) => m.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-8">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Steroid <span className="text-blue-600">Pharmaceuticals</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Comprehensive Guide to Pharmaceutical Manufacturers
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
              Subscribe for Updates
            </button>
          </div>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Understanding Steroid Pharmaceuticals
          </h2>
          <p className="text-gray-700 mb-4">
            Steroids are a class of organic compounds with a specific molecular
            structure. In the pharmaceutical industry, they are used for various
            medical purposes including anti-inflammatory treatments, hormone
            replacement therapy, and performance enhancement. The manufacturers
            listed below are key players in the production of these compounds,
            each with their own specialties and quality standards.
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full mr-3">
              Medical Use
            </span>
            <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full mr-3">
              Research
            </span>
            <span className="bg-purple-100 text-purple-800 py-1 px-3 rounded-full">
              Quality Standards
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        {/* Category Filter */}
        <div className="mb-10">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Filter by Manufacturer
          </h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition duration-300 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800">
              Showing{" "}
              <span className="font-bold">{filteredManufacturers.length}</span>{" "}
              manufacturer{filteredManufacturers.length !== 1 ? "s" : ""}
              {selectedCategory !== "All" && ` in ${selectedCategory}`}
            </p>
          </div>
        </div>

        {/* Manufacturers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredManufacturers.map((manufacturer) => (
            <div
              key={manufacturer.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {manufacturer.name}
                  </h3>
                  <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                    <svg
                      className="w-5 h-5 text-yellow-500 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold">{manufacturer.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-5">{manufacturer.description}</p>

                <div className="mb-5">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Key Products:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {manufacturer.products.map((product, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 text-sm py-1 px-3 rounded-full"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between text-sm text-gray-500 pt-4 border-t border-gray-200">
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-1 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>Est. {manufacturer.established}</span>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-1 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>{manufacturer.country}</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-6 py-3">
                <button className="text-blue-600 font-medium hover:text-blue-800 transition duration-300">
                  View Details & Products →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Safety Information Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Important Safety Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Medical Supervision
              </h3>
              <p className="text-gray-700 mb-4">
                All steroid use should be conducted under strict medical
                supervision. Self-administration without proper knowledge and
                monitoring can lead to serious health complications.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Legal Considerations
              </h3>
              <p className="text-gray-700 mb-4">
                The legality of steroid products varies by country and
                jurisdiction. Always ensure compliance with local regulations
                before purchasing or using any pharmaceutical products.
              </p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-white rounded-lg border-l-4 border-blue-500">
            <p className="text-gray-800">
              <span className="font-bold">Disclaimer:</span> This information is
              for educational purposes only. Always consult with a healthcare
              professional before starting any pharmaceutical regimen.
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Industry Overview
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">9</div>
              <div className="text-gray-700">Major Manufacturers</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-700">Years Combined Experience</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-700">Countries Served</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.6</div>
              <div className="text-gray-700">Average Quality Rating</div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto pt-8 mt-12 border-t border-gray-300">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gray-900">
              Steroid Pharmaceuticals Blog
            </h3>
            <p className="text-gray-600">
              Educational Resource on Pharmaceutical Manufacturers
            </p>
          </div>
          <div className="text-sm text-gray-500">
            <p>
              © {new Date().getFullYear()} All Rights Reserved. For educational
              purposes only.
            </p>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-500 text-sm">
          <p>
            This page provides information about pharmaceutical manufacturers.
            Always consult medical professionals for health-related decisions.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SteroidsBlogPage;
