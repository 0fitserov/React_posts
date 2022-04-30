import React from "react";
import "./index.css";

const PaginationBtn = ({ onClick, children, active }) => {
  return (
    <button className={`btnPag ${active ? "active" : ""}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default PaginationBtn;
