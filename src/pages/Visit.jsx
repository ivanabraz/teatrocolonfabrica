import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroImage from '../components/HeroImage/HeroImage';
import ItemContent from '../components/ItemContent/ItemContent';
import Legales from '../components/Legales/Legales';
import ThreeColumns from '../components/ThreeColumns/ThreeColumns';

const Visit = () => {
    const headerVideo = `${process.env.PUBLIC_URL}/images/home/header.mp4`;
    const { t, i18n } = useTranslation();
    const [Visit, setVisit] = useState([]);
    const [Text, setText] = useState([]);
    const [Subtitle, setSubtitle] = useState([]);
    const [Legal, setLegal] = useState([]);

    useEffect(() => {
        async function fetchJsonData() {
            try {
                const response = await fetch(`${process.env.PUBLIC_URL}/locales/${i18n.language}/global.json`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setVisit(data.visit);
                setText(data.visit.text);
                setSubtitle(data.visit.subtitle);
                setLegal(data.visit.legal);
            } catch (error) {
                console.error('Error fetching JSON data:', error);
            }
        }

        fetchJsonData();
    }, [i18n.language]);

    return (
        <>
            <HeroImage video={true} headerVideo={headerVideo} title={t('global.visit')} subtitle={Subtitle}/>
            <ItemContent text={Text} />
            <ThreeColumns title="Entradas" visit={Visit} data={Visit.tickets} />
            <Legales text={Legal}/>
        </>
    );
}

export default Visit;
