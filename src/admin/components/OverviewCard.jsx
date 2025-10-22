import React from "react";

const OverviewCard = ({
  location,
  addSubtitle,
  editSubtitle,
  deleteSubtitle,
}) => {
  return (
    <>
      <div className="mt-6" id="pharmaciesContent">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg flex items-start space-x-4 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 ">
            <div className="bg-teal-100  p-3 rounded-lg">
              <span className="material-icons text-teal-500">add</span>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 ">
                Add {location}
              </h4>
              <p className="text-gray-600  mt-1 text-sm">{addSubtitle}</p>
            </div>
          </div>
          <div className="bg-gray-50  p-6 rounded-lg flex items-start space-x-4 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 ">
            <div className="bg-blue-100  p-3 rounded-lg">
              <span className="material-icons text-blue-500">edit</span>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 ">
                Manage {location}
              </h4>
              <p className="text-gray-600  mt-1 text-sm">{editSubtitle}</p>
            </div>
          </div>
          <div className="bg-gray-50  p-6 rounded-lg flex items-start space-x-4 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 ">
            <div className="bg-red-100  p-3 rounded-lg">
              <span className="material-icons text-red-500">delete</span>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 ">
                Delete {location}
              </h4>
              <p className="text-gray-600 mt-1 text-sm">{deleteSubtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewCard;
