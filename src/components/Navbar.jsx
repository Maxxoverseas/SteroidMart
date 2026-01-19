import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiMenu,
  FiX,
  FiStar,
  FiChevronDown,
  FiChevronUp,
  FiEdit,
} from "react-icons/fi";
import { products } from "../data/products";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredItem, setHoveredItem] = useState(null);
  const [activeNav, setActiveNav] = useState(null);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);
  const navigate = useNavigate();

  // Get unique brands
  const brands = [...new Set(products.map((p) => p.brand))];

  // Handle scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search/${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setIsMenuOpen(false);
    }
  };

  const handleBrandClick = (brand) => {
    navigate(`/brand/${encodeURIComponent(brand)}`);
    setIsMenuOpen(false);
    setHoveredItem(null);
  };

  const handleAllProductsClick = () => {
    navigate("/products");
    setIsMenuOpen(false);
    setHoveredItem(null);
  };

  const handleReviewsClick = () => {
    navigate("/reviewspage");
    setIsMenuOpen(false);
    setHoveredItem(null);
  };

  const handleBlogClick = () => {
    navigate("/blog");
    setIsMenuOpen(false);
    setHoveredItem(null);
  };

  // Marquee text
  const marqueeText =
    "🚚 Shipping Notice: Extra $40 for 10 products, Extra $80 for 10+ products.";

  return (
    <div className="sticky top-0 z-50">
      {/* Marquee Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content whitespace-nowrap">
            {marqueeText}
            <span className="mx-8">•</span>
            {marqueeText}
            <span className="mx-8">•</span>
            {marqueeText}
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">
                Steroid<span className="text-gray-800"> Mart</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className="relative text-gray-700 hover:text-blue-600 transition py-2"
                onMouseEnter={() => setActiveNav("home")}
                onMouseLeave={() => setActiveNav(null)}
              >
                Home
                {activeNav === "home" && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    style={{
                      animation: "slideIn 0.3s ease-out forwards",
                    }}
                  ></div>
                )}
              </Link>

              <button
                onClick={handleAllProductsClick}
                className="relative text-gray-700 hover:text-blue-600 transition py-2"
                onMouseEnter={() => setActiveNav("products")}
                onMouseLeave={() => setActiveNav(null)}
              >
                All Products
                {activeNav === "products" && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    style={{
                      animation: "slideIn 0.3s ease-out forwards",
                    }}
                  ></div>
                )}
              </button>

              {/* Blog Link */}
              <button
                onClick={handleBlogClick}
                className="relative text-gray-700 hover:text-blue-600 transition py-2 flex items-center"
                onMouseEnter={() => setActiveNav("blog")}
                onMouseLeave={() => setActiveNav(null)}
              >
                <FiEdit className="mr-1" />
                Blog
                {activeNav === "blog" && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    style={{
                      animation: "slideIn 0.3s ease-out forwards",
                    }}
                  ></div>
                )}
              </button>

              {/* Reviews Link */}
              <button
                onClick={handleReviewsClick}
                className="relative text-gray-700 hover:text-blue-600 transition py-2 flex items-center"
                onMouseEnter={() => setActiveNav("reviews")}
                onMouseLeave={() => setActiveNav(null)}
              >
                <FiStar className="mr-1" />
                Reviews
                {activeNav === "reviews" && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    style={{
                      animation: "slideIn 0.3s ease-out forwards",
                    }}
                  ></div>
                )}
              </button>

              {/* About Us Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setHoveredItem("about");
                  setActiveNav("about");
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  setActiveNav(null);
                }}
              >
                <button className="relative text-gray-700 hover:text-blue-600 transition py-2 flex items-center">
                  About Us
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {activeNav === "about" && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                      style={{
                        animation: "slideIn 0.3s ease-out forwards",
                      }}
                    ></div>
                  )}
                </button>
                {hoveredItem === "about" && (
                  <div className="absolute left-0 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                    <Link
                      to="/about"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      About
                    </Link>
                    <Link
                      to="/contact"
                      className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      Contact
                    </Link>
                  </div>
                )}
              </div>

              {/* Brands Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setHoveredItem("brands");
                  setActiveNav("brands");
                }}
                onMouseLeave={() => {
                  setHoveredItem(null);
                  setActiveNav(null);
                }}
              >
                <button className="relative text-gray-700 hover:text-blue-600 transition py-2 flex items-center">
                  Brands
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {activeNav === "brands" && (
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                      style={{
                        animation: "slideIn 0.3s ease-out forwards",
                      }}
                    ></div>
                  )}
                </button>
                {hoveredItem === "brands" && (
                  <div className="absolute left-0 w-56 bg-white rounded-md shadow-lg py-2 z-10 max-h-96 overflow-y-auto">
                    <div className="px-4 py-2 font-semibold text-gray-700">
                      All Brands
                    </div>
                    <div className="border-t my-2"></div>
                    {brands.map((brand) => (
                      <button
                        key={brand}
                        onClick={() => handleBrandClick(brand)}
                        className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      >
                        {brand}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Bar */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
              </form>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <>
              {/* Backdrop */}
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                onClick={() => setIsMenuOpen(false)}
              ></div>

              {/* Mobile Menu Drawer */}
              <div className="md:hidden fixed top-16 left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto">
                <div className="p-4 space-y-4">
                  {/* Marquee info for mobile */}
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-700 font-medium">
                      📦 Shipping Info:
                    </p>
                    <p className="text-xs text-blue-600 mt-1">
                      • Extra $40 for 10 products
                    </p>
                    <p className="text-xs text-blue-600">
                      • Extra $80 for 10+ products
                    </p>
                  </div>
                  <Link
                    to="/"
                    className="flex items-center justify-between text-gray-700 hover:text-blue-600 py-3 border-b border-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>Home</span>
                    <span className="text-blue-600">→</span>
                  </Link>

                  <button
                    onClick={() => {
                      handleAllProductsClick();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 text-left py-3 border-b border-gray-100"
                  >
                    <span>All Products</span>
                    <span className="text-blue-600">→</span>
                  </button>

                  {/* Blog Link - Mobile */}
                  <button
                    onClick={() => {
                      handleBlogClick();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 text-left py-3 border-b border-gray-100"
                  >
                    <div className="flex items-center">
                      <FiEdit className="mr-2" />
                      Blog
                    </div>
                    <span className="text-blue-600">→</span>
                  </button>

                  {/* Reviews Link - Mobile */}
                  <button
                    onClick={() => {
                      handleReviewsClick();
                      setIsMenuOpen(false);
                    }}
                    className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 text-left py-3 border-b border-gray-100"
                  >
                    <div className="flex items-center">
                      <FiStar className="mr-2" />
                      Reviews
                    </div>
                    <span className="text-blue-600">→</span>
                  </button>

                  {/* About Us - Mobile with dropdown */}
                  <div className="py-3 border-b border-gray-100">
                    <button
                      onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                      className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 text-left"
                    >
                      <span className="font-medium">About Us</span>
                      {mobileAboutOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>

                    {mobileAboutOpen && (
                      <div
                        className="ml-4 space-y-2 mt-3"
                        style={{
                          animation: "slideDown 0.3s ease-out forwards",
                        }}
                      >
                        <Link
                          to="/about"
                          className="flex items-center justify-between text-gray-600 hover:text-blue-600 py-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span>About</span>
                          <span className="text-blue-600">→</span>
                        </Link>
                        <Link
                          to="/contact"
                          className="flex items-center justify-between text-gray-600 hover:text-blue-600 py-2"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span>Contact</span>
                          <span className="text-blue-600">→</span>
                        </Link>
                      </div>
                    )}
                  </div>

                  {/* Brands - Mobile with dropdown */}
                  <div className="py-3 border-b border-gray-100">
                    <button
                      onClick={() => setMobileBrandsOpen(!mobileBrandsOpen)}
                      className="flex items-center justify-between w-full text-gray-700 hover:text-blue-600 text-left"
                    >
                      <span className="font-medium">Brands</span>
                      {mobileBrandsOpen ? <FiChevronUp /> : <FiChevronDown />}
                    </button>

                    {mobileBrandsOpen && (
                      <div
                        className="ml-4 space-y-2 mt-3"
                        style={{
                          animation: "slideDown 0.3s ease-out forwards",
                        }}
                      >
                        <div className="max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                          {brands.map((brand) => (
                            <button
                              key={brand}
                              onClick={() => {
                                handleBrandClick(brand);
                                setIsMenuOpen(false);
                              }}
                              className="flex items-center justify-between w-full text-gray-600 hover:text-blue-600 text-left py-2 border-b border-gray-50 last:border-b-0"
                            >
                              <span>{brand}</span>
                              <span className="text-blue-600">→</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Search Bar */}
                  <div className="pt-4">
                    <form onSubmit={handleSearch} className="relative">
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <FiSearch className="absolute left-3 top-4 text-gray-400" />
                      <button
                        type="submit"
                        className="absolute right-3 top-3 bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
                      >
                        Search
                      </button>
                    </form>
                  </div>

                  {/* Extra Info */}
                  <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600 text-center">
                      Need help? Contact us at{" "}
                      <a
                        href="mailto:support@steroidmart.com"
                        className="text-blue-600"
                      >
                        support@steroidmart.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </nav>

      {/* Add global styles to index.html or main CSS file */}
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          @keyframes slideIn {
            from {
              transform: scaleX(0);
            }
            to {
              transform: scaleX(1);
            }
          }
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .marquee-content {
            animation: marquee 30s linear infinite;
          }
          
          .marquee-content:hover {
            animation-play-state: paused;
          }
          
          .marquee-container {
            overflow: hidden;
            white-space: nowrap;
            position: relative;
          }
          
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
            border-radius: 10px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 10px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}
      </style>
    </div>
  );
};

export default Navbar;
