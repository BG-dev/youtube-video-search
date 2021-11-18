import React from "react";
import {Header, SearchPanel, VideosBlock} from "../components"
import { useSelector } from "react-redux";

const SearchPage = () => {

    const videos = useSelector(state => state.videos.videos);

    return(
        <div className="container">
            <Header/>
            <SearchPanel videos={videos} />
            <VideosBlock videos={videos} />
        </div>
    );
}

export default SearchPage;