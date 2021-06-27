import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Bio from "./pages/Bio";
import Work from "./pages/Work";
import Contact from "./pages/Contact/Contact";
import projectList from "./pages/Project/projectSeed"
import homeworkList from "./pages/Homework/homeworkSeed"

class Body extends React.Component {
  state = {
    projList: [{projectList}],
    hwList: [{homeworkList}]
  };
  render() {
    return (
      <div>
        <Router basename="/20-react-portfolio/">
          <div>
            <NavBar />
            <Route exact path="/" component={Bio} />
            <Route
              exact path="/work"
              render={props =>
                (<Work state={this.state} />)
              }
            />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    )
  };
}

export default Body;