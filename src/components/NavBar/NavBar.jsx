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
            id: t('global.exhibitions'),
            name: t('global.exhibitions'),
            featured: [
                {
                name: t('global.opera'),
                href: 'opera',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
                imageAlt: t('global.opera'),
                },
                {
                name: t('global.ballet'),
                href: 'ballet',
                imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
                imageAlt: t('global.ballet'),
                },
            ],
            seeMore: t('global.see_more'),
            sections: [
                {
                id: 'opera',
                name: t('global.opera'),
                items: [
                    { name:  t('global.aida'), href: '#' },
                    { name: t('global.don_pascuale'), href: '#' },
                    { name: t('global.la_finta_giardiniera'), href: '#' },
                    { name: t('global.los_cuentos_de_hoffmann'), href: '#' },
                    { name: t('global.un_tranvia_llamado_deseo'), href: '#' },
                    { name: t('global.rigoletto'), href: '#' },
                    { name: t('global.turandot'), href: '#' },
                ],
                },
                {
                id: 'global.ballet',
                name: t('global.ballet'),
                items: [
                    { name: t('global.don_quijote'), href: '#' },
                    { name: t('global.el_corsario'), href: '#' },
                ],
                },
            ],
            },
        ],
        pages: [
            { name: t('global.why'), href: t('global.why')},
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