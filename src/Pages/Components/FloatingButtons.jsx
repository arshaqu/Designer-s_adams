import React from "react";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp Button (Left Side) */}
      <a
        href="https://wa.me/918301955233" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className=" fixed right-6 bottom-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={40} />
      </a>

      {/* Call Button (Right Side) */}
      <a
        href="tel:8301955233" // Replace with your phone number
        className="fixed left-6  bottom-6 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition duration-300"
      >
        <FaPhone size={40} />
      </a>
    </>
  );
};

export default FloatingButtons;
