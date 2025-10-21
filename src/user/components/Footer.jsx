import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-teal-500 dark:bg-teal-700 text-white py-12 px-6 md:px-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">About</h4>
            <p className="text-teal-100 dark:text-teal-200">
              MedsFinder helps you find medicines from nearby pharmacies quickly
              and easily.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact us</h4>
            <ul className="space-y-2 text-teal-100 dark:text-teal-200">
              <li>
                <a className="hover:text-white" href="#">
                  Email Us
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Call Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-teal-100 dark:text-teal-200">
              <li>
                <a className="hover:text-white" href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Socials</h4>
            <div className="flex space-x-4">
              <a
                className="text-teal-100 dark:text-teal-200 hover:text-white"
                href="#"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clip-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                className="text-teal-100 dark:text-teal-200 hover:text-white"
                href="#"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                className="text-teal-100 dark:text-teal-200 hover:text-white"
                href="#"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    clip-rule="evenodd"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.142 2.564 7.69 6.138 9.259.448.082.612-.194.612-.431 0-.213-.008-.778-.012-1.527-2.49.542-3.016-1.204-3.016-1.204-.408-1.036-1-1.312-1-1.312-.814-.556.062-.545.062-.545.9.063 1.375.925 1.375.925.8 1.374 2.1.977 2.612.747.082-.581.313-1.01.57-1.242-1.994-.226-4.088-1-4.088-4.44 0-.982.35-1.785.925-2.414-.092-.228-.4-1.142.088-2.38 0 0 .754-.242 2.47 1.203a8.67 8.67 0 012.25-.302c.762 0 1.53.102 2.25.302 1.716-1.445 2.468-1.203 2.468-1.203.488 1.238.18 2.152.088 2.38.575.63.925 1.432.925 2.414 0 3.45-2.098 4.21-4.1 4.432.322.278.608.828.608 1.668 0 1.203-.01 2.176-.01 2.47 0 .238.162.517.616.43C19.438 19.688 22 16.142 22 12c0-5.523-4.477-10-10-10z"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-teal-400 dark:border-teal-600 text-center text-teal-100 dark:text-teal-200">
          © 2025 MedsFinder. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
