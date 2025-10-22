import React from "react";

const TotalCards = ({icon, count, item}) => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow flex items-center">
        <div className="bg-teal-200 p-4 rounded-lg">
          <span className="material-icons text-teal-500 text-3xl">
            {icon}
          </span>
        </div>
        <div className="ml-4">
          <p className="text-3xl font-bold text-gray-800 ">{count}</p>
          <h3 className="text-sm font-medium text-gray-500 ">
            Total {item}
          </h3>
        </div>
      </div>
    </>
  );
};

export default TotalCards;
