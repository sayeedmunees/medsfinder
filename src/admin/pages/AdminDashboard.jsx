import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const AdminDashboard = () => {
  return (
    <>
      <div className="flex h-screen" id="root">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 p-6 md:p-12 bg-background-light dark:bg-background-dark overflow-y-auto">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow flex items-center">
                <div className="bg-teal-100 dark:bg-teal-700 p-4 rounded-lg">
                  <span className="material-icons text-primary text-3xl">
                    medication
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">
                    1,250
                  </p>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Total Medicines
                  </h3>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow flex items-center">
                <div className="bg-teal-100 dark:bg-teal-700 p-4 rounded-lg">
                  <span className="material-icons text-primary text-3xl">
                    local_hospital
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">
                    150
                  </p>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Total Pharmacies
                  </h3>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow flex items-center">
                <div className="bg-teal-100 dark:bg-teal-700 p-4 rounded-lg">
                  <span className="material-icons text-primary text-3xl">
                    campaign
                  </span>
                </div>
                <div className="ml-4">
                  <p className="text-3xl font-bold text-gray-800 dark:text-white">
                    50
                  </p>
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Ad Products
                  </h3>
                </div>
              </div>
            </section>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <div className="border-b border-gray-200 dark:border-gray-700">
                <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                  <button className="tab-btn active-tab group inline-flex items-center py-4 px-1 border-b-2 border-primary font-semibold text-primary">
                    <span className="material-icons mr-2">local_hospital</span>
                    <span>Pharmacies</span>
                  </button>
                  <button className="tab-btn group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-primary hover:border-primary/30 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600">
                    <span className="material-icons mr-2">medication</span>
                    <span>Medicines</span>
                  </button>
                  <button className="tab-btn group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-primary hover:border-primary/30 dark:text-gray-400 dark:hover:text-gray-300 dark:hover:border-gray-600">
                    <span className="material-icons mr-2">campaign</span>
                    <span>Advertisements</span>
                  </button>
                </nav>
              </div>
              <div className="tab-content active mt-6" id="pharmaciesContent">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg flex items-start space-x-4 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 dark:border-gray-700">
                    <div className="bg-teal-100 dark:bg-teal-800 p-3 rounded-lg">
                      <span className="material-icons text-primary">add</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                        Add Pharmacy
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">
                        Onboard a new pharmacy to the network.
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg flex items-start space-x-4 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 dark:border-gray-700">
                    <div className="bg-blue-100 dark:bg-blue-800 p-3 rounded-lg">
                      <span className="material-icons text-blue-500">edit</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                        Manage Pharmacies
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">
                        Edit details or update status.
                      </p>
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg flex items-start space-x-4 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200 dark:border-gray-700">
                    <div className="bg-red-100 dark:bg-red-800 p-3 rounded-lg">
                      <span className="material-icons text-red-500">
                        delete
                      </span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
                        Delete Pharmacy
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 mt-1 text-sm">
                        Remove a pharmacy from the platform.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
