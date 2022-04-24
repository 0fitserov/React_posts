import React from 'react';
import "./index.css";

const Modal = ({ handleCloseModal, handleCreateClick, title, children }) => {
    return <div className='modal'>
        <div className='modalContent'>
            <div className='modalHeader'>
                <h3>{title}</h3>
                <button className='btn btnNot' onClick={handleCloseModal}>X</button>
            </div>
            
            <div className='modalBody'>
                <div>Test</div>
                <input type="url" placeholder="URL post's picture" className={"input"}/>
                <img src="https://eksmo.ru/upload/iblock/388/test_L_min.jpg" alt="img" className={"postImg"}></img>
                <input type="text" placeholder="Post's title" className={"input postTitle"}/>
                <div>
                <textarea type="text" placeholder="Post's text" className={"input postTextarea"}></textarea>
                </div>
                <input type="text" placeholder="Tags" className={"input postTags"}/>
                {children}
            </div>
            <div className='modalFooter'>
                <button className='btn closeBtn btnNot' onClick={handleCloseModal}>Close</button>
                <button className='btn createBtn btnOk' onClick={handleCreateClick}>Create</button>
            </div>
        </div>
    </div>
}

export default Modal;