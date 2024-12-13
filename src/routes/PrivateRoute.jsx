import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, requiredRole }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role'); // Pastikan role juga disimpan di localStorage setelah login

  if (!token) {
    // Jika token tidak ada, arahkan ke halaman login
    return <Navigate to="/login" />;
  }

  if (requiredRole && userRole !== requiredRole) {
    // Jika role tidak sesuai dengan yang dibutuhkan, arahkan ke halaman yang sesuai (misalnya home)
    return <Navigate to="/home" />;
  }

  return element; // Jika sudah login dan role sesuai, tampilkan halaman
};

export default PrivateRoute;
