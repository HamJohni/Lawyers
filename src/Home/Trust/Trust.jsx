// Swiper
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Navigation} from "swiper";
// ------------------------------------------------------

// Images
import face from '../../../public/trust/face.png'
import Image from "next/image";
import Info from "../../components/Info/Info";
import hand from "../../../public/trust/hand.png";
import build from "../../../public/trust/build.png";
import people from "../../../public/trust/people.png";
// ----------------------------------------------------

import {motion} from "framer-motion";

const topAnimation = {
    hidden: {
        position: "relative",
        y: -100,
        opacity: 0,
        zIndex: 2
    },
    visible: custom => ({
        position: "relative",
        y: 0,
        opacity: 1,
        zIndex: 2,
        transition: {delay: custom * 0.3}
    })
}

const bottomAnimation = {
    hidden: {
        position: "relative",
        y: 100,
        opacity: 0,
        zIndex: 2
    },
    visible: custom => ({
        position: "relative",
        y: 0,
        opacity: 1,
        zIndex: 2,
        transition: {delay: custom * 0.3}
    })
}

const Trust = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="trust">

            <div className="container">
                <div className="trust__content">

                    <Info className={"trust__left"} subtitle={"Trust your future &"} title={"Peaceful life"}
                          text={"Lorem ipsum dolor sit amet consectetur. Dui auctor sagittis est et nisl. Cras blandit ultrices adipiscing eget volutpat sed. Lorem diam amet donec enim. Et viverra mauris."}/>

                    <Swiper
                        style={{
                            "--swiper-navigation-color": "black",
                            "--swiper-pagination-color": "black",
                        }}
                        slidesPerView={2}
                        spaceBetween={45}
                        modules={[Navigation]}
                        navigation={true}
                        className="trust__right"
                    >
                        <SwiperSlide className="trust__right-low">
                            <motion.div custom={1} variants={topAnimation}
                                        className="trust__right-card trust__right-cardBlue">
                                <motion.span custom={2} variants={topAnimation} className="trust__right-card-svg">
                                    <Image src={hand} alt={'hand'}/>
                                </motion.span>

                                <motion.h3 custom={2} variants={topAnimation} className="trust__right-card-title">
                                    Immigration
                                </motion.h3>

                                <motion.p custom={2} variants={topAnimation} className="trust__right-card-text">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Est sapien curabitur.
                                </motion.p>
                            </motion.div>

                            <motion.div custom={1} variants={topAnimation}
                                        className="trust__right-card trust__right-cardPink">
                                <motion.span custom={2} variants={topAnimation} className="trust__right-card-svg">
                                    <Image src={face} alt={'face'}/>
                                </motion.span>

                                <motion.h3 custom={2} variants={topAnimation} className="trust__right-card-title">
                                    Matrimonial
                                </motion.h3>

                                <motion.p custom={2} variants={topAnimation} className="trust__right-card-text">
                                    Lorem ipsum dolor sit amet consectetur. Est sapien curabitur.
                                </motion.p>
                            </motion.div>
                        </SwiperSlide>

                        <SwiperSlide className="trust__right-high">
                            <motion.div custom={1} variants={bottomAnimation}
                                        className="trust__right-card trust__right-cardPink">
                                <motion.span custom={2} variants={bottomAnimation} className="trust__right-card-svg">
                                    <Image src={build} alt={'build'}/>
                                </motion.span>

                                <motion.h3 custom={2} variants={bottomAnimation} className="trust__right-card-title">
                                    Property
                                </motion.h3>

                                <motion.p custom={2} variants={bottomAnimation} className="trust__right-card-text">
                                    Lorem ipsum dolor sit amet consectetur. Est sapien curabitur.
                                </motion.p>
                            </motion.div>

                            <motion.div custom={1} variants={bottomAnimation}
                                        className="trust__right-card trust__right-cardBlue">
                                <motion.span custom={2} variants={bottomAnimation} className="trust__right-card-svg">
                                    <Image src={people} alt={'people'}/>
                                </motion.span>

                                <motion.h3 custom={2} variants={bottomAnimation} className="trust__right-card-title">
                                    Matrimonial
                                </motion.h3>

                                <motion.p custom={2} variants={bottomAnimation} className="trust__right-card-text">
                                    Lorem ipsum dolor sit amet consectetur. Est sapien curabitur.
                                </motion.p>
                            </motion.div>
                        </SwiperSlide>

                        <SwiperSlide className="trust__right-low">
                            <motion.div custom={1} variants={topAnimation}
                                        className="trust__right-card trust__right-cardBlue">
                                <motion.span custom={2} variants={topAnimation} className="trust__right-card-svg">
                                    <Image src={hand} alt={'hand'}/>
                                </motion.span>

                                <motion.h3 custom={2} variants={topAnimation} className="trust__right-card-title">
                                    Immigration
                                </motion.h3>

                                <motion.p custom={2} variants={topAnimation} className="trust__right-card-text">
                                    Lorem ipsum dolor sit amet consectetur.
                                    Est sapien curabitur.
                                </motion.p>
                            </motion.div>

                            <motion.div custom={1} variants={topAnimation}
                                        className="trust__right-card trust__right-cardPink">
                                <motion.span custom={2} variants={topAnimation} className="trust__right-card-svg">
                                    <Image src={face} alt={'face'}/>
                                </motion.span>

                                <motion.h3 custom={2} variants={topAnimation} className="trust__right-card-title">
                                    Matrimonial
                                </motion.h3>

                                <motion.p custom={2} variants={topAnimation} className="trust__right-card-text">
                                    Lorem ipsum dolor sit amet consectetur. Est sapien curabitur.
                                </motion.p>
                            </motion.div>
                        </SwiperSlide>

                        <SwiperSlide className="trust__right-high">
                            <motion.div custom={1} variants={bottomAnimation}
                                        className="trust__right-card trust__right-cardPink">
                                <motion.span custom={2} variants={bottomAnimation} className="trust__right-card-svg">
                                    <Image src={build} alt={'build'}/>
                                </motion.span>

                                <motion.h3 custom={2} variants={bottomAnimation} className="trust__right-card-title">
                                    Property
                                </motion.h3>

                                <motion.p custom={2} variants={bottomAnimation} className="trust__right-card-text">
                                    Lorem ipsum dolor sit amet consectetur. Est sapien curabitur.
                                </motion.p>
                            </motion.div>

                            <motion.div custom={1} variants={bottomAnimation}
                                        className="trust__right-card trust__right-cardBlue">
                                <motion.span custom={2} variants={bottomAnimation} className="trust__right-card-svg">
                                    <Image src={people} alt={'people'}/>
                                </motion.span>

                                <motion.h3 custom={2} variants={bottomAnimation} className="trust__right-card-title">
                                    Matrimonial
                                </motion.h3>

                                <motion.p custom={2} variants={bottomAnimation} className="trust__right-card-text">
                                    Lorem ipsum dolor sit amet consectetur. Est sapien curabitur.
                                </motion.p>
                            </motion.div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </motion.section>
    )
}

export default Trust