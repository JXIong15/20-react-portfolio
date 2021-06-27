import React from "react";

function IndividualHW(props) {
    return (
      <div className="project">
        <a href={props.deploy} target="_blank" rel="noreferrer">
          <img src={props.img} alt={props.alt} />
        </a>
        <div className="bottom-left">
          <a href={props.repo} target="_blank" rel="noreferrer">{props.name}</a>
          <h3>{props.tech}</h3>
        </div>
        <p>{props.desc}</p>
      </div>
    );
}

export default IndividualHW;