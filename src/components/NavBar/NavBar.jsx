import React, { useState, useEffect } from "react";
import NavBarMobile from "./NavBarMobile";
import NavBarLogo from "./NavBarLogo";
import NavBarBurger from "./NavBarBurger";
import NavBarDesktop from "./NavBarDesktop";
import { useTranslation } from 'react-i18next';

const NavBar = () => {
    const { t, i18n } = useTranslation();
    const [productions, setProductions] = useState({ es: [], en: [] });

    useEffect(() => {
        // Fetch the JSON data for both languages
        const fetchJson = async (language) => {
            try {
                const response = await fetch(`/locales/${language}/global.json`);
                const data = await response.json();
                return data.productions;
            } catch (error) {
                console.error('Error fetching data:', error);
                return [];
            }
        };

        Promise.all([fetchJson('es'), fetchJson('en')])
            .then(([esProductions, enProductions]) => {
                setProductions({ es: esProductions, en: enProductions });
            });
    }, []);

    const balletProductions = productions['es'].filter(production => production.category.toLowerCase() === 'ballet');
    const operaProductions = productions['es'].filter(production => production.category.toLowerCase() === 'ópera');
    

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
                        id: 'ballet',
                        name: t('global.ballet'),
                        items: balletProductions.flatMap((production, index) =>
                            production.text_long.map((item, subIndex) => ({
                                id: production.id,
                                name: item.title,
                                href: `#ballet-${index}-${subIndex}`,
                            }))
                        ),
                    },
                    {
                        id: 'opera',
                        name: t('global.opera'),
                        items: operaProductions.flatMap((production, index) =>
                            production.text_long.map((item, subIndex) => ({
                                id: production.id,
                                name: item.title,
                                href: `#opera-${index}-${subIndex}`,
                            }))
                        ),
                    },
                ],
                
            },
        ],
        pages: [
            { name: t('global.why'), href: t('global.why') },
        ],
    };
    
    return (
        <div className="bg-white">
            <NavBarMobile navigation={navigation} />
            <header className="relative bg-white mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center max-w-7xl z-60">
                <NavBarBurger />
                <NavBarLogo />
                <NavBarDesktop navigation={navigation} balletProductions={balletProductions} operaProductions={operaProductions} lang={i18n.language} />
            </header>
        </div>
    );
};

export default NavBar;
