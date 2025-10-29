import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-teal-600 text-white py-12 px-6 md:px-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-4">
              About
            </h4>
            <p className="text-sm md:text-base text-teal-100">
              MedsFinder helps you find medicines from nearby pharmacies quickly
              and easily.
            </p>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-4">
              Contact us
            </h4>
            <ul className="space-y-1 md:space-y-2 text-teal-100">
              <li>
                <a className="text-sm md:text-base hover:text-white" href="#">
                  Email Us
                </a>
              </li>
              <li>
                <a className="text-sm md:text-base hover:text-white" href="#">
                  Call Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-4">
              Links
            </h4>
            <ul className="space-y-1 md:space-y-2 text-teal-100">
              <li>
                <a className="text-sm md:text-base hover:text-white" href="#">
                  Community
                </a>
              </li>
              <li>
                <a className="text-sm md:text-base hover:text-white" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="text-sm md:text-base hover:text-white" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-1 md:mb-4">
              Socials
            </h4>
            <div className="flex space-x-4">
              <a
                className="text-teal-100 hover:text-white text-xl md:text-2xl"
                href="#"
              >
                <AiFillInstagram />
              </a>
              <a
                className="text-teal-100 hover:text-white text-xl md:text-2xl"
                href="#"
              >
                <FaXTwitter />
              </a>
              <a
                className="text-teal-100 hover:text-white text-xl md:text-2xl"
                href="https://github.com/sayeedmunees"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-teal-500 text-sm md:text-base text-center text-teal-100">
          &#169; 2025 MedsFinder. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
