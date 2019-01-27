import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
    <div className="swapi-header">
        <div className="swapi-header-content">
            <Link to="/">
                <img className="swapi-logo" src="/images/logo.png" alt="swapi-logo" />
            </Link>ßß
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/people">Actors</Link></li>
                <li><Link to="/planet">Planets</Link></li>
            </ul>
        </div>
    </div>
)

export default Header;