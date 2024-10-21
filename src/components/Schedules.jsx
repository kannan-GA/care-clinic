import React, { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";

// Connect to the Socket.IO server
const socket = io("https://care-clinic-express.vercel.app");

const Schedules = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch initial data
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(
          "https://care-clinic-express.vercel.app/doctors"
        );
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctor data:", error);
      }
    };

    fetchDoctors();

    // Listen for doctor updates
    socket.on("doctorUpdated", (updatedDoctor) => {
      setDoctors((prevDoctors) =>
        prevDoctors.map((doctor) =>
          doctor._id === updatedDoctor._id ? updatedDoctor : doctor
        )
      );
    });

    // Cleanup to prevent memory leaks
    return () => {
      socket.off("doctorUpdated");
    };
  }, []);

  // Helper function to get conditional styles for availability
  const getAvailabilityColor = (isAvailable) => ({
    backgroundColor: isAvailable ? "green" : "red",
    color: "white",
    padding: "5px",
    borderRadius: "5px",
  });

  // Helper function to format date as "YYYY-MM-DD"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };

  // Check if a given date is today
  const isToday = (dateString) => {
    const today = new Date().toISOString().split("T")[0];
    return formatDate(dateString) === today;
  };

  return (
    <div className="container mt-3  mx-auto ">
      <h2>Doctors List</h2>
      <table className="min-w-full border-collapse border border-gray-300 ">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Name</th>
            <th className="border border-gray-300 p-2">Specialty</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Phone</th>
            <th className="border border-gray-300 p-2">Morning</th>
            <th className="border border-gray-300 p-2">Noon</th>
            <th className="border border-gray-300 p-2">Evening</th>
            <th className="border border-gray-300 p-2">Date</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor._id}>
              <td className="border border-gray-300 p-2">{doctor.name}</td>
              <td className="border border-gray-300 p-2">{doctor.specialty}</td>
              <td className="border border-gray-300 p-2">{doctor.contact}</td>
              <td className="border border-gray-300 p-2">{doctor.phone}</td>
              <td
                style={getAvailabilityColor(doctor.availability?.morning)}
                className="border border-gray-300 p-2"
              >
                {doctor.availability?.morning ? "Available" : "Unavailable"}
              </td>
              <td
                style={getAvailabilityColor(doctor.availability?.noon)}
                className="border border-gray-300 p-2"
              >
                {doctor.availability?.noon ? "Available" : "Unavailable"}
              </td>
              <td
                style={getAvailabilityColor(doctor.availability?.evening)}
                className="border border-gray-300 p-2"
              >
                {doctor.availability?.evening ? "Available" : "Unavailable"}
              </td>
              <td
                style={{
                  backgroundColor: isToday(doctor.date)
                    ? "yellow"
                    : "transparent",
                  padding: "5px",
                  borderRadius: "5px",
                }}
                className="border border-gray-300 p-2"
              >
                {formatDate(doctor.date)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedules;
