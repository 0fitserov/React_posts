import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const ModalComponent = ({
  handleCloseModal,
  handleCreateClick,
  title,
  children,
}) => {
  return (
    <div>
      <div className="modal">
        <div className="modalContent">
          <div className="modalHeader">
            <h3>{title}</h3>
            <button className="btn btnNot" onClick={handleCloseModal}>
              X
            </button>
          </div>
          <div className="modalBody">{children}</div>
          <div className="modalFooter">
            <button className="btn closeBtn btnNot" onClick={handleCloseModal}>
              Close
            </button>
            <button className="btn createBtn btnOk" onClick={handleCreateClick}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return ReactDOM.createPortal(
    <ModalComponent {...props} />,
    document.getElementById("modal-root")
  );
};

export default Modal;
