import React, { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import MedicineCard from "../components/MedicineCard";
import { Link } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { MdExpandMore } from "react-icons/md";
import Login from "../components/Login";

const HomePage = () => {
  const medicineItems = [
    {
      title: "Panadol Advance",
      brand: "Sun Pharma Ltd",
      imageURL:
        "https://pharmazone.com/cdn/shop/files/20883-PANADOL_ADVANCE_48_TAB_Front_Side.webp?v=1746619875&width=1000",
      saved: false,
    },
    {
      title: "Meftal Forte",
      brand: "Micro Labs Ltd",
      imageURL:
        "https://mockuphunt.co/cdn/shop/products/Box_Mockups_OK_3_241036b2-175b-484e-960d-3c632a6e0f48_800x.jpg?v=1524830968",
      saved: true,
    },
    {
      title: "Ascoril Cough Syrup",
      brand: "Cipla Ltd",
      imageURL:
        "https://www.graphicsfuel.com/wp-content/uploads/2022/12/medicine-syrup-bottle-mockup1.jpg",
      saved: true,
    },
    {
      title: "Panadol Extra",
      brand: "Sun Pharma Ltd",
      imageURL:
        "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/health-professionals/en_PK/pain-relief/packshots/Extra_25_970x416.png?auto=format",
      saved: false,
    },
    {
      title: "Multi Vitamin Tablet",
      brand: "Micro Labs Ltd",
      imageURL:
        "https://keysupplements.in/wp-content/uploads/2023/05/Multi-Vitamin-Mockup-min-1.png",
      saved: true,
    },
  ];

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

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <Header from="home" onLoginClick={() => setShowLogin(true)} />
      <main>
        {/* hero */}
        <section className="bg-teal-600 text-white pt-20 py-20 px-6 md:px-12 text-center">
          <h2 className="text-2xl md:text-5xl font-bold mb-3">
            Find medicines faster nearby you
          </h2>
          <p className="text-base md:text-xl text-white/80 ">
            No more queues to just hear the medicine is out of stock
          </p>
          <div className="mt-8 max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-2 flex flex-col md:flex-row items-center space-x-2">
            <div className="flex items-center p-2 w-[90%]">
              <LuMapPin className="text-2xl text-gray-500" />
              <select className="p-2 appearance-none border-none outline-none rounded-md text-gray-700 bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 cursor-pointer w-full">
                <option defaultValue hidden>
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
            <div className="w-[90%] md:h-8 border-b md:w-auto md:border-0 md:border-l border-gray-300 "></div>
            <input
              className="w-full border-none pl-8 md:pl-1 outline-none bg-transparent text-gray-700 placeholder-gray-500 focus:ring-0 my-5 md:my-0"
              placeholder="Search for medicines"
              type="text"
            />
            <Link to={"/search-result"} className="w-full md:w-fit">
              <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-md flex justify-center items-center gap-2 w-full ">
                Search
                <FaMagnifyingGlass className="text-xl" />
              </button>
            </Link>
          </div>
        </section>
        {/* Most frequent */}
        <section className="py-16 px-6 md:px-12 bg-gray-100">
          <h3 className="text-xl md:text-3xl font-bold mb-8 text-gray-800 ">
            Most frequent searches
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {medicineItems.map((item) => {
              return (
                <MedicineCard
                  key={item.title}
                  title={item.title}
                  brand={item.brand}
                  imageURL={item.imageURL}
                  saved={item.saved}
                />
              );
            })}
          </div>
        </section>
        {/* Products */}
        <section className="py-16 px-6 md:px-12 bg-gray-50 ">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-2">
            <h3 className="text-xl md:text-3xl font-bold text-gray-800">
              Personal Care & Hygiene
            </h3>
            <Link to={"/all-products"}
              className="text-teal-600 hover:text-teal-700 hover:underline underline-offset-5 font-semibold transition ease-in-out"
              
            >
              View All
            </Link>
          </div>
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

        <Dialog open={showLogin} onClose={setShowLogin} className="relative z-10">
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
        </Dialog>
      </main>
      <Footer className="overflow-x-clip" />
    </>
  );
};

export default HomePage;
