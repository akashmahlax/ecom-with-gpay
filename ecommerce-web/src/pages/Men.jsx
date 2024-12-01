import React from 'react';
import { useNavigate } from 'react-router-dom';

const menCollection = [
  { id: 1, name: 'T-Shirt', price: '$20', image: 'https://via.placeholder.com/300x200?text=T-Shirt' },
  { id: 2, name: 'Jeans', price: '$40', image: 'https://via.placeholder.com/300x200?text=Jeans' },
  { id: 3, name: 'Jacket', price: '$60', image: 'https://via.placeholder.com/300x200?text=Jacket' },
];

const MenCollection = () => {
  const navigate = useNavigate();

  const handleProductClick = (productName) => {
    // Navigate to the product detail page
    navigate(`/products/${productName.toLowerCase()}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Men's Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menCollection.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md cursor-pointer"
            onClick={() => handleProductClick(product.name)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="rounded-t-lg w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold text-center">{product.name}</h2>
              <p className="text-center text-gray-500">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenCollection;