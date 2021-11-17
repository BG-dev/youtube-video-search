import React from "react";
import {Header, SearchPanel, VideosBlock} from "../components"
import { useSelector } from "react-redux";

const SearchPage = () => {

    const videos = useSelector(state => state.videos.videos.items);

    return(
        <div className="container">
            <Header/>
            <SearchPanel/>
            <VideosBlock videos={videos} />
        </div>
    );
}

export default SearchPage;