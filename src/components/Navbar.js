import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.css';

const Navbar = () => (
  <header className="w-100 container d-flex border-top border-bottom pt-3 pb-3 rounded mt-3 flex-column">
    <div className="d-flex justify-content-around mb-3 flex-wrap">
      <h4 className="title">
        <i className="fas fa-laptop-code" />
        <span>  </span>
        REACT CHALLENGE ATF
      </h4>
      <Link to="/" className="home-btn">
        Home
      </Link>
    </div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">

          <li className="nav-item">
            <Link to="/items" className="links btn btn-link btn-sm">
              All Countries
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/byfullname" className="links btn btn-link btn-sm">
              Search by Full Name
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/bycode" className="links btn btn-link btn-sm">
              Search by Code
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/bycodelist" className="links btn btn-link btn-sm">
              Search by Code List
            </Link>

          </li>
          <li className="nav-item">
            <Link to="/bycurrency" className="links btn btn-link btn-sm">
              Search by Currency
            </Link>

          </li>
          <li className="nav-item">
            <Link to="/bylanguage" className="links btn btn-link btn-sm">
              Search by Language
            </Link>

          </li>
          <li className="nav-item">
            <Link to="/bycapital" className="links btn btn-link btn-sm">
              Search by Capital
            </Link>

          </li>
          <li className="nav-item">
            <Link to="/bycallingcode" className="links btn btn-link btn-sm">
              Search by Calling Code
            </Link>

          </li>
          <li className="nav-item">
            <Link to="/byregion" className="links btn btn-link btn-sm">
              Search by Region
            </Link>

          </li>
          <li className="nav-item">
            <Link to="/byregionalbloc" className="links btn btn-link btn-sm">
              Search by Regional Bloc
            </Link>

          </li>
        </ul>
      </div>
    </nav>

  </header>
);

export default Navbar;
