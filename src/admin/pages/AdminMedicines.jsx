import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const AdminMedicines = () => {
  return (
    <>
      <div className="flex h-screen" id="root">
        <Sidebar from="medicine" />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header from="medicines"/>
        </div>
      </div>
    </>
  );
};

export default AdminMedicines;
