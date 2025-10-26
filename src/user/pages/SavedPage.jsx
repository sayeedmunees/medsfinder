import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MedicineCard from "../components/MedicineCard";
import PharmacyCard from "../components/PharmacyCard";

const SavedPage = () => {
  const [medicineTab, setMedicineTab] = useState(true);
  const [pharmacyTab, setPharmacyTab] = useState(false);

  const medicineItems = [
    {
      title: "Panadol Advance",
      brand: "Sun Pharma Ltd",
      imageURL:
        "https://pharmazone.com/cdn/shop/files/20883-PANADOL_ADVANCE_48_TAB_Front_Side.webp?v=1746619875&width=1000",
      saved: false,
    },
    {
      title: "Meftal Forte",
      brand: "Micro Labs Ltd",
      imageURL:
        "https://mockuphunt.co/cdn/shop/products/Box_Mockups_OK_3_241036b2-175b-484e-960d-3c632a6e0f48_800x.jpg?v=1524830968",
      saved: true,
    },
    {
      title: "Ascoril Cough Syrup",
      brand: "Cipla Ltd",
      imageURL:
        "https://www.graphicsfuel.com/wp-content/uploads/2022/12/medicine-syrup-bottle-mockup1.jpg",
      saved: true,
    },
    {
      title: "Panadol Extra",
      brand: "Sun Pharma Ltd",
      imageURL:
        "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/health-professionals/en_PK/pain-relief/packshots/Extra_25_970x416.png?auto=format",
      saved: false,
    },
    {
      title: "Multi Vitamin Tablet",
      brand: "Micro Labs Ltd",
      imageURL:
        "https://keysupplements.in/wp-content/uploads/2023/05/Multi-Vitamin-Mockup-min-1.png",
      saved: true,
    },
  ];

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
      <main className="min-h-screen px-6 md:px-12 py-8 bg-gray-200">
        <h2 className="text-xl md:text-4xl font-bold mb-8 text-gray-800 ">
          Your Saved List
        </h2>
        <div className="mb-8">
          <div className="flex border-b border-gray-200 ">
            <button
              onClick={handlemedicineTab}
              className={
                medicineTab
                  ? "px-4 py-2 text-base md:text-lg font-semibold text-teal-600 border-b-2 border-teal-500"
                  : "px-4 py-2 text-base md:text-lg font-semibold text-gray-600  hover:text-teal-500"
              }
            >
              Saved Medicines
            </button>
            <button
              onClick={handlePharmacyTab}
              className={
                pharmacyTab
                  ? "px-4 py-2 text-base md:text-lg font-semibold text-teal-600 border-b-2 border-teal-500"
                  : "px-4 py-2 text-base md:text-lg font-semibold text-gray-600  hover:text-teal-500"
              }
            >
              Saved Pharmacies
            </button>
          </div>
        </div>

        {medicineTab && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {medicineItems
              .filter((item) => item.saved)
              .map((item) => {
                return (
                  <MedicineCard
                    key={item.title}
                    title={item.title}
                    brand={item.brand}
                    imageURL={item.imageURL}
                    saved={item.saved}
                  />
                );
              })}
          </div>
        )}

        {pharmacyTab && (
          <div className="space-y-6">
            {pharmacies
              .filter((item) => item.saved)
              .map((pharmacy) => {
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
        )}
      </main>
      <Footer />
    </>
  );
};

export default SavedPage;
