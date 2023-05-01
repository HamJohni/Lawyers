import {useEffect, useRef, useState} from "react";
import Svg from "../Svg/svg.jsx";

import {useDispatch, useSelector} from "react-redux";
import {increment, logout} from "@/redux/reducers/user";
import {motion} from "framer-motion";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";

import logo from '../../../public/header/logo.png'

// Chakra
import {
    Avatar, Button, Popover, PopoverArrow, PopoverCloseButton,
    PopoverContent, PopoverFooter, PopoverHeader,
    PopoverTrigger, useToast
} from "@chakra-ui/react";
// ----------------------------------------------------------

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.3}
    })
}

const MainContainer = ({children, keywords, title}) => {
    useEffect(() => {
        dispatch(increment(JSON.parse(localStorage.getItem('user'))))
    }, [])

    const toast = useToast()
    const router = useRouter()
    const initialFocusRef = useRef()

    const {user} = useSelector(state => state.user)
    const dispatch = useDispatch()

    // For logout user
    const exit = () => {
        dispatch(logout(null))
        localStorage.removeItem('user')
        toast({
            title: 'Success',
            description: "You left acc",
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: 'top-left',
        })

        router.push('/login')
    }
    // -----------------------------------

    // For scroll
    const [scrollPosition, setScrollPosition] = useState(0);
    useEffect(() => {
        function handleScroll() {
            const position = window.pageYOffset;
            setScrollPosition(position);
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const headerStyle = {
        position: "fixed",
        maxWidth: "100%",
        top: "0",
        zIndex: "1000",
        borderRadius: '0',
        padding: "10px 50px"
    }
    // ---------------------------------------------------

    return (
        <>
            <Head>
                <meta keywords={"Law, Law Firm" + keywords}></meta>
                <title>{title}</title>
            </Head>

            <motion.header className="header"
                           initial="hidden"
                           whileInView="visible"
                           style={scrollPosition > 20 ? headerStyle : null}>
                <motion.nav custom={1} variants={textAnimation} className="header__nav">
                    <div className="header__left">
                        <h1 className="header__left-box">

                            <Image className="header__left-img" src={logo} alt="logo"/>

                            <motion.p custom={2} variants={textAnimation} className="header__left-title">
                                Lawyers
                                <span className="header__left-subtitle">
                                    Legal Services
                                </span>
                            </motion.p>
                        </h1>

                        <ul className="header__list">
                            <motion.li custom={2.1} variants={textAnimation} className="header__item">
                                <p className="header__item-link">
                                    Practice Areas
                                </p>
                            </motion.li>

                            <motion.li custom={2.2} variants={textAnimation} className="header__item">
                                <p className="header__item-link">
                                    Immigration <Svg/>
                                </p>
                            </motion.li>

                            <motion.li custom={2.3} variants={textAnimation} className="header__item">
                                <p className="header__item-link">
                                    Property <Svg/>
                                </p>
                            </motion.li>

                            <motion.li custom={2.3} variants={textAnimation} className="header__item">
                                <p className="header__item-link">
                                    Matrimonial <Svg/>
                                </p>
                            </motion.li>

                            <motion.li custom={2.4} variants={textAnimation} className="header__item">
                                <p className="header__item-link">
                                    Personal <Svg/>
                                </p>
                            </motion.li>

                            <motion.li custom={2.5} variants={textAnimation} className="header__item">
                                <p className="header__item-link">
                                    Business <Svg/>
                                </p>
                            </motion.li>

                            <motion.li custom={2.6} variants={textAnimation} className="header__item">
                                <p className="header__item-link">
                                    Will <Svg/>
                                </p>
                            </motion.li>
                        </ul>
                    </div>

                    {
                        user ?
                            <Popover isLazy initialFocusRef={initialFocusRef} closeOnBlur={true}>
                                <PopoverTrigger>
                                    <Avatar className="header__avatar-ava" size='lg' name='Dan Abrahmov' src={user.photo ? user.photo : null}/>
                                </PopoverTrigger>

                                <PopoverContent width={200}>
                                    <PopoverHeader fontWeight='semibold' fontSize={17}>{user.fullName} </PopoverHeader>

                                    <PopoverArrow/>

                                    <PopoverCloseButton size="25"/>

                                    <PopoverFooter display='flex' justifyContent='center'>
                                        <Button colorScheme='red' onClick={exit}>Log out</Button>
                                    </PopoverFooter>
                                </PopoverContent>
                            </Popover>

                            :
                            <Link href={"/login"} className="header__btn btn">
                                Login
                            </Link>
                    }
                </motion.nav>
            </motion.header>

            <main>
                {children}
            </main>
        </>
    )
}

export default MainContainer