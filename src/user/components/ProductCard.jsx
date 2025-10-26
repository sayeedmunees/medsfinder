import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({title, type, price , imageURL}) => {
  return (
    <>
      <Link to={"/product"}>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl">
          <div className="relative">
            <img
              alt={title}
              className="w-full h-56 object-cover"
              src={imageURL}
            />
            <div className="absolute inset-0 bg-black/50 bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-teal-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-teal-600">
                Shop Now
              </button>
            </div>
          </div>
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              {title}
            </h4>
            <p className="text-gray-600">
              {type}
            </p>
            <p className="text-teal-600 font-bold text-lg mt-4">${price}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
