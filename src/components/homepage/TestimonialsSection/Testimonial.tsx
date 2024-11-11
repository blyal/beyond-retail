"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface TestimonialProps {
  quote: string;
  name: string;
  position: string;
  company: string;
  image?: string;
}

const Testimonial = ({
  quote,
  name,
  position,
  company,
  image,
}: TestimonialProps) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div
      className="relative bg-gray-700 bg-opacity-50 pt-20 px-2 pb-6 text-center shadow-2xl max-w-m w-2/3 ipadPortrait:w-1/2 mx-auto mt-20 flex flex-col justify-between z-10 ipadPortrait:py-24 ipadPortrait:px-12"
      data-aos="fade-up"
    >
      {/* <div className="absolute inset-0 bg-gray-300 opacity-20 z-0"></div> */}
      {/* Circular Image */}
      <div className="absolute left-1/2 transform -translate-x-1/2 -top-10">
        <div className="relative w-32 h-32">
          <Image
            src={image ?? "/logo.png"} // Placeholder image
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-full bg-[#2a2b2a]"
            priority
          />
        </div>
      </div>

      {/* Quote Container */}
      <div className="flex-grow flex items-center justify-center">
        <p
          className="text-lg italic text-gray-100 mb-6 ipadPortrait:mb-12 leading-loose tracking-widest ipadPortrait:text-2xl ipadPortrait:leading-[3.5rem]"
          style={{
            fontFamily: "Georgia, serif",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
          }}
        >
          <span className="text-[#94dccc] text-5xl">&ldquo; </span>
          {quote}
          {/* <span className="text-blue-700 text-4xl"> &rdquo;</span> */}
        </p>
      </div>

      {/* Name and Position */}
      <div className="flex flex-col justify-center items-center gap-3 leading-[0] mt-auto">
        <h4 className="font-semibold text-2xl bg-gradient-to-b from-[#e4f2a6] to-[#43c2e8] bg-clip-text text-transparent leading-[1]">
          {name}
        </h4>
        <div className="font-robotoBold text-gray-100 text-xl leading-tight tracking-normal">
          {position}
          <br />
          <span className="font-robotoLight text-gray-400 text-base uppercase tracking-wide">
            {company}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
