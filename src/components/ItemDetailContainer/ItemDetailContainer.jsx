import React from 'react';
import { useTranslation } from 'react-i18next';
import HeroImage from '../HeroImage/HeroImage';
import SwiperSlider from '../SwiperSlider/SwiperSlider';

// Función para verificar si una imagen existe
const checkImageExists = (url) => {
    return fetch(url)
        .then(response => response.ok)
        .catch(() => false);
};

const ItemDetailContainer = () => {
    const { t } = useTranslation();

    // Busca el elemento en el arreglo "productions" con el id correspondiente en el idioma actual
    const productions = t('productions', { returnObjects: true });
    const item = productions.find(prod => prod.id);

    // Si se encontró el elemento, obtén las propiedades necesarias en el idioma actual
    const title = item?.title || '';
    const header = `https://teatrocolon.dreamhosters.com/teatrocolonfabrica/src/images/productions/${item.id}/img-header`;
    const subtitle = item?.subtitle || '';

    // Crear array dinámico de imágenes
    const imageArray = [];
    let imageIndex = 1;
    const loadImage = async () => {
        const imageUrl = `https://teatrocolon.dreamhosters.com/teatrocolonfabrica/src/images/productions/${item.id}/img-${imageIndex}.jpg`;

        // Verificar si la imagen existe usando la función checkImageExists
        const imageExists = await checkImageExists(imageUrl);

        if (imageExists) {
            imageArray.push({ imgUrl: imageUrl, imgAlt: `Image ${imageIndex}` });
            imageIndex++;
            await loadImage();
        }
    };

    loadImage();

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
