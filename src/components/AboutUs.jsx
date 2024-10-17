import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-base md:text-2xl lg:text-2xl font-bold mb-4">
          Our Story
        </h2>
        <p className="mb-8 text-sm md:text-lg lg:text-lg">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <div className="flex space-x-8 justify-start">
          <Link to="/doctors" className="text-blue-500 hover:underline">
            Our Doctor's &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
