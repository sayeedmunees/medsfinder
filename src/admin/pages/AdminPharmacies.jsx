import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";
import { MdDelete, MdEdit, MdOutlineUnfoldMore } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import AddPharmacyForm from "../components/AddPharmacyForm";
import { toast, ToastContainer } from "react-toastify";

const itemsPerPage = 5;

const AdminPharmacies = () => {
  const [showAddPharmacy, setShowAddPharmacy] = useState(false);
  const [pharmacies, setPharmacies] = useState([]);
  const [searchKey, setSearchKey] = useState(""); // This acts as filters here
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPharmacy, setSelectedPharmacy] = useState(null);

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

  const deletePharmacy = async (id) => {
    try {
        const { deletePharmacyAPI } = await import("../../services/allAPI");
        const token = sessionStorage.getItem("token")
        const reqHeader = {
            "Authorization" : `Bearer ${token}`
        }
        const result = await deletePharmacyAPI(id,reqHeader)
        if(result.status===200){
            toast.success("Pharmacy Deleted Successfully")
            getAllPharmacies()
        }else{
            toast.warning(result.response.data)
        }
    } catch (error) {
        console.error("Error deleting pharmacy:", error);
        toast.error("Error deleting pharmacy");
    }
  }

  const handleDelete = (id) => {
    if(window.confirm("Are you sure you want to delete this pharmacy?")){
        deletePharmacy(id)
    }
  }

  const handleEdit = (pharmacy) => {
    setSelectedPharmacy(pharmacy)
    setShowAddPharmacy(true)
  }

  useEffect(() => {
    getAllPharmacies();
  }, [showAddPharmacy]);

  /* ---------- FILTER & PAGINATION LOGIC ---------- */
  const filteredPharmacies = pharmacies.filter((pharmacy) => {
    const query = searchKey.toLowerCase();
    return (
      pharmacy.pharmacyName?.toLowerCase().includes(query) ||
      pharmacy.pharmacyLocationName?.toLowerCase().includes(query) ||
      pharmacy.pharmacyStatus?.toLowerCase().includes(query)
    );
  });

  const totalPages = Math.ceil(filteredPharmacies.length / itemsPerPage);

  const paginatedPharmacies = filteredPharmacies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const start =
    filteredPharmacies.length === 0
      ? 0
      : (currentPage - 1) * itemsPerPage + 1;

  const end = Math.min(
    currentPage * itemsPerPage,
    filteredPharmacies.length
  );

  // Reset page when search changes
  useEffect(() => {
    setCurrentPage(1);
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
                    value={searchKey}
                    onChange={(e) => setSearchKey(e.target.value)}
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
                    {paginatedPharmacies.length > 0 ? (
                      paginatedPharmacies.map((pharmacy) => {
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
                            <button
                                onClick={()=>handleEdit(pharmacy)}
                                className="p-2 text-gray-500 hover:text-blue-500 rounded-full hover:bg-gray-100 "
                            >
                              <MdEdit className="text-2xl" />
                            </button>
                            <button
                                onClick={()=>handleDelete(pharmacy._id)}
                                className="p-2 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-100 "
                            >
                              <MdDelete className="text-2xl" />
                            </button>
                          </td>
                        </tr>
                      );
                    })
                    ) : (
                      <tr>
                        <td
                          colSpan="5"
                          className="p-6 text-center text-gray-500"
                        >
                          No pharmacies found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex flex-col lg:flex-row justify-between items-center">
                <p className="text-xs md:text-sm text-gray-500 ">
                  Showing {start} to {end} of {filteredPharmacies.length} entries
                </p>
                <div className="flex flex-col lg:flex-row mt-4 lg:mt-0 items-center gap-2 text-xs md:text-sm">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border border-gray-300  rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .slice(0, 5) // Just showing first 5 pages max for simplicity to match AdminMedicines style
                      .map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-3 py-1 border rounded-md ${
                            page === currentPage
                              ? "border-teal-600 bg-teal-500 text-white"
                              : "border-gray-300 text-gray-600 hover:bg-gray-100"
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                  </div>
                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.min(p + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
        {showAddPharmacy && (
          <AddPharmacyForm 
            showAddPharmacy={() => {
                setShowAddPharmacy(false);
                setSelectedPharmacy(null);
            }} 
            selectedPharmacy={selectedPharmacy}
          />
        )}
      </div>
      <ToastContainer theme="colored" position="top-center" autoClose={3000} />
    </>
  );
};

export default AdminPharmacies;
