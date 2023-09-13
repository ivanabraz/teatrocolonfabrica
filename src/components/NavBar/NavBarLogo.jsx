import React from "react";
import { Link } from "react-router-dom";

// IMAGES
const logo = `${process.env.PUBLIC_URL}/images/global/logo.svg`;

const NavBarLogo = (props) => {
    const { customClassName } = props;
    return (
        <div className={`flex w-100 ${customClassName !== null ? customClassName : ''}`}>
            <Link to="/">
                <span className="sr-only">Teatro Colón Fábrica logo</span>
                <img className='w-full' src={logo} alt='Teatro Colón Fábrica logo'/>
            </Link>
        </div>
    )
}

export default NavBarLogo;