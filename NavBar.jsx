import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-0">
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 shadow">
            <NavLink to="/" className="navbar-brand">
              CRUD
            </NavLink>
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
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <NavLink to="/" className="nav-link">
                  Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
