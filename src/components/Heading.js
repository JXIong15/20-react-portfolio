import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Bio from "./pages/Bio";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function Heading() {
  return (
    <div>
      <header>
          <h1>Jou Xiong's Online Portfolio</h1>
      </header>
        <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Bio} />
          <Route exact path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
      </div>
  );
}

export default Heading;