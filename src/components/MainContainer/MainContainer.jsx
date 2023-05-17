import {useEffect} from "react";

import {useDispatch} from "react-redux";
import {increment} from "@/redux/reducers/user";

import Head from "next/head";
import Header from "@/components/Header/Header";

const MainContainer = ({children, keywords, title}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(increment(JSON.parse(localStorage.getItem('user'))))
    }, [])

    return (
        <>
            <Head>
                <meta keywords={"Law, Law Firm" + keywords}></meta>
                <title>{title}</title>
            </Head>

            <Header/>

            <main>
                {children}
            </main>
        </>
    )
}

export default MainContainer