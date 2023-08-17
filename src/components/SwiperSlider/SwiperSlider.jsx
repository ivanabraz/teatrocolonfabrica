import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const SwiperSlider = ({ images, title }) => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-10">
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image.imgUrl} alt={`${title} ${index + 1}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperSlider;
