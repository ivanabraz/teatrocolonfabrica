import React from 'react';
import HeroImage from '../components/HeroImage/HeroImage';
import { useTranslation } from 'react-i18next';

//IMAGES
import headerVideo from '../images/home/header.mp4';
import ItemList from '../components/ItemList/ItemList';

const Home = () => {
    const {t} = useTranslation();

    return (
        <>
            <HeroImage 
                video={true} headerVideo={headerVideo} 
                title={t('global.welcome')}
            />
            <ItemList/>
        </>
    );
}

export default Home;