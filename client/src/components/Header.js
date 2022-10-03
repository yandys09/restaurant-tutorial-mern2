/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  // views
  const showNavigation = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        Logo
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item ">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item ">
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-link">
              Signin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );

  // render
  return <header id="header">{showNavigation()}</header>;
};

export default Header;
