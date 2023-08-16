import React from "react";
import { Link } from "react-router-dom";

// IMAGES
import Logo from '../../images/global/logo.svg';

const NavBarLogo = (props) => {
    const { customClassName } = props;

    return (
        <div className={`flex lg:ml-0 ml-4 ${customClassName !== null ? customClassName : ''}`}>
            <Link to="/">
                <span className="sr-only">Teatro Colón Fábrica logo</span>
                <img className='h-4 w-auto' src={Logo} alt=' Fábrica logo'/>
            </Link>
        </div>
    )
}

export default NavBarLogo;