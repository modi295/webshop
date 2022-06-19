import React from "react";
import "./Header.css";
import cart from "./images/cart.png";
import reorder from "./images/reorder.png";
import search from "./images/search.png";
import store from "./images/store.png";

import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="header">
        <Link to="/contactus" style={{ textDecoration: "none" }}>
          <div className="header_logo">
            <img className="reordericon" src={reorder} />
            <h4 className="header_logoTitle">Contact Us</h4>
          </div>
        </Link>
        <Link to="/Home" style={{ textDecoration: "none" }}>
          <div className="header_logo">
            <img className="storeicon" src={store} />
            <h4 className="header_logoTitle">WebShopping</h4>
          </div>
        </Link>
        <div className="header_search">
          <input type="text" className="header_searchInput"></input>
          <img className="header_searchIcon" src={search} />
        </div>
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <div className="header_logo">
            <img className="carticon" src={cart} />
            <h4 className="header_logoTitle">Cart</h4>
          </div>
        </Link>
        <div className="nav_item">
          <div className="dropdown">
            <button className="dropbtn" style={{ color: "blue" }}>
              <b>SignIn</b>
            </button>
            <div class="dropdown-content">
              <Link to="/AdminLogin">
                <b>Admin</b>
              </Link>
              <Link to="/CustomerLogin">
                <b>Customer</b>
              </Link>
            </div>
          </div>
        </div>
        <Link to="/customerregistration" style={{ textDecoration: "none" }}>
          <div className="nav_item">
            <button className="dropbtn" style={{ color: "blue" }}>
              <b>SignUp</b>
            </button>
          </div>
        </Link>
        <Link to="/signout" style={{ textDecoration: "none" }}>
          <div className="nav_item">
            <button className="dropbtn" style={{ color: "blue" }}>
              <b>SignOut</b>
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
