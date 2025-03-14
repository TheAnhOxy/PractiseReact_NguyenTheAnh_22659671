import React from 'react';
import Header_LoginSuc from './Header_LoginSuc';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

// Layout cho các trang sau khi đăng nhập
const AuthenticatedLayout = () => {
  return (
    <div>
      <Header_LoginSuc onSearchUpdate={() => {}} />
      <Outlet /> {/* Đây là nơi các trang con (như Subscribe) sẽ được render */}
      <Footer />
    </div>
  );
};

export default AuthenticatedLayout;