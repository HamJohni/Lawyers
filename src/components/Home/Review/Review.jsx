import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import axios from "axios";

import {getAllReviews} from "@/redux/reducers/reviews";
import OverlayOne from "../../Overlay/Overlay";

// Chakra
import {Avatar, CircularProgress, Text, useDisclosure, useToast} from "@chakra-ui/react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton
} from '@chakra-ui/react'
// --------------------------------------------------------

import {motion, useScroll} from "framer-motion";
import {v4 as uuidv4} from 'uuid';

import {Rating, Star} from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

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

const Review = () => {

    const ref = useRef(null);
    const toast = useToast()
    const dispatch = useDispatch()

    const {user} = useSelector(state => state.user)
    const {reviews, status} = useSelector((state) => state.reviews)

    const [shouldFetch, setShouldFetch] = useState(false);
    const [rating, setRating] = useState(0)
    const [text, setText] = useState('')
    const {scrollXProgress} = useScroll({container: ref});
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [overlay, setOverlay] = useState(<OverlayOne/>)

    // Styles for rating stars
    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#cecece'
    }
    //--------------------------------------------

    // For submit review
    const submitReview = () => {
        let review = {
            id: uuidv4(),
            photo: user.photo.length > 1 ? user.photo : "https://img.favpng.com/25/13/19/samsung-galaxy-a8-a8-user-login-telephone-avatar-png-favpng-dqKEPfX7hPbc6SMVUCteANKwj.jpg",
            name: user.fullName,
            mark: rating,
            text
        }

        axios.post('http://localhost:4080/reviews', {...review})
            .then(() => {
                toast({
                    title: 'Review sent',
                    description: "Your review has already been posted",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-left',
                })
                setText('')
                setRating(0)
            }).catch((err) => {
            toast({
                title: 'An error has occurred',
                description: err.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top-left',
            })
        })
    }

    useEffect(() => {
        dispatch(getAllReviews());
    }, [dispatch]);

    useEffect(() => {
        if (shouldFetch) {
            dispatch(getAllReviews());
            setShouldFetch(false);
        }
    }, [dispatch, shouldFetch]);

    function handleButtonClick(e) {
        e.preventDefault()
        submitReview()
        setShouldFetch(true);
    }
    //------------------------------------------

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            className="review">
            <div className="container">
                <motion.p
                    custom={1} variants={textAnimation}
                    className="legal__subtitle">
                    Success Stories
                </motion.p>

                <motion.h2 custom={2} variants={textAnimation} className="legal__title">
                    To Know About Our Lawyers
                </motion.h2>

                <svg id="progress" width="100" height="100" viewBox="0 0 100 100">
                    <circle fill='none' cx="50" cy="50" r="30" pathLength="1" className="bg"/>
                    <motion.circle fill='none' cx="50" cy="50" r="30" pathLength="1" className="indicator" style={{pathLength: scrollXProgress}}/>
                </svg>

                <ul ref={ref} className="review__content">
                    {
                        status === 'loading' ?
                            <li className="review__block-loading">
                                <CircularProgress circle={{strokeWidth: "10%"}} isIndeterminate color='#d8232a'
                                                  size='100px' thickness='12px'/>
                            </li> : status === 'error' ?

                                <li className="review__block-error">
                                    Oops something went to bad...
                                </li> :

                                reviews.map(item => (
                                    <motion.li custom={4} variants={textAnimation} key={item.id} className="review__block">
                                        <div className="review__top">
                                            <Avatar size='xl' className="review__avatar" name={`${item.name}`} src={item.photo}/>

                                            <h3 className="review__top-title">
                                                {item.name}
                                            </h3>

                                            <p className="review__top-subtitle">
                                                Smartyields Agro Pvt Ltd | Incorporation
                                            </p>

                                            <div className="review__top-stars">
                                                <Rating style={{maxWidth: 130, pointerEvents: "none"}} value={item.mark} itemStyles={myStyles}/>
                                            </div>
                                        </div>

                                        <div className="review__bottom">
                                            <span className="review__bottom-svg">
                                                <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path opacity="0.1" d="M1.704 20.0321C0.936002 16.6401 0.552002 13.6961 0.552002 11.2001C0.552002 7.61605 1.384 4.92805 3.048 3.13605C4.712 1.28005 7.144 0.352051 10.344 0.352051V4.19205C8.68 4.19205 7.464 4.64005 6.696 5.53605C5.992 6.43205 5.64 7.77605 5.64 9.56805V11.7761H10.44V20.0321H1.704ZM14.664 20.0321C13.896 16.6401 13.512 13.6961 13.512 11.2001C13.512 7.61605 14.344 4.92805 16.008 3.13605C17.672 1.28005 20.104 0.352051 23.304 0.352051V4.19205C21.64 4.19205 20.424 4.64005 19.656 5.53605C18.952 6.43205 18.6 7.77605 18.6 9.56805V11.7761H23.4V20.0321H14.664Z" fill="black"/>
                                                </svg>
                                            </span>

                                            <p className="review__bottom-text">
                                                {item.text}
                                            </p>
                                        </div>
                                    </motion.li>
                                )).reverse()}
                </ul>

                <motion.div custom={2} variants={textAnimation} className="review__btn">
                    <button className="btn" onClick={() => {
                        setOverlay(<OverlayOne/>)
                        onOpen()}}
                    >
                        Add review
                    </button>
                </motion.div>
            </div>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                {overlay}
                <ModalContent borderRadius="15">
                    <ModalHeader>Write a review</ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody>
                        {
                            user ?
                                <form className="review__form" onSubmit={(e) => handleButtonClick(e)}>
                                    <label className="review__form-label">

                                        <span className="review__form-subtitle">
                                            Your review:
                                        </span>

                                        <textarea value={text} onChange={(e) => setText(e.target.value)} className="review__form-text" placeholder="Text"/>
                                    </label>

                                    <div className="review__form-rating">
                                        <span className="review__form-subtitle">Rate:</span>
                                        <Rating style={{maxWidth: 130}} value={rating} onChange={setRating} itemStyles={myStyles}/>
                                    </div>

                                    <ModalCloseButton className="review__form-btn">
                                        <button className="btn" type="submit">Submit review</button>
                                    </ModalCloseButton>
                                </form>
                                :
                                <Text>You are not logged in !</Text>
                        }
                    </ModalBody>
                </ModalContent>
            </Modal>
        </motion.section>
    )
}

export default Review