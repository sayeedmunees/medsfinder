import React from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const MedicineCard = ({ title, brand, imageURL, saved }) => {
  return (
    <>
      <Link to={"/product"}>
        <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-between transition-transform transform hover:scale-105 hover:shadow-xl">
          <img
            alt="Dolo 650 mg"
            className="w-auto h-60 object-cover border-3 border-gray-100 rounded-md mb-4"
            src={imageURL}
          />

          <div className="text-center">
            <p className="font-semibold text-gray-800">{title}</p>
            <p className="text-sm text-gray-500 ">{brand}</p>
          </div>
          <button className="mt-4 p-2 rounded-full hover:bg-gray-200 text-teal-600 text-xl">
            {saved ? <FaBookmark /> : <FaRegBookmark />}
          </button>
        </div>
      </Link>
    </>
  );
};

export default MedicineCard;
