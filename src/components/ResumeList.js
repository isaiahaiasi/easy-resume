import React, { useState } from "react";
import { actions } from "../Store";

const ResumeList = ({
  className,
  listId,
  dataHandler,
  ListItem,
  Placeholder,
  AddForm,
}) => {
  const dataList = dataHandler(actions.get, listId);

  const [editItem, setEditItem] = useState("");
  const [isAddFormOpen, toggleAddForm] = useState(false);

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

  const setAddForm = (bool) => {
    toggleAddForm(bool);
    setEditItem("");
  };

  const addItem = (e) => {
    e.preventDefault();
    console.log("addingItem");
    toggleAddForm(false);
  };

  return (
    <>
      <ul className={`resume-section__list ${className}`}>
        {dataList
          ? dataList.map((child) => (
              <li className="resume-list-item" key={child}>
                <ListItem
                  dataId={child}
                  dataHandler={dataHandler}
                  isEditing={editItem === child}
                  closeEdit={() => setEditItem("")}
                />
                {editItem === child ? (
                  <button onClick={() => onDelete(child)}>delete</button>
                ) : (
                  <button onClick={() => onEdit(child)}>edit</button>
                )}
              </li>
            ))
          : Placeholder}
      </ul>
      {isAddFormOpen ? (
        <AddForm
          onSubmit={addItem}
          onCancel={() => setAddForm(false)}
          newForm={true}
        />
      ) : (
        <button onClick={() => setAddForm(true)}>Add</button>
      )}
    </>
  );
};

export default ResumeList;
