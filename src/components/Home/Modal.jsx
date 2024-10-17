import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

// Modal Component
const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return isOpen
    ? ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={modalRef}
            className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg"
          >
            {children}
          </div>
        </div>,
        document.body
      )
    : null;
};

// ModalHeader Component
export const ModalHeader = ({ title, onClose }) => (
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-lg font-semibold">{title}</h2>
    <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
      ✕
    </button>
  </div>
);

// ModalBody Component
export const ModalBody = ({ children }) => (
  <div className="mb-4">{children}</div>
);

// ModalFooter Component
export const ModalFooter = ({ children }) => (
  <div className="mt-4">{children}</div>
);

export default Modal;
