import React from "react";

function Project(props) {
  return (
    <div>
      <h2>Projects</h2>
      <div class="projects">
        <div class="container4">
          <a href="https://pdjingle.github.io/ResturGener/" target="_blank"></a>
          <img src="./Assets/restaurant-proj.gif" alt="gif of how to use the restaurant generator" />
          <div id="text">
            <a href="https://github.com/JXIong15/ResturGener" target="_blank">Group Project 1: Restaurant Generator</a>
            <h3>HTML, CSS, JS, API</h3>
          </div>
        </div>
      </div>
      <div class="projects">
        <div class="container4">
          <a href="https://gradright.herokuapp.com/" target="_blank"></a>
          <img src="https://user-images.githubusercontent.com/73242250/118421760-52261600-b687-11eb-946a-ca680fa588ad.gif" alt="gif of how to use the gradright" />
          <div id="text">
            <a href="https://github.com/JXIong15/gradright" target="_blank">Group Project 2: GradRight</a>
            <h3>JS, Handlebars, MySQL, Express, Node</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;