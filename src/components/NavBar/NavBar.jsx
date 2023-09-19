import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import NavBarMobile from "./NavBarMobile";
import NavBarBurger from "./NavBarBurger";
import NavBarReturn from "./NavBarReturn";
import NavBarDesktop from "./NavBarDesktop";
import NavBarLanguage from "./NavBarLanguage";

const NavBar = () => {
    const { t, i18n } = useTranslation();
    const [productions, setProductions] = useState({ es: [], en: [] });
    const [featuredIndices, setFeaturedIndices] = useState([]);

    useEffect(() => {
        const fetchJson = async (language) => {
            try {
<<<<<<< HEAD
                const response = await fetch(`${process.env.PUBLIC_URL}/locales/${language}/global.json`);
=======
                const response = await fetch(`/locales/${language}/global.json`);
>>>>>>> 3927ea4a8d894d1c0d886d97b751677aef046e0f
                if (!response.ok) {
                    throw new Error('Fetch error: ' + response.statusText);
                }
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching data:', error);
                return {};
            }
        };
        Promise.all([fetchJson('es'), fetchJson('en')])
            .then(([esData, enData]) => {
                setProductions({ es: esData.productions, en: enData.productions });
            });
    }, [i18n.language]);

    useEffect(() => {
        if (productions.es.opera && productions.en.opera) {
            const totalFeatured = Math.min(2, productions.es.opera.length, productions.en.opera.length);
            const availableIndices = productions[i18n.language].opera
                .map((production, index) => production.featured === true ? index : null)
                .filter(index => index !== null);

            const randomIndices = [];

            while (randomIndices.length < totalFeatured) {
                const randomIndex = Math.floor(Math.random() * availableIndices.length);
                if (!randomIndices.includes(availableIndices[randomIndex])) {
                    randomIndices.push(availableIndices[randomIndex]);
                }
            }

            setFeaturedIndices(randomIndices);
        }
    }, [productions, i18n.language]);

    const navigation = {
        featured: featuredIndices.map((index) => {
            const production = productions[i18n.language].opera[index];
            return {
                id: production.id,
                name: production.title,
                new: production.new,
                imageSrc: `${process.env.PUBLIC_URL}/images/productions/${production.id}/img-card.jpg`,
                imageAlt: production.title,
            };
        }),
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
                            }))
                        ) || [],
                    },
                ],
            },
        ],
        pages: [
            { 
                id: t('global.about'),
                name: t('global.about') +  " Teatro Colón Fábrica", 
                href: ((text) => `${i18n.language}/${text.toLowerCase().replace(/[áäàâ]/g, 'a').replace(/[óöòô]/g, 'o').replace(/\s/g, '_')}`)(t('global.about'))
            },
            { 
                id: t('global.visit'),
                name: t('global.visit'), 
                href: ((text) => `${i18n.language}/${text.toLowerCase().replace(/[áäàâ]/g, 'a').replace(/[óöòô]/g, 'o').replace(/\s/g, '_')}`)(t('global.visit'))
            },
        ],
    };

    return (
        <>
            <div className="absolute flex w-full h-16 lg:hidden mx-auto px-4 sm:px-6 items-center z-10">
                <NavBarBurger/>
                <NavBarReturn/>
                <NavBarMobile navigation={navigation} productions={productions}>
                    <NavBarLanguage/>
                </NavBarMobile>
            </div>
            <div className="absolute flex w-full h-16 hidden lg:flex mx-auto px-32 py-14 items-center z-10 justify-center">
                <NavBarDesktop navigation={navigation} productions={productions}>
                    <NavBarLanguage/>
                </NavBarDesktop>
            </div>
        </>
    );
};

export default NavBar;
