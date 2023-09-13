import React from "react";
import { Link } from 'react-router-dom';
import NewBadge from '../NewBadge/NewBadge';
import { motion } from "framer-motion";

const ItemListCardGrid = ({ item, lang }) => {
    const imagePath = `${process.env.PUBLIC_URL}/images/productions/${item.id}/img-card.jpg`;

    let categoryLabel = item.category;
    if (lang === 'es' && item.category === 'opera') {
        categoryLabel = 'ópera';
    }

        return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
        >
            <Link to={`/${lang}/${item.id}`} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 rounded-lg">
                    <img src={imagePath} alt={item.title}className="h-full w-full object-cover object-center group-hover:opacity-75"/>
                    {item.new === true
                        ? <NewBadge customClass={"m-2"}/>
                        : <></>
                    }
                </div>
                <p className="mt-4 text-lg font-medium text-gray-900">{item.title}</p>
                <p className="mt-1 text-sm text-gray-500 capitalize">{categoryLabel}</p>
            </Link>
        </motion.div>
    )
}

export default ItemListCardGrid;