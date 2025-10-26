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
      <main className="min-h-screen py-16 px-6 md:px-12 bg-gray-200 ">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 space-y-12">
          <div className="text-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-6 flex items-center justify-center overflow-hidden">
              <FaRegCircleUser className="text-8xl text-gray-700" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800  mb-2">John Doe</h2>
            <p className="text-gray-500  text-lg">johndoe@example.com</p>
          </div>
          <div class="space-y-6">
            <h3 class="text-2xl font-semibold text-gray-800">Edit Profile</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="relative">
                <label
                  class="block text-sm font-medium text-gray-700 mb-1"
                  for="name"
                >
                  Name
                </label>
                <input
                  class="block w-full px-4 py-2 bg-gray-100  border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ease-in-out"
                  id="name"
                  type="text"
                  defaultValue="John Doe"
                />
              </div>
              <div class="relative">
                <label
                  class="block text-sm font-medium text-gray-700  mb-1"
                  for="email"
                >
                  Email
                </label>
                <input
                  class="block w-full px-4 py-2 bg-gray-100  border border-gray-200  rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ease-in-out"
                  id="email"
                  type="email"
                  defaultValue="johndoe@example.com"
                />
              </div>
              <div class="relative">
                <label
                  class="block text-sm font-medium text-gray-700  mb-1"
                  for="phone"
                >
                  Phone
                </label>
                <input
                  class="block w-full px-4 py-2 bg-gray-100  border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ease-in-out"
                  id="phone"
                  type="tel"
                  defaultValue="+1 (555) 123-4567"
                />
              </div>
              <div class="relative">
                <label
                  class="block text-sm font-medium text-gray-700 mb-1"
                  for="address"
                >
                  Address
                </label>
                <input
                  class="block w-full px-4 py-2 bg-gray-100  border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 ease-in-out"
                  id="address"
                  type="text"
                  defaultValue="123 Main St, Anytown"
                />
              </div>
            </div>
            <div class="flex justify-end pt-4">
              <Link to={"/"}>
                <button class="px-6 py-3 bg-teal-600 text-white rounded-md font-semibold hover:bg-teal-700 transition-colors duration-300 ease-in-out shadow-md">
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
