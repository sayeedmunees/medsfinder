import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const AdminSettings = () => {
  const [openUsername, setOpenUsername] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  return (
    <>
      <div className="flex h-screen" id="root">
        <Sidebar from="settings" />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header from="settings" />
          <main className="flex-1 p-6 md:p-12 bg-gray-100 overflow-y-auto">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-800">
                Account Security Settings
              </h3>
              <div className="border-2 border-gray-200 rounded-lg mb-4">
                <button
                  onClick={() => setOpenUsername(!openUsername)}
                  className="w-full flex justify-between items-center p-4 focus:outline-none"
                >
                  <span className="text-lg font-medium text-gray-800">
                    Username
                  </span>
                  <span
                    className={`material-icons text-gray-600 transform transition-transform duration-300 ${
                      openUsername && "rotate-180"
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                <div
                  className={`px-4 overflow-hidden transition-all duration-400 ease-in-out  ${
                    openUsername ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  <div className="border-t border-gray-200 pt-4">
                    <div className="mb-4">
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        htmlFor="new-username"
                      >
                        New Username
                      </label>
                      <input
                        className="mt-1 block w-full p-2 rounded-md outline-none border border-gray-300 shadow-sm text-gray-800 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                        id="new-username"
                        name="new-username"
                        placeholder="Enter new username"
                        type="text"
                      />
                    </div>

                    <div className="flex justify-between items-center pb-4">
                      <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
                        Update Username
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-2 border-gray-200 rounded-lg mb-4">
                <button
                  className="w-full flex justify-between items-center p-4 focus:outline-none"
                  onClick={() => setOpenEmail(!openEmail)}
                >
                  <span className="text-lg font-medium text-gray-800 ">
                    Email Address
                  </span>
                  <span
                    className={`material-icons text-gray-600 transform transition-transform duration-300 ${
                      openEmail && "rotate-180"
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                <div
                  className={`px-4 overflow-hidden transition-all duration-400 ease-in-out  ${
                    openEmail ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  <div className="border-t border-gray-200 pt-4">
                    <div className="mb-4">
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        for="new-email"
                      >
                        New Email
                      </label>
                      <input
                        className="mt-1 p-2 block w-full rounded-md outline-none border-gray-300 shadow-sm text-gray-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                        id="new-email"
                        name="new-email"
                        placeholder="Enter new email address"
                        type="email"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
                        Update Email
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-lg">
                <button
                  className="w-full flex justify-between items-center p-4 focus:outline-none"
                  onclick="toggleAccordion('password')"
                >
                  <span className="text-lg font-medium text-gray-800">
                    Password
                  </span>
                  <span
                    className="material-icons text-gray-600 transform transition-transform duration-300"
                    id="password-arrow"
                  >
                    expand_more
                  </span>
                </button>
                <div className="px-4 pb-4" id="password-content">
                  <div className="border-t border-gray-200 pt-4">
                    <div className="mb-4">
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        for="current-password"
                      >
                        Current Password
                      </label>
                      <input
                        className="mt-1 p-2 block w-full outline-none rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-2 focus:ring-teal-500 text-gray-500 focus:ring-opacity-50"
                        id="current-password"
                        name="current-password"
                        placeholder="Enter current password"
                        type="password"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-sm font-medium text-gray-700  mb-1"
                        for="new-password"
                      >
                        New Password
                      </label>
                      <input
                        className="mt-1 p-2 block w-full outline-none rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-2 text-gray-500 focus:ring-teal-500 focus:ring-opacity-50 "
                        id="new-password"
                        name="new-password"
                        placeholder="Enter new password"
                        type="password"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1"
                        for="confirm-password"
                      >
                        Confirm New Password
                      </label>
                      <input
                        className="mt-1 p-2 block w-full outline-none rounded-md border-gray-300 shadow-sm text-gray-500  focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 "
                        id="confirm-password"
                        name="confirm-password"
                        placeholder="Confirm new password"
                        type="password"
                      />
                    </div>
                    <div className="flex justify-between items-center">
                      <button className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50">
                        Change Password
                      </button>
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

export default AdminSettings;
