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

function App() {
  return (
    <PayPalScriptProvider options={{ "client-id": "your-paypal-client-id" }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<MenCollection />} />
          <Route path="/products/t-shirts" element={<MenTShirtsCollection />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout1" element={<Checkout1 />} />
          <Route path="/checkout2" element={<Checkout2 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </PayPalScriptProvider>
  );
}

export default App;
