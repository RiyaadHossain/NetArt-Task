import React from 'react';
import Logo from '../../Asset/Images/logo.png'
import "./Header.css"

const Header = () => {
    return (
        <div className='header'>
            <img className='logo' src={Logo} alt="" />
        </div>
    );
};

export default Header;