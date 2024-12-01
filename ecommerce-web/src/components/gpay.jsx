import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  useEffect(() => {
    if (!product) {
      console.error('No product data found!');
    }
  }, [product]);

  const onGooglePayButtonClicked = () => {
    const paymentDataRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: 'CARD',
          parameters: {
            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
            allowedCardNetworks: ['MASTERCARD', 'VISA', 'RUPAY'],
          },
          tokenizationSpecification: {
            type: 'PAYMENT_GATEWAY',
            parameters: {
              gateway: 'example',
              gatewayMerchantId: 'exampleMerchantId',
            },
          },
        },
      ],
      merchantInfo: {
        merchantId: '342562999088',
        merchantName: 'Akash Mahla',
      },
      transactionInfo: {
        totalPriceStatus: 'FINAL',
        totalPrice: product?.price.replace('$', ''), // Price in USD (adjust accordingly)
        currencyCode: 'USD',
      },
    };

    const paymentsClient = new window.google.payments.api.PaymentsClient({
      environment: 'TEST',
    });
    paymentsClient.loadPaymentData(paymentDataRequest).then((paymentData) => {
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
        });
    });
  };

  const handleBackToProducts = () => {
    navigate('/products');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-6">
      {product ? (
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h1>
          <p className="text-xl text-gray-600 mb-4">Price: {product.price}</p>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            obcaecati distinctio qui, iure sunt pariatur nisi in doloribus
            autem impedit debitis.
          </p>
          <div className="flex flex-col gap-4">
            <button
              onClick={onGooglePayButtonClicked}
              className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition"
            >
              Pay with Google Pay
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