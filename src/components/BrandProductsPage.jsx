import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

const BrandProductsPage = () => {
  const { brandName } = useParams();
  const [brandProducts, setBrandProducts] = useState([]);
  const [brand, setBrand] = useState("");
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    if (brandName) {
      const decodedBrandName = decodeURIComponent(brandName);
      setBrand(decodedBrandName);

      // Filter products by brand
      const filtered = products.filter(
        (product) =>
          product.brand &&
          product.brand.toLowerCase() === decodedBrandName.toLowerCase()
      );
      setBrandProducts(filtered);
    }
  }, [brandName]);

  return (
    <div className="py-8">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          {brand} Products
        </h1>
        <p className="text-gray-600 text-sm sm:text-base">
          Showing {brandProducts.length} products from {brand}
        </p>

        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-500 mt-4">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-blue-600">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-blue-600 font-medium">{brand}</span>
        </div>
      </div>

      {/* Products Grid */}
      {brandProducts.length > 0 ? (
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {brandProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Product Image with Link */}
              <Link to={`/product/${product.id}`} className="block relative">
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-gray-100">
                  <img
                    src={product.image || "/placeholder.jpg"}
                    alt={product.name || product.product}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x400/3B82F6/FFFFFF?text=Product";
                    }}
                  />

                  {/* Hover Overlay with Details */}
                  <div
                    className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                      hoveredProduct === product.id ? "opacity-90" : "opacity-0"
                    }`}
                  >
                    <div className="absolute inset-0 p-4 flex flex-col justify-center items-center text-white">
                      <h3 className="font-bold text-lg sm:text-xl mb-2 text-center">
                        {product.name || product.product}
                      </h3>

                      <div className="space-y-2 text-sm sm:text-base w-full max-w-xs">
                        {product.brand && (
                          <div className="flex items-center">
                            <span className="font-medium mr-2">Brand:</span>
                            <span>{product.brand}</span>
                          </div>
                        )}

                        {product.potency && (
                          <div className="flex items-center">
                            <span className="font-medium mr-2">Potency:</span>
                            <span>{product.potency}</span>
                          </div>
                        )}

                        {product.category && (
                          <div className="flex items-center">
                            <span className="font-medium mr-2">Category:</span>
                            <span>{product.category}</span>
                          </div>
                        )}

                        {product.quantity && (
                          <div className="flex items-center">
                            <span className="font-medium mr-2">Quantity:</span>
                            <span>{product.quantity}</span>
                          </div>
                        )}

                        {product.expiry && (
                          <div className="flex items-center">
                            <span className="font-medium mr-2">Expiry:</span>
                            <span>{product.expiry}</span>
                          </div>
                        )}
                      </div>

                      <div className="mt-4">
                        <p className="text-xl sm:text-2xl font-bold text-yellow-400">
                          {product.price}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Product Info Below Image */}
              <div className="p-3 sm:p-4">
                <h3 className="font-semibold text-gray-800 text-sm sm:text-base truncate mb-1">
                  {product.name || product.product}
                </h3>

                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-gray-600 truncate max-w-[70%]">
                    {product.brand}
                  </p>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded whitespace-nowrap">
                    {product.category}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-lg sm:text-xl font-bold text-blue-600">
                    {product.price}
                  </span>

                  {/* Mobile only: Quick View Button */}
                  <Link
                    to={`/product/${product.id}`}
                    className="md:hidden text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                  >
                    Quick View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* No Products Found */
        <div className="text-center py-12 sm:py-16 md:py-20">
          <div className="max-w-md mx-auto">
            <div className="text-6xl text-gray-300 mb-4">📦</div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
              No products found for "{brand}"
            </h3>
            <p className="text-gray-600 mb-6">
              We couldn't find any products for this brand. Please check back
              later or browse our other brands.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/products"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
              >
                View All Products
              </Link>
              <Link
                to="/"
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 transition font-medium"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Footer Note */}
      {brandProducts.length > 0 && (
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="text-center text-gray-500 text-sm">
            <p>
              Click on any product image to view complete details and
              specifications.
            </p>
            <p className="mt-1">
              Hover over products (on desktop) to see quick details.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandProductsPage;
