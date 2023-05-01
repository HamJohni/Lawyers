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

const Footer = () => {
    return(
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="footer">
            <motion.p custom={1} variants={textAnimation} className="footer__title">
                © 1998-2019 Copyright | All Rights Reserved.
            </motion.p>
        </motion.section>
    )
}

export default Footer