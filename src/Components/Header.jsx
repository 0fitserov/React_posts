import React from 'react';
import Logo from '../Logo';
import "../index.css";


const Header = ({user}) => {
    
    return <>
        <div className='header'>
            <div className='header__logo'>
                <Logo />
                <h2>Posts react</h2>
            </div>
            <div>{user.name}</div>
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