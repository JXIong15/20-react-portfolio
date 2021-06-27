import React from "react";
import IndividualProject from "./IndividualProject";

function Project(props) {
  return (
    <div className="work">
      <h2>Projects</h2>
      <p>The most recent projects are at the top of the list.</p>
      <p>Click on the image/demo to view the app.</p>
      <p>Click on the title to view the GitHub repo.</p>

      {props.projList.map((proj) => {
        return <IndividualProject
          deploy={proj.deploy}
          img={proj.img}
          alt={proj.alt}
          repo={proj.repo}
          num={proj.num}
          name={proj.name}
          tech={proj.tech}
          desc={proj.desc}
        />
      })}
    </div>

    // <div className="work">
    //   <h2>Projects</h2>
    //   <p>The most recent projects are at the top of the list.</p>
    //   <p>Click on the image/demo to view the app.</p>
    //   <p>Click on the title to view the GitHub repo.</p>

    //   <div className="project">
    //     <a href="https://pdjingle.github.io/ResturGener/" target="_blank" rel="noreferrer">
    //       <img src="./Assets/restaurant-proj.gif" alt="gif of how to use the restaurant generator" />
    //     </a>
    //     <div className="bottom-left">
    //       <a href="https://github.com/JXIong15/ResturGener" target="_blank" rel="noreferrer"><span>Group Project 1:</span> Restaurant Generator</a>
    //       <h3>HTML, CSS, JS, API</h3>
    //     </div>
    //     <p>
    //       Restaurant decision-maker now makes choosing a restaurant fun and easy. The user inputs the desired location and distance traveled.
    //       There is an option to choose if the location will have an on-site bar. Then press the "choose my restaurant option". That will then
    //       pop up a notification within the browser of a location randomly generated via the program. If the user does not like that location
    //       they may choose to input the constraints again to generate another restaurant.
    //     </p>
    //   </div>

    //   <div className="project">
    //     <a href="https://gradright.herokuapp.com/" target="_blank" rel="noreferrer">
    //       <img src="https://user-images.githubusercontent.com/73242250/118421760-52261600-b687-11eb-946a-ca680fa588ad.gif" alt="gif of how to use the gradright" />
    //     </a>
    //     <div className="bottom-left">
    //       <a href="https://github.com/JXIong15/gradright" target="_blank" rel="noreferrer"><span>Group Project 2:</span> GradRight</a>
    //       <h3>JS, Handlebars, MySQL, Express, Node</h3>
    //     </div>
    //     <p>
    //       Admin users can keep track of their students' graduation requirements regardless of the amount of different requirements there are. GradRight compares
    //       students with their respective districts to indicate which graduation requirements are met. Districts and Students can be added, edited, and deleted.
    //     </p>
    //   </div>
    // </div>
  );
}

export default Project;