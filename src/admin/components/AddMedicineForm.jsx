import React from "react";
import { IoMdClose } from "react-icons/io";

const AddMedicineForm = ({ showAddMedicine }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center z-100">
        <div className="bg-white border w-[90%] max-w-[800px] p-8 shadow rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 ">
              Add New Medicine
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                id="product-category"
              >
                <option>Pain Relief</option>
                <option>Diabities</option>
                <option>Cold & Cough</option>
                <option>Eye Care</option>
                <option>Heart Care</option>
                <option>Kidney Care</option>
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
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none h-32"
                id="medicine-description"
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
                className="block w-full p-2 text-gray-700  border border-gray-300 rounded-lg cursor-pointer bg-gray-50 placeholder-gray-400 focus:outline-none"
                id="medicine-image"
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
