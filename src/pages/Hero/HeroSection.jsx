import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
} from "react-icons/fa";
import { products } from "../../data/products";

function HeroSection() {
  const [index, setIndex] = useState(0);
  const featured = products.slice(0, 241);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % featured.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featured.length]);

  const next = () => setIndex((prev) => (prev + 1) % featured.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + featured.length) % featured.length);

  const product = featured[index];

  return (
    <section className="bg-gray-50 min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
            <span className="text-sm font-medium text-gray-600">
              Trusted by 10,000+ customers
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Premium <br />
            <span className="text-red-600">Pharmaceutical Products</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-xl">
            Lab tested medicines & supplements. Secure payment. Discreet
            worldwide delivery.
          </p>

          <div className="flex gap-4">
            <Link
              to="/products"
              className="bg-red-600 hover:bg-red-700 text-white px-7 py-4 rounded-lg font-semibold flex items-center gap-2 transition"
            >
              Shop Now <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              className="border border-gray-300 px-7 py-4 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Support
            </Link>
          </div>
        </div>

        {/* RIGHT PRODUCT SLIDER */}
        <div className="bg-white border rounded-xl shadow-lg p-6 relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-lg">Featured Product</h3>
            <span className="text-sm text-gray-500">
              {index + 1}/{featured.length}
            </span>
          </div>

          <div className="text-center">
            <img
              src={product?.image}
              alt={product?.name}
              className="h-48 mx-auto object-contain mb-4"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/300x300?text=Product";
              }}
            />

            <h4 className="font-bold text-xl mb-1 text-gray-900">
              {product?.name}
            </h4>

            <p className="text-sm text-gray-500 mb-2">
              {product?.brand || "Premium Brand"}
            </p>

            <p className="font-bold text-red-600 text-lg mb-4">
              {product?.price}
            </p>

            <Link
              to={`/product/${product?.id}`}
              className="text-red-600 font-semibold hover:underline"
            >
              View Product →
            </Link>
          </div>

          {/* CONTROLS */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={next}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
