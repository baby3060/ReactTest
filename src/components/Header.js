import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink exact to="/" >홈</NavLink>
            <NavLink to="/login"> Login</NavLink>
        </div>
    );
};

export default Header;