"use client";

import ContactModal from "@/components/modals/ContactModal";
import { createContext, useContext, useState, ReactNode } from "react";

interface ContactModalContextType {
  openModal: () => void;
  closeModal: () => void;
  isModalOpen: boolean;
}

const ContactModalContext = createContext<ContactModalContextType | undefined>(
  undefined
);

export function useModal() {
  const context = useContext(ContactModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ContactModalContext.Provider
      value={{ isModalOpen, openModal, closeModal }}
    >
      {children}
      <ContactModal />
    </ContactModalContext.Provider>
  );
};
