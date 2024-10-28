"use client";

import { useModal } from "@/contexts/ContactModalContext";
import Modal from "./Modal";
import MessageForm from "@/components/forms/MessageForm";
import { useEffect, useState } from "react";
import BookingForm from "../forms/BookingForm";
import styles from "./ContactModal.module.scss";

export default function ContactModal() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("message");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { isModalOpen, closeModal } = useModal();

  // Preload the background image
  useEffect(() => {
    const img = new Image();
    img.src = "/inbox.webp";
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  const handleFormSuccess = () => {
    setFormSubmitted(true); // Show confirmation screen after form submission
  };

  if (!isImageLoaded) return null;

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={closeModal}
      heightInPx={700}
      backgroundImgClassname={styles["inbox-background"]}
      resetContents={() => setFormSubmitted(false)}
    >
      <div className="relative z-10 text-white text-center h-full flex flex-col flex-grow">
        {!formSubmitted && (
          <div className="flex justify-center mt-4">
            <button
              className={`px-4 py-2 text-lg font-semibold ${
                activeTab === "message" ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setActiveTab("message")}
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
          <div className="flex flex-col justify-center">
            <div
              style={{
                display: activeTab === "message" ? "block" : "none",
              }}
            >
              <MessageForm onSuccess={handleFormSuccess} />
              <div className="mt-6">
                <a
                  className="text-white"
                  href="mailto:contact@beyonddevelopment.co"
                >
                  📤
                  <span className="underline hover:text-gray-200 ml-3">
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
              <BookingForm onSuccess={handleFormSuccess} />
            </div>
          </div>
        )}

        {formSubmitted && (
          <div className="h-full flex flex-col justify-center items-center">
            {activeTab === "message" && (
              <>
                <h2 className="text-2xl font-semibold">Thank you!</h2>
                <p>Your message has been successfully sent.</p>
              </>
            )}
            {activeTab === "booking" && (
              <>
                <h2 className="text-2xl font-semibold">
                  Call Request Received
                </h2>
                <p>You will receive email confirmation within 24 hours.</p>
              </>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
}
