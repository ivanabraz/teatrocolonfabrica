import React from "react";
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

const HeaderHome = (props) => {
    const {t} = useTranslation();
    const Logo = `${process.env.PUBLIC_URL}/images/global/logo.svg`;

    return (
        <div className={`relative flex flex-col w-screen bg-no-repeat bg-cover bg-center h-[100vh] justify-between px-6 py-20 lg:px-32 lg:pt-32 lg:pb-20`}>
            <motion.img 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                src={Logo} alt={props.title} className="w-full z-100 invert"
            />
            <div className="text-white w-full z-100">
                <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="text-md lg:text-xl font-bold">
                    {t('global.text_home')}
                </motion.p>
                <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="text-base lg:text-lg">
                    {t('global.subtext_home')}
                </motion.p>
            </div>
            {(props?.video === true
                ?   <video playsInline autoPlay muted loop className="absolute top-0 left-0 w-screen h-[100vh] object-cover -z-10 brightness-50">
                        <source src={props.headerVideo} type="video/mp4"/>
                    </video>
                :   <img src={props.header} alt={props.title} className="absolute -z-10 h-full w-full object-cover object-center brightness-50" />
            )}
        </div>
    )
}

export default HeaderHome;
