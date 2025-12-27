import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { addMedicineAPI, updateMedicineAPI } from "../../services/allAPI";
import { toast } from "react-toastify";
import { serverURL } from "../../services/serverURL";

const AddMedicineForm = ({ showAddMedicine, selectedMedicine }) => {
  const [token, setToken] = useState("");
  const [medicineDetails, setMedicineDetails] = useState({
    medicineName: "",
    genericName: "",
    brandName: "",
    category: "",
    description: "",
    price: "",
    uploadedImg: "",
  });

  const [preview, setPreview] = useState("");

  const handleUploadImage = (e) => {
    const file = e.target.files[0];
    setMedicineDetails({ ...medicineDetails, uploadedImg: file });
    setPreview(URL.createObjectURL(file));
  };

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      setToken(token);
    }
    if (selectedMedicine) {
      setMedicineDetails({
        medicineName: selectedMedicine.medicineName,
        genericName: selectedMedicine.genericName,
        brandName: selectedMedicine.brandName,
        category: selectedMedicine.category,
        description: selectedMedicine.description,
        price: selectedMedicine.price,
        uploadedImg: selectedMedicine.uploadedImg,
      });
      setPreview(`${serverURL}/upload/${selectedMedicine.uploadedImg}`);
    }
  }, [selectedMedicine]);

  const handleSubmit = async () => {
    const {
      medicineName,
      genericName,
      brandName,
      category,
      description,
      price,
      uploadedImg,
    } = medicineDetails;

    if (
      !medicineName ||
      !genericName ||
      !brandName ||
      !category ||
      !description ||
      !price ||
      !uploadedImg
    ) {
      toast.info("Please fill the form completely");
    } else {
      const reqHeader = { Authorization: `Bearer ${token}` };
      const reqBody = new FormData();

      reqBody.append("medicineName", medicineName);
      reqBody.append("genericName", genericName);
      reqBody.append("brandName", brandName);
      reqBody.append("category", category);
      reqBody.append("description", description);
      reqBody.append("price", price);
      reqBody.append("uploadedImg", uploadedImg);

      let result;
      if (selectedMedicine) {
        // Edit Mode
        if (preview) {
            const reqHeader = {
            "Content-Type": "multipart/form-data",
             Authorization: `Bearer ${token}`,
            };
            result = await updateMedicineAPI(
            selectedMedicine._id,
            reqBody,
            reqHeader
            );
        } else {
            const reqHeader = {
                "Content-Type": "application/json",
                 Authorization: `Bearer ${token}`,
            };
            result = await updateMedicineAPI(
            selectedMedicine._id,
            reqBody,
            reqHeader
            );
        }
        
      } else {
        // Add Mode
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        };
        result = await addMedicineAPI(reqBody, reqHeader);
      }

      if (result.status === 200) {
        toast.success(
          selectedMedicine
            ? "Medicine Updated Successfully"
            : "Medicine Added Successfully"
        );
        setTimeout(() => {
          showAddMedicine();
        }, 2000);
      } else {
        toast.error(result.response?.data || "Something Went Wrong");
      }
    }
  };

  return (
    <>
      <div className="hidden md:flex fixed top-0 left-0 w-full h-full bg-black/70 justify-center items-center z-100">
        <div className="bg-white border w-[90%] max-w-[800px] p-8 shadow rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 ">
              {selectedMedicine ? "Edit Medicine" : "Add New Medicine"}
            </h3>
            <button onClick={showAddMedicine} className="text-2xl">
              <IoMdClose />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="medicine-name"
              >
                Medicine Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                id="medicine-name"
                value={medicineDetails.medicineName}
                onChange={(e) =>
                  setMedicineDetails({
                    ...medicineDetails,
                    medicineName: e.target.value,
                  })
                }
                placeholder="Type Medicine Name"
                type="text"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="medicine-generic-name"
              >
                Generic Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                id="medicine-generic-name"
                value={medicineDetails.genericName}
                onChange={(e) =>
                  setMedicineDetails({
                    ...medicineDetails,
                    genericName: e.target.value,
                  })
                }
                placeholder="Type Medicine Generic Name"
                type="text"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="medicine-brand-name"
              >
                Brand Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                id="medicine-brand-name"
                value={medicineDetails.brandName}
                onChange={(e) =>
                  setMedicineDetails({
                    ...medicineDetails,
                    brandName: e.target.value,
                  })
                }
                placeholder="Type Medicine Brand Name"
                type="text"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="product-category"
              >
                Category
              </label>

              <select
                id="product-category"
                className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={medicineDetails.category}
                onChange={(e) =>
                  setMedicineDetails({
                    ...medicineDetails,
                    category: e.target.value,
                  })
                }>
                <option value="pain-relief">Pain Relief</option>
                <option value="diabetes">Diabetes</option>
                <option value="cold-cough">Cold & Cough</option>
                <option value="eye-care">Eye Care</option>
                <option value="heart-care">Heart Care</option>
                <option value="kidney-care">Kidney Care</option>
                <option value="skin-care">Skin Care</option>
                <option value="digestive-health">Digestive Health</option>
                <option value="vitamins-supplements">
                  Vitamins & Supplements
                </option>
                <option value="antibiotics">Antibiotics</option>
                <option value="first-aid">First Aid</option>
                <option value="baby-care">Baby Care</option>
                <option value="women-care">Women's Care</option>
                <option value="men-care">Men's Care</option>
                <option value="mental-wellness">Mental Wellness</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="medicine-description"
              >
                Medicine Description
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none h-20"
                id="medicine-description"
                value={medicineDetails.description}
                onChange={(e) =>
                  setMedicineDetails({
                    ...medicineDetails,
                    description: e.target.value,
                  })
                }
                placeholder="A description of the medicine..."
              ></textarea>
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="product-price"
              >
                Price
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                id="product-price"
                value={medicineDetails.price}
                onChange={(e) =>
                  setMedicineDetails({
                    ...medicineDetails,
                    price: e.target.value,
                  })
                }
                placeholder="e.g., 7"
                step="0.5"
                type="number"
              />
            </div>

            <div className="md:col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="medicine-image"
              >
                Medicine Image
              </label>
              <input
                className="block w-full p-2 text-gray-700 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 placeholder-gray-400 focus:outline-none"
                id="medicine-image"
                onChange={(e) => handleUploadImage(e)}
                type="file"
              />
              <p className="mt-1 text-sm text-gray-500">
                PNG or JPG(MAX. 800x400px).
              </p>
            </div>
            <div className="md:col-span-2 flex justify-end mt-4">
              <button
                onClick={showAddMedicine}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mr-2"
                type="button"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg"
                type="button"
              >
                Save Product
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMedicineForm;
