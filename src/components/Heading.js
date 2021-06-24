import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./NavTabs";
import Bio from "./pages/Bio";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function Heading() {
  return (
      <header>
        <div id="top">
          <h1>Jou Xiong's Online Portfolio</h1>
        </div>
        <div>
        <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={Bio} />
          <Route exact path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
        </div>
      </header>
  );
}

export default Heading;