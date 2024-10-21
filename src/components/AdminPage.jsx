import React, { useEffect, useState } from "react";

const API_URL = "https://care-clinic-express.vercel.app/doctors"; // Update this URL to your server's address

function AdminPage() {
  const [doctors, setDoctors] = useState([]);

  // Fetch doctors data from the server on page load
  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setDoctors(data);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  // Toggle availability for a doctor
  const handleToggle = (doctorId, time) => {
    setDoctors((prevDoctors) =>
      prevDoctors.map((doctor) =>
        doctor._id === doctorId
          ? {
              ...doctor,
              availability: {
                morning:
                  time === "morning" ? !doctor.availability.morning : false,
                noon: time === "noon" ? !doctor.availability.noon : false,
                evening:
                  time === "evening" ? !doctor.availability.evening : false,
              },
            }
          : doctor
      )
    );
  };

  // Handle date change
  const handleDateChange = (doctorId, date) => {
    setDoctors((prevDoctors) =>
      prevDoctors.map((doctor) =>
        doctor._id === doctorId ? { ...doctor, date: date } : doctor
      )
    );
  };

  // Save the updated doctors data to the server
  const saveToServer = async (doctorId) => {
    const doctorToUpdate = doctors.find((doctor) => doctor._id === doctorId);

    try {
      await fetch(`${API_URL}/${doctorId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(doctorToUpdate),
      });
      alert("Updated successfully!");
    } catch (error) {
      console.error("Error updating doctors data:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Page - Manage Doctors</h1>
      <ul>
        {doctors.map((doctor) => (
          <li key={doctor._id} className="mb-4">
            <h2 className="font-semibold">{doctor.name}</h2>
            <div className="flex gap-4">
              {["morning", "noon", "evening"].map((time) => (
                <label key={time} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={doctor.availability[time] || false}
                    onChange={() => handleToggle(doctor._id, time)}
                  />
                  {time.charAt(0).toUpperCase() + time.slice(1)}
                </label>
              ))}
            </div>
            {/* Add date input */}
            <div className="mt-2">
              <label htmlFor={`date-${doctor._id}`} className="mr-2">
                Select Date:
              </label>
              <input
                type="date"
                id={`date-${doctor._id}`}
                value={doctor.date ? doctor.date.split("T")[0] : ""}
                onChange={(e) => handleDateChange(doctor._id, e.target.value)}
                className="border border-gray-300 rounded p-1"
              />
            </div>
            <button
              onClick={() => saveToServer(doctor._id)}
              className="mt-2 bg-blue-500 text-white px-2 py-1 rounded"
            >
              Save Changes
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPage;
