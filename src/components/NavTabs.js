import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // We'll go into the Hooks API later, for now, we are just using some code
  // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/work"
          className={location.pathname === "/work" ? "nav-link active" : "nav-link"}
        >
          My Work
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/work/projects"
          className={location.pathname === "/work/projects" ? "nav-link active" : "nav-link"}
        >
          Group Projects
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/work/my-work"
          className={location.pathname === "/work/my-work" ? "nav-link active" : "nav-link"}
        >
          Individual Work
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;