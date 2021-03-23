import React from "react";
import Experience from "./components/Experience";
import Education from "./components/Education";
import GeneralInfo from "./components/GeneralInfo";
import Skills from "./components/Skills";
import "./styles/resume.css";
import "./styles/utilities.css";

const Resume = ({ data, dataHandler }) => {
  const { generalInfo, experience, education, skills } = data;
  return (
    <main className="resume">
      <GeneralInfo data={generalInfo} dataHandler={dataHandler} />
      <Experience data={experience} dataHandler={dataHandler} />
      <Education data={education} dataHandler={dataHandler} />
      <Skills data={skills} dataHandler={dataHandler} />
    </main>
  );
};

export default Resume;
