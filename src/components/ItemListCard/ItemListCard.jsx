import React from 'react';
import { Link } from 'react-router-dom';

const ItemListCard = ({ item, lang }) => {
    return (
        <Link to={`/${lang}/${item.id}`} className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                src={`https://teatrocolon.dreamhosters.com/teatrocolonfabrica/src/images/productions/${item.id}/img-card`}
                alt={item.title}
                className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
            </div>
            <p className="mt-4 text-lg font-medium text-gray-900">{item.title}</p>
            <p className="mt-1 text-sm text-gray-500">{item.category}</p>
        </Link>
    )
}

export default ItemListCard;