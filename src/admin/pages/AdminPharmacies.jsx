import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";
import { MdDelete, MdEdit, MdOutlineUnfoldMore } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import AddPharmacyForm from "../components/AddPharmacyForm";

const AdminPharmacies = () => {
  const [showAddPharmacy, setShowAddPharmacy] = useState(false);
  const [pharmacies, setPharmacies] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const getAllPharmacies = async () => {
    try {
      const { getAllPharmaciesAPI } = await import("../../services/allAPI");
      const result = await getAllPharmaciesAPI();
      if (result.status === 200) {
        setPharmacies(result.data);
      }
    } catch (error) {
      console.error("Error fetching pharmacies:", error);
    }
  };

  useEffect(() => {
    getAllPharmacies();
  }, [showAddPharmacy]);

  useEffect(() => {
    getAllPharmacies();
  }, [searchKey]);

  return (
    <>
      <div className="flex h-screen" id="root">
        <Sidebar from="pharmacy" />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header from="pharmacies" />
          <main className="flex-1 p-6 md:p-12 bg-gray-100  overflow-y-auto">
            <div className="md:hidden bg-white rounded-lg shadow p-6 mb-2">
              <h3 className="text-sm font-medium text-red-500 ">
                Use a bigger screen for better experience.
              </h3>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                <div className="relative w-full lg:w-1/3 mb-4 lg:mb-0">
                  <input
                    className="w-full pl-2 pr-4 py-2 border placeholder:text-white md:placeholder:text-gray-500 border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs md:text-base"
                    placeholder="Search by name, location..."
                    type="text"
                  />
                  <FaMagnifyingGlass className="text-xl absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>
                <button
                  className="flex items-center font-semibold justify-center px-4 py-2 bg-teal-600 text-sm md:text-base text-white rounded-lg shadow-md hover:bg-teal-700 transition-colors"
                  onClick={() => setShowAddPharmacy(true)}
                >
                  <FaPlus className=" mr-2" />
                  Add New Pharmacy
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs md:text-sm lg:text-base">
                  <thead>
                    <tr className="bg-gray-50 ">
                      <th className="p-4 font-semibold text-gray-600">
                        <button className="flex items-center gap-1">
                          Name
                          <MdOutlineUnfoldMore className="text-2xl" />
                        </button>
                      </th>
                      <th className="p-4 font-semibold text-gray-600 ">
                        <button className="flex items-center gap-1">
                          Location
                          <MdOutlineUnfoldMore className="text-2xl" />
                        </button>
                      </th>
                      <th className="p-4 font-semibold text-gray-600 ">
                        Contact
                      </th>
                      <th className="p-4 font-semibold text-gray-600 ">
                        Status
                      </th>
                      <th className="p-4 font-semibold text-gray-600 ">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 ">
                    {pharmacies.map((pharmacy) => {
                      return (
                        <tr key={pharmacy._id}>
                          <td className="p-4 text-gray-800 ">
                            {pharmacy.pharmacyName}
                          </td>
                          <td className="p-4 text-gray-600 ">
                            {pharmacy.pharmacyLocationName}
                          </td>
                          <td className="p-4 text-gray-600 ">
                            {pharmacy.pharmacyContactNumber}
                          </td>
                          <td className="p-4">
                            {pharmacy.pharmacyStatus === "Active" ? (
                              <span className="px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800 ">
                                Active
                              </span>
                            ) : (
                              <span className="px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-800">
                                Inactive
                              </span>
                            )}
                          </td>
                          <td className="p-4 flex space-x-2">
                            <button className="p-2 text-gray-500 hover:text-blue-500 rounded-full hover:bg-gray-100 ">
                              <MdEdit className="text-2xl" />
                            </button>
                            <button className="p-2 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-100 ">
                              <MdDelete className="text-2xl" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex flex-col lg:flex-row justify-between items-center">
                <p className="text-xs md:text-sm text-gray-500 ">
                  Showing 1 to 5 of 150 entries
                </p>
                <div className="flex flex-col lg:flex-row mt-4 lg:mt-0 items-center gap-2 text-xs md:text-sm">
                  <button className="px-3 py-1 border border-gray-300  rounded-md text-gray-600 hover:bg-gray-100 ">
                    Previous
                  </button>
                  <div className="flex gap-2">
                    <button className="px-3 py-1 border border-teal-600 bg-teal-500 text-white rounded-md">
                      1
                    </button>
                    <button className="px-3 py-1 border border-gray-300  rounded-md text-gray-600  hover:bg-gray-100 ">
                      2
                    </button>
                    <button className="px-3 py-1 border border-gray-300  rounded-md text-gray-600  hover:bg-gray-100 ">
                      3
                    </button>
                    <span className="text-gray-500">...</span>
                    <button className="px-3 py-1 border border-gray-300  rounded-md text-gray-600  hover:bg-gray-100">
                      30
                    </button>
                  </div>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 ">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
        {showAddPharmacy && (
          <AddPharmacyForm showAddPharmacy={() => setShowAddPharmacy(false)} />
        )}
      </div>
    </>
  );
};

export default AdminPharmacies;
