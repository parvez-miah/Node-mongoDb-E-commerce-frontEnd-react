import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header font">
            <ul>
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/users">Products</Link></li>
                <li><Link to="/product/add">Add Products</Link></li>

            </ul>
        </div>
    );
};

export default Header;