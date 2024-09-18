"use client";

import { useEffect, useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import ContactForm from "@/components/forms/ContactForm";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("contact");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [modalHeight, setModalHeight] = useState<string | null>(null);

  // Ref to capture modal container
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Disable body scroll when modal is open
      document.body.style.overflow = "hidden";
      setIsMounted(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      // Enable body scroll when modal is closed
      document.body.style.overflow = "auto";
      setIsVisible(false);
      setTimeout(() => setIsMounted(false), 500);
      setFormSubmitted(false); // Reset form on modal close
      setModalHeight(null); // Reset modal height
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Handle form submission and capture modal height
  const handleFormSuccess = () => {
    if (modalRef.current) {
      setModalHeight(`${modalRef.current.offsetHeight}px`); // Capture modal height before form is replaced
    }
    setFormSubmitted(true); // Show confirmation screen after form submission
  };

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ease-out backdrop-blur-sm ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Modal Background Image with Overlay */}
      <div
        ref={modalRef}
        className="relative rounded-xl shadow-lg transform transition-all duration-500 ease-out bg-cover bg-center max-h-screen w-full h-full md:w-auto md:h-auto md:max-w-lg overflow-y-auto flex flex-col"
        style={{
          backgroundImage: 'url("/inbox.jpg")',
          boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
          minHeight: modalHeight || "auto", // Maintain height after form submission
        }}
      >
        {/* Wrapper with padding and overlay */}
        <div
          className="relative z-10 p-8 overflow-auto h-full flex flex-col flex-grow"
          style={{
            minHeight: modalHeight || "auto", // Apply height to overlay too
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Overlay background
            borderRadius: "inherit", // Match the border-radius of the modal
          }}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors text-2xl hover:scale-110 focus:outline-none"
            onClick={onClose}
            aria-label="Close"
          >
            <FaTimes className="w-6 h-6" />
          </button>

          {/* Modal Content with Tabs */}
          <div className="relative z-10 text-white text-center h-full flex flex-col flex-grow align-center">
            {!formSubmitted && (
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
            )}

            {/* Tab Content */}
            <div className="h-full flex flex-col flex-grow justify-center">
              {formSubmitted ? (
                <div className="flex flex-col justify-center items-center">
                  <h2 className="text-2xl font-semibold">Thank you!</h2>
                  <p>Your message has been successfully sent.</p>
                </div>
              ) : (
                <>
                  {activeTab === "contact" && (
                    <ContactForm onSuccess={handleFormSuccess} />
                  )}
                  {/* {activeTab === "booking" && <BookingSystem />} */}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
