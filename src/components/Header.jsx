import React from "react";

import '../scss/components/header.scss'
import logo from '../assets/logo.svg'

function Header() {
    return(
        <div className="header">
            <div className="header__logo">
                <img src={logo} width={'40px'} alt="logo" className="header__logo-pic" />
            </div>
            <div className="header__title">
                <h1 className="header__title-text">YouTube Video Search</h1>
            </div>
        </div>
    );
}

export default Header;