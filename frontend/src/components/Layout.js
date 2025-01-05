import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footbar';

const Layout = ({ children }) => {
  return (
    <div>
      <ResponsiveAppBar />
      <main style={{ minHeight: 'calc(100vh - 64px - 48px)' }}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
