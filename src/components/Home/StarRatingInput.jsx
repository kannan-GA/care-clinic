import React from "react";

const StarRatingInput = ({ rating, onRatingChange }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          key={index}
          className={`w-8 h-8 cursor-pointer ${
            index < rating ? "text-yellow-500" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          onClick={() => onRatingChange(index + 1)} // Update the rating on click
        >
          <path d="M9.049 3.3a1 1 0 011.902 0l1.283 3.955a1 1 0 00.95.69h4.184c.857 0 1.214 1.093.588 1.582l-3.39 2.464a1 1 0 00-.364 1.118l1.283 3.955c.27.834-.706 1.516-1.451 1.012L10 14.347l-3.39 2.464c-.746.504-1.721-.178-1.451-1.012l1.283-3.955a1 1 0 00-.364-1.118L2.69 9.526c-.626-.489-.269-1.582.588-1.582h4.184a1 1 0 00.95-.69L9.049 3.3z" />
        </svg>
      ))}
    </div>
  );
};

export default StarRatingInput;
