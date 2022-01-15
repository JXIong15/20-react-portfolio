import React from "react";
import Linkbar from "../Linkbar";
import Project from "./Project/Project";
import Homework from "./Homework/Homework";
import { BrowserRouter as Router, Route} from "react-router-dom";

function Work(props) {
  return (
    <section>
      <div>
        <h2>My Work</h2>
      </div>
      <a href="https://github.com/JXIong15" className="github" target="_blank" rel="noreferrer"><span>My Github Profile</span></a>
      <p>
        Currently, these are projects I have been working on in my coding bootcamp through Northwestern
        University. I will be adding more projects as I complete them. I have previous
        coding experience in Java and C++. With the bootcamp, I learned how to develop a full-stack web
        application. Recently, I am working on my Python skills with Django.
      </p>

      <Router basename="/20-react-portfolio/">
        <Linkbar />
        <Route 
          exact path="/project"
          render={ p => (
            <Project {...props.state.projList} />
          )}
          />
        <Route 
          exact path="/my-work" 
          render={ p => (
            <Homework {...props.state.hwList} />
          )}
        />
      </Router>

    </section>
  )
};

export default Work;