import React, {useRef} from "react";

import SwiperContent from "../../components/SwiperContent/SwiperContent";
import circle from '../../../public/firstSection/circle.png'

// Swiper library
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Swiper, SwiperSlide} from "swiper/react";
import {Parallax, Pagination, Autoplay} from "swiper";
// -----------------------------------------------------------

const FirstSection = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        // <div className="container">
        <Swiper
            speed={600}
            parallax={true}
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 9000,
                disableOnInteraction: false
            }}
            modules={[Autoplay, Parallax, Pagination]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="mySwiper"
        >
            <div slot="container-start" className="parallax-bg" data-swiper-parallax="-23%"></div>

            <SwiperSlide>
              <SwiperContent/>
            </SwiperSlide>

            <SwiperSlide>
                <SwiperContent/>
            </SwiperSlide>

            <SwiperSlide>
                <SwiperContent/>
            </SwiperSlide>

            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>
        </Swiper>
        // </div>
    )
}
export default FirstSection