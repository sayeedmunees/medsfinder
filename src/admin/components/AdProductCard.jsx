import React from "react";

const AdProductCard = ({ title, type, price, imageURL }) => {
  return (
    <div class="flex flex-col justify-between p-6 bg-white rounded-2xl shadow hover:shadow-2xl transition ease-in-out">
      <div>
        <img
          alt={title}
          class="w-full h-40 object-cover rounded-lg mb-4"
          src={imageURL}
        />
        <h4 class="text-xl font-semibold text-gray-900 mb-2">{title}</h4>
        <p class="text-gray-600 text-sm mb-4">{type}</p>
        <p className="text-teal-600 font-bold text-lg mb-4">${price}</p>
      </div>
      <div class="flex flex-col space-y-2">
        <button class="flex items-center justify-center px-4 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition-colors">
          <span class="material-icons text-lg mr-2">edit</span> Edit Details
        </button>
        <button class="flex items-center justify-center px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition-colors">
          <span class="material-icons text-lg mr-2">delete</span>
          Remove
        </button>
      </div>
    </div>
  );
};

export default AdProductCard;
