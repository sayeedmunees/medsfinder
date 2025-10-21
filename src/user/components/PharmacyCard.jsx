import React from "react";

const PharmacyCard = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-start">
        <img
          alt="Wellness Pharmacy"
          className="w-24 h-24 rounded-lg object-cover mr-6"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiN5b7Pui1f3AIIHaifJ5y4hHMqwwfMOIDCefJk2YA-VfmgB_Hev4bk66unqbnR4mlVpRnnzKqZ3MyrlsjyLTTAqqhXjVT9tjxkUmsT3g_sA7TZnaYNBdxTOATgmHUhLOKAx4JDRVFqrcD50yzkWLhjUWGmY3018siIycZAczbmX_45x77tqS9DF7T-go1KlUZ31u5IxluDKLSmfG8bPxGAVpLcS2NVsHhPwCZo0D6ZFCncNS67VGrr_wkqx_HaUD2JR--omBxKk9a"
        />
        <div className="grow">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                Wellness Pharmacy
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                1.2 km away - SeaPort Airport Road, Kakkanad
              </p>
              <div className="flex items-center mt-2">
                <div className="flex text-yellow-400">
                  <span className="material-icons text-sm">star</span>
                  <span className="material-icons text-sm">star</span>
                  <span className="material-icons text-sm">star</span>
                  <span className="material-icons text-sm">star</span>
                  <span className="material-icons text-sm text-gray-300 dark:text-gray-600">
                    star
                  </span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                  4.0 (124 reviews)
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-green-500 font-semibold">
                <span className="material-icons">check_circle</span>
                <span>In Stock</span>
              </div>
              <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                <span className="material-icons text-gray-500 dark:text-gray-400">
                  bookmark_border
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
