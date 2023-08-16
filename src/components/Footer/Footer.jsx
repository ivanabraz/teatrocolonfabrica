import React from "react";
import NavBarLogo from "../NavBar/NavBarLogo";

const Footer = () => {
    return (
        <footer className="w-full h-auto p-10 text-md text-white bg-black text-center flex justify-around">
            <NavBarLogo customClassName={"invert"} />

            <p>© 2023</p>
        </footer>
    )
}

export default Footer;