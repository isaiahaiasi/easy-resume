import React from "react";
import Input from "./general/Input";

class JobForm extends React.Component {
  constructor(props) {
    super(props);
    const { title, company, dateStarted, dateEnded } = this.props.data;
    this.state = {
      title: title,
      company: company,
      dateStarted: dateStarted,
      dateEnded: dateEnded,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState({ [target.name]: value });
  }

  render() {
    const { onSubmit, onCancel, newForm } = this.props;
    const { title, company, dateFrom, dateTo } = this.state;
    return (
      <form onSubmit={onSubmit}>
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
          name="dateFrom"
          label="Date began:"
          value={dateFrom}
          onChange={this.handleInputChange}
        />
        <Input
          type="date"
          name="dateTo"
          label="Date ended:"
          value={dateTo}
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
