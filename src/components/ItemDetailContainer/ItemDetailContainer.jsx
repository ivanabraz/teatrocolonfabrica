import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { shuffle } from 'lodash';
import HeroImage from '../HeroImage/HeroImage';
import SwiperSlider from '../SwiperSlider/SwiperSlider';
import DataSheet from '../DataSheet/DataSheet';
import ItemContent from '../ItemContent/ItemContent';
import RelatedItems from '../RelatedItems/RelatedItems';
<<<<<<< HEAD
import VideoPlayer from '../Video/VideoPlayer';
=======
// import DataFigures from '../DataFigures/DataFigures';
>>>>>>> 3927ea4a8d894d1c0d886d97b751677aef046e0f

const ItemDetailContainer = () => {
    const { i18n } = useTranslation();
    const { id } = useParams();

    const [imageArray, setImageArray] = useState([]);
    const imageRef = useRef([]);

    const [item, setItem] = useState(null);
    const [productions, setProductions] = useState([]);
    const [category, setCategory] = useState("");

    useEffect(() => {
        const fetchItem = async () => {
            try {
<<<<<<< HEAD
                const response = await fetch(`${process.env.PUBLIC_URL}/locales/${i18n.language}/global.json`);
=======
                const response = await fetch(`/locales/${i18n.language}/global.json`);
>>>>>>> 3927ea4a8d894d1c0d886d97b751677aef046e0f
                const data = await response.json();
                const allProductions = [...data.productions.ballet, ...data.productions.opera];
                const itemData = allProductions.find(prod => prod.id === id);
                
                if (itemData) {
                    const categoryKey = Object.keys(data.productions).find(cat =>
                        data.productions[cat].some(prod => prod.id === id)
                    );
                    
                    let category = categoryKey;
                    
                    if (categoryKey === "opera" && i18n.language === "es") {
                        category = "ópera";
                    }
                    
                    setCategory(category);
                    setItem(itemData);
                    setProductions(allProductions);
                }
            } catch (error) {
                console.error('Error fetching item data:', error);
            }
        };
        
        fetchItem();
    }, [id, i18n.language]);
    

    useEffect(() => {
        if (!item) return;
    
        const loadImages = async () => {
            const imagesToLoad = [];
            const maxImages = item.images || 0;
    
            for (let index = 1; index <= maxImages; index++) {
                const filename = `img-${index}.jpg`;
                const imageUrl = `${process.env.PUBLIC_URL}/images/productions/${item.id}/${filename}`;
<<<<<<< HEAD
=======
    
>>>>>>> 3927ea4a8d894d1c0d886d97b751677aef046e0f
                if (imageRef.current.includes(imageUrl)) {
                    break;
                }
                try {
                    const response = await fetch(imageUrl);
                    if (response.ok) {
                        imagesToLoad.push({ imgUrl: imageUrl, imgAlt: filename });
                        imageRef.current.push(imageUrl);
                    } else {
                        console.log(`Image not found: ${imageUrl}`);
                    }
                } catch (error) {
                    console.error("Error loading image:", error);
                    break;
                }
            }
<<<<<<< HEAD
=======
    
>>>>>>> 3927ea4a8d894d1c0d886d97b751677aef046e0f
            setImageArray(imagesToLoad.slice(0, maxImages));
        };
    
        loadImages();
    }, [item]);

    if (!item) {
        return <div>Item not found</div>;
    }

    const title = item.title || '';
    const header = `${process.env.PUBLIC_URL}/images/productions/${item.id}/img-header.jpg`;
    const composer = item.composer || '';
    const year = item.year || '';
    const text = item.text || '';
    const datasheet = item.data_sheet || '';
<<<<<<< HEAD
    const video = `${process.env.PUBLIC_URL}/images/productions/${item.id}/video.mp4`;
=======

>>>>>>> 3927ea4a8d894d1c0d886d97b751677aef046e0f
    const relatedItems = productions.filter(prod => prod.id !== item.id);
    const shuffledRelatedItems = shuffle(relatedItems);

    return (
        <>
<<<<<<< HEAD
            <HeroImage video={false} header={header} title={title} category={category} composer={composer} year={year} />
            <ItemContent category={category} title={title} text={text} productions={productions} />
            <VideoPlayer video={video} />
            <DataSheet datasheet={datasheet} />
=======
            <HeroImage video={false} header={header} title={title} category={category} composer={composer} year={year}/>
            <ItemContent category={category} title={title} text={text} productions={productions}>
                {/* <DataFigures datasheet={datasheet} sliceStart={0} sliceEnd={2} /> */}
            </ItemContent>
            <DataSheet datasheet={datasheet}/>
>>>>>>> 3927ea4a8d894d1c0d886d97b751677aef046e0f
            <SwiperSlider images={imageArray} title={title} />
            <RelatedItems relatedItems={shuffledRelatedItems.slice(0, 3)} lang={i18n.language} />
        </>
    );
};

export default ItemDetailContainer;
