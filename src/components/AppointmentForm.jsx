// import React, { useState } from "react";

// const AppointmentForm = () => {
//   // State to handle form inputs
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     date: "",
//     time: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add form submission logic here (API call, email notification, etc.)
//     console.log("Appointment Request: ", formData);
//   };

//   return (
//     <section className="py-12 px-4 lg:px-16">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-3xl font-bold text-gray-900">
//             Book an Appointment
//           </h1>
//           <p className="text-gray-700 mt-4">
//             Schedule an appointment with our clinic using the form below.
//           </p>
//         </div>

//         <div className="bg-white shadow-lg p-8 rounded-lg max-w-lg mx-auto">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Name */}
//             <div>
//               <label
//                 htmlFor="name"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 name="name"
//                 id="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Your Name"
//                 required
//                 className="mt-1 w-full border border-gray-300 px-4 py-2 rounded"
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 id="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="youremail@example.com"
//                 required
//                 className="mt-1 w-full border border-gray-300 px-4 py-2 rounded"
//               />
//             </div>

//             {/* Phone Number */}
//             <div>
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 name="phone"
//                 id="phone"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 placeholder="999-999-9999"
//                 required
//                 className="mt-1 w-full border border-gray-300 px-4 py-2 rounded"
//               />
//             </div>

//             {/* Appointment Date */}
//             <div>
//               <label
//                 htmlFor="date"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Preferred Date
//               </label>
//               <input
//                 type="date"
//                 name="date"
//                 id="date"
//                 value={formData.date}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 w-full border border-gray-300 px-4 py-2 rounded"
//               />
//             </div>

//             {/* Appointment Time */}
//             <div>
//               <label
//                 htmlFor="time"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Preferred Time
//               </label>
//               <input
//                 type="time"
//                 name="time"
//                 id="time"
//                 value={formData.time}
//                 onChange={handleChange}
//                 required
//                 className="mt-1 w-full border border-gray-300 px-4 py-2 rounded"
//               />
//             </div>

//             {/* Message */}
//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-gray-700"
//               >
//                 Message (Optional)
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 value={formData.message}
//                 onChange={handleChange}
//                 placeholder="Any additional details..."
//                 className="mt-1 w-full border border-gray-300 px-4 py-2 rounded"
//                 rows="4"
//               />
//             </div>

//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-700"
//               >
//                 Book Appointment
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AppointmentForm;

import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const doctors = [
  { id: 1, name: "Dr. John Smith" },
  { id: 2, name: "Dr. Alice Brown" },
  { id: 3, name: "Dr. Michael Green" },
];

const specialties = [
  { id: 1, name: "Dermatology" },
  { id: 2, name: "Cardiology" },
  { id: 3, name: "Neurology" },
];

const AppointmentForm = () => {
  // Use React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    // Add more detailed data before sending
    const emailData = {
      to_name: "Care Clinic", // Change to the recipient's name, can also be dynamic
      from_name: data.name, // The sender's name from the form
      from_email: data.email, // The sender's email from the form
      from_phone: data.phone, // The sender's phone number from the form
      doctor: data.doctor,
      specialist: data.specialist,
      message: data.message, // The message content from the form
      appointment_date: data.date, // The date of the appointment from the form
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_hy331ih",
        "template_qwgt3y7",
        emailData,
        "qdLByONLKjJ2xatYT"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        toast.success("Email sent Successfully!");
        reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send appointment request. Please try again.");
      });
  };

  return (
    <section className="py-12 px-4 lg:px-16 bg-form bg-cover bg-center bg-no-repeat bg-fixed backdrop-blur-lg bg-opacity-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Book an Appointment
          </h1>
          <p className="text-gray-700 mt-4">
            Schedule an appointment with our clinic using the form below.
          </p>
        </div>

        <div className="bg-white shadow-lg p-8 rounded-lg max-w-lg mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                id="name"
                placeholder="Your Name"
                className={`mt-1 w-full border px-4 py-2 rounded ${
                  errors.name ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                id="email"
                placeholder="youremail@example.com"
                className={`mt-1 w-full border px-4 py-2 rounded ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]*$/,
                    message: "Please enter a valid phone number",
                  },
                })}
                id="phone"
                placeholder="999-999-9999"
                className={`mt-1 w-full border px-4 py-2 rounded ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone.message}</p>
              )}
            </div>

            {/* Doctor Name */}
            <div>
              <label
                htmlFor="doctor"
                className="block text-sm font-medium text-gray-700"
              >
                Doctor Name
              </label>
              <select
                {...register("doctor", { required: "Doctor is required" })}
                id="doctor"
                className={`mt-1 w-full border px-4 py-2 rounded ${
                  errors.doctor ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select a doctor</option>
                {doctors.map((doctor) => (
                  <option key={doctor.id} value={doctor.name}>
                    {doctor.name}
                  </option>
                ))}
              </select>
              {errors.doctor && (
                <p className="text-red-500 text-sm">{errors.doctor.message}</p>
              )}
            </div>

            {/* Specialist */}
            <div>
              <label
                htmlFor="specialist"
                className="block text-sm font-medium text-gray-700"
              >
                Specialist
              </label>
              <select
                {...register("specialist", {
                  required: "Specialist is required",
                })}
                id="specialist"
                className={`mt-1 w-full border px-4 py-2 rounded ${
                  errors.specialist ? "border-red-500" : "border-gray-300"
                }`}
              >
                <option value="">Select a specialty</option>
                {specialties.map((specialty) => (
                  <option key={specialty.id} value={specialty.name}>
                    {specialty.name}
                  </option>
                ))}
              </select>
              {errors.specialist && (
                <p className="text-red-500 text-sm">
                  {errors.specialist.message}
                </p>
              )}
            </div>

            {/* Appointment Date */}
            <div>
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
                Preferred Date
              </label>
              <input
                type="date"
                {...register("date", { required: "Date is required" })}
                id="date"
                className={`mt-1 w-full border px-4 py-2 rounded ${
                  errors.date ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.date && (
                <p className="text-red-500 text-sm">{errors.date.message}</p>
              )}
            </div>

            {/* Appointment Time */}
            <div>
              <label
                htmlFor="time"
                className="block text-sm font-medium text-gray-700"
              >
                Preferred Time
              </label>
              <input
                type="time"
                {...register("time", { required: "Time is required" })}
                id="time"
                className={`mt-1 w-full border px-4 py-2 rounded ${
                  errors.time ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.time && (
                <p className="text-red-500 text-sm">{errors.time.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message (Optional)
              </label>
              <textarea
                {...register("message")}
                id="message"
                placeholder="Any additional details..."
                className="mt-1 w-full border px-4 py-2 rounded"
                rows="4"
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-700"
              >
                Book Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
