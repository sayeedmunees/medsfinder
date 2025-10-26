import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const AdProductCard = ({ title, type, price, imageURL }) => {
  return (
    <div className="flex flex-col justify-between p-6 bg-white rounded-2xl shadow hover:shadow-2xl transition ease-in-out">
      <div>
        <img
          alt={title}
          className="w-full h-40 object-cover rounded-lg mb-4"
          src={imageURL}
        />
        <h4 className="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600 text-sm mb-4">{type}</p>
        <p className="text-teal-600 font-bold text-lg mb-4">${price}</p>
      </div>
      <div className="flex flex-col space-y-2">
        <button className="flex items-center justify-center px-4 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition-colors">
          <MdEdit className="text-xl mr-2" />
          Edit Details
        </button>
        <button className="flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors">
          <MdDelete className="text-xl mr-2" />
          Remove
        </button>
      </div>
    </div>
  );
};

export default AdProductCard;
