import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import OverviewCard from "../components/OverviewCard";
import TotalCards from "../components/TotalCards";
import { FaClinicMedical } from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { MdCampaign } from "react-icons/md";

const AdminDashboard = () => {
  const [pharmacies, setPharmacies] = useState(true);
  const [medicines, setMedicines] = useState(false);
  const [advertisements, setAdvertisements] = useState(false);

  const handlePharmacies = () => {
    setPharmacies(true);
    setMedicines(false);
    setAdvertisements(false);
  };

  const handleMedicines = () => {
    setMedicines(true);
    setPharmacies(false);
    setAdvertisements(false);
  };

  const handleAdvertisements = () => {
    setAdvertisements(true);
    setPharmacies(false);
    setMedicines(false);
  };

  return (
    <>
      <div className="flex h-screen" id="root">
        <Sidebar from="dashboard" />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header from="Overview" />
          <main className="flex-1 p-6 md:p-12 bg-gray-100  overflow-y-auto">
            <div className="md:hidden bg-white rounded-lg shadow p-6 mb-2">
              <h3 className="text-sm font-medium text-red-500 ">
                Use a bigger screen for better experience.
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-6 mb-2 md:mb-8">
              <TotalCards icon="medicine" count="1,250" item="Medicines" />
              <TotalCards icon="pharmacy" count="150" item="Pharmacies" />
              <TotalCards icon="ad" count="50" item="Ad Products" />
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              {/* tabs */}
              <div className="border-b border-gray-200 ">
                <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                  <button
                    onClick={handlePharmacies}
                    className={
                      pharmacies
                        ? "tab-btn group inline-flex items-center py-4 px-1 border-b-2 border-teal-600 font-semibold text-teal-600"
                        : "tab-btn group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-teal-600 hover:border-teal-500/30 "
                    }
                  >
                    <FaClinicMedical className="text-xl mr-2" />
                    <span className="hidden lg:block">Pharmacies</span>
                  </button>
                  <button
                    onClick={handleMedicines}
                    className={
                      medicines
                        ? "tab-btn group inline-flex items-center py-4 px-1 border-b-2 border-teal-600 font-semibold text-teal-600"
                        : "tab-btn group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-teal-600 hover:border-teal-600/30 "
                    }
                  >
                    <GiMedicines className="text-xl mr-2" />
                    <span className="hidden lg:block">Medicines</span>
                  </button>
                  <button
                    onClick={handleAdvertisements}
                    className={
                      advertisements
                        ? "tab-btn group inline-flex items-center py-4 px-1 border-b-2 border-teal-600 font-semibold text-teal-600"
                        : "tab-btn group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-teal-500 hover:border-teal-600/30 "
                    }
                  >
                    <MdCampaign className="text-xl mr-2" />
                    <span className="hidden lg:block">Advertisements</span>
                  </button>
                </nav>
              </div>
              {/* tab contents */}
              {pharmacies && (
                <OverviewCard
                  location="Pharmacy"
                  addSubtitle="Onboard a new pharmacy to the network."
                  editSubtitle="Edit or manage details or update status."
                  path="admin-pharmacies"
                />
              )}

              {medicines && (
                <OverviewCard
                  location="Medicine"
                  addSubtitle="Add a new medicine to the database."
                  editSubtitle=" Update medicine information and stock."
                  path="admin-medicines"
                />
              )}

              {advertisements && (
                <OverviewCard
                  location="Ad"
                  addSubtitle="Create a new ad product listing."
                  editSubtitle=" Edit existing advertisement details."
                  path="admin-advertisement"
                />
              )}
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
