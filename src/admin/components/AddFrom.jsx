import React from "react";

const AddFrom = () => {
  return (
    <>
      <div class="modal" >
        <div class="modal-content ">
          <button class="modal-close-button">
            X
          </button>
          <h3 class="text-2xl font-bold text-gray-800  mb-6">
            Add New Product
          </h3>
          <form class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="product-name"
              >
                Product Name
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                id="product-name"
                placeholder="e.g., PainAway 200mg Tablets"
                type="text"
              />
            </div>
            <div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="product-category"
              >
                Category
              </label>
              <select
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                id="product-category"
              >
                <option>Pain Relief</option>
                <option>Vitamins &amp; Supplements</option>
                <option>Allergy &amp; Sinus</option>
                <option>Cough &amp; Cold</option>
                <option>First Aid</option>
              </select>
            </div>
            <div class="md:col-span-2">
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="product-description"
              >
                Product Description
              </label>
              <textarea
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none h-32"
                id="product-description"
                placeholder="A brief description of the product..."
              ></textarea>
            </div>
            <div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="product-price"
              >
                Price
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
                id="product-price"
                placeholder="e.g., 9.99"
                step="0.01"
                type="number"
              />
            </div>
            <div>
              <label
                class="block text-gray-700 text-sm font-bold mb-2"
                for="product-stock"
              >
                Stock Quantity
              </label>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
                id="product-stock"
                placeholder="e.g., 100"
                type="number"
              />
            </div>
            <div class="md:col-span-2">
              <label
                class="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
                for="product-image"
              >
                Product Image
              </label>
              <input
                class="block w-full text-gray-700 dark:text-gray-300 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-400 focus:outline-none"
                id="product-image"
                type="file"
              />
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-300">
                SVG, PNG, JPG or GIF (MAX. 800x400px).
              </p>
            </div>
            <div class="md:col-span-2 flex justify-end mt-4">
              <button
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg mr-2"
                type="button"
              >
                Cancel
              </button>
              <button
                class="bg-primary hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-lg"
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
