"use client";

import React from "react";
import { ModalProvider, useModal } from "../../contexts/ContactModalContext";

const CTAAnchor: React.FC = () => {
  return (
    <ModalProvider>
      <ContextualCTAAnchor />
    </ModalProvider>
  );
};

const ContextualCTAAnchor: React.FC = () => {
  const { openModal } = useModal();
  return (
    <a
      className="text-base hover:text-gray-400 cursor-pointer"
      onClick={openModal}
    >
      Contact
    </a>
  );
};

export default CTAAnchor;
