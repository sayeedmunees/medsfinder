import React from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import { serverURL } from "../../services/serverURL";

const MedicineCard = ({ id, title, brand, imageURL, saved }) => {
  return (
    <Link to={`/product/${id}`}>
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-between transition-transform transform hover:scale-105 hover:shadow-xl">
        <img
          alt={title}
          className="w-auto h-60 object-cover rounded-md mb-4"
          src={`${serverURL}/upload/${imageURL}`}
        />

        <div className="text-center">
          <p className="font-semibold text-gray-800">{title}</p>
          <p className="text-sm text-gray-500">{brand}</p>
        </div>

        <button className="mt-4 p-2 rounded-full hover:bg-gray-200 text-teal-600 text-xl">
          {saved ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>
    </Link>
  );
};

export default MedicineCard;
