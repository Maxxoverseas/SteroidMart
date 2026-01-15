import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const HomePage = () => {
  // Get featured products (first 8 products)
  const featuredProducts = products.slice(0, 8);

  // Get unique brands instead of categories
  const brands = [...new Set(products.map((p) => p.brand))].slice(0, 6);

  return (
    <div>
      {/* Brands Section (Replaced Categories Section) */}

      <section className="mb-16">
        <div className="grid grid-cols-3 items-center mb-8">
          <div></div>
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Shop by Brand
          </h2>
          <div className="flex justify-end">
            <Link
              to="/products"
              className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
            >
              View All Brands
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brands.map((brand) => {
            const brandProducts = products.filter((p) => p.brand === brand);
            const brandImage =
              brandProducts[0]?.image ||
              "https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Brand";

            return (
              <Link
                key={brand}
                to={`/brand/${encodeURIComponent(brand)}`}
                className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={brandImage}
                    alt={brand}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Brand";
                    }}
                  />
                  <div className="absolute inset-0 bg-blue-900 bg-opacity-40 group-hover:bg-opacity-30 transition"></div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 text-center group-hover:text-blue-600 transition">
                    {brand}
                  </h3>
                  <p className="text-xs text-gray-500 text-center mt-1">
                    {brandProducts.length} products
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Featured Products
          </h2>
          <Link
            to="/products"
            className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
          >
            View All Products
            <svg
              className="w-5 h-5 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
