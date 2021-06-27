import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Bio from "./pages/Bio";
import Work from "./pages/Work";
import Contact from "./pages/Contact/Contact";
import projectList from "./seeds/projectSeed"

class Body extends React.Component {
  state = {
    projList: [{projectList}
      // {
      //   id: 2,
      //   deploy: "https://gradright.herokuapp.com/",
      //   img: "https://user-images.githubusercontent.com/73242250/118421760-52261600-b687-11eb-946a-ca680fa588ad.gif",
      //   alt: "gif of how to use the gradright",
      //   repo: "https://github.com/JXIong15/gradright",
      //   num: "Group Project 2:",
      //   name: "GradRight",
      //   tech: "JS, Handlebars, MySQL, Express, Node",
      //   desc: `Admin users can keep track of their students' graduation requirements regardless of the amount of different requirements there are. GradRight compares
      //         students with their respective districts to indicate which graduation requirements are met. Districts and Students can be added, edited, and deleted.`
      // },
      // {
      //   id: 1,
      //   deploy: "https://pdjingle.github.io/ResturGener/",
      //   img: "./Assets/restaurant-proj.gif",
      //   alt: "gif of how to use the restaurant generator",
      //   repo: "https://github.com/JXIong15/ResturGener",
      //   num: "Group Project 1:",
      //   name: "Restaurant Generator",
      //   tech: "HTML, CSS, JS, API",
      //   desc: `Restaurant decision-maker now makes choosing a restaurant fun and easy. The user inputs the desired location and distance traveled.
      // There is an option to choose if the location will have an on-site bar. Then press the "choose my restaurant option". That will then
      // pop up a notification within the browser of a location randomly generated via the program. If the user does not like that location
      // they may choose to input the constraints again to generate another restaurant.`
      // }
    ],
    hwList: [

    ]
  };
  render() {
    return (
      <div>
        <Router basename="/20-react-portfolio/">
          <div>
            <NavBar />
            <Route exact path="/" component={Bio} />
            <Route
              exact path="/work"
              render={props =>
                (<Work state={this.state} />)
              }
            />
            <Route path="/contact" component={Contact} />
          </div>
        </Router>
      </div>
    )
  };
}

export default Body;