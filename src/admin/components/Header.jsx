import React from "react";

const Header = ({ from }) => {
  return (
    <>
      <header className="py-4 px-6 md:px-12 flex justify-between items-center bg-white shadow-sm">
        <h2 className="text-base md:text-2xl capitalize font-semibold text-gray-800 ">
          {from}
        </h2>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <img
              alt="Admin Icon"
              className="h-8 md:h-10 w-8 md:w-10 rounded-full object-cover"
              src="https://cdn-icons-png.freepik.com/512/3177/3177440.png"
            />
            <div className="ml-3">
              <p className="hidden md:block text-sm font-semibold text-gray-800 ">Admin User</p>
              <p className="hidden md:block text-xs text-gray-500 ">admin@medsfinder.com</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
