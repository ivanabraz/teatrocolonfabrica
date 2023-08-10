import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../../config/i18n';

const NavBarLanguage = () => {
    const { t } = useTranslation();
    const [isEnglishVisible, setEnglishVisible] = useState(i18n.language === 'es');
    const [isSpanishVisible, setSpanishVisible] = useState(i18n.language === 'en');

    const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    if (language === 'en') {
        setEnglishVisible(false);
        setSpanishVisible(true);
    } else {
        setEnglishVisible(true);
        setSpanishVisible(false);
    }
    };

    return (
        <div className="flex border-t border-gray-200 lg:border-none px-4 py-6">
            {isEnglishVisible && (
                <button onClick={() => changeLanguage('en')} className="-m-2 flex items-center p-2">
                    <img
                        src="https://hatscripts.github.io/circle-flags/flags/uk.svg"
                        alt="English"
                        className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">EN</span>
                    <span className="sr-only">, change language</span>
                </button>
                )}
                {isSpanishVisible && (
                <button onClick={() => changeLanguage('es')} className="-m-2 flex items-center p-2">
                    <img
                        src="https://hatscripts.github.io/circle-flags/flags/es.svg"
                        alt="Español"
                        className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium text-gray-900">ES</span>
                    <span className="sr-only">, cambiar idioma</span>
                </button>
            )}
        </div>
    )
}

export default NavBarLanguage;