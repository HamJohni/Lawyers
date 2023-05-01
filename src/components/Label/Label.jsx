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

const Label = ({value, count, style, setValue, cash, white}) => {
    return (
        <motion.label
            initial="hidden"
            whileInView="visible"
            custom={1} variants={topAnimation}
            className={`slot__right-label ${value === count ? "active" : ''}`}
            style={value === count ? style : null}>

            <div className="slot__right-label-left">

                <motion.input  type="radio" className="slot__right-label-input" value={value} onChange={() => setValue(count)} name={'min'}/>

                <div className="slot__right-label-box">
                    <span className="slot__right-label-title" style={value === count ? white : null}>
                        {count} Minutes
                    </span>

                    <span className="slot__right-label-info" style={value === count ? white : null}>
                        Minutes valid for 30 days
                    </span>
                </div>
            </div>

            <div className="slot__right-label-right">
                <span className="slot__right-label-price" style={value === count ? white : null}>$20</span>
                <span className="slot__right-label-detail" style={value === count ? white : null}>( ${cash}/ Min )</span>
            </div>
        </motion.label>
    )
}
export default Label