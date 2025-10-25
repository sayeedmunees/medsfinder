import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TotalCards from "../components/TotalCards";
import AdProductCard from "../components/AdProductCard";
import AddFrom from "../components/AddFrom";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

const AdminAdvertisement = () => {
  const [addProduct, setAddProduct] = useState(false);
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
      <div className="flex h-screen" id="root">
        <Sidebar from="advertisement" />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header from="advertisements" />
          <main className="flex-1 p-6 md:p-12 bg-gray-100  overflow-y-auto">
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <TotalCards icon="click" count="1532" item="Clicks" />
              <TotalCards
                icon="ad"
                count={productItems.length}
                item="Ad Products"
              />
            </section>
            <div class="mb-8">
              <div className="flex flex-row justify-between py-2 mb-6">
                <h3 class="text-3xl font-bold text-gray-800">
                  Current Products
                </h3>
                <button
                  onClick={() => setAddProduct(true)}
                  className="flex items-center justify-center font-semibold px-4 py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition-colors"
                >
                  <FaPlus className=" mr-2" />
                  Add New Product
                </button>
              </div>
              <div
                class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                id="product-grid"
              >
                {productItems.map((item) => {
                  return (
                    <AdProductCard
                      key={item.title}
                      title={item.title}
                      type={item.type}
                      price={item.price}
                      imageURL={item.imageURL}
                    />
                  );
                })}
              </div>
            </div>
          </main>
        </div>
        {addProduct && (
          <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center z-100">
            <div className="bg-white border w-[90%] max-w-[800px] p-8 shadow rounded-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 ">
                  Add New Product
                </h3>
                <button
                  onClick={() => setAddProduct(false)}
                  className="text-2xl"
                >
                  <IoMdClose />
                </button>
              </div>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="product-name"
                  >
                    Product Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                    id="product-name"
                    placeholder="e.g., Hand Sanitizer"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="product-category"
                  >
                    Category
                  </label>
                  <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                    id="product-category"
                  >
                    <option>Cleanser</option>
                    <option>Hair Care</option>
                    <option>Moisturizer</option>
                    <option>Skin Care</option>
                    <option>Sunscreen</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="product-description"
                  >
                    Product Description
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none h-32"
                    id="product-description"
                    placeholder="A description of the product..."
                  ></textarea>
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="product-price"
                  >
                    Price
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                    id="product-price"
                    placeholder="e.g., 7"
                    step="0.5"
                    type="number"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    for="product-image"
                  >
                    Product Image
                  </label>
                  <input
                    className="block w-full text-gray-700  border border-gray-300 rounded-lg cursor-pointer bg-gray-50 placeholder-gray-400 focus:outline-none"
                    id="product-image"
                    type="file"
                  />
                  <p className="mt-1 text-sm text-gray-500">
                    PNG or JPG(MAX. 800x400px).
                  </p>
                </div>
                <div className="md:col-span-2 flex justify-end mt-4">
                  <button
                    onClick={() => setAddProduct(false)}
                    className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mr-2"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg"
                    type="submit"
                  >
                    Save Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AdminAdvertisement;
