import React from 'react';
import Header_LoginSuc from './Header_LoginSuc';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const AuthenticatedLayout = () => {
  return (
    <div>
      <Header_LoginSuc onSearchUpdate={() => {}} />
      <Outlet /> 
      <Footer />
    </div>
  );
};

export default AuthenticatedLayout;