import ResumeList from "./ResumeList";

const GeneralInfo = ({ data }) => {
  return (
    <section className="resume-section">
      <div className="resume-section__header text-center">
        <span>{data.firstName}</span>{" "}
        <span className="text-bold"> {data.lastName}</span>
      </div>
      {data.contactInfoList && data.contactInfoList.length > 0 ? (
        <ResumeList
          className="resume-section__list--row flex-center no-indent"
          dataList={data.contactInfoList}
          renderItem={(child) => (
            <p>
              {child.type}: {child.info}
            </p>
          )}
        />
      ) : (
        <p className="placeholder">Add contact info</p>
      )}
    </section>
  );
};

export default GeneralInfo;
