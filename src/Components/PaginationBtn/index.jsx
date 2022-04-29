import React from "react";

const PaginationBtn = ({onClick, children}) => {
  return (
    <button className="btnPag" onClick={onClick}>{children}</button>
  );
};

export default PaginationBtn;
