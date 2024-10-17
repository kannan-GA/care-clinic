import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-indigo-600">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mt-4">
          Oops! Page Not Found
        </p>
        <p className="text-gray-600 mt-2">
          The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-all"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
