import React from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";

const PharmacyCard = ({
  shopName,
  location,
  rating = 3.5,
  reviews,
  inStock,
  saved,
  imageURL,
  from,
}) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-start hover:shadow-xl transition duration-300 ease-in-out">
        <img
          alt={shopName}
          className="w-24 h-24 rounded-lg object-cover mr-6 mb-6"
          src={imageURL}
        />
        <div className="grow">
          <div className="flex flex-col h-full md:flex-row gap-2 justify-between items-start">
            <div>
              <h4 className="text-lg md:text-xl font-semibold text-gray-800 ">
                {shopName}
              </h4>
              <p className="text-sm md:text-base text-gray-600">{location}</p>
              <div className="flex items-center mt-2">
                <div className="flex text-xl text-yellow-400">
                  {rating >= 1 ? (
                    <IoIosStar />
                  ) : rating >= 0.5 ? (
                    <IoIosStarHalf />
                  ) : (
                    <IoIosStarOutline />
                  )}

                  {rating >= 2 ? (
                    <IoIosStar />
                  ) : rating >= 1.5 ? (
                    <IoIosStarHalf />
                  ) : (
                    <IoIosStarOutline />
                  )}

                  {rating >= 3 ? (
                    <IoIosStar />
                  ) : rating >= 2.5 ? (
                    <IoIosStarHalf />
                  ) : (
                    <IoIosStarOutline />
                  )}

                  {rating >= 4 ? (
                    <IoIosStar />
                  ) : rating >= 3.5 ? (
                    <IoIosStarHalf />
                  ) : (
                    <IoIosStarOutline />
                  )}

                  {rating >= 5 ? (
                    <IoIosStar />
                  ) : rating >= 4.5 ? (
                    <IoIosStarHalf />
                  ) : (
                    <IoIosStarOutline />
                  )}
                </div>
                <span className="text-sm text-gray-500 ml-2">
                  {rating} ({reviews} reviews)
                </span>
              </div>
            </div>
            <div>
              {from ? (
                <div className="flex flex-col gap-2 items-start md:items-end">
                  <div className="flex items-center space-x-4">
                    <div>
                      {inStock ? (
                        <div className="flex items-center space-x-2 text-green-500 font-semibold">
                          <FaCircleCheck className="text-2xl" />
                          <span>In Stock</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2 text-red-500 font-semibold">
                          <FaCircleXmark className="text-2xl" />
                          <span>Out of Stock</span>
                        </div>
                      )}
                    </div>

                    <button className="p-2 rounded-full hover:bg-gray-200 text-teal-600 text-xl">
                      {saved ? <FaBookmark /> : <FaRegBookmark />}
                    </button>
                  </div>

                  <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 w-full rounded-md flex justify-center items-center gap-2 mr-1">
                    Get Directions
                  </button>
                </div>
              ) : (
                <div className="flex flex-row gap-3 items-center justify-center">
                  <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-md flex justify-center items-center gap-2 ">
                    Get Directions
                  </button>

                  <button className="p-2 rounded-full hover:bg-gray-200 text-teal-500 text-2xl">
                    <FaBookmark />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PharmacyCard;
