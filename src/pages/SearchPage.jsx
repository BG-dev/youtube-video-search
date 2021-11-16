import React from "react";
import { Button } from "../components"

function SearchPage(){

    const onClickButton = () => {
        console.log("lol!");
    }

    return(
        <div className="container">
            <div className="header">
                <div className="header__title">
                    <h1 className="header__title-text">YouTube Video Search</h1>
                </div>
            </div>
            <div className="search">
                <form className="search__form">
                    <input type="text" className="search__form-input" />
                    <Button 
                        onClick = {() => onClickButton()}
                        className = "search__form-button"
                    >Search</Button>
                </form>
            </div>
        </div>
    );
}

export default SearchPage;