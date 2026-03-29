import React from "react";
import { Link } from "react-router-dom";

import { incrementProductClicksAPI } from "../../services/allAPI";
import { getImagePath } from "../../services/imagePath";

const ProductCard = ({ id, title, type, price, imageURL }) => {
  const handleCardClick = async () => {
    try {
      await incrementProductClicksAPI(id);
    } catch (error) {
      console.log("Error incrementing click:", error);
    }
  };

  return (
    <>
      <Link to={`/product/${id}`} onClick={handleCardClick}>
        <div className="bg-card border border-border h-100 rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300">
          <div className="relative">
            <img
              alt={title}
              className="w-full h-56 object-cover"
              src={getImagePath(imageURL)}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button className="bg-brand-primary text-brand-text py-2 px-4 rounded-full font-semibold hover:bg-brand-primary/90 transition-colors">
                Shop Now
              </button>
            </div>
          </div>
          <div className="p-6">
            <h4 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {title}
            </h4>
            <p className="text-muted-foreground">
              {type}
            </p>
            <p className="text-primary font-bold text-lg mt-4">₹{price}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
