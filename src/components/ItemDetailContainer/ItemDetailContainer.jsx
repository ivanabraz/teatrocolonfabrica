import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

//IMAGES
import headerVideo from '../../images/home/header.mp4';
import HeroImage from '../HeroImage/HeroImage';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const { t, i18n } = useTranslation();

    // Mapeo entre IDs en español e inglés
    const idMapping = {
        don_quijote: 'don_quixote',
        un_tranvia_llamado_deseo: 'a_streetcar_named_desire',
        los_cuentos_de_hoffmann: 'the_tales_of_hoffmann',
        el_corsario: 'le_corsaire',
    };

    // Obtén el ID correspondiente al idioma actual
    const currentId = i18n.language === 'es' ? id : idMapping[id];

    // Busca el elemento en el arreglo "productions" con el id correspondiente en el idioma actual
    const productions = t('productions', { returnObjects: true });
    const item = productions.find(prod => prod.id === currentId);

    // Si se encontró el elemento, obtén las propiedades necesarias en el idioma actual
    const title = item?.title || '';
    const header = item?.header || '';
    const subtitle = item?.subtitle || '';
    // const textLong = item?.text_long?.join('\n') || '';

    return (
        <>
            {/* <p>{textLong}</p> */}
            <HeroImage 
                video={false} header={header} 
                title={title}
                subtitle={subtitle}
            />
        </>
    );
};

export default ItemDetailContainer;
