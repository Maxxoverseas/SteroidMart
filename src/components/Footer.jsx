import React from "react";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaTruck,
  FaCreditCard,
  FaHeadset,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // WhatsApp number aur pre-filled message
  const whatsappNumber = "+17342342932";
  const whatsappMessage =
    "Hello, I'm interested in your products (Steroid Mart)";

  // WhatsApp chat link generator function
  const getWhatsAppLink = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  };

  const paymentMethods = [
    {
      name: "PayPal",
      image:
        "https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15..v1602794215.png",
      bgColor: "bg-blue-50",
    },
    {
      name: "Crypto",
      image:
        "https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg?semt=ais_hybrid&w=740&q=80",
      bgColor: "bg-orange-50",
    },
    {
      name: "Venmo",
      image:
        "https://images.prismic.io/bigcartel-staging/Z-IxSndAxsiBv2YN_venmo.png?auto=format,compress&rect=320,0,800,600&w=1800&h=1350",
      bgColor: "bg-blue-50",
    },
    {
      name: "Zelle",
      image: "https://firstcu.net/wp-content/uploads/2022/11/zelle-logo.png",
      bgColor: "bg-purple-50",
    },
    {
      name: "Credit Cards",
      image: "https://cdn-icons-png.flaticon.com/512/179/179457.png",
      bgColor: "bg-gray-50",
    },
    {
      name: "Apple Pay",
      image: "https://cdn-icons-png.flaticon.com/512/179/179457.png",
      bgColor: "bg-black",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section - Features */}
      <div className="bg-blue-800 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-700 p-2 rounded-lg">
                <FaShieldAlt className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Quality Assurance</h3>
                <p className="text-xs text-blue-200">100% Genuine Products</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-blue-700 p-2 rounded-lg">
                <FaTruck className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Secure Shipping</h3>
                <p className="text-xs text-blue-200">Discreet Packaging</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-blue-700 p-2 rounded-lg">
                <FaCreditCard className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Safe Payment</h3>
                <p className="text-xs text-blue-200">Multiple Options</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-blue-700 p-2 rounded-lg">
                <FaHeadset className="text-xl" />
              </div>
              <div>
                <h3 className="font-bold text-sm">24/7 Support</h3>
                <p className="text-xs text-blue-200">Expert Guidance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">
              Steroid Mart
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Your trusted source for premium pharmaceutical products, peptides,
              and research compounds. Quality assured with discreet worldwide
              shipping.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 p-2 rounded-lg transition"
                aria-label="WhatsApp"
                title="Chat on WhatsApp with pre-filled message"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a
                href="mailto:support@pharmastore.com"
                className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition"
                aria-label="Email"
              >
                <FaEnvelope className="text-xl" />
              </a>
              <a
                href="tel:+17342342932"
                className="bg-red-600 hover:bg-red-700 p-2 rounded-lg transition"
                aria-label="Phone"
              >
                <FaPhoneAlt className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Injectables
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Orals
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Peptides
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  SARMS
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">
              Popular Brands
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to=""
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Alpha Pharma
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Infinity Pharma
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  German Remedies
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  3rd Degree
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Denik
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Superior Peptides
                </Link>
              </li>
              <li>
                <Link
                  to=""
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  G Med
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-400">
              Contact Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaWhatsapp className="text-green-400 mt-1" />
                <div>
                  <p className="font-semibold text-sm">WhatsApp</p>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition text-sm"
                    title="Click to chat on WhatsApp"
                  >
                    +1 7342342932
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaEnvelope className="text-blue-400 mt-1" />
                <div>
                  <p className="font-semibold text-sm">Email</p>
                  <a
                    href="mailto:support@pharmastore.com"
                    className="text-gray-300 hover:text-white transition text-sm"
                  >
                    -----------@.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaPhoneAlt className="text-red-400 mt-1" />
                <div>
                  <p className="font-semibold text-sm">Phone</p>
                  <a
                    href="tel:+17342342932"
                    className="text-gray-300 hover:text-white transition text-sm"
                  >
                    +1 7342342932
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-yellow-400 mt-1" />
                <div>
                  <p className="font-semibold text-sm">Location</p>
                  <p className="text-gray-300 text-sm">
                    Worldwide Shipping Available
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick Button - Updated with pre-filled message */}
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg transition w-full group"
              title="Click to start WhatsApp chat with pre-filled message"
            >
              <FaWhatsapp className="text-xl" />
              <span className="font-bold">Chat on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-lg font-bold mb-6 text-center text-blue-400">
            Accepted Payment Methods
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className={`${method.bgColor} rounded-lg p-3 flex items-center justify-center h-16`}
              >
                <img
                  src={method.image}
                  alt={method.name}
                  className="max-h-10 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Steroid Mart. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
