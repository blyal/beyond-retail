import Image from "next/image";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { NAV_LINKS } from "@/constants/links";
import CTAAnchor from "@/components/buttons/CTAAnchor";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white pt-6 pb-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-center">
        <div className="flex items-center justify-center md:justify-start flex-1 mb-4 md:mb-0">
          <Link href="/#home">
            <Image
              src="/logo.png"
              alt="Logo"
              width={60}
              height={60}
              className="h-auto object-contain"
            />
          </Link>
        </div>

        <div className="flex flex-1 justify-center items-center mb-8 md:mb-0">
          <div className="flex space-x-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={`/${link.href}`}
                className="text-base hover:text-gray-400"
              >
                {link.name}
              </Link>
            ))}
            <CTAAnchor />
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-end flex-1 space-x-8 mb-4 md:mb-0">
          <a
            href="mailto:contact@beyonddevelopment.co"
            className="hover:text-gray-400"
            title="Send an Email"
          >
            <FaEnvelope size={24} />
          </a>
          <a
            href="tel:+31626554794"
            className="hover:text-gray-400"
            title="Call"
          >
            <FaPhone size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/alex-blyth-575107170/"
            target="_blank"
            className="hover:text-gray-400"
            title="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.github.com/blyal"
            target="_blank"
            className="hover:text-gray-400"
            title="GitHub"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          © 2024 Beyond Development. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
