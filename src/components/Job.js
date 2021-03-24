import { nanoid } from "nanoid";
import React from "react";
import { actions } from "../Store";

// could pass data directly instead of id,
// atm just doing this for """consistency"""
const Job = ({ dataId, dataHandler, isEditing }) => {
  const data = dataHandler(actions.get, dataId);
  const responsibilities = dataHandler(actions.get, data.responsibilities);
  console.log(responsibilities);
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
      {isEditing && <p className="text-placeholder">Editing this one...</p>}
      <ul className="resume-section__list">
        {responsibilities ? (
          responsibilities.map((a) => (
            <li className="resume-list-item" key={nanoid(10)}>
              {a}
            </li>
          ))
        ) : (
          <li className="resume-list-item text-placeholder">Add a task</li>
        )}
      </ul>
    </div>
  );
};

export default Job;
