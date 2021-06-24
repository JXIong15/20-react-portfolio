import React from "react";

function Heading() {
  return (
      <header>
        <div id="top">
          <h1>Jou Xiong's Online Portfolio</h1>
        </div>
        <div>
          <ul>
            <li>
              <a href="#about">About Me</a>
            </li>
            <li>
              <a href="#work">My Work</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </header>
  );
}

export default Heading;