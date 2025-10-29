import React from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

const ProductsPage = () => {
  const productItems = [
    {
      title: "SPF 50+ Sunscreen",
      type: "Broad spectrum protection",
      price: "299",
      imageURL:
        "https://unblast.com/wp-content/uploads/2019/01/Tube-Mockup-1600x1226.jpg",
    },
    {
      title: "Hydrating Face Cream",
      type: "For all skin types",
      price: "249",
      imageURL:
        "https://unblast.com/wp-content/uploads/2022/02/Mini-Spray-Bottle-Packaging-Mockup-1536x1152.jpg",
    },
    {
      title: "Vitamin C Serum",
      type: "Brightens & evens skin tone",
      price: "329",
      imageURL:
        "https://unblast.com/wp-content/uploads/2020/10/Dropper-Packaging-Mockup--1536x1152.jpg",
    },
    {
      title: "Hand Sanitizer",
      type: "Removes dirt and kills germs",
      price: "149",
      imageURL:
        "https://unblast.com/wp-content/uploads/2020/11/Matt-Hand-Sanitizer-Mockup-1-1-1536x1024.jpg",
    },
    {
      title: "Vitamin C Serum",
      type: "Brightens & evens skin tone",
      price: "329",
      imageURL:
        "https://unblast.com/wp-content/uploads/2020/10/Dropper-Packaging-Mockup--1536x1152.jpg",
    },
    {
      title: "Hand Sanitizer",
      type: "Removes dirt and kills germs",
      price: "149",
      imageURL:
        "https://unblast.com/wp-content/uploads/2020/11/Matt-Hand-Sanitizer-Mockup-1-1-1536x1024.jpg",
    },
    {
      title: "Hydrating Face Cream",
      type: "For all skin types",
      price: "249",
      imageURL:
        "https://unblast.com/wp-content/uploads/2022/02/Mini-Spray-Bottle-Packaging-Mockup-1536x1152.jpg",
    },
    {
      title: "SPF 50+ Sunscreen",
      type: "Broad spectrum protection",
      price: "299",
      imageURL:
        "https://unblast.com/wp-content/uploads/2019/01/Tube-Mockup-1600x1226.jpg",
    },
    {
      title: "Hand Sanitizer",
      type: "Removes dirt and kills germs",
      price: "149",
      imageURL:
        "https://unblast.com/wp-content/uploads/2020/11/Matt-Hand-Sanitizer-Mockup-1-1-1536x1024.jpg",
    },
    {
      title: "Vitamin C Serum",
      type: "Brightens & evens skin tone",
      price: "329",
      imageURL:
        "https://unblast.com/wp-content/uploads/2020/10/Dropper-Packaging-Mockup--1536x1152.jpg",
    },
    {
      title: "SPF 50+ Sunscreen",
      type: "Broad spectrum protection",
      price: "299",
      imageURL:
        "https://unblast.com/wp-content/uploads/2019/01/Tube-Mockup-1600x1226.jpg",
    },
    {
      title: "Hydrating Face Cream",
      type: "For all skin types",
      price: "249",
      imageURL:
        "https://unblast.com/wp-content/uploads/2022/02/Mini-Spray-Bottle-Packaging-Mockup-1536x1152.jpg",
    },
  ];

  return (
    <>
      <Header />
      <section className="bg-teal-600 text-white py-16 px-6 md:px-12 text-center">
        <h2 className="text-2xl md:text-5xl font-bold mb-3">
          Personal Care & Hygiene Products
        </h2>
        <p className="text-base md:text-xl text-teal-100 dark:text-teal-200">
          Discover a wide range of products for your daily personal care needs.
        </p>
      </section>
      <section className="py-16 px-6 md:px-12 bg-gray-50 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productItems.map((item) => {
            return (
              <ProductCard
                key={item.title}
                title={item.title}
                type={item.type}
                price={item.price}
                imageURL={item.imageURL}
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductsPage;
