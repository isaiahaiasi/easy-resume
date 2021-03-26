import React from "react";
import Input from "./general/Input";

class SchoolForm extends React.Component {
  constructor(props) {
    super(props);

    const { degree, school, dateStarted, dateEnded, gpa } = this.props.data;

    this.state = {
      degree,
      school,
      dateStarted,
      dateEnded,
      gpa,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({ [target.name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit(this.state);
  }

  render() {
    const { onCancel, newForm } = this.props;
    const { degree, school, dateStarted, dateEnded, gpa } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="degree"
          label="Degree:"
          value={degree}
          onChange={this.handleInputChange}
        />
        <Input
          type="text"
          name="school"
          label="School:"
          value={school}
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
        <Input
          type="number"
          name="gpa"
          label="GPA:"
          value={gpa}
          onChange={this.handleInputChange}
        />

        <input type="submit" value={newForm ? "Add Job" : "Save changes"} />
        <button onClick={onCancel} type="button">
          Cancel
        </button>
      </form>
    );
  }
}

SchoolForm.defaultProps = {
  data: {
    degree: "Degree",
    school: "School",
    dateStarted: "2021-01-01",
    dateEnded: "2021-01-01",
    gpa: "3.0",
  },
};

export default SchoolForm;
