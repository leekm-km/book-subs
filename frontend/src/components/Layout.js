import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';

const Layout = ({ children }) => {
  return (
    <div>
      <ResponsiveAppBar />
      <main>{children}</main> {/* 각 페이지 콘텐츠가 여기에 렌더링 */}
    </div>
  );
};

export default Layout;
