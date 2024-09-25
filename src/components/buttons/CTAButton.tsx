"use client";

import React from "react";
import Button from "./Button";
import { ModalProvider, useModal } from "../../contexts/ModalContext";

export interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ children, className = "" }) => {
  return (
    <ModalProvider>
      <ContextualCTAButton className={className}>
        {children}
      </ContextualCTAButton>
    </ModalProvider>
  );
};

const ContextualCTAButton: React.FC<CTAButtonProps> = ({
  children,
  className = "",
}) => {
  const { openModal } = useModal();
  return (
    <Button className={className} onClick={openModal}>
      {children}
    </Button>
  );
};

export default CTAButton;
