import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import MedicineCard from "../components/MedicineCard";
import { Link } from "react-router-dom";

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
      saved: false,
    },
  ];

  const productItems = [
    {
      title: "SPF 50+ Sunscreen",
      type: "Broad spectrum protection",
      price: "18.50",
      imageURL:
        "https://unblast.com/wp-content/uploads/2019/01/Tube-Mockup-1600x1226.jpg",
    },
    {
      title: "Hydrating Face Cream",
      type: "For all skin types",
      price: "24.99",
      imageURL:
        "https://unblast.com/wp-content/uploads/2022/02/Mini-Spray-Bottle-Packaging-Mockup-1536x1152.jpg",
    },
    {
      title: "Vitamin C Serum",
      type: "Brightens & evens skin tone",
      price: "32.00",
      imageURL:
        "https://unblast.com/wp-content/uploads/2020/10/Dropper-Packaging-Mockup--1536x1152.jpg",
    },

    {
      title: "Hand Sanitizer",
      type: "Removes dirt and kills germs",
      price: "15.99",
      imageURL:
        "https://unblast.com/wp-content/uploads/2020/11/Matt-Hand-Sanitizer-Mockup-1-1-1536x1024.jpg",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* hero */}
        <section className="bg-teal-500 text-white py-20 px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            Find medicines faster nearby you
          </h2>
          <p className="text-lg md:text-xl text-white/80 ">
            No more queues to just hear the medicine is out of stock
          </p>
          <div className="mt-8 max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-2 flex items-center space-x-2">
            <div className="flex items-center p-2">
              <span className="material-icons text-gray-500  ml-2">
                location_on
              </span>

              <select className="p-2 border-none outline-none rounded-md text-gray-700 bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 cursor-pointer">
                <option value="" selected disabled hidden>
                  Select Location
                </option>
                <option className="border-none outline-none" value="Edapally">
                  Edapally
                </option>
                <option value="Kakkanad">Kakkanad</option>
                <option value="Kalamassery">Kalamassery</option>
                <option value="Palarivattam">Palarivattam</option>
              </select>
            </div>
            <div className="h-8 border-l border-gray-300 "></div>
            <input
              className="w-full border-none outline-none bg-transparent text-gray-700 placeholder-gray-500 focus:ring-0"
              placeholder="Search for medicines"
              type="text"
            />
            <Link to={"/search-result"}>
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-md flex items-center">
                Search
                <span className="material-icons ml-2">search</span>
              </button>
            </Link>
          </div>
        </section>
        {/* Most frequent */}
        <section className="py-16 px-6 md:px-12">
          <h3 className="text-3xl font-bold mb-8 text-gray-800 ">
            Most frequent searches
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
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
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800">
              Beauty &amp; Personal Care
            </h3>
            <a
              className="text-teal-500 hover:text-teal-600 hover:underline underline-offset-5 font-semibold transition ease-in-out"
              href="#"
            >
              View All
            </a>
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
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
