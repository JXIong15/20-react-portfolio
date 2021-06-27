import React from "react";

function IndividualHW(props) {
  const hw1=props.hwArr[0];
  const hw2=props.hwArr[1];

  return (
    <div className="row">
      <div className="col-md-6 homework">
        <a href={hw1.deploy} target="_blank" rel="noreferrer">
          <img src={hw1.img} alt={hw1.alt} />
        </a>
        <div className="hw-cap">
          <a href={hw1.repo} target="_blank" rel="noreferrer">{hw1.name}</a>
          <h3>{hw1.tech}</h3>
        </div>
        <p>{hw1.desc}</p>
      </div>

      <div className="col-md-6 homework">
        <a href={hw2.deploy} target="_blank" rel="noreferrer">
          <img src={hw2.img} alt={hw2.alt} />
        </a>
        <div className="hw-cap">
          <a href={hw2.repo} target="_blank" rel="noreferrer">{hw2.name}</a>
          <h3>{hw2.tech}</h3>
        </div>
        <p>{hw2.desc}</p>
      </div>
    </div>
  );
}

export default IndividualHW;