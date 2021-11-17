import { SET_VIDEOS_ACTION } from "../actions/actions";

const initialState = {
    videos: []
}

const videos = (state = initialState, action) => {
    if(action.type === SET_VIDEOS_ACTION){
        return {
            ...state,
            videos: action.payload
        };
    }
    return state;
}

export default videos