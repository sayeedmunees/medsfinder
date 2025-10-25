import React from "react";
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
            <p className="font-semibold text-gray-800">
              {title}
            </p>
            <p className="text-sm text-gray-500 ">{brand}</p>
          </div>
          <button className="mt-4 p-2 rounded-full hover:bg-gray-200 ">
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
