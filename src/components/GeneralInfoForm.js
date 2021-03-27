import React from "react";
import Input from "./general/Input";

class GeneralInfoForm extends React.Component {
  constructor(props) {
    super(props);
    const { data } = this.props;
    this.state = {
      firstName: data.firstName,
      lastName: data.lastName,
      contactInfo: data.contactInfo,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleContactInfoChange = this.handleContactInfoChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleContactInfoChange(prop, value) {
    const newContactInfo = { ...this.state.contactInfo };
    newContactInfo[prop] = value;
    this.setState({ contactInfo: newContactInfo });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state);
  }

  render() {
    const { firstName, lastName, contactInfo } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          name="firstName"
          label="First Name:"
          value={firstName}
          onChange={this.handleInputChange}
        />
        <Input
          type="text"
          name="lastName"
          label="Last Name:"
          value={lastName}
          onChange={this.handleInputChange}
        />

        {/* map array of [k,v] from contactInfo?? */}
        <p>Contact Info:</p>
        {Object.entries(contactInfo).map((item) => {
          const [key, value] = item;
          return (
            <div key={key}>
              <Input
                type="text"
                name={key}
                label={key}
                value={value}
                onChange={(e) =>
                  this.handleContactInfoChange(key, e.target.value)
                }
              />
            </div>
          );
        })}
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default GeneralInfoForm;
