import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.css';

const Navbar = () => (
  <main className="w-100 container d-flex border-top border-bottom pt-3 pb-3 rounded mt-3 flex-column">
    <div className="d-flex justify-content-around">
      <h4>
        <i className="fas fa-laptop-code" />
        <span>  </span>
        REACT CHALLENGE ATF
      </h4>
      <Link to="/" className="btn btn-link">
        Home
      </Link>
    </div>
    <div className="d-flex justify-content-around flex-wrap border-top mt-3 pt-2">
      <Link to="/items" className="btn btn-link btn-sm">
        All Countries
      </Link>
      <Link to="/byname" className="btn btn-link btn-sm">
        Search by Name
      </Link>
      <Link to="/byfullname" className="btn btn-link btn-sm">
        Search by Full Name
      </Link>
      <Link to="/bycode" className="btn btn-link btn-sm">
        Search by Code
      </Link>
      <Link to="/bycodelist" className="btn btn-link btn-sm">
        Search by Code List
      </Link>
      <Link to="/bycurrency" className="btn btn-link btn-sm">
        Search by Currency
      </Link>
      <Link to="/bylanguage" className="btn btn-link btn-sm">
        Search by Language
      </Link>
      <Link to="/bycapital" className="btn btn-link btn-sm">
        Search by Capital
      </Link>
      <Link to="/bycallingcode" className="btn btn-link btn-sm">
        Search by Calling Code
      </Link>
      <Link to="/byregion" className="btn btn-link btn-sm">
        Search by Region
      </Link>
    </div>

  </main>
);

export default Navbar;
