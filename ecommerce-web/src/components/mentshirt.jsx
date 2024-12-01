import React from 'react';

const tshirtProducts = [
  { id: 1, name: 'Classic White T-Shirt', price: '$25', image: 'https://via.placeholder.com/300?text=Classic+White+T-Shirt' },
  { id: 2, name: 'Graphic Tee', price: '$30', image: 'https://via.placeholder.com/300?text=Graphic+Tee' },
  { id: 3, name: 'V-Neck T-Shirt', price: '$28', image: 'https://via.placeholder.com/300?text=V-Neck+T-Shirt' },
  { id: 4, name: 'Striped T-Shirt', price: '$35', image: 'https://via.placeholder.com/300?text=Striped+T-Shirt' },
  { id: 5, name: 'Long Sleeve Tee', price: '$40', image: 'https://via.placeholder.com/300?text=Long+Sleeve+Tee' },
];

const MenTShirtsCollection = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">Men's T-Shirts Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tshirtProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-t-lg w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-gray-500">{product.price}</p>
              <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenTShirtsCollection;