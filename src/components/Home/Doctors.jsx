// import React from "react";

// const Doctors = () => {
//   const doctors = [
//     {
//       name: "Dr. John Doe",
//       specialization: "Cardiologist",
//       image: "/public/assets/doctor-with-his-arms-crossed-white-background.jpg",
//     },
//     {
//       name: "Dr. Jane Smith",
//       specialization: "Pediatrician",
//       image: "/public/assets/doctor-with-his-arms-crossed-white-background.jpg",
//     },
//     {
//       name: "Dr. Alice Johnson",
//       specialization: "Dermatologist",
//       image: "/public/assets/doctor-with-his-arms-crossed-white-background.jpg",
//     },
//     {
//       name: "Dr. Bob Williams",
//       specialization: "Orthopedic",
//       image: "/public/assets/doctor-with-his-arms-crossed-white-background.jpg",
//     },
//   ];

//   return (
//     <section className="py-20 text-center bg-doctor bg-cover">
//       <h2 className="text-4xl font-semibold mb-6">Meet Our Dedicated Team</h2>
//       <p className="mb-12">
//         It is a long established fact that a reader will be distracted...
//       </p>
//       <div className="flex justify-center space-x-8">
//         {doctors.map((doctor, index) => (
//           <div key={index} className="relative w-[20%] h-[20%]">
//             <img
//               src={doctor.image}
//               alt={`Doctor ${index + 1}`}
//               className="w-full h-full rounded-full shadow-lg hover:opacity-50 transition-opacity duration-300"
//             />
//             {/* Doctor Details - Shown on hover */}
//             <div className="absolute inset-0 bg-black bg-opacity-70 rounded-full flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
//               <h3 className="text-xl font-semibold">{doctor.name}</h3>
//               <p className="text-sm">{doctor.specialization}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Doctors;

import React from "react";

const Doctors = () => {
  const doctors = [
    {
      name: "Dr. John Doe",
      specialization: "Cardiologist",
      image: "/public/assets/doctor-with-his-arms-crossed-white-background.jpg",
    },
    {
      name: "Dr. Jane Smith",
      specialization: "Pediatrician",
      image: "/public/assets/doctor-with-his-arms-crossed-white-background.jpg",
    },
    {
      name: "Dr. Alice Johnson",
      specialization: "Dermatologist",
      image: "/public/assets/doctor-with-his-arms-crossed-white-background.jpg",
    },
    {
      name: "Dr. Bob Williams",
      specialization: "Orthopedic",
      image: "/public/assets/doctor-with-his-arms-crossed-white-background.jpg",
    },
  ];

  return (
    <section className="py-20 text-center bg-doctor bg-cover">
      <h2 className=" text-base lg:text-4xl font-semibold mb-6">
        Meet Our Dedicated Team
      </h2>
      <p className="mb-12 text-xs px-2">
        It is a long established fact that a reader will be distracted...
      </p>
      <div className="flex flex-wrap justify-center gap-8 px-2 ">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="relative w-1/4 sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-[200px] flex-grow-0 flex-shrink-0"
          >
            <img
              src={doctor.image}
              alt={`Doctor ${index + 1}`}
              className="w-full h-auto rounded-full shadow-lg transition-opacity duration-300 max-h-[200px] object-cover"
            />
            {/* Doctor Details - Shown on hover */}
            <div className="absolute inset-0  bg-black bg-opacity-70 rounded-full flex flex-col items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className=" text-[8px] xssm:text-[9px] ssm:text-[11px] sm:text-base font-semibold">
                {doctor.name}
              </h3>
              <p className="text-[8px] xssm:text-[9px]  ssm:text-[11px] sm:text-base">
                {doctor.specialization}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
