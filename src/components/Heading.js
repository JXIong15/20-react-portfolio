import React from "react";

function Heading() {
  return (
    <div>
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

      <div class="coverPhoto" alt="blue background">
        <h2>My Journey So Far</h2>
      </div>
    </div>
  );
}

export default Heading;