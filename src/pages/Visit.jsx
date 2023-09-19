import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroImage from '../components/HeroImage/HeroImage';
import ItemContent from '../components/ItemContent/ItemContent';

const Visit = () => {
    const headerVideo = `${process.env.PUBLIC_URL}/images/home/header.mp4`;
    const { t, i18n } = useTranslation();
    const [aboutText, setAboutText] = useState([]);
    const [aboutSubtitle, setAboutSubtitle] = useState([]);

    useEffect(() => {
        // Fetch the JSON data dynamically
        async function fetchJsonData() {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/locales/${i18n.language}/global.json`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setAboutText(data.about.text);
                setAboutSubtitle(data.about.subtitle);
            } catch (error) {
                console.error('Error fetching JSON data:', error);
            }
        }

        fetchJsonData();
    }, [i18n.language]);

    return (
        <>
            <HeroImage video={true} headerVideo={headerVideo} title={t('global.visit')} subtitle={aboutSubtitle}/>
            <ItemContent text={aboutText} />
        </>
    );
}

export default Visit;
