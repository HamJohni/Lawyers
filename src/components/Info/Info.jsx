import {motion} from "framer-motion";

const textAnimation = {
    hidden: {
        position: "relative",
        x: -100,
        opacity: 0,
        zIndex: 2
    },
    visible: custom => ({
        position: "relative",
        x: 0,
        opacity: 1,
        zIndex: 2,
        transition: {delay: custom * 0.3}
    })
}

const Info = ({subtitle, title, text, className}) => {
    return(
        <motion.div
            initial="hidden"
            whileInView="visible"
            className={className}>
            <motion.h3 custom={2} variants={textAnimation} className="trust__left-subtitle">
                {subtitle}
            </motion.h3>

            <motion.h2 custom={2} variants={textAnimation} className="trust__left-title">
                {title}
            </motion.h2>

            <motion.p custom={2} variants={textAnimation} className="trust__left-text">
                {text}
            </motion.p>
        </motion.div>
    )
}

export default Info;