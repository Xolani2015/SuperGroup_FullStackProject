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
        <Link to="/"> Shop </Link>
        <Link to="/cart">
        <div>
        <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
        </div>
        </Link>
        <Link to="/orders">
        <div>
        <FontAwesomeIcon icon={faHistory} className="cart-icon" />
        </div>
        </Link>
      </div>
    </div>
  );
};