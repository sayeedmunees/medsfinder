import React from "react";
import { FaClinicMedical } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { GiMedicines } from "react-icons/gi";
import { MdCampaign, MdDashboard, MdSettings } from "react-icons/md";
import { PiPillFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ from }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("existingUser");
    sessionStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <aside className="w-fit md:w-64 bg-white shadow-md shrink-0 flex flex-col">
        <Link to={"/"}>
          <div className="py-6 px-2 md:px-6 flex items-center border-b border-gray-200 ">
            <h1 className="flex items-center gap-2 text-2xl font-bold text-teal-600 md:ml-2">
              <PiPillFill className="text-blue-500" />
              <div className="hidden md:block">
                Meds<span className="text-blue-500">Finder</span>
              </div>
            </h1>
          </div>
        </Link>
        <nav className="mt-6 flex-1">
          <Link
            to={"/dashboard"}
            className={
              from == "dashboard"
                ? "flex items-center py-3 px-2 md:px-6 text-white bg-teal-600"
                : "flex items-center py-3 px-2 md:px-6 text-gray-600 bg-white hover:bg-gray-100 "
            }
          >
            <MdDashboard className="text-2xl" />
            <span className="hidden md:block md:ml-4 font-semibold">
              Dashboard
            </span>
          </Link>
          <Link
            to={"/dashboard/medicines"}
            className={
              from == "medicine"
                ? "flex items-center py-3 px-2 md:px-6 text-white bg-teal-600"
                : "flex items-center py-3 px-2 md:px-6 text-gray-600 bg-white hover:bg-gray-100 "
            }
          >
            <GiMedicines className="text-2xl" />
            <span className="hidden md:block md:ml-4">Medicines</span>
          </Link>
          <Link
            to={"/dashboard/pharmacies"}
            className={
              from == "pharmacy"
                ? "flex items-center py-3 px-2 md:px-6 text-white bg-teal-600"
                : "flex items-center py-3 px-2 md:px-6 text-gray-600 bg-white hover:bg-gray-100 "
            }
          >
            <FaClinicMedical className="text-2xl" />
            <span className="hidden md:block md:ml-4">Pharmacies</span>
          </Link>
          <Link
            to={"/dashboard/advertisement"}
            className={
              from == "advertisement"
                ? "flex items-center py-3 px-2 md:px-6 text-white bg-teal-600"
                : "flex items-center py-3 px-2 md:px-6 text-gray-600 bg-white hover:bg-gray-100 "
            }
          >
            <MdCampaign className="text-2xl" />
            <span className="hidden md:block md:ml-4">Advertisements</span>
          </Link>
        </nav>
        <div className="py-4 px-2 md:px-6 space-y-2 border-t border-gray-200 ">
          <Link
            to={"/admin-settings"}
            className={
              from == "settings"
                ? "flex items-center py-3 px-2 md:px-6 rounded text-white  bg-teal-600 "
                : "flex items-center py-3 px-2 md:px-6 rounded text-gray-600  hover:bg-gray-100 "
            }
          >
            <MdSettings className="text-2xl" />
            <span className="hidden md:block md:ml-4">Settings</span>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center py-3 px-2 md:px-6 font-bold rounded text-red-600  hover:bg-red-100 transition-colors"
          >
            <FiLogOut className="text-2xl" />
            <span className="hidden md:block md:ml-4">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
