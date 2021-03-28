import React from "react";
import Input from "./general/Input";
import { useFormInput } from "../hooks/input-hooks";

const defaultSchool = {
  degree: "Degree",
  school: "School",
  dateStarted: "2021-01-01",
  dateEnded: "2021-01-01",
  gpa: "3.0",
};

export default function SchoolForm({
  onSubmit,
  onCancel,
  isAddForm,
  data = defaultSchool,
}) {
  const degree = useFormInput(data.degree);
  const school = useFormInput(data.school);
  const dateStarted = useFormInput(data.dateStarted);
  const dateEnded = useFormInput(data.dateEnded);
  const gpa = useFormInput(data.gpa);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      degree: degree.value,
      school: school.value,
      dateStarted: dateStarted.value,
      dateEnded: dateEnded.value,
      gpa: gpa.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input name="degree" label="Degree:" {...degree} />
      <Input name="school" label="school:" {...school} />
      <Input
        type="date"
        name="dateStarted"
        label="Date began:"
        {...dateStarted}
      />
      <Input type="date" name="dateEnded" label="Date ended:" {...dateEnded} />
      <Input type="number" name="gpa" label="GPA:" {...gpa} />

      <input type="submit" value={isAddForm ? "Add School" : "Save changes"} />
      <button onClick={onCancel} type="button">
        Cancel
      </button>
    </form>
  );
}
