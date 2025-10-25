import React from "react";
import { FaClinicMedical } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { MdCampaign } from "react-icons/md";
import { RiMedicineBottleFill } from "react-icons/ri";
import { TbHandClick } from "react-icons/tb";

const TotalCards = ({ icon, count, item }) => {
  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow flex items-center">
        <div className="flex justify-center items-center bg-teal-200 text-teal-700 p-4 rounded-lg text-3xl">
          {icon == "medicine" && <GiMedicines />}
          {icon == "pharmacy" && <FaClinicMedical />}
          {icon == "ad" && <MdCampaign />}
          {icon == "click" && <TbHandClick />}
        </div>
        <div className="ml-4">
          <p className="text-3xl font-bold text-gray-800 ">{count}</p>
          <h3 className="text-sm font-medium text-gray-500 ">Total {item}</h3>
        </div>
      </div>
    </>
  );
};

export default TotalCards;
