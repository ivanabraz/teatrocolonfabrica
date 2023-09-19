import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeftIcon} from '@heroicons/react/24/outline';

const NavBarReturn = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    const handleGoHome = () => {
        navigate('/');
    };

    const showButton = location.pathname !== '/';

    return showButton ? (
        <button onClick={handleGoHome} className="flex items-center text-white ml-5 bg-black py-2 px-2 text-base bg-opacity-40 h-fit">
            <ChevronLeftIcon className="h-4 w-4 mr-2" aria-hidden="true" />
            <span className=' mr-2'>{t('global.return')}</span>
        </button>
    ) : null;
};

export default NavBarReturn;
