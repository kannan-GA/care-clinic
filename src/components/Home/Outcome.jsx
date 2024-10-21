// export default Outcome;
import React, { useEffect, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const Outcome = () => {
  // Images array
  const images = [
    "assets/Group 54.png",
    "assets/Group 54.png",
    "assets/Group 54.png",
    "assets/contact-us.jpg",
    "assets/Group 54.png",
    "assets/Group 54.png",
    "assets/Group 54.png",
    "assets/Group 54.png",
    "assets/Group 54.png",
    "assets/Group 54.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imagesToShow = 3; // Number of images to show at a time

  // Handle slide changes
  const nextSlide = () => {
    if (currentIndex + imagesToShow < images.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Get transform style based on current index
  const getTransformStyle = () => {
    return `translateX(-${(currentIndex * 100) / imagesToShow}%)`; // Adjusting for imagesToShow
  };

  return (
    <section className="py-20 bg-gray-100 text-center bg-outcome relative z-10">
      <h2 className="text-base xl:text-4xl font-semibold mb-8">
        Our Outcomes Speak For Themselves
      </h2>

      <div className="flex items-center justify-center">
        {/* Left Chevron */}
        <button
          onClick={prevSlide}
          className="text-gray-600 hover:text-black p-2 disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          <HiChevronLeft
            size={40}
            className="bg-white rounded-full text-black"
          />
        </button>

        {/* Image carousel */}
        <div className="flex overflow-hidden w-full max-w-[80%]">
          <div
            className="flex transition-transform duration-500"
            style={{ transform: getTransformStyle() }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="bg-white p-2 mx-1 rounded-lg shadow-lg flex-shrink-0"
                style={{
                  width: `calc((100% / ${imagesToShow}) - 0.5rem)`, // Adjusting for spacing
                }}
              >
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Chevron */}
        <button
          onClick={nextSlide}
          className="text-gray-600 hover:text-black p-2 disabled:opacity-50"
          disabled={currentIndex + imagesToShow >= images.length}
        >
          <HiChevronRight
            size={40}
            className="bg-white rounded-full text-black"
          />
        </button>
      </div>
    </section>
  );
};

export default Outcome;
