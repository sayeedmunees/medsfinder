import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PharmacyCard from "../components/PharmacyCard";
import { Link, useSearchParams } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { LuMapPin } from "react-icons/lu";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import {
  searchMedicineAPI,
  getAllPharmaciesAPI,
  toggleSavedMedicineAPI,
} from "../../services/allAPI";
import { serverURL } from "../../services/serverURL";
import { toast } from "react-toastify";

const SearchMedicineCard = ({ medicine }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    if (medicine.saved) {
        setIsSaved(true);
    }
    // Also check session storage in case it was updated recently in this session 
     const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
     if (existingUser && existingUser.savedMedicines.includes(medicine._id)) {
       setIsSaved(true);
     }
  }, [medicine]);


  const handleSave = async (e) => {
    e.preventDefault(); 
    e.stopPropagation(); // Stop bubbling just in case

    const token = sessionStorage.getItem("token");
    if (!token) {
      toast.warning("Please login to save medicines");
      return;
    }

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    const reqBody = { medicineId: medicine._id };

    try {
      const result = await toggleSavedMedicineAPI(reqBody, reqHeader);
      if (result.status === 200) {
        setIsSaved(!isSaved);
        // Update session storage to keep it in sync for other components
        const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
         if (existingUser) {
            if (isSaved) {
                existingUser.savedMedicines = existingUser.savedMedicines.filter(mid => mid !== medicine._id);
            } else {
                existingUser.savedMedicines.push(medicine._id);
            }
            sessionStorage.setItem("existingUser", JSON.stringify(existingUser));
         }
        toast.success(result.data);
      } else {
        toast.error(result.response.data);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-start md:items-center hover:shadow-2xl transition duration-300 ease-in-out mb-6">
      <Link to={`/product/${medicine._id}`} className="shrink-0">
        <img
          alt={medicine.medicineName}
          className="w-32 h-32 object-contain rounded-md mb-4 md:mb-0 md:mr-6 cursor-pointer"
          src={
            medicine.uploadedImg
              ? `${serverURL}/upload/${medicine.uploadedImg}`
              : "https://via.placeholder.com/150"
          }
        />
      </Link>
      <div className="text-gray-800 flex-grow">
        <Link to={`/product/${medicine._id}`}>
          <h2 className="text-xl md:text-3xl font-bold hover:text-teal-600 transition-colors cursor-pointer inline-block">
            {medicine.medicineName}
          </h2>
        </Link>
        <p className="text-xs md:text-lg text-gray-600 ">
          Generic: {medicine.genericName}
        </p>
        <div className="mt-4">
          <h4 className="text-sm md:text-lg font-semibold mb-2">
            Product Description
          </h4>
          <p className="text-xs md:text-lg text-gray-600 ">
            {medicine.description}
          </p>
        </div>
      </div>
      <button 
        onClick={handleSave}
        className="ml-auto mt-4 md:mt-0 p-2 rounded-full self-start text-teal-500 text-xl hover:bg-gray-200 transition-colors"
      >
        {isSaved ? <FaBookmark /> : <FaRegBookmark />}
      </button>
    </div>
  );
};

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchKey = searchParams.get("search");
  const searchLocation = searchParams.get("location");
  
  const [medicines, setMedicines] = useState([]);
  const [pharmacies, setPharmacies] = useState([]);
  const [searchTerm, setSearchTerm] = useState(searchKey || "");
  const [selectedLocation, setSelectedLocation] = useState(searchLocation || "");

  // Fetch medicines based on search key
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
        // Filter by location
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


  useEffect(() => {
    setSearchTerm(searchKey || "");
    setSelectedLocation(searchLocation || "");
    getSearchMedicines();
    if(searchLocation) {
        getAllPharmacies();
    }
  }, [searchKey, searchLocation]);

  return (
    <>
      <Header />
      <div>
        {/* Search and results section */}
        <section className="bg-teal-600 py-8 px-4 sm:px-6 lg:px-8">
          <div className="mt-8 max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-2 flex flex-col md:flex-row items-center space-x-2 gap-2 group focus-within:outline-2 focus-within:outline-teal-300 focus-within:shadow-2xl">
            <div className="flex items-center p-2 w-[90%]">
              <LuMapPin className="text-2xl text-gray-500" />
              <select
                id="home-search-location"
                className="p-2 border-none outline-none rounded-md text-gray-700 bg-white focus:border-teal-600 focus:ring-2 focus:ring-teal-200 cursor-pointer w-full"
                value={selectedLocation}
                onChange={(e)=>setSelectedLocation(e.target.value)}
              >
                <option value="" disabled >
                  Select Location
                </option>
                <option className="border-none outline-none" value="Edapally">
                  Edapally
                </option>
                <option value="Kakkanad">Kakkanad</option>
                <option value="Kalamassery">Kalamassery</option>
                <option value="Palarivattam">Palarivattam</option>
              </select>
            </div>
            <div className="w-[90%] md:h-8 border-b md:w-auto md:border-0 md:border-l border-gray-300 "></div>
            <input
              id="home-search-medicine"
              className="w-full border-none pl-8 md:pl-1 outline-none bg-transparent text-gray-700 placeholder-gray-500 focus:ring-0 my-5 md:my-0"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for medicines"
              type="text"
            />
            <div className="w-full md:w-fit">
              <button
                onClick={() => {
                  if (searchTerm.trim() && selectedLocation) {
                    window.location.href = `/search-result?search=${searchTerm}&location=${selectedLocation}`;
                  } else if(!searchTerm.trim()) {
                    alert("Please enter a medicine name");
                  } else {
                     alert("Please select a location"); 
                  }
                }}
                className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-md flex justify-center items-center gap-2 w-full"
              >
                Search
                <FaMagnifyingGlass className="text-xl" />
              </button>
            </div>
          </div>

          <div className="py-12 max-w-4xl mx-auto">
            {medicines.length > 0 ? (
              <div className="space-y-6">
                <SearchMedicineCard key={medicines[0]._id} medicine={medicines[0]} />
              </div>
            ) : (
              <p className="text-white text-lg text-center">
                No medicines found.
              </p>
            )}
          </div>
        </section>

        {/* Pharmacies */}
        {medicines.length > 0 && (
          <section className="py-16 px-6 md:px-12 bg-gray-100">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800 ">
                Pharmacies near {selectedLocation}
              </h3>
              <div className="space-y-6">
                {pharmacies.length > 0 ? (
                  pharmacies.map((pharmacy) => {
                    // Determine stock status
                    // We check if the SEARCHED medicine name exists in the pharmacy's stock list
                    // We use the first result from medicines list as the target name
                    const targetMedicine =
                      medicines.length > 0 ? medicines[0].medicineName : "";
                    // Normalize for case-insensitive comparison
                    const inStock = pharmacy.pharmacyMedicinesInStock?.some(
                      (stockItem) =>
                        stockItem
                          .toLowerCase()
                          .includes(targetMedicine.toLowerCase()) ||
                        targetMedicine.toLowerCase().includes(stockItem.toLowerCase())
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
                        imageURL={
                          pharmacy.pharmacyImage
                            ? `${serverURL}/upload/${pharmacy.pharmacyImage}`
                            : "https://via.placeholder.com/150"
                        }
                        from="SearchPage"
                      />
                    );
                  })
                ) : (
                  <p className="text-gray-600">
                    No pharmacies found in this location.
                  </p>
                )}
              </div>
            </div>
          </section>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SearchPage;
