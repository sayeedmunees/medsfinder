import React from "react";
import { FaPen, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const OverviewCard = ({ location, addSubtitle, editSubtitle, path }) => {
  return (
    <>
      <div className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 border-4 border-gray-100 rounded-lg flex items-start space-x-4 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="bg-teal-200 text-teal-700 text-2xl p-4 rounded-lg">
              <FaPlus />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 ">
                Add {location}
              </h4>
              <p className="text-gray-600  mt-1 text-sm">{addSubtitle}</p>
            </div>
          </div>
          <Link to={`/${path}`}>
            <div className="bg-gray-50  p-6 rounded-lg flex items-start space-x-4 border-4 border-gray-100 hover:shadow-lg transition-shadow cursor-pointer ">
              <div className="bg-blue-200 text-blue-700 text-2xl p-4 rounded-lg">
                <FaPen />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800 ">
                  Manage {location}
                </h4>
                <p className="text-gray-600  mt-1 text-sm">{editSubtitle}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OverviewCard;
