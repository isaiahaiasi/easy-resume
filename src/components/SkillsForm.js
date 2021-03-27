import React from "react";
import Input from "./general/Input";

class SkillsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { skills: this.props.data };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e, i) {
    this.setState(({ skills }) => ({
      skills: skills.map((s, j) => (i === j ? e.target.value : s)),
    }));
  }

  handleAdd() {
    const placeholder = "New skill";
    this.setState(({ skills }) => ({
      skills: skills ? [...skills, placeholder] : [placeholder],
    }));
  }

  handleRemove(i) {
    this.setState(({ skills }) => ({
      skills: skills.filter((s, j) => i !== j),
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.skills);
  }

  render() {
    const { skills } = this.state;

    return (
      <form>
        {skills.map((skill, i) => (
          <div key={i}>
            <Input
              type="text"
              name={`skill-${i}`}
              label=""
              value={skill}
              onChange={(e) => this.handleChange(e, i)}
            />
            <button type="button" onClick={() => this.handleRemove(i)}>
              &times;
            </button>
          </div>
        ))}
        <button type="button" onClick={this.handleAdd}>
          Add skill
        </button>
        <input type="submit" onClick={this.handleSubmit} value="submit" />
      </form>
    );
  }
}

export default SkillsForm;
