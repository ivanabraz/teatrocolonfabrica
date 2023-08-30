import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { shuffle } from 'lodash';
import HeroImage from '../HeroImage/HeroImage';
import SwiperSlider from '../SwiperSlider/SwiperSlider';
import DataSheet from '../DataSheet/DataSheet';
import ItemContent from '../ItemContent/ItemContent';
import RelatedItems from '../RelatedItems/RelatedItems';

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
                const response = await fetch(`/locales/${i18n.language}/global.json`);
                const data = await response.json();
                const allProductions = [...data.productions.ballet, ...data.productions.opera];
                const itemData = allProductions.find(prod => prod.id === id);
                
                if (itemData) {
                    // Find the category from the parent array
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

            for (let index = 1; index <= 10; index++) {
                const filename = `img-${index}.jpg`;
                const imageUrl = `${process.env.PUBLIC_URL}/images/productions/${item.id}/${filename}`;

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

            setImageArray(imagesToLoad.slice(0, 10));
        };

        loadImages();
    }, [item]);

    if (!item) {
        return <div>Item not found</div>;
    }

    const title = item.title || '';
    const header = `${process.env.PUBLIC_URL}/images/productions/${item.id}/img-header.jpg`;
    const subtitle = item.subtitle || '';
    const text = item.text || '';
    const datasheet = item.data_sheet || '';

    const relatedItems = productions.filter(prod => prod.id !== item.id);
    const shuffledRelatedItems = shuffle(relatedItems);

    return (
        <>
            <HeroImage video={false} header={header} title={title} subtitle={subtitle} />
            <ItemContent category={category} title={title} text={text} productions={productions} />
            <DataSheet datasheet={datasheet} sliceStart={0} sliceEnd={4} />
            <SwiperSlider images={imageArray} title={title} />
            <RelatedItems relatedItems={shuffledRelatedItems.slice(0, 3)} lang={i18n.language} />
        </>
    );
};

export default ItemDetailContainer;
