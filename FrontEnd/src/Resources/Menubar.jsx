import React from "react";
import '../assets/css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo or Brand Name */}
      <div className="navbar-logo">
  BUY<span style={{ color: "red" }}>WITHUS</span>
</div>

      {/* Navbar Links */}
      <div className="navbar-links">
        <a href="/register" className="navbar-link">
          Register
        </a>
        <a href="/login" className="navbar-link">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Navbar;