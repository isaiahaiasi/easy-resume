import ResumeList from "./ResumeList";
import School from "./School";
import SchoolForm from "./SchoolForm";

const Education = ({ data, dataHandler }) => {
  return (
    <section className="resume-section education">
      <p className="resume-section__header">Education</p>
      <ResumeList
        className="no-indent"
        listId={data.schools}
        dataHandler={dataHandler}
        ListItem={School}
        AddForm={SchoolForm}
      />
    </section>
  );
};

export default Education;
