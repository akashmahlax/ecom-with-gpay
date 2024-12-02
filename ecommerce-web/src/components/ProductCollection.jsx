import React from "react";
import ProductCarousel from "./ProductCarousel";
import { useNavigate } from "react-router-dom";

const products = [
    {
        id: 1,
        name: "Stylish T-Shirt",
        price: "$20",
        images: [
            "https://images.unsplash.com/photo-1496360938681-9a918bfabc66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1542594452-93c3bb4cd1b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
        ],
    },
    {
        id: 2,
        name: "Running Shoes",
        price: "$50",
        images: [
            "https://images.unsplash.com/photo-1539185441755-769473a23570?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2V8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D",
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXxlbnwwfHwwfHx8MA%3D%3D",
        ],
    },
    {
        id: 3,
        name: "Luxury Watch",
        price: "$200",
        images: [
            "https://images.unsplash.com/photo-1670177257750-9b47927f68eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bHV4dXJ5JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1670404160620-a3a86428560e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMHdhdGNofGVufDB8fDB8fHww",
            "https://images.unsplash.com/photo-1636289026470-cb40ece1ebc3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bHV4dXJ5JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D",
        ],
    },
];

const ProductCollection = () => {
    const navigate = useNavigate();
    const handleBuyNow = (product) => {
        // Redirect to the checkout page with the product details
        navigate('/checkout1', { state: { product } });
    };
    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
        <ProductCarousel key={product.id} product={product} />
            
            ))}


        </div>
    );
};

export default ProductCollection;