import React from "react";

import '../scss/components/video-card.scss'

function VideoCard({video}){

    const videoData = video.snippet;

    const videoPreview = videoData.thumbnails.high.url

    return(
        <div className="video-card">
            <div className="video-card__preview">
                <img src={videoPreview} className="video-card__preview-img" alt="Video Preview" />
            </div>
            <div className="video-card__information">
                <div className="video-card__title">
                    <h2 className="video-card__title-text">
                        {videoData && videoData.title}
                        </h2>
                </div>
                <div className="video-card__description">
                    <p className="video-card__description-text">
                        {videoData && videoData.description}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;