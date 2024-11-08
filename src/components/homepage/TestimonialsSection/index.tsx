"use client";

import Testimonial from "./Testimonial";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useState } from "react";
import { doesBrowserSupportWebP, preloadImages } from "@/utils";

interface ArrowProps {
  onClick?: () => void;
}

const PrevArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 portrait:top-1/2 transform -translate-y-1/2 left-0 z-10 ml-4 md:ml-10 text-4xl text-gray-400 hover:text-gray-200 ipadPortrait:ml-24 ipadPortrait:text-6xl"
    >
      <FiChevronLeft />
    </button>
  );
};

const NextArrow = ({ onClick }: ArrowProps) => {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 portrait:top-1/2 transform -translate-y-1/2 right-0 z-10 mr-4 md:mr-10 text-4xl text-gray-400 hover:text-gray-200 ipadPortrait:mr-24 ipadPortrait:text-6xl"
    >
      <FiChevronRight />
    </button>
  );
};

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  lazyLoad: "progressive",
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const TestimonialsSection = () => {
  const [browserUsesWebP, setBrowserUsesWebP] = useState(true);

  useEffect(() => {
    doesBrowserSupportWebP().then((result) => {
      setBrowserUsesWebP(result);
    });
  }, []);

  useEffect(() => {
    const imageNames = [
      "moeliker",
      "visser",
      "nsl-logo-square",
      "khang",
      "vogel",
      "angelika",
      "dgt-logo",
    ];
    const imagesToPreload = imageNames.map((name) =>
      browserUsesWebP
        ? `/${name}.webp`
        : name === "nsl-logo-square" || name === "dgt-logo"
        ? `/${name}.png`
        : `/${name}.jpeg`
    );

    preloadImages(imagesToPreload);
  }, [browserUsesWebP]);

  const getImageSource = (imageName: string) => {
    if (browserUsesWebP) {
      return `/${imageName}.webp`;
    } else if (imageName === "nsl-logo-square" || imageName === "dgt-logo") {
      return `/${imageName}.png`;
    } else {
      return `/${imageName}.jpeg`;
    }
  };

  return (
    <section
      id="endorsements"
      className="relative min-h-screen pt-16 pb-10 bg-gradient-to-b from-blue-500 to-blue-900 text-white text-center flex flex-col justify-center items-start px-4 md:px-0 overflow-hidden"
      style={{
        backgroundImage: 'url("/speaker-2-adjusted.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2
        className="relative text-left text-4xl md:text-4xl mt-6 md:ml-20 mb-6 md:mb-10 ipadPortrait:mb-24 ipadPortrait:mt-16 portrait:text-center portrait:mx-auto mobileLandscape:m-0 mobileLandscape:px-3 mobileLandscape:w-screen mobileLandscape:text-center leading-normal font-robotoBold" // Adjusted margin-top to create space below the quote
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 1)" }}
      >
        What do industry professionals say about Alex?
      </h2>

      <div className="w-full md:w-1/2 portrait:w-full md:ml-16 portrait:mx-auto mobileLandscape:w-full mobileLandscape:mx-auto">
        <Slider {...settings}>
          <Testimonial
            quote="Alex played an instrumental role in devising architectural changes to the styling system of our retail websites, which are visited by millions of customers each year."
            name="Richard Moeliker"
            position="Global Country Manager"
            company="Hedin IT"
            image={getImageSource("moeliker")}
          />
          <Testimonial
            quote="He provided clear communication throughout the project and delivered well-documented code, which made the process seamless for us. Alex took on a project we didn't have time or expertise for, and thanks to his efforts, we now have a solution we can confidently move forward with. Highly recommended!"
            name="Thimo Veldkamp"
            position="Manager Product Innovation"
            company="Digital Game Technology"
            image={getImageSource("dgt-logo")}
          />
          <Testimonial
            quote="He especially impressed me with his ability to take ownership and drive the implementation of complex features from beginning to end."
            name="Paul Visser"
            position="Head of Engineering"
            company="Momenterie"
            image={getImageSource("visser")}
          />
          <Testimonial
            quote="We engaged Alex to develop a client server network performance measurement system for field testing consumer broadband and mobile data networks. [...] Our project was successful thanks to Alex's contribution, and we would work with him again."
            name="Dr Mike Hamilton-Jenkins"
            position="Principal Technologist"
            company="Network Strategies Limited"
            image={getImageSource("nsl-logo-square")}
          />
          <Testimonial
            quote="I was impressed with how fast he adapted to our project [...] he quickly evolved to a leading position who also trained our new colleagues."
            name="Angelika Pridein"
            position="Product Owner"
            company="congstar"
            image={getImageSource("angelika")}
          />
          <Testimonial
            quote="Alex demonstrated exceptional skill, attentiveness, and the ability to translate my vision into a user-friendly frontend for our end users."
            name="Frank Vogel"
            position="DMS & Application Specialist"
            company="Hedin IT"
            image={getImageSource("vogel")}
          />
          <Testimonial
            quote="What impressed me most about Alex was his ability to stay calm and deliver high quality features on time, even with a tight schedule in the background. It was a pleasure to work with Alex on the project."
            name="Khang Ho"
            position="Digital Designer"
            company="MaibornWolff GmbH"
            image={getImageSource("khang")}
          />
        </Slider>
        <Image
          src={"/logo-no-background-3.png"}
          alt="Beyond Logo"
          width={300}
          height={300}
          className="mx-auto opacity-5 ipadPortrait:mt-16 mobileLandscape:mt-0"
        />
      </div>
    </section>
  );
};

export default TestimonialsSection;
