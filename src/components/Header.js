import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink exact={true} to="/" activeStyle={{ color: 'red' }}>홈</NavLink>
            <NavLink exact={false} to="/login" activeStyle={{ color: 'red' }}> Login</NavLink>
        </div>
    );
};

export default Header;