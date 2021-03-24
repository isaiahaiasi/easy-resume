import React, { useState } from "react";
import { actions } from "../Store";

const ResumeList = ({
  className,
  listId,
  dataHandler,
  ListItem,
  Placeholder,
}) => {
  const dataList = dataHandler(actions.get, listId);

  const [editItem, setEditItem] = useState("");

  const onDelete = (id) => {
    console.log(`deleting ${id}`);
    dataHandler(
      actions.set,
      listId,
      dataList.filter((x) => x !== id)
    );
    dataHandler(actions.delete, id);
  };

  const onEdit = (id) => {
    setEditItem(id);
  };

  return (
    <ul className={`resume-section__list ${className}`}>
      {dataList
        ? dataList.map((child) => (
            <li className="resume-list-item" key={child}>
              <ListItem
                dataId={child}
                dataHandler={dataHandler}
                isEditing={editItem === child}
              />
              {editItem !== child && (
                <button onClick={() => onEdit(child)}>edit</button>
              )}
            </li>
          ))
        : Placeholder}
    </ul>
  );
};

export default ResumeList;
