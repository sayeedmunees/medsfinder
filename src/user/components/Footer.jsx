import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-brand-primary text-brand-text py-12 px-6 md:px-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-text">
              About
            </h4>
            <p className="text-brand-text/80">
              MedsFinder helps you find medicines from nearby pharmacies quickly
              and easily.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-text">
              Contact us
            </h4>
            <ul className="space-y-2 text-brand-text/80">
              <li>
                <a className="hover:text-brand-text transition-colors" href="#">
                  Email Us
                </a>
              </li>
              <li>
                <a className="hover:text-brand-text transition-colors" href="#">
                  Call Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-text">
              Links
            </h4>
            <ul className="space-y-2 text-brand-text/80">
              <li>
                <a className="hover:text-brand-text transition-colors" href="#">
                  Community
                </a>
              </li>
              <li>
                <a className="hover:text-brand-text transition-colors" href="#">
                  Request a Feature
                </a>
              </li>
              <li>
                <a className="hover:text-brand-text transition-colors" href="#">
                  Report a Bug
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-text">
              Socials
            </h4>
            <div className="flex space-x-4">
              <a
                className="text-brand-text/80 hover:text-brand-text text-xl md:text-2xl transition-colors"
                href="#"
              >
                <AiFillInstagram />
              </a>
              <a
                className="text-brand-text/80 hover:text-brand-text text-xl md:text-2xl transition-colors"
                href="#"
              >
                <FaXTwitter />
              </a>
              <a
                className="text-brand-text/80 hover:text-brand-text text-xl md:text-2xl transition-colors"
                href="https://github.com/sayeedmunees"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-brand-text/20 text-center text-brand-text/70">
          &#169; 2025 MedsFinder. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
