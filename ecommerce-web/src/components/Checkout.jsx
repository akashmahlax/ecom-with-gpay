import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(
    product ? parseFloat(product.price.replace('$', '')) : 0
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (product) {
      const price = parseFloat(product.price.replace('$', ''));
      setTotalPrice(price * quantity);
    }
  }, [product, quantity]);

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const onGooglePayButtonClicked = () => {
    setLoading(true);

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
              gateway: 'stripe', // Replace with your payment gateway
              gatewayMerchantId: 'your_stripe_merchant_id', // Replace with actual ID
            },
          },
        },
      ],
      merchantInfo: {
        merchantId: 'your_google_merchant_id', // Replace with your actual merchant ID
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
        fetch('http://localhost:5000/process-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(paymentData),
        })
          .then((response) => response.json())
          .then((data) => {
            alert(`Payment successful: ${data.message}`);
          })
          .catch((error) => {
            console.error('Payment failed', error);
            alert('Payment failed. Please try again.');
          })
          .finally(() => setLoading(false));
      })
      .catch((error) => {
        console.error('Google Pay Error:', error);
        alert('Payment could not be processed. Please try again.');
        setLoading(false);
      });
  };

  const handleBackToProducts = () => {
    navigate('/products');
  };

  return (
    <div className="min-h-screen  flex flex-col items-center justify-center bg-gray-400 p-6">
      {product ? (
        <div className="bg-slate-200 rounded-lg shadow-lg p-6 w-full max-w-md">
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
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Order Summary:</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Product: {product.name}</li>
              <li>Quantity: {quantity}</li>
              <li>Total: ₹{totalPrice.toFixed(2)}</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={onGooglePayButtonClicked}
              className={`w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Pay with Google Pay'}
            </button>
            <button
              onClick={handleBackToProducts}
              className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Back to Products
            </button>
          </div>
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
    </div>
  );
};

export default Checkout;