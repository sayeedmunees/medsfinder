import React from "react";
import { FaBookmark } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { PiPillFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="py-4 px-6 md:px-12 flex justify-between items-center bg-gray-100 shadow-sm">
        <Link to={"/"}>
          <div className="flex items-center">
            <h1 className="flex items-center gap-2 text-2xl font-bold text-teal-600 ml-2">
              <PiPillFill className="text-blue-500" />
              <div>
                Meds<span className="text-blue-500">Finder</span>
              </div>
            </h1>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full text-2xl text-teal-600  hover:text-teal-700">
            <FaBookmark />
          </button>
          <Link to={"/admin-dashboard"}>
            <button className="p-2 rounded-full text-2xl text-gray-800 hover:bg-gray-200 ">
              <FaRegCircleUser />
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
