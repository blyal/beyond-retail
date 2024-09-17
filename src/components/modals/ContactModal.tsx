"use client";

import { useModal } from "@/contexts/ModalContext";
import Modal from "./Modal";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactModal() {
  const { isModalOpen, closeModal } = useModal();
  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
      <ContactForm />
    </Modal>
  );
}
