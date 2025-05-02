import React from "react";
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="/logo.png" alt="Logo" className="logo" />
        <ul className="nav-links">
          <li>Home</li>
          <li>Pricings</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
     
    </nav>
  );
};

export default Navbar;
