import React, { useState } from "react";
import {
  FaDumbbell,
  FaFlask,
  FaShieldAlt,
  FaChartLine,
  FaPills,
  FaSyringe,
  FaHeartbeat,
  FaBook,
  FaSearch,
  FaCalendarAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

const SteroidsBlog = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchTerm, setSearchTerm] = useState("");

  // Navigation tabs
  const tabs = [
    { id: "overview", label: "Overview", icon: <FaDumbbell /> },
    { id: "types", label: "Types & Compounds", icon: <FaPills /> },
    { id: "cycles", label: "Cycles & Stacks", icon: <FaCalendarAlt /> },
    { id: "science", label: "Science", icon: <FaFlask /> },
    { id: "safety", label: "Safety", icon: <FaShieldAlt /> },
    { id: "effects", label: "Side Effects", icon: <FaHeartbeat /> },
  ];

  // Steroids data
  const steroidsData = {
    orals: [
      {
        name: "Dianabol",
        category: "Bulking",
        halfLife: "4-6 hours",
        anabolicRating: "90-210",
      },
      {
        name: "Anavar",
        category: "Cutting",
        halfLife: "9 hours",
        anabolicRating: "322-630",
      },
      {
        name: "Winstrol",
        category: "Cutting",
        halfLife: "9 hours",
        anabolicRating: "320",
      },
    ],
    injectables: [
      {
        name: "Testosterone Enanthate",
        category: "All-purpose",
        halfLife: "10.5 days",
        anabolicRating: "100",
      },
      {
        name: "Deca-Durabolin",
        category: "Bulking",
        halfLife: "14-16 days",
        anabolicRating: "125",
      },
      {
        name: "Trenbolone",
        category: "Recomposition",
        halfLife: "3 days",
        anabolicRating: "500",
      },
    ],
  };

  // Side effects data
  const sideEffects = [
    {
      name: "Hair Loss",
      severity: "Medium",
      prevention: "Finasteride, Minoxidil",
    },
    {
      name: "Acne",
      severity: "Common",
      prevention: "Proper skincare, Isotretinoin",
    },
    {
      name: "Gynecomastia",
      severity: "High",
      prevention: "Aromatase Inhibitors",
    },
    {
      name: "Liver Stress",
      severity: "High",
      prevention: "Liver support supplements",
    },
    {
      name: "Cardiovascular Issues",
      severity: "Critical",
      prevention: "Regular blood work, Cardio",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-red-700/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="p-2 bg-gradient-to-r from-red-600 to-orange-500 rounded-lg">
                <FaDumbbell className="text-2xl" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent">
                Steroids Academy
              </h1>
            </div>

            {/* Search Bar */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search compounds..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <div className="flex items-center space-x-3 mb-4">
              <FaExclamationTriangle className="text-yellow-500 text-2xl" />
              <span className="text-yellow-500 font-semibold">DISCLAIMER</span>
            </div>
            <p className="text-gray-300 mb-4">
              This blog provides educational information about anabolic
              steroids. Always consult with healthcare professionals before
              using any performance-enhancing substances. Steroid use without
              medical supervision is illegal in many countries.
            </p>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Navigation */}
          <aside className="lg:w-1/4">
            <div className="sticky top-24 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-red-600/20 to-orange-600/20 border-l-4 border-red-500"
                        : "hover:bg-gray-700/50"
                    }`}
                  >
                    {tab.icon}
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>

              {/* Quick Stats */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="font-bold text-lg mb-4 flex items-center">
                  <FaChartLine className="mr-2" /> Quick Stats
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Effectiveness</span>
                      <span>95%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-11/12"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Risk Level</span>
                      <span>High</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div className="h-full bg-red-500 w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Tab Content */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                <section className="bg-gray-800/30 rounded-xl p-6 border border-gray-700">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <FaDumbbell className="mr-3 text-red-400" />
                    Steroids in Bodybuilding
                  </h2>
                  <p className="text-gray-300 mb-4">
                    Anabolic-androgenic steroids (AAS) are synthetic derivatives
                    of testosterone designed to promote muscle growth and
                    enhance athletic performance. Originally developed for
                    medical purposes, these compounds have become integral to
                    competitive bodybuilding and strength sports.
                  </p>
                </section>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                    <h3 className="text-xl font-bold mb-3 flex items-center">
                      <FaPills className="mr-2 text-blue-400" />
                      Oral Steroids
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center justify-between p-3 bg-gray-800/50 rounded">
                        <span className="font-medium">Dianabol</span>
                        <span className="text-sm text-red-400">Bulking</span>
                      </li>
                      <li className="flex items-center justify-between p-3 bg-gray-800/50 rounded">
                        <span className="font-medium">Anavar</span>
                        <span className="text-sm text-green-400">Cutting</span>
                      </li>
                      <li className="flex items-center justify-between p-3 bg-gray-800/50 rounded">
                        <span className="font-medium">Winstrol</span>
                        <span className="text-sm text-green-400">Cutting</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                    <h3 className="text-xl font-bold mb-3 flex items-center">
                      <FaSyringe className="mr-2 text-purple-400" />
                      Injectable Steroids
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-center justify-between p-3 bg-gray-800/50 rounded">
                        <span className="font-medium">Testosterone</span>
                        <span className="text-sm text-yellow-400">
                          All-purpose
                        </span>
                      </li>
                      <li className="flex items-center justify-between p-3 bg-gray-800/50 rounded">
                        <span className="font-medium">Deca-Durabolin</span>
                        <span className="text-sm text-red-400">Bulking</span>
                      </li>
                      <li className="flex items-center justify-between p-3 bg-gray-800/50 rounded">
                        <span className="font-medium">Trenbolone</span>
                        <span className="text-sm text-purple-400">
                          Hardcore
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "types" && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold mb-6">Types & Compounds</h2>

                {/* Oral Steroids Table */}
                <div className="overflow-hidden rounded-xl border border-gray-700">
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 border-b border-gray-700">
                    <h3 className="text-xl font-bold flex items-center">
                      <FaPills className="mr-2" />
                      Oral Steroids Comparison
                    </h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-800">
                        <tr>
                          <th className="p-4 text-left">Compound</th>
                          <th className="p-4 text-left">Category</th>
                          <th className="p-4 text-left">Half-Life</th>
                          <th className="p-4 text-left">Anabolic Rating</th>
                        </tr>
                      </thead>
                      <tbody>
                        {steroidsData.orals.map((steroid, index) => (
                          <tr
                            key={index}
                            className="border-b border-gray-800 hover:bg-gray-800/30"
                          >
                            <td className="p-4 font-medium">{steroid.name}</td>
                            <td className="p-4">
                              <span
                                className={`px-3 py-1 rounded-full text-sm ${
                                  steroid.category === "Bulking"
                                    ? "bg-red-500/20 text-red-300"
                                    : "bg-green-500/20 text-green-300"
                                }`}
                              >
                                {steroid.category}
                              </span>
                            </td>
                            <td className="p-4">{steroid.halfLife}</td>
                            <td className="p-4">{steroid.anabolicRating}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Injectable Steroids Table */}
                <div className="overflow-hidden rounded-xl border border-gray-700">
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 border-b border-gray-700">
                    <h3 className="text-xl font-bold flex items-center">
                      <FaSyringe className="mr-2" />
                      Injectable Steroids Comparison
                    </h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-800">
                        <tr>
                          <th className="p-4 text-left">Compound</th>
                          <th className="p-4 text-left">Category</th>
                          <th className="p-4 text-left">Half-Life</th>
                          <th className="p-4 text-left">Anabolic Rating</th>
                        </tr>
                      </thead>
                      <tbody>
                        {steroidsData.injectables.map((steroid, index) => (
                          <tr
                            key={index}
                            className="border-b border-gray-800 hover:bg-gray-800/30"
                          >
                            <td className="p-4 font-medium">{steroid.name}</td>
                            <td className="p-4">
                              <span
                                className={`px-3 py-1 rounded-full text-sm ${
                                  steroid.category === "Bulking"
                                    ? "bg-red-500/20 text-red-300"
                                    : steroid.category === "Recomposition"
                                    ? "bg-purple-500/20 text-purple-300"
                                    : "bg-yellow-500/20 text-yellow-300"
                                }`}
                              >
                                {steroid.category}
                              </span>
                            </td>
                            <td className="p-4">{steroid.halfLife}</td>
                            <td className="p-4">{steroid.anabolicRating}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "safety" && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <FaShieldAlt className="mr-3 text-green-400" />
                  Safety Protocols
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Safety Guidelines */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-green-700/30">
                    <h3 className="text-xl font-bold mb-4">
                      Essential Guidelines
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-green-500/20 p-2 rounded mr-3">
                          <span className="text-green-400 font-bold">1</span>
                        </div>
                        <span>
                          Always get blood work before, during, and after cycles
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-500/20 p-2 rounded mr-3">
                          <span className="text-green-400 font-bold">2</span>
                        </div>
                        <span>Use Post Cycle Therapy (PCT) for recovery</span>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-500/20 p-2 rounded mr-3">
                          <span className="text-green-400 font-bold">3</span>
                        </div>
                        <span>Start with low doses and assess tolerance</span>
                      </li>
                    </ul>
                  </div>

                  {/* Side Effects List */}
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-red-700/30">
                    <h3 className="text-xl font-bold mb-4">
                      Common Side Effects
                    </h3>
                    <div className="space-y-3">
                      {sideEffects.map((effect, index) => (
                        <div
                          key={index}
                          className="p-3 bg-gray-800/50 rounded-lg"
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-medium">{effect.name}</span>
                            <span
                              className={`text-sm px-2 py-1 rounded ${
                                effect.severity === "Critical"
                                  ? "bg-red-500/30 text-red-300"
                                  : effect.severity === "High"
                                  ? "bg-orange-500/30 text-orange-300"
                                  : "bg-yellow-500/30 text-yellow-300"
                              }`}
                            >
                              {effect.severity}
                            </span>
                          </div>
                          <div className="text-sm text-gray-400">
                            Prevention: {effect.prevention}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">Steroids Academy</h3>
              <p className="text-gray-400 text-sm">Educational Content Only</p>
            </div>
            <div className="text-center md:text-right">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>For Educational Purposes</span>
                <FaBook className="text-gray-500" />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                © 2024 Steroids Academy. Not medical advice.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SteroidsBlog;
