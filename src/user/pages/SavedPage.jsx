import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MedicineCard from "../components/MedicineCard";
import PharmacyCard from "../components/PharmacyCard";
import { getSavedItemsAPI } from "../../services/allAPI";
import { serverURL } from "../../services/serverURL";

const SavedPage = () => {
  const [medicineTab, setMedicineTab] = useState(true);
  const [pharmacyTab, setPharmacyTab] = useState(false);
  const [savedMedicines, setSavedMedicines] = useState([]);
  const [savedPharmacies, setSavedPharmacies] = useState([]);

  const getSavedItems = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
      };
      try {
        const result = await getSavedItemsAPI(reqHeader);
        if (result.status === 200) {
          setSavedMedicines(result.data.savedMedicines);
          setSavedPharmacies(result.data.savedPharmacies);
          
          // Update session storage
           const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
           if (existingUser) {
                existingUser.savedMedicines = result.data.savedMedicines.map(item => item._id);
                existingUser.savedPharmacies = result.data.savedPharmacies.map(item => item._id);
                sessionStorage.setItem("existingUser", JSON.stringify(existingUser));
           }

        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    getSavedItems();
  }, []);

  const handlePharmacyTab = () => {
    setMedicineTab(false);
    setPharmacyTab(true);
  };

  const handlemedicineTab = () => {
    setPharmacyTab(false);
    setMedicineTab(true);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen px-6 md:px-12 py-8 bg-gray-200">
        <h2 className="text-xl md:text-4xl font-bold mb-8 text-gray-800 ">
          Your Saved List
        </h2>
        <section className="mb-8">
          <div className="flex border-b border-gray-200 ">
            <button
              onClick={handlemedicineTab}
              className={
                medicineTab
                  ? "px-4 py-2 text-base md:text-lg font-semibold text-teal-600 border-b-2 border-teal-600 hover:text-teal-500"
                  : "px-4 py-2 text-base md:text-lg font-semibold text-gray-600  hover:text-teal-500"
              }
            >
              Saved Medicines
            </button>
            <button
              onClick={handlePharmacyTab}
              className={
                pharmacyTab
                  ? "px-4 py-2 text-base md:text-lg font-semibold text-teal-600 border-b-2 border-teal-500 hover:text-teal-500"
                  : "px-4 py-2 text-base md:text-lg font-semibold text-gray-600  hover:text-teal-500"
              }
            >
              Saved Pharmacies
            </button>
          </div>
        </section>

        {medicineTab && (
          <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {savedMedicines?.length > 0 ? (
              savedMedicines.map((item) => (
                <MedicineCard
                  key={item._id}
                  id={item._id}
                  title={item.medicineName}
                  brand={item.brandName}
                  imageURL={item.uploadedImg}
                />
              ))
            ) : (
              <p className="text-gray-500">No saved medicines found.</p>
            )}
          </section>
        )}

        {pharmacyTab && (
          <section className="space-y-6">
            {savedPharmacies?.length > 0 ? (
              savedPharmacies.map((pharmacy) => (
                <PharmacyCard
                  key={pharmacy._id}
                  id={pharmacy._id}
                  shopName={pharmacy.pharmacyName}
                  location={pharmacy.pharmacyLocationName}
                  direction={pharmacy.pharmacyLocationLink}
                  rating={pharmacy.rating}
                  reviews={pharmacy.reviews}
                  inStock={true} // You might want real stock logic here later
                  imageURL={`${serverURL}/upload/${pharmacy.pharmacyImage}`}
                />
              ))
            ) : (
                <p className="text-gray-500">No saved pharmacies found.</p>
            )}
          </section>
        )}
      </div>
      <Footer />
    </>
  );
};

export default SavedPage;
