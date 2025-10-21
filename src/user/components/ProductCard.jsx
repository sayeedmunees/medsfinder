import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <>
      <Link to={"/product"}>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group">
          <div className="relative">
            <img
              alt="Moisturizer"
              className="w-full h-56 object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBx5o5SBXQPYFQDyqlD1WdR07sICg4lx4wvMZWBhNxIxVMduGSfRUveghapewgGruiMGdNuA9AUzGKMtnvARpnWN4AVkM8LNdUMYrdu1iN7VggoPzPwOXXB8hQiR3ciWZcHINuyKXqgSPN8bAVSh7n35vGl7Us5dXRHAWczGR_i34qNRmzvcQtP7nx_Qxsx8p75uvgPE8zDKLwAc7sXNBfz2WUultVlHXwvn89jqrvq3Avnl3gEU_yILYXwS_4HgQwr9YSP8z-AZ6oP"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-primary text-white py-2 px-4 rounded-full font-semibold">
                Shop Now
              </button>
            </div>
          </div>
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              Vitamin C Serum
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              For all skin types
            </p>
            <p className="text-primary font-bold text-lg mt-4">$24.99</p>{" "}
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
