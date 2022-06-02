import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const [background, setBackground] = useState(true);

    const onmouseenter = () => {
        console.log(window.scrollY);
        if (window.scrollY >= 100) {
            setBackground(true);
        }
    };



    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };




    return (
        <>
            <nav className="navbar_heading"  >
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Agri<span style={{ "color": "green" }}>Business</span>
                    <i class='fab fa-firstdraft' />
                </Link>
                <div className='menu_icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav_menu active' : 'nav_menu'}>
                    <li className='nav_item'>
                        <Link to='/' className='nav_links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li
                        className='nav_item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link
                            to='/services'
                            className='nav_links'
                            onClick={closeMobileMenu}
                        >
                            Services <i className='fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown />}
                    </li>
                    <li className='nav_item'>
                        <Link
                            to='/products'
                            className='nav_links'
                            onClick={closeMobileMenu}
                        >
                            Products
                        </Link>
                    </li>
                    <li className='nav_item'>
                        <Link
                            to='/contact-us'
                            className='nav_links'
                            onClick={closeMobileMenu}
                        >
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to='/sign-up'
                            className='nav-links-mobile'
                            onClick={closeMobileMenu}
                        >
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    );
}

export default Navbar;