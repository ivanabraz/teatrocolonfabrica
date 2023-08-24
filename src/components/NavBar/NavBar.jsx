import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from 'react-i18next';
import NavBarMobile from "./NavBarMobile";
import NavBarLogo from "./NavBarLogo";
import NavBarBurger from "./NavBarBurger";
import NavBarDesktop from "./NavBarDesktop";
const NavBar = () => {
    const { t, i18n } = useTranslation();
    const [productions, setProductions] = useState({ es: [], en: [] });
    const [balletProductions, setBalletProductions] = useState([]);
    const [operaProductions, setOperaProductions] = useState([]);

    const normalizeCategory = useCallback((category) => {
        const normalized = category
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLocaleLowerCase();
        return normalized;
    }, []);

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

    useEffect(() => {
        // Update ballet and opera productions based on the selected language
        const langProductions = productions[i18n.language];
        const normalizedBallet = normalizeCategory('ballet');
        const normalizedOpera = normalizeCategory('ópera');
        const updatedBalletProductions = langProductions.filter(
            production => normalizeCategory(production.category) === normalizedBallet
        );
        const updatedOperaProductions = langProductions.filter(
            production => normalizeCategory(production.category) === normalizedOpera
        );
        setBalletProductions(updatedBalletProductions);
        setOperaProductions(updatedOperaProductions);
    }, [productions, i18n.language, normalizeCategory]);

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
                        items: balletProductions.flatMap((production, index) =>
                            production.text.map((item, subIndex) => ({
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
                            production.text.map((item, subIndex) => ({
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
            // { 
            //     id: t('global.why'),
            //     name: t('global.why'), 
            //     href: t('global.why') 
            // },
        ],
    };
    
    return (
        <div className="bg-white">
            <NavBarMobile navigation={navigation} balletProductions={balletProductions} operaProductions={operaProductions} lang={i18n.language} />
            <header className="relative bg-white mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center max-w-7xl z-60">
                <NavBarBurger />
                <NavBarLogo />
                <NavBarDesktop navigation={navigation} balletProductions={balletProductions} operaProductions={operaProductions} lang={i18n.language} />
            </header>
        </div>
    );
};

export default NavBar;
