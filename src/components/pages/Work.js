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
        coding experience in Java and C++. With the bootcamp, I am learning how to develop a full-stack web
        application.
      </p>
      <p>
        We are on our third and final group project: Pinder. Pinder is like Tinder, except pets are taken
        into account. There are many dating apps in the world with various different target groups. With
        this generation of love-seekers treating their pets like children, Pinder is designed to take into
        account furry family members. Users can set filters on whuch users they'd like to iinteract with based
        on their pet's criteria. Now, users will be sure that they are matching with equal animal-loving people.
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