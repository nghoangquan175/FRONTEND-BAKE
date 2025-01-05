import React, { useEffect } from "react"
import { useState } from "react"
import { LoginUser } from "../../../action/Action"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { memo } from "react"
import { toast } from 'react-toastify';

function Login(props) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const isSuccess = useSelector(state => state.user.isSuccess)
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [isEmail, setIsEmail] = useState(true)

    useEffect(() => {
        setEmail('');
        setPhoneNumber('')
        setPassword('')
    }, [props.isLogin])

    const defaultStateInput = {
        isValidEmail: true,
        isValidPhoneNumber: true,
        isValidPassword: true
    }
    const [objCheckInput, setObjCheckInput] = useState(defaultStateInput)

    const handleChangeMethod = () => {
        setIsEmail(!isEmail)
        setEmail('')
        setPhoneNumber('')
        setPassword('')
    }

    const regexEmail = (email) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

        return regex.test(email)
    }

    const validateInput = () => {
        setObjCheckInput(defaultStateInput)

        if (isEmail) {
            if (!email) {
                setObjCheckInput({
                    ...defaultStateInput,
                    isValidEmail: false
                })
                toast.error('Email trống!')
                return false
            }

            if (!regexEmail(email)) {
                setObjCheckInput({
                    ...defaultStateInput,
                    isValidEmail: false
                })
                toast.error('Email sai định dạng!')
                return false

            }
        } else {
            if (!phoneNumber) {
                setObjCheckInput({
                    ...defaultStateInput,
                    isValidPhoneNumber: false
                })
                toast.error('Số điện thoại trống!')
                return false
            }
        }

        if (!password) {
            setObjCheckInput({
                ...defaultStateInput,
                isValidPassword: false
            })
            toast.error('Mật khẩu trống!')
            return false
        }

        return true
    }

    const handleLogIn = () => {
        if (!validateInput()) return;
        dispatch(LoginUser(email, phoneNumber, password))
        setPassword('')
    }

    useEffect(() => {
        if (isSuccess) navigate('/')
    }, [isSuccess, navigate])


    return (
        <div className="form-container sign-in-container">
            <form action="#">
                <h1>Đăng nhập</h1>
                <input
                    className={(!isEmail ? 'd-none ' : '') + (objCheckInput.isValidEmail ? '' : 'form-control is-invalid')}
                    type="email"
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
                    placeholder="Email"
                    required></input>
                <input
                    className={(isEmail ? 'd-none ' : '') + (objCheckInput.isValidPhoneNumber ? '' : 'form-control is-invalid')}
                    type="tel"
                    value={phoneNumber}
                    onChange={(event) => { setPhoneNumber(event.target.value) }}
                    placeholder="Số điện thoại"
                    required></input>
                <input
                    className={(objCheckInput.isValidPassword ? '' : 'form-control is-invalid')}
                    type="text"
                    value={password}
                    onChange={(event) => { setPassword(event.target.value) }}
                    placeholder="Mật khẩu"
                    required></input>

                <span className="login-method" style={{ cursor: 'pointer' }} onClick={handleChangeMethod}>
                    Đăng nhập bằng <span >{isEmail ? 'Số điện thoại' : 'Email'}</span>
                </span>
                <a href="./">Quên mật khẩu?</a>
                <button type="button" onClick={handleLogIn}>Đăng nhập</button>
            </form>
        </div>
    )
}

export default memo(Login)