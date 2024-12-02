import React, { useState } from 'react';

// Sample product data
const products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'Smartphone' },
    { id: 3, name: 'Headphones' },
    { id: 4, name: 'Camera' },
    { id: 5, name: 'Smartwatch' },
];

function SearchBox() {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    // Handle input change
    const handleInputChange = (event) => {
        const value = event.target.value;
        setQuery(value);

        // Filter products based on the query
        if (value) {
            const filteredSuggestions = products.filter(product =>
                product.name.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    // Handle product selection
    const handleProductSelect = (product) => {
        setQuery(product.name);
        setSuggestions([]);
        // Implement logic to display the selected product details
        console.log('Selected product:', product);
    };

    return (
        <div className="navbar">
            <input
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Search for products..."
            />
            {suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map(product => (
                        <li key={product.id} onClick={() => handleProductSelect(product)}>
                            {product.name}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SearchBox;
