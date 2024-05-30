import React from "react";
import ReactHtmlParser from "react-html-parser";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const Legales = ({ text }) => {
    const uniqueKey = uuidv4();

    return (
        (text.length >= 1
            ?   <motion.div
                    key={uniqueKey}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="flex justify-center flex-col max-w-3xl m-auto mb-5 px-6 py-12"
                >
                    {text.map((text, index) => (
                        <p key={index} className="text-xs mb-3 text-neutral-700">
                            {ReactHtmlParser(text)}
                        </p>
                    ))}
                </motion.div>
            : <></>
        )
    )
}

export default Legales;