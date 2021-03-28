import React, { useState } from "react";
import Input from "./general/Input";
export default function SkillsForm({ data, onSubmit, onCancel }) {
  const [skills, setSkills] = useState(data ?? []);

  const handleChangeItem = (e, i) => {
    setSkills((prevSkills) =>
      prevSkills.map((skill, j) => (i === j ? e.target.value : skill))
    );
  };

  const handleRemoveItem = (i) => {
    setSkills((prevSkills) => prevSkills.filter((s, j) => j !== i));
  };

  const handleAddItem = (e, i) => {
    setSkills((prevSkills) => [...prevSkills, "New skill"]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(skills);
  };

  const skillInputs =
    skills && skills.length > 0 ? (
      skills.map((s, i) => (
        <div key={i}>
          <Input
            name={`skill-${i}`}
            label=""
            value={s}
            onChange={(e) => handleChangeItem(e, i)}
          />
          <button type="button" onClick={() => handleRemoveItem(i)}>
            &times;
          </button>
        </div>
      ))
    ) : (
      <p className="text-placeholder">Add a skill!</p>
    );

  return (
    <form onSubmit={handleSubmit}>
      {skillInputs}
      <button type="button" onClick={handleAddItem}>
        Add skill
      </button>
      <button onClick={onCancel} type="button">
        Cancel
      </button>
      <input type="submit" value="Save changes" />
    </form>
  );
}
