import { setVideos } from "../actions/videos";
import { setNextToken } from "../actions/token";

const KEY = 'AIzaSyDGuSsJwDr3-hbv-KLbOxAcqY3GmsliIiM';

export const fetchVideos = (value, token = null, videos = []) => {
    return dispatch => {
        const nextToken = token !== null ? '&pageToken=' + token : '';
        fetch('https://www.googleapis.com/youtube/v3/search?key=' + KEY
        + "&type=video&part=snippet&maxResults=12&q=" + value + nextToken)
            .then(res => res.json())
            .then(json => {
                console.log(token)
                dispatch(setNextToken(json.nextPageToken))
                dispatch(setVideos([...videos, ...json.items]))
            })
    }
}