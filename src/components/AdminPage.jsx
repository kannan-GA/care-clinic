//

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
                ...doctor.availability,
                [time]: !doctor.availability[time],
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

  // Save all updated doctors data to the server
  const saveAllToServer = async () => {
    try {
      for (const doctor of doctors) {
        await fetch(`${API_URL}/${doctor._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(doctor),
        });
      }
      alert("All changes saved successfully!");
    } catch (error) {
      console.error("Error saving doctors data:", error);
      alert("Error saving changes.");
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
              {["morning", "evening"].map((time) => (
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
          </li>
        ))}
      </ul>
      {/* Single Save Changes button */}
      <button
        onClick={saveAllToServer}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Save Changes
      </button>
    </div>
  );
}

export default AdminPage;
