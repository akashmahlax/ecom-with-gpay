import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const recommendedProducts = [
    { id: 1, name: 'T-Shirt', price: '$120', image: 'https://images.unsplash.com/photo-1602810320073-1230c46d89d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2hpcnRzfGVufDB8fDB8fHww' },
    { id: 2, name: 'Shoes', price: '$150', image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob2VzfGVufDB8fDB8fHww' },
    { id: 3, name: 'Watch', price: '$100', image: 'https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D' },
];

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(
    product ? parseFloat(product.price.replace('$', '')) : 0
  );
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('GooglePay');
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  useEffect(() => {
    if (product) {
      const price = parseFloat(product.price.replace('$', ''));
      setTotalPrice(price * quantity);
    }
  }, [product, quantity]);

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handlePayment = () => {
    setLoading(true);
    if (selectedPaymentMethod === 'GooglePay') {
      onGooglePayButtonClicked();
    } else if (selectedPaymentMethod === 'PayPal') {
      // Simulate PayPal payment
      setTimeout(() => {
        setLoading(false);
        setPaymentSuccess(true);
      }, 1500);
    } else if (selectedPaymentMethod === 'COD') {
      // Handle COD (e.g., place order directly)
      setTimeout(() => {
        setLoading(false);
        setPaymentSuccess(true);
      }, 1500);
    }
  };

  const onGooglePayButtonClicked = () => {
    const paymentDataRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['MASTERCARD', 'VISA'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'stripe',
              gatewayMerchantId: 'your_stripe_merchant_id',
            },
          },
        },
      ],
      merchantInfo: {
        merchantId: 'your_google_merchant_id',
        merchantName: 'Akash Mahla',
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPrice: totalPrice.toFixed(2),
        currencyCode: 'INR',
      },
    };

    const paymentsClient = new window.google.payments.api.PaymentsClient({
      environment: 'TEST',
    });

    paymentsClient
      .loadPaymentData(paymentDataRequest)
      .then((paymentData) => {
        console.log('Payment successful:', paymentData);
        setLoading(false);
        setPaymentSuccess(true);
      })
      .catch((error) => {
        console.error('Payment failed:', error);
        setLoading(false);
      });
  };

  const handleBackToProducts = () => {
    navigate('/products');
  };

  const handleViewProduct = (recommendedProduct) => {
    navigate('/checkout', { state: { product: recommendedProduct } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-6">
      {paymentSuccess ? (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-green-500 mb-4">Payment Successful!</h1>
          <button
            onClick={handleBackToProducts}
            className="mt-4 bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Back to Products
          </button>
        </div>
      ) : product ? (
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-4">
            Price (per item): {product.price}
          </p>
          <div className="mb-4">
            <label htmlFor="quantity" className="block text-gray-600 mb-1">
              Quantity:
            </label>
            <input
              id="quantity"
              type="number"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <p className="text-lg font-bold text-gray-800 mb-4">
            Total Price: ₹{totalPrice.toFixed(2)}
          </p>

          <h2 className="text-lg font-semibold text-gray-700 mb-2">Select Payment Method:</h2>
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setSelectedPaymentMethod('GooglePay')}
              className={`px-4 py-2 rounded-lg ${selectedPaymentMethod === 'GooglePay' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
            >
              Google Pay
            </button>
            <button
              onClick={() => setSelectedPaymentMethod('PayPal')}
              className={`px-4 py-2 rounded-lg ${selectedPaymentMethod === 'PayPal' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              PayPal
            </button>
            <button
              onClick={() => setSelectedPaymentMethod('COD')}
              className={`px-4 py-2 rounded-lg ${selectedPaymentMethod === 'COD' ? 'bg-gray-500 text-white' : 'bg-gray-200'}`}
            >
              COD
            </button>
          </div>

          <button
            onClick={handlePayment}
            className={`w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Proceed to Pay'}
          </button>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-red-500 text-lg">No product selected for checkout.</p>
          <button
            onClick={handleBackToProducts}
            className="mt-4 bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Back to Products
          </button>
        </div>
      )}

      <div className="mt-10">
        <h2 className="text-xl font-bold text-gray-800 mb-4">You May Also Like:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {recommendedProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center cursor-pointer hover:shadow-lg transition"
              onClick={() => handleViewProduct(item)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg mb-2"
              />
              <h3 className="text-md font-semibold">{item.name}</h3>
              <p className="text-gray-500">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;