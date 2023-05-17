import {useRef,useEffect,useState} from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import Link from "next/link";
import h from './Header.module.scss'

import Svg from "@/components/Svg/svg";

import {useDispatch, useSelector} from "react-redux";
import {logout} from "@/redux/reducers/user";

import logo from "../../../public/header/logo.png";

import {motion} from "framer-motion";
import {Avatar, Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay,
    Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverFooter, PopoverHeader,
    PopoverTrigger, useDisclosure, useToast
} from "@chakra-ui/react";

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


const Header = () => {
    const toast = useToast()
    const router = useRouter()

    const initialFocusRef = useRef()

    const {user} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement] = useState('right')

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

    const active = {
        position: "fixed",
        maxWidth: "100%",
        top: "0",
        zIndex: "1000",
        borderRadius: "0",
        padding: "10px 50px"
    }

    return(
        <motion.header className={h.header}
                       initial="hidden"
                       style={scrollPosition > 20 ? active : null}
                       whileInView="visible">

            <motion.nav custom={1} variants={textAnimation} className={h.header__nav}>
                <div className={h.header__left}>
                    <div className={h.header__burger}>
                        <Button onClick={onOpen} className={h.header__burger_btn}>
                            <p className={h.header__burger_line}></p>
                            <p className={h.header__burger_line}></p>
                            <p className={h.header__burger_line}></p>
                        </Button>
                        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
                            <DrawerOverlay />
                            <DrawerContent>
                                <DrawerHeader borderBottomWidth='1px' padding="10px 15px">Navigation</DrawerHeader>
                                <DrawerBody padding={0}>

                                    <ul className="header__burger-list">
                                        <li className={h.header__item_link}>
                                            Practice Areas
                                        </li>
                                        <li className={h.header__item_link}>
                                            Immigration
                                        </li>
                                        <li className={h.header__item_link}>
                                            Property
                                        </li>
                                        <li className={h.header__item_link}>
                                            Matrimonial
                                        </li>
                                        <li className={h.header__item_link}>
                                            Personal
                                        </li>
                                        <li className={h.header__item_link}>
                                            Business
                                        </li>
                                        <li className={h.header__item_link}>
                                            Will
                                        </li>
                                    </ul>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </div>

                    <h1 className={h.header__left_box}>

                        <Image className={h.header__left_img} src={logo} alt="logo"/>

                        <motion.p custom={2} variants={textAnimation} className={h.header__left_title}>
                            Lawyers
                            <span className={h.header__left_subtitle}>
                                    Legal Services
                                </span>
                        </motion.p>
                    </h1>

                    <ul className={h.header__list}>
                        <motion.li custom={2.1} variants={textAnimation} className={h.header__item}>
                            <p className={h.header__item_link}>
                                Practice Areas
                            </p>
                        </motion.li>

                        <motion.li custom={2.2} variants={textAnimation} className={h.header__item}>
                            <p className={h.header__item_link}>
                                Immigration <Svg/>
                            </p>
                        </motion.li>

                        <motion.li custom={2.3} variants={textAnimation} className={h.header__item}>
                            <p className={h.header__item_link}>
                                Property <Svg/>
                            </p>
                        </motion.li>

                        <motion.li custom={2.3} variants={textAnimation} className={h.header__item}>
                            <p className={h.header__item_link}>
                                Matrimonial <Svg/>
                            </p>
                        </motion.li>

                        <motion.li custom={2.4} variants={textAnimation} className={h.header__item}>
                            <p className={h.header__item_link}>
                                Personal <Svg/>
                            </p>
                        </motion.li>

                        <motion.li custom={2.5} variants={textAnimation} className={h.header__item}>
                            <p className={h.header__item_link}>
                                Business <Svg/>
                            </p>
                        </motion.li>

                        <motion.li custom={2.6} variants={textAnimation} className={h.header__item}>
                            <p className={h.header__item_link}>
                                Will <Svg/>
                            </p>
                        </motion.li>
                    </ul>
                </div>

                {
                    user ?
                        <Popover isLazy initialFocusRef={initialFocusRef} closeOnBlur={true}>
                            <PopoverTrigger>
                                <Avatar className={h.header__avatar_ava} size='lg' name='Dan Abrahmov' src={user.photo ? user.photo : null}/>
                            </PopoverTrigger>

                            <PopoverContent width={200}>
                                <PopoverHeader fontWeight='semibold' fontSize={17}>{user.fullName}</PopoverHeader>

                                <PopoverArrow/>

                                <PopoverCloseButton size="25"/>

                                <PopoverFooter display='flex' justifyContent='center'>
                                    <Button colorScheme='red' onClick={exit}>Log out</Button>
                                </PopoverFooter>
                            </PopoverContent>
                        </Popover>

                        :
                        <Link href={"/login"} className={h.header__btn + " btn"}>
                            Login
                        </Link>
                }
            </motion.nav>

        </motion.header>
    )
}
export default Header