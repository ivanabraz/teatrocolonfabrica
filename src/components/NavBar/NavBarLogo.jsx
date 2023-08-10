import React from "react";
import { Link } from "react-router-dom";

// IMAGES
import Logo from '../../images/global/logo.svg';

const NavBarLogo = () => {
    return (
        <div className="flex lg:ml-0 ml-4">
            <Link to="/">
                <span className="sr-only">Teatro Colón Fábrica logo</span>
                <img className='h-4 w-auto' src={Logo} alt='Teatro Colón Fábrica logo'/>
            </Link>
        </div>
    )
}

export default NavBarLogo;