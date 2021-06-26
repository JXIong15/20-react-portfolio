import React from "react";

function Homework() {
  return (
    <div className="work">
      <h2>Individual Work</h2>
      <p>The most recent work is at the top of the list.</p>
      <p>Click on the image/demo to view the app.</p>
      <p>Click on the title to view the GitHub repo.</p>

      <div className="row">
        <div className="col-md-6 homework">
          <a href="https://infinite-everglades-93131.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src="./Assets/techblog.png" alt="techblog homepage" />
            <div className="bottom-left">
              <a href="https://github.com/JXIong15/14-tech-blog" target="_blank" rel="noreferrer">Tech-Blog</a>
              <h3>Handlebars, MySQL, Node, Heroku, JS, Insomnia</h3>
            </div>
          </a>
          <p>
            DESCRIPTION HERE
          </p>
        </div>
        <div className="col-md-6 homework">
          <a href="https://drive.google.com/file/d/1o0SrNRsSqu0UHwKE7BNGJvuu6fhUxWi0/view" target="_blank" rel="noreferrer">
            <img src="./Assets/ecommerce.gif" alt="ecommerce adding product demo" />
            <div className="bottom-left">
              <a href="https://github.com/JXIong15/13-ecommerce" target="_blank" rel="noreferrer">ECommerce</a>
              <h3>JS, Node, MySQL, Insomnia</h3>
            </div>
          </a>
          <p>
            DESCRIPTION HERE
          </p>
        </div>
      </div>

      {/* <div class="projects">
        <div class="container3">
          <a href="https://drive.google.com/file/d/1nho_JsT15NoVYrZD1V_KKVB-p9wdJvzZ/preview" target="_blank" rel="noreferrer">
            <img src="./Assets/employee-tracker.png" alt="employee tracker department budget view" />
            <div className="bottom-left">
              <a href="https://github.com/JXIong15/12-employee-tracker" target="_blank" rel="noreferrer">Employee Tracker</a>
              <h3>JS, MySQL, Node</h3>
            </div>
          </a>
        </div>
        <div class="container3">
          <a href="https://fierce-beach-80852.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src="./Assets/notetaker.png" alt="note taker homepage" />
            <div className="bottom-left">
              <a href="https://github.com/JXIong15/11-note-taker" target="_blank" rel="noreferrer">Note Taker</a>
              <h3>JS, Node, JSON, Heroku</h3>
            </div>
          </a>
        </div>
      </div>

      <div class="projects">
        <div class="container3">
          <a href="https://drive.google.com/file/d/1aIvexVPLv0fNYhxhRUbo314YsrOxEjaT/view" target="_blank" rel="noreferrer">
            <img src="./Assets/employee-team.png" alt="employee team generated desktop view" />
            <div className="bottom-left">
              <a href="https://github.com/JXIong15/10-employee" target="_blank" rel="noreferrer">Employee Team Generator</a>
              <h3>HTML, JS, Express, Node</h3>
            </div>
          </a>
        </div>
        <div class="container3">
          <a href="https://drive.google.com/file/d/1oj2ipnA7n120UpnVb8gouwQNRhDQUU_o/view" target="_blank" rel="noreferrer">
            <img src="./Assets/readme.gif" alt="readme generator" />
            <div className="bottom-left">
              <a href="https://github.com/JXIong15/09-readme-generator" target="_blank" rel="noreferrer">ReadMe Generator</a>
              <h3>JS, Node, Inquirer</h3>
            </div>
          </a>
        </div>
      </div>

      <div class="projects">
        <div class="container3">
          <a href="https://jxiong15.github.io/06-weather/" target="_blank" rel="noreferrer">
            <img src="./Assets/weather-board.png" alt="weather board screenshot" />
            <div className="bottom-left">
              <a href="https://github.com/JXIong15/06-weather" target="_blank" rel="noreferrer">Weather Dashboard</a>
              <h3>HTML, CSS, JS, API</h3>
            </div>
          </a>
        </div>
        <div class="container3">
          <a href="https://jxiong15.github.io/05-calendar/" target="_blank" rel="noreferrer">
            <img src="./Assets/day-calendar.png" alt="day calendar" />
            <div className="bottom-left">
              <a href="https://github.com/JXIong15/05-calendar" target="_blank" rel="noreferrer">Day Planner</a>
              <h3>HTML, CSS, JS, localStorage</h3>
            </div>
          </a>
        </div>
      </div>

      <div class="projects">
        <div class="container3">
          <a href="https://jxiong15.github.io/04-codequiz/" target="_blank" rel="noreferrer">
            <img src="./Assets/code-quiz.png" alt="red code quiz home page" />
            <div className="bottom-left">
              <a href="https://github.com/JXIong15/04-codequiz" target="_blank" rel="noreferrer">Code Quiz (WORK IN PROGRESS)</a>
              <h3>HTML, CSS, JS</h3>
            </div>
          </a>
        </div>
        <div class="container3">
          <a href="https://jxiong15.github.io/03-create-password/" target="_blank" rel="noreferrer">
            <img src="./Assets/pass.png" alt="generate password webpage" />
            <div className="bottom-left">
              <a href="https://github.com/JXIong15/03-create-password" target="_blank" rel="noreferrer">Generate Password</a>
              <h3>JS</h3>
            </div>
          </a>
        </div>
      </div>

      <div class="project">
        <div class="homework">
          <a href="https://jxiong15.github.io/02-profile/" target="_blank" rel="noreferrer">
            <img src="./Assets/Header.png" alt="this webpage" />
            <div className="bottom-left">
              <a href="https://github.com/JXIong15/02-profile" target="_blank" rel="noreferrer">This Webpage</a>
              <h3>HTML, CSS</h3>
            </div>
          </a>
        </div>
        <div class="homework">
          <a href="https://jxiong15.github.io/01-horiseon/" target="_blank" rel="noreferrer">
            <img src="./Assets/horiseon.png" alt="blue webpage" />
            <div className="bottom-left">
              <a href="https://github.com/JXIong15/01-horiseon" target="_blank" rel="noreferrer">Editing Existing Code</a>
              <h3>HTML</h3>
            </div>
          </a>
        </div>
      </div> */}

    </div>
  );
}

export default Homework;