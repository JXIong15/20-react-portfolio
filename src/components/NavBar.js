import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <ul className="nav navbar">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          About Me
        </Link>
      </li>
      <li className="navbar">
        <Link
          to="/work"
          className={location.pathname === "/work" ? "nav-link active" : "nav-link"}
        >
          My Work
        </Link>
      </li>
      <li className="navbar">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;