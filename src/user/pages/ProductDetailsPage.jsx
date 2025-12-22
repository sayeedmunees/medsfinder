import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { serverURL } from "../../services/serverURL";
import { viewMedicineAPI } from "../../services/allAPI";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getMedicineDetails = async () => {
    const result = await viewMedicineAPI(id);
    if (result.status === 200) {
      setProduct(result.data);
    }
  };

  useEffect(() => {
    getMedicineDetails();
  }, [id]);

  if (!product) {
    return <div className="p-20 text-center">Loading...</div>;
  }

  return (
    <>
      <Header />

      <section className="py-16 px-6 md:px-12 bg-gray-100">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 flex justify-center">
            <img
              src={`${serverURL}/upload/${product.uploadedImg}`}
              alt={product.medicineName}
              className="max-h-[600px] rounded-lg shadow-xl"
            />
          </div>

          <div className="lg:w-1/2 pt-6">
            <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-2">
              {product.medicineName}
            </h1>

            <p className="text-lg text-gray-500 mb-6">{product.brandName}</p>

            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link to="/search-result">
                <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-full">
                  Find Pharmacies With Availability
                </button>
              </Link>

              <button className="bg-gray-200 hover:bg-teal-600 text-teal-600 hover:text-white font-semibold px-6 py-3 rounded-full">
                {product.saved ? (
                  <span className="flex items-center gap-2">
                    <FaBookmark /> Saved
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <FaRegBookmark /> Save
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductDetailsPage;
