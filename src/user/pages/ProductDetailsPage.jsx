import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const ProductDetailsPage = () => {
  const product = {
    title: "Panadol Advance",
    brand: "Sun Pharma Ltd",
    description:
      "Panadol Advance is a paracetamol (acetaminophen) based medication primarily used to relieve mild to moderate pain and reduce fever. It is effective for headaches, muscle aches, arthritis, backache, toothaches, colds, and fevers. Known for its quick action and minimal side effects when taken as directed.",
    imageURL:
      "https://pharmazone.com/cdn/shop/files/20883-PANADOL_ADVANCE_48_TAB_Front_Side.webp?v=1746619875&width=1000",
    saved: true,
  };

  return (
    <>
      <Header />
      <section className="py-16 px-6 md:px-12 bg-gray-100">
        <div className="max-w-6xl h-auto mx-auto flex flex-col lg:flex-row items-start lg:space-x-16">
          <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0">
            <img
              alt={product.title}
              className="max-w-full h-auto max-h-[600px] rounded-lg shadow-xl"
              src={product.imageURL}
            />
          </div>
          <div className="lg:w-1/2 pt-4 lg:pt-16">
            <h1 className="text-2xl md:text-4xl font-semibold text-gray-800 mb-2">
              {product.title}
            </h1>
            <p className="text-lg md:text-2xl text-gray-500 mb-8">
              {product.brand}
            </p>
            <div className="mb-4 md:mb-10">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
                Description
              </h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
            <div className="flex gap-3 flex-col md:flex-row items-start justify-center">
              <Link to={"/search-result"}>
                <button className="mt-4 md:mt-8 text-base md:text-lg bg-teal-600 hover:bg-teal-700 text-white font-semibold px-4 py-3 md:px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
                  Find Pharmacies With Availabilty
                </button>
              </Link>
              <button className="mt-4 md:mt-8 text-base md:text-lg bg-gray-200 outline-2 outline-teal-600 hover:bg-teal-600 text-teal-600 hover:text-white font-semibold px-4 py-3 md:px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
                {product.saved ? (
                  <div className="flex gap-2 items-center">
                    <FaBookmark /> Saved
                  </div>
                ) : (
                  <div className="flex gap-2 items-center">
                    <FaRegBookmark /> Save
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
