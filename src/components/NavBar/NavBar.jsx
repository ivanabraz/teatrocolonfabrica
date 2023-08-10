import React from "react";
import NavBarMobile from "./NavBarMobile";
import NavBarLogo from "./NavBarLogo";
import NavBarBurger from "./NavBarBurger";
import NavBarDesktop from "./NavBarDesktop";

import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const {t} = useTranslation();

    const navigation = {
        categories: [
            {
            id: t('exhibitions'),
            name: t('exhibitions'),
            featured: [
                {
                name: t('opera'),
                href: 'opera',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                imageAlt: t('opera'),
                },
                {
                name: t('ballet'),
                href: 'ballet',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                imageAlt: t('ballet'),
                },
            ],
            sections: [
                {
                id: 'opera',
                name: t('opera'),
                items: [
                    { name:  t('aida'), href: '#' },
                    { name: t('don Pascuale'), href: '#' },
                    { name: t('la ginta giardiniera'), href: '#' },
                    { name: t('los cuentos de hoffmann'), href: '#' },
                    { name: t('un tranvía llamado deseo'), href: '#' },
                    { name: t('rigoletto'), href: '#' },
                    { name: t('turandot'), href: '#' },
                ],
                },
                {
                id: 'ballet',
                name: t('ballet'),
                items: [
                    { name: t('don quijote'), href: '#' },
                    { name: t('el corsario'), href: '#' },
                ],
                },
            ],
            },
        ],
        pages: [
            { name: t('why'), href: t('why'), },
        ],
        }

    return (
        <div className="bg-white">
            <NavBarMobile navigation={navigation}/>
            <header className="relative bg-white mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center max-w-7xl z-60">
                <NavBarBurger/>
                <NavBarLogo/>
                <NavBarDesktop navigation={navigation}/>
            </header>
        </div>
    )
}

export default NavBar;