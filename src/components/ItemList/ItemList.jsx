import React from 'react';
import { useTranslation } from 'react-i18next'
import ItemListCard from '../ItemListCard/ItemListCard';

const ItemList = () => {
    const { t, i18n } = useTranslation();
    const section = t('productions', { returnObjects: true });

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">{t('global.exhibitions')}</h2>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {section.map(item => (
                            <ItemListCard key={item.id} item={item} lang={i18n.language} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemList;