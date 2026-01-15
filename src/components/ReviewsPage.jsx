import React, { useState, useEffect } from "react";

const ReviewsPage = () => {
  // State for reviews and form inputs
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: "",
    rating: 5,
    comment: "",
    product: "",
    date: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("all");
  const [averageRating, setAverageRating] = useState(0);

  // Initialize with sample reviews and load from localStorage
  useEffect(() => {
    const sampleReviews = [
      {
        id: 1,
        name: "Alex Johnson",
        rating: 5,
        comment:
          "Excellent quality products! The Alpha Pharma range is top-notch. Delivery was fast and discreet. Will definitely order again.",
        product: "Alpha Pharma - TEST CYPO",
        date: "2023-10-15",
        verified: true,
      },
      {
        id: 2,
        name: "Marcus R.",
        rating: 4,
        comment:
          "Good results with the Infinity Pharma Deca 300. Smooth injection, no pip. Product seems genuine and effective.",
        product: "infinity pharma - DECA 300",
        date: "2023-11-22",
        verified: true,
      },
      {
        id: 3,
        name: "Sarah K.",
        rating: 5,
        comment:
          "The Superior Peptides HGH is fantastic! Noticeable recovery improvement and better sleep quality. Worth every penny.",
        product: "Superior Peptides - HGH191AA",
        date: "2023-12-05",
        verified: true,
      },
      {
        id: 4,
        name: "Bodybuilder89",
        rating: 3,
        comment:
          "Product arrived as described but shipping took longer than expected. The Thaiger Test E works as expected though.",
        product: "Thaiger - Test Enanthate Retostyl",
        date: "2023-09-18",
        verified: false,
      },
      {
        id: 5,
        name: "Mike T.",
        rating: 5,
        comment:
          "German Remedies products are always reliable. Their blends are perfectly formulated. Customer service is responsive and helpful.",
        product: "German Remedies - GR LEAN GAIN (BLEND)",
        date: "2024-01-10",
        verified: true,
      },
      {
        id: 6,
        name: "Professional User",
        rating: 4,
        comment:
          "LA Anabolics provides consistent quality. The Tren Ace is potent and effective. Packaging is professional and secure.",
        product: "LA Anabolics - TREN A 100",
        date: "2023-11-30",
        verified: true,
      },
      {
        id: 7,
        name: "Jenny S.",
        rating: 5,
        comment:
          "Denik SARMS are the real deal! Noticeable strength gains with minimal side effects. Will continue using their products.",
        product: "Denik - ANAMUPORIS",
        date: "2024-01-05",
        verified: true,
      },
      {
        id: 8,
        name: "Carlos M.",
        rating: 2,
        comment:
          "Had issues with one product from 3rd degree. Customer service resolved it eventually but took time. Product quality was average.",
        product: "3rd degree - TEST ENAN",
        date: "2023-10-28",
        verified: false,
      },
      {
        id: 9,
        name: "Pro Athlete",
        rating: 5,
        comment:
          "G Med injectables are smooth and painless. No infections or bad reactions. Quality matches the price point perfectly.",
        product: "G Med - TEST-E 350",
        date: "2023-12-12",
        verified: true,
      },
      {
        id: 10,
        name: "David L.",
        rating: 4,
        comment:
          "Good overall experience. Products work as advertised. Would appreciate more frequent promotions or bulk discounts.",
        product: "sp - HGH191AA",
        date: "2023-11-05",
        verified: true,
      },
    ];

    // Try to load reviews from localStorage
    const savedReviews = localStorage.getItem("productReviews");

    if (savedReviews) {
      // Merge sample reviews with saved reviews, avoiding duplicates
      const parsedSavedReviews = JSON.parse(savedReviews);
      const allReviews = [...sampleReviews];

      // Add saved reviews that don't already exist (by checking id)
      parsedSavedReviews.forEach((savedReview) => {
        if (!allReviews.some((r) => r.id === savedReview.id)) {
          allReviews.push(savedReview);
        }
      });

      setReviews(allReviews);
    } else {
      // If no saved reviews, use sample reviews
      setReviews(sampleReviews);
    }
  }, []);

  // Calculate average rating whenever reviews change
  useEffect(() => {
    if (reviews.length > 0) {
      const total = reviews.reduce((sum, review) => sum + review.rating, 0);
      setAverageRating(total / reviews.length);
    }
  }, [reviews]);

  // Save reviews to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("productReviews", JSON.stringify(reviews));
  }, [reviews]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: value,
    });
  };

  // Handle rating change
  const handleRatingChange = (rating) => {
    setNewReview({
      ...newReview,
      rating: rating,
    });
  };

  // Handle form submission
  const handleSubmitReview = (e) => {
    e.preventDefault();

    if (!newReview.name.trim() || !newReview.comment.trim()) {
      alert("Please fill in all required fields");
      return;
    }

    const reviewToAdd = {
      id: Date.now(), // Use timestamp as unique ID
      name: newReview.name.trim(),
      rating: newReview.rating,
      comment: newReview.comment.trim(),
      product: newReview.product.trim() || "General Products",
      date: new Date().toISOString().split("T")[0],
      verified: false,
    };

    // Add the new review to the beginning of the array
    setReviews([reviewToAdd, ...reviews]);

    // Reset form
    setNewReview({
      name: "",
      rating: 5,
      comment: "",
      product: "",
      date: "",
    });

    setShowForm(false);

    // Show success message
    alert("Thank you for your review! It has been submitted successfully.");
  };

  // Filter reviews based on rating
  const filteredReviews =
    filter === "all"
      ? reviews
      : reviews.filter((review) => {
          if (filter === "5-star") return review.rating === 5;
          if (filter === "4-star") return review.rating === 4;
          if (filter === "3-star") return review.rating === 3;
          if (filter === "2-star") return review.rating === 2;
          if (filter === "1-star") return review.rating === 1;
          return true;
        });

  // Render star rating
  const renderStars = (rating) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-5 h-5 ${
              star <= rating ? "text-yellow-400" : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Customer Reviews
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Read what our customers say about our products. Share your own
            experience to help others make informed decisions.
          </p>

          {/* Overall Rating Summary */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-6 md:mb-0">
                <div className="text-5xl font-bold text-gray-900">
                  {averageRating.toFixed(1)}
                </div>
                <div className="mt-2">
                  {renderStars(Math.round(averageRating))}
                </div>
                <div className="text-gray-600 mt-2">
                  Based on {reviews.length} reviews
                </div>
              </div>

              <div className="w-full md:w-2/3">
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => {
                    const count = reviews.filter(
                      (r) => r.rating === rating
                    ).length;
                    const percentage =
                      reviews.length > 0 ? (count / reviews.length) * 100 : 0;

                    return (
                      <div key={rating} className="flex items-center">
                        <span className="text-gray-700 w-10">
                          {rating} star
                        </span>
                        <div className="ml-2 w-full bg-gray-200 rounded-full h-2.5">
                          <div
                            className="bg-yellow-400 h-2.5 rounded-full"
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                        <span className="ml-2 text-gray-600 text-sm w-10">
                          {count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters and Review Form */}
          <div className="lg:w-1/3">
            {/* Filter Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Filter Reviews
              </h2>
              <div className="space-y-3">
                <button
                  onClick={() => setFilter("all")}
                  className={`w-full text-left px-4 py-3 rounded-lg ${
                    filter === "all"
                      ? "bg-blue-50 text-blue-600 border border-blue-200"
                      : "hover:bg-gray-50"
                  }`}
                >
                  All Reviews ({reviews.length})
                </button>
                <button
                  onClick={() => setFilter("5-star")}
                  className={`w-full text-left px-4 py-3 rounded-lg ${
                    filter === "5-star"
                      ? "bg-blue-50 text-blue-600 border border-blue-200"
                      : "hover:bg-gray-50"
                  }`}
                >
                  5 Star ({reviews.filter((r) => r.rating === 5).length})
                </button>
                <button
                  onClick={() => setFilter("4-star")}
                  className={`w-full text-left px-4 py-3 rounded-lg ${
                    filter === "4-star"
                      ? "bg-blue-50 text-blue-600 border border-blue-200"
                      : "hover:bg-gray-50"
                  }`}
                >
                  4 Star ({reviews.filter((r) => r.rating === 4).length})
                </button>
                <button
                  onClick={() => setFilter("3-star")}
                  className={`w-full text-left px-4 py-3 rounded-lg ${
                    filter === "3-star"
                      ? "bg-blue-50 text-blue-600 border border-blue-200"
                      : "hover:bg-gray-50"
                  }`}
                >
                  3 Star ({reviews.filter((r) => r.rating === 3).length})
                </button>
                <button
                  onClick={() => setFilter("2-star")}
                  className={`w-full text-left px-4 py-3 rounded-lg ${
                    filter === "2-star"
                      ? "bg-blue-50 text-blue-600 border border-blue-200"
                      : "hover:bg-gray-50"
                  }`}
                >
                  2 Star ({reviews.filter((r) => r.rating === 2).length})
                </button>
                <button
                  onClick={() => setFilter("1-star")}
                  className={`w-full text-left px-4 py-3 rounded-lg ${
                    filter === "1-star"
                      ? "bg-blue-50 text-blue-600 border border-blue-200"
                      : "hover:bg-gray-50"
                  }`}
                >
                  1 Star ({reviews.filter((r) => r.rating === 1).length})
                </button>
              </div>
            </div>

            {/* Submit Review Form */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">
                  Share Your Experience
                </h2>
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
                >
                  {showForm ? "Cancel" : "Write a Review"}
                </button>
              </div>

              {showForm && (
                <form onSubmit={handleSubmitReview} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={newReview.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Product (Optional)
                    </label>
                    <input
                      type="text"
                      name="product"
                      value={newReview.product}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Which product did you use?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Rating *
                    </label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => handleRatingChange(star)}
                          className="focus:outline-none"
                        >
                          <svg
                            className={`w-8 h-8 ${
                              star <= newReview.rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Review *
                    </label>
                    <textarea
                      name="comment"
                      value={newReview.comment}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Share your experience with the product..."
                      required
                    />
                  </div>

                  <div className="text-sm text-gray-500">
                    <p>* Required fields</p>
                    <p className="mt-1">
                      Your review will be permanently stored and visible to
                      other users.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-md"
                  >
                    Submit Review
                  </button>
                </form>
              )}

              {!showForm && (
                <p className="text-gray-600 text-center py-4">
                  Click "Write a Review" to share your experience with our
                  products.
                </p>
              )}
            </div>

            {/* Info Box */}
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-blue-800">
                    Permanent Reviews
                  </h3>
                  <div className="mt-2 text-sm text-blue-700">
                    <p>
                      All reviews are permanently stored in your browser's local
                      storage. They will remain even after page refresh.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div className="lg:w-2/3">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {filter === "all"
                  ? "All Reviews"
                  : `${
                      filter.charAt(0).toUpperCase() + filter.slice(1)
                    } Reviews`}
                <span className="text-gray-600 text-lg font-normal ml-2">
                  ({filteredReviews.length})
                </span>
              </h2>

              <div className="text-sm text-gray-600">
                Sorted by: <span className="font-medium">Most Recent</span>
              </div>
            </div>

            {filteredReviews.length === 0 ? (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  No reviews found
                </h3>
                <p className="mt-2 text-gray-600">
                  No reviews match your selected filter. Try a different filter
                  or be the first to write a review!
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredReviews.map((review) => (
                  <div
                    key={review.id}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300"
                  >
                    <div className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between">
                        <div className="flex items-start mb-4 sm:mb-0">
                          <div className="flex-shrink-0">
                            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg">
                              {review.name.charAt(0)}
                            </div>
                          </div>
                          <div className="ml-4">
                            <div className="flex items-center">
                              <h3 className="text-lg font-bold text-gray-900">
                                {review.name}
                              </h3>
                              {review.verified && (
                                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                  <svg
                                    className="mr-1 h-3 w-3"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  Verified
                                </span>
                              )}
                            </div>
                            <div className="mt-1 flex items-center">
                              <div className="flex items-center">
                                {renderStars(review.rating)}
                                <span className="ml-2 text-sm font-medium text-gray-900">
                                  {review.rating}.0
                                </span>
                              </div>
                              <span className="mx-2 text-gray-300">•</span>
                              <span className="text-sm text-gray-600">
                                {formatDate(review.date)}
                              </span>
                            </div>
                          </div>
                        </div>

                        {review.product && (
                          <div className="bg-gray-50 rounded-lg px-3 py-2">
                            <span className="text-sm font-medium text-gray-700">
                              Product:
                            </span>
                            <span className="text-sm text-gray-600 ml-1">
                              {review.product}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="mt-4">
                        <p className="text-gray-700 leading-relaxed">
                          {review.comment}
                        </p>
                      </div>

                      <div className="mt-6 flex justify-between items-center">
                        <div className="flex space-x-2">
                          <button className="text-gray-500 hover:text-blue-600 transition duration-200">
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905a3.61 3.61 0 01-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                              />
                            </svg>
                          </button>
                          <button className="text-gray-500 hover:text-red-600 transition duration-200">
                            <svg
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.905 0-.414.168-.814.469-1.107l3.293-3.293a1 1 0 011.414 0l.707.707a1 1 0 001.414-1.414l-.707-.707a1.414 1.414 0 010-2l3.293-3.293a3 3 0 00.469-1.107c0-.5-.405-.905-.905-.905H15M9 14l3-3m0 0l3 3m-3-3v8"
                              />
                            </svg>
                          </button>
                        </div>

                        <div className="text-sm text-gray-500">
                          Review ID: #{review.id.toString().slice(-6)}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination (for demonstration) */}
            {filteredReviews.length > 0 && (
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-2 rounded-lg bg-blue-600 text-white">
                    1
                  </button>
                  <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50">
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>
            All reviews are stored locally in your browser. They will persist
            across sessions.
          </p>
          <p className="mt-1">
            To clear all reviews, clear your browser's local storage for this
            site.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsPage;
