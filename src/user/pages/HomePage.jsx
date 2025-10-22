import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import MedicineCard from "../components/MedicineCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        {/* hero */}
        <section className="bg-teal-500 dark:bg-teal-700 text-white py-20 px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Find medicines faster nearby you
          </h2>
          <p className="text-lg md:text-xl text-teal-100 dark:text-teal-200">
            No more queues to just hear the medicine is out of stock
          </p>
          <div className="mt-8 max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-2 flex items-center space-x-2">
            <div className="flex items-center">
              <span className="material-icons text-gray-500 dark:text-gray-400 ml-2">
                location_on
              </span>
              <select className="form-select border-none bg-transparent text-gray-700 dark:text-gray-300 focus:ring-0">
                <option>Location</option>
                <option>Edapally</option>
                <option>Kakkanad</option>
                <option>Kalamassery</option>
                <option>Palarivattam</option>
              </select>
            </div>
            <div className="h-8 border-l border-gray-300 dark:border-gray-600"></div>
            <input
              className="w-full form-input border-none bg-transparent text-gray-700 dark:text-gray-300 placeholder-gray-500 dark:placeholder-gray-400 focus:ring-0"
              placeholder="Search for medicines"
              type="text"
            />
            <Link to={"/search-result"}>
              <button className="bg-primary hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-md flex items-center">
                Search
                <span className="material-icons ml-2">search</span>
              </button>
            </Link>
          </div>
        </section>
        {/* Most frequent */}
        <section className="py-16 px-6 md:px-12">
          <h3 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
            Most frequent searches
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <MedicineCard />
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex flex-col items-center justify-between transition-transform transform hover:scale-105">
              <img
                alt="Dolo 650 mg"
                className="w-full h-auto object-cover rounded-md mb-4"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlespYj6T17ErYt_OfuwZQH_PHw6QnrvRuSeyBnAm4Iw9XG_RmBd08OiRCOTUNVu6XIjUXt7xyb7VWt3dsIQ25B1izCFOi6F1PL82AJM8JITSX3Hww7yy2trEN69ETej-yxOSacYM_COpXkLkbmOT3zVc9D-CKEu7vo3yUtBRiA8a83TvsgVCJ8vhE8_xGt-Eog9qwRME6v5vviaHxQ2Khl3H7Ci87sJOWTvuQG2DgiCEguLGYvpAVEVNAMDjtRLjkWDZVv7qzuDi8"
              />
              <div className="text-center">
                <p className="font-semibold text-gray-800 dark:text-white">
                  Dolo 650 mg
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Micro Labs Ltd
                </p>
              </div>
              <button className="mt-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                <span className="material-icons text-teal-500">bookmark</span>
              </button>
            </div>
            <MedicineCard />
            <MedicineCard />
            <MedicineCard />
          </div>
        </section>
        {/* Products */}
        <section className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white">
              Beauty &amp; Personal Care
            </h3>
            <a
              className="text-primary hover:text-teal-600 font-semibold"
              href="#"
            >
              View All
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
