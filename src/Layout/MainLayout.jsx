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
      <div className={`${darkMood ? "bg-gray-900 text-red-500" : "bg-base-100"}`}>
        <Outlet></Outlet>
      </div>
      <Footer darkMood={darkMood}></Footer>
    </div>
  );
};

export default MainLayout;