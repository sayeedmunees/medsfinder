import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PharmacyCard from "../components/PharmacyCard";
import { Link } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

const SearchPage = () => {
  const medicine = {
    title: "Panadol Advance",
    composition: "Paracetamol (500mg)",
    highlights: [
      "Relieves pain and fever.",
      "Can be taken with or without food.",
      "Should be taken as per the doctor's advice.",
    ],
    imageURL:
      "https://pharmazone.com/cdn/shop/files/20883-PANADOL_ADVANCE_48_TAB_Front_Side.webp?v=1746619875&width=1000",
    saved: true,
  };

  const pharmacies = [
    {
      shopName: "Aster Pharmacy",
      location: "Athani, Kakkanad",
      rating: "4.0",
      reviews: "124",
      inStock: true,
      saved: false,
      imageURL:
        "https://www.towncentrejumeirah.com/wp-content/uploads/2019/08/aster1.jpg",
    },
    {
      shopName: "Apollo Pharmacy",
      location: "Infopark Road, Kakkanad",
      rating: "4.5",
      reviews: "210",
      inStock: false,
      saved: false,
      imageURL:
        "https://www.corewebnetworks.in/bestfranchisedealer.com/media/blogs/apollo-pharmacy-franchise-cost-profit-and-how-to-get-started-in-2024.webp",
    },
    {
      shopName: "MedPlus Pharmacy",
      location: "Edachira, Kakkanad",
      rating: "3.5",
      reviews: "88",
      inStock: true,
      saved: true,
      imageURL:
        "https://content.jdmagicbox.com/v2/comp/mumbai/i5/022pxx22.xx22.220422191030.q2i5/catalogue/medplus-kandivali-west-mumbai-61bxkvcbsz.jpg",
    },
    {
      shopName: "V-Care Medicals",
      location: "Thrikkakara, Kakkanad",
      rating: "3.0",
      reviews: "45",
      inStock: true,
      saved: true,
      imageURL:
        "https://content3.jdmagicbox.com/comp/thrissur/v9/9999px487.x487.210104104711.b6v9/catalogue/v-care-medical-paravattani-thrissur-surgical-equipment-dealers-hrf4p0a84j.jpg",
    },
  ];

  return (
    <>
      <Header />
      <div>
        {/* serach and description */}
        <section className="bg-teal-500 py-8 px-4 sm:px-6 lg:px-8">
          <div className="mt-8 max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-2 flex items-center space-x-2 gap-2">
            <div className="flex items-center p-2">
              <LuMapPin className="text-2xl text-gray-500" />

              <select className="p-2 border-none outline-none rounded-md text-gray-700 bg-white focus:border-teal-500 focus:ring-2 focus:ring-teal-200 cursor-pointer">
                <option className="border-none outline-none" value="Edapally">
                  Edapally
                </option>
                <option selected value="Kakkanad">
                  Kakkanad
                </option>
                <option value="Kalamassery">Kalamassery</option>
                <option value="Palarivattam">Palarivattam</option>
              </select>
            </div>
            <div className="h-8 border-l border-gray-300 "></div>
            <input
              className="w-full border-none outline-none bg-transparent text-gray-700 placeholder-gray-500 focus:ring-0"
              defaultValue={medicine.title}
              type="text"
            />
            <Link to={"/search-result"}>
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-md flex items-center gap-2">
                Search
                <FaMagnifyingGlass className="text-xl" />
              </button>
            </Link>
          </div>

          <div className="py-12 max-w-4xl mx-auto">
            <Link to={"/product"}>
              <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-start md:items-center hover:shadow-2xl transition duration-300 ease-in-out">
                <img
                  alt={medicine.title}
                  className="w-32 h-32 object-contain rounded-md mb-4 md:mb-0 md:mr-6"
                  src={medicine.imageURL}
                />
                <div className="text-gray-800 ">
                  <h2 className="text-3xl font-bold">{medicine.title}</h2>
                  <p className="text-md text-gray-600 ">
                    Composition: {medicine.composition}
                  </p>
                  <div className="mt-4">
                    <h4 className="font-semibold mb-2">Product Highlights</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 ">
                      {medicine.highlights.map((highlight, index) => {
                        return <li key={index}>{highlight}</li>;
                      })}
                    </ul>
                  </div>
                </div>
                <button className="ml-auto mt-4 md:mt-0 p-2 rounded-full self-start text-teal-500 text-xl hover:bg-gray-200 ">
                  {medicine.saved ? <FaBookmark /> : <FaRegBookmark />}
                </button>
              </div>
            </Link>
          </div>
        </section>

        {/* Pharmacies */}
        <section className="py-16 px-6 md:px-12 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 ">
              Pharmacies near Kakkanad
            </h3>
            <div className="space-y-6">
              {pharmacies.map((pharmacy) => {
                return (
                  <PharmacyCard
                    key={pharmacy.shopName}
                    shopName={pharmacy.shopName}
                    location={pharmacy.location}
                    rating={pharmacy.rating}
                    reviews={pharmacy.reviews}
                    inStock={pharmacy.inStock}
                    saved={pharmacy.saved}
                    imageURL={pharmacy.imageURL}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
