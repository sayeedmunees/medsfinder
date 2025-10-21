import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="py-4 px-6 md:px-12 flex justify-between items-center bg-background-light dark:bg-background-dark shadow-sm">
        <Link to={"/"}>
          <div className="flex items-center">
            <span className="material-icons text-primary text-3xl">
              local_pharmacy
            </span>
            <h1 className="text-2xl font-bold text-primary ml-2">MedsFinder</h1>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <span className="material-icons text-gray-600 dark:text-gray-400">
              bookmark_border
            </span>
          </button>
          <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <span className="material-icons text-gray-600 dark:text-gray-400">
              account_circle
            </span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
