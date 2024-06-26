import React from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const ItemContent = ({ category, title, text, children }) => {

    const createMarkup = (html) => {
        return { __html: html };
    };

    return (
        (Array.isArray(text) && text.length >= 1
            ?   <motion.div
                    key={uuidv4()}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="relative isolate overflow-hidden bg-white px-6 py-12 flex justify-center"
                >
                    <div className="max-w-3xl gap-x-6 gap-y-8 grid-cols-1 lg:grid-cols-2 lg:items-start">
                        {category !== undefined &&
                            <p className="text-base font-semibold leading-7 ">
                                <span className="text-indigo-600 capitalize">{category}</span><span className="text-neutral-600"> / {title}</span>
                            </p>
                        }
                        {text.slice(0, 1).map((text, index) => (
                            <p key={index} className="mt-12 mb-8 text-xl leading-8 text-neutral-700" dangerouslySetInnerHTML={createMarkup(text)} />
                        ))}
                        {children}
                        {text.slice(2).map((text, index) => (
                            <p key={index} className="mt-3 text-base leading-7 text-neutral-600" dangerouslySetInnerHTML={createMarkup(text)} />
                        ))}
                    </div>
                </motion.div>
            : <></>
        )
    )
}

export default ItemContent;
