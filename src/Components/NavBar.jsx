import React from "react";
import Logo from "../assets/Logo.jpg";
import { Link } from "react-router-dom";
const NavBar = ({ set, show, showL , count}) => {
  const link = {
    textDecoration: "none",
    color: "black",
  };
  return (
    <div className="Food">
      <nav className="navbar navbar-expand-lg d-flex border text-#2C2F24">
        <div className="heading">
          <img src={Logo} alt="" />
          <h1>Bistro Bliss</h1>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ms-auto mb-lg-0">
            <li className="nav-item active" onClick={set}>
              <Link style={link} to="/">
                Home
              </Link>
            </li>
            <li className="nav-item" onClick={set}>
              <Link style={link} to='/about'>About</Link>
            </li>
            <li className="nav-item" onClick={set}>
              <Link style={link} to='/menu'>Menu</Link>
            </li>
            <li className="nav-item" onClick={set}>
              <Link style={link} to='/pages'>Pages</Link>
            </li>
            <li className="nav-item" onClick={set}>
              <Link style={link} to='/contact'>Contact</Link>
            </li>
          </ul>
          <div className="cart">
            <Link style={link} to="/booktable">
            <button className="btn1">Book A Table</button>
            </Link>
            <button
              className="btn btn-outline-dark p-3 border-0"
              onClick={show}
            >
              Sign-Up
            </button>
            <button
              className="btn btn-outline-secondary ms-2 p-3 border-0"
              onClick={showL}
            >
              Log-In
            </button>
            <Link style={link} to="/cart">
              <i class="bi bi-cart ms-2 position-relative" id="cart" data-count={count}></i>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
