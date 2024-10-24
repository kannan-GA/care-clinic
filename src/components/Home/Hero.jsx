import React from "react";

const Hero = () => {
  return (
    // <section className="bg-banner  ssm:bg-cover ssm:bg-no-repeat  sm:bg-cover md:bg-cover xl:bg-cover lg:bg-cover bg-fixed text-white h-screen px-6 pt-16 ">
    //   <div className="space-y-6  ">
    //     <h1 className=" text-[12px] tracking-widest xl:text-5xl font-bold">
    //       Our Commitment to Care
    //     </h1>
    //     <p className="text-xs">
    //       We embrace technology to deliver and improve quality care...
    //     </p>
    //     <button className="bg-yellow-400 text-blue-900 font-bold  text:base     py-3 px-6 rounded hover:bg-yellow-300">
    //       Know more →
    //     </button>
    //   </div>
    //   <div className="w-1/2"></div>
    // </section>
    <section className="bg-banner ssm:bg-cover ssm:bg-no-repeat sm:bg-cover md:bg-cover xl:bg-cover lg:bg-cover bg-fixed text-white h-screen px-6  flex items-center ">
      <div className="space-y-28 w-full sm:w-[70%] lg:w-[60%] h-auto my-4 text-left ">
        <div className="space-y-10">
          <h1 className="text-lg ssm:text-xl  sm:text-2xl lg:text-4xl xl:text-5xl tracking-widest  font-bold text-gray-300">
            Our Commitment to Care
          </h1>
          <p className=" text-sm ssm:text-base sm:text-base md:text-sm lg:text-base line-clamp-3 text-gray-300">
            At Care Clinic, we are committed to providing exceptional healthcare
            services that focus on your overall well-being. Our clinic is
            equipped with the latest medical technologies and staffed by highly
            qualified professionals dedicated to ensuring your health and
            comfort.
          </p>
        </div>

        <button className="bg-yellow-400 text-blue-900 font-bold text-xs sm:text-base py-2 px-3  rounded hover:bg-yellow-300">
          Know more →
        </button>
      </div>
    </section>
  );
};

export default Hero;
