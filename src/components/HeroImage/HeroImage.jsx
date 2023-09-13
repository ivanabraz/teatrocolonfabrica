import React from "react";
import { motion } from "framer-motion";

const HeroImage = (props) => {

    return (
        <div className={`flex w-screen h-[100vh] bg-no-repeat bg-cover bg-center`}>
            <div className="flex flex-col text-white w-full z-100 justify-end px-6 py-20 lg:px-32 lg:pt-32 lg:pb-20">
                <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="text-5xl lg:text-8xl uppercase font-semibold"
                >
                    {props.title}
                </motion.p>
                {props.composer !== undefined && (
                    <motion.p 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="text-base lg:text-2xl pt-1 flex inline">
                        {props.composer}
                        {props.year !== undefined && (
                            <span> | ({props.year})</span>
                        )}
                    </motion.p>
                )}
                {props.subtitle !== undefined && (
                    <motion.p 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, ease: "easeInOut" }}
                    className="text-base lg:text-2xl pt-1 flex inline">
                        {props.subtitle}
                    </motion.p>
                )}
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

export default HeroImage;
