import React, { useEffect, useState } from "react";

const Header = ({ from }) => {
  const [adminUser, setAdminUser] = useState({
    username: "Admin User",
    email: "",
    profile: "https://cdn-icons-png.freepik.com/512/3177/3177440.png",
  });

  const getAdminDetails = () => {
    const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
    if (existingUser) {
      setAdminUser({
        username: existingUser.username,
        email: existingUser.email,
        profile: existingUser.profile || "https://cdn-icons-png.freepik.com/512/3177/3177440.png",
      });
    }
  };

  useEffect(() => {
    getAdminDetails();
    window.addEventListener("adminProfileUpdated", getAdminDetails);
    return () => {
      window.removeEventListener("adminProfileUpdated", getAdminDetails);
    };
  }, []);

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
              src={adminUser.profile}
            />
            <div className="ml-3 text-left">
              <p className="hidden md:block text-sm font-semibold text-gray-800 ">
                {adminUser.username}
              </p>
              <p className="hidden md:block text-xs text-gray-500 ">
                {adminUser.email}
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
