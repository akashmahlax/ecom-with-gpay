import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state?.product;

    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(
        product ? parseFloat(product.price.replace('$', '')) : 0
    );
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('GooglePay');
    const [upiId, setUpiId] = useState('');
    const [orderStatus, setOrderStatus] = useState(null);
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

    const handleGooglePay = () => {
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
                setOrderStatus('Payment successful via Google Pay');
            })
            .catch((error) => {
                console.error('Google Pay failed:', error);
                setLoading(false);
            });
    };

    const handlePayPal = (details, data) => {
        setLoading(false);
        console.log('PayPal Payment Successful:', details, data);
        setOrderStatus('Payment successful via PayPal');
    };

    const handleUpiPayment = () => {
        if (!upiId) {
            alert('Please enter a valid UPI ID');
            return;
        }

        setLoading(true);
        // Simulate UPI payment processing
        setTimeout(() => {
            setLoading(false);
            setOrderStatus(`Payment successful via UPI (UPI ID: ${upiId})`);
        }, 1500);
    };

    const handleCodPayment = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOrderStatus('Order placed successfully via Cash on Delivery');
        }, 1500);
    };

    const handleBackToProducts = () => {
        navigate('/products');
    };

    return (
        <PayPalScriptProvider options={{ "client-id": "your-client-id" }}>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200 p-6">
                {orderStatus ? (
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-green-500 mb-4">{orderStatus}</h1>
                        <p className="text-lg">Order ID: #{Math.floor(Math.random() * 100000)}</p>
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
                                onClick={() => setSelectedPaymentMethod('UPI')}
                                className={`px-4 py-2 rounded-lg ${selectedPaymentMethod === 'UPI' ? 'bg-yellow-500 text-white' : 'bg-gray-200'}`}
                            >
                                UPI
                            </button>
                            <button
                                onClick={() => setSelectedPaymentMethod('COD')}
                                className={`px-4 py-2 rounded-lg ${selectedPaymentMethod === 'COD' ? 'bg-gray-500 text-white' : 'bg-gray-200'}`}
                            >
                                COD
                            </button>
                        </div>

                        {selectedPaymentMethod === 'GooglePay' && (
                            <button
                                onClick={handleGooglePay}
                                className={`w-full bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                disabled={loading}
                            >
                                {loading ? 'Processing...' : 'Pay with Google Pay'}
                            </button>
                        )}

                        {selectedPaymentMethod === 'PayPal' && (
                            <PayPalButtons
                                style={{ layout: 'vertical' }}
                                createOrder={(data, actions) =>
                                    actions.order.create({
                                        purchase_units: [
                                            {
                                                amount: {
                                                    value: totalPrice.toFixed(2),
                                                },
                                            },
                                        ],
                                    })
                                }
                                onApprove={(data, actions) =>
                                    actions.order.capture().then((details) => handlePayPal(details, data))
                                }
                            />
                        )}

                        {selectedPaymentMethod === 'UPI' && (
                            <div className="mt-4">
                                <input
                                    type="text"
                                    placeholder="Enter UPI ID"
                                    value={upiId}
                                    onChange={(e) => setUpiId(e.target.value)}
                                    className="w-full border border-gray-300 rounded-lg p-2 mb-4"
                                />
                                <button
                                    onClick={handleUpiPayment}
                                    className="w-full bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600 transition"
                                >
                                    Pay via UPI
                                </button>
                            </div>
                        )}

                        {selectedPaymentMethod === 'COD' && (
                            <button
                                onClick={handleCodPayment}
                                className="w-full bg-gray-500 text-white font-semibold py-2 rounded-lg hover:bg-gray-600 transition"
                            >
                                Place Order via COD
                            </button>
                        )}
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
        </PayPalScriptProvider>
    );
};

export default Checkout;