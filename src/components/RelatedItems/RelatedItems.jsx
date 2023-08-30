import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const RelatedItems = ({ relatedItems, lang }) => {
    const { t, i18n } = useTranslation();

    return (
            <div className='mx-auto max-w-2xl px-12 xs:px-12 sm:px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl'>
                <h2 className="text-center text-xl font-medium tracking-tight text-gray-900">{t('global.you_may_also_like')}</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-y-10">
                    {relatedItems.map(relatedItem => (
                        <Link key={relatedItem.id} to={`/${i18n.language}/${relatedItem.id}`} className="group">
                            <div className="aspect-h-5 aspect-w-8 w-full overflow-hidden bg-gray-200">
                                <img
                                src={`${process.env.PUBLIC_URL}/images/productions/${relatedItem.id}/img-header.jpg`}
                                alt={relatedItem.title}
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                                />
                            </div>
                            <p className="mt-4 text-lg font-medium text-gray-900">{relatedItem.title}</p>
                            <p className="mt-1 text-sm text-gray-500">{relatedItem.category}</p>
                        </Link>
                    ))}
                </div>
            </div>
    )
}
export default RelatedItems;
