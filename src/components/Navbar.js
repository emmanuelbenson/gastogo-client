import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const [pagePosition, setPagePosition] = useState(0);

  const toggleMenu = () => setMenu(!menu);

  window.addEventListener("scroll", () => {
    let position = window.pageYOffset;
    setPagePosition(position);
  });

  return (
    <>
      <header
        id="topnav"
        className={
          pagePosition < 50
            ? "defaultscroll sticky active"
            : "defaultscroll sticky active nav-sticky"
        }
      >
        <div className="container">
          <div>
            <Link className="logo" to="/">
              <img
                src="images/g2g-logo.png"
                className="l-dark"
                height="54"
                alt=""
              />
              <img
                src="images/g2g-logo.png"
                className="l-light"
                height="54"
                alt=""
              />
            </Link>
          </div>
          <div className="buy-button">
            <Link to="/sign-up" className="btn btn-sm btn-outline-primary">
              SIGN UP
            </Link>
          </div>
          <div className="buy-button">
            <Link to="/sign-in" className="btn btn-sm btn-outline-primary">
              SIGN IN
            </Link>
          </div>
          <div className="menu-extras" onClick={toggleMenu}>
            <div className="menu-item">
              <Link
                className={menu ? "navbar-toggle " : "navbar-toggle open"}
                to=""
              >
                <div className="lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </Link>
            </div>
          </div>

          <div
            id="navigation"
            style={menu ? { display: "none" } : { display: "block" }}
          >
            <ul className="navigation-menu nav-light">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
            <div className="buy-menu-btn d-none">
              <Link to="/sign-up" className="btn btn-sm btn-outline-primary">
                SIGN UP
              </Link>
            </div>
            <div className="buy-menu-btn d-none">
              <Link to="/sign-in" className="btn btn-sm btn-outline-primary">
                SIGN IN
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
