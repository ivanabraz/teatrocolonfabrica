import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import NavBarMobile from "./NavBarMobile";
import NavBarLogo from "./NavBarLogo";
import NavBarBurger from "./NavBarBurger";
import NavBarDesktop from "./NavBarDesktop";

const NavBar = () => {
    const { t, i18n } = useTranslation();
    const [productions, setProductions] = useState({ es: [], en: [] });

    useEffect(() => {
        // Fetch the JSON data for both languages
        const fetchJson = async () => {
            try {
                const response = await fetch(`/locales/${i18n.language}/global.json`);
                if (!response.ok) {
                    throw new Error('Fetch error: ' + response.statusText);
                }
                const data = await response.json();
                return data.productions;
            } catch (error) {
                console.error('Error fetching data:', error);
                return {};
            }
        };
        Promise.all([fetchJson('es'), fetchJson('en')])
            .then(([esProductions, enProductions]) => {
                setProductions({ es: esProductions, en: enProductions });
            });
    }, [i18n.language]);

    const navigation = {
        featured: [
            {
                id: "featured_1",
                new: false,
                name: t('global.why'),
                href: t('global.why'),
                imageSrc: `${process.env.PUBLIC_URL}/images/global/teatrocolonfabrica_img-1.jpg`,
                imageAlt: t('global.why'),
            },
            {
                id: "featured_2",
                new: true,
                name: t('global.featured_n2-name'),
                href: t('global.featured_n2-href'),
                imageSrc: `${process.env.PUBLIC_URL}/images/global/teatrocolonfabrica_img-2.jpg`,
                imageAlt: t('global.featured_n2-name'),
            },
        ],
        categories: [
            {
                id: t('global.exhibitions'),
                name: t('global.exhibitions'),
                sections: [
                    {
                        id: 'ballet',
                        name: t('global.ballet'),
                        items: productions[i18n.language]?.ballet?.flatMap((production, index) =>
                            production.text.map((item, subIndex) => ({
                                id: production.id,
                                name: item.title,
                                href: `#ballet-${index}-${subIndex}`,
                            }))
                        ) || [],
                    },
                    {
                        id: 'opera',
                        name: t('global.opera'),
                        items: productions[i18n.language]?.opera?.flatMap((production, index) =>
                            production.text.map((item, subIndex) => ({
                                id: production.id,
                                name: item.title,
                                href: `#opera-${index}-${subIndex}`,
                            }))
                        ) || [],
                    },
                ],
            },
        ],
        pages: [
            // { 
            //     id: t('global.why'),
            //     name: t('global.why'), 
            //     href: t('global.why') 
            // },
        ],
    };
    
    return (
        <div className="bg-white">
            <NavBarMobile navigation={navigation} productions={productions} />
            <header className="relative bg-white mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center max-w-7xl z-60">
                <NavBarBurger />
                <NavBarLogo />
                <NavBarDesktop navigation={navigation} productions={productions} />
            </header>
        </div>
    );
};

export default NavBar;