import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import SearchBox from './Nav2';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <h1 className="text-2xl font-bold">Akash Shop</h1>
      <div className="flex space-x-6">
        <NavLink to="/" className="hover:text-yellow-500">Home</NavLink>
        <NavLink to="/men" className="hover:text-yellow-500">Men</NavLink>
        <NavLink to="/woman" className="hover:text-yellow-500">Woman</NavLink>
        <NavLink to="/kids" className="hover:text-yellow-500">Kids</NavLink>
      </div>
     
      <NavLink to="/cart" className="hover:text-yellow-500"> <FaShoppingCart className="text-2xl cursor-pointer" /></NavLink>
    </nav>
  );
};

export default Navbar;