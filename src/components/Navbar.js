import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/navbar.css';

const Navbar = () => (
  <main className="w-75 container d-flex border-top border-bottom pt-3 pb-3 rounded mt-3 justify-content-around">
    <h4>
      <i className="fas fa-laptop-code" />
      <span>  </span>
      REACT CHALLENGE ATF
    </h4>
    <div>
      <Link to="/" className="btn btn-link">
        Home
      </Link>
      <Link to="/items" className="btn btn-link">
        All Items
      </Link>
    </div>

  </main>
);

export default Navbar;
