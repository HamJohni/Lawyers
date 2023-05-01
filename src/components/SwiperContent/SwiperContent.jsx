import Image from "next/image";
import {motion} from "framer-motion";
import {Avatar, AvatarGroup} from "@chakra-ui/react";


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
                className="first__box">

                <motion.div custom={1.5} variants={textAnimation} className="first__left">
                    <motion.p custom={2} variants={textAnimation} className="first__left-subtitle">
                        Lorem ipsum dolor sit
                    </motion.p>

                    <motion.h2 custom={3} variants={textAnimation} className="first__left-title">
                        Lorem ipsum dolor <br/>
                        sit amet consectetur.
                    </motion.h2>

                    <motion.p custom={4} variants={textAnimation} className="first__left-subtitle">
                        Consult a Lawyer now.
                    </motion.p>

                    <motion.div custom={5} variants={textAnimation} className="first__left-online">
                        <AvatarGroup size='md' max={2}>
                            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence'/>
                            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo'/>
                            <Avatar name='Kent Dodds' src='https://bit.ly/kent-c-dodds'/>
                            <Avatar name='Prosper Otemuyiwa' src='https://bit.ly/prosper-baba'/>
                        </AvatarGroup>

                        <p className="first__left-online-text">+121 Lawyers are online</p> <span
                        className="first__left-online-circle"></span>
                    </motion.div>

                    <motion.button custom={6} variants={textAnimation} className="btn">Talk to lawyer
                    </motion.button>

                </motion.div>

                <motion.div initial="hidden" whileInView="visible" className="first__right">
                    <ul className="first__right-list">

                        <motion.li custom={2} variants={rightAnimation} className="first__right-item">
                            <Image src={camera} alt={"camera"}/>

                            <motion.p custom={3} variants={rightAnimation} className="first__right-item-info">
                                <motion.span custom={4} variants={rightAnimation} className="first__right-item-title">
                                    Lorem
                                </motion.span>
                                Lorem ipsum dolor sit amet <br/>
                                consectetur. Varius sed.
                            </motion.p>
                        </motion.li>

                        <motion.li custom={2} variants={rightAnimation} className="first__right-item">
                            <Image src={call} alt={"call"}/>

                            <motion.p custom={3} variants={rightAnimation} className="first__right-item-info">
                                <motion.span custom={4} variants={rightAnimation} className="first__right-item-title">
                                    Lorem
                                </motion.span>
                                Lorem ipsum dolor sit amet <br/>
                                consectetur. Varius sed.
                            </motion.p>
                        </motion.li>

                        <motion.li custom={2} variants={rightAnimation} className="first__right-item">
                            <Image src={doc} alt={"doc"}/>

                            <motion.p custom={3} variants={rightAnimation} className="first__right-item-info">
                                <motion.span custom={4} variants={rightAnimation} className="first__right-item-title">
                                    Lorem
                                </motion.span>
                                Lorem ipsum dolor sit amet <br/>
                                consectetur. Varius sed.
                            </motion.p>
                        </motion.li>

                    </ul>

                    <motion.div custom={2} variants={rightAnimation} className="first__right-circle">
                        <Image src={circle} alt="circle" className="first__right-circle-img"/>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    )
}

export default SwiperContent