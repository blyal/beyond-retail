"use client";

import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CTAButton from "@/components/buttons/CTAButton";
import styles from "./CTASection.module.scss";

const CTASection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initialize AOS for scroll animations
    AOS.init({
      duration: 1000,
      once: true,
    });

    const currentRef = sectionRef.current;

    // Create the IntersectionObserver for lazy loading the background image
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true); // Set image visible
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.1 }
    );

    // Observe the current section ref
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen py-16 bg-center bg-cover bg-no-repeat text-center relative flex flex-col justify-between items-center px-4 md:px-0 ${
        isVisible ? styles["bg-loaded"] : styles["bg-unloaded"]
      }`}
      data-aos="fade-up"
    >
      <h3 className="text-3xl font-semibold text-white">
        Ready to take your project beyond?
      </h3>

      <div>
        <CTAButton className="bg-white text-black px-7 py-4 hover:bg-gradient-to-b from-[#e4f2a6] to-[#43c2e8] shadow-lg border border-white">
          Book a Call
        </CTAButton>
      </div>
    </section>
  );
};

export default CTASection;
