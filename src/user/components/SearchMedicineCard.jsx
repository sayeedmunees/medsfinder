import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { toggleSavedMedicineAPI } from "../../services/allAPI";
import { serverURL } from "../../services/serverURL";
import { toast } from "react-toastify";

const SearchMedicineCard = ({ medicine }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (medicine.saved) {
      setIsSaved(true);
    }

    const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
    if (existingUser && existingUser.savedMedicines.includes(medicine._id)) {
      setIsSaved(true);
    }
  }, [medicine]);

  const handleSave = async (e) => {
    e.preventDefault();

    const token = sessionStorage.getItem("token");
    if (!token) {
      toast.warning("Please login to save medicines");
      return;
    }

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    const reqBody = { medicineId: medicine._id };

    try {
      const result = await toggleSavedMedicineAPI(reqBody, reqHeader);
      if (result.status === 200) {
        setIsSaved(!isSaved);
        // Update session storage
        const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
        if (existingUser) {
          if (isSaved) {
            existingUser.savedMedicines = existingUser.savedMedicines.filter(
              (mid) => mid !== medicine._id
            );
          } else {
            existingUser.savedMedicines.push(medicine._id);
          }
          sessionStorage.setItem("existingUser", JSON.stringify(existingUser));
        }
        toast.success(result.data);
      } else {
        toast.error(result.response.data);
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-start md:items-center hover:shadow-2xl transition duration-300 ease-in-out mb-6">
      <Link to={`/product/${medicine._id}`} className="shrink-0">
        <img
          alt={medicine.medicineName}
          className="w-32 h-32 object-contain rounded-md mb-4 md:mb-0 md:mr-6 cursor-pointer"
          src={
            medicine.uploadedImg
              ? `${serverURL}/upload/${medicine.uploadedImg}`
              : "https://via.placeholder.com/150"
          }
        />
      </Link>
      <div className="text-gray-800 grow">
        <Link to={`/product/${medicine._id}`}>
          <h2 className="text-xl md:text-3xl font-bold hover:text-teal-600 transition-colors cursor-pointer inline-block">
            {medicine.medicineName}
          </h2>
        </Link>
        <p className="text-xs md:text-lg text-gray-600 ">
          Generic: {medicine.genericName}
        </p>
        <div className="mt-4">
          <h4 className="text-sm md:text-lg font-semibold mb-2">
            Product Description
          </h4>
          <p className="text-xs md:text-lg text-gray-600 ">
            {medicine.description}
          </p>
        </div>
      </div>
      <button
        onClick={handleSave}
        className="ml-auto mt-4 md:mt-0 p-2 rounded-full self-start text-teal-500 text-xl hover:bg-gray-200 transition-colors"
      >
        {isSaved ? <FaBookmark /> : <FaRegBookmark />}
      </button>
    </div>
  );
};

export default SearchMedicineCard;
