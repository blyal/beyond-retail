import { useEffect, useState, useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { createPortal } from "react-dom";
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

  // Ref to capture modal container
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsMounted(true);
      setTimeout(() => setIsVisible(true), 10);
    } else {
      document.body.style.overflow = "auto";
      setIsVisible(false);
      setTimeout(() => {
        setIsMounted(false);
        setFormSubmitted(false); // Reset form state
      }, 500);
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Handle form submission
  const handleFormSuccess = () => {
    setFormSubmitted(true); // Show confirmation screen after form submission
  };

  if (!isMounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div
        className={`transition-opacity duration-500 ease-out ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          ref={modalRef}
          className="relative rounded-xl shadow-lg transform transition-all duration-500 ease-out bg-cover bg-center max-h-screen w-full h-full md:w-auto md:h-auto md:max-w-lg overflow-y-auto flex flex-col"
          style={{
            backgroundImage: 'url("/inbox.jpg")',
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
            height: "600px",
          }}
        >
          <div
            className="relative z-10 p-8 overflow-auto h-full flex flex-col flex-grow"
            style={{
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
                <div className="flex justify-center mt-6">
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
              {!formSubmitted && (
                <div className="flex flex-col flex-grow justify-center">
                  <div
                    style={{
                      display: activeTab === "contact" ? "block" : "none",
                    }}
                  >
                    <ContactForm onSuccess={handleFormSuccess} />
                  </div>
                  <div
                    style={{
                      display: activeTab === "booking" ? "block" : "none",
                    }}
                  >
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-lg">Booking system coming soon...</p>
                    </div>
                  </div>
                </div>
              )}

              {formSubmitted && (
                <div className="h-full flex flex-col justify-center items-center">
                  <h2 className="text-2xl font-semibold">Thank you!</h2>
                  <p>Your message has been successfully sent.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
