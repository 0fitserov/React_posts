import React, { useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';

import "./index.css";

const ModalComponent = ({ handleCloseModal, handleCreateClick, title, children }) => {

    return <div>

        <div className='modal'>
            <div className='modalContent'>
                <div className='modalHeader'>
                    <h3>{title}</h3>
                    <button className='btn btnNot' onClick={handleCloseModal}>X</button>
                </div>
                <div className='modalBody'>
                    {children}
                </div>
                <div className='modalFooter'>
                    <button className='btn closeBtn btnNot' onClick={handleCloseModal}>Close</button>
                    <button className='btn createBtn btnOk' onClick={handleCreateClick}>Create</button>
                </div>
            </div>
        </div>

    </div>
}

const Modal = (props) => {
    const rootRef = useRef(null);

    useEffect(() => {
        rootRef.current = document.getElementById("modal-root")
    }, [])

    console.log("render")
    if (rootRef.current===null) { return null } 

    return ReactDOM.createPortal(
        <ModalComponent {...props} />,
        rootRef.current
    );
}

export default Modal;

