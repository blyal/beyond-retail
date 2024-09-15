"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Track scroll position to handle gradual changes
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        className={`fixed top-0 w-full p-4 z-50 transition-all ${
          isScrolled ? "bg-transparent" : "mt-[32px]"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <a href="/">
              <Image
                src="/logo.png"
                alt="Logo"
                width={isScrolled ? 60 : 100}
                height={isScrolled ? 60 : 100}
                className="transition-all duration-300"
              />
            </a>
          </div>

          {/* Beyond Name in the Center (only on desktop) */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <Image
              src="/beyond-words-removedbg.png"
              alt="Venture Name"
              width={200}
              height={50}
              className={`transition-opacity duration-500 ${
                isScrolled ? "opacity-0" : "opacity-100"
              }`}
            />
          </div>

          <nav className="hidden md:flex space-x-6 bg-[#00070D] py-2 px-4 rounded-lg">
            <a href="/about" className="transition-all duration-500 relative">
              <span className="bg-gradient-to-b from-[#e4f2a6] to-[#43c2e8] bg-clip-text text-transparent transition-all duration-500 hover:text-[#43c2e8]">
                About
              </span>
            </a>
            <a
              href="/services"
              className="transition-all duration-500 relative"
            >
              <span className="bg-gradient-to-b from-[#e4f2a6] to-[#43c2e8] bg-clip-text text-transparent transition-all duration-500 hover:text-[#43c2e8]">
                Services
              </span>
            </a>
            <a
              href="/portfolio"
              className="transition-all duration-500 relative"
            >
              <span className="bg-gradient-to-b from-[#e4f2a6] to-[#43c2e8] bg-clip-text text-transparent transition-all duration-500 hover:text-[#43c2e8]">
                Portfolio
              </span>
            </a>
            <a href="/contact" className="transition-all duration-500 relative">
              <span className="bg-gradient-to-b from-[#e4f2a6] to-[#43c2e8] bg-clip-text text-transparent transition-all duration-500 hover:text-[#43c2e8]">
                Contact
              </span>
            </a>
          </nav>

          {/* Mobile Burger Menu */}
          <div className="md:hidden">
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
