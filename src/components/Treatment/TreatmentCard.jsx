// // TreatmentCard.js
// import React from "react";
// import { useNavigate } from "react-router-dom";

// const TreatmentCard = ({ treatment }) => {
//   const navigate = useNavigate();

//   const handleBookClick = () => {
//     navigate("/appointment"); // Navigate to the confirmation page
//   };

//   return (
//     <div className="bg-white shadow-md rounded-md overflow-hidden">
//       <img
//         src={treatment.image}
//         alt={treatment.title}
//         className="w-full h-48 object-cover"
//       />
//       <div className="p-4">
//         <h3 className="text-lg font-bold text-gray-800">{treatment.title}</h3>
//         <p className="text-sm text-gray-600 mt-2">{treatment.description}</p>
//         <div className="mt-4 flex justify-between items-center">
//           <button className="text-blue-500 text-sm hover:underline">
//             KNOW MORE
//           </button>
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded-md"
//             onClick={handleBookClick}
//           >
//             BOOK APPOINTMENT
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TreatmentCard;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Modal, { ModalHeader, ModalBody, ModalFooter } from "../Home/Modal"; // Import your common modal components

// const TreatmentCard = ({ treatment }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const navigate = useNavigate();

//   const handleBookClick = () => {
//     navigate("/appointment"); // Navigate to appointment page
//   };

//   const handleKnowMoreClick = () => {
//     setIsModalOpen(true); // Open modal
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false); // Close modal
//   };

//   return (
//     <div className="bg-white shadow-md rounded-md overflow-hidden">
//       <img
//         src={treatment.image}
//         alt={treatment.title}
//         className="w-full h-48 object-cover"
//       />

//       <div className="p-4">
//         <h3 className="text-lg font-bold text-gray-800">{treatment.title}</h3>
//         <p className="text-sm text-gray-600 mt-2">{treatment.description}</p>
//         <div className="mt-4 flex justify-between items-center space-x-4">
//           <button
//             onClick={handleKnowMoreClick}
//             className="text-blue-500 text-sm hover:underline"
//           >
//             KNOW MORE
//           </button>
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
//             onClick={handleBookClick}
//           >
//             BOOK APPOINTMENT
//           </button>
//         </div>
//       </div>

//       {/* Use the common Modal component */}
//       <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
//         <ModalHeader title={treatment.title} onClose={handleCloseModal} />
//         <ModalBody>
//           <p>{treatment.briefDescription}</p> {/* Display brief description */}
//         </ModalBody>
//         <ModalFooter>
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 "
//             onClick={handleBookClick}
//           >
//             Book Appointment
//           </button>
//         </ModalFooter>
//       </Modal>
//     </div>
//   );
// };

// export default TreatmentCard;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal, { ModalHeader, ModalBody, ModalFooter } from "../Home/Modal"; // Import your common modal components

const TreatmentCard = ({ treatment }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleBookClick = () => {
    navigate("/appointment"); // Navigate to appointment page
  };

  const handleKnowMoreClick = () => {
    setIsModalOpen(true); // Open modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className="bg-gray-100 shadow-md rounded-md overflow-hidden flex flex-col h-full p-2 rounded-lg">
      <img
        src={treatment.image}
        alt={treatment.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800">{treatment.title}</h3>
        <p className="text-sm text-gray-600 mt-2 flex-grow">
          {treatment.description}
        </p>

        <div className="mt-4 flex justify-between items-center gap-2">
          <button
            onClick={handleKnowMoreClick}
            className="text-blue-500 text-xs hover:underline sm:text-sm"
          >
            KNOW MORE
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md text-xs sm:text-sm"
            onClick={handleBookClick}
          >
            BOOK APPOINTMENT
          </button>
        </div>
      </div>

      {/* Use the common Modal component */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalHeader title={treatment.title} onClose={handleCloseModal} />
        <ModalBody>
          <p>{treatment.briefDescription}</p> {/* Display brief description */}
        </ModalBody>
        <ModalFooter>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            onClick={handleBookClick}
          >
            Book Appointment
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default TreatmentCard;
