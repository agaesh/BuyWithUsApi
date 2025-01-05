import React from "react";
import '../assets/css/Navbar.css';
import {useAuth} from '../Context/AuthContext';

const Navbar = () => {
  const {currentUser, logout} = useAuth();
  const handleLogout = async () => {
    try {
      await logout();
    }
    catch (error) {
      console.error("Error during logout:", error);
    }
  }
  return (
    <nav className="navbar">
      {/* Logo or Brand Name */}
      <div className="navbar-logo">
         BUY<span style={{ color: "red" }}>WITHUS</span>
      </div>

      {/* Navbar Links */}
      <div className="navbar-links">
        {currentUser?(
          <>
            <a href="/dashboard" className="navbar-link">
              Dashboard
            </a>
            <button style ={{backgroundColor:"red", color: "white", padding:"6px"}} onClick={handleLogout} className="navbar-link">
              Logout
            </button>
          </>       
        ):(
          <>
            <a href="/register" className="navbar-link">
            Register
            </a>
            <a href="/login" className="navbar-link">
              Login
            </a>
          </> 
        )}
      </div>
    </nav>
  );
};

export default Navbar;