import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import './nav.css';

const Nav = () => {

    const locationHook = useLocation();

    return (
        <div className = 'nav-container'>
            <div className = 'navbar'>
                <div className = 'link-container'>
                    <Link to = '/' className = 'main-link'> Home </Link>
                    <Link to = '/about' className = 'main-link'> About </Link>
                    <Link to = '/contact' className = 'main-link'> Contact </Link>    
                    <Link to = '/products' className = 'main-link'> Products </Link>    
                
                
                </div>
            </div>
            <div className = 'route-container'> current path: {locationHook.pathname} </div>
        </div>
    )
}

export default Nav;