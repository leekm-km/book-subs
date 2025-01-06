import React from 'react';
import ResponsiveAppBar from './ResponsiveAppBar';
import Footer from './Footbar';

const Layout = ({ children }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh', // 화면 전체 높이를 기준으로 설정
    }}>
      <ResponsiveAppBar />
      <main style={{
        flex: 1, // 콘텐츠 영역이 자동으로 확장
        padding: '20px',
      }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
