import React from 'react';
import HeroImage from '../components/HeroImage/HeroImage';
import { useTranslation } from 'react-i18next';

//IMAGES
import ItemList from '../components/ItemList/ItemList';
import HeroText from '../components/HeroText/HeroText';

const Home = () => {
    const {t} = useTranslation();
    const headerVideo = `${process.env.PUBLIC_URL}/images/home/header.mp4`;

    return (
        <>
            <HeroImage 
                video={true} headerVideo={headerVideo} 
                title={t('global.welcome')}
            />
            <HeroText 
                text={t('global.text_home')}
                text2={t('global.subtext_home')}
            />
            <ItemList/>
        </>
    );
}

export default Home;