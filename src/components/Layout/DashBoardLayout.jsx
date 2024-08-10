import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const DashboardLayout = ({ children }) => (
    <>
    <Header/>
      <div className="dashboard-layout">
    <Sidebar />
    <div className="dashboard-content">
      {children}
    </div>
  </div>
  <Footer/>
    </>

);

export default DashboardLayout;
