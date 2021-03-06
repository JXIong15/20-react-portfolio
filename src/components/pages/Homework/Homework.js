import React from "react";
import IndividualHW from "./IndividualHW";

function Homework(props) {
  const hwList = Object.entries(props[0].homeworkList);
  const displayHW = [
    [
      hwList[0][1], hwList[1][1]
    ],
    [
      hwList[2][1], hwList[3][1]
    ],
    [
      hwList[4][1], hwList[5][1]
    ],
    [
      hwList[6][1], hwList[7][1]
    ],
    [
      hwList[8][1], hwList[9][1]
    ],
    [
      hwList[10][1], hwList[11][1]
    ],
    [
      hwList[12][1], hwList[13][1]
    ],
    [
      hwList[14][1], hwList[15][1]
    ]
  ]

  return (
    <div className="work">
      <h2>Individual Work</h2>
      <p>The most recent work is at the top of the list.</p>
      <p>Click on the image/demo to view the app.</p>
      <p>Click on the title to view the GitHub repo.</p>

      {displayHW.map((hw) => {
        return (
          <div>
            <IndividualHW
              key={hw[0].id}
              hwArr={hw}
            />
          </div>
        )
      })}
    </div>
  );
}

export default Homework;