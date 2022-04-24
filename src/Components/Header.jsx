import React from 'react';
import Logo from '../Logo';
import "../index.css";


const Header = ({ user, handleEditClick }) => {

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
                <button className='btn btnUserEdit btnOk' onClick={handleEditClick}>Edit</button>

            </div>

        </div>
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