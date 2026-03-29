import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MedicineCard from "../components/MedicineCard";
import PharmacyCard from "../components/PharmacyCard";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import {
  getAllMedicinesAPI,
  getAllPharmaciesAPI,
} from "../../services/allAPI";
import { serverURL } from "../../services/serverURL";
import { toast } from "react-toastify";

const SavedPage = () => {
  const navigate = useNavigate();
  const [medicineTab, setMedicineTab] = useState(true);
  const [pharmacyTab, setPharmacyTab] = useState(false);
  const [savedMedicines, setSavedMedicines] = useState([]);
  const [savedPharmacies, setSavedPharmacies] = useState([]);

  const getSavedItems = async () => {
    const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));

    if (existingUser) {
      const savedMedicineIds = existingUser.savedMedicines || [];
      const savedPharmacyIds = existingUser.savedPharmacies || [];

      try {
        // Fetch all medicines
        const medicineResult = await getAllMedicinesAPI();
        if (medicineResult.status === 200) {
          const filteredMedicines = medicineResult.data.filter((item) =>
            savedMedicineIds.includes(item._id)
          );
          setSavedMedicines(filteredMedicines);
        }

        // Fetch all pharmacies
        const pharmacyResult = await getAllPharmaciesAPI();
        if (pharmacyResult.status === 200) {
          const filteredPharmacies = pharmacyResult.data.filter((item) =>
            savedPharmacyIds.includes(item._id)
          );
          setSavedPharmacies(filteredPharmacies);
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

  const onItemToggle = (id, isSaved, item, type) => {
    if (!isSaved) {
      toast.error(
        `Removed ${type === "medicine" ? item.medicineName : item.pharmacyName}`
      );

      if (type === "medicine") {
        setSavedMedicines((prev) => prev.filter((m) => m._id !== id));
      } else {
        setSavedPharmacies((prev) => prev.filter((p) => p._id !== id));
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <Header />
      <div className="bg-background px-6 md:px-12 pt-6 transition-colors duration-300">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
        >
          <FaArrowLeft /> Back
        </button>
      </div>
      <div className="grow px-6 md:px-12 py-8 bg-background transition-colors duration-300">
        <h1 className="mb-8">
          Your Saved List
        </h1>
        <section className="mb-8">
          <div className="flex border-b border-border">
            <button
              onClick={handlemedicineTab}
              className={`px-4 py-2 font-semibold transition-all border-b-2 ${
                medicineTab
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-primary"
              }`}
            >
              Saved Medicines
            </button>
            <button
              onClick={handlePharmacyTab}
              className={`px-4 py-2 font-semibold transition-all border-b-2 ${
                pharmacyTab
                  ? "text-primary border-primary"
                  : "text-muted-foreground border-transparent hover:text-primary"
              }`}
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
                  onToggle={(id, isSaved) =>
                    onItemToggle(id, isSaved, item, "medicine")
                  }
                  showToast={false}
                />
              ))
            ) : (
              <p className="text-muted-foreground">No saved medicines found.</p>
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
                  inStock={true}
                  imageURL={`${serverURL}/upload/${pharmacy.pharmacyImage}`}
                  onToggle={(id, isSaved) =>
                    onItemToggle(id, isSaved, pharmacy, "pharmacy")
                  }
                  showToast={false}
                />
              ))
            ) : (
              <p className="text-muted-foreground">No saved pharmacies found.</p>
            )}
          </section>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default SavedPage;
