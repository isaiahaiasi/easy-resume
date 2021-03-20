import React from "react";
import { nanoid } from "nanoid";

const Job = ({ data }) => {
  return (
    <div className="resume-section job">
      <div className="resume-section__main-content">
        <div className="left">
          <p>
            <span className="text-bold">{data.title}</span>
            {" | "}
            <span>{data.company}</span>
          </p>
        </div>
        <div className="right">
          <p>{`${data.dateStarted} - ${data.dateEnded}`}</p>
        </div>
      </div>
      <ul className="resume-section__list">
        {data.responsibilities ? (
          data.responsibilities.map((resp) => <li key={nanoid(10)}>{resp}</li>)
        ) : (
          <p className="text-placeholder">add a responsibility</p>
        )}
      </ul>
    </div>
  );
};

export default Job;
