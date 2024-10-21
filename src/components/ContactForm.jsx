// import React from "react";

// const ContactForm = () => {
//   return (
//     <section className=" py-12 px-4 lg:px-16">
//       <div className="max-w-7xl mx-auto text-center mb-8">
//         <h1 className="text-3xl font-bold text-gray-900">CONTACT US</h1>
//         <p className="text-gray-50 mt-4">
//           There are many variations of passages of Lorem Ipsum available, but
//           the majority have suffered alteration in some form.
//         </p>
//       </div>

//       <div className="flex flex-col lg:flex-row justify-between items-center">
//         <div className="bg-white shadow-lg p-8 rounded-lg max-w-lg w-full mx-auto lg:mx-0">
//           <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">
//             Get In Touch With Us
//           </h2>
//           <form className="space-y-4">
//             <div className="flex space-x-4">
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="w-full border border-gray-300 px-4 py-2 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="w-full border border-gray-300 px-4 py-2 rounded"
//               />
//             </div>
//             <div className="flex space-x-4">
//               <input
//                 type="email"
//                 placeholder="Email id"
//                 className="w-full border border-gray-300 px-4 py-2 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 className="w-full border border-gray-300 px-4 py-2 rounded"
//               />
//             </div>
//             <textarea
//               placeholder="Your Enquiry ....."
//               className="w-full border border-gray-300 px-4 py-2 rounded"
//             ></textarea>
//             <button className="bg-blue-900 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-700">
//               SUBMIT
//             </button>
//           </form>
//         </div>

//         <div className="hidden lg:block lg:w-1/2">
//           <img
//             src="/public/assets/contact-us.jpg"
//             alt="Background"
//             className="rounded-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;
// import React from "react";

// const ContactForm = () => {
//   return (
//     <section className="relative py-12 px-4 lg:px-16 bg-bg-image bg-cover bg-center space-y-20">
//       <div className="max-w-7xl mx-auto text-center mb-8">
//         <h1 className="text-3xl font-bold text-white">CONTACT US</h1>
//         <p className="text-gray-100 mt-4 text-m ">
//           There are many variations of passages of Lorem Ipsum available, but
//           the majority have suffered alteration in some form, by injected
//           humour, or randomised words which don't look even slightly believable.
//         </p>
//       </div>

//       <div className="flex flex-col lg:flex-row justify-between items-center relative">
//         {/* Transparent Form */}
//         <div className="bg-white bg-opacity-70 shadow-lg p-8 rounded-lg max-w-lg w-full mx-auto lg:mx-0">
//           <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">
//             Get In Touch With Us
//           </h2>
//           <form className="space-y-4">
//             <div className="flex space-x-4">
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="w-full border border-gray-300 px-4 py-2 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="w-full border border-gray-300 px-4 py-2 rounded"
//               />
//             </div>
//             <div className="flex space-x-4">
//               <input
//                 type="email"
//                 placeholder="Email id"
//                 className="w-full border border-gray-300 px-4 py-2 rounded"
//               />
//               <input
//                 type="text"
//                 placeholder="Phone Number"
//                 className="w-full border border-gray-300 px-4 py-2 rounded"
//               />
//             </div>
//             <textarea
//               placeholder="Your Enquiry ....."
//               className="w-full border border-gray-300 px-4 py-2 rounded"
//             ></textarea>
//             <button className="bg-blue-900 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-700">
//               SUBMIT
//             </button>
//           </form>
//         </div>

//         {/* Optional Image */}
//         <div className="hidden lg:block lg:w-1/2 absolute -right-40 -top-10">
//           <img
//             src="/public/assets/contact.png"
//             alt="Background"
//             className="rounded-lg w-[60%] h-[80%] "
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;

import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const ContactForm = () => {
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
      message: data.message, // The message content from the form
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
    <section
      className="relative py-12 px-4 lg:px-16 bg-bg-image bg-cover bg-fixed bg-center space-y-20"
    >
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h1 className="text-3xl font-bold text-white">CONTACT US</h1>
        <p className="text-gray-100 mt-4 text-m ">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-center relative">
        {/* Transparent Form */}
        <div className="bg-white bg-opacity-70 shadow-lg p-8 rounded-lg max-w-lg w-full mx-auto lg:mx-0">
          <h2 className="text-2xl font-bold text-blue-900 text-center mb-6">
            Get In Touch With Us
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex space-x-4">
              <div className="flex flex-col">
                <input
                  {...register("firstName", { required: true })}
                  type="text"
                  placeholder="First Name"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                {errors.firstName && (
                  <span
                    className="text-red-500"
                    style={{ minHeight: "1.25rem" }}
                  >
                    First Name is required
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  {...register("lastName", { required: true })}
                  type="text"
                  placeholder="Last Name"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                {errors.lastName && (
                  <span
                    className="text-red-500"
                    style={{ minHeight: "1.25rem" }}
                  >
                    Last Name is required
                  </span>
                )}
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="flex flex-col">
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Email id"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                {errors.email && (
                  <span
                    className="text-red-500"
                    style={{ minHeight: "1.25rem" }}
                  >
                    Email is required
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  {...register("phone", { required: true })}
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border border-gray-300 px-4 py-2 rounded"
                />
                {errors.phone && (
                  <span
                    className="text-red-500"
                    style={{ minHeight: "1.25rem" }}
                  >
                    Phone Number is required
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <textarea
                {...register("message", { required: true })}
                placeholder="Your Enquiry ....."
                className="w-full border border-gray-300 px-4 py-2 rounded"
              ></textarea>
              {errors.message && (
                <span
                  className="text-red-500 "
                  style={{ minHeight: "1.25rem" }}
                >
                  Message is required
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-blue-900 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-700"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Optional Image */}
        <div className="hidden lg:block lg:w-1/2 absolute -right-40 -top-10">
          <img
            src="assets/contact.png"
            alt="Background"
            className="rounded-lg w-[60%] h-[80%] "
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
