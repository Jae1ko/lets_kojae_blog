import React, { useState } from 'react';

import { headerNav } from '@/constants';

const Header = () => {
    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow((prev) => !prev);
    };

    return (
        <header id="header" role="banner">
            <div className="header_inner">
                <div className="header_logo">
                    <h1>
                        <a href="#">lets_kojae</a>
                    </h1>
                </div>
                <nav className={`header_nav ${show ? 'show' : ''}`} role="navigation" aria-label="메인 메뉴">
                    <ul>
                        {headerNav.map((el, idx) => (
                            <li key={idx}>
                                <a href={el.url}>{el.title}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div
                    className="header_nav_mobile"
                    id="headerToggle"
                    aria-controls="primary-menu"
                    aria-expanded={show ? 'true' : 'false'}
                    role="button"
                    tabIndex={0}
                    onClick={toggleMenu}
                >
                    <span></span>
                </div>
            </div>
        </header>
    );
};

export default Header;
