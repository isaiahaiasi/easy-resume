import React from "react";
import Job from "./Job";
import ResumeList from "./ResumeList";
const Experience = ({ data, dataHandler }) => {
  return (
    <section className="resume-section experience">
      <p className="resume-section__header">Experience</p>
      <ResumeList
        className="no-indent"
        listId={data.jobs}
        dataHandler={dataHandler}
        renderItem={(child, dataHandler) => (
          <Job dataId={child} dataHandler={dataHandler} />
        )}
      />
    </section>
  );
};

export default Experience;
