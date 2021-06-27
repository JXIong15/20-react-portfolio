import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Bio from "./pages/Bio";
import Work from "./pages/Work";
import Contact from "./pages/Contact/Contact";

function Body() {
  return (
    <div>
      <Router basename="/20-react-portfolio/">
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

export default Body;