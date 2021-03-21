import React from "react";
import Job from "./Job";
import ResumeList from "./ResumeList";

const Experience = ({ data }) => {
  return (
    <section className="resume-section experience">
      <p className="resume-section__header">Experience</p>
      <ResumeList
        className="no-indent"
        dataList={data.jobs}
        renderItem={(child) => <Job data={child} />}
      />
    </section>
  );
};

export default Experience;
