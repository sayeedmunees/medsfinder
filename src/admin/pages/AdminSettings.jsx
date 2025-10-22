import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AdminSettings = () => {
  return (
    <>
      <div className="flex h-screen" id="root">
        <Sidebar from="settings" />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header from="settings" />
        </div>
      </div>
    </>
  );
};

export default AdminSettings;
