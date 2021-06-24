import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Heading from "./components/Heading";
import Bio from "./components/pages/Bio";
import Work from "./components/pages/Work";
import Footer from "./components/Footer";
import Contact from "./components/pages/Contact";
import './App.css';

function App() {
  return (
    <body>
      <Heading />
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={Bio} />
          <Route exact path="/work" component={Work} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
      <Footer />
    </body>
  );
}

export default App;
