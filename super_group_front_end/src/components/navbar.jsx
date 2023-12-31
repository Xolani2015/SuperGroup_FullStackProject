import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHistory } from '@fortawesome/free-solid-svg-icons';


export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
      <div className="menu">
        {/* Modernized Dropdown */}
        <div className="dropdown">
          <button className="dropbtn">Shop</button>
          <div className="dropdown-content">
            <Link to="/All">All</Link>
            <Link to="/Cellphone">Cellphones</Link>
            <Link to="/Laptop">Laptops</Link>
            <Link to="/HeadPhones">Headphones</Link>
          </div>
        </div>
        </div>

      
        <Link to="/cart">
        <div>
        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
        </div>
        </Link>
        <div className="sidespace"></div>
        <Link to="/orders">
        <div>
        <FontAwesomeIcon icon={faHistory} className="cart-icon" />
        </div>
        </Link>
      </div>
    </div>
  );
};