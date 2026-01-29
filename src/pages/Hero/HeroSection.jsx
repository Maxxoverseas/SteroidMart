import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { products } from "../../data/products";
// import heroBg from "../../assets/hero2.jpg";

function HeroSection() {
  const [index, setIndex] = useState(2);
  const [animate, setAnimate] = useState(true);

  const sliderProducts = products.slice(2, 200);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % sliderProducts.length);
        setAnimate(true);
      }, 200);
    }, 4000);

    return () => clearInterval(timer);
  }, [sliderProducts.length]);

  const next = () => {
    setAnimate(false);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % sliderProducts.length);
      setAnimate(true);
    }, 200);
  };

  const prev = () => {
    setAnimate(false);
    setTimeout(() => {
      setIndex(
        (prev) => (prev - 1 + sliderProducts.length) % sliderProducts.length
      );
      setAnimate(true);
    }, 200);
  };

  const currentProduct = sliderProducts[index];

  return (
    <div className="max-w-7xl mx-auto px-4 w-full">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="text-gray-900">
          <div className="flex items-center gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-sm" />
            ))}
            <span className="text-sm opacity-90">
              Trusted by 10,000+ customers
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Premium <br />
            <span className="text-red-500">Pharmaceutical Products</span>
          </h1>

          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            Laboratory tested medicines & supplements. Secure payment and
            discreet worldwide delivery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2"
            >
              Shop Now <FaArrowRight />
            </Link>

            <Link
              to="/contact"
              className="border text-white px-8 py-4 rounded-lg font-semibold bg-black hover:text-white hover:bg-primary-900  transition text-center border-black"
            >
              Contact Support
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div className="relative rounded-xl p-8">
          <Link to={`/product/${currentProduct?.id}`}>
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={currentProduct?.image}
                alt={currentProduct?.name}
                className={`w-full h-96 object-contain transition-all duration-700 ease-in-out
                    ${animate ? "scale-110 opacity-100" : "scale-95 opacity-0"}
                  `}
              />
            </div>
          </Link>

          {/* Controls */}
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <FaChevronLeft />
            </button>

            <span className="text-sm text-gray-600">
              {index + 1} / {sliderProducts.length}
            </span>

            <button
              onClick={next}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
