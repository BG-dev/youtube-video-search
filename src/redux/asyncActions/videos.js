import { setVideos } from "../actions/videos";
import { setNextToken } from "../actions/token";

const KEY = 'AIzaSyDVa_upXJK9Tc9fTXDRiH-ztL8-PiQd4cc';

export const fetchVideos = (value, token = null, videos = []) => {
    return dispatch => {
        const nextToken = token !== null ? '&pageToken=' + token : '';
        fetch('https://www.googleapis.com/youtube/v3/search?key=' + KEY
        + "&type=video&part=snippet&maxResults=12&q=" + value + nextToken)
            .then(res => res.json())
            .then(json => {
                dispatch(setNextToken(json.nextPageToken))
                dispatch(setVideos([...videos, ...json.items]))
            })
    }
}