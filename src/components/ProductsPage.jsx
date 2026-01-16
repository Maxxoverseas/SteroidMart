import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { products } from "../data/products";

const ProductsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedBrand, setSelectedBrand] = useState("");
  const [brands] = useState([...new Set(products.map((p) => p.brand))]);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  useEffect(() => {
    // Parse query parameters
    const params = new URLSearchParams(location.search);
    const brand = params.get("brand");

    if (brand) {
      const decodedBrand = decodeURIComponent(brand);
      setSelectedBrand(decodedBrand);
      // Filter products by brand
      const filtered = products.filter(
        (product) =>
          product.brand &&
          product.brand.toLowerCase() === decodedBrand.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setSelectedBrand("");
      setFilteredProducts(products);
    }
  }, [location.search]);

  // Function to handle image click
  const handleImageClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  // Handle mouse enter
  const handleMouseEnter = (productId) => {
    setHoveredProduct(productId);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold mb-6">
        {selectedBrand ? `${selectedBrand} Products` : "All Products"}
      </h1>

      <div className="mb-6">
        <p className="text-gray-600 mb-4">
          Showing {filteredProducts.length} products
          {selectedBrand && ` from ${selectedBrand}`}
        </p>

        {/* Brand Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Link
            to="/products"
            className={`px-4 py-2 rounded-full ${
              !selectedBrand
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All Brands
          </Link>
          {brands.slice(0, 10).map((brand) => (
            <Link
              key={brand}
              to={`/products?brand=${encodeURIComponent(brand)}`}
              className={`px-4 py-2 rounded-full ${
                selectedBrand === brand
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {brand}
            </Link>
          ))}
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition relative"
            >
              <div className="p-4">
                {/* Clickable Image with Hover Overlay */}
                <div
                  className="cursor-pointer mb-4 relative overflow-hidden rounded-md group"
                  onClick={() => handleImageClick(product.id)}
                  onMouseEnter={() => handleMouseEnter(product.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <img
                    src={product.image || "/placeholder.jpg"}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />

                  {/* Hover Overlay with Product Details */}
                  {hoveredProduct === product.id && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center p-4 transition-all duration-300">
                      <div className="text-white text-center space-y-2">
                        <p className="font-bold text-lg">{product.brand}</p>
                        <p className="text-yellow-300 font-bold text-xl">
                          {product.price}
                        </p>

                        {/* Optional: Only show these if they exist in your product data */}
                        {product.category && (
                          <p className="text-sm">
                            <span className="font-semibold">Category:</span>{" "}
                            {product.category}
                          </p>
                        )}

                        {product.potency && (
                          <p className="text-sm">
                            <span className="font-semibold">Potency:</span>{" "}
                            {product.potency}
                          </p>
                        )}

                        {product.quantity && (
                          <p className="text-sm">
                            <span className="font-semibold">Quantity:</span>{" "}
                            {product.quantity}
                          </p>
                        )}

                        {/* If potency/quantity don't exist, show some default info */}
                        {(!product.potency || !product.quantity) && (
                          <>
                            <p className="text-sm italic">
                              Click to view full details
                            </p>
                            <div className="pt-2">
                              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                                View Product
                              </button>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Hover Indicator (always shows on hover) */}
                  <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-md text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to View
                  </div>
                </div>

                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  Brand: {product.brand}
                </p>
                <p className="text-gray-800 font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500">No products found.</p>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
