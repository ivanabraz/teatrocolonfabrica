import React from 'react';
import { useTranslation } from 'react-i18next';
import { Squares2X2Icon, ListBulletIcon } from '@heroicons/react/20/solid';


const ButtonListView = ({ isGridView, setIsGridView }) => {
    const { t } = useTranslation();

    return (
        <>
            {isGridView ? (
                <button onClick={() => setIsGridView(false)} type="button" className="-m-2 ml-5 p-2 text-neutral-400 hover:text-neutral-500 sm:ml-7">
                    <span className="sr-only">
                        {t('global.view_list')}
                    </span>
                    <ListBulletIcon className="h-5 w-5" aria-hidden="true" />
                </button>
            ) : null}
            {/* Botón de vista de lista */}
            {!isGridView ? (
                <button onClick={() => setIsGridView(true)} type="button" className="-m-2 ml-5 p-2 text-neutral-400 hover:text-neutral-500 sm:ml-7">
                    <span className="sr-only">
                        {t('global.view_grid')}
                    </span>
                    <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                </button>
            ) : null}
        </>
    );
}

export default ButtonListView;