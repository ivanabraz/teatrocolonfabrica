import React from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const DataFigures = ({ datasheet, sliceStart, sliceEnd }) => {
    const uniqueKey = uuidv4();

    return (
        (datasheet.length >= 1
            ?   <motion.div 
                    key={uniqueKey}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="bg-white py-24 sm:py-24"
                >
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2">
                            {datasheet.slice(sliceStart, sliceEnd).map((item, index) => (
                                <div key={index} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                    <dt className="text-base leading-7 text-gray-500">{item.item_title}</dt>
                                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{item.item_data}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </motion.div>
            : <></>
        )
    )
}

export default DataFigures;
