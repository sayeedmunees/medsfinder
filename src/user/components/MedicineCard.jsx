import React, { useEffect, useState } from "react";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";
import { serverURL } from "../../services/serverURL";
import { toggleSavedMedicineAPI } from "../../services/allAPI";
import { toast } from "react-toastify";

const MedicineCard = ({
  id,
  title,
  brand,
  imageURL,
  onToggle,
  showToast = true,
}) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
    if (existingUser && existingUser.savedMedicines.includes(id)) {
      setIsSaved(true);
    }
  }, [id]);

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
    const reqBody = { medicineId: id };

    try {
      const result = await toggleSavedMedicineAPI(reqBody, reqHeader);
      if (result.status === 200) {
        setIsSaved(!isSaved);
        // Update session storage
        const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
        if (existingUser) {
          if (isSaved) {
            existingUser.savedMedicines = existingUser.savedMedicines.filter(
              (mid) => mid !== id
            );
          } else {
            existingUser.savedMedicines.push(id);
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
    <Link to={`/product/${id}`}>
      <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-between transition-transform transform hover:scale-105 hover:shadow-xl">
        <img
          alt={title}
          className="w-auto h-60 object-cover rounded-md mb-4"
          src={`${serverURL}/upload/${imageURL}`}
        />

        <div className="text-center">
          <p className="font-semibold text-gray-800">{title}</p>
          <p className="text-sm text-gray-500">{brand}</p>
        </div>

        <button
          onClick={handleSave}
          className="mt-4 p-2 rounded-full hover:bg-gray-200 text-teal-600 text-xl"
        >
          {isSaved ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>
    </Link>
  );
};

export default MedicineCard;
