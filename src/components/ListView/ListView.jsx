import React from 'react';
import ItemListCardGrid from '../ItemListCardGrid/ItemListCardGrid';
import ItemListCardList from '../ItemListCardList/ItemListCardList';

const ListView = ({ filteredItems, isGridView, i18n }) => {
    return (
        <div className='col-span-3'>
            {filteredItems.length > 0 ? (
                isGridView ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 lg:col-span-3 gap-x-5 gap-y-5">
                        {filteredItems.map(item => (
                            <ItemListCardGrid key={item.id} item={item} lang={i18n.language} />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 gap-y-5">
                        {filteredItems.map(item => (
                            <ItemListCardList key={item.id} item={item} lang={i18n.language} />
                        ))}
                    </div>
                )
            ) : (
                <p>No hay elementos que coincidan con los filtros seleccionados.</p>
            )}
        </div>
    );
}

export default ListView;