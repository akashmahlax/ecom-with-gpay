import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'T-Shirt', price: '$20', image: '/images/tshirt.jpg' },
  { id: 2, name: 'Shoes', price: '$50', image: '/images/shoes.jpg' },
  { id: 3, name: 'Watch', price: '$100', image: '/images/watch.jpg' },
];

const Products = () => {
  const navigate = useNavigate();

  const handleBuyNow = (product) => {
    // Redirect to the checkout page with the product details
    navigate('/checkout', { state: { product } });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-t-lg w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold">{product.name}</h2>
            <p className="text-gray-500">{product.price}</p>
            <div className="mt-2 flex space-x-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
                Add to Cart
              </button>
              <button
                onClick={() => handleBuyNow(product)}
                className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
