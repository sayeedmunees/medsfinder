import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaBookmark, FaRegBookmark, FaArrowLeft } from "react-icons/fa6";
import { serverURL } from "../../services/serverURL";
import { viewMedicineAPI, viewProductAPI, toggleSavedMedicineAPI } from "../../services/allAPI";
import { toast } from "react-toastify";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [isMedicine, setIsMedicine] = useState(true);

  const getProductDetails = async () => {
    try {
      // Try medicine first
      let result = await viewMedicineAPI(id);
      if (result.status === 200 && result.data) {
        setProduct(result.data);
        setIsMedicine(true);
        if (result.data.saved) setIsSaved(true);
        return;
      }

      // If not medicine, try product
      result = await viewProductAPI(id);
      if (result.status === 200 && result.data) {
        setProduct({
            ...result.data,
            medicineName: result.data.productName // Map productName to medicineName for UI consistency or handle in JSX
        });
        setIsMedicine(false);
        // Hygiene products don't have personal save yet in this implementation, but we'll show details
      }
    } catch (error) {
       console.log("Error fetching details:", error);
    }
  };

  useEffect(() => {
    getProductDetails();
    // Check session storage for saved status as well
    const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
    if (existingUser && existingUser.savedMedicines.includes(id)) {
      setIsSaved(true);
    }
  }, [id]);

  const handleSave = async () => {
    if (!isMedicine) {
        toast.info("Saving hygiene products will be available soon!");
        return;
    }
    const token = sessionStorage.getItem("token");
    if (!token) {
      toast.warning("Please login to save medicines");
      return;
    }

    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    const reqBody = { medicineId: id };

    try {
      const result = await toggleSavedMedicineAPI(reqBody, reqHeader);
      if (result.status === 200) {
        setIsSaved(!isSaved);
        // Update session storage
        const existingUser = JSON.parse(sessionStorage.getItem("existingUser"));
         if (existingUser) {
            if (isSaved) {
                existingUser.savedMedicines = existingUser.savedMedicines.filter(mid => mid !== id);
            } else {
                existingUser.savedMedicines.push(id);
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

  if (!product) {
    return <div className="p-20 text-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="bg-gray-100 px-6 md:px-12 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold transition-colors"
        >
          <FaArrowLeft /> Back
        </button>
      </div>

      <section className="flex-grow py-10 px-6 md:px-12 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={
                product.uploadedImg
                  ? `${serverURL}/upload/${product.uploadedImg}`
                  : "https://via.placeholder.com/400"
              }
              alt={product.medicineName}
              className="max-h-[600px] rounded-lg shadow-xl"
            />
          </div>

          <div className="lg:w-1/2 pt-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
              {product.medicineName}
            </h1>

            <p className="text-lg text-gray-500 mb-2">{product.brandName}</p>
            <p className="text-2xl font-bold text-teal-600 mb-6">
              ₹{product.price}
            </p>

            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="flex gap-4 flex-wrap">
              {isMedicine && (
                <Link to={`/search-result?search=${product.medicineName}`}>
                  <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-full">
                    Find Pharmacies With Availability
                  </button>
                </Link>
              )}

              {isMedicine && (
                <button
                  onClick={handleSave}
                  className="bg-gray-200 hover:bg-teal-600 text-teal-600 hover:text-white font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  {isSaved ? (
                    <span className="flex items-center gap-2">
                      <FaBookmark /> Saved
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <FaRegBookmark /> Save
                    </span>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
