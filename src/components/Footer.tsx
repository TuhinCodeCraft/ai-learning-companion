import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full border-t mt-12 pt-5 px-0 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 relative animate-fadeIn">
      <div className="container mx-auto px-20 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-6">
            <a
              href="/privacy"
              className="text-sm font-medium hover:text-blue-600 transition-colors duration-300 transform hover:scale-105"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-sm font-medium hover:text-blue-600 transition-colors duration-300 transform hover:scale-105"
            >
              Terms of Service
            </a>
            <a
              href="/contact"
              className="text-sm font-medium hover:text-blue-600 transition-colors duration-300 transform hover:scale-105"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-6 md:mt-0 flex gap-6 text-2xl">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300 transform hover:scale-125"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700 transition-colors duration-300 transform hover:scale-125"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-300 transform hover:scale-125"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
      <p className="text-sm font-medium m-auto text-center mt-6">
        © {new Date().getFullYear()} Tutoraid. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
