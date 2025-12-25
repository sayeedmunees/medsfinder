import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import MedicineCard from "../components/MedicineCard";
import { Link } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdExpandMore } from "react-icons/md";
import { getAllMedicinesAPI } from "../../services/allAPI";

const HomePage = () => {
  const [homeMedicines, setHomeMedicines] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");

  const getAllMedicines = async () => {
    const result = await getAllMedicinesAPI();
    if (result.status === 200) {
      setHomeMedicines(result.data);
    }
  };

  console.log(homeMedicines);

  const productItems = [
    {
      title: "SPF 50+ Sunscreen",
      type: "Broad spectrum protection",
      price: "299",
      imageURL:
        "https://unblast.com/wp-content/uploads/2019/01/Tube-Mockup-1600x1226.jpg",
    },
    {
      title: "Hydrating Face Cream",
      type: "For all skin types",
      price: "249",
      imageURL:
        "https://unblast.com/wp-content/uploads/2022/02/Mini-Spray-Bottle-Packaging-Mockup-1536x1152.jpg",
    },
    {
      title: "Vitamin C Serum",
      type: "Brightens & evens skin tone",
      price: "329",
      imageURL:
        "https://unblast.com/wp-content/uploads/2020/10/Dropper-Packaging-Mockup--1536x1152.jpg",
    },

    {
      title: "Hand Sanitizer",
      type: "Removes dirt and kills germs",
      price: "149",
      imageURL:
        "https://unblast.com/wp-content/uploads/2020/11/Matt-Hand-Sanitizer-Mockup-1-1-1536x1024.jpg",
    },
  ];

  useEffect(() => {
    getAllMedicines();
  }, []);

  // setTimeout(()=>{setShowLogin(true)}, 3000)

  return (
    <>
      <Header from="home" />

      <main>
        {/* hero */}
        <section className="bg-teal-600 text-white py-20 px-6 md:px-12 text-center">
          {/* hero text */}
          <h2 className="text-2xl md:text-5xl font-bold mb-3">
            Find medicines faster nearby you
          </h2>
          <p className="text-base md:text-xl text-white/80 ">
            No more queues to just hear the medicine is out of stock
          </p>
          {/* search */}
          <div className="mt-16 md:mt-8 max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-2 flex flex-col md:flex-row items-center space-x-2 group focus-within:outline-2 focus-within:outline-teal-300 focus-within:shadow-2xl">
            {/* select location dropdown. Have to add user location fetching feature */}
            <div className="flex items-center p-2 w-[90%]">
              <LuMapPin className="text-2xl text-gray-500" />
              <select
                id="home-search-location"
                className="p-2 appearance-none border-none outline-none rounded-md text-gray-700 bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 cursor-pointer w-full"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="" disabled selected>
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
            {/* search button */}
            <div className="w-full md:w-fit">
              <button
                onClick={() => {
                  if (searchTerm.trim() && location) {
                    window.location.href = `/search-result?search=${searchTerm}&location=${location}`;
                  } else if (!searchTerm.trim()) {
                    alert("Please enter a medicine name");
                  } else {
                    alert("Please select a location");
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
        {/*Ad Products */}
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
          {/* Product cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productItems.map((item) => {
              return (
                <ProductCard
                  key={item.title}
                  title={item.title}
                  type={item.type}
                  price={item.price}
                  imageURL={item.imageURL}
                />
              );
            })}
          </div>
        </section>

        {/* login dropdown dialog using headless UI */}
        {/* <Dialog
          open={showLogin}
          onClose={setShowLogin}
          className="relative z-10"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
          />

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <DialogPanel
                transition
                className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 min-w-fit data-closed:sm:translate-y-0 data-closed:sm:scale-95"
              >
                <Login onLoginClick={() => setShowLogin(false)} />
              </DialogPanel>
            </div>
          </div>
        </Dialog> */}
      </main>

      <Footer className="overflow-x-clip" />
    </>
  );
};

export default HomePage;
