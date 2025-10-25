import React from "react";
import { IoMdClose } from "react-icons/io";

const AddFrom = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center z-100 ">
        <div className="bg-white border w-[90%] max-w-[800px] p-8 shadow rounded-2xl">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 ">
              Add New Product
            </h3>
            <button className="text-2xl">
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
                placeholder="A brief description of the product..."
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
                placeholder="e.g., 9.99"
                step="0.01"
                type="number"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="product-stock"
              >
                Stock Quantity
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                id="product-stock"
                placeholder="e.g., 100"
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
                PNG,or JPG(MAX. 800x400px).
              </p>
            </div>
            <div className="md:col-span-2 flex justify-end mt-4">
              <button
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
    </>
  );
};

export default AddFrom;
