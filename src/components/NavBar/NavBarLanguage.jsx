import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const NavBarLanguage = () => {
    const { i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const currentLanguage = i18n.language;

    const languages = [
        {
            code: 'es',
            name: 'Español',
            flag: 'https://hatscripts.github.io/circle-flags/flags/es.svg',
            text: ', change language',
        },
        {
            code: 'en',
            name: 'English',
            flag: 'https://hatscripts.github.io/circle-flags/flags/uk.svg',
            text: ', cambiar idioma',
        },
    ];

    const toggleLanguage = () => {
        const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage);

        const pathnameWithoutLang = location.pathname.replace(/^\/[a-z]{2}\//, '/');
        const newPath = `/${newLanguage}${pathnameWithoutLang}`;
        navigate(newPath);
    };

    const oppositeLanguageIndex = currentLanguage === 'en' ? 0 : 1;

    return (
        <div className="flex border-t border-gray-200 lg:border-none px-4 py-6">
            <button onClick={toggleLanguage} className={'m-2 flex items-center'}>
                <img
                    src={languages[oppositeLanguageIndex].flag}
                    alt={languages[oppositeLanguageIndex].name}
                    className="block h-auto w-5 flex-shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900 sm:text-gray-900 lg:text-white uppercase">{languages[oppositeLanguageIndex].code}</span>
                <span className="sr-only">{languages[oppositeLanguageIndex].text}</span>
            </button>
        </div>
    );
}

export default NavBarLanguage;
