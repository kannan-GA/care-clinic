import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Treatments = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/treatments");
  }

  return (
    <section className="py-20 bg-gray-10 text-center">
      <h2
        className="text-4xl font-semibold mb-8 relative after:content-['View_all_treatment_→'] after:block after:w-auto after:bg-blue-800 after:text-xs md:after:text-lg after:hover:underline after:hover:text-blue-500 after:mt-14 after:absolute after:md:right-44 after:text-white md:after:text-blue-800 after:py-2 md:after:py-0 md:after:px-0 after:px-4 after:rounded-lg after:right-16   after:top-1/2 after:-translate-y-1/2 after:mx-auto after:cursor-pointer md:after:bg-transparent"
        onClick={handleClick}
      >
        Treatment
      </h2>

      <div className="flex flex-col justify-center items-center gap-4 mx-4 my-20 md:my-0 sm:flex sm:flex-row md:justify-center md:space-x-8 md:pt-5">
        {[
          {
            title: "Laser Treatment",
            description: "At our skin clinic, we understand the importance...",
            image: "assets/surgery-1807541_1920.jpg",
          },
          {
            title: "Hair Transplantation",
            description: "At our skin clinic, we understand the importance...",
            image: "assets/surgery-1807541_1920.jpg",
          },
          {
            title: "Hydrafacial",
            description: "At our skin clinic, we understand the importance...",
            image: "assets/surgery-1807541_1920.jpg",
          },
        ].map((treatment, index) => (
          <div
            key={index}
            className="bg-treatment p-8 rounded-lg shadow-lg flex flex-col gap-5 w-full sm:w-1/2 md:w-1/4 h-full"
            style={{ minHeight: "400px" }} // Set a fixed min height
          >
            <img
              src={treatment.image}
              alt={treatment.title}
              className="w-full h-auto rounded-md"
            />
            <h3 className="text-xs lg:text-base xl:text-xl font-bold mb-4">
              {treatment.title}
            </h3>
            <p className="text-sm md:text-sm flex-grow">
              {treatment.description}
            </p>

            <div className="mt-auto w-full">
              <Link
                to={"/appointment"}
                className="text-[8px] sm:text-[8px] md:text-[8px] lg:text-[12px] xl:text-lg bg-blue-800 text-white uppercase px-4 py-2 rounded-lg tracking-wider w-full text-center"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Treatments;
