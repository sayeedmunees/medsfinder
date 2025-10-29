import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ImUser } from "react-icons/im";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  return (
    <>
      <Header />
      <main className="min-h-[80vh] py-16 px-6 md:px-12 bg-gray-200 ">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 space-y-12">
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-6 flex items-center justify-center overflow-hidden">
              <FaRegCircleUser className="text-8xl text-gray-700" />
            </div>
            <h2 className="text-xl md:text-3xl font-bold text-gray-800  mb-2">
              John Doe
            </h2>
            <p className="text-gray-500 text-base md:text-lg">
              johndoe@example.com
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
                  defaultValue="John Doe"
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
                  defaultValue="johndoe@example.com"
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
                  defaultValue="+91 9876543210"
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
                  defaultValue="Kochi, Kerala"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-end gap-2 justify-end pt-4">
              <Link to={"/"}>
                <button className="px-6 py-3 bg-gray-600 text-white text-sm md:text-base rounded-md font-semibold hover:bg-gray-700 transition-colors duration-300 ease-in-out shadow-md">
                  Cancel
                </button>
              </Link>
              <Link to={"/"}>
                <button className="px-6 py-3 bg-teal-600 text-white text-sm md:text-base rounded-md font-semibold hover:bg-teal-700 transition-colors duration-300 ease-in-out shadow-md">
                  Save Changes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProfilePage;
