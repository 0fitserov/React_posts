import React, { useState } from 'react';

import Modal from './Modal/Index';
import UserEdit from './UserEdit';
import Logo from '../Logo';

import "../index.css";

const Header = ({ user, handleEditClick }) => {

    const [modalActivity, setModalActivity] = useState(false);

    const openModal = () => {
        setModalActivity(true)
    }

    return <>
        <div className='header'>
            <div className='header__logo'>
                <Logo />
                <h2>Posts react</h2>
            </div>
            <div className='userCard'>
                <img className='picCardHeader' src={user.avatar} alt={user.name}></img>
                <div className='userInfo'>
                    <div>{user.name}</div>
                    <div>{user.about}</div>
                </div>
                <button className='btn btnUserEdit btnOk' onClick={openModal}>Edit</button>

            </div>

        </div>
        {modalActivity && <Modal>
            <UserEdit user={user} />
        </Modal>}

    </>

}

export default Header;

    //if (!user) {
    //   return <div>Error</div>;
    // }
    // return (
    //   <div>
    //     <div>{user.name}</div>
    //   </div>
    // );