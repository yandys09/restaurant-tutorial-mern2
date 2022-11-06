/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, logout } from "../helpers/auth";

const Header = ({ history }) => {
  const handleLogout = (evt) => {
    logout(() => {
      history.push("/signin");
    });
  };
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
          {!isAuthenticated() && (
            <Fragment>
              <li className="nav-item ">
                <Link to="/" className="nav-link">
                  <i class="fa-solid fa-house-user"></i> Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link to="/signup" className="nav-link">
                  <i class="fa-solid fa-pen-to-square"></i> Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/signin" className="nav-link">
                  <i class="fa-sharp fa-solid fa-right-to-bracket"></i> Signin
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && isAuthenticated().role === 0 && (
            <Fragment>
              <li className="nav-item ">
                <Link to="/user/dashboard" className="nav-link">
                  <i class="fa-solid fa-house-user"></i> Dashboard
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && isAuthenticated().role === 1 && (
            <Fragment>
              <li className="nav-item ">
                <Link to="/admin/dashboard" className="nav-link">
                  <i class="fa-sharp fa-solid fa-house-user"></i> Dashboard
                </Link>
              </li>
            </Fragment>
          )}

          {isAuthenticated() && (
            <Fragment>
              <li className="nav-item ">
                <button
                  className="btn btn-link text-secondary text-decoration-none pl-0"
                  onClick={handleLogout}
                >
                  <i class="fa-solid fa-arrow-right-from-bracket"></i> Logout
                </button>
              </li>
            </Fragment>
          )}
        </ul>
      </div>
    </nav>
  );

  // render
  return <header id="header">{showNavigation()}</header>;
};

export default withRouter(Header);
