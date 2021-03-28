import React, { useState } from "react";
import { actions } from "../Store";
import SkillsForm from "./SkillsForm";

const Skills = ({ data, dataHandler }) => {
  const [isEditing, setEditing] = useState(false);

  const onSubmit = (newSkills) => {
    dataHandler(actions.set, "skills", newSkills);
    setEditing(false);
  };

  const renderStatic = () => (
    <>
      <ul className="resume-section__list resume-section__list--grid">
        {data.map((skill, i) => (
          <li className="resume-list-item" key={i}>
            {skill}
          </li>
        ))}
      </ul>
      <button onClick={() => setEditing(true)}>Edit</button>
    </>
  );

  const renderForm = () => (
    <SkillsForm
      data={data}
      onSubmit={onSubmit}
      onCancel={() => setEditing(false)}
    />
  );

  return (
    <section className="resume-section skills">
      <p className="resume-section__header">Skills</p>
      {/* TODO: this is pretty weird--forces form open when list empty */}
      {isEditing || data.length === 0 ? renderForm() : renderStatic()}
    </section>
  );
};

export default Skills;
