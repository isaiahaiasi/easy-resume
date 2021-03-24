import React from "react";
import Input from "./general/Input";

class JobForm extends React.Component {
  constructor(props) {
    super(props);
    const { title, company, dateStarted, dateEnded } = this.props.data;
    this.state = {
      title: title,
      company: company,
      // TODO: handling date formatting (input can't read my format, input format is ugly)
      dateStarted: dateStarted,
      dateEnded: dateEnded,
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
    const { title, company, dateStarted, dateEnded } = this.state;
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
        <input type="submit" value={newForm ? "Add Job" : "Save changes"} />
        <button onClick={onCancel}>Cancel</button>
      </form>
    );
  }
}

JobForm.defaultProps = {
  data: {
    title: "Title",
    company: "Company",
    dateStarted: "",
    dateEnded: "",
  },
};

export default JobForm;
