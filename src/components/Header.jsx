import React from "react";

import '../scss/components/header.scss'

function Header() {
    return(
        <div className="header">
            <div className="header__title">
                <h1 className="header__title-text">YouTube Video Search</h1>
            </div>
        </div>
    );
}

export default Header;