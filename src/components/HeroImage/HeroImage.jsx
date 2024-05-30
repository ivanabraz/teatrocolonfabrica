import React from "react";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const HeroImage = (props) => {
    const uniqueKey = uuidv4();

    return (
        <div className="flex w-screen h-[100vh] bg-no-repeat bg-cover bg-center">
            <motion.div 
                key={uniqueKey}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
                className="flex flex-col text-white w-full z-100 justify-end px-6 py-20 lg:px-32 lg:pt-32 lg:pb-20"
            >
                <p className="text-5xl lg:text-8xl uppercase font-semibold" >
                    {props.title}
                </p>
                {props.composer !== undefined && (
                    <p className="text-base lg:text-2xl pt-1 flex inline">
                        {props.composer}
                        {props.year !== undefined && (
                            <span> | ({props.year})</span>
                        )}
                    </p>
                )}
                {props.subtitle !== undefined && (
                    <p className="w-[50ch] text-base lg:text-2xl pt-1 flex inline">
                        {props.subtitle}
                    </p>
                )}
            </motion.div>
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
