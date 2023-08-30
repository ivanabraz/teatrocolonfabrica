import React from "react";
import { useTranslation } from 'react-i18next';

const NewBadge = (props) => {
    const { t } = useTranslation();

    return (
        <div className={`w-fit h-fit bg-green-600 text-white px-3 py-1 rounded-xl text-xs font-medium ${props.customClass}`}>
            {t('global.new')}
        </div>
    )
}

export default NewBadge;