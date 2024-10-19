"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./forms.module.scss";
import toast from "react-hot-toast";

const MessageForm = ({ onSuccess }: { onSuccess: () => void }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    emailAddress: "",
    message: "",
    botField: "", // Honeypot field
  });
  const [errors, setErrors] = useState({
    name: false,
    emailAddress: false,
  });
  const [formEnabled, setFormEnabled] = useState(false); // JavaScript validation
  const [startTime, setStartTime] = useState<number>(0); // Time-based check
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Enable form submission after page load
  useState(() => {
    setFormEnabled(true); // Enable form on page load
    setStartTime(Date.now()); // Record form load time
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const validateEmail = (emailAddress: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailAddress);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, emailAddress, botField } = formData;

    // Check honeypot field (should be empty for real users)
    if (botField) {
      alert("Bot detected!");
      return;
    }

    // Check form submission time (min 3 seconds)
    const submissionTime = Date.now() - startTime;
    if (submissionTime < 3000) {
      alert("Submission too fast. Bot detected.");
      return;
    }

    const isNameValid = name.trim() !== "";
    const isEmailValid = validateEmail(emailAddress);

    if (!isNameValid || !isEmailValid) {
      setErrors({
        name: !isNameValid,
        emailAddress: !isEmailValid,
      });
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_MESSAGE_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setIsSubmitting(false);
          onSuccess();
        },
        (err) => {
          setIsSubmitting(false);
          toast.error("Something went wrong. Please try again.");
          console.error("Error...", err);
        }
      );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Honeypot field (hidden from users) */}
      <div style={{ display: "none" }}>
        <input
          type="text"
          name="botField"
          value={formData.botField}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="name" className="block text-m text-white text-left">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`mt-1 block w-full border ${
            errors.name
              ? "border-red-500 ring-1 ring-red-500"
              : "border-gray-300"
          } rounded-md p-2 text-gray-900 bg-white`}
          required
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-m text-white text-left">
          Company
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900 bg-white"
        />
      </div>
      <div>
        <label
          htmlFor="emailAddress"
          className="block text-m text-white text-left"
        >
          Email Address
        </label>
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          value={formData.emailAddress}
          onChange={handleChange}
          className={`mt-1 block w-full border ${
            errors.emailAddress
              ? "border-red-500 ring-1 ring-red-500"
              : "border-gray-300"
          } rounded-md p-2 text-gray-900 bg-white`}
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-m text-white text-left">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-gray-900 bg-white"
          rows={4}
          required
        />
      </div>
      <button
        type="submit"
        className={`relative px-8 py-3 rounded-full font-semibold mb-8 
          ${
            isSubmitting
              ? "bg-blue-700 text-white"
              : "bg-white text-green-600 hover:bg-blue-500 hover:text-white"
          }`}
        disabled={!formEnabled || isSubmitting}
      >
        <span
          className={`transition-opacity ${
            isSubmitting ? "opacity-0" : "opacity-100"
          }`}
        >
          Send
        </span>
        {isSubmitting && (
          <div className="absolute inset-0 flex justify-center items-center">
            <div className={styles.loader} />
          </div>
        )}
      </button>
    </form>
  );
};

export default MessageForm;
