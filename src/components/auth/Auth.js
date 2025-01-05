import React from 'react';
import { useState, useCallback } from 'react'

import Login from "./childComponent/Login"
import Signup from "./childComponent/Signup"
import Overplay from "./childComponent/Overplay"

import "./Auth.scss"

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true)

    const handleToggle = useCallback(() => {
        setIsLogin(!isLogin)
    }, [isLogin])

    return (
        <div id="auth-container">
            <div className={`container ${isLogin ? `` : `right-panel-active`}`} id="container">
                <Login isLogin={isLogin}></Login>
                <Signup isLogin={isLogin} onHandleToggle={handleToggle}></Signup>
                <Overplay onHandleToggle={handleToggle}></Overplay>
            </div>
        </div>
    );
}

export default Auth;
