"use client";

import { useModal } from "@/contexts/ModalContext";
import Modal from "./Modal";
import ContactForm from "@/components/forms/ContactForm";
import { useState } from "react";

export default function ContactModal() {
  const [activeTab, setActiveTab] = useState("contact");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { isModalOpen, closeModal } = useModal();

  const handleFormSuccess = () => {
    setFormSubmitted(true); // Show confirmation screen after form submission
  };
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      resetContents={() => setFormSubmitted(false)}
    >
      <div className="relative z-10 text-white text-center h-full flex flex-col flex-grow align-center">
        {!formSubmitted && (
          <div className="flex justify-center mt-4">
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
              <div className="mt-6">
                <a
                  className="text-white"
                  href="mailto:contact@beyonddevelopment.co"
                >
                  📤{" "}
                  <span className="underline hover:text-gray-200">
                    contact@beyonddevelopment.co
                  </span>
                </a>
              </div>
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
    </Modal>
  );
}
