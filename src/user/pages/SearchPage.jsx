import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PharmacyCard from "../components/PharmacyCard";
import { Link, useSearchParams } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { searchMedicineAPI, getAllPharmaciesAPI } from "../../services/allAPI";
import { getImagePath } from "../../services/imagePath";
import SearchMedicineCard from "../components/SearchMedicineCard";
import { toast, ToastContainer } from "react-toastify";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchKey = searchParams.get("search");
  const searchLocation = searchParams.get("location");

  const [medicines, setMedicines] = useState([]);
  const [pharmacies, setPharmacies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(searchKey || "");
  const [selectedLocation, setSelectedLocation] = useState(
    searchLocation || ""
  );

  // Fetch medicines
  const getSearchMedicines = async () => {
    if (searchKey) {
      try {
        const result = await searchMedicineAPI(searchKey);
        if (result.status === 200) {
          setMedicines(result.data);
        }
      } catch (error) {
        console.error("Error fetching medicines:", error);
      }
    }
  };

  const getAllPharmacies = async () => {
    try {
      const result = await getAllPharmaciesAPI();
      if (result.status === 200) {
        const allPharmacies = result.data;
        // filter by location
        const locationFiltered = allPharmacies.filter(
          (pharmacy) =>
            pharmacy.pharmacyLocationName?.toLowerCase() ===
            selectedLocation.toLowerCase()
        );
        setPharmacies(locationFiltered);
      }
    } catch (error) {
      console.error("Error fetching pharmacies:", error);
    }
  };

  const handleSearch = () => {
    if (searchTerm.trim() && selectedLocation) {
      window.location.href = `/search-result?search=${searchTerm}&location=${selectedLocation}`;
    } else if (!searchTerm.trim()) {
      toast.info("Please enter a medicine name");
    } else {
      toast.info("Please select a location");
    }
  };

  useEffect(() => {
    setSearchTerm(searchKey || "");
    setSelectedLocation(searchLocation || "");
    getSearchMedicines();
    if (searchLocation) {
      getAllPharmacies();
    }
  }, [searchKey, searchLocation]);

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <Header />
      <div className="grow">
        {/* Search and results section */}
        <section className="bg-brand-primary py-8 px-4 sm:px-6 lg:px-8">
          <div className="mt-8 max-w-4xl mx-auto bg-card rounded-lg shadow-lg p-2 flex flex-col md:flex-row items-center space-x-2 gap-2 group focus-within:outline-2 focus-within:outline-brand-primary/50 focus-within:shadow-2xl transition-all">
            <div className="flex items-center p-2 w-[90%]">
              <LuMapPin className="text-2xl text-muted-foreground" />
              <select
                id="home-search-location"
                className="p-2 border-none outline-none rounded-md text-foreground bg-card focus:ring-0 cursor-pointer w-full"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
              >
                <option value="" disabled>
                  Select Location
                </option>
                <option value="Edapally">Edapally</option>
                <option value="Kakkanad">Kakkanad</option>
                <option value="Kalamassery">Kalamassery</option>
                <option value="Palarivattam">Palarivattam</option>
              </select>
            </div>
            <div className="w-[90%] md:h-8 border-b md:w-auto md:border-0 md:border-l border-border "></div>
            <input
              id="home-search-medicine"
              className="w-full border-none pl-8 md:pl-1 outline-none bg-transparent text-foreground placeholder-muted-foreground focus:ring-0 my-5 md:my-0"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for medicines"
              type="text"
            />
            <div className="w-full md:w-fit">
              <button
                onClick={handleSearch}
                className="bg-brand-primary hover:bg-brand-primary text-brand-text font-semibold py-3 px-6 rounded-md flex justify-center items-center gap-2 w-full transition-colors"
              >
                Search
                <FaMagnifyingGlass className="text-xl" />
              </button>
            </div>
          </div>

          <div className="py-12 max-w-4xl mx-auto">
            {medicines.length > 0 ? (
              <div className="space-y-6">
                <SearchMedicineCard
                  key={medicines[0]._id}
                  medicine={medicines[0]}
                />
              </div>
            ) : (
              <p className="text-brand-text text-lg text-center opacity-90">
                No medicines found.
              </p>
            )}
          </div>
        </section>

        {/* Pharmacies */}
        {medicines.length > 0 && (
          <section className="py-16 px-6 md:px-12 bg-background transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
              <h3 className="mb-6">
                Pharmacies near {searchLocation}
              </h3>
              <div className="space-y-6">
                {pharmacies.length > 0 ? (
                  pharmacies.map((pharmacy) => {
                    const targetMedicine =
                      medicines.length > 0 ? medicines[0].medicineName : "";

                    const inStock = pharmacy.pharmacyMedicinesInStock?.some(
                      (stockItem) =>
                        stockItem
                          .toLowerCase()
                          .includes(targetMedicine.toLowerCase())
                    );

                    return (
                      <PharmacyCard
                        key={pharmacy._id}
                        id={pharmacy._id}
                        shopName={pharmacy.pharmacyName}
                        location={pharmacy.pharmacyLocationName}
                        direction={pharmacy.pharmacyLocationLink}
                        rating={pharmacy.pharmacyRating}
                        reviews={pharmacy.pharmacyReviews}
                        inStock={inStock}
                        saved={false}
                        imageURL={getImagePath(pharmacy.pharmacyImage) || "https://via.placeholder.com/150"}
                        
                      />
                    );
                  })
                ) : (
                  <p className="text-foreground opacity-70">
                    No pharmacies found in this location.
                  </p>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
      <ToastContainer theme="colored" position="top-center" autoClose={2500} />
    </div>
  );
};

export default SearchPage;
