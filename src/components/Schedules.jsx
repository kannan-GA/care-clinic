// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import io from "socket.io-client";

// // Connect to the Socket.IO server
// const socket = io("https://care-clinic-express.vercel.app");

// const Schedules = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [loading, setLoading] = useState(true); // New loading state

//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         const response = await axios.get(
//           "https://care-clinic-express.vercel.app/doctors"
//         );
//         setDoctors(response.data);
//       } catch (error) {
//         console.error("Error fetching doctor data:", error);
//       } finally {
//         setLoading(false); // Stop the spinner once the data is fetched
//       }
//     };

//     fetchDoctors();

//     socket.on("doctorUpdated", (updatedDoctor) => {
//       setDoctors((prevDoctors) =>
//         prevDoctors.map((doctor) =>
//           doctor._id === updatedDoctor._id ? updatedDoctor : doctor
//         )
//       );
//     });

//     return () => {
//       socket.off("doctorUpdated");
//     };
//   }, []);

//   const getAvailabilityColor = (isAvailable) => ({
//     background: isAvailable
//       ? "linear-gradient(45deg, #28a745, #4caf50)"
//       : "linear-gradient(45deg, #dc3545, #ff6347)",
//     color: "white",
//     padding: "8px",
//     borderRadius: "10px",
//     textAlign: "center",
//     fontWeight: "bold",
//   });

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toISOString().split("T")[0];
//   };

//   const isToday = (dateString) => {
//     const today = new Date().toISOString().split("T")[0];
//     return formatDate(dateString) === today;
//   };

//   if (loading) {
//     // Spinner UI while data is loading
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto mt-8 p-4">
//       <h2 className="text-2xl font-bold mb-6 text-center">Doctors List</h2>

//       {/* Responsive layout */}
//       <div className="hidden md:block overflow-x-auto">
//         <table className="min-w-full border-collapse border border-gray-300 rounded-lg">
//           <thead>
//             <tr className="bg-blue-100">
//               <th className="border border-gray-300 px-4 py-2 text-left">
//                 Name
//               </th>
//               <th className="border border-gray-300 px-4 py-2 text-left">
//                 Specialty
//               </th>
//               <th className="border border-gray-300 px-4 py-2">Morning</th>
//               <th className="border border-gray-300 px-4 py-2">Noon</th>
//               <th className="border border-gray-300 px-4 py-2">Evening</th>
//               <th className="border border-gray-300 px-4 py-2">Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {doctors.map((doctor) => (
//               <tr
//                 key={doctor._id}
//                 className="hover:bg-gray-100 transition duration-200"
//               >
//                 <td className="border border-gray-300 px-4 py-2">
//                   {doctor.name}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {doctor.specialty}
//                 </td>
//                 <td
//                   style={getAvailabilityColor(doctor.availability?.morning)}
//                   className="border border-gray-300 px-4 py-2"
//                 >
//                   {doctor.availability?.morning ? "Available" : "Unavailable"}
//                 </td>
//                 <td
//                   style={getAvailabilityColor(doctor.availability?.noon)}
//                   className="border border-gray-300 px-4 py-2"
//                 >
//                   {doctor.availability?.noon ? "Available" : "Unavailable"}
//                 </td>
//                 <td
//                   style={getAvailabilityColor(doctor.availability?.evening)}
//                   className="border border-gray-300 px-4 py-2"
//                 >
//                   {doctor.availability?.evening ? "Available" : "Unavailable"}
//                 </td>
//                 <td
//                   style={{
//                     backgroundColor: isToday(doctor.date)
//                       ? "#ffeeba"
//                       : "transparent",
//                     padding: "5px",
//                     borderRadius: "8px",
//                     fontWeight: "bold",
//                   }}
//                   className="border border-gray-300 px-4 py-2 text-center"
//                 >
//                   {formatDate(doctor.date)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Card layout for mobile */}
//       <div className="md:hidden space-y-4">
//         {doctors.map((doctor) => (
//           <div
//             key={doctor._id}
//             className="border border-gray-300 rounded-lg p-4 shadow-md"
//           >
//             <h3 className="text-lg font-bold mb-2">{doctor.name}</h3>
//             <p className="text-gray-600">Specialty: {doctor.specialty}</p>

//             <div className="flex justify-between items-center mt-4">
//               <span
//                 style={getAvailabilityColor(doctor.availability?.morning)}
//                 className="w-1/3 text-center text-[10px]"
//               >
//                 {doctor.availability?.morning ? "Morning" : "No Morning"}
//               </span>
//               <span
//                 style={getAvailabilityColor(doctor.availability?.noon)}
//                 className="w-1/3 text-center text-[10px]"
//               >
//                 {doctor.availability?.noon ? "Noon" : "No Noon"}
//               </span>
//               <span
//                 style={getAvailabilityColor(doctor.availability?.evening)}
//                 className="w-1/3 text-center text-[10px]"
//               >
//                 {doctor.availability?.evening ? "Evening" : "No Evening"}
//               </span>
//             </div>

