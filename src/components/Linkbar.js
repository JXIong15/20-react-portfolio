import React from "react";
import { Link } from "react-router-dom";

function LinkBar() {
    return (
        <div>
            <Link to="/project" role="button" className="btn btn-link">
                Group Projects
            </Link>
            <Link to="/my-work" role="button" className="btn btn-link">
                Individual Work
            </Link>
        </div>
    );
}

export default LinkBar;
