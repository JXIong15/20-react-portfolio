import React from "react";
import Project from "./Project";
import Homework from "./Homework";

class Directory extends React.Component {

  render() {
    return (
      <section>
        <div>
          <h2>My Work</h2>
        </div>
        <div class="split"></div>


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

        <h3>Group Projects</h3>
        {/* larger boxes */}
        <Project
        // PASS PROJECT NAME, DESCRIPTION, LINKS
        />

        <h3>Homework</h3>
        {/* smaller boxes */}
        <Homework
        // PASS PROJECT NAME, DESCRIPTION, LINKS
        />
      </section>
    )
  };
}


export default Directory;