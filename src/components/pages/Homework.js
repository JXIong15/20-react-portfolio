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
          </a>
            <div className="hw-cap">
              <a href="https://github.com/JXIong15/14-tech-blog" target="_blank" rel="noreferrer">Tech-Blog</a>
              <h3>Handlebars, MySQL, Heroku, Insomnia</h3>
            </div>
          <p>
          Allows users to view, edit, and make blog posts. Users can also create accounts and track their blog posts through there.
          </p>
        </div>
        <div className="col-md-6 homework">
          <a href="https://drive.google.com/file/d/1o0SrNRsSqu0UHwKE7BNGJvuu6fhUxWi0/view" target="_blank" rel="noreferrer">
            <img src="./Assets/ecommerce.gif" alt="ecommerce adding product demo" />
          </a>
            <div className="hw-cap">
              <a href="https://github.com/JXIong15/13-ecommerce" target="_blank" rel="noreferrer">ECommerce</a>
              <h3>JS, Node, MySQL, Insomnia</h3>
            </div>
          <p>
          Uses Node, MySql, Insomnia, and the command line to sync the backend server to the MySql data. Routes the database appropriately.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 homework">
          <a href="https://drive.google.com/file/d/1nho_JsT15NoVYrZD1V_KKVB-p9wdJvzZ/preview" target="_blank" rel="noreferrer">
            <img src="./Assets/employee-tracker.png" alt="employee tracker department budget view" />
            </a>
          <div className="hw-cap">
              <a href="https://github.com/JXIong15/12-employee-tracker" target="_blank" rel="noreferrer">Employee Tracker</a>
              <h3>JS, MySQL, Node</h3>
            </div>
          <p>
          Generates an employee database. The database displays departments, roles, and individual employee information.
          </p>
        </div>
        <div class="col-md-6 homework">
          <a href="https://fierce-beach-80852.herokuapp.com/" target="_blank" rel="noreferrer">
            <img src="./Assets/notetaker.png" alt="note taker homepage" />
          </a>
          <div className="hw-cap">
              <a href="https://github.com/JXIong15/11-note-taker" target="_blank" rel="noreferrer">Note Taker</a>
              <h3>JS, Node, JSON, Heroku</h3>
            </div>
          <p>
          Users can create, save, and delete notes. The application is deployed on a Heroku live server.
          </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 homework">
          <a href="https://drive.google.com/file/d/1aIvexVPLv0fNYhxhRUbo314YsrOxEjaT/view" target="_blank" rel="noreferrer">
            <img src="./Assets/employee-team.png" alt="employee team generated desktop view" />
            </a>
            <div className="hw-cap">
              <a href="https://github.com/JXIong15/10-employee" target="_blank" rel="noreferrer">Employee Team Generator</a>
              <h3>HTML, JS, Express, Node</h3>
            </div>
            <p>
            Generates a employee cards for the manager's team from the user-specified inputs.
            </p>
        </div>
        <div class="col-md-6 homework">
          <a href="https://drive.google.com/file/d/1oj2ipnA7n120UpnVb8gouwQNRhDQUU_o/view" target="_blank" rel="noreferrer">
            <img src="./Assets/readme.gif" alt="readme generator" />
          </a>
            <div className="hw-cap">
              <a href="https://github.com/JXIong15/09-readme-generator" target="_blank" rel="noreferrer">ReadMe Generator</a>
              <h3>JS, Node, Inquirer</h3>
            </div>
            <p>
            Uses node and the command line to generate a README file along with a LICENSE file for the user-specified inputs.
            </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 homework">
          <a href="https://jxiong15.github.io/06-weather/" target="_blank" rel="noreferrer">
            <img src="./Assets/weather-board.png" alt="weather board screenshot" />
          </a>
            <div className="hw-cap">
              <a href="https://github.com/JXIong15/06-weather" target="_blank" rel="noreferrer">Weather Dashboard</a>
              <h3>HTML, CSS, JS, API</h3>
            </div>
            <p>
            The user can get the current weather information of any place and the next five day forecast. 
            The previous 10 searches are stroed in a column on the left of the page.
            </p>
        </div>
        <div class="col-md-6 homework">
          <a href="https://jxiong15.github.io/05-calendar/" target="_blank" rel="noreferrer">
            <img src="./Assets/day-calendar.png" alt="day calendar" />
          </a>
            <div className="hw-cap">
              <a href="https://github.com/JXIong15/05-calendar" target="_blank" rel="noreferrer">Day Planner</a>
              <h3>HTML, CSS, JS, localStorage</h3>
            </div>
            <p>
            Allows user to input tasks for the workday. Background is highlighted in colors to indicate whether 
            that time has passed. The agenda is saved in local storage so that the user can come back to it at any time.
            </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 homework">
          <a href="https://jxiong15.github.io/04-codequiz/" target="_blank" rel="noreferrer">
            <img src="./Assets/code-quiz.png" alt="red code quiz home page" />
          </a>
            <div className="hw-cap">
              <a href="https://github.com/JXIong15/04-codequiz" target="_blank" rel="noreferrer">Code Quiz (WORK IN PROGRESS)</a>
              <h3>HTML, CSS, JS</h3>
            </div>
            <p>
            The Code Quiz is a quiz users can take to test their knowledge on common coding terms and facts. Users can view high 
            scores as well as input their initials to save their scores.
            </p>
        </div>
        <div class="col-md-6 homework">
          <a href="https://jxiong15.github.io/03-create-password/" target="_blank" rel="noreferrer">
            <img src="./Assets/pass.png" alt="generate password webpage" />
          </a>
            <div className="hw-cap">
              <a href="https://github.com/JXIong15/03-create-password" target="_blank" rel="noreferrer">Generate Password</a>
              <h3>JS</h3>
            </div>
            <p>
            Generates a random user specific password based on a user-given criteria.
            </p>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6 homework">
          <a href="https://jxiong15.github.io/02-profile/" target="_blank" rel="noreferrer">
            <img src="./Assets/Header.png" alt="this webpage" />
          </a>
            <div className="hw-cap">
              <a href="https://github.com/JXIong15/02-profile" target="_blank" rel="noreferrer">This Webpage</a>
              <h3>HTML, CSS</h3>
            </div>
            <p>
            A CSS and HTML online portfolio of my work as a junior software developer.
            </p>
        </div>
        <div class="col-md-6 homework">
          <a href="https://jxiong15.github.io/01-horiseon/" target="_blank" rel="noreferrer">
            <img src="./Assets/horiseon.png" alt="blue webpage" />
          </a>
            <div className="hw-cap">
              <a href="https://github.com/JXIong15/01-horiseon" target="_blank" rel="noreferrer">Editing Existing Code</a>
              <h3>HTML</h3>
            </div>
            <p>
            A pseudo webpage for students to fix certain links and make more accessible.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Homework;