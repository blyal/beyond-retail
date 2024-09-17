"use client";

import Image from "next/image";
import { useState, useEffect, useLayoutEffect } from "react";
import { NAV_LINKS } from "@/constants/links";

const maxWidthForMobile = 1000;

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileLandscape, setIsMobileLandscape] = useState(
    window.innerWidth <= maxWidthForMobile &&
      window.innerWidth > window.innerHeight
  );

  // Function to handle scroll and check if the user is at the top of the page
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollY(scrollPosition);
    setIsAtTop(
      scrollPosition === 0 &&
        (!window.location.hash || window.location.hash === "#home")
    );
  };

  const checkMobileLandscape = () => {
    const isMobile = window.innerWidth <= maxWidthForMobile;
    const isLandscape = window.innerWidth > window.innerHeight;
    setIsMobileLandscape(isMobile && isLandscape);
  };

  // Track scroll position and initialize on page load
  useLayoutEffect(() => {
    // Check scroll position immediately when the component mounts
    handleScroll();
    checkMobileLandscape();
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobileLandscape);
    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobileLandscape);
    };
  }, []);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Re-enable scrolling
    }
  }, [menuOpen]);

  const isScrolled = scrollY > 50;

  return (
    <>
      <header
        className={`fixed top-0 w-full p-4 z-50 transition-all bg-transparent ${
          isScrolled || isMobileLandscape ? "bg-transparent" : "mt-[32px]"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div
            className={`flex items-center transition-opacity duration-500 ${
              isAtTop ? "opacity-0" : "opacity-100"
            } md:opacity-100`}
          >
            <a href="#home">
              <Image
                src="/logo.png"
                alt="Logo"
                width={isScrolled ? 80 : 100}
                height={isScrolled ? 80 : 100}
                className="transition-all duration-300"
              />
            </a>
          </div>

          {/* Beyond Name in the Center (only on desktop) */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/beyond-words-removedbg.png"
              alt="Venture Name"
              width={200}
              height={50}
              className={`transition-opacity duration-500 ${
                scrollY === 0 ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          <nav className="hidden md:flex space-x-6 bg-[#00070D] py-2 px-4 rounded-lg">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition-all duration-500 relative"
              >
                <span className="bg-gradient-to-b from-[#e4f2a6] to-[#43c2e8] bg-clip-text text-transparent transition-all duration-500 hover:text-[#43c2e8]">
                  {link.name}
                </span>
              </a>
            ))}
          </nav>

          {/* Mobile Burger Menu */}
          <div
            className={`md:hidden p-3 bg-[#00070D] rounded-md flex transition-opacity duration-500 ${
              isAtTop ? "opacity-0" : "opacity-100"
            }`}
          >
            <button
              className="relative w-8 h-8 focus:outline-none z-50"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {/* Top Bar */}
              <div
                className={`h-1 w-full bg-white transition-all duration-300 ease-in-out absolute top-1 left-0 ${
                  menuOpen ? "rotate-45 translate-y-[10px]" : ""
                }`}
              ></div>
              {/* Middle Bar */}
              <div
                className={`h-1 w-full bg-white transition-opacity duration-300 ease-in-out absolute top-1/2 left-0 transform -translate-y-1/2 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              ></div>
              {/* Bottom Bar */}
              <div
                className={`h-1 w-full bg-white transition-all duration-300 ease-in-out absolute bottom-1 left-0 ${
                  menuOpen ? "-rotate-45 -translate-y-[10px]" : ""
                }`}
              ></div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-90 flex flex-col justify-center items-center text-white z-40 transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a
          href="/about"
          className="text-2xl py-4"
          onClick={() => setMenuOpen(false)}
        >
          About
        </a>
        <a
          href="/services"
          className="text-2xl py-4"
          onClick={() => setMenuOpen(false)}
        >
          Services
        </a>
        <a
          href="/portfolio"
          className="text-2xl py-4"
          onClick={() => setMenuOpen(false)}
        >
          Portfolio
        </a>
        <a
          href="/contact"
          className="text-2xl py-4"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </a>
      </div>
    </>
  );
};

export default Header;
