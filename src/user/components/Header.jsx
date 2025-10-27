import React, { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaBookmark, FaUser } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiLogOut } from "react-icons/fi";
import { ImUser } from "react-icons/im";
import { PiPillFill } from "react-icons/pi";
import { RiAdminFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Header = ({ onLoginClick }) => {
  const [dropDownStatus, setDropDownStatus] = useState(false);

  return (
    <>
      <header className="py-6 px-6 md:px-12 flex justify-between items-center bg-white shadow-sm">
        <Link to={"/"}>
          <div className="flex items-center">
            <h1 className="flex items-center gap-2 text-xl md:text-3xl font-bold text-teal-600 ml-2">
              <PiPillFill className="text-blue-500" />
              <div>
                Meds<span className="text-blue-500">Finder</span>
              </div>
            </h1>
          </div>
        </Link>
        <div className="flex items-center md:gap-4">
          <Link to={"/saved"}>
            <button className="p-2 rounded-full text-xl md:text-2xl text-teal-600  hover:text-teal-700">
              <FaBookmark />
            </button>
          </Link>

          {/* <button
            onClick={() => setDropDownStatus(!dropDownStatus)}
            className="p-2 rounded-full text-xl md:text-2xl text-gray-800 hover:bg-gray-200 "
          >
            <FaRegCircleUser />
          </button> */}
          <div className="text-right">
            <Menu>
              <MenuButton className="inline-flex items-center gap-2 rounded-full p-2 text-sm/6 font-semibold text-gray-800 shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-200 data-open:bg-gray-100">
                <FaRegCircleUser className="text-xl md:text-2xl" />
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="w-52 origin-top-right mt-5 rounded-xl border border-white/5 bg-white p-2 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0 "
              >
                <MenuItem>
                  <Link to={"/profile"}>
                    <p
                      className="flex justify-start gap-2 px-4 py-2 mb-1 text-sm rounded-md  hover:bg-gray-200 text-gray-700"
                      role="menuItem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      <ImUser className="text-xl" />
                      Profile
                    </p>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to={"/admin-dashboard"}>
                    <p
                      className="flex gap-2 px-4 py-2 my-1 text-sm rounded-md  hover:bg-gray-200 text-gray-700"
                      role="menuItem"
                      tabIndex="-1"
                      id="menu-item-0"
                    >
                      <RiAdminFill className="text-xl" />
                      Admin
                    </p>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <button
                    type="submit"
                    className="flex gap-2 w-full px-4 py-2 my-1 text-sm rounded-md  hover:bg-gray-200 text-gray-700"
                    role="menuItem"
                    tabIndex="-1"
                    id="menu-item-1"
                    onClick={onLoginClick}
                  >
                    <ImUser className="text-xl" />
                    Login
                  </button>
                </MenuItem>
                <div className="m-1 h-px bg-black/20" />
                <MenuItem>
                  <button
                    type="submit"
                    className="flex gap-2 w-full rounded-md px-4 py-2 text-left text-sm text-red-600 hover:bg-red-200"
                    role="menuItem"
                    tabIndex="-1"
                    id="menu-item-1"
                  >
                    <FiLogOut className="text-xl" />
                    Logout
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
        {/* {dropDownStatus && (
          <div
            className="absolute right-1 md:right-10 top-16 md:top-17 z-10 mt-2 w-46 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden p-2 font-semibold "
            role="menu"
            aria-orientation=""
            tabIndex="-1"
          >
            <div role="none">
              <Link to={"/profile"}>
                <p
                  className="flex justify-start gap-2 px-4 py-2 my-1 text-sm rounded-md  hover:bg-gray-200 text-gray-700"
                  role="menuItem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  <ImUser className="text-xl" />
                  Profile
                </p>
              </Link>

              <Link to={"/admin-dashboard"}>
                <p
                  className="flex gap-2 px-4 py-2 my-1 text-sm rounded-md  hover:bg-gray-200 text-gray-700"
                  role="menuItem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  <RiAdminFill className="text-xl" />
                  Admin
                </p>
              </Link>

              <button
                type="submit"
                className="flex gap-2 w-full px-4 py-2 my-1 text-sm rounded-md  hover:bg-gray-200 text-gray-700"
                role="menuItem"
                tabIndex="-1"
                id="menu-item-1"
                onClick={onLoginClick}
              >
                <ImUser className="text-xl" />
                Login
              </button>

              <button
                type="submit"
                className="flex gap-2 w-full rounded-md px-4 py-2 text-left text-sm text-red-600 hover:bg-red-200"
                role="menuItem"
                tabIndex="-1"
                id="menu-item-1"
              >
                <FiLogOut className="text-xl" />
                Logout
              </button>
            </div>
          </div>
        )} */}
      </header>
    </>
  );
};

export default Header;
