// src/components/Layout/Layout.js
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

// MainLayout Component
const MainLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

// AuthLayout Component
const AuthLayout = ({ children }) => (
  <div className="auth-container">
    {children}
  </div>
);

// DashboardLayout Component
const DashboardLayout = ({ children }) => (
  <div className="dashboard-layout">
    <Sidebar />
    <div className="main-content">
      {children}
    </div>
  </div>
);

export { MainLayout, AuthLayout, DashboardLayout };
