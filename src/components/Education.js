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
        renderItem={(child, dataHandler) => (
          <School dataId={child} dataHandler={dataHandler} />
        )}
      />
    </section>
  );
};

export default Education;
