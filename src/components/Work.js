import React from "react";
import Project from "./Project";

function Work() {
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
          coding experience in Java and C++. With the bootcamp, I am learning how to develop a full-stack
          application as well as how to apply coding in professional settings. So far, we have learned about
          HTML, CSS, JavaScript, Boostrap, APIs, Handlebars, Node, MySql, Express, and Models.
        </p>
        <p>
          We recently completed our second group project: GradRight. GradRight is designed for educators who work
          with students with different graduation requirements. It allows these educators to have one dashboard to
          keep track of their students efficiently. My groupmates and I are educators, and we saw a common problem
          we face. We chose GradRight as a way to solve this problem of disorganized files.
        </p>
        <p>
          Click on the photo to go to the working deployed website. Click on the title to go to the deployed Github Repo.
        </p>


        <Project
        // PASS PROJECT NAME, DESCRIPTION, LINKS
        />
    </section>
      );
}

      export default Work;