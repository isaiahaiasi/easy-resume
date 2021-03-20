import React from "react";
import Experience from "./components/Experience";
import Education from "./components/Education";
import GeneralInfo from "./components/GeneralInfo";
import Skills from "./components/Skills";
import "./styles/resume.css";
import "./styles/utilities.css";

const Resume = ({ data }) => {
  const { generalInfo, experience, education, skills } = data;
  return (
    <main className="resume">
      <GeneralInfo data={generalInfo} />
      <Experience data={experience} />
      <Education data={education} />
      <Skills data={skills} />
    </main>
  );
};

export default Resume;
