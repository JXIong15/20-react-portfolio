import React from "react";
import { Link } from "react-router-dom";

function LinkBar() {
    return (
        <ul className="linkbar">
            <li className="nav-item">
            <Link to="/project" role="button" className="btn btn-link">
                Group Projects
            </Link>
            </li>
            <li className="nav-item">
            <Link to="/my-work" role="button" className="btn btn-link">
                Individual Work
            </Link>
            </li>
        </ul>
    );
}

export default LinkBar;
