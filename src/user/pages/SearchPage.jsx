import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PharmacyCard from "../components/PharmacyCard";

const SearchPage = () => {
  return (
    <>
      <Header />
      <div>
        {/* serach */}
        <section className="bg-teal-500 dark:bg-teal-700 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
              <form className="flex flex-col md:flex-row items-center p-2 space-y-2 md:space-y-0 md:space-x-2">
                <div className="flex flex-row items-center justify-start w-full md:w-1/3">
                  <span className="material-icons text-gray-400">
                    location_on
                  </span>
                  <input
                    className="w-full bg-gray-50 dark:bg-gray-800 border-0 focus:ring-2 focus:ring-primary focus:outline-none text-gray-800 dark:text-gray-200 rounded-lg"
                    placeholder="Kakkanad, Kerala"
                    type="text"
                  />
                </div>
                <div className="flex flex-row items-center justify-start w-full md:w-2/3">
                  <span className="material-icons  text-gray-400">
                    medication
                  </span>
                  <input
                    className="w-full bg-gray-50 dark:bg-gray-800 border-0 focus:ring-2 focus:ring-primary focus:outline-none text-gray-800 dark:text-gray-200 rounded-lg "
                    placeholder="Dolo 650 Tablet"
                    type="text"
                  />
                </div>
                <button className="w-full md:w-auto bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-teal-600 dark:hover:bg-teal-500 transition-colors duration-300 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
                  Search
                </button>
              </form>
            </div>
          </div>
        </section>
        {/* Medicine description */}
        <section className="bg-teal-500 dark:bg-teal-700 text-white py-12 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-start md:items-center">
              <img
                alt="Dolo 650 mg"
                className="w-32 h-32 object-contain rounded-md mb-4 md:mb-0 md:mr-6"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEN4A1OhPMsWaqE-kHhXsKjAG9RumLLkeY6tMqsv1mT7SQcRi0cwP9s98ltvSfy_K-a83v5VTN89AsEipN8S05VM5yfhLf4kMm0d3LVTun4Cyo0xkgSxjnSTQze6_fdPDxMCCUDnOwQRI3dRxDF8GcS1LT33JxPDOSyH7f1s6hwqp3cE5XXkwxMLST_i8ZBl031-R4Xg9IsuMf5TiQRjEKiUkDtLjoxnK9_DPb8nBtM9pRdzkvt1ykOhctO48RRT0IO1nGjbf5wDqZ"
              />
              <div className="text-gray-800 dark:text-gray-200">
                <h2 className="text-3xl font-bold">Dolo 650 Tablet</h2>
                <p className="text-md text-gray-600 dark:text-gray-400 mt-1">
                  Composition: Paracetamol (650mg)
                </p>
                <div className="mt-4">
                  <h4 className="font-semibold mb-2">Product Highlights</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
                    <li>Relieves pain and fever.</li>
                    <li>Can be taken with or without food.</li>
                    <li>Should be taken as per the doctor's advice.</li>
                  </ul>
                </div>
              </div>
              <button className="ml-auto mt-4 md:mt-0 p-2 rounded-full self-start hover:bg-gray-200 dark:hover:bg-gray-700">
                <span className="material-icons text-teal-500">
                  bookmark_border
                </span>
              </button>
            </div>
          </div>
        </section>
        {/* Pharmacies */}
        <section className="py-16 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">
              Pharmacies near Kakkanad
            </h3>
            <div className="space-y-6">
              <PharmacyCard />
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-start">
                <img
                  alt="Apollo Pharmacy"
                  className="w-24 h-24 rounded-lg object-cover mr-6"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmRvA_BFbMVGmKQBjj_SGRLJlkhZKxfYRhhXYgjEF8xQj1MHB9ydUaZU_CEwB_2STGEEwzWePq-BpIf_2XaCeHbeUEe0eQkG_kCr9ifBcHqJwX3-o04xSWPGArZ7DpCOd767bfqBq75trLzQ3_uWQDwJSeYUVzHnITQgZlJovBIYK4pDqGOnzhxfEVdpkcmz9-AbmXiGuLhpn-JOMnau1sDtXc-7v-Evrwl6VMcvxInLTC2i3iQU-w2AXW40Knfovr8xeXQeQbP2Y9"
                />
                <div className="grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 dark:text-white">
                        Apollo Pharmacy
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        3.1 km away - Infopark Expressway, Kakkanad
                      </p>
                      <div className="flex items-center mt-2">
                        <div className="flex text-yellow-400">
                          <span className="material-icons text-sm">star</span>
                          <span className="material-icons text-sm">star</span>
                          <span className="material-icons text-sm">star</span>
                          <span className="material-icons text-sm">star</span>
                          <span className="material-icons text-sm">star_half</span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                          4.5 (210 reviews)
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 text-red-500 font-semibold">
                        <span className="material-icons">cancel</span>
                        <span>Out of Stock</span>
                      </div>
                      <button className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
                        <span className="material-icons text-gray-500 dark:text-gray-400">
                          bookmark_border
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
