// import React, { useEffect, useState } from "react";

// // Example array of doctors (You can replace this with your data)
const doctorsData = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialty: "Cardiology",
    image: "/assets/doctor-with-his-arms-crossed-white-background.jpg",
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialty: "Neurology",
    image: "/assets/doctor-with-his-arms-crossed-white-background.jpg",
  },
  {
    id: 3,
    name: "Dr. Alex Johnson",
    specialty: "Pediatrics",
    image: "/assets/doctor-with-his-arms-crossed-white-background.jpg",
  },
  {
    id: 4,
    name: "Dr. John Doe",
    specialty: "Cardiology",
    image: "/assets/doctor-with-his-arms-crossed-white-background.jpg",
  },
  {
    id: 5,
    name: "Dr. Jane Smith",
    specialty: "Neurology",
    image: "/assets/doctor-with-his-arms-crossed-white-background.jpg",
  },
  {
    id: 6,
    name: "Dr. Alex Johnson",
    specialty: "Pediatrics",
    image: "/assets/doctor-with-his-arms-crossed-white-background.jpg",
  },
  {
    id: 7,
    name: "Dr. John Doe",
    specialty: "Cardiology",
    image: "/assets/doctor-with-his-arms-crossed-white-background.jpg",
  },
  {
    id: 8,
    name: "Dr. Jane Smith",
    specialty: "Neurology",
    image: "/assets/doctor-with-his-arms-crossed-white-background.jpg",
  },
  {
    id: 9,
    name: "Dr. Alex Johnson",
    specialty: "Pediatrics",
    image: "/assets/doctor-with-his-arms-crossed-white-background.jpg",
  },
  {
    id: 10,
    name: "Dr. John Doe",
    specialty: "Cardiology",
    image: "/assets/doctor-with-his-arms-crossed-white-background.jpg",
  },
  {
    id: 11,
    name: "Dr. Jane Smith",
    specialty: "Neurology",
    image: "/assets/doctor-with-his-arms-crossed-white-background.jpg",
  },
  {
    id: 12,
    name: "Dr. Alex Johnson",
    specialty: "Pediatrics",
    image: "/assets/doctor-with-his-arms-crossed-white-background.jpg",
  },
];

// // const Doctors = () => {
// //   const [doctors, setDoctors] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   // Simulate fetching data with useEffect
// //   useEffect(() => {
// //     // Simulate an API call with a timeout
// //     const fetchDoctors = () => {
// //       setTimeout(() => {
// //         setDoctors(doctorsData); // Set the fetched doctors data
// //         setLoading(false); // Set loading to false after data is "fetched"
// //       }, 2000); // Simulate 2 seconds loading time
// //     };

// //     fetchDoctors();
// //   }, []);

// //   // Spinner component
// //   const Spinner = () => (
// //     <div className="flex justify-center items-center h-64">
// //       <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-blue-500 border-b-blue-500"></div>
// //     </div>
// //   );

// //   return (
// //     <section className="bg-gray-300 py-16">
// //       <div className="container mx-auto px-4">
// //         <h2 className="text-4xl font-bold mb-8 text-center">
// //           Meet Our Doctors
// //         </h2>

// //         {/* Check if loading, show spinner if true */}
// //         {loading ? (
// //           <Spinner />
// //         ) : (
// //           // Grid layout for displaying doctors
// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
// //             {doctors.map((doctor) => (
// //               <div
// //                 key={doctor.id}
// //                 className="border rounded-lg shadow-lg overflow-hidden"
// //               >
// //                 <img
// //                   src={doctor.image}
// //                   alt={doctor.name}
// //                   className="w-full h-64 object-cover object-center"
// //                 />
// //                 <div className="p-4">
// //                   <h3 className="text-xl font-bold">{doctor.name}</h3>
// //                   <p className="text-gray-600">{doctor.specialty}</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // };

// const Doctors = () => {
//   const [doctors, setDoctors] = useState(doctorsData);

//   // Spinner component
//   //   const Spinner = () => (
//   //     <div className="flex justify-center items-center h-64">
//   //       <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-blue-500 border-b-blue-500"></div>
//   //     </div>
//   //   );

//   // Image Component with lazy loading and placeholder
//   const LazyImage = ({ src, alt }) => {
//     const [imageLoaded, setImageLoaded] = useState(true);

