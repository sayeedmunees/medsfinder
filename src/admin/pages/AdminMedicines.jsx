import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const AdminMedicines = () => {
  return (
    <>
      <div className="flex h-screen" id="root">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
        </div>
      </div>
    </>
  );
};

export default AdminMedicines;
