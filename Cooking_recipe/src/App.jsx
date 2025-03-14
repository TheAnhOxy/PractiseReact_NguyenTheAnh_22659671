import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import YourRecipeBox from './components/YourRecipeBox';
import HomeLogin from './components/HomeLogin';
import Subscribe from './components/Subscribe';
import AuthenticatedLayout from './components/AuthenticatedLayout'; // Import layout
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Các route không cần header (trước khi đăng nhập) */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Các route sau khi đăng nhập, sử dụng AuthenticatedLayout */}
        <Route element={<AuthenticatedLayout />}>
          <Route path="/recipe-box" element={<YourRecipeBox />} />
          <Route path="/home-login" element={<HomeLogin />} />
          <Route path="/recipes" element={<Subscribe />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;