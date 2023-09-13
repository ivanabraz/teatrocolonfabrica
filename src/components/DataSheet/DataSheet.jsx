import React from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from 'react-i18next';

const DataSheet = ({ datasheet, sliceStart, sliceEnd }) => {
    const uniqueKey = uuidv4();
    const { t } = useTranslation();

    return (
        (datasheet.length >= 1
            ?   <motion.div 
                    key={uniqueKey}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="relative isolate overflow-hidden bg-white px-6 py-12 flex justify-center"
                >
                    <div className="max-w-3xl gap-x-6 gap-y-8 grid-cols-2 items-start">
                        <div className="px-4 sm:px-0">
                            <h3 className="text-base font-semibold leading-7 text-gray-900">{t('global.data_sheet')}</h3>
                            <p className="mt-1 text-sm leading-6 text-gray-500">Lorem ipsum</p>
                        </div>
                        <div className="mt-6 border-t border-gray-100">
                            <dl className="divide-y divide-gray-100">
                                {datasheet.slice(sliceStart, sliceEnd).map((item, index) => (
                                    <div key={index} className="px-4 py-6 grid grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">{item.item_data}</dt>
                                        <dd className="mt-1 text-sm leading-6 col-span-2 text-gray-700">{item.item_title}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </motion.div>
            : <></>
        )
    )
}

export default DataSheet;



