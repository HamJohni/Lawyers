import {useState} from "react";

import Image from "next/image";
import {useToast} from "@chakra-ui/react";
import Label from "../../components/Label/Label";

// Images
import call from '../../../public/firstSection/call.png'
import hammer from '../../../public/connect/hammer.png'
import star from '../../../public/slot/star.png'
// --------------------------------------------------------

import {motion} from "framer-motion";

const textAnimation = {
    hidden: {
        position: "relative",
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        position: "relative",
        x: 0,
        opacity: 1,
        zIndex: 2,
        transition: {delay: custom * 0.3}
    })
}

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


const Slot = () => {
    const toast = useToast()

    const [value, setValue] = useState('')

    const pick = () => {

        setValue('')

        toast({
            title: 'Slot selected',
            description: "We will contact you soon",
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'top-left',
        })
    }

    const style = {
        background: "#6B5AD0",
        boxShadow: "0 0 8px rgba(10, 116, 243, 0.25)",
    }
    const white = {
        color: "white",
        opacity: "1"
    }

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="slot">
            <div className="container">
                <motion.h2 custom={1} variants={topAnimation} className="slot__title">
                    Pick the slot to get <span className="slot__title-span">expert solution</span>
                </motion.h2>

                <div className="slot__content">

                    <div className="slot__left">
                        <motion.p custom={1} variants={textAnimation} className="slot__left-subtitle">
                            Right legal advice today <br/>
                            will save your big
                            cost tomorrow.
                        </motion.p>

                        <ul className="slot__left-list">
                            <motion.li custom={2} variants={textAnimation} className="slot__left-item">
                                <span className="slot__left-item-svg" style={{background: "#FFF4E2"}}>
                                    <Image src={call} alt={"call"}/>
                                </span>
                                73k Calls Connected
                            </motion.li>

                            <motion.li custom={3} variants={textAnimation} className="slot__left-item">
                                <span className="slot__left-item-svg" style={{background: "#E7FBF9"}}>
                                    <Image src={hammer} alt={"hammer"}/>
                                </span>
                                63k Positive Result
                            </motion.li>

                            <motion.li custom={4} variants={textAnimation} className="slot__left-item">
                                <span className="slot__left-item-svg" style={{background: "#FDE0F6"}}>
                                    <Image src={star} alt={"star"}/>
                                </span>
                                4.6/5 Average Rating
                            </motion.li>
                        </ul>
                    </div>

                    <div className="slot__right">
                        <div className="slot__right-box">
                            <Label value={value} count="60" style={style} setValue={setValue} white={white}
                                   cash="16.6"/>
                        </div>

                        <div className="slot__right-box">
                            <Label value={value} count="45" style={style} setValue={setValue} white={white}
                                   cash="18.80"/>
                        </div>

                        <div className="slot__right-box">
                            <Label value={value} count="30" style={style} setValue={setValue} white={white}
                                   cash="23.30"/>
                        </div>

                        <div className="slot__right-box">
                            <Label value={value} count="15" style={style} setValue={setValue} white={white}
                                   cash="33.20"/>
                        </div>
                        <motion.div custom={5} variants={bottomAnimation} className="slot__right-btn">
                            <button className="slot__right-btn btn" onClick={pick}>Pick & Connect Now</button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Slot