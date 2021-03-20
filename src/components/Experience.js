import React from "react";
import Job from "./Job";

const Experience = ({ data }) => {
  return (
    <section className="resume-section experience">
      <p className="resume-section__header">Experience</p>
      <ul className="resume-section__list">
        {data.jobs.map((child) => (
          <Job data={child} key={child.id} />
        ))}
      </ul>
    </section>
  );
};

export default Experience;
