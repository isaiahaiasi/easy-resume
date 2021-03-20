const School = ({ data }) => {
  return (
    <div className="resume-section school">
      <div className="resume-section__main-content">
        <div className="text-left">
          <p>{data.degree}</p>
          <p>{data.school}</p>
        </div>
        <div className="text-right">
          <p>{`${data.dateBegan} - ${data.dateEnded}`}</p>
          <p>GPA: {data.gpa}</p>
        </div>
      </div>
    </div>
  );
};

export default School;
