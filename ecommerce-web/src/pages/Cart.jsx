import React from 'react';
import { useCart } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, setCart } = useCart();
  const navigate = useNavigate();

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, quantity) }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalPrice = () => {
    return cart.reduce(
      (total, item) =>
        total + parseFloat(item.price.replace('$', '')) * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
    } else {
      navigate('/checkout');
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart.map((product) => (
              <li
                key={product.id}
                className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-grow">
                  <h2 className="text-lg font-bold">{product.name}</h2>
                  <p className="text-gray-500">Price: {product.price}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <label htmlFor={`quantity-${product.id}`}>Quantity:</label>
                    <input
                      type="number"
                      id={`quantity-${product.id}`}
                      min="1"
                      value={product.quantity || 1}
                      onChange={(e) =>
                        updateQuantity(product.id, parseInt(e.target.value))
                      }
                      className="w-16 p-1 border rounded"
                    />
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <h2 className="text-xl font-bold">Total Price: ${getTotalPrice().toFixed(2)}</h2>
            <div className="flex space-x-4 mt-4">
              <button
                onClick={clearCart}
                className="px-4 py-2 bg-gray-500 text-white rounded-full hover:bg-gray-600"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="px-4 py-2 bg-green-500 text-white rounded-full hover:bg-green-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;