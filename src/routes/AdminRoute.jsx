import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ element }) => {
  // Mengambil token dan role dari localStorage
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  // Validasi apakah pengguna memiliki token dan role admin
  if (!token) {
    // Jika token tidak ada, arahkan ke halaman login
    return <Navigate to="/login" />;
  }

  if (userRole === 'admin') {
    // Jika role bukan admin, arahkan ke halaman home atau halaman lain
    return <Navigate to="/dashboard" />;
  }

  // Jika token ada dan role adalah admin, tampilkan komponen yang diminta
  return element;
};

export default AdminRoute;
