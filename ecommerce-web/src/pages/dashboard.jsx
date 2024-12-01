import React, { useEffect, useState } from 'react';
import { auth } from './components/firebase'; // Import your firebase config
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]); // Placeholder for orders
  const [loading, setLoading] = useState(true);

  // Check if the user is authenticated
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        // Simulate fetching orders from backend
        setOrders([
          { id: 1, product: 'T-Shirt', price: '$120', status: 'Delivered' },
          { id: 2, product: 'Shoes', price: '$150', status: 'Pending' },
        ]);
      } else {
        navigate('/login'); // Redirect to login if no user is logged in
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard">
      <div className="profile">
        <h2>Welcome, {user?.displayName || 'User'}!</h2>
        <p>Email: {user?.email}</p>
        <button
          onClick={() => navigate('/profile')}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          View Profile
        </button>
      </div>

      <div className="orders mt-8">
        <h2>Your Orders</h2>
        <div className="order-list">
          {orders.length > 0 ? (
            orders.map((order) => (
              <div key={order.id} className="order-item border p-4 my-2">
                <h3>{order.product}</h3>
                <p>Price: {order.price}</p>
                <p>Status: {order.status}</p>
                <button className="bg-green-500 text-white py-2 px-4 rounded">
                  View Details
                </button>
              </div>
            ))
          ) : (
            <p>No orders yet</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;