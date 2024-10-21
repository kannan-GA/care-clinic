// import React, { useState } from "react";
// import Modal, { ModalHeader, ModalBody } from "./Modal";
// import ShareFeedbackForm from "./ShareFeedbackForm";
// import { HiArrowNarrowLeft, HiArrowRight } from "react-icons/hi";

// // StarRating Component
// const StarRating = ({ rating }) => (
//   <div className="flex space-x-1">
//     {Array.from({ length: 5 }).map((_, index) => (
//       <svg
//         key={index}
//         className={`w-5 h-5 ${
//           index < rating ? "text-yellow-500" : "text-gray-300"
//         }`}
//         fill="currentColor"
//         viewBox="0 0 20 20"
//       >
//         <path d="M9.049 3.3a1 1 0 011.902 0l1.283 3.955a1 1 0 00.95.69h4.184c.857 0 1.214 1.093.588 1.582l-3.39 2.464a1 1 0 00-.364 1.118l1.283 3.955c.27.834-.706 1.516-1.451 1.012L10 14.347l-3.39 2.464c-.746.504-1.721-.178-1.451-1.012l1.283-3.955a1 1 0 00-.364-1.118L2.69 9.526c-.626-.489-.269-1.582.588-1.582h4.184a1 1 0 00.95-.69L9.049 3.3z" />
//       </svg>
//     ))}
//   </div>
// );

// const testimonials = [
//   {
//     name: "Apple",
//     review: `From the moment I walked in, I felt comfortable and well cared for. The staff at Care clinic was incredibly kind, and Doctor took the time to listen to my concerns and explain everything in detail. I’ve never felt rushed during my appointments, and they genuinely care about my health. I highly recommend this clinic to anyone looking for quality healthcare.`,
//     rating: 5,
//   },
//   {
//     name: "Brown",
//     review: `I've been to many clinics over the years, but Care Multispeciality Clinic stands out. The level of attention and care I received was exceptional. The entire team made me feel at ease, and the follow-up after my treatment was unlike anything I’ve experienced elsewhere. They made sure I understood my recovery plan and checked in on me regularly.`,
//     rating: 3,
//   },
//   {
//     name: "Charlie",
//     review: `The clinic offers amazing care and a friendly environment. Everyone, from the front desk to the doctors, is welcoming and attentive. I’m really happy with the services I received.`,
//     rating: 4,
//   },
//   {
//     name: "Delta",
//     review: `Care Clinic is by far the best medical care I’ve received. The doctors and staff truly care about their patients, and it shows.`,
//     rating: 5,
//   },
//   {
//     name: "Echo",
//     review: `I’ve never felt so comfortable and reassured in a clinic before. The doctors are so professional and compassionate.`,
//     rating: 4,
//   },
// ];

// const TestimonialCarousel = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [startIndex, setStartIndex] = useState(0);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const nextTestimonials = () => {
//     if (startIndex + 1 < testimonials.length) {
//       setStartIndex(startIndex + 1);
//     }
//   };

//   const prevTestimonials = () => {
//     if (startIndex - 1 >= 0) {
//       setStartIndex(startIndex - 1);
//     }
//   };

//   return (
//     <div className="relative bg-yellow-300 p-8 rounded-lg text-center  mx-auto">
//       <h2 className="text-2xl font-bold mb-4">Testimonial</h2>

//       {/* Testimonials Section */}
//       <div className="flex items-center justify-between gap-3">
//         <button
//           onClick={prevTestimonials}
//           className="bg-blue-500 text-white px-3 py-2 rounded-full font-semibold hover:bg-blue-700"
//           disabled={startIndex === 0} // Disable if at the first testimonial
//         >
//           <HiArrowNarrowLeft size={24} />
//         </button>

//         <div className="flex-grow flex justify-center">
//           <div className="bg-white p-6 shadow-lg rounded-lg h-64 flex flex-col justify-between overflow-hidden">
//             <div>
//               <div className="flex items-center justify-between mb-4">
//                 <div className="font-bold text-lg">
//                   {testimonials[startIndex].name}
//                 </div>
//                 <StarRating rating={testimonials[startIndex].rating} />
//               </div>
//               <p className="text-sm text-gray-700 overflow-y-auto max-h-32">
//                 {testimonials[startIndex].review}
//               </p>
//             </div>
//           </div>
//         </div>

//         <button
//           onClick={nextTestimonials}
//           className="bg-blue-500 text-white px-3 py-2 rounded-full font-semibold hover:bg-blue-700"
//           disabled={startIndex === testimonials.length - 1} // Disable if at the last testimonial
//         >
//           <HiArrowRight size={24} />
//         </button>
//       </div>

//       {/* Feedback Button */}
//       <button
//         onClick={openModal}
//         className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 mt-6"
//       >
//         Share Your Feedback
//       </button>

//       {/* Modal */}
//       <Modal isOpen={isModalOpen} onClose={closeModal}>
//         <ModalHeader title="Share Your Feedback" onClose={closeModal} />
//         <ModalBody>
//           <ShareFeedbackForm onClose={closeModal} />
//         </ModalBody>
//       </Modal>
//     </div>
//   );
// };

// export default TestimonialCarousel;

import React, { useState, useEffect } from "react";
import Modal, { ModalHeader, ModalBody } from "./Modal";
import ShareFeedbackForm from "./ShareFeedbackForm";

