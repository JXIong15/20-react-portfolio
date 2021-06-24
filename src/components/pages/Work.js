import React from "react";
import Arrays from "../Arrays";
import { Link, Route } from "react-router-dom";

function Work(props) {
  return (
    <section>
      <div>
        <h2>My Work</h2>
      </div>

      <a href="https://github.com/JXIong15"><span>My Github Profile</span></a>
      <p>
        Currently, these are projects I have been working on in my coding bootcamp through Northwestern
        University. I will be adding more projects as I complete them. I have previous
        coding experience in Java and C++. With the bootcamp, I am learning how to develop a full-stack web
        application.
      </p>
      <p>
        We are on our third and final group project: Pinder. GradRight is designed for educators who work
        with students with different graduation requirements. It allows these educators to have one dashboard to
        keep track of their students efficiently. My groupmates and I are educators, and we saw a common problem
        we face. We chose GradRight as a way to solve this problem of disorganized files.
      </p>
      <p>
        Click on the photo to go to the working deployed website. Click on the title to go to the deployed Github Repo.
      </p>

      <Link to={`${props.match.url}/projects`} role="button" className="btn btn-link">
        Group Projects
      </Link>{" "}
      <Link to={`${props.match.url}/my-work`}  role="button" className="btn btn-link">
        Individual Work
      </Link>
      <Route exact path={`${props.match.url}/learn`} component={Learn} />

      
    </section>
  )
};



export default Work;