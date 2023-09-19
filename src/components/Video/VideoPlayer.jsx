import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const VideoPlayer = ({ video }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="w-full flex ">
                <video className="m-auto shadow-lg my-10 w-[90%] xs:w-[90%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[50%] h-auto" controls>
                    <source src={video} type="video/mp4" />
                </video>
        </motion.div>
    );
};

export default VideoPlayer;