// StarRating Component
const StarRating = ({ rating }) => (
  <div className="flex space-x-1">
    {Array.from({ length: 5 }).map((_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < rating ? "text-yellow-500" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 3.3a1 1 0 011.902 0l1.283 3.955a1 1 0 00.95.69h4.184c.857 0 1.214 1.093.588 1.582l-3.39 2.464a1 1 0 00-.364 1.118l1.283 3.955c.27.834-.706 1.516-1.451 1.012L10 14.347l-3.39 2.464c-.746.504-1.721-.178-1.451-1.012l1.283-3.955a1 1 0 00-.364-1.118L2.69 9.526c-.626-.489-.269-1.582.588-1.582h4.184a1 1 0 00.95-.69L9.049 3.3z" />
      </svg>
    ))}
  </div>
);

const testimonials = [
  {
    name: "Apple",
    review: `From the moment I walked in, I felt comfortable and well cared for. The staff at Care clinic was incredibly kind, and Doctor took the time to listen to my concerns and explain everything in detail. I’ve never felt rushed during my appointments, and they genuinely care about my health. I highly recommend this clinic to anyone looking for quality healthcare.`,
    rating: 5,
  },
  {
    name: "Brown",
    review: `I've been to many clinics over the years, but Care Multispeciality Clinic stands out. The level of attention and care I received was exceptional. The entire team made me feel at ease, and the follow-up after my treatment was unlike anything I’ve experienced elsewhere. They made sure I understood my recovery plan and checked in on me regularly.`,
    rating: 3,
  },
  {
    name: "Charlie",
    review: `The clinic offers amazing care and a friendly environment. Everyone, from the front desk to the doctors, is welcoming and attentive. I’m really happy with the services I received.`,
    rating: 4,
  },
  {
    name: "Delta",
    review: `Care Clinic is by far the best medical care I’ve received. The doctors and staff truly care about their patients, and it shows.`,
    rating: 5,
  },
  {
    name: "Echo",
    review: `I’ve never felt so comfortable and reassured in a clinic before. The doctors are so professional and compassionate.`,
    rating: 4,
  },
];

const TestimonialCarousel = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    // <div className="relative bg-yellow-300 p-8 rounded-lg  mx-auto">
    //   <h2 className="text-2xl font-bold mb-4 text-center">Testimonial</h2>

    //   {/* Testimonial Content */}
    //   <div className="flex justify-center w-1/2">
    //     <div className="bg-white p-6 shadow-lg rounded-lg h-64 flex flex-col justify-between items-center overflow-hidden w-full">
    //       <div>
    //         <div className="flex items-center justify-between mb-4">
    //           <div className="font-bold text-lg">
    //             {testimonials[startIndex].name}
    //           </div>
    //           <StarRating rating={testimonials[startIndex].rating} />
    //         </div>
    //         <p className="text-sm text-gray-700 overflow-y-auto max-h-32">
    //           {testimonials[startIndex].review}
    //         </p>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Dots for Navigation */}
    //   <div className="flex justify-center space-x-2 mt-4">
    //     {testimonials.map((_, index) => (
    //       <button
    //         key={index}
    //         className={`w-3 h-3 rounded-full ${
    //           index === startIndex ? "bg-blue-500" : "bg-gray-300"
    //         }`}
    //         onClick={() => setStartIndex(index)}
    //       />
    //     ))}
    //   </div>

    //   {/* Feedback Button */}
    //   <button
    //     onClick={openModal}
    //     className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 mt-6"
    //   >
    //     Share Your Feedback
    //   </button>

    //   {/* Modal */}
    //   <Modal isOpen={isModalOpen} onClose={closeModal}>
    //     <ModalHeader title="Share Your Feedback" onClose={closeModal} />
    //     <ModalBody>
    //       <ShareFeedbackForm onClose={closeModal} />
    //     </ModalBody>
    //   </Modal>
    // </div>

    <div className="relative bg-yellow-300 p-8 rounded-lg mx-auto min-h-screen flex flex-col items-center justify-center ">
      <h2 className="text-2xl font-bold mb-4 text-center">Testimonial</h2>

      {/* Testimonial Content */}
      <div className="flex justify-center w-full max-w-4xl  ">
        <div className="bg-white p-6 shadow-lg rounded-lg h-64 flex flex-col justify-between items-center overflow-hidden w-full">
          <div>
            <div className="flex items-center justify-between mb-4 w-full gap-2">
              <div className="font-bold text-lg">
                {testimonials[startIndex].name}
              </div>
              <StarRating rating={testimonials[startIndex].rating} />
            </div>
            <p className="text-sm text-gray-700 overflow-y-auto max-h-32">
              {testimonials[startIndex].review}
            </p>
          </div>
        </div>
      </div>

      {/* Dots for Navigation */}
      <div className="flex justify-center space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === startIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
            onClick={() => setStartIndex(index)}
          />
        ))}
      </div>

      {/* Feedback Button */}
      <button
        onClick={openModal}
        className="bg-blue-500 text-xs md:text-base text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 mt-6"
      >
        Share Your Feedback
      </button>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader title="Share Your Feedback" onClose={closeModal} />
        <ModalBody>
          <ShareFeedbackForm onClose={closeModal} />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default TestimonialCarousel;
