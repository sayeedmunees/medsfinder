import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import OverviewCard from "../components/OverviewCard";
import TotalCards from "../components/TotalCards";

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
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <TotalCards icon="medication" count="1,250" item="Medicines" />
              <TotalCards icon="local_hospital" count="150" item="Pharmacies" />
              <TotalCards icon="campaign" count="50" item="Ad Products" />
            </section>

            <div className="bg-white rounded-lg shadow p-6">
              {/* tabs */}
              <div className="border-b border-gray-200 ">
                <nav aria-label="Tabs" className="-mb-px flex space-x-8">
                  <button
                    onClick={handlePharmacies}
                    className={
                      pharmacies
                        ? "tab-btn group inline-flex items-center py-4 px-1 border-b-2 border-teal-500 font-semibold text-teal-500"
                        : "tab-btn group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-teal-500 hover:border-teal-500/30 "
                    }
                  >
                    <span className="material-icons mr-2">local_hospital</span>
                    <span>Pharmacies</span>
                  </button>
                  <button
                    onClick={handleMedicines}
                    className={
                      medicines
                        ? "tab-btn group inline-flex items-center py-4 px-1 border-b-2 border-teal-500 font-semibold text-teal-500"
                        : "tab-btn group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-teal-500 hover:border-teal-500/30 "
                    }
                  >
                    <span className="material-icons mr-2">medication</span>
                    <span>Medicines</span>
                  </button>
                  <button
                    onClick={handleAdvertisements}
                    className={
                      advertisements
                        ? "tab-btn group inline-flex items-center py-4 px-1 border-b-2 border-teal-500 font-semibold text-teal-600"
                        : "tab-btn group inline-flex items-center py-4 px-1 border-b-2 border-transparent font-medium text-gray-500 hover:text-teal-500 hover:border-teal-500/30 "
                    }
                  >
                    <span className="material-icons mr-2">campaign</span>
                    <span>Advertisements</span>
                  </button>
                </nav>
              </div>
              {/* tab contents */}
              {pharmacies && (
                <OverviewCard
                  location="Pharmacy"
                  addSubtitle="Onboard a new pharmacy to the network."
                  editSubtitle="Edit details or update status."
                  deleteSubtitle="Remove a pharmacy from the platform."
                />
              )}

              {medicines && (
                <OverviewCard
                  location="Medicine"
                  addSubtitle="Add a new medicine to the database."
                  editSubtitle=" Update medicine information and stock."
                  deleteSubtitle="Remove a medicine from the database."
                />
              )}

              {advertisements && (
                <OverviewCard
                  location="Ad"
                  addSubtitle="Create a new ad product listing."
                  editSubtitle=" Edit existing advertisement details."
                  deleteSubtitle="Remove an advertisement from the list."
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
