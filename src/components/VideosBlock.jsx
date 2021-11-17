import React from "react";
import { VideoCard } from ".";

import '../scss/components/videos-block.scss'

function VideosBlock({videos}){
    return(
        <div className="videos">
            <ul className="videos__list">
                {videos && videos.map((item, index) => {
                    return(
                        <li key={index} className="videos__list-item">
                            <VideoCard video={item}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default VideosBlock;