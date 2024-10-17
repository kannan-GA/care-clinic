import React, { useState } from "react";
import StarRatingInput from "./StarRatingInput"; // Import the interactive star rating component

const ShareFeedbackForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0); // State to store the selected rating

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending data to the server (or Google reviews)
    const feedback = {
      name,
      review,
      rating,
    };

    console.log("Feedback submitted:", feedback);

    // Reset form and close modal after submission
    setName("");
    setReview("");
    setRating(0);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-left text-gray-700">Your Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Enter your name"
          required
        />
      </div>

      <div>
        <label className="block text-left text-gray-700">Your Review</label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
          placeholder="Write your review here..."
          rows="4"
          required
        />
      </div>

      <div>
        <label className="block text-left text-gray-700">Your Rating</label>
        <StarRatingInput rating={rating} onRatingChange={setRating} />{" "}
        {/* Interactive star rating */}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700"
      >
        Submit Feedback
      </button>
    </form>
  );
};

export default ShareFeedbackForm;
