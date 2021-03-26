import { nanoid } from "nanoid";
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

  const addItem = (data) => {
    console.log(data);
    const id = nanoid(10);
    dataHandler(actions.add, id, data);
    dataHandler(actions.set, listId, [...dataList, id]);
    toggleAddForm(false);
  };

  const onItemChange = (id, data) => {
    dataHandler(actions.set, id, data);
    setEditItem("");
  };

  return (
    <>
      <ul className={`resume-section__list ${className}`}>
        {dataList
          ? dataList.map((child) => (
              <li className="resume-list-item" key={child}>
                <ListItem
                  data={dataHandler(actions.get, child)}
                  isEditing={editItem === child}
                  onConfirmEdit={(data) => onItemChange(child, data)}
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
