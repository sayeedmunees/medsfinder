import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import TotalCards from "../components/TotalCards";
import AdProductCard from "../components/AdProductCard";
import { IoMdClose } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import AddProductForm from "../components/AddProductForm";
import EditProductForm from "../components/EditProductForm";
import { getAllProductsAPI, deleteProductAPI } from "../../services/allAPI";
import { serverURL } from "../../services/serverURL";
import { toast } from "react-toastify";

const AdminAdvertisement = () => {
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [showEditProduct, setShowEditProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const result = await getAllProductsAPI();
      if (result.status === 200) {
        setAllProducts(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleDeleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const token = sessionStorage.getItem("token");
      if (token) {
        const reqHeader = {
          Authorization: `Bearer ${token}`,
        };
        try {
          const result = await deleteProductAPI(id, reqHeader);
          if (result.status === 200) {
            toast.success("Product deleted successfully");
            getAllProducts();
          } else {
            toast.error("Failed to delete product");
          }
        } catch (error) {
          console.log(error);
          toast.error("Something went wrong");
        }
      }
    }
  };

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setShowEditProduct(true);
  };

  return (
    <>
      <div className="flex h-screen" id="root">
        <Sidebar from="advertisement" />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header from="advertisements" />
          <main className="flex-1 p-6 md:p-12 bg-gray-100  overflow-y-auto">
            <div className="md:hidden bg-white rounded-lg shadow p-6 mb-2">
              <h3 className="text-sm font-medium text-red-500 ">
                Use a bigger screen for better experience.
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-6 mb-8">
              <TotalCards 
                icon="click" 
                count={allProducts.reduce((acc, product) => acc + (product.totalClicks || 0), 0)} 
                item="Clicks" 
              />
              <TotalCards
                icon="ad"
                count={allProducts.length}
                item="Ad Products"
              />
            </div>
            <div className="mb-8">
              <div className="flex flex-col lg:flex-row justify-between py-2 mb-3 lg:mb-6 gap-2">
                <h3 className="text-xl md:text-3xl font-bold text-gray-800">
                  Current Products
                </h3>
                <button
                  onClick={() => setShowAddProduct(true)}
                  className="flex items-center justify-center font-semibold w-fit px-4 py-3 bg-teal-600 text-sm md:text-base text-white rounded-lg shadow-md hover:bg-teal-700 transition-colors"
                >
                  <FaPlus className=" mr-2" />
                  Add New Product
                </button>
              </div>
              <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                id="product-grid"
              >
                {allProducts.length > 0 ? (
                  allProducts.map((item) => (
                    <AdProductCard
                      key={item._id}
                      product={item}
                      onEdit={handleEditClick}
                      onDelete={handleDeleteProduct}
                    />
                  ))
                ) : (
                  <p className="text-gray-500">No products added yet.</p>
                )}
              </div>
            </div>
          </main>
        </div>
        {showAddProduct && (
          <AddProductForm
            showAddProduct={() => {
              setShowAddProduct(false);
              getAllProducts(); // Refresh list after adding
            }}
          />
        )}
        {showEditProduct && selectedProduct && (
          <EditProductForm
            product={selectedProduct}
            showEditProduct={() => {
              setShowEditProduct(false);
              setSelectedProduct(null);
            }}
            onUpdateSuccess={getAllProducts}
          />
        )}
      </div>
    </>
  );
};

export default AdminAdvertisement;
