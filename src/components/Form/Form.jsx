import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {increment} from "@/redux/reducers/user";

import {useRouter} from "next/router";
import Link from "next/link";

import {useForm} from "react-hook-form";
import {useToast} from "@chakra-ui/react";

import {AiFillEye} from 'react-icons/ai'
import {AiFillEyeInvisible} from 'react-icons/ai'

const Form = () => {

    const {pathname} = useRouter()
    const router = useRouter()
    const [see, setSee] = useState(false)
    const dispatch = useDispatch()
    const toast = useToast()

    const {user} = useSelector(state => state.user)

    useEffect(() => {
        if (user !== null) {
            router.push('/')
        }
    }, [])


    // Validation
    const {
        register,
        reset,
        getValues,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm(
        {mode: "onBlur"}
    )
    // -------------------------------------------------

    const regUser = (data) => {
        axios.post('http://localhost:4080/register', {...data})
            .then((res) => {
                toast({
                    title: 'Account created',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-left',
                })

                localStorage.setItem('user', JSON.stringify({
                    token: res.data.accessToken,
                    ...res.data.user
                }))

                reset()
                router.push('/')
                dispatch(increment(res.data))

            }).catch((err) => {

            console.log(err)

            toast({
                title: "You cant registration",
                description: err.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top-left',
            })
        })
    }

    const logUSer = (data) => {
        axios.post('http://localhost:4080/login', {...data})
            .then((res) => {
                toast({
                    title: 'Account created',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-left',
                })

                localStorage.setItem('user', JSON.stringify({
                    token: res.data.accessToken,
                    ...res.data.user
                }))

                dispatch(increment(res.data))
                reset()
                router.push('/')

            }).catch((err) => {
            toast({
                title: "You cant registration",
                description: err.message,
                status: 'error',
                duration: 5000,
                isClosable: true,
                position: 'top-left',
            })
        })
    }

    const submit = (data) => {
        const {confirm, ...other} = data
        pathname === '/register' ? regUser(other) : logUSer(other)
    }

    return (
        <form className="form" noValidate onSubmit={handleSubmit(submit)}>
            <div className="form__field">
                <h2 className="form__title">
                    {pathname === '/register' ? "Sign up for a new account" : "Log in to your account"}
                </h2>

                <div className="form__content">
                    {
                        pathname === '/register' ?
                            <>
                                <label className="form__content-label">
                                    <span className="form__subtitle">Full name:</span>
                                    <input type="text"
                                           {...register('fullName', {
                                               required: {
                                                   message: "required field", value: true
                                               }
                                           })}
                                           className="form__content-input" placeholder="full name"/>
                                    <p className="form__error">{errors.fullName && errors.fullName.message}</p>
                                </label>

                                <label className="form__content-label">
                                    <span className="form__subtitle">Photo:</span>
                                    <input type="text" className="form__content-input"{...register('photo')} placeholder="url"/>
                                </label>
                            </> : ''
                    }
                    <label className="form__content-label">
                        <span className="form__subtitle">Your email:</span>
                        <input type="email"
                               {...register('email', {
                                   required: {
                                       message: "Email field is required",
                                       value: true
                                   },
                                   minLength: {
                                       message: "Minimum length 8",
                                       value: 8
                                   },
                                   pattern: {
                                       message: "Your email is wrong",
                                       value: /^[^]+@[^ ]+\.[a-z]{2,5}$/
                                   }
                               })} className="form__content-input" placeholder="email"/>
                        <p className="form__error">{errors.email && errors.email.message}</p>
                    </label>

                    <label className="form__content-label">
                        <span className="form__subtitle">Password:</span>
                        <input type={see ? "text" : "password"}
                               {...register('password', {
                                   required: {
                                       message: "Password field is required",
                                       value: true
                                   },
                                   pattern: {
                                       value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g,
                                       message: "Your password is so easy"
                                   }
                               })} className="form__content-input" placeholder="password"/>
                        {
                            see ? <AiFillEyeInvisible className="form__eye" fill="#425066" size={20} onClick={() => setSee(false)}/>
                                :
                                <AiFillEye className="form__eye" fill="#425066" size={20} onClick={() => setSee(true)}/>
                        }
                        <p className="form__error">{errors.password && errors.password.message}</p>
                    </label>
                    {
                        pathname === '/register' ?
                            <label className="form__content-label">
                                <span className="form__subtitle">Confirm your password:</span>
                                <input type={see ? "text" : "password"} className="form__content-input" placeholder="confirm"
                                       {...register('confirm', {
                                           required: {
                                               message: "Confirm your password",
                                               value: true
                                           },
                                           validate: (v) => {
                                               if (getValues('password') !== v) {
                                                   return "Is not a same"
                                               }
                                           }})}/>
                                {
                                    see ? <AiFillEyeInvisible className="form__eye" fill="#663333" size={20} onClick={() => setSee(false)}/>
                                        :
                                        <AiFillEye className="form__eye" fill="#663333" size={20} onClick={() => setSee(true)}/>
                                }
                                <p className="form__error">{errors.confirm && errors.confirm.message}</p>
                            </label> : ''
                    }
                </div>

                <div className="form__btn">
                    <button className="btn form__btn-detail" type="submit">
                        {
                            pathname === "/register" ? "Sigh up" : "Log in"
                        }
                    </button>
                </div>
                {
                    pathname === '/register' ?
                        <Link href={"/login"} className="form__link">
                            Do you already have an account?
                        </Link>
                        :
                        <Link href={"/register"} className="form__link">
                            Are you a new user?
                        </Link>
                }
            </div>
        </form>
    )
}

export default Form