import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const AdminPharmacies = () => {
  return (
    <>
      <div className="flex h-screen" id="root">
        <Sidebar from="pharmacy" />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header from="pharmacies" />
          <main className="flex-1 p-6 md:p-12 bg-gray-100  overflow-y-auto">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div className="flex items-center px-2  py-2 border border-gray-300  rounded-lg bg-white w-full md:w-1/3 mb-4 md:mb-0">
                  <input
                    className="w-full border-0 text-gray-800  rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Search by name, location..."
                    type="text"
                  />
                  <span className="material-icons px-2 text-gray-400">
                    search
                  </span>
                </div>
                <button className="flex items-center justify-center px-4 py-2 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition-colors">
                  <span className="material-icons mr-2">add</span>
                  Add New Pharmacy
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 ">
                      <th className="p-4 font-semibold text-gray-600">
                        <button className="flex items-center">
                          Name
                          <span className="material-icons text-sm ml-1">
                            unfold_more
                          </span>
                        </button>
                      </th>
                      <th className="p-4 font-semibold text-gray-600 ">
                        <button className="flex items-center">
                          Location
                          <span className="material-icons text-sm ml-1">
                            unfold_more
                          </span>
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
                    <tr>
                      <td className="p-4 text-gray-800 ">Wellness Pharmacy</td>
                      <td className="p-4 text-gray-600 ">
                        123 Main St, Anytown
                      </td>
                      <td className="p-4 text-gray-600 ">(123) 456-7890</td>
                      <td className="p-4">
                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800 ">
                          Active
                        </span>
                      </td>
                      <td className="p-4 flex space-x-2">
                        <button className="p-2 text-gray-500 hover:text-blue-500 rounded-full hover:bg-gray-100 ">
                          <span className="material-icons">edit</span>
                        </button>
                        <button className="p-2 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-100 ">
                          <span className="material-icons">delete</span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-800">HealthFirst Drugs</td>
                      <td className="p-4 text-gray-600">
                        456 Oak Ave, Sometown
                      </td>
                      <td className="p-4 text-gray-600">(987) 654-3210</td>
                      <td className="p-4">
                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800 ">
                          Active
                        </span>
                      </td>
                      <td className="p-4 flex space-x-2">
                        <button className="p-2 text-gray-500 hover:text-blue-500 rounded-full hover:bg-gray-100 ">
                          <span className="material-icons">edit</span>
                        </button>
                        <button className="p-2 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-100 ">
                          <span className="material-icons">delete</span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-800 ">CarePlus Pharmacy</td>
                      <td className="p-4 text-gray-600 ">
                        789 Pine Ln, Otherville
                      </td>
                      <td className="p-4 text-gray-600 ">(555) 123-4567</td>
                      <td className="p-4">
                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-yellow-100 text-yellow-800 ">
                          Pending
                        </span>
                      </td>
                      <td className="p-4 flex space-x-2">
                        <button className="p-2 text-gray-500 hover:text-blue-500 rounded-full hover:bg-gray-100 ">
                          <span className="material-icons">edit</span>
                        </button>
                        <button className="p-2 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-100 ">
                          <span className="material-icons">delete</span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-800 ">
                        City Central Pharmacy
                      </td>
                      <td className="p-4 text-gray-600 ">
                        101 Center Plaza, Metropolis
                      </td>
                      <td className="p-4 text-gray-600 ">(111) 222-3333</td>
                      <td className="p-4">
                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-green-100 text-green-800 ">
                          Active
                        </span>
                      </td>
                      <td className="p-4 flex space-x-2">
                        <button className="p-2 text-gray-500 hover:text-blue-500 rounded-full hover:bg-gray-100 ">
                          <span className="material-icons">edit</span>
                        </button>
                        <button className="p-2 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-100 ">
                          <span className="material-icons">delete</span>
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td className="p-4 text-gray-800 ">
                        Suburban Health Mart
                      </td>
                      <td className="p-4 text-gray-600 ">
                        222 Suburbia Rd, Greendale
                      </td>
                      <td className="p-4 text-gray-600 ">(444) 555-6666</td>
                      <td className="p-4">
                        <span className="px-3 py-1 text-sm font-medium rounded-full bg-red-100 text-red-800">
                          Inactive
                        </span>
                      </td>
                      <td className="p-4 flex space-x-2">
                        <button className="p-2 text-gray-500 hover:text-blue-500 rounded-full hover:bg-gray-100 ">
                          <span className="material-icons">edit</span>
                        </button>
                        <button className="p-2 text-gray-500 hover:text-red-500 rounded-full hover:bg-gray-100 ">
                          <span className="material-icons">delete</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 flex justify-between items-center">
                <p className="text-sm text-gray-500 ">
                  Showing 1 to 5 of 150 entries
                </p>
                <div className="flex items-center space-x-2">
                  <button className="px-3 py-1 border border-gray-300  rounded-md text-gray-600 hover:bg-gray-100 ">
                    Previous
                  </button>
                  <button className="px-3 py-1 border border-teal-500 bg-teal-500 text-white rounded-md">
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
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-100 ">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminPharmacies;
