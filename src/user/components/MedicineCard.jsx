import React from "react";
import { Link } from "react-router-dom";

const MedicineCard = () => {
  return (
    <>
      <Link to={"/product"}>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center justify-between transition-transform transform hover:scale-105">
          <img
            alt="Dolo 650 mg"
            className="w-full h-auto object-cover rounded-md mb-4"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBNwIY-Y4GXbwnDDIDQ3XRebYSw9ZPfWkYZlTVu3GWPy0B-wUKRp3q9DIhI6g5hhKriknHpZbV7kUpf-e0uMrYJVuCtRbErVAvI3jravJmUo4328MbCwhHFbY9xw9iGoObx-cBORe8COqr1XM8hwZ9DV334YA_6ApQKeV4zIeKY5I_VEx6lX7LJ6WRviF9cqdgvnH8uTC3j5Y-OycAYi9zHR6QP5v9RphKoCYhV5bxquxjcFabJGeEPBMODu3FDkcLkrb8eIADKHic"
          />
          <div className="text-center">
            <p className="font-semibold text-gray-800 dark:text-white">
              Dolo 650 mg
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Micro Labs Ltd
            </p>
          </div>
          <button className="mt-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <span className="material-icons text-teal-500">
              bookmark_border
            </span>
          </button>
        </div>
      </Link>
    </>
  );
};

export default MedicineCard;
