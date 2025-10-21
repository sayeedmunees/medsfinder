import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const ProductDetailsPage = () => {
  return (
    <>
      <Header />
      <div className="py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start lg:space-x-16">
          <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0">
            <img
              alt="Dolo 650 mg"
              className="max-w-full h-auto max-h-[600px] rounded-lg shadow-xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEN4A1OhPMsWaqE-kHhXsKjAG9RumLLkeY6tMqsv1mT7SQcRi0cwP9s98ltvSfy_K-a83v5VTN89AsEipN8S05VM5yfhLf4kMm0d3LVTun4Cyo0xkgSxjnSTQze6_fdPDxMCCUDnOwQRI3dRxDF8GcS1LT33JxPDOSyH7f1s6hwqp3cE5XXkwxMLST_i8ZBl031-R4Xg9IsuMf5TiQRjEKiUkDtLjoxnK9_DPb8nBtM9pRdzkvt1ykOhctO48RRT0IO1nGjbf5wDqZ"
            />
          </div>
          <div className="lg:w-1/2 pt-4 lg:pt-0">
            <h1 className="text-5xl font-light text-gray-800 dark:text-white mb-4 leading-tight">
              Dolo 650 mg
            </h1>
            <p className="text-2xl text-gray-500 dark:text-gray-400 mb-8">
              Micro Labs Ltd
            </p>
            <div className="mb-10">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                Description
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Dolo 650 mg is a paracetamol (acetaminophen) based medication
                primarily used to relieve mild to moderate pain and reduce
                fever. It is effective for headaches, muscle aches, arthritis,
                backache, toothaches, colds, and fevers. Known for its quick
                action and minimal side effects when taken as directed.
              </p>
            </div>
            <Link to={"/search-result"}>
              <button className="mt-8 bg-primary hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
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
