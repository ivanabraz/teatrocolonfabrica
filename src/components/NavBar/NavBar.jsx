import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import NavBarMobile from "./NavBarMobile";
import NavBarLogo from "./NavBarLogo";
import NavBarBurger from "./NavBarBurger";
import NavBarDesktop from "./NavBarDesktop";

const NavBar = () => {
    const { t, i18n } = useTranslation();
    const [productions, setProductions] = useState({ es: [], en: [] });
    const [featuredIndices, setFeaturedIndices] = useState([]);

    useEffect(() => {
        const fetchJson = async (language) => {
            try {
                const response = await fetch(`/locales/${language}/global.json`);
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
                id: t('global.why'),
                name: t('global.why'), 
                href: t('global.why') 
            },
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
