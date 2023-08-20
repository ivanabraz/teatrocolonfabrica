import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const SwiperSlider = ({ images, title }) => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-10 w-[90%] xs:w-[90%] sm:w-[90%] md:w-[80%] lg:w-[60%] xl:w-[50%] 2xl:w-[50%] h-auto" title={title}>
            {images.map((image, index) => (
                <SwiperSlide key={index} className="text-center">
                    <img className="m-auto" src={image.imgUrl} alt={`${title} ${index + 1}`} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperSlider;