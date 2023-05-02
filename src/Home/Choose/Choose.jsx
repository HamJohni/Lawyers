// Images
import sale from "../../../public/choose/sale.png"
import security from "../../../public/choose/security.png"
import smile from "../../../public/choose/smile.png"
import time from "../../../public/choose/time.png"
import weight from "../../../public/choose/weight.png"
import woman from "../../../public/choose/woman.png"
//-------------------------------------------------------------

import Image from "next/image";
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

const Choose = () => {

    return (
        <motion.section
            initial="hidden"
            whileInView="visible" className="choose">
                <motion.h2 custom={1} variants={textAnimation} className="choose__title">
                    Why choose us
                </motion.h2>

                <div className="choose__content">

                    <motion.ul custom={2} variants={textAnimation} className="choose__content-list choose__content-list-right">

                        <li className="choose__content-item">
                            <h2 className="choose__content-item-title choose__content-list-right">
                                Economic
                            </h2>

                            <p className="choose__content-item-desc choose__content-list-right">
                                Lorem ipsum dolor sit amet consectetur
                            </p>
                        </li>

                        <li className="choose__content-item choose__content-list-right">
                            <h2 className="choose__content-item-title choose__content-list-right">
                                Professional
                            </h2>

                            <p className="choose__content-item-desc choose__content-list-right ">
                                Lorem ipsum dolor sit amet consectetur
                            </p>
                        </li>

                        <li className="choose__content-item">
                            <h2 className="choose__content-item-title choose__content-list-right">
                                Security
                            </h2>

                            <p className="choose__content-item-desc choose__content-list-right">
                                Lorem ipsum dolor sit amet consectetur
                            </p>
                        </li>

                    </motion.ul>

                    <div className="choose__content-mid">

                        <motion.span custom={2} variants={textAnimation} className="choose__content-mid-security">
                            <Image src={security} alt={"security"}/>
                        </motion.span>

                        <span className="choose__content-mid-woman">
                            <Image src={woman} alt={"woman"}/>
                        </span>

                        <motion.span custom={2} variants={textAnimation} className="choose__content-mid-smile">
                            <Image src={smile} alt={"smile"}/>
                        </motion.span>

                        <motion.span custom={2} variants={textAnimation} className="choose__content-mid-weight">
                            <Image src={weight} alt={"weight"}/>
                        </motion.span>

                        <span className="choose__content-mid-graph">
                            <Image src={sale} alt={"sale"}/>
                        </span>

                        <motion.span custom={2} variants={textAnimation} className="choose__content-mid-time">
                            <Image src={time} alt={"time"}/>
                        </motion.span>

                    </div>

                    <motion.div custom={2} variants={textAnimation} className="choose__content-list">

                        <li className="choose__content-item">
                            <h2 className="choose__content-item-title">
                                Time
                            </h2>

                            <p className="choose__content-item-desc">
                                Lorem ipsum dolor sit amet consectetur
                            </p>
                        </li>

                        <li className="choose__content-item">
                            <h2 className="choose__content-item-title">
                                24*7
                            </h2>

                            <p className="choose__content-item-desc">
                                Lorem ipsum dolor sit amet consectetur
                            </p>
                        </li>

                        <li className="choose__content-item">
                            <h2 className="choose__content-item-title">
                                User satisfaction
                            </h2>

                            <p className="choose__content-item-desc">
                                Lorem ipsum dolor sit amet consectetur
                            </p>
                        </li>

                    </motion.div>
            </div>
        </motion.section>
    )
}

export default Choose