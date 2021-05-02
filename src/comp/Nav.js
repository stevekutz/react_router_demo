import React from 'react';
import {Link, useLocation, useParams, useHistory} from 'react-router-dom';

import './nav.css';

const Nav = () => {
    const historyHook = useHistory()
    const locationHook = useLocation();
    const {paramHook} = useParams();

    console.log(historyHook)
    console.log(locationHook);
    console.log(paramHook);

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
            <div className = 'route-container'>
                <p> <span className = 'highlight'> current path: </span> 
                    <span className = 'pathname'> {locationHook.pathname} </span>
                    
                
                </p>
            </div>
        </div>
    )
}

export default Nav;

// <Link to = '/' className = 'main-link'> Home </Link>
// <Link to = '/about' className = 'main-link'> About </Link>
// <Link to = '/contact' className = 'main-link'> Contact </Link>    
// <Link to = '/products' className = 'main-link'> Products </Link>    
