import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./components/ProductPage";
import SearchResults from "./components/SearchResults";
import BrandProductsPage from "./components/BrandProductsPage";
import ProductsPage from "./components/ProductsPage";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Hero from "./pages/Hero/Hero";
import ReviewsPage from "./components/ReviewsPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <ScrollToTop />
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/search/:query" element={<SearchResults />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/brand/:brandName" element={<BrandProductsPage />} />
            <Route path="/all-brands" element={<ProductsPage />} />
            <Route path="/reviewspage" element={<ReviewsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
