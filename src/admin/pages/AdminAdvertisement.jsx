import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const AdminAdvertisement = () => {
  return (
    <>
      <div className="flex h-screen" id="root">
        <Sidebar from="advertisement" />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header from="advertisements"/>
        </div>
      </div>
    </>
  );
};

export default AdminAdvertisement;
