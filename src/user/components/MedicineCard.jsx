import React from "react";
import { Link } from "react-router-dom";

const MedicineCard = ({ title, brand, imageURL, saved }) => {
  return (
    <>
      <Link to={"/product"}>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center justify-between transition-transform transform hover:scale-105">
          <img
            alt="Dolo 650 mg"
            className="w-full h-auto object-cover rounded-md mb-4"
            src={imageURL}
          />

          <div className="text-center">
            <p className="font-semibold text-gray-800 dark:text-white">
              {title}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{brand}</p>
          </div>
          <button className="mt-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            <span className="material-icons text-teal-500">
              {saved ? "bookmark" : "bookmark_border"}
            </span>
          </button>
        </div>
      </Link>
    </>
  );
};

export default MedicineCard;
