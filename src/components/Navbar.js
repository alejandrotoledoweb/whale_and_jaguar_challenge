import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import '../styles/navbar.css';

const Navbar1 = () => (
  <header className="w-100 container d-flex border-top border-bottom pt-3 pb-3 rounded mt-3 flex-column shadow p-3 rounded">
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
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul className="navbar-nav mr-auto">

              <li className="nav-item">
                <Link to="/items" className="links btn btn-link btn-sm">
                  All Countries
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/byname" className="links btn btn-link btn-sm">
                  Search by Name
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  </header>
);

export default Navbar1;
