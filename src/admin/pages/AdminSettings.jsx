import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { MdExpandMore } from "react-icons/md";
import { getUserProfileAPI, updateAdminProfileAPI } from "../../services/allAPI";
import { toast } from "react-toastify";

const AdminSettings = () => {
  const [openUsername, setOpenUsername] = useState(false);
  const [openEmail, setOpenEmail] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  const [adminData, setAdminData] = useState({
    username: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const getAdminProfile = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const result = await getUserProfileAPI(reqHeader);
        if (result.status === 200) {
          setAdminData((prev) => ({
            ...prev,
            username: result.data.username,
            email: result.data.email,
          }));
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getAdminProfile();
  }, []);

  const handleUpdateProfile = async (type) => {
    const { username, newPassword, confirmPassword } = adminData;

    if (type === "password") {
      if (!newPassword || !confirmPassword) {
        toast.warning("Please fill password fields");
        return;
      }
      if (newPassword !== confirmPassword) {
        toast.error("Passwords do not match!");
        return;
      }
    }

    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };

      const reqBody = {
        username,
        password: type === "password" ? newPassword : "",
      };

      try {
        const result = await updateAdminProfileAPI(reqBody, reqHeader);
        if (result.status === 200) {
          toast.success(
            type === "username"
              ? "Username updated successfully"
              : "Password updated successfully"
          );

          // Update sessionStorage and notify other components
          const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
          if (existingUser) {
            existingUser.username = result.data.username;
            sessionStorage.setItem("existingUser", JSON.stringify(existingUser));
            window.dispatchEvent(new Event("adminProfileUpdated"));
          }

          if (type === "password") {
            setAdminData((prev) => ({
              ...prev,
              newPassword: "",
              confirmPassword: "",
            }));
            setOpenPassword(false);
          } else {
            setOpenUsername(false);
          }
          getAdminProfile();
        } else {
          toast.error("Update failed");
        }
      } catch (error) {
        console.log(error);
        toast.error("An error occurred");
      }
    }
  };

  return (
    <>
      <div className="flex h-screen" id="root">
        <Sidebar from="settings" />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header from="settings" />
          <main className="flex-1 p-6 md:p-12 bg-gray-100 overflow-y-auto">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-base md:text-xl font-semibold mb-6 text-gray-800">
                Account Security Settings
              </h3>

              {/* Username Section */}
              <div className="border-2 border-gray-200 rounded-lg mb-4">
                <button
                  onClick={() => setOpenUsername(!openUsername)}
                  className="w-full flex justify-between items-center p-4 focus:outline-none"
                >
                  <span className="text-sm md:text-lg font-medium text-gray-800">
                    Username
                  </span>
                  <MdExpandMore
                    className={` text-2xl text-gray-600 transform transition-transform duration-300 ${
                      openUsername && "rotate-180"
                    }`}
                  />
                </button>

                <div
                  className={`px-4 overflow-hidden transition-all duration-400 ease-in-out  ${
                    openUsername ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  <div className="border-t border-gray-200 pt-4">
                    <div className="mb-4">
                      <label
                        className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                        htmlFor="new-username"
                      >
                        New Username
                      </label>
                      <input
                        className="mt-1 block w-full p-2 rounded-md outline-none border-gray-300 shadow-sm border text-gray-700 placeholder:text-gray-400  focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 text-xs md:text-base"
                        id="new-username"
                        value={adminData.username}
                        onChange={(e) =>
                          setAdminData({ ...adminData, username: e.target.value })
                        }
                        placeholder="Enter new username"
                        type="text"
                      />
                    </div>

                    <div className="flex justify-between items-center pb-4">
                      <button
                        onClick={() => handleUpdateProfile("username")}
                        className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 text-xs md:text-base"
                      >
                        Update Username
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Email Section (Disabled for Update) */}
              <div className="border-2 border-gray-200 rounded-lg mb-4 bg-gray-50 opacity-70">
                <div className="w-full flex justify-between items-center p-4">
                  <span className="text-sm md:text-lg font-medium text-gray-800 ">
                    Email Address
                  </span>
                  <span className="text-sm text-gray-500">{adminData.email}</span>
                </div>
              </div>

              {/* Password Section */}
              <div className="border-2 border-gray-200 rounded-lg">
                <button
                  className="w-full flex justify-between items-center p-4 focus:outline-none"
                  onClick={() => setOpenPassword(!openPassword)}
                >
                  <span className="text-sm md:text-lg font-medium text-gray-800">
                    Password
                  </span>
                  <MdExpandMore
                    className={` text-2xl text-gray-600 transform transition-transform duration-300 ${
                      openPassword && "rotate-180"
                    }`}
                  />
                </button>
                <div
                  className={`px-4 overflow-hidden transition-all duration-400 ease-in-out  ${
                    openPassword ? "max-h-[1000px]" : "max-h-0"
                  }`}
                >
                  <div className="border-t border-gray-200 pt-4">
                    <div className="mb-4">
                      <label
                        className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                        htmlFor="new-password"
                      >
                        New Password
                      </label>
                      <input
                        className="mt-1 p-2 block w-full outline-none rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-2 border text-gray-700 placeholder:text-gray-400  focus:ring-teal-500 focus:ring-opacity-50 text-xs md:text-base"
                        id="new-password"
                        value={adminData.newPassword}
                        onChange={(e) =>
                          setAdminData({ ...adminData, newPassword: e.target.value })
                        }
                        placeholder="Enter new password"
                        type="password"
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                        htmlFor="confirm-password"
                      >
                        Confirm New Password
                      </label>
                      <input
                        className="mt-1 p-2 block w-full outline-none rounded-md border-gray-300 shadow-sm border text-gray-700 placeholder:text-gray-400  focus:border-teal-500 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 text-xs md:text-base"
                        id="confirm-password"
                        value={adminData.confirmPassword}
                        onChange={(e) =>
                          setAdminData({
                            ...adminData,
                            confirmPassword: e.target.value,
                          })
                        }
                        placeholder="Re-enter new password"
                        type="password"
                      />
                    </div>
                    <div className="flex justify-between items-center pb-4">
                      <button
                        onClick={() => handleUpdateProfile("password")}
                        className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 text-xs md:text-base"
                      >
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
