import React from "react";

import '../scss/components/video-card.scss'

function VideoCard({video}){
    return(
        <div className="video-card">
            <div className="video-card__preview">
                <img src="" className="video-card__preview-img" alt="Video Preview" />
            </div>
            <div className="video-card__information">
                <div className="video-card__title">
                    <h2 className="video-card__title-text">
                        {video && video.title}
                        </h2>
                </div>
                <div className="video-card__description">
                    <p className="video-card__description-text">
                        {video && video.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;