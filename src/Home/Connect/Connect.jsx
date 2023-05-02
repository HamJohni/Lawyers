import Info from "../../components/Info/Info";
import Image from "next/image";


// Image
import line from "../../../public/trust/line.png"
import time from "../../../public/connect/time.png"
import man from "../../../public/connect/man.png"
import hammer from "../../../public/connect/hammer.png"
import woman from "../../../public/connect/woman.png"
import old from "../../../public/connect/elder.png"
import call from "../../../public/connect/call.png"
import doc from "../../../public/connect/doc.png"
import camera from "../../../public/connect/camera.png"
// ------------------------------------------------------------------


import {motion} from "framer-motion";

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.3}
    })
}

const topAnimation = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.3}
    })
}
const bottomAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.3}
    })
}


const Connect = () => {
    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="connect">
            <div className="container connect__content">
                <div className="connect__content-box">

                    <div className="connect__right connect__right-top">
                        <Info subtitle={"Connect with our"} className="connect__info" title={"Legal Advisors"}
                              text={"Lorem ipsum dolor sit amet consectetur. Dui auctor sagittis est et nisl. Cras blandit ultrices adipiscing eget volutpat sed. Lorem diam amet donec enim. Et viverra mauris."}/>
                        <button className="connect__right-btn btn">Talk to lawyer</button>
                    </div>

                    <motion.div custom={2} variants={textAnimation} className="connect__left">
                        <ul className="connect__left-list">

                            <motion.li custom={3} variants={textAnimation} className="connect__left-item">
                                <span className="connect__left-svg" style={{background: "#C8C4E9"}}>
                                   <Image src={time} alt={"time"}/>
                                </span>

                                Save Time and Money
                            </motion.li>

                            <motion.li custom={3} variants={textAnimation} className="connect__left-item">
                                <span className="connect__left-svg" style={{background: "#FEE3C1"}}>
                                    <Image src={man} alt={"man"}/>
                                </span>

                                Best Advise that Matters
                            </motion.li>

                            <motion.li custom={3} variants={textAnimation} className="connect__left-item">
                                <span className="connect__left-svg" style={{background: "#B4F3F6"}}>
                                    <Image src={hammer} alt={"hammer"}/>
                                </span>

                                Privat and Confidential Calls
                            </motion.li>

                            <motion.li custom={3} variants={textAnimation} className="connect__left-item">
                                <span className="connect__left-svg" style={{background: "#E0C1F4"}}>
                                    <Image src={woman} alt={"woman"}/>
                                </span>

                                Instant Advice
                            </motion.li>

                        </ul>
                        <motion.span custom={3} variants={textAnimation} className="connect__left-woman">
                            <Image src={old} alt={"erlder"}/>
                        </motion.span>

                        <Image className="connect__left-woman-img" src={line} alt={"line"}/>

                        <motion.span custom={3} variants={textAnimation} className="dot"></motion.span>

                        <motion.div custom={3} variants={topAnimation} id="call"
                                    className="connect__left-block connect__left-block" style={{color: "#C44903"}}>
                            <span className="connect__left-block-svg" style={{background: "#FF9A61"}}>
                               <Image src={call} alt={"erlder"}/>
                            </span>
                            Call
                        </motion.div>

                        <motion.div custom={3} variants={textAnimation} id="doc"
                                    className="connect__left-block-doc connect__left-block">
                            <span className="connect__left-block-svg" style={{background: "#FF385C"}}>
                                <Image src={doc} alt={"doc"}/>
                            </span>
                            Documentation
                        </motion.div>

                        <motion.div custom={3} variants={bottomAnimation} id="camera"
                                    className="connect__left-block-camera connect__left-block">
                            <span className="connect__left-block-svg" style={{background: "#1AA260"}}>
                                <Image src={camera} alt={"camera"}/>
                            </span>
                            Video Call
                        </motion.div>

                    </motion.div>

                    <div className="connect__right">
                        <Info subtitle={"Connect with our"} className="connect__info" title={"Legal Advisors"}
                              text={"Lorem ipsum dolor sit amet consectetur. Dui auctor sagittis est et nisl. Cras blandit ultrices adipiscing eget volutpat sed. Lorem diam amet donec enim. Et viverra mauris."}/>
                        <button className="connect__right-btn btn">Talk to lawyer</button>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Connect