import React from "react";
import Input from "./general/Input";

// TODO: create a generic Form component to handle things like
class JobForm extends React.Component {
  constructor(props) {
    super(props);
    const {
      title,
      company,
      dateStarted,
      dateEnded,
      responsibilities,
    } = this.props.data;
    this.state = {
      title: title,
      company: company,
      dateStarted: dateStarted,
      dateEnded: dateEnded,
      responsibilities: responsibilities,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSublistInputChange = this.handleSublistInputChange.bind(this);
    this.handleRemoveSublistItem = this.handleRemoveSublistItem.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({ [target.name]: value });
  }

  handleSublistInputChange(e, i) {
    const target = e.target;
    const value = target.value;
    const newResponsibilities = [...this.state.responsibilities];
    newResponsibilities[i] = value;
    this.setState({ responsibilities: newResponsibilities });
  }

  handleRemoveSublistItem(e, i) {
    this.setState(({ responsibilities }) => ({
      responsibilities: responsibilities.filter((r, index) => i !== index),
    }));
  }

  handleAddSublistItem() {
    const placeholderText = "New responsibility";
    this.setState(({ responsibilities }) => ({
      responsibilities: responsibilities
        ? [...responsibilities, placeholderText]
        : [placeholderText],
    }));
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state);
  }

  render() {
    const { onCancel, newForm } = this.props;
    const {
      title,
      company,
      dateStarted,
      dateEnded,
      responsibilities,
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="title"
          label="Title:"
          value={title}
          onChange={this.handleInputChange}
        />
        <Input
          type="text"
          name="company"
          label="Company:"
          value={company}
          onChange={this.handleInputChange}
        />
        <Input
          type="date"
          name="dateStarted"
          label="Date began:"
          value={dateStarted}
          onChange={this.handleInputChange}
        />
        <Input
          type="date"
          name="dateEnded"
          label="Date ended:"
          value={dateEnded}
          onChange={this.handleInputChange}
        />

        <p>Responsibilities:</p>
        <div className="sublist">
          {responsibilities && responsibilities.length > 0 ? (
            responsibilities.map((r, i) => (
              <div key={i}>
                <Input
                  type="text"
                  name={`responsibility-${i}`}
                  label=""
                  value={r}
                  onChange={(e) => this.handleSublistInputChange(e, i)}
                />

                <button
                  type="button"
                  onClick={(e) => this.handleRemoveSublistItem(e, i)}
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p className="text-placeholder">
              Add a responsibility/achievement!
            </p>
          )}

          <button
            type="button"
            onClick={() => {
              this.handleAddSublistItem();
            }}
          >
            Add Responsibility
          </button>
        </div>

        <input type="submit" value={newForm ? "Add Job" : "Save changes"} />
        <button onClick={onCancel} type="button">
          Cancel
        </button>
      </form>
    );
  }
}

JobForm.defaultProps = {
  data: {
    title: "Title",
    company: "Company",
    // TODO: figure out better defaults, or handle null better
    // possibly also: add "present" option to dateEnded?
    dateStarted: "2021-01-01",
    dateEnded: "2021-01-01",
    responsibilities: [],
  },
};

export default JobForm;
