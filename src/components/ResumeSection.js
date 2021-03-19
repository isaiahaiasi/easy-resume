import React from "react";

export default class ResumeSection extends React.Component {
  render() {
    const { SectionHeader, SectionForm, SectionList } = this.props;
    return (
      <div>
        {SectionHeader && <SectionHeader />}
        {SectionForm && <SectionForm />}
        {SectionList && <SectionList />}
      </div>
    );
  }
}
