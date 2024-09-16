"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSPicture = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div
      className="md:w-2/5 flex justify-center mb-8 md:mb-0 md:mr-12"
      data-aos="fade-up"
    >
      <Image
        src="/mw-filter.jpg"
        alt="Alex Blyth profile picture"
        width={600}
        height={600}
        className="rounded-full object-cover"
      />
    </div>
  );
};

export default AOSPicture;
