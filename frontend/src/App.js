import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import Profile from './pages/Profile';
import Account from './pages/Account';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/account" element={<Account />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;