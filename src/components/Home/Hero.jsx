// import React from "react";

// const Hero = () => {
//   return (
//     <section className="bg-banner ssm:bg-cover ssm:bg-no-repeat sm:bg-cover md:bg-cover xl:bg-cover lg:bg-cover  text-white h-screen px-6  flex items-center ">
//       <div className="space-y-28 w-full sm:w-[70%] lg:w-[60%] h-auto my-4 text-left ">
//         <div className="space-y-10">
//           <h1 className="text-lg ssm:text-xl  sm:text-2xl lg:text-4xl xl:text-5xl tracking-widest  font-bold text-gray-300">
//             Our Commitment to Care
//           </h1>
//           <p className=" text-sm ssm:text-base sm:text-base md:text-sm lg:text-base line-clamp-3 text-gray-300">
//             At Care Clinic, we are committed to providing exceptional healthcare
//             services that focus on your overall well-being. Our clinic is
//             equipped with the latest medical technologies and staffed by highly
//             qualified professionals dedicated to ensuring your health and
//             comfort.
//           </p>
//         </div>

//         <button className="bg-yellow-400 text-blue-900 font-bold text-xs sm:text-base py-2 px-3  rounded hover:bg-yellow-300">
//           Know more →
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel CSS
import "../Css/Hero.css";

const Hero = () => {
  return (
    <section className="text-white w-screen h-screen flex items-center">
      <Carousel
        showArrows={false}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={5000}
        className="w-full"
      >
        {/* Slide 1 */}
        <div className="bg-banner bg-cover bg-center h-screen flex items-center justify-center">
          <div className="text-center space-y-6">
            <h1 className="text-lg sm:text-2xl lg:text-4xl font-bold tracking-widest text-gray-300">
              Our Commitment to Care
            </h1>
            <p className="text-sm sm:text-base lg:text-base text-gray-300 max-w-xl mx-auto">
              At Care Clinic, we are committed to providing exceptional
              healthcare services that focus on your overall well-being. Our
              clinic is equipped with the latest medical technologies and
              staffed by highly qualified professionals dedicated to ensuring
              your health and comfort.
            </p>
            <button className="bg-yellow-400 text-blue-900 font-bold text-xs sm:text-base py-2 px-3 rounded hover:bg-yellow-300">
              Know more →
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="bg-banner bg-cover bg-center h-screen flex items-center justify-center">
          <div className="text-center space-y-6">
            <h1 className="text-lg sm:text-2xl lg:text-4xl font-bold tracking-widest text-gray-300">
              Your Health, Our Priority
            </h1>
            <p className="text-sm sm:text-base lg:text-base text-gray-300 max-w-xl mx-auto">
              We provide personalized healthcare solutions tailored to your
              needs, ensuring you receive the best possible treatment and care.
            </p>
            <button className="bg-yellow-400 text-blue-900 font-bold text-xs sm:text-base py-2 px-3 rounded hover:bg-yellow-300">
              Learn More →
            </button>
          </div>
        </div>

        {/* Additional slides */}
        {/* Add more slides here if needed, just follow the same structure */}
      </Carousel>
    </section>
  );
};

export default Hero;
