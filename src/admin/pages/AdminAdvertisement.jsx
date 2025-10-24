import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TotalCards from "../components/TotalCards";

const AdminAdvertisement = () => {
  return (
    <>
      <div className="flex h-screen" id="root">
        <Sidebar from="advertisement" />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header from="advertisements" />
          <main className="flex-1 p-6 md:p-12 bg-gray-100  overflow-y-auto">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <TotalCards icon="medication" count="12,501" item="Impressions" />
              <TotalCards icon="local_hospital" count="1532" item="Clicks" />
              <TotalCards icon="campaign" count="50" item="Ad Products" />
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default AdminAdvertisement;
