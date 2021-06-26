import React from "react";

function Project() {
  return (
    <div className="work">
      <h2>Projects</h2>
      <p>Click on the image/demo to view the app.</p>
      <p>Click on the title to view the GitHub repo.</p>

      <div className="project">
        <a href="https://pdjingle.github.io/ResturGener/" target="_blank">
          <img src="./Assets/restaurant-proj.gif" alt="gif of how to use the restaurant generator" />
        </a>
        <div className="bottom-left">
          <a href="https://github.com/JXIong15/ResturGener" target="_blank"><span>Group Project 1:</span> Restaurant Generator</a>
          <h3>HTML, CSS, JS, API</h3>
        </div>
        <p>
          Description HERE
        </p>
      </div>

      <div className="project">
        <a href="https://gradright.herokuapp.com/" target="_blank">
          <img src="https://user-images.githubusercontent.com/73242250/118421760-52261600-b687-11eb-946a-ca680fa588ad.gif" alt="gif of how to use the gradright" />
        </a>
        <div className="bottom-left">
          <a href="https://github.com/JXIong15/gradright" target="_blank"><span>Group Project 2:</span> GradRight</a>
          <h3>JS, Handlebars, MySQL, Express, Node</h3>
        </div>
        <p>
          Description HERE
        </p>
      </div>
    </div>
  );
}

export default Project;