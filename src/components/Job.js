import React from "react";
import { nanoid } from "nanoid";

const Job = ({ data }) => {
  return (
    <div className="resume-section job">
      <div className="resume-section__main-content">
        <p>{data.title}</p>
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
