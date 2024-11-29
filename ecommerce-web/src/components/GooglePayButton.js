import React, { useEffect } from "react";

const GooglePayButton = () => {
  useEffect(() => {
    if (window.google && window.google.payments.api.PaymentsClient) {
      const paymentsClient = new window.google.payments.api.PaymentsClient({
        environment: "TEST", // Change to "PRODUCTION" in production
      });

      const paymentRequest = {
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
                gateway: "example", // Replace with your gateway (e.g., "stripe", "razorpay")
                gatewayMerchantId: "your-merchant-id", // Replace with your Merchant ID from the console
              },
            },
          },
        ],
        merchantInfo: {
          merchantId: "your-merchant-id", // Replace with your Merchant ID
          merchantName: "Akash's Store", // Replace with your business name
        },
        transactionInfo: {
          totalPriceStatus: "FINAL",
          totalPrice: "50.00", // Example price
          currencyCode: "INR",
          countryCode: "IN", // Country Code
        },
      };

      paymentsClient
        .isReadyToPay({ allowedPaymentMethods: paymentRequest.allowedPaymentMethods })
        .then((response) => {
          if (response.result) {
            const button = paymentsClient.createButton({
              onClick: () => {
                paymentsClient
                  .loadPaymentData(paymentRequest)
                  .then((paymentData) => {
                    console.log("Payment Successful:", paymentData);
                    // Add payment confirmation logic here
                  })
                  .catch((err) => console.error("loadPaymentData error:", err));
              },
            });
            document.getElementById("google-pay-button").appendChild(button);
          } else {
            console.error("Google Pay is not available on this device");
          }
        })
        .catch((err) => console.error("isReadyToPay error:", err));
    }
  }, []);

  return <div id="google-pay-button"></div>;
};

export default GooglePayButton;