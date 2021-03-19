import React from "react";
import Job from "./Job";
import ResumeList from "./ResumeList";

const Experience = ({ data }) => {
  return (
    <section className="resume-section experience">
      <p className="resume-section__header">Experience</p>
      <ResumeList listData={data.jobs} ListComponent={Job}>
        {data.jobs.map((child) => (
          <Job data={child} key={child.id} />
        ))}
      </ResumeList>
    </section>
  );
};

export default Experience;
