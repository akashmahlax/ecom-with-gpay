import React, { useEffect } from "react";

const App = () => {
  const onGooglePayButtonClicked = () => {
    const paymentDataRequest = {
      apiVersion: 2,
      apiVersionMinor: 0,
      allowedPaymentMethods: [
        {
          type: "CARD",
          parameters: {
            allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
            allowedCardNetworks: ["MASTERCARD", "VISA"],
          },
          tokenizationSpecification: {
            type: "PAYMENT_GATEWAY",
            parameters: {
              gateway: "example", // Replace with your actual gateway
              gatewayMerchantId: "exampleMerchantId",
            },
          },
        },
      ],
      merchantInfo: {
        merchantId: "342562999088", // Replace with your actual Payments Profile ID
        merchantName: "Akash Mahla",
      },
      transactionInfo: {
        totalPriceStatus: "FINAL",
        totalPrice: "10", // Price in INR
        currencyCode: "INR",
      },
    };

    const paymentsClient = new google.payments.api.PaymentsClient({
      environment: "TEST",
    });
    paymentsClient.loadPaymentData(paymentDataRequest).then((paymentData) => {
      // Send paymentData to the backend for processing
      fetch("http://localhost:5000/process-payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(`Payment successful: ${data.message}`);
        })
        .catch((error) => {
          console.error("Payment failed", error);
        });
    });
  };

  useEffect(() => {
    const initializeGooglePay = () => {
      if (window.google) {
        const paymentsClient = new window.google.payments.api.PaymentsClient({
          environment: "TEST",
        });
        const button = paymentsClient.createButton({
          onClick: onGooglePayButtonClicked,
        });
        document.getElementById("google-pay-button").appendChild(button);
      } else {
        console.error("Google Pay API script not loaded.");
      }
    };

    // Wait for Google Pay API to be ready
    initializeGooglePay();
  }, []);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-400">
      <img src="https://images.unsplash.com/photo-1506193095-80bc749473f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D" alt="product img" className="w-40 h-40 mb-6 rounded-2xl border border-2 border-violet-600" />
      <h1 className="text-3xl font-bold mb-6">Buy Protein Product</h1>
      <p className="text-lg text-black mb-4">Price: ₹10</p>
      <div id="google-pay-button"></div>
    </div>
  );
};

export default App;