import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import NewBadge from '../NewBadge/NewBadge';

const ItemListCardList = ({ item, lang }) => {
    const imagePath = `${process.env.PUBLIC_URL}/images/productions/${item.id}/img-card.jpg`;
    const { t } = useTranslation();

    let categoryLabel = item.category;
    if (lang === 'es' && item.category === 'opera') {
        categoryLabel = 'ópera';
    }

    return (
        <Link to={`/${lang}/${item.id}`} className='group'>
            <div className="relative flex flex-row space-y-3 md:space-y-0 md:space-x-5 rounded-lg shadow-lg p-3 border bg-white">
                <div className="w-full md:w-1/3 bg-white grid place-items-center overflow-hidden">
                    <img src={imagePath} alt={item.title} className="h-full w-full object-cover object-center group-hover:opacity-75 rounded-lg" />
                </div>
                <div className="w-full md:w-2/3 bg-white flex flex-col space-y-5 px-5 py-2">
                    <div className="flex justify-between item-center">
                        <p className="capitalize text-gray-500 text-xs font-medium">
                            {categoryLabel}
                        </p>
                        {item.new === true
                            ? <NewBadge/>
                            : <></>
                        }
                    </div>
                    <h3 className="font-medium text-gray-900 text-xl md:text-3xl">
                        {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs">
                        {item.short_text}
                    </p>
                    <p className="text-base text-gray-600">
                        {t('global.see_more')}  →
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default ItemListCardList;