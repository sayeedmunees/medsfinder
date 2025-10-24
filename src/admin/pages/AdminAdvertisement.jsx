import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TotalCards from "../components/TotalCards";
import AdProductCard from "../components/AdProductCard";

const AdminAdvertisement = () => {
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
              <TotalCards icon="local_hospital" count="1532" item="Clicks" />
              <TotalCards icon="campaign" count="50" item="Ad Products" />
            </section>
            <div class="mb-8">
              <div className="flex flex-row justify-between py-2 mb-6">
                <h3 class="text-3xl font-bold text-gray-800">
                  Current Products
                </h3>
                <button className="flex items-center justify-center px-4 py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition-colors">
                  <span className="material-icons mr-2">add</span>
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
      </div>
    </>
  );
};

export default AdminAdvertisement;
