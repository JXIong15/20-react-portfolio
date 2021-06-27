import React from "react";
import IndividualProject from "./IndividualProject";

function Project(props) {
  const projList = Object.entries(props[0].projectList);

  return (
    <div className="work">
      <h2>Projects</h2>
      <p>The most recent projects are at the top of the list.</p>
      <p>Click on the image/demo to view the app.</p>
      <p>Click on the title to view the GitHub repo.</p>

      {projList.map((proj) => {
        return <IndividualProject
          key={proj[1].id}
          deploy={proj[1].deploy}
          img={proj[1].img}
          alt={proj[1].alt}
          repo={proj[1].repo}
          num={proj[1].num}
          name={proj[1].name}
          tech={proj[1].tech}
          desc={proj[1].desc}
        />
      })}
    </div>
  );
}

export default Project;