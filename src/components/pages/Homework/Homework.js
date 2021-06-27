import React from "react";
import IndividualHW from "./IndividualHW";

function Homework(props) {
  console.log(props[0])
  const hwList = Object.entries(props[0].homeworkList);
  return (
    <div className="work">
      <h2>Individual Work</h2>
      <p>The most recent work is at the top of the list.</p>
      <p>Click on the image/demo to view the app.</p>
      <p>Click on the title to view the GitHub repo.</p>

      <div className="row">
        {hwList.map((hw) => {
          return <IndividualHW
            key={hw[1].id}
            deploy={hw[1].deploy}
            img={hw[1].img}
            alt={hw[1].alt}
            repo={hw[1].repo}
            name={hw[1].name}
            tech={hw[1].tech}
            desc={hw[1].desc}
          />
        })}
      </div>
    </div>
  );
}

export default Homework;