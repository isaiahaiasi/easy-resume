import { nanoid } from "nanoid";
import React from "react";
import { actions } from "../Store";
import JobForm from "./JobForm";

// could pass data directly instead of id,
// atm just doing this for """consistency"""
const Job = ({ dataId, dataHandler, isEditing, closeEdit }) => {
  const data = dataHandler(actions.get, dataId);
  const responsibilities = dataHandler(actions.get, data.responsibilities);

  const addJob = (e) => {
    e.preventDefault();
    console.log("adding job...");
    closeEdit();
  };

  const renderStatic = () => (
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
          responsibilities.map((text) => (
            <li className="resume-list-item" key={nanoid(10)}>
              {text}
            </li>
          ))
        ) : (
          <li className="resume-list-item text-placeholder">Add a task</li>
        )}
      </ul>
    </div>
  );

  const renderForm = () => (
    <JobForm data={data} onSubmit={addJob} onCancel={closeEdit} />
  );

  return isEditing ? renderForm() : renderStatic();
};

export default Job;
