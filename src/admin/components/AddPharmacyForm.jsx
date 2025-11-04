import React from "react";
import { IoMdClose } from "react-icons/io";

const AddPharmacyForm = ({ showAddPharmacy }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center z-100">
        <div className="bg-white border w-[90%] max-w-[800px] p-8 shadow rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 ">
              Add New Pharmacy
            </h3>
            <button onClick={showAddPharmacy} className="text-2xl">
              <IoMdClose />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pharmacy-name"
              >
                Pharmacy Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                id="pharmacy-name"
                placeholder="Type Pharmacy name"
                type="text"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pharmacy-location"
              >
                Location
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                id="pharmacy-location"
              >
                <option value="Edapally">Edapally</option>
                <option value="Kakkanad">Kakkanad</option>
                <option value="Kalamassery">Kalamassery</option>
                <option value="Palarivattam">Palarivattam</option>
              </select>
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pharmacy-contact"
              >
                Contact
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                id="pharmacy-contact"
                placeholder="Type Phone Number"
                type="tel"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pharmacy-status"
              >
                Status
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                id="pharmacy-status"
              >
                <option className="text-green-600" value="Edapally">
                  Active
                </option>
                <option className="text-red-600" value="Kakkanad">
                  Inactive
                </option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pharmacy-link"
              >
                Map Link
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                id="pharmacy-link"
                placeholder="Type Map Link"
                type="url"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pharmacy-lattitude"
              >
                Lattitude
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                id="pharmacy-lattitude"
                placeholder="Type Lattitude"
                step="1"
                type="number"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="pharmacy-longitude"
              >
                Longitude
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-800 placeholder:text-gray-400 focus:outline-none"
                id="pharmacy-longitude"
                placeholder="Type Longitude"
                step="1"
                type="number"
              />
            </div>
            <div className="md:col-span-2">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Pharmacy-image"
              >
                Pharmacy Image
              </label>
              <input
                className="block w-full p-2 text-gray-700  border border-gray-300 rounded-lg cursor-pointer bg-gray-50 placeholder-gray-400 focus:outline-none"
                id="Pharmacy-image"
                type="file"
              />
              <p className="mt-1 text-sm text-gray-500">
                PNG or JPG(MAX. 800x400px).
              </p>
            </div>
            <div className="md:col-span-2 flex justify-end mt-4">
              <button
                onClick={showAddPharmacy}
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

export default AddPharmacyForm;
