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
      <div className="space-y-6 w-full sm:w-[70%] lg:w-[60%] text-left ">
        <h1 className="text-lg ssm:text-xl  sm:text-2xl lg:text-4xl tracking-widest  font-bold">
          Our Commitment to Care
        </h1>
        <p className=" text-sm ssm:text-base sm:text-base md:text-base lg:text-base line-clamp-3">
          We embrace technology to deliver and improve quality care We embrace
          technology to deliver and improve quality care We embrace technology
          to deliver and improve quality care We embrace technology to deliver
          and improve quality care We embrace technology to deliver and improve
          quality care We embrace technology to deliver and improve quality care
          We embrace technology to deliver and improve quality care We embrace
          technology to deliver and improve quality care v
        </p>
        <button className="bg-yellow-400 text-blue-900 font-bold text-xs sm:text-base py-2 px-3 rounded hover:bg-yellow-300">
          Know more →
        </button>
      </div>
    </section>
  );
};

export default Hero;
