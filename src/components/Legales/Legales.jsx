import React from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const Legales = ({ text }) => {

    const createMarkup = (html) => {
        return { __html: html };
    };

    return (
        (text.length >= 1
            ?   <motion.div
                    key={uuidv4()}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="flex justify-center flex-col max-w-3xl m-auto mb-5 px-6 py-12"
                >
                    {text.map((text, index) => (
                        <p key={index} className="text-xs mb-3 text-neutral-700" dangerouslySetInnerHTML={createMarkup(text)} />
                    ))}
                </motion.div>
            : <></>
        )
    )
}

export default Legales;
