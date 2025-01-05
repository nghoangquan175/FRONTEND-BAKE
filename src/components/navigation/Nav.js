import React from 'react';
import {
    NavLink
} from "react-router-dom";

import './Nav.scss'
import logo from "../../img/logo1.jpg"

const Nav = ({ username }) => {
    return (

        <header>
            <div class="header__content">
                <NavLink to="/" ><img src={logo} alt="Logo" /></NavLink>
                <div id="mainNav">
                    <li>
                        <NavLink to="/" >Trang Chủ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" >lg</NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" >Giỏ hàng</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" >Danh mục</NavLink>
                    </li>
                    <li>
                        <a href='#'>
                            Hi, {username} <i class="fa-solid fa-chevron-down"></i>
                        </a>
                    </li>
                </div>
                {/* <i id="btn-toggle" class="fa-solid fa-bars" onclick="handleShowMenu(event)"></i> */}
            </div>
        </header>

    );
}

export default Nav;
