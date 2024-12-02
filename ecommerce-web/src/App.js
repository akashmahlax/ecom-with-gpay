import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './components/Products';
import Checkout from "./components/Checkout";
import Contact from './pages/Contact';
import Checkout1 from "./components/Chechout1";
import Checkout2 from "./components/Chechout2";
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import MenCollection from './pages/Men';
import MenTShirtsCollection from './components/mentshirt';
import Cart from './pages/Cart';
import { CartProvider } from './components/CartContext';

import Tshirt from './pages/Tshirts';
import Jeans from './pages/jeans';
import Jackets from './pages/jackets';
import ProductCollection from "./components/ProductCollection";
function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": "your-paypal-client-id" }}>
       <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<MenCollection />} />
          <Route path="/products/t-shirts" element={<MenTShirtsCollection />} />
          <Route path="/men" element={<Products />} />
          <Route path="/kids" element={<Products />} />

          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout1" element={<Checkout1 />} />
          <Route path="/checkout2" element={<Checkout2 />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/woman" element={<Contact />} />
          <Route path="/products/t-shirt" element={< Tshirt />} />
          <Route path="/products/jeans" element={< Jeans/>} />
          <Route path="/products/jacket" element={< Jackets/>} />
          <Route path="/products" element={<ProductCollection />} />

        </Routes>
      </Router>
      </CartProvider>
    </PayPalScriptProvider>
    
  );
}

export default App;
