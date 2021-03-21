import React from "react";
import ResumeList from "./ResumeList";

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
      <ResumeList
        dataList={data.responsibilities}
        renderItem={(responsibility) => <div>{responsibility}</div>}
        Placeholder={<p className="text-placeholder">add a responsibility</p>}
      />
    </div>
  );
};

export default Job;
