import React from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const ThreeColumns = ({ title, visit, data }) => {
    const uniqueKey = uuidv4();

    if (!data || data.length === 0) {
        return null;
    }

    const keys = Object.keys(data[0]);

    return (
        <motion.div
            key={uniqueKey}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="max-w-5xl grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-5 m-auto mb-8"
        >
            <div className="font-bold text-4xl">
                {title}
            </div>
            <table className="table-auto font-bold text-left col-span-2">
                <thead>
                    <tr className="border-b-2 border-neutral-300">
                        <th className="px-5 py-2"></th>
                        <th className="px-5 py-2 text-neutral-400">{visit.selfguided}</th>
                        <th className="px-5 py-2 text-tcf-400">{visit.guided}</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="border-b border-neutral-300">
                            {keys.map((key) => (
                                <td className="px-5 py-2" key={key}>{item[key]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="">
                Botón
            </div>
        </motion.div>
    );
}

export default ThreeColumns;
