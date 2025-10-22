import React from "react";

const PharmacyCard = ({
  shopName,
  location,
  rating = 3.5,
  reviews,
  inStock,
  saved,
  imageURL,
}) => {
  return (
    <>
      <div className="bg-white rounded-lg shadow-md p-6 flex items-start">
        <img
          alt="Wellness Pharmacy"
          className="w-24 h-24 rounded-lg object-cover mr-6"
          src={imageURL}
        />
        <div className="grow">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 ">
                {shopName}
              </h4>
              <p className="text-gray-600">{location}</p>
              <div className="flex items-center mt-2">
                <div className="flex">
                  <span className="material-icons text-sm text-yellow-400">
                    {rating >= 1
                      ? "star"
                      : rating >= 0.5
                      ? "star_half"
                      : "star_border"}
                  </span>
                  <span className="material-icons text-sm text-yellow-400">
                    {rating >= 2
                      ? "star"
                      : rating >= 1.5
                      ? "star_half"
                      : "star_border"}
                  </span>
                  <span className="material-icons text-sm text-yellow-400">
                    {rating >= 3
                      ? "star"
                      : rating >= 2.5
                      ? "star_half"
                      : "star_border"}
                  </span>
                  <span className="material-icons text-sm text-yellow-400">
                    {rating >= 4
                      ? "star"
                      : rating >= 3.5
                      ? "star_half"
                      : "star_border"}
                  </span>
                  <span className="material-icons text-sm text-yellow-400">
                    {rating >= 5
                      ? "star"
                      : rating >= 4.5
                      ? "star_half"
                      : "star_border"}
                  </span>
                </div>
                <span className="text-sm text-gray-500 ml-2">
                  {rating} ({reviews} reviews)
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {inStock ? (
                <div className="flex items-center space-x-2 text-green-500 font-semibold">
                  <span className="material-icons">check_circle</span>
                  <span>In Stock</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2 text-red-500 font-semibold">
                  <span className="material-icons">cancel</span>
                  <span>Out of Stock</span>
                </div>
              )}
              <button className="p-2 rounded-full hover:bg-gray-200">
                <span className="material-icons text-gray-500 ">
                  {saved ? "bookmark" : "bookmark_border"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PharmacyCard;
