import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

const SearchResults = () => {
  const { query } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (query) {
      const decodedQuery = decodeURIComponent(query).toLowerCase();
      setSearchTerm(decodedQuery);

      const results = products.filter(
        (product) =>
          product.product.toLowerCase().includes(decodedQuery) ||
          product.brand.toLowerCase().includes(decodedQuery) ||
          product.category.toLowerCase().includes(decodedQuery) ||
          product.composition.toLowerCase().includes(decodedQuery)
      );

      setSearchResults(results);
    }
  }, [query]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">
        Search Results for: "{searchTerm}"
      </h1>

      {searchResults.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-600 mb-4">
            No products found matching your search
          </p>
          <p className="text-gray-500">Try searching with different keywords</p>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <p className="text-gray-600">
              Found {searchResults.length} product
              {searchResults.length !== 1 ? "s" : ""}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {searchResults.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResults;
