import { setVideos } from "../actions/videos";

const KEY = 'AIzaSyBR7afFAcJsM3muYuIioVJF4mO7nHo80sI';

export const fetchVideos = (value) => {
    return dispatch => {
        fetch('https://www.googleapis.com/youtube/v3/search?key=' + KEY
        + "&type=video&part=snippet&maxResults=4&q=" + value)
            .then(res => res.json())
            .then(json => dispatch(setVideos(json)))
    }
}