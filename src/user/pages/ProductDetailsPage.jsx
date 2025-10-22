import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ProductDetailsPage = () => {
  const product = {
    title: "Dolo 650 mg",
    brand: "Micro Labs Ltd",
    description:
      "Dolo 650 mg is a paracetamol (acetaminophen) based medication primarily used to relieve mild to moderate pain and reduce fever. It is effective for headaches, muscle aches, arthritis, backache, toothaches, colds, and fevers. Known for its quick action and minimal side effects when taken as directed.",
    imageURL:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC33iN89M3GrWKsEISgEBa7nij9-4jaSVEH5tzvwHyvrUUuRTpdYhBt4dIDkKkGa8D2a--uV9dpZB7tdc-9h-JJOIYhJbjO9dlg2L7L2u3ZSuVHsqBe3sQdkBdhh-80ygj0gw_EL2P_OhIcOpy2jEA84gprW24SkxzblXEZEd6FmY7wbvR8NodR0Nu8lETlUMEQK02k_do6cZCyjyPBaNbNT_jRQTf7jF3QafrgMY3d5To7V4Leiarat_IS6IXfYIcKunuxGEf2oWco",
  };

  return (
    <>
      <Header />
      <div className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:space-x-16">
          <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0">
            <img
              alt={product.title}
              className="max-w-full h-auto max-h-[600px] rounded-lg shadow-xl"
              src={product.imageURL}
            />
          </div>
          <div className="lg:w-1/2 pt-4 lg:pt-0">
            <h1 className="text-4xl font-semibold text-gray-800 mb-4 leading-tight">
              {product.title}
            </h1>
            <p className="text-2xl text-gray-500 mb-8">
              {product.brand}
            </p>
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Description
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
            <Link to={"/search-result"}>
              <button className="mt-8 bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
                Find Pharmacies With Availabilty
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
