import React from 'react';
import { useTranslation } from 'react-i18next';
import { FunnelIcon } from '@heroicons/react/20/solid';


const ButtonFilters = ({ setMobileFiltersOpen }) => {
    const { t } = useTranslation();

    return (
        <>
        <button
            type="button"
            className="-m-2 ml-4 p-2 text-neutral-400 hover:text-neutral-500 sm:ml-6 lg:hidden"
            onClick={() => setMobileFiltersOpen(true)}
        >
            <span className="sr-only">
                {t('global.filters')}
            </span>
            <FunnelIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        </>
    );
}

export default ButtonFilters;