import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="py-4 px-6 md:px-12 flex justify-between items-center bg-gray-100 shadow-sm">
        <Link to={"/"}>
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-teal-600 ml-2">
              Meds<span className="text-blue-500">Finder</span>
            </h1>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-200 ">
            <span className="material-icons text-gray-600 ">
              bookmark_border
            </span>
          </button>
          <Link to={"/admin-dashboard"}>
            <button className="p-2 rounded-full hover:bg-gray-200 ">
              <span className="material-icons text-gray-600 ">
                account_circle
              </span>
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
