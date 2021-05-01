import React from 'react';
import {Link, useLocation} from 'react-router-dom';

const Nav = () => {

    const locationHook = useLocation();

    return (
        <div>
            <Link to = '/' > Home </Link>
            <Link to = '/about'> About </Link>
            <Link to = '/contact'> Contact </Link>    
            <Link to = '/products'> Products </Link>    
            <div> current path: {locationHook.pathname} </div>
        </div>
    )
}

export default Nav;