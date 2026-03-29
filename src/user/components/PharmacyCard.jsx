import React, { useEffect, useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { toggleSavedPharmacyAPI } from "../../services/allAPI";
import { toast } from "react-toastify";

import { Link, useNavigate, useLocation } from "react-router-dom";

const PharmacyCard = ({
  id,
  shopName,
  location,
  rating,
  reviews,
  inStock,
  imageURL,
  direction,
  onToggle,
  showToast = true,
}) => {
  const [isSaved, setIsSaved] = useState(false);
  const { pathname } = useLocation();
  const isSearchPage = pathname === "/search-result";

  useEffect(() => {
    const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
    if (existingUser && existingUser.savedPharmacies.includes(id)) {
      setIsSaved(true);
    }
  }, [id]);

  const handleSave = async () => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      toast.warning("Please login to save pharmacies");
      return;
    }

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    const reqBody = { pharmacyId: id };

    try {
      const result = await toggleSavedPharmacyAPI(reqBody, reqHeader);
      if (result.status === 200) {
        setIsSaved(!isSaved);
        // Update session storage
        const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
        if (existingUser) {
          if (isSaved) {
            existingUser.savedPharmacies = existingUser.savedPharmacies.filter(
              (pid) => pid !== id
            );
          } else {
            existingUser.savedPharmacies.push(id);
          }
          sessionStorage.setItem("existingUser", JSON.stringify(existingUser));
        }
        if (showToast) {
          toast.success(result.data);
        }
        if (onToggle) {
          onToggle(id, !isSaved);
        }
      } else {
        toast.error(result.response.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-start hover:shadow-xl transition duration-300 ease-in-out">
        <img
          alt={shopName}
          className="w-24 h-24 rounded-lg object-cover mr-6 mb-6 md:mb-0"
          src={imageURL}
        />
        <div className="grow">
          <div className="flex flex-col h-full md:flex-row gap-2 justify-between items-start md:items-center">
            <div className="flex flex-col">
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
              {isSearchPage ? (
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

                    <button
                      onClick={handleSave}
                      className="p-2 rounded-full hover:bg-gray-200 text-teal-600 text-xl"
                    >
                      {isSaved ? <FaBookmark /> : <FaRegBookmark />}
                    </button>
                  </div>

                  <a
                    href={direction}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 w-full rounded-md flex justify-center items-center gap-2 mr-1"
                  >
                    Get Directions
                  </a>
                </div>
              ) : (
                <div className="flex flex-row gap-3 items-center justify-center">
                  <a
                    href={direction}
                    className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-md flex justify-center items-center gap-2 "
                  >
                    Get Directions
                  </a>

                  <button
                    onClick={handleSave}
                    className="p-2 rounded-full hover:bg-gray-200 text-teal-500 text-2xl"
                  >
                    {isSaved ? <FaBookmark /> : <FaRegBookmark />}
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
