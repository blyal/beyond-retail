"use client";

import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import ContactForm from "@/components/forms/ContactForm";
// import BookingSystem from "@/components/booking/BookingSystem"; // Placeholder for booking system

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
      setTimeout(() => setIsMounted(false), 500);
    }
  }, [isOpen]);

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ease-out backdrop-blur-sm ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Modal Background Image with Overlay */}
      <div
        className="relative p-8 rounded-xl shadow-lg transform transition-all duration-500 ease-out bg-cover bg-center"
        style={{
          backgroundImage: 'url("/inbox.jpg")',
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
          maxWidth: "500px",
          width: "90%",
        }}
      >
        {/* Overlay on top of the image */}
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

        <button
          className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors text-2xl hover:scale-110 focus:outline-none z-10"
          onClick={onClose}
          aria-label="Close"
        >
          <FaTimes className="w-6 h-6" />
        </button>

        {/* Modal Content with Tabs */}
        <div className="relative z-10 text-white text-center">
          {/* Tab Buttons */}
          <div className="flex justify-center mb-6">
            <button
              className={`px-4 py-2 text-lg font-semibold ${
                activeTab === "contact" ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setActiveTab("contact")}
            >
              Send a Message
            </button>
            <button
              className={`px-4 py-2 text-lg font-semibold ${
                activeTab === "booking" ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setActiveTab("booking")}
            >
              Book a Call
            </button>
          </div>

          {/* Tab Content */}
          <div>
            {activeTab === "contact" && <ContactForm />}
            {/* {activeTab === "booking" && <BookingSystem />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
