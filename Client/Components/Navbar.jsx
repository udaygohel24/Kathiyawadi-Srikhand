import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegUserCircle, FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/kathiyawad 01.png";
import "../Navbar/Nabar.css";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* logo section */}
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="kathiyawad Logo" className="logo-image" />
        </Link>

        {/* Mobile menu button */}
        <div className="mobile-menu" onClick={toggleMenu}>
          {isMobile ? (
            <FaTimes className="fatime" />
          ) : (
            <FaBars className="fatime" />
          )}
        </div>

        {/* Navigation menu */}
        <ul className={isMobile ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={toggleMenu}>
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/product" className="nav-link" onClick={toggleMenu}>
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Right side icons and login buttons */}
        <div className="nav-icons">
          <div className="nav-login-btn">
            <div className="user-options">
              <Link to="/login" className="login-btn">
                Login
              </Link>
            </div>

            {/* Cart button */}
            <button className="nav-cart-btn">
              <div className="cart-icon">
                <BsCart4 />
              </div>
              <div className="nav-p">
                <p>My Cart</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
