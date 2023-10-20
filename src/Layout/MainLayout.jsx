import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
  const [darkMood, setDarkMode] = useState(false);
  console.log(darkMood);
  const handleDark = () => {
    setDarkMode(!darkMood);
  };
  return (
    <div>
      <Navbar handleDark={handleDark} darkMood={darkMood}></Navbar>
      <Outlet></Outlet>
      <Footer darkMood={darkMood}></Footer>
    </div>
  );
};

export default MainLayout;