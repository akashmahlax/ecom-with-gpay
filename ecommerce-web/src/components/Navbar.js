import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">ShopEase</h1>
      <div className="flex space-x-6">
        <NavLink to="/" className="hover:text-yellow-500">Home</NavLink>
        <NavLink to="/products" className="hover:text-yellow-500">Products</NavLink>
        <NavLink to="/contact" className="hover:text-yellow-500">Contact</NavLink>
      </div>
      <FaShoppingCart className="text-2xl cursor-pointer" />
    </nav>
  );
};

export default Navbar;