import React from "react";
import DeleteIcon from "./trash-solid.svg";

const DeleteBtn = ({onDelete}) => {
  return (
    <button className="delete" onClick={onDelete}>
         <img src={DeleteIcon} />
    </button>
  );
};

export default DeleteBtn;
