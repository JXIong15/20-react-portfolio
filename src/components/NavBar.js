import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <ul className="nav navbar">
      <li className="nav-item">
        <Link to="/">
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/work">
          My Work
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;