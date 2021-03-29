import React, { useState } from "react";
import Input from "./general/Input";
import { useFormInput } from "../hooks/input-hooks";

const defaultJob = {
  title: "Title",
  company: "Company",
  dateStarted: "2021-01-01",
  dateEnded: "2021-01-01",
  responsibilities: [],
};

export default function JobForm({
  onSubmit,
  onCancel,
  isAddForm,
  data = defaultJob,
}) {
  const title = useFormInput(data.title);
  const company = useFormInput(data.company);
  const dateStarted = useFormInput(data.dateStarted);
  const dateEnded = useFormInput(data.dateEnded);

  const [responsibilities, setResponsibilities] = useState(
    data.responsibilities ?? []
  );

  const handleRemoveListItem = (i) => {
    setResponsibilities((prevState) => prevState.filter((r, j) => j !== i));
  };

  const handleAddListItem = () => {
    setResponsibilities((prevState) => [...prevState, "New responsibility"]);
  };

  const handleChangeListItem = (e, i) => {
    setResponsibilities((prevState) =>
      prevState.map((r, j) => (i === j ? e.target.value : r))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      title: title.value,
      company: company.value,
      dateStarted: dateStarted.value,
      dateEnded: dateEnded.value,
      responsibilities,
    });
  };

  const responsibilityInputs =
    responsibilities && responsibilities.length > 0 ? (
      responsibilities.map((r, i) => (
        <div key={i}>
          <Input
            type="text"
            name={`responsibility-${i}`}
            label=""
            value={r}
            onChange={(e) => handleChangeListItem(e, i)}
          />

          <button type="button" onClick={() => handleRemoveListItem(i)}>
            Delete
          </button>
        </div>
      ))
    ) : (
      <p className="text-placeholder">Add a responsibility/achievement!</p>
    );

  return (
    <form onSubmit={handleSubmit}>
      <Input name="title" label="Title:" {...title} />
      <Input name="company" label="Company:" {...company} />
      <Input
        type="date"
        name="dateStarted"
        label="Date began:"
        {...dateStarted}
      />
      <Input type="date" name="dateEnded" label="Date ended:" {...dateEnded} />

      <p>Responsibilities:</p>
      <div className="sublist">
        {responsibilityInputs}

        <button
          type="button"
          onClick={() => {
            handleAddListItem();
          }}
        >
          Add Responsibility
        </button>
        <button onClick={onCancel} type="button">
          Cancel
        </button>
      </div>

      <input type="submit" value={isAddForm ? "Add Job" : "Save changes"} />
    </form>
  );
}
