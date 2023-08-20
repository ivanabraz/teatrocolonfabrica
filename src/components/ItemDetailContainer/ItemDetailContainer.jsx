import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import HeroImage from '../HeroImage/HeroImage';
import SwiperSlider from '../SwiperSlider/SwiperSlider';

const ItemDetailContainer = () => {
    const { t } = useTranslation();
    const { id } = useParams();

    const [imageArray, setImageArray] = useState([]);
    const imageRef = useRef([]);

    const productions = t('productions', { returnObjects: true });
    const item = productions.find(prod => prod.id === id);

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
    
        setImageArray(imagesToLoad.slice(0, 10)); // Solo cargar 10 imágenes
        };
    
        loadImages();
    }, [id]);

    if (!item) {
        return <div>Item not found</div>;
    }

    const title = item.title || '';
    const header = `${process.env.PUBLIC_URL}/images/productions/${item.id}/img-header.jpg`;
    const subtitle = item.subtitle || '';

    return (
        <>
            <HeroImage 
                video={false} header={header} 
                title={title}
                subtitle={subtitle}
            />
            <SwiperSlider images={imageArray} title={title} />
        </>
    );
};

export default ItemDetailContainer;
