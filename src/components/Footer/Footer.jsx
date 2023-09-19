import React from "react";
import NavBarLogo from "../NavBar/NavBarLogo";
import { useTranslation } from 'react-i18next';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookSquare, faXTwitter, faYoutube, faTiktok } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const Footer = () => {
    const { t } = useTranslation();
    const uniqueKey = uuidv4();

    const navigation = {
        social: [
            {
                name: "Instagram",
                href: "https://www.instagram.com/teatrocolon/",
                icon: faInstagram
            },
            {
                name: "Facebook",
                href: "https://www.facebook.com/TeatroColonOficial",
                icon: faFacebookSquare
            },
            {
                name: "Twitter",
                href: "https://twitter.com/TeatroColon",
                icon: faXTwitter
            },
            {
                name: "Youtube",
                href: "https://www.youtube.com/teatrocolontv",
                icon: faYoutube
            },
            {
                name: "Tiktok",
                href: "https://www.tiktok.com/@teatrocolon",
                icon: faTiktok
            }
        ],
        adress: [
            {
                name: "Teatro Colón",
                adress: "Cerrito 628, Ciudad de Buenos Aires"
            },
            {
                name: "Teatro Colón Fábrica",
                adress: "Av. Don Pedro de Mendoza 2163, La Boca, Ciudad de Buenos Aires"
            }
        ]
    }
    return (
        <footer className="w-full text-gray-700 bg-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-5 py-24 lg:max-w-screen-2xl text-center lg:text-left m-auto">
                <motion.div
                    key={uniqueKey}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="w-64 mx-auto"
                >
                    <NavBarLogo customClassName=""/>
                    <p className="mt-4 mb-10 text-sm text-gray-500">
                        {t('global.slogan')}
                    </p>
                    <div className="mt-4 mb-10 flex flex-row justify-center lg:justify-start gap-4">
                        {navigation.social.map((item) => (
                            <a href={item.href} key={item.name} className="text-gray-500 cursor-pointer hover:text-gray-700 mr-1">
                                <FontAwesomeIcon className="fa-lg" icon={item.icon} />
                            </a>
                        ))}
                    </div>
                </motion.div>
                {navigation.adress.map((item) => (
                    <motion.div
                        key={item.name} 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        viewport={{ once: true }}
                        className="w-64 mx-auto border-t border-gray-500 lg:border-none"
                    >
                        <h2  className="pt-5 mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase">
                            {item.name}
                        </h2>
                        <div className="text-gray-500 lg:flex">
                        <MapPinIcon className="h-6 w-6 min-w-fit m-auto lg:m-0" aria-hidden="true" />
                            {item.adress}
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="bg-gray-300">
                <div className="container px-5 py-4 mx-auto">
                    <p className="text-sm text-gray-700 xl:text-center">
                        © 2023 {t('global.rights')}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;