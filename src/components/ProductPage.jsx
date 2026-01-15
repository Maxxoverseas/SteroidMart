import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [imageError, setImageError] = useState(false);
  const [activeTab, setActiveTab] = useState("composition"); // 'composition' or 'related'
  const [currentSlide, setCurrentSlide] = useState(0);

  const relatedProductsContainerRef = useRef(null);

  useEffect(() => {
    const productId = parseInt(id);
    const foundProduct = products.find((p) => p.id === productId);
    setProduct(foundProduct);

    if (foundProduct) {
      // Get related products (same brand or category) - limited to 8 for sliding
      const related = products
        .filter(
          (p) =>
            (p.brand === foundProduct.brand ||
              p.category === foundProduct.category) &&
            p.id !== productId
        )
        .slice(0, 8);
      setRelatedProducts(related);
    }
  }, [id]);

  // Slide functions
  const slideLeft = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const slideRight = () => {
    const maxSlides = Math.max(0, relatedProducts.length - 5);
    if (currentSlide < maxSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleBuyNow = () => {
    if (!product) return;

    const totalPrice = (
      parseFloat(product.price.replace("$", "")) * quantity
    ).toFixed(2);

    const orderData = {
      product: product.product,
      brand: product.brand,
      quantity: quantity,
      price: product.price,
      total: `$${totalPrice}`,
      image: product.image,
      category: product.category,
      potency: product.potency,
    };

    localStorage.setItem("currentOrder", JSON.stringify(orderData));
    window.location.href = "/contact";
  };

  const handleWhatsApp = () => {
    if (!product) return;

    const totalPrice = (
      parseFloat(product.price.replace("$", "")) * quantity
    ).toFixed(2);

    // Create detailed WhatsApp message
    const whatsappMessage =
      `*🛒 NEW ORDER INQUIRY - PharmaStore*\n\n` +
      `*📦 Product Details:*\n` +
      `➤ Product: ${product.product}\n` +
      `➤ Brand: ${product.brand}\n` +
      `➤ Category: ${product.category}\n` +
      `➤ Potency: ${product.potency}\n` +
      `➤ Quantity: ${product.quantity}\n\n` +
      `*💰 Order Summary:*\n` +
      `➤ Unit Price: ${product.price}\n` +
      `➤ Order Quantity: ${quantity}\n` +
      `➤ Total Amount: $${totalPrice}\n\n` +
      `I want to order this product. Please confirm availability and provide payment details.\n\n` +
      `Thank you!`;

    // WhatsApp number
    const whatsappNumber = "9769397946";

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Create WhatsApp URL with pre-filled message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, "_blank");
  };

  // Format composition text with proper styling
  const formatComposition = (text) => {
    const sections = text.split("**").filter((section) => section.trim());
    return sections.map((section, index) => {
      if (index % 2 === 0) {
        // Regular text
        return (
          <p key={index} className="mb-3 text-gray-700">
            {section.trim()}
          </p>
        );
      } else {
        // Bold section title
        return (
          <h4 key={index} className="font-bold text-blue-700 mt-4 mb-2">
            {section.trim()}
          </h4>
        );
      }
    });
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center py-12">
          <p className="text-xl text-gray-600">Product not found</p>
          <Link
            to="/"
            className="mt-4 inline-block text-blue-600 hover:text-blue-800"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const totalPrice = (
    parseFloat(product.price.replace("$", "")) * quantity
  ).toFixed(2);

  // Fallback image if product image doesn't exist
  const imageSrc = imageError
    ? "https://via.placeholder.com/600x600/3B82F6/FFFFFF?text=Pharma+Product"
    : product.image;

  return (
    <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
      {/* Breadcrumb - Mobile Responsive */}
      <div className="mb-4 sm:mb-6 text-xs sm:text-sm text-gray-600 flex flex-wrap items-center">
        <Link to="/" className="hover:text-blue-600 whitespace-nowrap">
          Home
        </Link>
        <span className="mx-1 sm:mx-2">/</span>
        <Link
          to={`/category/${encodeURIComponent(product.category)}`}
          className="hover:text-blue-600 whitespace-nowrap truncate max-w-[100px] sm:max-w-none"
        >
          {product.category}
        </Link>
        <span className="mx-1 sm:mx-2">/</span>
        <span className="text-gray-800 font-medium truncate max-w-[120px] sm:max-w-none">
          {product.product}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {/* Product Image Section */}
        <div className="space-y-3 sm:space-y-4">
          <div className="bg-white rounded-xl shadow-lg p-3 sm:p-4 lg:p-6">
            <div className="aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-gray-100">
              <img
                src={imageSrc}
                alt={product.product}
                className="w-full h-full object-contain hover:scale-105 transition-transform duration-300 p-2"
                onError={() => setImageError(true)}
              />
            </div>
          </div>

          {/* Quick Info Cards - Responsive */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-4">
            <div className="bg-blue-50 rounded-lg p-2 sm:p-3 lg:p-4">
              <p className="text-xs sm:text-sm text-blue-600 mb-1">Brand</p>
              <p className="font-bold text-sm sm:text-base lg:text-lg truncate">
                {product.brand}
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-2 sm:p-3 lg:p-4">
              <p className="text-xs sm:text-sm text-blue-600 mb-1">Category</p>
              <p className="font-bold text-sm sm:text-base lg:text-lg truncate">
                {product.category}
              </p>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="space-y-4 sm:space-y-6">
          {/* Product Header */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-5 lg:p-6">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              {product.product}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2">
              <div className="text-xl sm:text-2xl font-bold text-blue-600">
                {product.price}
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                  In Stock
                </span>
              </div>
            </div>

            {/* Specifications Grid - Responsive */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="border border-gray-200 rounded-lg p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-500 mb-1">Potency</p>
                <p className="font-bold text-gray-800 text-sm sm:text-base">
                  {product.potency}
                </p>
              </div>
              <div className="border border-gray-200 rounded-lg p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-500 mb-1">
                  Quantity
                </p>
                <p className="font-bold text-gray-800 text-sm sm:text-base">
                  {product.quantity}
                </p>
              </div>
            </div>

            {/* Quantity Selector - Responsive */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gray-800">
                Select Quantity
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-100 flex items-center justify-center text-xl hover:bg-gray-200 transition"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <div className="text-center">
                    <span className="text-2xl sm:text-3xl font-bold block">
                      {quantity}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-500">
                      Units
                    </span>
                  </div>
                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gray-100 flex items-center justify-center text-xl hover:bg-gray-200 transition"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <div className="sm:ml-6 sm:pl-6 border-t sm:border-t-0 sm:border-l border-gray-300 pt-3 sm:pt-0">
                  <p className="text-sm text-gray-500">Total Price</p>
                  <p className="text-xl sm:text-2xl font-bold text-blue-600">
                    ${totalPrice}
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons - Responsive */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                onClick={handleBuyNow}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 sm:py-4 rounded-xl font-bold hover:from-blue-700 hover:to-blue-800 transition shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Buy Now
              </button>
              <button
                onClick={handleWhatsApp}
                className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 sm:py-4 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
                </svg>
                <span className="whitespace-nowrap">WhatsApp Order</span>
              </button>
            </div>

            {/* Quick Info */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-xs sm:text-sm text-blue-800">
                  <strong>Note:</strong> WhatsApp button opens chat with all
                  product details pre-filled. Buy Now takes you to order form.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section - Product Composition & Related Products */}
      <div className="mt-8 sm:mt-12">
        {/* Tabs Navigation */}
        <div className="flex border-b border-gray-200">
          <button
            className={`flex-1 py-3 sm:py-4 px-4 text-center font-medium text-sm sm:text-base ${
              activeTab === "composition"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("composition")}
          >
            Product Composition & Details
          </button>
          <button
            className={`flex-1 py-3 sm:py-4 px-4 text-center font-medium text-sm sm:text-base ${
              activeTab === "related"
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("related")}
          >
            Related Products
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-b-lg sm:rounded-b-xl shadow-lg p-4 sm:p-6 lg:p-8">
          {/* Composition Tab Content */}
          {activeTab === "composition" && product.composition && (
            <div className="prose max-w-none">
              <div className="bg-gray-50 rounded-lg p-3 sm:p-4 lg:p-6 overflow-x-auto">
                <div className="text-sm sm:text-base">
                  {formatComposition(product.composition)}
                </div>
              </div>
            </div>
          )}

          {/* Related Products Tab Content */}
          {activeTab === "related" && (
            <div className="relative">
              {relatedProducts.length > 0 ? (
                <>
                  {/* Slider Controls */}
                  <div className="flex justify-between items-center mb-4 sm:mb-6">
                    <button
                      onClick={slideLeft}
                      disabled={currentSlide === 0}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${
                        currentSlide === 0
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                      aria-label="Previous products"
                    >
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    <span className="text-sm sm:text-base font-medium text-gray-700">
                      Showing{" "}
                      {Math.min(currentSlide + 1, relatedProducts.length)}-
                      {Math.min(currentSlide + 5, relatedProducts.length)} of{" "}
                      {relatedProducts.length} products
                    </span>

                    <button
                      onClick={slideRight}
                      disabled={currentSlide >= relatedProducts.length - 5}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center ${
                        currentSlide >= relatedProducts.length - 5
                          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                          : "bg-blue-600 text-white hover:bg-blue-700"
                      }`}
                      aria-label="Next products"
                    >
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Products Slider */}
                  <div
                    ref={relatedProductsContainerRef}
                    className="overflow-hidden"
                  >
                    <div
                      className="flex transition-transform duration-300 ease-in-out"
                      style={{
                        transform: `translateX(-${currentSlide * (100 / 5)}%)`,
                      }}
                    >
                      {relatedProducts.map((relatedProduct) => (
                        <div
                          key={relatedProduct.id}
                          className="w-1/5 flex-shrink-0 px-2"
                        >
                          <Link
                            to={`/product/${relatedProduct.id}`}
                            className="group bg-white rounded-lg sm:rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 block"
                          >
                            <div className="relative h-40 sm:h-48 bg-gray-100 overflow-hidden">
                              <img
                                src={relatedProduct.image}
                                alt={relatedProduct.product}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                onError={(e) => {
                                  e.target.src =
                                    "https://via.placeholder.com/300x400/3B82F6/FFFFFF?text=Product";
                                }}
                              />
                              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                                {relatedProduct.category}
                              </div>
                            </div>
                            <div className="p-3 sm:p-4 lg:p-5">
                              <div className="flex justify-between items-start mb-1 sm:mb-2">
                                <h3 className="font-bold text-gray-900 text-sm sm:text-base group-hover:text-blue-600 transition line-clamp-1">
                                  {relatedProduct.product}
                                </h3>
                              </div>
                              <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3">
                                {relatedProduct.brand}
                              </p>
                              <div className="flex justify-between items-center">
                                <span className="text-base sm:text-lg font-bold text-blue-600">
                                  {relatedProduct.price}
                                </span>
                                <span className="text-xs sm:text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                  {relatedProduct.potency}
                                </span>
                              </div>
                              <div className="mt-2 sm:mt-3 text-xs text-gray-500">
                                <span className="flex items-center">
                                  <svg
                                    className="w-3 h-3 sm:w-4 sm:h-4 mr-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                  {relatedProduct.quantity}
                                </span>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Slide Indicators */}
                  <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
                    {Array.from({
                      length: Math.max(1, relatedProducts.length - 4),
                    }).map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                          index === currentSlide ? "bg-blue-600" : "bg-gray-300"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500">No related products found.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-6 sm:mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-4 sm:p-6 text-center text-white">
        <h3 className="text-lg sm:text-xl font-bold mb-2">
          Need Help Choosing?
        </h3>
        <p className="text-sm sm:text-base mb-4 opacity-90">
          Our experts are available to guide you. Contact us for personalized
          recommendations.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleWhatsApp}
            className="bg-white text-blue-600 px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold hover:bg-gray-100 transition flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411" />
            </svg>
            WhatsApp: +1 7342342932
          </button>
          <Link
            to="/contact"
            className="bg-transparent border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition"
          >
            Contact Form
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
