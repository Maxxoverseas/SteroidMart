import React, { useState, useEffect, useRef } from "react";
import {
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaClock,
  FaShieldAlt,
  FaTruck,
  FaCreditCard,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    productDetails: "",
  });
  const [orderDetails, setOrderDetails] = useState(null);
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailStatus, setEmailStatus] = useState(null);
  const formRef = useRef();

  const EMAILJS_CONFIG = {
    SERVICE_ID: "service_lpidc9v",
    TEMPLATE_ID: "template_ypyvb2u",
    PUBLIC_KEY: "avgDybE_LFCog3C4U",
    TO_EMAIL: "steroidmart5@gmail.com",
  };

  // WhatsApp number
  const whatsappNumber = "17342342932";

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

    const storedOrder = localStorage.getItem("currentOrder");
    if (storedOrder) {
      const order = JSON.parse(storedOrder);
      setOrderDetails(order);

      const productMessage = `Order Inquiry for: ${order.product}\nBrand: ${order.brand}\nQuantity: ${order.quantity}\nPrice: ${order.price}\nTotal: ${order.total}`;

      setFormData((prev) => ({
        ...prev,
        message: productMessage,
        productDetails: `Product: ${order.product}\nQuantity: ${order.quantity}\nTotal: ${order.total}`,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (data) => {
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        to_email: EMAILJS_CONFIG.TO_EMAIL,
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        address: data.address,
        message: data.message,
        product_details: data.productDetails || "General Inquiry",
        order_details: orderDetails
          ? JSON.stringify(orderDetails, null, 2)
          : "No order details",
        order_id: "ORD-" + Date.now().toString().slice(-6),
        submitted_at: new Date().toLocaleString(),
        total_amount: orderDetails?.total || "N/A",
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      console.log("Email sent successfully:", response);
      return { success: true, message: "Email sent successfully!" };
    } catch (error) {
      console.error("Email sending failed:", error);
      return {
        success: false,
        message: "Failed to send email. Please try again.",
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setEmailStatus(null);

    try {
      // Send email first
      const emailResult = await sendEmail(formData);

      if (emailResult.success) {
        const completeOrderData = {
          ...formData,
          orderDetails,
          timestamp: new Date().toISOString(),
          orderId: "ORD-" + Date.now(),
        };

        console.log("Complete Order Submitted:", completeOrderData);
        localStorage.removeItem("currentOrder");
        setIsOrderSubmitted(true);
        setEmailStatus({
          type: "success",
          message: "Order submitted and email sent successfully!",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
          productDetails: "",
        });
        setOrderDetails(null);
      } else {
        setEmailStatus({ type: "error", message: emailResult.message });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setEmailStatus({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppOrder = () => {
    const getWhatsAppLink = (message) => {
      const encodedMessage = encodeURIComponent(message);
      return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    };

    if (orderDetails) {
      const whatsappMessage =
        `*NEW ORDER REQUEST - Steroid Market*\n\n` +
        `📦 *Product Details:*\n` +
        `Product: ${orderDetails.product}\n` +
        `Brand: ${orderDetails.brand}\n` +
        `Quantity: ${orderDetails.quantity}\n` +
        `Unit Price: ${orderDetails.price}\n` +
        `Total Amount: ${orderDetails.total}\n\n` +
        `👤 *Customer Details:*\n` +
        `Name: ${formData.name || "Not provided"}\n` +
        `Phone: ${formData.phone || "Not provided"}\n` +
        `Email: ${formData.email || "Not provided"}\n` +
        `Address: ${formData.address || "Not provided"}\n\n` +
        `💬 *Additional Message:*\n${
          formData.message || "No additional message"
        }\n\n` +
        `🕒 Submitted: ${new Date().toLocaleString()}`;

      const whatsappUrl = getWhatsAppLink(whatsappMessage);
      window.open(whatsappUrl, "_blank");
    } else {
      const whatsappMessage =
        `*CONTACT REQUEST - Steroid Market*\n\n` +
        `👤 *Customer Details:*\n` +
        `Name: ${formData.name || "Not provided"}\n` +
        `Phone: ${formData.phone || "Not provided"}\n` +
        `Email: ${formData.email || "Not provided"}\n\n` +
        `💬 *Message:*\n${
          formData.message || "I want to know about your products"
        }\n\n` +
        `🕒 Submitted: ${new Date().toLocaleString()}`;

      const whatsappUrl = getWhatsAppLink(whatsappMessage);
      window.open(whatsappUrl, "_blank");
    }
  };

  const handleWhatsAppContact = (prefilledMessage = "") => {
    const getWhatsAppLink = (message) => {
      const encodedMessage = encodeURIComponent(message);
      return `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    };

    const message =
      prefilledMessage ||
      `Hello! I'm interested in your products and would like to know more details.`;

    const whatsappUrl = getWhatsAppLink(message);
    window.open(whatsappUrl, "_blank");
  };

  const contactMethods = [
    {
      icon: <FaWhatsapp className="text-2xl text-green-500" />,
      title: "WhatsApp",
      details: "+1 7342342932",
      description: "Fastest response time",
      color: "bg-gradient-to-br from-green-50 to-green-100 border-green-200",
      actionText: "Chat Now",
      onClick: () => handleWhatsAppContact(),
    },
    {
      icon: <FaEnvelope className="text-2xl text-blue-500" />,
      title: "Email",
      details: "steroidmart5@gmail.com",
      description: "24-hour response",
      color: "bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",
      actionText: "Send Email",
      onClick: () => (window.location.href = "mailto:steroidmart5@gmail.com"),
    },
    {
      icon: <FaPhoneAlt className="text-2xl text-red-500" />,
      title: "Phone",
      details: "+1 7342342932",
      description: "Available 10AM-6PM",
      color: "bg-gradient-to-br from-red-50 to-red-100 border-red-200",
      actionText: "Call Now",
      onClick: () => (window.location.href = "tel:+17342342932"),
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-purple-500" />,
      title: "Global Shipping",
      details: "100+ Countries",
      description: "Discreet packaging",
      color: "bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200",
      actionText: "Track Order",
      onClick: () => {},
    },
  ];

  const processSteps = [
    {
      icon: "1",
      title: "Submit Order",
      description: "Fill in your details and product requirements",
    },
    {
      icon: "2",
      title: "Get Quote",
      description: "Receive pricing and shipping details",
    },
    {
      icon: "3",
      title: "Make Payment",
      description: "Secure payment via multiple options",
    },
    {
      icon: "4",
      title: "Receive Tracking",
      description: "Get tracking info for discreet delivery",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-50 to-orange-50 rounded-full px-4 py-2 mb-6 border border-red-100">
            <FaPaperPlane className="text-red-500" />
            <span className="text-red-600 font-semibold text-sm">
              CONTACT & ORDER
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Place Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">
              Order
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete your order with secure payment and discreet shipping. Our
            team is available 24/7 to assist you.
          </p>
        </div>

        {/* Success Message */}
        {isOrderSubmitted && (
          <div className="mb-8 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <FaCheckCircle className="text-white text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Order Submitted Successfully!
                </h3>
                <p className="text-gray-700">
                  Thank you for your order. Our team will contact you within 24
                  hours with payment details and shipping information.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Order ID: ORD-{Date.now().toString().slice(-6)}
                </p>
                <p className="text-sm text-green-600 font-medium mt-2">
                  Confirmation email has been sent to steroidmart5@gmail.com
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Email Status Message */}
        {emailStatus && (
          <div
            className={`mb-8 rounded-2xl p-4 shadow-lg ${
              emailStatus.type === "success"
                ? "bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200"
                : "bg-gradient-to-r from-red-50 to-orange-50 border border-red-200"
            }`}
          >
            <div className="flex items-center space-x-3">
              {emailStatus.type === "success" ? (
                <FaCheckCircle className="text-green-500 text-xl" />
              ) : (
                <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                  <span className="text-white text-sm">!</span>
                </div>
              )}
              <p
                className={
                  emailStatus.type === "success"
                    ? "text-green-700"
                    : "text-red-700"
                }
              >
                {emailStatus.message}
              </p>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Contact Info & Order Summary */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Methods */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Contact Methods
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className={`${method.color} rounded-xl p-4 border cursor-pointer hover:shadow-md transition-shadow`}
                    onClick={method.onClick}
                  >
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="p-2 bg-white rounded-lg shadow-sm">
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          {method.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {method.description}
                        </p>
                      </div>
                    </div>
                    <p className="font-semibold text-gray-800 mb-3">
                      {method.details}
                    </p>
                    <div className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                      {method.actionText} →
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Process */}
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold text-white mb-6">
                Order Process
              </h3>
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center font-bold">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{step.title}</h4>
                      <p className="text-gray-300 text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Secure & Trusted
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <FaShieldAlt className="text-green-500 text-2xl mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-800">
                    Secure
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <FaTruck className="text-blue-500 text-2xl mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-800">
                    Discreet
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <FaClock className="text-orange-500 text-2xl mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-800">
                    24/7
                  </div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <FaCreditCard className="text-purple-500 text-2xl mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-800">
                    Secure Pay
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-200">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">
                  {orderDetails ? "Complete Your Order" : "Contact Us"}
                </h2>
                {orderDetails && (
                  <span className="bg-gradient-to-r from-red-50 to-orange-50 text-red-600 font-semibold px-4 py-2 rounded-full border border-red-200">
                    Order in Progress
                  </span>
                )}
              </div>

              {/* Order Summary */}
              {orderDetails && (
                <div className="mb-8 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-900 text-lg">
                      Order Summary
                    </h3>
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-sm">
                      Ready to Ship
                    </span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                          <span className="text-2xl">💊</span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900">
                            {orderDetails.product}
                          </h4>
                          <p className="text-sm text-gray-600 mb-2">
                            Brand: {orderDetails.brand}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                              Quantity
                            </span>
                            <span className="font-semibold">
                              {orderDetails.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Unit Price</span>
                          <span className="font-bold text-gray-900">
                            {orderDetails.price}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Quantity</span>
                          <span className="font-bold text-gray-900">
                            {orderDetails.quantity}
                          </span>
                        </div>
                        <div className="border-t pt-3">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-gray-900">
                              Total
                            </span>
                            <span className="text-2xl font-bold text-red-600">
                              {orderDetails.total}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full mt-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-3 group"
                  >
                    <FaWhatsapp className="text-2xl" />
                    <span>Send Order via WhatsApp</span>
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                </div>
              )}

              {/* Order Form */}
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                      placeholder="your@gmail.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Shipping Address *
                  </label>
                  <div className="relative">
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                      placeholder="Complete address with PIN code"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Message
                  </label>
                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all"
                      placeholder="Any special instructions or requirements..."
                    />
                  </div>
                </div>

                <input
                  type="hidden"
                  name="productDetails"
                  value={formData.productDetails}
                />

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`flex-1 bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 rounded-xl font-bold transition-all duration-300 ${
                      isSubmitting
                        ? "opacity-75 cursor-not-allowed"
                        : "hover:shadow-xl hover:scale-105"
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Processing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <FaPaperPlane />
                        <span>Submit Order & Send Email</span>
                      </div>
                    )}
                  </button>

                  {orderDetails && (
                    <button
                      type="button"
                      onClick={handleWhatsAppOrder}
                      className="flex-1 bg-white text-gray-900 border-2 border-gray-300 py-4 rounded-xl font-bold hover:border-gray-400 hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <FaWhatsapp className="text-green-500" />
                      <span>WhatsApp Order</span>
                    </button>
                  )}
                </div>

                <p className="text-sm text-gray-500 text-center pt-4">
                  By submitting, you agree to our terms and confirm you are 18+
                  years old. For research purposes only. All data will be sent
                  to steroidmart5@gmail.com
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
