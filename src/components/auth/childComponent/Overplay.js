import React from "react";

function Overplay({ onHandleToggle }) {

    return <>
        <div className="overplay-container">
            <div className="overplay">
                <div className="overplay-panel overplay-right">
                    <h1>Chào mừng trở lại!</h1>
                    <p>
                        Rất vui khi được tiếp tục phục vụ bạn.
                    </p>
                    <button className="ghost" id="logIn" onClick={() => onHandleToggle()}>Đăng ký</button>
                </div>
                <div className="overplay-panel overplay-left">
                    <h1>Chào bạn!</h1>
                    <p>
                        Nhập thông tin cá nhân của bạn và bắt đầu cùng chúng tôi.
                    </p>
                    <button className="ghost" id="signUp" onClick={() => onHandleToggle()}>Đăng nhập</button>
                </div>
            </div>
        </div>
    </>
}

export default Overplay