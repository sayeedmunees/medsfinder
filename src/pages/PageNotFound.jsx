import React from "react";
import Header from "../user/components/Header";
import Footer from "../user/components/Footer";
import { AiFillHome } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 10000);
  return (
    <>
      <Header />
      <div className="min-h-[60vh] bg-gray-100 flex items-center justify-center py-16 px-6 md:px-12">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-6xl md:text-8xl font-bold text-teal-600 mb-4 animate-pulse">
            404
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Page Not Found
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Oops! It looks like the page you're looking for doesn't exist. You
            will be auto redirected to home page or Click below to go back to
            home.
          </p>
          <Link to={"/"} className="w-full flex justify-center">
            <button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-md flex justify-center items-center gap-2 w-fit text-xl md:text-2xl">
              <AiFillHome />
              Back to Home
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageNotFound;
