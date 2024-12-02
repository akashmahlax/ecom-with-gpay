import React, { useState, useEffect } from "react";

const ProductCarousel = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % product.images.length
      );
    }, 1500); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [product.images.length]);

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="relative h-48 w-full overflow-hidden rounded-md">
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-500">{product.price}</p>
        <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300">
          Add to Cart
        </button>
        <button className="ml-6 px-4 py-2  bg-gradient-to-tr from-indigo-600 to-pink-600 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors duration-300">
         Buy now
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;