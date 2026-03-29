import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import { FaMagnifyingGlass, FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { getAllProductsAPI } from "../../services/allAPI";
import { serverURL } from "../../services/serverURL";

const ProductsPage = () => {
  const navigate = useNavigate();
  const [allProducts, setAllProducts] = useState([]);
  const [searchKey, setSearchKey] = useState("");

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

  const filteredProducts = allProducts.filter((product) =>
    product.productName.toLowerCase().includes(searchKey.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen transition-colors duration-300">
      <Header />
      <div className="bg-brand-primary px-6 md:px-12 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-brand-text hover:text-brand-muted font-semibold transition-colors"
        >
          <FaArrowLeft /> Back
        </button>
      </div>
      <div className="grow">
        <section className="bg-brand-primary text-brand-text py-10 px-6 md:px-12 text-center">
          <h1 className="text-2xl md:text-5xl font-bold text-brand-text mb-3">
            Personal Care & Hygiene Products
          </h1>
          <p className="text-base md:text-xl text-brand-text/80">
            Discover a wide range of products for your daily personal care
            needs.
          </p>
          <div className="mt-16 md:mt-8 max-w-md mx-auto bg-card rounded-lg shadow-lg p-2 flex flex-col md:flex-row items-center space-x-2 group focus-within:outline-2 focus-within:outline-brand-primary/50 focus-within:shadow-2xl transition-all">
            <input
              className="w-full border-none pl-8 md:pl-1 outline-none bg-transparent text-foreground placeholder-muted-foreground mt-5 md:my-0 focus:ring-0"
              placeholder="Search for a product"
              type="text"
              value={searchKey}
              onChange={(e) => setSearchKey(e.target.value)}
            />
            <div className="w-[90%] md:hidden border-t my-3 border-border "/>
            <button className="btn-primary flex justify-center items-center gap-2 w-full md:w-fit">
              Search
              <FaMagnifyingGlass className="text-xl" />
            </button>
          </div>
        </section>
        <section className="py-16 px-6 md:px-12 bg-background transition-colors duration-300">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((item) => (
                <ProductCard
                  key={item._id}
                  id={item._id}
                  title={item.productName}
                  type={item.brandName}
                  price={item.price}
                  imageURL={`${serverURL}/upload/${item.uploadedImg}`}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-muted-foreground text-lg">
                  No products found matching your search.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;
