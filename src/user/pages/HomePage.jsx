import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import MedicineCard from "../components/MedicineCard";
import { Link } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdExpandMore } from "react-icons/md";
import { getAllMedicinesAPI, getAllProductsAPI } from "../../services/allAPI";
import { serverURL } from "../../services/serverURL";
import { toast, ToastContainer } from "react-toastify";

const HomePage = () => {
  const [homeMedicines, setHomeMedicines] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const getAllMedicines = async () => {
    const result = await getAllMedicinesAPI();
    if (result.status === 200) {
      setHomeMedicines(result.data);
    }
  };

  const getAllProducts = async () => {
    try {
      const result = await getAllProductsAPI();
      if (result.status === 200) {
        setAllProducts(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMedicines();
    getAllProducts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header from="home" />

      <main className="grow">
        {/* hero */}
        <section className="bg-teal-600 text-white py-20 px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-3">
            Find medicines faster nearby you
          </h2>
          <p className="text-base md:text-xl text-white/80 ">
            No more queues to just hear the medicine is out of stock
          </p>
          {/* search */}
          <div className="mt-16 md:mt-8 max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-2 flex flex-col md:flex-row items-center space-x-2 group focus-within:outline-2 focus-within:outline-teal-300 focus-within:shadow-2xl">
            {/* location dropdown */}
            <div className="flex items-center p-2 w-[90%]">
              <LuMapPin className="text-2xl text-gray-500" />
              <select
                id="home-search-location"
                className="p-2 appearance-none border-none outline-none rounded-md text-gray-700 bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 cursor-pointer w-full"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="" disabled>
                  Select Location
                </option>
                <option className="border-none outline-none" value="Edapally">
                  Edapally
                </option>
                <option value="Kakkanad">Kakkanad</option>
                <option value="Kalamassery">Kalamassery</option>
                <option value="Palarivattam">Palarivattam</option>
              </select>
              <MdExpandMore className="text-2xl text-gray-500" />
            </div>
            {/* seprating btw search and location */}
            <div className="w-[90%] md:h-8 border-b md:w-auto md:border-0 md:border-l border-gray-300 "></div>
            {/* serch bar */}
            <input
              id="home-search-medicine"
              className="w-full border-none pl-8 md:pl-1 outline-none bg-transparent text-gray-700 placeholder-gray-500 focus:ring-0 my-5 md:my-0"
              placeholder="Search for medicines"
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {/* search button */}
            <div className="w-full md:w-fit">
              <button
                onClick={() => {
                  if (searchTerm.trim() && location) {
                    window.location.href = `/search-result?search=${searchTerm}&location=${location}`;
                  } else if (!searchTerm.trim()) {
                    toast.info("Please enter a medicine name");
                  } else {
                    toast.info("Please select a location");
                  }
                }}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-md flex justify-center items-center gap-2 w-full "
              >
                Search
                <FaMagnifyingGlass className="text-xl" />
              </button>
            </div>
          </div>
        </section>
        {/* Most frequent medicines*/}
        <section className="py-16 px-6 md:px-12 bg-gray-100">
          {/* haeder */}
          <h3 className="text-xl md:text-3xl font-bold mb-8 text-gray-800 ">
            Most frequent searches
          </h3>
          {/* medicine cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {homeMedicines.slice(0, 5).map((medicine) => {
              return (
                <MedicineCard
                  key={medicine._id}
                  id={medicine._id}
                  title={medicine.medicineName}
                  brand={medicine.brandName}
                  imageURL={medicine.uploadedImg}
                  saved={medicine?.saved}
                />
              );
            })}
          </div>
        </section>
        {/* products */}
        <section className="py-16 px-6 md:px-12 bg-gray-50 ">
          {/* header and view all */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-2">
            <h3 className="text-xl md:text-3xl font-bold text-gray-800">
              Personal Care & Hygiene
            </h3>
            <Link
              to={"/all-products"}
              className="text-teal-600 hover:text-teal-700 hover:underline underline-offset-5 font-semibold transition ease-in-out"
            >
              View All
            </Link>
          </div>
          {/* product cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {allProducts.slice(0, 4).map((item) => {
              return (
                <ProductCard
                  key={item._id}
                  id={item._id}
                  title={item.productName}
                  type={item.brandName}
                  price={item.price}
                  imageURL={`${serverURL}/upload/${item.uploadedImg}`}
                />
              );
            })}
          </div>
        </section>
      </main>

      <Footer className="overflow-x-clip" />
      <ToastContainer theme="colored" position="top-center" autoClose={2500} />
    </div>
  );
};

export default HomePage;
