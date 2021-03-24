import ResumeList from "./ResumeList";
import School from "./School";

const Education = ({ data, dataHandler }) => {
  return (
    <section className="resume-section education">
      <p className="resume-section__header">Education</p>
      <ResumeList
        className="no-indent"
        listId={data.schools}
        dataHandler={dataHandler}
        ListItem={School}
      />
    </section>
  );
};

export default Education;
