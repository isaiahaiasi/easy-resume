import SchoolForm from "./SchoolForm";

const School = ({ data, isEditing, onConfirmEdit }) => {
  const renderStatic = () => (
    <div className="resume-section school">
      <div className="resume-section__main-content">
        <div className="text-left">
          <p>{data.degree}</p>
          <p>{data.school}</p>
        </div>
        <div className="text-right">
          <p>{`${data.dateStarted} - ${data.dateEnded}`}</p>
          <p>GPA: {data.gpa}</p>
        </div>
      </div>
    </div>
  );

  const renderForm = () => (
    <SchoolForm
      data={data}
      onSubmit={onConfirmEdit}
      onCancel={() => onConfirmEdit(data)}
    />
  );

  return isEditing ? renderForm() : renderStatic();
};

export default School;
