import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute:React.FC=()=> {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return <div>Loading authentication...</div>;
  }
  

  return currentUser ? <Outlet /> : <Navigate to="/auth" replace />;
}

export default ProtectedRoute;