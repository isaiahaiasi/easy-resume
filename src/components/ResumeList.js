import React from "react";
import { actions } from "../Store";

const ResumeList = ({
  className,
  listId,
  dataHandler,
  renderItem,
  Placeholder,
}) => {
  const dataList = dataHandler(actions.get, listId);

  const onDelete = (id) => {
    console.log(`deleting ${id}`);
    dataHandler(
      actions.set,
      listId,
      dataList.filter((x) => x !== id)
    );
    dataHandler(actions.delete, id);
  };

  return (
    <ul className={`resume-section__list ${className}`}>
      {dataList
        ? dataList.map((child) => (
            <li className="resume-list-item" key={child}>
              {renderItem(child, dataHandler)}
              <button onClick={() => onDelete(child)}>delete</button>
            </li>
          ))
        : Placeholder}
    </ul>
  );
};

export default ResumeList;
