import React, { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Fallback image if product image fails to load
  const imageSrc = imageError
    ? "https://via.placeholder.com/400x300/3B82F6/FFFFFF?text=Product+Image"
    : product.image;

  return (
    <Link to={`/product/${product.id}`}>
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Product Image */}
        <div className="h-48 bg-gray-200 relative overflow-hidden">
          <img
            src={imageSrc}
            alt={product.product}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />

          {/* Hover Overlay */}
          {isHovered && (
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4 text-white">
              <h3 className="font-bold text-lg mb-2">{product.product}</h3>
              <p className="text-sm mb-1">Brand: {product.brand}</p>
              <p className="text-sm mb-1">Potency: {product.potency}</p>
              <p className="text-sm mb-1">Category: {product.category}</p>
              {product.quantity && (
                <p className="text-sm mb-2">Quantity: {product.quantity}</p>
              )}
              <p className="text-xl font-bold text-yellow-400">
                {product.price}
              </p>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 truncate">
            {product.product}
          </h3>
          <p className="text-sm text-gray-600">{product.brand}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-lg font-bold text-blue-600">
              {product.price}
            </span>
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
