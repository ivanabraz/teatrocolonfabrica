import React from 'react';
import ItemList from '../components/ItemList/ItemList';
import HeaderHome from '../components/HeaderHome/HeaderHome';

const Home = () => {
    const headerVideo = `${process.env.PUBLIC_URL}/images/home/header.mp4`;

    return (
        <>
            <HeaderHome 
                video={true} headerVideo={headerVideo} 
            />
            <ItemList/>
        </>
    );
}

export default Home;