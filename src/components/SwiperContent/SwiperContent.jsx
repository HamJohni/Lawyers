import Image from "next/image";
import {motion} from "framer-motion";
import {Avatar, AvatarGroup} from "@chakra-ui/react";
import f from '../Home/FirstSection/First.module.scss'


// Images
import camera from "../../../public/firstSection/camera.png";
import call from "../../../public/firstSection/call.png";
import doc from "../../../public/firstSection/doc.png";
import circle from "../../../public/firstSection/circle.png";
// -------------------------------------------------------------

const textAnimation = {
    hidden: {
        x: 100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}

const rightAnimation = {
    hidden: {
        x: 100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2}
    })
}

const SwiperContent = () => {
    return(
        <>
            <motion.div
                initial="hidden"
                whileInView="visible"
                className={f.first__box}>

                <motion.div custom={1.5} variants={textAnimation} className={f.first__left}>
                    <motion.p custom={2} variants={textAnimation} className={f.first__left_subtitle}>
                        Lorem ipsum dolor sit
                    </motion.p>

                    <motion.h2 custom={3} variants={textAnimation} className={f.first__left_title}>
                        Lorem ipsum dolor <br/>
                        sit amet consectetur.
                    </motion.h2>

                    <motion.p custom={4} variants={textAnimation} className={f.first__left_subtitle}>
                        Consult a Lawyer now.
                    </motion.p>

                    <motion.div custom={5} variants={textAnimation} className={f.first__left_online}>
                        <AvatarGroup size='md' max={2}>
                            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence'/>
                            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo'/>
                            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds'/>
                            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba'/>
                        </AvatarGroup>

                        <p className={f.first__left_online_text}>+121 Lawyers are online</p> <span
                        className={f.first__left_online_circle}></span>
                    </motion.div>

                    <motion.button custom={6} variants={textAnimation}>Talk to lawyer
                    </motion.button>

                </motion.div>

                <motion.div initial="hidden" whileInView="visible" className={f.first__right}>
                    <ul className={f.first__right_list}>

                        <motion.li custom={2} variants={rightAnimation} className={f.first__right_item}>
                            <Image src={camera} alt={"camera"}/>


                            <motion.div  custom={3} variants={rightAnimation} className={f}>
                                <motion.span className={f.first__right_item_title}>
                                    Lorem
                                </motion.span>
                                <motion.p className={f.first__right_item_info_text}>
                                    Lorem dolor sit amet <br/>
                                    consectetur. Varius sed.
                                </motion.p>
                            </motion.div>
                        </motion.li>

                        <motion.li custom={2} variants={rightAnimation} className={f.first__right_item}>
                            <Image src={call} alt={"call"}/>

                            <motion.div  custom={3} variants={rightAnimation} className={f}>
                                <motion.span className={f.first__right_item_title}>
                                    Lorem
                                </motion.span>
                                <motion.p className={f.first__right_item_info_text}>
                                    Lorem ipsum dolor sit amet <br/>
                                    consectetur. Varius sed.
                                </motion.p>
                            </motion.div>
                        </motion.li>

                        <motion.li custom={2} variants={rightAnimation} className={f.first__right_item}>
                            <Image src={doc} alt={"doc"}/>

                            <motion.div  custom={3} variants={rightAnimation} className={f}>
                                <motion.span className={f.first__right_item_title}>
                                    Lorem
                                </motion.span>
                                <motion.p className={f.first__right_item_info_text}>
                                    Lorem ipsum dolor sit amet <br/>
                                    consectetur. Varius sed.
                                </motion.p>
                            </motion.div>
                        </motion.li>

                    </ul>

                    <motion.div custom={2} variants={rightAnimation} className={f.first__right_circle}>
                        <Image src={circle} alt="circle" className={f.first__right_circle_img}/>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}

export default SwiperContent