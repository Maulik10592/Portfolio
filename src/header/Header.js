import React from 'react';
import "../App.css";
import './Header.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUser, faWandMagicSparkles, faLaptopCode, faEnvelopesBulk } from '@fortawesome/free-solid-svg-icons';

import Audio from './Audio';

function Header() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <div className='Header'>
      <Navbar expand="lg">
        <Nav className='navigatorLink'>
          {/* Checking the current path name using javascript ternary operator and if true adding active classname to it */}
          <li className={splitLocation[1] === "" ? "active" : ""}>
            <Link className='nav-link' to="/">
              <FontAwesomeIcon icon={faHouse} />
            </Link>
          </li>
          <li className={splitLocation[1] === "about" ? "active" : ""}>
            <Link className='nav-link' to="/about">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
          <li className={splitLocation[1] === "skill" ? "active" : ""}>
            <Link className='nav-link' to="/skill">
              <FontAwesomeIcon icon={faWandMagicSparkles} />
            </Link>
          </li>
          <li className={splitLocation[1] === "work" ? "active" : ""}>
            <Link className='nav-link' to="/work">
              <FontAwesomeIcon icon={faLaptopCode} />
            </Link>
          </li>
          <li className={splitLocation[1] === "contact" ? "active" : ""}>
            <Link className='nav-link' to="/contact">
              <FontAwesomeIcon icon={faEnvelopesBulk} />
            </Link>
          </li>
        </Nav>
      </Navbar>
      <Audio />
    </div>
  );
}

export default Header;