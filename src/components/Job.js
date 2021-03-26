import React from "react";
import JobForm from "./JobForm";
import { formatDate } from "../handleDates";

// TODO: move conditional rendering to ResumeList,
// (this can just be the static render--possibly rename)
const Job = ({ data, isEditing, onConfirmEdit }) => {
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
          data.responsibilities.map((text, i) => (
            <li className="resume-list-item" key={i}>
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
    <JobForm
      data={data}
      onSubmit={onConfirmEdit}
      // calling submit function with old data to cancel... really stupid, TODO: fix
      onCancel={() => onConfirmEdit(data)}
    />
  );

  return isEditing ? renderForm() : renderStatic();
};

export default Job;