//             <p
//               style={{
//                 backgroundColor: isToday(doctor.date)
//                   ? "#ffeeba"
//                   : "transparent",
//                 padding: "5px",
//                 borderRadius: "8px",
//                 fontWeight: "bold",
//                 marginTop: "8px",
//               }}
//               className="text-center"
//             >
//               {formatDate(doctor.date)}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Schedules;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import io from "socket.io-client";

// // Connect to the Socket.IO server
// const socket = io("https://care-clinic-express.vercel.app");

// const Schedules = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchDoctors = async () => {
//       try {
//         const response = await axios.get(
//           "https://care-clinic-express.vercel.app/doctors"
//         );
//         setDoctors(response.data);
//       } catch (error) {
//         console.error("Error fetching doctor data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchDoctors();

//     socket.on("doctorUpdated", (updatedDoctor) => {
//       setDoctors((prevDoctors) =>
//         prevDoctors.map((doctor) =>
//           doctor._id === updatedDoctor._id ? updatedDoctor : doctor
//         )
//       );
//     });

//     return () => {
//       socket.off("doctorUpdated");
//     };
//   }, []);

//   const getAvailabilityColor = (isAvailable) => ({
//     background: isAvailable
//       ? "linear-gradient(45deg, #28a745, #4caf50)"
//       : "linear-gradient(45deg, #dc3545, #ff6347)",
//     color: "white",
//     padding: "8px",
//     borderRadius: "10px",
//     textAlign: "center",
//     fontWeight: "bold",
//   });

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
//     return `${dayOfWeek}, ${date.toISOString().split("T")[0]}`;
//   };

//   const isToday = (dateString) => {
//     const today = new Date().toISOString().split("T")[0];
//     return formatDate(dateString).includes(today);
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto mt-8 p-4">
//       <h2 className="text-2xl font-bold mb-6 text-center">Doctors List</h2>

//       {/* Responsive layout */}
//       <div className="hidden md:block overflow-x-auto">
//         <table className="min-w-full border-collapse border border-gray-300 rounded-lg">
//           <thead>
//             <tr className="bg-blue-100">
//               <th className="border border-gray-300 px-4 py-2 text-left">
//                 Name
//               </th>
//               <th className="border border-gray-300 px-4 py-2 text-left">
//                 Specialty
//               </th>
//               <th className="border border-gray-300 px-4 py-2">Morning</th>
//               <th className="border border-gray-300 px-4 py-2">Evening</th>
//               <th className="border border-gray-300 px-4 py-2">Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {doctors.map((doctor) => (
//               <tr
//                 key={doctor._id}
//                 className="hover:bg-gray-100 transition duration-200"
//               >
//                 <td className="border border-gray-300 px-4 py-2">
//                   {doctor.name}
//                 </td>
//                 <td className="border border-gray-300 px-4 py-2">
//                   {doctor.specialty}
//                 </td>
//                 <td
//                   style={getAvailabilityColor(doctor.availability?.morning)}
//                   className="border border-gray-300 px-4 py-2"
//                 >
//                   {doctor.availability?.morning ? "Available" : "Unavailable"}
//                 </td>
//                 <td
//                   style={getAvailabilityColor(doctor.availability?.evening)}
//                   className="border border-gray-300 px-4 py-2"
//                 >
//                   {doctor.availability?.evening ? "Available" : "Unavailable"}
//                 </td>
//                 <td
//                   style={{
//                     backgroundColor: isToday(doctor.date)
//                       ? "#ffeeba"
//                       : "transparent",
//                     padding: "5px",
//                     borderRadius: "8px",
//                     fontWeight: "bold",
//                   }}
//                   className="border border-gray-300 px-4 py-2 text-center"
//                 >
//                   {formatDate(doctor.date)}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Card layout for mobile */}
//       <div className="md:hidden space-y-4">
//         {doctors.map((doctor) => (
//           <div
//             key={doctor._id}
//             className="border border-gray-300 rounded-lg p-4 shadow-md"
//           >
//             <h3 className="text-lg font-bold mb-2">{doctor.name}</h3>
//             <p className="text-gray-600">Specialty: {doctor.specialty}</p>

