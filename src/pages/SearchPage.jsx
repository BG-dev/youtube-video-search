import React from "react";
import {Header, SearchPanel, VideosBlock} from "../components"

let SearchPage = () => {

    const videos = [
        {
            title: "MyVideo",
            description: "Lol Kek!"
        },
        {
            title: "Minecraft",
            description: "Mem!"
        }
    ]

    return(
        <div className="container">
            <Header/>
            <SearchPanel/>
            <VideosBlock videos={videos} />
        </div>
    );
}

export default SearchPage;