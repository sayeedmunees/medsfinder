import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ImUser } from "react-icons/im";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { getUserProfileAPI, updateUserProfileAPI } from "../../services/allAPI";
import { toast, ToastContainer } from "react-toastify";

const ProfilePage = () => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    phone: "",
    address: "",
  });

  const getUserProfile = async () => {
    const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
    if (existingUser) {
      setUserDetails(existingUser);
    }
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  const handleUpdate = async () => {
    const { username, phone, address } = userDetails;
    if (!username || !phone || !address) {
      toast.info("Please fill all fields");
    } else {
      const token = sessionStorage.getItem("token");
      if (token) {
        const reqHeader = {
          Authorization: `Bearer ${token}`,
        };
        const reqbody = userDetails;
        try {
          const result = await updateUserProfileAPI(reqbody, reqHeader);
          if (result.status === 200) {
            toast.success("Profile Updated Successfully");
            setUserDetails(result.data);
            sessionStorage.setItem("existingUser", JSON.stringify(result.data));
          } else {
            toast.error("Failed to update profile");
          }
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong");
        }
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="bg-gray-200 px-6 md:px-12 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors"
        >
          <IoArrowBackOutline className="text-xl" /> Back
        </button>
      </div>
      <section className="grow py-10 px-6 md:px-12 bg-gray-200 ">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 space-y-12">
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-6 flex items-center justify-center overflow-hidden">
              <FaRegCircleUser className="text-8xl text-gray-700" />
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-gray-800  mb-2">
              {userDetails.username}
            </h2>
            <p className="text-gray-500 text-base md:text-lg">
              {userDetails.email}
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg md:text-2xl font-semibold text-gray-800">
              Edit Profile
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <label
                  className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="block w-full px-4 py-2 bg-gray-100  border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ease-in-out"
                  id="name"
                  type="text"
                  value={userDetails.username || ""}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, username: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <label
                  className="block text-xs md:text-sm font-medium text-gray-700  mb-1"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="block w-full px-4 py-2 bg-gray-100  border border-gray-200  rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ease-in-out"
                  id="email"
                  type="email"
                  value={userDetails.email || ""}
                  readOnly
                  disabled
                />
              </div>
              <div className="relative">
                <label
                  className="block text-xs md:text-sm font-medium text-gray-700  mb-1"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="block w-full px-4 py-2 bg-gray-100  border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ease-in-out"
                  id="phone"
                  type="tel"
                  value={userDetails.phone || ""}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, phone: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <label
                  className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                  htmlFor="address"
                >
                  Address
                </label>
                <input
                  className="block w-full px-4 py-2 bg-gray-100  border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ease-in-out"
                  id="address"
                  type="text"
                  value={userDetails.address || ""}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, address: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-end gap-2 justify-end pt-4">
              <Link to={"/"}>
                <button className="px-6 py-3 bg-gray-600 text-white text-sm md:text-base rounded-md font-semibold hover:bg-gray-700 transition-colors duration-300 ease-in-out shadow-md">
                  Cancel
                </button>
              </Link>
              <button
                onClick={handleUpdate}
                className="px-6 py-3 bg-teal-600 text-white text-sm md:text-base rounded-md font-semibold hover:bg-teal-700 transition-colors duration-300 ease-in-out shadow-md"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ToastContainer theme="colored" position="top-center" autoClose={3000} />
    </div>
  );
};
export default ProfilePage;