//     return (
//       <div className="relative w-full h-64">
//         <img
//           src={src}
//           alt={alt}
//           className={`w-full h-64 object-cover object-center transition-opacity duration-500 ease-in-out ${
//             imageLoaded ? "opacity-100" : "opacity-0"
//           }`}
//           loading="lazy"
//         />
//       </div>
//     );
//   };

//   return (
//     <section className="bg-gray-300 py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-4xl font-bold mb-8 text-center">
//           Meet Our Doctors
//         </h2>
//         {doctors && (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//             {doctors.map((doctor) => (
//               <div
//                 key={doctor.id}
//                 className="border rounded-lg shadow-lg overflow-hidden"
//               >
//                 <LazyImage src={doctor.image} alt={doctor.name} />
//                 <div className="p-4">
//                   <h3 className="text-xl font-bold">{doctor.name}</h3>
//                   <p className="text-gray-600">{doctor.specialty}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Doctors;

import React, { useState } from "react";

// Example array of doctors (replace with real data if needed)
// const doctorsData = [
//   {
//     id: 1,
//     name: "Dr. John Doe",
//     specialty: "Cardiology",
//     image: "/assets/doctor-with-his-arms-crossed-white-background.jpg",
//   },
//   {
//     id: 2,
//     name: "Dr. Jane Smith",
//     specialty: "Neurology",
//     image: "/assets/doctor-with-his-arms-crossed-white-background.jpg",
//   },
//   {
//     id: 3,
//     name: "Dr. Alex Johnson",
//     specialty: "Pediatrics",
//     image: "/assets/doctor-with-his-arms-crossed-white-background.jpg",
//   },
//   // Add more doctors as needed
// ];

// Image Component with Lazy Loading and Placeholder
// const LazyImage = ({ src, alt }) => {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   return (
//     <div className="relative w-full h-64 bg-gray-200">
//       {!imageLoaded && (
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
//         </div>
//       )}
//       <img
//         src={src}
//         alt={alt}
//         className={`w-full h-64 object-cover object-center transition-opacity duration-700 ease-in-out ${
//           imageLoaded ? "opacity-100" : "opacity-0"
//         }`}
//         onLoad={() => setImageLoaded(true)}
//         loading="lazy"
//       />
//     </div>
//   );
// };

// const Doctors = () => {
//   const [doctors] = useState(doctorsData);

//   return (
//     <section className="bg-gray-50 py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-gray-800">
//           Meet Our Doctors
//         </h2>

//         <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {doctors.map((doctor) => (
//             <div
//               key={doctor.id}
//               className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
//             >
//               <LazyImage src={doctor.image} alt={doctor.name} />
//               <div className="p-6">
//                 <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
//                   {doctor.name}
//                 </h3>
//                 <p className="text-sm sm:text-base text-gray-600">
//                   {doctor.specialty}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Doctors;

// const LazyImage = ({ src, alt }) => {
//   const [imageLoaded, setImageLoaded] = useState(false);

//   return (
//     <div className="relative w-full aspect-w-4 aspect-h-3 overflow-hidden">
//       <img
//         src={src}
//         alt={alt}
//         className={`object-cover w-full h-full transition-opacity duration-500 ease-in-out ${
//           imageLoaded ? "opacity-100" : "opacity-0"
//         }`}
//         loading="lazy"
//         onLoad={() => setImageLoaded(true)}
//       />
//     </div>
//   );
// };

const LazyImage = ({ src, alt }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative w-full  aspect-w-4 aspect-h-3 overflow-hidden">
      {/* Spinner visible while the image is loading */}
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}

      {/* Image with transition effect */}
      <img
        src={src}
        alt={alt}
        className={`object-cover w-full h-full transition-opacity duration-500 ease-in-out ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        loading="lazy"
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
};

const Doctors = () => {
  const [doctors] = useState(doctorsData);

  return (
    <section className="bg-gray-300 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-bold mb-8 text-center">Meet Our Doctors</h2>
        <div className="grid grid-cols-1 mx-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="border rounded-lg shadow-lg overflow-hidden"
            >
              <LazyImage src={doctor.image} alt={doctor.name} />
              <div className="p-4">
                <h3 className="text-xl font-bold">{doctor.name}</h3>
                <p className="text-gray-600">{doctor.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
