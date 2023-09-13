import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

const SwiperSlider = ({ images, title }) => {
    const uniqueKey = uuidv4();

    return (
        <motion.div
            key={uniqueKey}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
        >
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-10 w-[90%] xs:w-[90%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[50%] h-auto" title={title}>
                {images.map((image, index) => (
                    <SwiperSlide key={index} className="text-center">
                        <img className="m-auto" src={image.imgUrl} alt={`${title} ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.div>
    );
};

export default SwiperSlider;