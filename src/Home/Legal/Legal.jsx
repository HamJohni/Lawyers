import Image from "next/image";
import {motion} from "framer-motion";
import {object} from "@/utils/block";

const textAnimation = {
    hidden: {
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

const Legal = () => {

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="legal">

            <div className="container">
                <motion.p custom={1} variants={textAnimation} className="legal__subtitle">
                    Experience a smarter
                </motion.p>

                <motion.h2 custom={2} variants={textAnimation} className="legal__title">
                    legal solution platform in your hand
                </motion.h2>

                <motion.div custom={1} variants={textAnimation} className="legal__content">
                    {
                        object.map(item => (
                            <motion.div key={item.id} custom={2} variants={textAnimation}
                                        className={`legal__block top ${item.class}`}>
                                <span className="legal__block-svg" style={item.bg}>
                                    <Image src={item.photo} alt={item.title}/>
                                </span>

                                <h2 className="legal__block-title">
                                    {item.title}
                                </h2>

                                <p className="legal__block-text">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))
                    }
                </motion.div>

                <motion.div custom={2} variants={bottomAnimation} className="legal__btn">
                    <button className="btn">Talk to lawyer</button>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default Legal