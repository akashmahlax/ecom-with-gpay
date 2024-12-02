import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Custom AuthContext to manage user state

const ProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;