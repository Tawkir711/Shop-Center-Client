import React from 'react';

const Footer = ({ darkMood }) => {
  return (
    <footer className={`footer p-10 ${darkMood? "bg-gray-900 text-white":"bg-white"} text-base-content mt-10`}>
      <aside>
        <img
          className="h-[70px] rounded-full"
          src="https://i.postimg.cc/kG4Ln1CF/online-shop-ecommerce-logo.jpg"
          alt="logo"
        />
        <p>
          Shop Center Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;