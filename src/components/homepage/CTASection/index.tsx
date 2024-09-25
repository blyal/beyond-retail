"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CTAButton from "@/components/buttons/CTAButton";

const CTASection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section
      className="min-h-screen py-16 bg-center bg-cover bg-no-repeat text-center relative flex flex-col justify-between items-center px-4 md:px-0"
      style={{ backgroundImage: 'url("/beyond-mountains.png")' }}
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
