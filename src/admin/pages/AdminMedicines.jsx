import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { FaPlus } from "react-icons/fa";
import { MdDelete, MdEdit, MdOutlineUnfoldMore } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import AddMedicineForm from "../components/AddMedicineForm";
import { getAllMedicinesAPI, deleteMedicineAPI } from "../../services/allAPI";
import { toast, ToastContainer } from "react-toastify";

const itemsPerPage = 5;

const AdminMedicines = () => {
  const [showAddMedicine, setShowAddMedicine] = useState(false);
  const [adminMedicines, setAdminMedicines] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMedicine, setSelectedMedicine] = useState(null);

  const getAllMedicines = async () => {
    const result = await getAllMedicinesAPI();
    if (result.status === 200) {
      setAdminMedicines(result.data);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this medicine?")) {
        const token = sessionStorage.getItem("token");
        const reqHeader = { Authorization: `Bearer ${token}` };
        const result = await deleteMedicineAPI(id, reqHeader);
        if (result.status === 200) {
            toast.success("Medicine deleted successfully");
            getAllMedicines();
        } else {
            toast.error("Failed to delete medicine");
        }
    }
  };

  const handleEdit = (medicine) => {
    setSelectedMedicine(medicine);
    setShowAddMedicine(true);
  };

  const handleClose = () => {
    setShowAddMedicine(false);
    setSelectedMedicine(null);
  };

  useEffect(() => {
    setCurrentPage(1);
    getAllMedicines();
  }, [showAddMedicine]);

  /* ---------- SEARCH (FILTER FIRST) ---------- */
  const filteredMedicines = adminMedicines.filter((medicine) => {
    const query = searchTerm.toLowerCase();

    return (
      medicine.medicineName?.toLowerCase().includes(query) ||
      medicine.brandName?.toLowerCase().includes(query) ||
      medicine.genericName?.toLowerCase().includes(query)
    );
  });

  /* ---------- PAGINATION (AFTER FILTER) ---------- */
  const totalPages = Math.ceil(
    filteredMedicines.length / itemsPerPage
  );

  const paginatedMedicines = filteredMedicines.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const start =
    filteredMedicines.length === 0
      ? 0
      : (currentPage - 1) * itemsPerPage + 1;

  const end = Math.min(
    currentPage * itemsPerPage,
    filteredMedicines.length
  );

  return (
    <>
      <div className="flex h-screen" id="root">
        <Sidebar from="medicine" />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header from="medicines" />
          <main className="flex-1 p-6 md:p-12 bg-gray-100 overflow-y-auto">

            <div className="md:hidden bg-white rounded-lg shadow p-6 mb-2">
              <h3 className="text-sm font-medium text-red-500">
                Use a bigger screen for better experience.
              </h3>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
                <div className="relative w-full lg:w-1/3 mb-4 lg:mb-0">
                  <input
                    className="w-full pl-2 pr-4 py-2 border placeholder:text-white md:placeholder:text-gray-500 border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs md:text-base"
                    placeholder="Search by name, brand, generic..."
                    type="text"
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                  <FaMagnifyingGlass className="text-xl absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
                </div>

                <button
                  className="flex items-center font-semibold justify-center px-4 py-2 bg-teal-600 text-sm md:text-base text-white rounded-lg shadow-md hover:bg-teal-700 transition-colors"
                  onClick={() => setShowAddMedicine(true)}
                >
                  <FaPlus className="mr-2" />
                  Add New Medicine
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs md:text-sm lg:text-base">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="p-4 font-semibold text-gray-600">
                        <button className="flex items-center gap-1">
                          Name <MdOutlineUnfoldMore className="text-2xl" />
                        </button>
                      </th>
                      <th className="p-4 font-semibold text-gray-600">
                        <button className="flex items-center gap-1">
                          Brand <MdOutlineUnfoldMore className="text-2xl" />
                        </button>
                      </th>
                      <th className="p-4 font-semibold text-gray-600">
                        Generic
                      </th>
                      <th className="p-4 font-semibold text-gray-600">
                        Description
                      </th>
                      <th className="p-4 font-semibold text-gray-600">
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-200">
                    {paginatedMedicines.length > 0 ? (
                      paginatedMedicines.map((medicine) => (
                        <tr key={medicine._id}>
                          <td className="p-4 text-gray-800">
                            {medicine.medicineName}
                          </td>
                          <td className="p-4 text-gray-600">
                            {medicine.brandName}
                          </td>
                          <td className="p-4 text-gray-600">
                            {medicine.genericName}
                          </td>
                          <td className="p-4">
                            <div className="max-w-sm max-h-12 overflow-y-auto wrap-break-word text-gray-600">
                              {medicine.description}
                            </div>
                          </td>
                          <td className="p-4 flex space-x-2">
                            <button
                                onClick={() => handleEdit(medicine)}
                                className="p-2 text-gray-500 hover:text-blue-500 rounded-full hover:bg-gray-100"
                            >
                              <MdEdit className="text-2xl" />
                            </button>
                            <button
                                onClick={() => handleDelete(medicine._id)}
                                className="p-2 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-100"
                            >
                              <MdDelete className="text-2xl" />
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td
                          colSpan="5"
                          className="p-6 text-center text-gray-500"
                        >
                          No medicines found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="mt-6 flex flex-col lg:flex-row justify-between items-center">
                <p className="text-xs md:text-sm text-gray-500">
                  Showing {start} to {end} of {filteredMedicines.length} entries
                </p>

                <div className="flex flex-col lg:flex-row mt-4 lg:mt-0 items-center gap-2 text-xs md:text-sm">
                  <button
                    onClick={() =>
                      setCurrentPage((p) => Math.max(p - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                  >
                    Previous
                  </button>

                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .slice(0, 5)
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
                      setCurrentPage((p) =>
                        Math.min(p + 1, totalPages)
                      )
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

        {showAddMedicine && (
          <AddMedicineForm
            showAddMedicine={handleClose}
            selectedMedicine={selectedMedicine}
          />
        )}
      </div>
      <ToastContainer theme="colored" position="top-center" autoClose={3000} />
    </>
  );
};

export default AdminMedicines;
