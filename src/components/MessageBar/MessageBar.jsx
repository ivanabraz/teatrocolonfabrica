import React from 'react';
import { useTranslation } from 'react-i18next';

const icon = `${process.env.PUBLIC_URL}/images/global/teatro-emoji.png`;

const MessageBar = () => {
    const {t} = useTranslation();

    return (
        <div className='flex h-10 bg-black flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8'>
            <a href='https://www.instagram.com/teatrocolon/' target='_blank' rel="noreferrer">
                {t('global.follow_us')} <img className='w-5 h-auto inline flex-shrink-0 mx-1' src={icon} alt='Teatro Colón icon'/>
            </a>
        </div>
    )
}

export default MessageBar;