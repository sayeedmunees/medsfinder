import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PharmacyCard from "../components/PharmacyCard";

const SearchPage = () => {
  const medicine = {
    title: "Dolo 650 Tablet",
    composition: "Paracetamol (650mg)",
    highlights: [
      "Relieves pain and fever.",
      "Can be taken with or without food.",
      "Should be taken as per the doctor's advice.",
    ],
    imageURL:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC33iN89M3GrWKsEISgEBa7nij9-4jaSVEH5tzvwHyvrUUuRTpdYhBt4dIDkKkGa8D2a--uV9dpZB7tdc-9h-JJOIYhJbjO9dlg2L7L2u3ZSuVHsqBe3sQdkBdhh-80ygj0gw_EL2P_OhIcOpy2jEA84gprW24SkxzblXEZEd6FmY7wbvR8NodR0Nu8lETlUMEQK02k_do6cZCyjyPBaNbNT_jRQTf7jF3QafrgMY3d5To7V4Leiarat_IS6IXfYIcKunuxGEf2oWco",
    saved: true,
  };

  const pharmacies = [
    {
      shopName: "Wellness Pharmacy",
      location: "SeaPort Airport Road, Kakkanad",
      rating: "4.0",
      reviews: "124",
      inStock: true,
      saved: false,
      imageURL:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAiN5b7Pui1f3AIIHaifJ5y4hHMqwwfMOIDCefJk2YA-VfmgB_Hev4bk66unqbnR4mlVpRnnzKqZ3MyrlsjyLTTAqqhXjVT9tjxkUmsT3g_sA7TZnaYNBdxTOATgmHUhLOKAx4JDRVFqrcD50yzkWLhjUWGmY3018siIycZAczbmX_45x77tqS9DF7T-go1KlUZ31u5IxluDKLSmfG8bPxGAVpLcS2NVsHhPwCZo0D6ZFCncNS67VGrr_wkqx_HaUD2JR--omBxKk9a",
    },
    {
      shopName: "MedPlus Pharmacy",
      location: "Collectorate Junction, Kakkanad",
      rating: "3.5",
      reviews: "88",
      inStock: true,
      saved: true,
      imageURL:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCtxkRYzhJ13l8qb7XKMrkACykBdgMpomCe3H6KY_aH7MI0fqToIIrJKf5_BHZMNwkq-wo7Cp8zvKn64vBJHGfBpqSL_5V8eGKmXmyemE-0lt9kHkjBU9npi1pKS_A2RPlh1Q0l6xTSBWrwz-XEAHATfLfpQU7asr9vvfyHtssBcc_9V4qkuawIsk6GJsTj_lJhxrHAGvGj4_Zgb4FNuhZstXh3xbJeWLqxdxzRLjnGytw5xm3cVXDtQeMYJ4XsiuhG48D4WDHqXjeD",
    },
    {
      shopName: "Apollo Pharmacy",
      location: "Infopark Expressway, Kakkanad",
      rating: "4.5",
      reviews: "210",
      inStock: false,
      saved: false,
      imageURL:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBmRvA_BFbMVGmKQBjj_SGRLJlkhZKxfYRhhXYgjEF8xQj1MHB9ydUaZU_CEwB_2STGEEwzWePq-BpIf_2XaCeHbeUEe0eQkG_kCr9ifBcHqJwX3-o04xSWPGArZ7DpCOd767bfqBq75trLzQ3_uWQDwJSeYUVzHnITQgZlJovBIYK4pDqGOnzhxfEVdpkcmz9-AbmXiGuLhpn-JOMnau1sDtXc-7v-Evrwl6VMcvxInLTC2i3iQU-w2AXW40Knfovr8xeXQeQbP2Y9",
    },
    {
      shopName: "Care Pharmacy",
      location: "Vallathol Junction, Thrikkakara",
      rating: "3.0",
      reviews: "45",
      inStock: true,
      saved: true,
      imageURL:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCSF_2JC2VF6_8gHfitDRYJeZ0jXOPaRcr8lFkawQlZ87hBQr1F9FaSXrtfrV8HlVj5z0Hi-a3E5ChtugZVGmsRrnZF-4xBbVbFRZ4xDVpB-DejkShYIVS5YShm-yR0uv9ORST6MaOy8GO39ATPJaRYgHXzmpkt16FC1xYP9GiMDeBMwlWMmMfTVmHtloMZHYtMeSmSGlBjkHqR19LSmhAR9aXGeGiqoXlrbgVJKvmSYU3t1afDiUbYDOtTQTlzDPwHmsykQ8StzFlt",
    },
  ];

  return (
    <>
      <Header />
      <div>
        {/* serach */}
        <section className="bg-teal-500 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <form className="flex flex-col md:flex-row items-center p-2 space-y-2 md:space-y-0 md:space-x-2">
                <div className="flex flex-row items-center justify-start w-full md:w-1/3">
                  <span className="material-icons text-gray-400">
                    location_on
                  </span>
                  <input
                    className="w-full bg-gray-50 border-0 focus:ring-2 focus:ring-teal-500 focus:outline-none text-gray-800 rounded-lg"
                    placeholder="Kakkanad, Kerala"
                    type="text"
                  />
                </div>
                <div className="flex flex-row items-center justify-start w-full md:w-2/3">
                  <span className="material-icons  text-gray-400">
                    medication
                  </span>
                  <input
                    className="w-full bg-gray-50 border-0 focus:ring-2 focus:ring-teal-500 focus:outline-none text-gray-800 rounded-lg "
                    placeholder="Dolo 650 Tablet"
                    type="text"
                  />
                </div>
                <button className="w-full md:w-auto bg-teal-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-teal-600 transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                  Search
                </button>
              </form>
            </div>
          </div>
        </section>
        {/* Medicine description */}
        <section className="bg-teal-500 d text-white py-12 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-start md:items-center">
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
              <button className="ml-auto mt-4 md:mt-0 p-2 rounded-full self-start hover:bg-gray-200 ">
                <span className="material-icons text-teal-500">
                  {medicine.saved ? "bookmark" : "bookmark_border"}
                </span>
              </button>
            </div>
          </div>
        </section>
        {/* Pharmacies */}
        <section className="py-16 px-6 md:px-12">
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
