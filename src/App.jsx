import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

import Hero from "./pages/Hero/Hero";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ProductPage from "./components/ProductPage";
import SearchResults from "./components/SearchResults";
import BrandProductsPage from "./components/BrandProductsPage";
import ProductsPage from "./components/ProductsPage";
import ReviewsPage from "./components/ReviewsPage";
import SteroidsBlogPage from "./components/SteroidsBlogPage";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />

      <div className="min-h-screen flex flex-col bg-gray-100">
        <Navbar />

        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/brand/:brandName" element={<BrandProductsPage />} />
            <Route path="/search/:query" element={<SearchResults />} />
            <Route path="/all-brands" element={<ProductsPage />} />
            <Route path="/reviewspage" element={<ReviewsPage />} />
            <Route path="/blog" element={<SteroidsBlogPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
