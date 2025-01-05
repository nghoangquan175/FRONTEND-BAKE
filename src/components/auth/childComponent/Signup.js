import React from "react"
import { useState } from "react"
import { useEffect } from "react";
import { memo } from "react";
import { toast } from 'react-toastify';

import { SignupUser } from "../../../action/Action";

function Signup({ isLogin, onHandleToggle }) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')

    useEffect(() => {
        setName('')
        setEmail('');
        setPhoneNumber('')
        setPassword('')
        setRepassword('')
    }, [isLogin])

    const defaultStateInput = {
        isValidName: true,
        isValidEmail: true,
        isValidPhoneNumber: true,
        isValidPassword: true,
        isValidRePassword: true,
    }
    const [objCheckInput, setObjCheckInput] = useState(defaultStateInput)

    const regexEmail = (email) => {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        return regex.test(email)
    }

    const validateInput = () => {
        const newStateInput = { ...defaultStateInput }

        if (!name) {
            newStateInput.isValidName = false
            toast.error('Tên trống!')
            // return false
        }

        if (!email) {
            newStateInput.isValidEmail = false
            toast.error('Email trống!')
            // return false
        } else {
            if (!regexEmail(email)) {
                newStateInput.isValidEmail = false
                toast.error('Email sai định dạng!')
                // return false
            }
        }

        if (!phoneNumber) {
            newStateInput.isValidPhoneNumber = false
            toast.error('Số điện thoại trống!')
            // return false
        }

        if (!password) {
            newStateInput.isValidPassword = false
            toast.error('Mật khẩu trống!')
            // return false
        } else {

        }
        if (!repassword) {
            newStateInput.isValidRePassword = false
            toast.error('Nhập lại mật khẩu!')
            // return false

        } else {
            if (!(repassword === password)) {
                newStateInput.isValidRePassword = false
                toast.error('Nhập lại mật khẩu sai!')
                // return false
            }
        }

        setObjCheckInput(newStateInput)
        return Object.values(newStateInput).every(Boolean)
    }

    const handleSignUp = async () => {
        if (!validateInput()) return
        const result = await SignupUser(name, email, phoneNumber, password)
        if (result && result === "1") {
            onHandleToggle()
            toast.info('Mời bạn đăng nhập!')
        }
    }


    return (
        <div className="form-container sign-up-container">
            <form action="#">
                <h1>Tạo tài khoản</h1>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => { setName(event.target.value) }}
                    className={objCheckInput.isValidName ? '' : 'form-control is-invalid'}
                    placeholder="Tên tài khoản"></input>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => { setEmail(event.target.value) }}
                    className={objCheckInput.isValidEmail ? '' : 'form-control is-invalid'}
                    placeholder="Email"></input>
                <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(event) => { setPhoneNumber(event.target.value) }}
                    className={objCheckInput.isValidPhoneNumber ? '' : 'form-control is-invalid'}
                    placeholder="Số điện thoại"></input>
                <input
                    type="password"
                    value={password}
                    onChange={(event) => { setPassword(event.target.value) }}
                    className={objCheckInput.isValidPassword ? '' : 'form-control is-invalid'}
                    placeholder="Mật khẩu"></input>
                <input
                    type="password"
                    value={repassword}
                    onChange={(event) => { setRepassword(event.target.value) }}
                    className={objCheckInput.isValidRePassword ? '' : 'form-control is-invalid'}
                    placeholder="Nhập lại mật khẩu"></input>
                <button type="button" onClick={handleSignUp}>Đăng ký</button>
            </form>
        </div>
    )
}

export default memo(Signup)