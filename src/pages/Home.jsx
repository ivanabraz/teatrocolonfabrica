import React from 'react';
import HeroImage from '../components/HeroImage/HeroImage';
import { useTranslation } from 'react-i18next';

//IMAGES
import headerVideo from '../images/home/header.mp4';

const Home = () => {
    const {t} = useTranslation();

    return (
        <>
            <HeroImage 
                video={true} headerVideo={headerVideo} 
                title={t('welcome')}
            />
        </>
    );
}

export default Home;