//             <div className="flex justify-between items-center mt-4">
//               <span
//                 style={getAvailabilityColor(doctor.availability?.morning)}
//                 className="w-1/2 text-center text-[10px]"
//               >
//                 {doctor.availability?.morning ? "Morning" : "No Morning"}
//               </span>
//               <span
//                 style={getAvailabilityColor(doctor.availability?.evening)}
//                 className="w-1/2 text-center text-[10px]"
//               >
//                 {doctor.availability?.evening ? "Evening" : "No Evening"}
//               </span>
//             </div>

//             <p
//               style={{
//                 backgroundColor: isToday(doctor.date)
//                   ? "#ffeeba"
//                   : "transparent",
//                 padding: "5px",
//                 borderRadius: "8px",
//                 fontWeight: "bold",
//                 marginTop: "8px",
//               }}
//               className="text-center"
//             >
//               {formatDate(doctor.date)}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Schedules;

import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";

// Connect to the Socket.IO server
const socket = io("https://care-clinic-express.vercel.app");

const Schedules = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          "https://care-clinic-express.vercel.app/doctors"
        );
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();

    socket.on("doctorUpdated", (updatedDoctor) => {
      setDoctors((prevDoctors) =>
        prevDoctors.map((doctor) =>
          doctor._id === updatedDoctor._id ? updatedDoctor : doctor
        )
      );
    });

    return () => {
      socket.off("doctorUpdated");
    };
  }, []);

  const getAvailabilityColor = (isAvailable) => ({
    background: isAvailable
      ? "linear-gradient(45deg, #28a745, #4caf50)"
      : "linear-gradient(45deg, #dc3545, #ff6347)",
    color: "white",
    padding: "8px",
    borderRadius: "10px",
    textAlign: "center",
    fontWeight: "bold",
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const dayOfWeek = date.toLocaleDateString("en-US", { weekday: "long" });
    return `${date.toISOString().split("T")[0]}   -  ${dayOfWeek}`;
  };

  const isToday = (dateString) => {
    const today = new Date().toISOString().split("T")[0];
    return formatDate(dateString).includes(today);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-2xl font-bold mb-6 text-center">Doctors List</h2>

      {/* Responsive layout */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-blue-100">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Specialty
              </th>
              <th className="border border-gray-300 px-4 py-2">Morning</th>
              <th className="border border-gray-300 px-4 py-2">Evening</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr
                key={doctor._id}
                className="hover:bg-gray-100 transition duration-200"
              >
                <td className="border border-gray-300 px-4 py-2">
                  {doctor.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {doctor.specialty}
                </td>
                <td
                  style={getAvailabilityColor(doctor.availability?.morning)}
                  className="border border-gray-300 px-4 py-2"
                >
                  {doctor.availability?.morning ? "Available" : "Unavailable"}
                </td>
                <td
                  style={getAvailabilityColor(doctor.availability?.evening)}
                  className="border border-gray-300 px-4 py-2"
                >
                  {doctor.availability?.evening ? "Available" : "Unavailable"}
                </td>
                <td
                  style={{
                    backgroundColor: isToday(doctor.date)
                      ? "#ffeeba"
                      : "transparent",
                    padding: "5px",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    textAlign: "left", // Center text horizontally
                    verticalAlign: "middle", // Center text vertically
                    minWidth: "120px", // Set a minimum width to ensure even spacing
                  }}
                  className="border border-gray-300 px-4 py-2"
                >
                  {formatDate(doctor.date)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Card layout for mobile */}
      <div className="md:hidden space-y-4">
        {doctors.map((doctor) => (
          <div
            key={doctor._id}
            className="border border-gray-300 rounded-lg p-4 shadow-md"
          >
            <h3 className="text-lg font-bold mb-2">{doctor.name}</h3>
            <p className="text-gray-600">Specialty: {doctor.specialty}</p>

            <div className="flex justify-between items-center mt-4">
              <span
                style={getAvailabilityColor(doctor.availability?.morning)}
                className="w-1/2 text-center text-[10px]"
              >
                {doctor.availability?.morning ? "Morning" : "No Morning"}
              </span>
              <span
                style={getAvailabilityColor(doctor.availability?.evening)}
                className="w-1/2 text-center text-[10px]"
              >
                {doctor.availability?.evening ? "Evening" : "No Evening"}
              </span>
            </div>

            <p
              style={{
                backgroundColor: isToday(doctor.date)
                  ? "#ffeeba"
                  : "transparent",
                padding: "5px",
                borderRadius: "8px",
                fontWeight: "bold",
                marginTop: "8px",
                textAlign: "center", // Center text horizontally
                verticalAlign: "middle", // Center text vertically
              }}
              className="text-center"
            >
              {formatDate(doctor.date)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Schedules;
