import { nanoid } from "nanoid";
import React from "react";
import { actions } from "../Store";
import JobForm from "./JobForm";
import { formatDate } from "../handleDates";

// could pass data directly instead of id,
// atm just doing this for """consistency"""
const Job = ({ dataId, dataHandler, isEditing, closeEdit }) => {
  const data = dataHandler(actions.get, dataId);

  const editJob = (data) => {
    dataHandler(actions.set, dataId, data);
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
        <div className="text-right">
          <p>{`${formatDate(data.dateStarted)} - ${formatDate(
            data.dateEnded
          )}`}</p>
        </div>
      </div>
      {isEditing && <p className="text-placeholder">Editing this one...</p>}
      <ul className="resume-section__list--sublist">
        {data.responsibilities ? (
          data.responsibilities.map((text) => (
            <li className="resume-list-item" key={nanoid(10)}>
              {text}
            </li>
          ))
        ) : (
          <li className="resume-list-item text-placeholder">
            Edit to add a task
          </li>
        )}
      </ul>
    </div>
  );

  const renderForm = () => (
    <JobForm data={data} onSubmit={editJob} onCancel={closeEdit} />
  );

  return isEditing ? renderForm() : renderStatic();
};

export default Job;
