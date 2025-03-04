import { useEffect, useState, useRef, ReactNode } from "react";
import { FaTimes } from "react-icons/fa";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  heightInPx: number;
  isWiderModal?: boolean;
  backgroundImgClassname?: string;
  hasDarkXArrow?: boolean;
  hasInteriorOverlay?: boolean;
  resetContents?: () => void;
  children: ReactNode;
}

const Modal = ({
  isOpen,
  onClose,
  heightInPx,
  isWiderModal = false,
  backgroundImgClassname = "bg-cyan-700",
  hasInteriorOverlay = true,
  hasDarkXArrow = false,
  resetContents = () => {},
  children,
}: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
        resetContents(); // Reset form state
      }, 500);
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen, resetContents]);

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
          className={`relative rounded-xl shadow-lg transform transition-all duration-500 ease-out bg-cover bg-center max-h-screen w-full h-full md:w-auto md:h-auto ${
            isWiderModal ? "md:max-w-4xl" : "md:max-w-lg"
          } overflow-y-auto flex flex-col ${backgroundImgClassname}`}
          style={{
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.15)",
            height: `${heightInPx}px`,
          }}
        >
          <div
            className="relative z-10 p-8 overflow-auto h-full flex flex-col flex-grow"
            style={{
              backgroundColor: hasInteriorOverlay
                ? "rgba(0, 0, 0, 0.5)"
                : undefined, // Overlay background
              borderRadius: "inherit",
            }}
          >
            <button
              className={`fixed top-4 right-4 text-2xl hover:scale-110 focus:outline-none ${
                hasDarkXArrow
                  ? "text-black hover:text-red-800"
                  : "text-white hover:text-gray-200"
              } transition-colors`}
              onClick={onClose}
              aria-label="Close"
            >
              <FaTimes className="w-6 h-6" />
            </button>

            {children}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
